"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { Download, FlaskConical, MapPin, ShieldCheck } from "lucide-react";

import { OWNER } from "../../data/content";

const STATS = [
  { value: "B.Pharm", label: "Degree" },
  { value: "5+", label: "Years Clinical" },
  { value: "NYSC", label: "Service" },
  { value: "100%", label: "Compliance" },
];

export function ClinicalHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--ph-bg)" }}
    >
      {/* Cinematic portrait — fills the full hero */}
      <Image
        src="/Pharmacist-profile-image.jpeg"
        alt="Gbemisola Oginni — Clinical Pharmacist"
        fill
        priority
        className="object-cover object-top md:object-[center_38%]"
        sizes="100vw"
      />

      {/* Light clinical wash — bright at centre to keep text crisp, reveals photo at edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 90% at 50% 42%, rgba(240,245,251,0.58) 0%, rgba(240,245,251,0.9) 100%)",
        }}
      />

      {/* Desktop-only side vignette — fades out the plain white bg at wide edges */}
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(240,245,251,0.7) 0%, transparent 22%, transparent 78%, rgba(240,245,251,0.7) 100%)",
        }}
      />

      {/* Blue ambient glow from top — reinforces the clinical brand tone */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[50vh] w-[60vw] -translate-x-1/2"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(3,105,161,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Top accent bar */}
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, #0369a1 40%, #0d9488 60%, transparent)" }}
      />

      {/* Subtle grid overlay on top of photo */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(3,105,161,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(3,105,161,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-24 pt-36 lg:px-12">
        {/* Credential badge */}
        <motion.div
          className="mb-8 flex items-center justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
          transition={{ duration: 0.6, ease, delay: 0.1 }}
        >
          <div
            className="flex items-center gap-2.5 rounded-full px-4 py-1.5"
            style={{
              background: "rgba(3,105,161,0.07)",
              border: "1px solid rgba(3,105,161,0.2)",
            }}
          >
            <ShieldCheck size={13} style={{ color: "#0369a1" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#0369a1" }}
            >
              Licensed Pharmacist · Lagos, Nigeria
            </span>
            <ShieldCheck size={13} style={{ color: "#0369a1" }} />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="mb-3 text-center font-serif leading-[0.95] tracking-tight"
          style={{
            fontSize: "clamp(3.2rem, 9vw, 8rem)",
            color: "var(--ph-text)",
          }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 24 }}
          transition={{ duration: 0.8, ease, delay: 0.2 }}
        >
          Gbemisola
          <br />
          <span style={{ color: "#0369a1" }}>Oginni</span>
        </motion.h1>

        {/* Title line */}
        <motion.div
          className="mb-8 flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
        >
          <div className="h-px w-12 flex-shrink-0" style={{ background: "rgba(3,105,161,0.25)" }} />
          <span className="text-sm uppercase tracking-[0.18em]" style={{ color: "#64748b" }}>
            Clinical Pharmacist · B.Pharm
          </span>
          <div className="h-px w-12 flex-shrink-0" style={{ background: "rgba(3,105,161,0.25)" }} />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="mx-auto mb-5 text-center text-xl font-light leading-relaxed lg:text-2xl"
          style={{ maxWidth: "600px", color: "var(--ph-text)", opacity: 0.85 }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: mounted ? 0.85 : 0, y: mounted ? 0 : 16 }}
          transition={{ duration: 0.8, ease, delay: 0.44 }}
        >
          Pharmaceutical expertise grounded in clinical rigour, systems thinking, and patient-centred care.
        </motion.p>

        {/* Sub-tagline */}
        <motion.div
          className="mb-4 flex items-center justify-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 0.7, delay: 0.52 }}
        >
          <MapPin size={13} style={{ color: "#94a3b8" }} />
          <span className="text-sm" style={{ color: "#94a3b8" }}>
            Lagos State Ministry of Health · NYSC Pharmacist
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          className="mb-16 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 12 }}
          transition={{ duration: 0.8, ease, delay: 0.62 }}
        >
          <a
            href="/CV Pharmacist Oginni Oluwagbemisola.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300"
            style={{
              background: "#0369a1",
              color: "#ffffff",
              boxShadow: "0 4px 24px rgba(3,105,161,0.3)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#0284c7";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 32px rgba(3,105,161,0.45)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#0369a1";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(3,105,161,0.3)";
            }}
          >
            <Download size={14} strokeWidth={2.5} />
            Download Clinical CV
          </a>
          <a
            href={`mailto:${OWNER.email}?subject=Clinical%20Pharmacist%20Inquiry`}
            className="rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300"
            style={{
              background: "transparent",
              border: "1.5px solid rgba(3,105,161,0.35)",
              color: "#0369a1",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "rgba(3,105,161,0.06)";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(3,105,161,0.6)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(3,105,161,0.35)";
            }}
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.78 }}
        >
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex items-center gap-2.5 rounded-full px-5 py-2.5"
              style={{
                background: "#ffffff",
                border: "1px solid rgba(3,105,161,0.12)",
                boxShadow: "0 1px 8px rgba(3,105,161,0.06)",
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.06, ease }}
            >
              <FlaskConical size={11} style={{ color: "#0369a1", opacity: 0.7 }} />
              <span className="text-sm font-semibold" style={{ color: "#0369a1" }}>
                {s.value}
              </span>
              <span className="text-xs" style={{ color: "#94a3b8" }}>
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
