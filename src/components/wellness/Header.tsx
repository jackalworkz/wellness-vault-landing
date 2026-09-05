import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "./CTAButton";
import { useConsultation } from "./consultation-context";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { label: "Home", href: "#top" },
  { label: "What's Inside", href: "#whats-inside" },
  { label: "Free Resources", href: "#free-resources" },
  { label: "Consultation", href: "#consultation" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const { openConsultation } = useConsultation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-18 lg:px-8">
        <a
          href="#top"
          className="min-w-0 font-display text-lg font-semibold tracking-tight text-primary sm:text-xl"
        >
          Wellness Vault
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-bold text-foreground/80 transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <CTAButton
            size="sm"
            className="hidden sm:inline-flex"
            data-action="book-consultation"
            onClick={() => openConsultation("header")}
          >
            Book Free Consultation
          </CTAButton>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center rounded-md text-primary transition-colors hover:bg-secondary lg:hidden"
          >
            {menuOpen ? <Menu className="size-5 hidden" /> : null}
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-border bg-background lg:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <ul className="space-y-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-2 py-3 text-base font-bold text-foreground transition-colors hover:bg-secondary hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <CTAButton
              full
              size="lg"
              className="mt-4"
              data-action="book-consultation"
              onClick={() => {
                setMenuOpen(false);
                openConsultation("mobile_nav");
              }}
            >
              Book Free Consultation
            </CTAButton>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
