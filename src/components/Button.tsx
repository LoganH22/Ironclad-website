import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRightIcon } from "./icons";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "outline-light";
  withArrow?: boolean;
  className?: string;
};

const VARIANTS = {
  primary:
    "bg-brass text-on-brass hover:bg-brass-soft border border-transparent",
  outline:
    "border border-ink/20 text-ink hover:border-ink hover:bg-ink hover:text-paper",
  "outline-light":
    "border border-white/30 text-white hover:border-white hover:bg-white/10",
};

export default function Button({
  href,
  children,
  variant = "primary",
  withArrow = true,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-220 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer ${VARIANTS[variant]} ${className}`}
    >
      {children}
      {withArrow && (
        <ArrowRightIcon
          aria-hidden="true"
          className="size-4 transition-transform duration-220 ease-[cubic-bezier(0.23,1,0.32,1)] motion-safe:group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
