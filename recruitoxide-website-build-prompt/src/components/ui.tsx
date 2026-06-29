import Link from "next/link";
import type { ReactNode } from "react";

export function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  size = "md",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "aqua" | "ghost";
  external?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeStyles = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3.5 text-base",
  };

  const base =
    "btn-glow inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors";
  const styles = {
    primary: "bg-navy text-white hover:bg-navy-700",
    aqua: "bg-aqua text-white hover:bg-deep",
    secondary: "border border-navy/15 bg-white text-navy hover:border-aqua hover:text-deep",
    ghost: "text-navy hover:text-deep",
  }[variant];

  const cls = `${base} ${styles} ${sizeStyles[size]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-aqua">
      <span className="h-px w-6 bg-aqua/50" />
      {children}
      <span className="h-px w-6 bg-aqua/50" />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-navy/60 sm:text-lg">{subtitle}</p>}
    </div>
  );
}

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
