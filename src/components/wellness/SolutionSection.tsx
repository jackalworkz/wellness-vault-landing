import { GraduationCap, ClipboardList, Sprout } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    icon: GraduationCap,
    title: "Learn",
    body: "Understand wellness concepts through simple educational resources.",
  },
  {
    icon: ClipboardList,
    title: "Plan",
    body: "Use practical planners, guides, and worksheets to organize your routines.",
  },
  {
    icon: Sprout,
    title: "Build",
    body: "Turn what you learn into practical everyday habits and routines.",
  },
];

export function SolutionSection() {
  return (
    <section id="about" className="bg-sage-soft/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="The Vault"
          title="Welcome to Wellness Vault"
          description="A curated wellness resource collection designed to make learning, planning, and building healthier everyday routines simpler."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="min-w-0 rounded-xl border border-border bg-card p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="flex size-11 items-center justify-center rounded-md bg-secondary text-primary">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
