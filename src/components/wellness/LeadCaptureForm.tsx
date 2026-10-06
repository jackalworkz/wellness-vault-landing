import { useRef, useState } from "react";
import { z } from "zod";
import { Check, Loader2, Lock } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { TextField } from "./FormField";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name (at least 2 characters)." })
    .max(80, { message: "Please use a shorter name (80 characters or fewer)." }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address." })
    .max(180, { message: "Please enter a shorter email address." }),
});

type Errors = Partial<Record<"name" | "email", string>>;

/** Shape prepared for a future email/CRM integration. */
export type LeadRequest = { name: string; email: string; resource: string; created_at: string };

export function LeadCaptureForm({
  resource,
  submitLabel,
  successTitle,
  successBody,
  onDone,
}: {
  resource: string;
  submitLabel: string;
  successTitle: string;
  successBody: string;
  onDone: () => void;
}) {
  const [values, setValues] = useState({ name: "", email: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const lockRef = useRef(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lockRef.current) return;
    const honeypot = new FormData(event.currentTarget).get("website");
    if (typeof honeypot === "string" && honeypot) return;

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
    const request: LeadRequest = { ...parsed.data, resource, created_at: new Date().toISOString() };
    // No email service is connected yet — this is the single hand-off point.
    await new Promise((resolve) => setTimeout(resolve, 800));
    if (import.meta.env.DEV) console.info("[lead request]", request);
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="text-center" role="status">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-secondary text-primary">
          <Check className="size-6" aria-hidden="true" />
        </span>
        <h3 className="mt-5 text-balance text-xl leading-snug text-primary">{successTitle}</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">{successBody}</p>
        <CTAButton full className="mt-6" onClick={onDone}>
          Continue Exploring Wellness Vault
        </CTAButton>
      </div>
    );
  }

  const set = (key: "name" | "email") => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: undefined }));
  };
  const submitting = status === "submitting";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <TextField
        id={`${resource}-name`}
        label="Name"
        placeholder="Your full name"
        autoComplete="name"
        required
        value={values.name}
        error={errors.name}
        onChange={set("name")}
      />
      <TextField
        id={`${resource}-email`}
        label="Email"
        type="email"
        inputMode="email"
        placeholder="you@example.com"
        autoComplete="email"
        required
        value={values.email}
        error={errors.email}
        onChange={set("email")}
      />
      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${resource}-website`}>Website</label>
        <input id={`${resource}-website`} name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <CTAButton type="submit" size="lg" full disabled={submitting} aria-busy={submitting}>
        {submitting ? (
          <>
            <Loader2 className="size-4 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          submitLabel
        )}
      </CTAButton>
      <p className="flex items-start justify-center gap-1.5 text-center text-xs leading-relaxed text-muted-foreground">
        <Lock className="mt-0.5 size-3 shrink-0" aria-hidden="true" />
        We only use your details to send what you asked for. No spam, and you can opt out anytime.
      </p>
    </form>
  );
}
