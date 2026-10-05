import { CTAButton } from "./CTAButton";
import { useConsultation } from "./consultation-context";

/** Compact consultation prompt reused on inner pages. */
export function ConsultationCTA({ source, title = "Not sure where to start?" }: { source: string; title?: string }) {
  const { openConsultation } = useConsultation();
  return (
    <aside className="mt-12 rounded-xl border border-border bg-card p-6 sm:p-8">
      <h2 className="text-xl text-primary sm:text-2xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        Book a free introductory consultation and we'll help you find the right next step.
      </p>
      <CTAButton
        className="mt-5 w-full sm:w-auto"
        data-action="book-consultation"
        onClick={() => openConsultation(source)}
      >
        Book a Free Consultation
      </CTAButton>
    </aside>
  );
}
