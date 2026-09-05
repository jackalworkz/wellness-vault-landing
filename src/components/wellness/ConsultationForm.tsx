import { useRef, useState } from "react";
import { z } from "zod";
import { Loader2, Check } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { TextField, TextAreaField } from "./FormField";
import { trackEvent } from "@/lib/analytics";
import { useConsultation } from "./consultation-context";

export const SUGGESTED_REASON =
  "I'd like to discuss my wellness goals, understand where I should start, and learn which Wellness Vault resources may be most helpful for me.";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name (at least 2 characters)." })
    .max(80, { message: "Please use a shorter name (80 characters or fewer)." }),
  phone: z
    .string()
    .trim()
    .min(7, { message: "Please enter a valid phone number, including your country code." })
    .max(20, { message: "Please enter a valid phone number." })
    .regex(/^\+?[0-9\s()-]{7,20}$/, {
      message: "Please enter a valid phone number, including your country code.",
    }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(180, { message: "Please enter a shorter email address." }),
  reason: z
    .string()
    .trim()
    .min(10, { message: "Please tell us a little about what you'd like to discuss." })
    .max(1000, { message: "Please keep this under 1000 characters." }),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

/** Shape prepared for a future CRM/backend integration. */
export type ConsultationRequest = {
  name: string;
  phone: string;
  email: string;
  reason: string;
  source: string;
  created_at: string;
  status: "new";
};

export function ConsultationForm({ source, onDone }: { source: string; onDone: () => void }) {
  const { openResource } = useConsultation();
  const [values, setValues] = useState({
    name: "",
    phone: "",
    email: "",
    reason: SUGGESTED_REASON,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const startedRef = useRef(false);
  const lockRef = useRef(false);

  const update = (key: keyof typeof values) => (value: string) => {
    if (!startedRef.current) {
      startedRef.current = true;
      trackEvent("consultation_form_started", { source });
    }
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lockRef.current || status === "submitting" || status === "success") return;

    // Honeypot: silently ignore bot submissions.
    const honeypot = new FormData(event.currentTarget).get("company");
    if (typeof honeypot === "string" && honeypot.length > 0) return;

    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!next[key]) next[key] = issue.message;
      }
      setErrors(next);
      return;
    }

    lockRef.current = true;
    setStatus("submitting");
    const request: ConsultationRequest = {
      ...parsed.data,
      source,
      created_at: new Date().toISOString(),
      status: "new",
    };

    try {
      // No CRM/backend is connected yet — this is the single hand-off point.
      await new Promise((resolve) => setTimeout(resolve, 900));
      if (import.meta.env.DEV) console.info("[consultation request]", request);
      setStatus("success");
      trackEvent("consultation_form_submitted", { source });
    } catch {
      setStatus("error");
      lockRef.current = false;
    }
  }

  if (status === "success") {
    return (
      <div className="text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-balance text-2xl leading-snug text-primary">
          Thank You — Your Consultation Request Has Been Received.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
          We've received your request. We'll review your information and provide the next steps.
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <CTAButton full onClick={onDone}>
            Continue Exploring Wellness Vault
          </CTAButton>
          <CTAButton
            variant="outline"
            full
            onClick={() => {
              onDone();
              openResource("guide", "consultation_success");
            }}
          >
            Get the Free Wellness Guide
          </CTAButton>
        </div>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <TextField
        id="consult-name"
        label="Name"
        placeholder="Your full name"
        autoComplete="name"
        required
        value={values.name}
        error={errors.name}
        onChange={(e) => update("name")(e.target.value)}
      />
      <TextField
        id="consult-phone"
        label="Phone No"
        type="tel"
        inputMode="tel"
        placeholder="Your phone number"
        autoComplete="tel"
        required
        value={values.phone}
        error={errors.phone}
        onChange={(e) => update("phone")(e.target.value)}
      />
      <TextField
        id="consult-email"
        label="Email"
        type="email"
        inputMode="email"
        placeholder="you@example.com"
        autoComplete="email"
        required
        value={values.email}
        error={errors.email}
        onChange={(e) => update("email")(e.target.value)}
      />
      <TextAreaField
        id="consult-reason"
        label="Why do you want to book a consultation?"
        hint="We've suggested a reason — feel free to edit or replace it."
        placeholder="Tell us what you'd like help with or what you'd like to discuss."
        required
        value={values.reason}
        error={errors.reason}
        onChange={(e) => update("reason")(e.target.value)}
      />

      <div className="hidden" aria-hidden="true">
        <label htmlFor="consult-company">Company</label>
        <input id="consult-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p role="alert" className="text-sm font-bold text-destructive">
          Something went wrong sending your request. Please try again in a moment.
        </p>
      ) : null}

      <CTAButton type="submit" size="lg" full disabled={submitting} aria-busy={submitting}>
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending your request…
          </>
        ) : (
          "Request My Free Consultation"
        )}
      </CTAButton>
      <p className="text-center text-xs text-muted-foreground">
        Free introductory consultation • No obligation
      </p>
    </form>
  );
}
