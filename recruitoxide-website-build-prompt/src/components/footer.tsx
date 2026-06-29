import Link from "next/link";
import { Logo } from "./logo";
import { SITE, SOLUTIONS } from "@/lib/site";
import { IconLinkedIn, IconInstagram } from "./icons";

const company = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Book a Demo", href: "/book-demo" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-navy to-[#16273f] text-white">
      <div className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-aqua/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aqua/40 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="inline-flex rounded-xl bg-white/95 px-3 py-2">
              <Logo />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              The Managed Hiring Intelligence OS. We replace resume noise with structured, role-aligned
              signal — so US teams hire faster and better.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-aqua hover:bg-aqua/10 hover:text-aqua hover:shadow-[0_8px_20px_-8px_rgba(55,168,187,0.6)]"
                aria-label="LinkedIn"
              >
                <IconLinkedIn className="h-5 w-5" />
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-white/55 transition-all duration-300 hover:-translate-y-0.5 hover:border-aqua hover:bg-aqua/10 hover:text-aqua hover:shadow-[0_8px_20px_-8px_rgba(55,168,187,0.6)]"
                aria-label="Instagram"
              >
                <IconInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-aqua-300/80">Solutions</h4>
            <ul className="mt-4 space-y-3">
              {SOLUTIONS.map((s) => (
                <li key={s.key}>
                  <Link
                    href={`/solutions/${s.key}`}
                    className="text-sm text-white/55 transition-colors hover:text-aqua-300"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-aqua-300/80">Company</h4>
            <ul className="mt-4 space-y-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 transition-colors hover:text-aqua-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-aqua-300/80">Legal & Contact</h4>
            <ul className="mt-4 space-y-3">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/55 transition-colors hover:text-aqua-300">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${SITE.email}`} className="text-sm text-white/55 transition-colors hover:text-aqua-300">
                  {SITE.email}
                </a>
              </li>
              <li className="text-sm text-white/55">{SITE.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-sm font-normal text-white/40">
            Powered by RecruitOxide Intelligence · 2026 · recruitoxide.com
          </p>
          <p className="text-xs text-white/30">Smarter Hiring. Talent. Intelligence. Results.</p>
        </div>
      </div>
    </footer>
  );
}
