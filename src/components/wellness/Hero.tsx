import heroImage from "@/assets/hero-wellness.jpg";
import { CTAButton } from "./CTAButton";
import { useConsultation } from "./consultation-context";

export function Hero() {
  const { openConsultation, openResource } = useConsultation();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[60%] bg-sage-soft/50" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="min-w-0">
          <p className="eyebrow">Wellness, Organized.</p>
          <h1 className="mt-4 text-balance font-display text-[2rem] leading-[1.12] text-primary sm:text-5xl lg:text-[3.5rem]">
            A Simpler Way to Build Healthier Everyday Habits.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Discover practical wellness resources, educational guides, and simple tools designed to
            help you create more organized routines that fit real life.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CTAButton
              size="lg"
              data-action="book-consultation"
              onClick={() => openConsultation("hero")}
              className="sm:w-auto"
            >
              Book a Free Consultation
            </CTAButton>
            <CTAButton size="lg" variant="outline" onClick={() => openResource("guide", "hero")}>
              Get the Free Wellness Guide
            </CTAButton>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Educational wellness resources • Not medical advice
          </p>
        </div>

        <div className="relative min-w-0">
          <div className="overflow-hidden rounded-xl bg-card shadow-lift">
            <img
              src={heroImage}
              alt="An open wellness planner, a tablet showing a calm wellness dashboard, herbal tea and eucalyptus on a warm ivory surface"
              width={1408}
              height={1200}
              fetchPriority="high"
              decoding="async"
              className="aspect-4/3 size-full object-cover lg:aspect-square"
            />
          </div>
          <div className="absolute -bottom-5 left-4 hidden rounded-lg border border-border bg-card px-5 py-4 shadow-soft sm:block">
            <p className="font-display text-base text-primary">Learn · Plan · Build</p>
            <p className="mt-1 text-xs text-muted-foreground">One organized wellness collection</p>
          </div>
        </div>
      </div>
    </section>
  );
}
