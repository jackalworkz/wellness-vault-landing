import { ShieldCheck, HandHeart, Layers, MessageCircle } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const values = [
  {
    icon: Layers,
    title: "Everything in one place",
    body: "Guides, planners, recipes, and trackers organized together, so you spend less time searching.",
  },
  {
    icon: HandHeart,
    title: "Welcoming and judgment-free",
    body: "Resources written for real routines, wherever you're starting from.",
  },
  {
    icon: ShieldCheck,
    title: "Honest about what it is",
    body: "Educational wellness resources — no medical claims and no promised outcomes.",
  },
  {
    icon: MessageCircle,
    title: "A person to talk to",
    body: "A free introductory consultation if you'd like help choosing where to begin.",
  },
];

export function Testimonials() {
  return (
    <section id="why-people-choose" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading eyebrow="Our Approach" title="Why People Choose Wellness Vault" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, body }) => (
          <article key={title} className="min-w-0 rounded-xl border border-border bg-card p-6 rule-gold">
            <Icon className="size-5 text-sage" aria-hidden="true" />
            <h3 className="mt-4 text-lg leading-snug text-primary">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
