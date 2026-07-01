"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/motion";
import { Eyebrow } from "@/components/ui";

export function HeroVideo({ src, eyebrow, title, subtitle }: {
  src: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); }
    else { v.pause(); setPlaying(false); }
  };

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16">
      <Reveal>
        <div className="mx-auto mb-8 max-w-2xl text-center">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 text-navy/60">{subtitle}</p>}
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          className="relative overflow-hidden rounded-3xl border border-black/5 bg-navy shadow-[0_40px_80px_-40px_rgba(12,68,95,0.5)]"
        >
          <video
            ref={videoRef}
            src={src}
            className="aspect-video w-full bg-navy"
            onClick={toggle}
            playsInline
            preload="metadata"
            controls={playing}
          />
          {!playing && (
            <button
              type="button"
              onClick={toggle}
              className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-navy/60 via-navy/20 to-navy/40 transition-colors hover:from-navy/70"
              aria-label="Play video"
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/95 text-navy shadow-2xl transition-transform hover:scale-110">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="7 4 20 12 7 20" />
                </svg>
              </span>
            </button>
          )}
        </motion.div>
      </Reveal>
    </section>
  );
}
