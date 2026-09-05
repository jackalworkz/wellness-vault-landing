import { BookOpen, Compass, LayoutGrid, Sun } from "lucide-react";

const items = [
  { icon: BookOpen, label: "Practical Resources" },
  { icon: Compass, label: "Simple Guidance" },
  { icon: LayoutGrid, label: "Organized Wellness Tools" },
  { icon: Sun, label: "Everyday-Friendly Approach" },
];

export function BenefitStrip() {
  return (
    <section aria-label="Why people use Wellness Vault" className="border-y border-border bg-card">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-4 gap-y-6 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:px-8">
        {items.map(({ icon: Icon, label }) => (
          <li key={label} className="flex min-w-0 items-center gap-3">
            <Icon className="size-5 shrink-0 text-sage" aria-hidden="true" />
            <span className="text-sm font-bold text-primary">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
