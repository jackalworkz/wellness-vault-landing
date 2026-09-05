import { SectionHeading } from "./SectionHeading";

const audiences = [
  { title: "Getting Started", body: "For people who want a clearer starting point." },
  { title: "Building Better Routines", body: "For people who want more structure and organization." },
  {
    title: "Feeling Overwhelmed",
    body: "For people who want wellness information presented more simply.",
  },
  { title: "Planning & Tracking", body: "For people who enjoy practical planners and trackers." },
];

export function WhoItsFor() {
  return (
    <section id="who-its-for" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading eyebrow="Who It's For" title="Made for Real-Life Wellness" />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((audience) => (
          <article
            key={audience.title}
            className="min-w-0 rounded-xl border border-border bg-card p-6 rule-gold"
          >
            <h3 className="text-lg leading-snug text-primary">{audience.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{audience.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
