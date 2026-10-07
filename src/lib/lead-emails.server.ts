// Resend integration — inactive until these secrets are set:
// RESEND_API_KEY, LEAD_FROM_EMAIL (verified sender on your Resend domain), LEAD_ADMIN_EMAIL.
type Lead = {
  id: string;
  lead_type: string;
  name: string;
  email: string;
  phone: string | null;
  reason: string | null;
};

const labels: Record<string, string> = {
  consultation: "Free Consultation",
  guide: "Free Wellness Guide",
  ebook: "Free Wellness eBook",
  session: "Free Wellness Session",
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

async function send(apiKey: string, payload: Record<string, unknown>, idempotencyKey: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) console.error("[resend]", res.status, await res.text());
}

export async function sendLeadEmails(lead: Lead) {
  const apiKey = process.env["RESEND_API_KEY"];
  const from = process.env["LEAD_FROM_EMAIL"];
  const admin = process.env["LEAD_ADMIN_EMAIL"];
  if (!apiKey || !from) return; // Not configured yet — lead is still stored.
  const label = labels[lead.lead_type] ?? lead.lead_type;

  if (admin) {
    const rows = [
      ["Type", label],
      ["Name", lead.name],
      ["Email", lead.email],
      ...(lead.phone ? [["Phone", lead.phone]] : []),
      ...(lead.reason ? [["Why", lead.reason]] : []),
    ];
    await send(
      apiKey,
      {
        from,
        to: [admin],
        reply_to: lead.email,
        subject: `New lead: ${label} — ${lead.name}`,
        html: rows.map(([k, v]) => `<p><strong>${k}:</strong> ${esc(v!)}</p>`).join(""),
      },
      `lead-admin-${lead.id}`,
    );
  }

  await send(
    apiKey,
    {
      from,
      to: [lead.email],
      subject: `We've received your ${label} request`,
      html: `<p>Hi ${esc(lead.name)},</p><p>Thank you — your ${esc(label)} request has been received. We'll be in touch with the next steps.</p><p>Wellness Vault</p>`,
    },
    `lead-user-${lead.id}`,
  );
}
