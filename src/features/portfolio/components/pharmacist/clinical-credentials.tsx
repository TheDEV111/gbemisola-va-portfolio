"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Globe, Users } from "lucide-react";

import { useInView } from "../../hooks/use-in-view";

const EDUCATION = [
  {
    degree: "PGD — Logistics & Supply Chain Management",
    institution: "Chartered Institute of Logistics and Supply Chain Management",
    period: "January 2026 (in view)",
    note: "In progress",
  },
  {
    degree: "Bachelor of Pharmacy (B.Pharm.)",
    institution: "University of Lagos, Idi-Araba",
    period: "Dec 2017 – Sep 2023",
    note: "",
  },
];

const CERTIFICATES = [
  { name: "First Aid Training", issuer: "Nigerian Red Cross", year: "2026" },
  { name: "Virtual Assistant Training", issuer: "ALX", year: "2025" },
  { name: "AI and Career Essentials (AICE)", issuer: "ALX", year: "2024" },
  { name: "Scrum Study Project Management", issuer: "Scrum Study", year: "2020" },
  { name: "IT Essentials", issuer: "Cisco", year: "2015" },
];

const AFFILIATIONS = [
  { org: "Wellsprings Mental Health Initiative", role: "Deputy Director, Mental Health Services", year: "2025" },
  { org: "30 Beautiful Minds", role: "Member", year: "2024" },
  { org: "PSN — Young Pharmacist Group", role: "Member", year: "2023" },
  { org: "Drug Free Club", role: "Member", year: "2022" },
  { org: "Future Pharmacy Initiative", role: "Member", year: "2021" },
];

const LANGUAGES = [
  { name: "English", level: "Native / Bilingual" },
  { name: "Yoruba", level: "Moderate" },
  { name: "French", level: "Basic" },
];

export function ClinicalCredentials() {
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
        {/* Header */}
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
              {EDUCATION.map((e) => (
                <div
                  key={e.degree}
                  className="rounded-2xl p-5"
                  style={{
                    background: "var(--ph-bg)",
                    border: "1px solid rgba(3,105,161,0.08)",
                  }}
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
              {CERTIFICATES.map((c) => (
                <div
                  key={c.name}
                  className="flex items-center justify-between rounded-xl px-4 py-3"
                  style={{
                    background: "var(--ph-bg)",
                    border: "1px solid rgba(3,105,161,0.08)",
                  }}
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
              {AFFILIATIONS.map((a) => (
                <div
                  key={a.org}
                  className="flex items-start justify-between gap-3 rounded-xl px-4 py-3"
                  style={{
                    background: "var(--ph-bg)",
                    border: "1px solid rgba(3,105,161,0.08)",
                  }}
                >
                  <div>
                    <p className="text-sm font-medium" style={{ color: "var(--ph-text)" }}>{a.org}</p>
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
              {LANGUAGES.map((l) => (
                <div
                  key={l.name}
                  className="flex items-center justify-between rounded-xl px-4 py-3"
                  style={{
                    background: "var(--ph-bg)",
                    border: "1px solid rgba(3,105,161,0.08)",
                  }}
                >
                  <p className="text-sm font-medium" style={{ color: "var(--ph-text)" }}>{l.name}</p>
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
