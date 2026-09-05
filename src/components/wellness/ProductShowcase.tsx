import { SectionHeading } from "./SectionHeading";

const items = [
  { title: "Wellness Guide", ratio: "aspect-3/4" },
  { title: "Planner", ratio: "aspect-3/4" },
  { title: "Recipe Pages", ratio: "aspect-3/4" },
  { title: "Tracker", ratio: "aspect-3/4" },
  { title: "Educational Pages", ratio: "aspect-3/4" },
  { title: "Worksheets", ratio: "aspect-3/4" },
];

export function ProductShowcase() {
  return (
    <section id="showcase" className="bg-sage-soft/50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Inside the Collection"
          title="A Closer Look at the Resources"
          description="Preview frames shown below — real resource visuals will appear here once they're supplied."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <figure key={item.title} className="min-w-0">
              <div
                className={`${item.ratio} flex items-center justify-center rounded-lg border border-dashed border-sage bg-card p-3 text-center`}
              >
                <span className="font-display text-xs text-primary/70 sm:text-sm">Preview</span>
              </div>
              <figcaption className="mt-3 text-xs font-bold text-primary sm:text-sm">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
