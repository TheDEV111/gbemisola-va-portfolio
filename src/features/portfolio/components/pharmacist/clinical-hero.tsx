"use client";

import { useEffect, useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { Download, FlaskConical, MapPin, ShieldCheck } from "lucide-react";

const STATS = [
  { value: "B.Pharm", label: "Degree" },
  { value: "5+", label: "Years Clinical" },
  { value: "NYSC", label: "Service" },
  { value: "100%", label: "Compliance" },
];

interface ClinicalHeroProps {
  ownerEmail: string;
}

export function ClinicalHero({ ownerEmail }: ClinicalHeroProps) {
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
      {/* Top accent bar */}
      <div
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, #0369a1 40%, #0d9488 60%, transparent)" }}
      />

      {/* Ambient glow — top */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[55vh] w-[70vw] -translate-x-1/2"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(3,105,161,0.1) 0%, transparent 70%)" }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(3,105,161,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(3,105,161,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-28 lg:px-12">
        {/* Two-column layout on desktop */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16">

          {/* ── Text column ─────────────────────────────────── */}
          <div className="flex flex-1 flex-col items-center lg:items-start">

            {/* Credential badge */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
              transition={{ duration: 0.6, ease, delay: 0.1 }}
            >
              <div
                className="flex items-center gap-2.5 rounded-full px-4 py-1.5"
                style={{ background: "rgba(3,105,161,0.07)", border: "1px solid rgba(3,105,161,0.2)" }}
              >
                <ShieldCheck size={13} style={{ color: "#0369a1" }} />
                <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "#0369a1" }}>
                  Licensed Pharmacist · Lagos, Nigeria
                </span>
                <ShieldCheck size={13} style={{ color: "#0369a1" }} />
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="mb-3 text-center font-serif leading-[0.95] tracking-tight lg:text-left"
              style={{ fontSize: "clamp(3rem, 7vw, 7rem)", color: "var(--ph-text)" }}
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
              className="mb-6 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: mounted ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
            >
              <div className="h-px w-10 flex-shrink-0" style={{ background: "rgba(3,105,161,0.25)" }} />
              <span className="text-sm uppercase tracking-[0.18em]" style={{ color: "#64748b" }}>
                Clinical Pharmacist · B.Pharm
              </span>
              <div className="h-px w-10 flex-shrink-0 lg:hidden" style={{ background: "rgba(3,105,161,0.25)" }} />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="mb-4 text-center text-lg font-light leading-relaxed lg:text-left lg:text-xl"
              style={{ maxWidth: "480px", color: "var(--ph-text)", opacity: 0.82 }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: mounted ? 0.82 : 0, y: mounted ? 0 : 16 }}
              transition={{ duration: 0.8, ease, delay: 0.44 }}
            >
              Pharmaceutical expertise grounded in clinical rigour, systems thinking, and patient-centred care.
            </motion.p>

            {/* Location */}
            <motion.div
              className="mb-8 flex items-center gap-1.5"
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
              className="flex flex-wrap items-center justify-center gap-4 lg:justify-start"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 12 }}
              transition={{ duration: 0.8, ease, delay: 0.62 }}
            >
              <a
                href="/CV Pharmacist Oginni Oluwagbemisola.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300"
                style={{ background: "#0369a1", color: "#ffffff", boxShadow: "0 4px 24px rgba(3,105,161,0.3)" }}
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
                href={`mailto:${ownerEmail}?subject=Clinical%20Pharmacist%20Inquiry`}
                className="rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300"
                style={{ background: "transparent", border: "1.5px solid rgba(3,105,161,0.35)", color: "#0369a1" }}
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
          </div>

          {/* ── Floating oval portrait ───────────────────────── */}
          <motion.div
            className="relative order-first shrink-0 lg:order-last"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: mounted ? 1 : 0, x: mounted ? 0 : 30 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
          >
            {/* Continuous float */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              {/* Ambient glow behind the oval */}
              <div
                className="pointer-events-none absolute"
                style={{
                  inset: "-32px",
                  borderRadius: "50%",
                  background: "radial-gradient(ellipse at 50% 50%, rgba(3,105,161,0.22) 0%, rgba(13,148,136,0.1) 50%, transparent 70%)",
                  filter: "blur(28px)",
                }}
              />

              {/* Decorative ring — gradient border via padding trick */}
              <div
                style={{
                  padding: "3px",
                  borderRadius: "50%",
                  background: "linear-gradient(145deg, #0369a1 0%, #0d9488 55%, rgba(3,105,161,0.25) 100%)",
                  boxShadow: "0 20px 60px rgba(3,105,161,0.2), 0 4px 20px rgba(3,105,161,0.15)",
                }}
              >
                {/* Inner oval image */}
                <div
                  className="relative overflow-hidden"
                  style={{
                    width: "clamp(180px, 22vw, 300px)",
                    height: "clamp(252px, 31vw, 420px)",
                    borderRadius: "50%",
                    background: "#f0f5fb",
                  }}
                >
                  <Image
                    src="/Pharmacist-profile-image.jpeg"
                    alt="Gbemisola Oginni — Clinical Pharmacist"
                    fill
                    priority
                    className="object-cover"
                    style={{ objectPosition: "center 28%" }}
                    sizes="(max-width: 1024px) 200px, 320px"
                  />
                </div>
              </div>

              {/* Small decorative dot accent — top right */}
              <div
                className="absolute right-2 top-4 h-3 w-3 rounded-full"
                style={{ background: "#0d9488", boxShadow: "0 0 12px rgba(13,148,136,0.6)" }}
              />
              {/* Small decorative dot accent — bottom left */}
              <div
                className="absolute bottom-8 left-0 h-2 w-2 rounded-full"
                style={{ background: "#0369a1", boxShadow: "0 0 10px rgba(3,105,161,0.5)" }}
              />
            </motion.div>
          </motion.div>

        </div>

        {/* ── Stats row — full width below both columns ─────── */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: mounted ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.82 }}
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
              transition={{ duration: 0.5, delay: 0.84 + i * 0.07, ease }}
            >
              <FlaskConical size={11} style={{ color: "#0369a1", opacity: 0.7 }} />
              <span className="text-sm font-semibold" style={{ color: "#0369a1" }}>{s.value}</span>
              <span className="text-xs" style={{ color: "#94a3b8" }}>{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
