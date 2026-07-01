"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/motion";

/**
 * VideoBlock — premium HTML5 video player.
 *
 * Usage:
 *   <VideoBlock src="/video1.mp4" eyebrow="Our Philosophy" title="..." subtitle="..." />
 *
 * Drop your files into /public as:
 *   /public/video1.mp4  -> used in About / Our Values
 *   /public/video2.mp4  -> used between How It Works and Outcomes
 */
export function VideoBlock({
  src,
  eyebrow,
  title,
  subtitle,
  poster,
  reversed = false,
}: {
  src: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: string;
  poster?: string;
  reversed?: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reversed ? "lg:[&>div:first-child]:order-2" : ""}`}>
        <Reveal>
          <div>
            {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
            {title && (
              <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && <p className="mt-4 leading-relaxed text-navy/60">{subtitle}</p>}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="relative overflow-hidden rounded-3xl border border-black/5 bg-navy shadow-[0_24px_60px_-24px_rgba(12,68,95,0.4)]"
          >
            <video
              ref={videoRef}
              src={src}
              poster={poster}
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
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-navy/50 via-navy/20 to-navy/50 transition-colors hover:from-navy/60"
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
      </div>
    </section>
  );
}
