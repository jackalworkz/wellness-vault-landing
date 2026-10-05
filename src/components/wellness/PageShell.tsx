import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="bg-sage-soft/50">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-3 text-balance text-3xl leading-[1.15] text-primary sm:text-5xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{intro}</p>
          ) : null}
        </div>
      </section>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">{children}</div>
    </>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-8 text-base leading-relaxed text-foreground/85 [&_h2]:text-2xl [&_h2]:text-primary [&_h2]:leading-snug [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-5">
      {children}
    </div>
  );
}

export function pageHead(path: string, title: string, description: string) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: path },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}
