"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowIcon } from "@/components/ui";

const inputBase =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-navy outline-none transition-colors placeholder:text-navy/35 focus:border-aqua focus:ring-2 focus:ring-aqua/20";

export function LeadForm({
  type = "contact",
  submitLabel = "Send Message",
  showRole = false,
}: {
  type?: string;
  submitLabel?: string;
  showRole?: boolean;
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      type,
      name: fd.get("name"),
      email: fd.get("email"),
      company: fd.get("company"),
      phone: fd.get("phone"),
      role: fd.get("role"),
      message: fd.get("message"),
    };
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <AnimatePresence mode="wait">
      {status === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-aqua/30 bg-aqua/5 p-8 text-center"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-aqua/20 text-2xl text-aqua">
            ✓
          </div>
          <h3 className="mt-4 font-display text-xl font-bold text-navy">Thank you!</h3>
          <p className="mt-2 text-sm text-navy/60">
            We&apos;ve received your message and will be in touch shortly.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy/70">Full name *</label>
              <input name="name" required placeholder="Jordan Davis" className={inputBase} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy/70">Work email *</label>
              <input name="email" type="email" required placeholder="you@company.com" className={inputBase} />
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy/70">Company</label>
              <input name="company" placeholder="Company name" className={inputBase} />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy/70">Phone</label>
              <input name="phone" placeholder="+1 (___) ___-____" className={inputBase} />
            </div>
          </div>
          {showRole && (
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-navy/70">Role you&apos;re hiring for</label>
              <input name="role" placeholder="e.g. Customer Support Representative" className={inputBase} />
            </div>
          )}
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-navy/70">How can we help?</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us about your hiring challenge…"
              className={`${inputBase} resize-none`}
            />
          </div>

          {status === "error" && <p className="text-sm text-red-500">{error}</p>}

          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-navy-700 disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : submitLabel}
            {status !== "loading" && <ArrowIcon />}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
