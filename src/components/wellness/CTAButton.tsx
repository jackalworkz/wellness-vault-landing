import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-sans font-bold tracking-wide transition-all duration-200 disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary text-center",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90 hover:shadow-lift",
        outline: "border border-primary/30 bg-transparent text-primary hover:border-primary hover:bg-secondary/60",
        ghost: "text-primary underline decoration-gold/70 decoration-1 underline-offset-4 hover:decoration-gold",
        onDark:
          "bg-ivory text-primary shadow-soft hover:bg-ivory/90",
        onDarkOutline: "border border-ivory/40 text-ivory hover:border-ivory hover:bg-ivory/10",
      },
      size: {
        sm: "min-h-10 px-4 text-[0.8125rem]",
        md: "min-h-12 px-6 text-sm",
        lg: "min-h-13 px-7 text-[0.9375rem]",
      },
      full: { true: "w-full", false: "" },
    },
    defaultVariants: { variant: "primary", size: "md", full: false },
  },
);

export interface CTAButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ctaVariants> {}

export const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, variant, size, full, type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(ctaVariants({ variant, size, full }), className)}
      {...props}
    />
  ),
);
CTAButton.displayName = "CTAButton";
