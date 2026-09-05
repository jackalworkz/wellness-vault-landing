import { CTAButton } from "./CTAButton";
import { useConsultation } from "./consultation-context";

export function FinalCTA() {
  const { openConsultation, openResource } = useConsultation();

  return (
    <section id="consultation" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="rounded-2xl border border-border bg-sage-soft/70 px-6 py-14 text-center sm:px-10 lg:py-20">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl leading-[1.15] text-primary sm:text-4xl lg:text-[2.75rem]">
          Your Wellness Journey Can Start With One Simple Step.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Explore a practical approach to learning, planning, and building healthier everyday
          routines.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <CTAButton
            size="lg"
            data-action="book-consultation"
            onClick={() => openConsultation("final_cta")}
          >
            Book a Free Consultation
          </CTAButton>
          <CTAButton size="lg" variant="outline" onClick={() => openResource("guide", "final_cta")}>
            Get the Free Wellness Guide
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
