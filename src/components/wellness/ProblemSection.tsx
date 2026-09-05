import { SectionHeading } from "./SectionHeading";

const problems = [
  {
    title: "Too Much Information",
    body: "There is endless wellness information online, making it difficult to know where to begin.",
  },
  {
    title: "Lack of Structure",
    body: "Knowing what to do is different from having a practical system to follow.",
  },
  {
    title: "Inconsistent Routines",
    body: "Building everyday consistency can be difficult without simple planning tools.",
  },
  {
    title: "Generic Advice",
    body: "People often need practical resources that fit real-life routines.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <SectionHeading
        eyebrow="The Challenge"
        title="Wellness Information Is Everywhere. A Clear Path Isn't."
      />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {problems.map((problem, index) => (
          <article
            key={problem.title}
            className="min-w-0 rounded-xl border border-border bg-card p-6 transition-shadow duration-300 hover:shadow-soft"
          >
            <span className="font-display text-sm text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-3 text-lg leading-snug text-primary">{problem.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{problem.body}</p>
          </article>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl leading-snug text-primary sm:text-2xl">
        That's why Wellness Vault brings practical wellness resources together in one organized
        place.
      </p>
    </section>
  );
}
