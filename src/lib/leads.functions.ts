import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const clean = (s: string) => s.replace(/[\u0000-\u001F\u007F<>]/g, " ").replace(/\s+/g, " ").trim();

const base = {
  name: z.string().transform(clean).pipe(z.string().min(2).max(80)),
  email: z.string().trim().toLowerCase().pipe(z.string().email().max(180)),
};

const leadSchema = z.discriminatedUnion("lead_type", [
  z.object({
    lead_type: z.literal("consultation"),
    ...base,
    phone: z.string().trim().regex(/^\+?[0-9\s()-]{7,20}$/),
    reason: z.string().transform(clean).pipe(z.string().min(10).max(1000)),
  }),
  z.object({ lead_type: z.enum(["guide", "ebook", "session"]), ...base }),
]);

export type LeadInput = z.input<typeof leadSchema>;

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");

    // Duplicate guard: same email + type within the last 10 minutes counts as already received.
    const since = new Date(Date.now() - 10 * 60 * 1000).toISOString();
    const { data: recent, error: dupError } = await supabaseAdmin
      .from("leads")
      .select("id")
      .eq("email", data.email)
      .eq("lead_type", data.lead_type)
      .gte("created_at", since)
      .limit(1);
    if (dupError) {
      console.error("[leads] duplicate check failed", dupError);
      return { ok: false as const };
    }
    if (recent && recent.length > 0) return { ok: true as const, duplicate: true };

    const row = {
      lead_type: data.lead_type,
      name: data.name,
      email: data.email,
      phone: "phone" in data ? data.phone : null,
      reason: "reason" in data ? data.reason : null,
    };
    const { data: inserted, error } = await supabaseAdmin.from("leads").insert(row).select("id").single();
    if (error || !inserted) {
      console.error("[leads] insert failed", error);
      return { ok: false as const };
    }

    const { sendLeadEmails } = await import("./lead-emails.server");
    await sendLeadEmails({ ...row, id: inserted.id }).catch((e) => console.error("[leads] email failed", e));

    return { ok: true as const, duplicate: false };
  });
