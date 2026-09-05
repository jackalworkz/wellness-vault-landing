import { Apple, Activity, CalendarCheck, LineChart, BookOpen, Leaf } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const resources = [
  {
    icon: Apple,
    title: "Nutrition",
    body: "Practical meal-planning resources, healthy recipes, and food education.",
  },
  { icon: Activity, title: "Movement", body: "Simple movement and home-friendly wellness resources." },
  {
    icon: CalendarCheck,
    title: "Planning",
    body: "Organize routines using structured planners and worksheets.",
  },
  { icon: LineChart, title: "Tracking", body: "Reflect on habits, consistency, and personal progress." },
  { icon: BookOpen, title: "Education", body: "Explore easy-to-understand wellness education." },
  { icon: Leaf, title: "Wellness", body: "Build a more organized approach to everyday wellbeing." },
];

export function VaultSection() {
  return (
    <section id="whats-inside" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        eyebrow="What's Inside"
        title="What's Inside the Vault"
        description="Six practical areas that work together to keep your everyday wellness organized."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map(({ icon: Icon, title, body }) => (
          <article
            key={title}
            className="group min-w-0 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sage hover:shadow-soft"
          >
            <Icon className="size-5 text-sage transition-colors group-hover:text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-lg text-primary">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
