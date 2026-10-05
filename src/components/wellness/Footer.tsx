import { Link } from "@tanstack/react-router";
import { NAV_LINKS } from "./Header";

const company = [
  { label: "About", to: "/about" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
] as const;

const legal = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Disclaimer", to: "/disclaimer" },
] as const;

const linkClass = "text-sm text-ivory/80 transition-colors hover:text-ivory";
const headingClass = "font-sans text-xs font-bold uppercase tracking-widest text-sage";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-[1.6fr_1fr_1fr_1fr] lg:px-8">
        <div className="min-w-0 sm:col-span-2 lg:col-span-1">
          <p className="font-display text-xl">Wellness Vault</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/70">
            Practical wellness guides, educational resources, planning tools, and trackers brought
            together in one organized place.
          </p>
        </div>
        <nav aria-label="Footer explore" className="min-w-0">
          <h2 className={headingClass}>Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer company" className="min-w-0">
          <h2 className={headingClass}>Company</h2>
          <ul className="mt-4 space-y-2.5">
            {company.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Footer legal" className="min-w-0">
          <h2 className={headingClass}>Legal</h2>
          <ul className="mt-4 space-y-2.5">
            {legal.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className={linkClass}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
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
