import { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "w-full rounded-md border bg-card px-3 py-3 font-sans text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-primary";

function Shell({
  id,
  label,
  error,
  hint,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="block text-sm font-bold text-primary">
        {label} <span aria-hidden="true">*</span>
      </label>
      {hint ? (
        <p id={`${id}-hint`} className="mt-1 text-xs text-muted-foreground">
          {hint}
        </p>
      ) : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-xs font-bold text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const TextField = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement> & { id: string; label: string; error?: string; hint?: string }
>(({ id, label, error, hint, className, ...props }, ref) => (
  <Shell id={id} label={label} error={error} hint={hint}>
    <input
      id={id}
      ref={ref}
      aria-invalid={error ? true : undefined}
      aria-describedby={cn(error && `${id}-error`, hint && `${id}-hint`) || undefined}
      className={cn(base, error && "border-destructive", className)}
      {...props}
    />
  </Shell>
));
TextField.displayName = "TextField";

export const TextAreaField = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    id: string;
    label: string;
    error?: string;
    hint?: string;
  }
>(({ id, label, error, hint, className, ...props }, ref) => (
  <Shell id={id} label={label} error={error} hint={hint}>
    <textarea
      id={id}
      ref={ref}
      rows={4}
      aria-invalid={error ? true : undefined}
      aria-describedby={cn(error && `${id}-error`, hint && `${id}-hint`) || undefined}
      className={cn(base, "resize-y leading-relaxed", error && "border-destructive", className)}
      {...props}
    />
  </Shell>
));
TextAreaField.displayName = "TextAreaField";
