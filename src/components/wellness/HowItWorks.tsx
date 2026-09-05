import { SectionHeading } from "./SectionHeading";

const steps = [
  { number: "01", title: "Explore", body: "Find a resource that matches your current needs." },
  { number: "02", title: "Learn", body: "Use practical educational resources." },
  { number: "03", title: "Plan", body: "Turn information into an organized routine." },
  { number: "04", title: "Build", body: "Continue developing consistent everyday habits." },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading eyebrow="How It Works" title="A Simple Way to Get Started" />
      <ol className="relative mt-12 grid gap-8 lg:grid-cols-4 lg:gap-6">
        <span
          className="absolute left-[0.6875rem] top-2 bottom-2 w-px bg-border lg:left-0 lg:right-0 lg:top-[0.6875rem] lg:bottom-auto lg:h-px lg:w-full"
          aria-hidden="true"
        />
        {steps.map((step) => (
          <li key={step.number} className="relative flex min-w-0 gap-4 lg:flex-col lg:gap-0">
            <span className="mt-1 size-6 shrink-0 rounded-full border border-sage bg-background lg:mt-0" aria-hidden="true">
              <span className="mx-auto mt-[0.4375rem] block size-2 rounded-full bg-primary" />
            </span>
            <div className="min-w-0 lg:mt-6">
              <span className="font-display text-sm text-gold">{step.number}</span>
              <h3 className="mt-1 text-lg text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
