"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

import { useInView } from "../../hooks/use-in-view";

import type { PharmacistRole } from "../../types";

const ACCENTS = ["#0369a1", "#0d9488"];

interface ClinicalExperienceProps {
  roles: PharmacistRole[];
}

export function ClinicalExperience({ roles }: ClinicalExperienceProps) {
  const { ref, isInView } = useInView();

  return (
    <section
      id="experience"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 lg:py-36"
      style={{ background: "var(--ph-bg)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(13,148,136,0.15) 50%, transparent)" }}
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#0d9488" }}>
            03 · Clinical Experience
          </p>
          <h2
            className="font-serif leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--ph-text)" }}
          >
            A record built in practice.
          </h2>
        </motion.div>

        <div className="relative">
          <div
            className="absolute left-3 top-0 hidden h-full w-px lg:left-4 lg:block"
            style={{ background: "rgba(3,105,161,0.1)" }}
          />

          <div className="flex flex-col gap-6">
            {roles.map((role, i) => {
              const accent = ACCENTS[i % 2]!;
              return (
                <motion.div
                  key={`${role.role}-${role.period}`}
                  className="relative lg:pl-14"
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.08 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[9px] top-6 hidden h-2.5 w-2.5 rounded-full lg:block"
                    style={{
                      background: role.isCurrent ? accent : "#ffffff",
                      border: `2px solid ${accent}`,
                      boxShadow: role.isCurrent ? `0 0 10px ${accent}60` : "none",
                    }}
                  />

                  <div
                    className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "#ffffff",
                      border: `1px solid ${role.isCurrent ? accent + "25" : "rgba(3,105,161,0.08)"}`,
                      boxShadow: role.isCurrent
                        ? `0 2px 16px ${accent}12`
                        : "0 1px 4px rgba(3,105,161,0.04)",
                    }}
                  >
                    <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <div className="mb-1 flex flex-wrap items-center gap-2">
                          <h3 className="text-sm font-semibold" style={{ color: "var(--ph-text)" }}>
                            {role.role}
                          </h3>
                          {role.isCurrent && (
                            <span
                              className="rounded-full px-2 py-0.5 text-xs font-medium"
                              style={{ background: `${accent}12`, color: accent }}
                            >
                              Current
                            </span>
                          )}
                          {role.badge && (
                            <span
                              className="rounded-full px-2 py-0.5 text-xs"
                              style={{
                                background: "rgba(13,148,136,0.08)",
                                border: "1px solid rgba(13,148,136,0.2)",
                                color: "#0d9488",
                              }}
                            >
                              {role.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Building2 size={11} style={{ color: "#94a3b8" }} />
                          <span className="text-xs font-medium" style={{ color: accent }}>
                            {role.company}
                          </span>
                        </div>
                      </div>
                      <div className="flex shrink-0 items-center gap-1.5">
                        <Calendar size={11} style={{ color: "#94a3b8" }} />
                        <span
                          className="rounded-full px-2.5 py-1 text-xs"
                          style={{
                            background: "rgba(3,105,161,0.05)",
                            border: "1px solid rgba(3,105,161,0.1)",
                            color: "#64748b",
                          }}
                        >
                          {role.period}
                        </span>
                      </div>
                    </div>

                    <ul className="flex flex-col gap-2">
                      {role.highlights.map((h, hi) => (
                        <li key={hi} className="flex items-start gap-2.5">
                          <span
                            className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                            style={{ background: accent }}
                          />
                          <span className="text-xs leading-[1.85]" style={{ color: "#64748b" }}>
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
