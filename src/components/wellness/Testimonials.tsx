import { SectionHeading } from "./SectionHeading";

export function Testimonials() {
  return (
    <section id="community" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        eyebrow="Community"
        title="What Our Community Says"
        description="This space is reserved for real feedback from Wellness Vault members. Nothing here is placeholder-free yet — genuine testimonials will be added once they're collected."
      />
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {[1, 2, 3].map((slot) => (
          <article
            key={slot}
            className="min-w-0 rounded-xl border border-dashed border-sage bg-card p-6"
          >
            <p className="text-xs font-bold uppercase tracking-widest text-sage">
              Testimonial slot {slot}
            </p>
            <blockquote className="mt-4 text-base leading-relaxed text-primary/60">
              Awaiting a real member testimonial.
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">Name and details to be added</p>
          </article>
        ))}
      </div>
    </section>
  );
}
