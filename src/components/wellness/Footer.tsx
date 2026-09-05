import { NAV_LINKS } from "./Header";

const legal = [
  { label: "Privacy Policy", href: "#faq" },
  { label: "Terms", href: "#faq" },
  { label: "Disclaimer", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div className="min-w-0">
          <p className="font-display text-xl">Wellness Vault</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/70">
            Practical wellness guides, educational resources, planning tools, and trackers brought
            together in one organized place.
          </p>
        </div>
        <nav aria-label="Footer" className="min-w-0">
          <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-sage">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm text-ivory/80 transition-colors hover:text-ivory">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="min-w-0">
          <h2 className="font-sans text-xs font-bold uppercase tracking-widest text-sage">Legal</h2>
          <ul className="mt-4 space-y-2.5">
            {legal.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="text-sm text-ivory/80 transition-colors hover:text-ivory">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/15">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <p className="text-xs text-ivory/60">
            © 2026 Wellness Vault. All rights reserved. Educational wellness resources only — not
            medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
