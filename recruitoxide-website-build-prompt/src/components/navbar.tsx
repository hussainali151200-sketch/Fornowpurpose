"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./logo";
import { NAV_LINKS, SOLUTIONS } from "@/lib/site";
import { solutionIconMap } from "./icons";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [solOpen, setSolOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSolOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-black/5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Horizontal nav bar — visible from small-tablet width up */}
        <div className="hidden flex-1 items-center justify-center gap-0.5 md:flex lg:gap-1">
          <div
            className="relative"
            onMouseEnter={() => setSolOpen(true)}
            onMouseLeave={() => setSolOpen(false)}
          >
            <Link
              href="/solutions"
              className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium text-navy/70 transition-colors hover:text-navy hover:bg-navy/5 lg:px-4 lg:text-sm"
            >
              Solutions
            </Link>
            <AnimatePresence>
              {solOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full w-[92vw] max-w-[560px] -translate-x-1/2 pt-3"
                >
                  <div className="bg-white grid grid-cols-1 gap-1.5 rounded-2xl border border-black/8 p-4 shadow-[0_24px_70px_-24px_rgba(12,68,95,0.18)] sm:grid-cols-2">
                    {SOLUTIONS.map((s) => {
                      const Icon = solutionIconMap[s.key];
                      return (
                        <Link
                          key={s.key}
                          href={`/solutions/${s.key}`}
                          className="group flex items-start gap-3.5 rounded-xl p-3.5 transition-all duration-300 hover:bg-aqua/5"
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy transition-all duration-300 group-hover:scale-110 group-hover:bg-aqua/10 group-hover:text-aqua group-hover:shadow-[0_6px_18px_-6px_rgba(55,168,187,0.5)]">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span>
                            <span className="block text-sm font-semibold text-navy transition-colors group-hover:text-deep">
                              {s.name}
                            </span>
                            <span className="mt-0.5 block text-xs leading-snug text-navy/55">{s.tagline}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {NAV_LINKS.filter((l) => l.href !== "/solutions").map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="whitespace-nowrap rounded-lg px-2.5 py-2 text-[13px] font-medium text-navy/70 transition-colors hover:text-navy hover:bg-navy/5 lg:px-4 lg:text-sm"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 items-center gap-3 md:flex">
          <Link
            href="/book-demo"
            className="btn-glow whitespace-nowrap rounded-xl bg-navy px-3.5 py-2.5 text-[13px] font-semibold text-white hover:bg-navy-700 lg:px-5 lg:text-sm"
          >
            Book Strategy Call
          </Link>
        </div>

        {/* Hamburger — only on phones below md */}
        <button
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-black/10 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-5 bg-navy transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 bg-navy transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-navy transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white overflow-hidden border-t border-black/5 md:hidden"
          >
            <div className="space-y-1 px-5 py-4">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block rounded-xl px-3 py-2.5 text-base font-medium text-navy hover:bg-aqua/10"
                >
                  {l.label}
                </Link>
              ))}
              <div className="grid grid-cols-1 gap-1 border-t border-black/5 pt-2">
                {SOLUTIONS.map((s) => {
                  const Icon = solutionIconMap[s.key];
                  return (
                    <Link
                      key={s.key}
                      href={`/solutions/${s.key}`}
                      className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-navy/70 hover:bg-aqua/10"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy/5 text-navy">
                        <Icon className="h-4 w-4" />
                      </span>
                      {s.name}
                    </Link>
                  );
                })}
              </div>
              <Link
                href="/book-demo"
                className="mt-2 block rounded-xl bg-navy px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Book Strategy Call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
