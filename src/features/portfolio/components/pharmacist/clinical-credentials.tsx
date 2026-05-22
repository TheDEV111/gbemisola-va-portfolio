"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Globe, Users } from "lucide-react";

import { useInView } from "../../hooks/use-in-view";

import type { PharmacistCredentials } from "../../types";

interface ClinicalCredentialsProps {
  credentials: PharmacistCredentials;
}

export function ClinicalCredentials({ credentials }: ClinicalCredentialsProps) {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 lg:py-32"
      style={{ background: "var(--ph-surface)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(3,105,161,0.12) 50%, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#0369a1" }}>
            04 · Credentials
          </p>
          <h2
            className="font-serif leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--ph-text)" }}
          >
            Education, certifications & affiliations.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-2.5">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "rgba(3,105,161,0.08)", border: "1px solid rgba(3,105,161,0.15)" }}
              >
                <BookOpen size={14} style={{ color: "#0369a1" }} />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: "var(--ph-text)" }}>
                Education
              </h3>
            </div>
            <div className="flex flex-col gap-4">
              {credentials.education.map((e) => (
                <div
                  key={e.degree}
                  className="rounded-2xl p-5"
                  style={{ background: "var(--ph-bg)", border: "1px solid rgba(3,105,161,0.08)" }}
                >
                  <div className="mb-1 flex items-start justify-between gap-3">
                    <p className="text-sm font-semibold leading-snug" style={{ color: "var(--ph-text)" }}>
                      {e.degree}
                    </p>
                    {e.note && (
                      <span
                        className="shrink-0 rounded-full px-2 py-0.5 text-xs font-medium"
                        style={{ background: "rgba(13,148,136,0.1)", color: "#0d9488" }}
                      >
                        {e.note}
                      </span>
                    )}
                  </div>
                  <p className="text-xs" style={{ color: "#0369a1" }}>{e.institution}</p>
                  <p className="mt-1 text-xs" style={{ color: "#94a3b8" }}>{e.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-2.5">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "rgba(3,105,161,0.08)", border: "1px solid rgba(3,105,161,0.15)" }}
              >
                <Award size={14} style={{ color: "#0369a1" }} />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: "var(--ph-text)" }}>
                Certificates
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {credentials.certificates.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between rounded-xl px-4 py-3"
                  style={{ background: "var(--ph-bg)", border: "1px solid rgba(3,105,161,0.08)" }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--ph-text)" }}>{c.name}</p>
                    <p className="text-xs" style={{ color: "#64748b" }}>{c.issuer}</p>
                  </div>
                  <span
                    className="rounded-full px-2.5 py-1 text-xs font-medium"
                    style={{
                      background: "rgba(3,105,161,0.07)",
                      border: "1px solid rgba(3,105,161,0.12)",
                      color: "#0369a1",
                    }}
                  >
                    {c.year}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Affiliations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-2.5">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "rgba(3,105,161,0.08)", border: "1px solid rgba(3,105,161,0.15)" }}
              >
                <Users size={14} style={{ color: "#0369a1" }} />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: "var(--ph-text)" }}>
                Affiliations
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {credentials.affiliations.map((a) => (
                <div
                  key={a.organization}
                  className="flex items-start justify-between gap-3 rounded-xl px-4 py-3"
                  style={{ background: "var(--ph-bg)", border: "1px solid rgba(3,105,161,0.08)" }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--ph-text)" }}>{a.organization}</p>
                    <p className="text-xs" style={{ color: "#64748b" }}>{a.role}</p>
                  </div>
                  <span className="shrink-0 text-xs" style={{ color: "#94a3b8" }}>{a.year}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-5 flex items-center gap-2.5">
              <div
                className="flex h-8 w-8 items-center justify-center rounded-lg"
                style={{ background: "rgba(3,105,161,0.08)", border: "1px solid rgba(3,105,161,0.15)" }}
              >
                <Globe size={14} style={{ color: "#0369a1" }} />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em]" style={{ color: "var(--ph-text)" }}>
                Languages
              </h3>
            </div>
            <div className="flex flex-col gap-3">
              {credentials.languages.map((l) => (
                <div
                  key={l.language}
                  className="flex items-center justify-between rounded-xl px-4 py-3"
                  style={{ background: "var(--ph-bg)", border: "1px solid rgba(3,105,161,0.08)" }}
                >
                  <p className="text-sm font-medium" style={{ color: "var(--ph-text)" }}>{l.language}</p>
                  <span
                    className="rounded-full px-2.5 py-1 text-xs"
                    style={{
                      background: "rgba(3,105,161,0.07)",
                      border: "1px solid rgba(3,105,161,0.12)",
                      color: "#64748b",
                    }}
                  >
                    {l.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
