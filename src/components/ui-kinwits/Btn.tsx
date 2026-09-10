import { forwardRef, type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const btnVariants = cva("btn", {
  variants: {
    variant: {
      default: "",
      ghost: "btn-ghost",
      light: "btn-light",
      ghostDark: "btn-ghost-dark",
    },
    nav: {
      true: "btn-nav",
      false: "",
    },
  },
  defaultVariants: { variant: "default", nav: false },
});

interface BtnLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>, VariantProps<typeof btnVariants> {}

/** Most CTAs in the source are `<a class="btn">` — this is the anchor form. */
export const BtnLink = forwardRef<HTMLAnchorElement, BtnLinkProps>(({ className, variant, nav, ...props }, ref) => (
  <a ref={ref} className={cn(btnVariants({ variant, nav }), className)} {...props} />
));
BtnLink.displayName = "BtnLink";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof btnVariants> {}

export const Btn = forwardRef<HTMLButtonElement, BtnProps>(({ className, variant, nav, ...props }, ref) => (
  <button ref={ref} className={cn(btnVariants({ variant, nav }), className)} {...props} />
));
Btn.displayName = "Btn";
