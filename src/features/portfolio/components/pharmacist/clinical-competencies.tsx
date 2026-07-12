"use client";

import { motion } from "framer-motion";

import { useInView } from "../../hooks/use-in-view";
import { getIcon } from "../../lib/icon-map";

import type { PharmacistCompetencyEntry } from "../../types";

const ACCENTS = ["#0369a1", "#0d9488"];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

interface ClinicalCompetenciesProps {
  competencies: PharmacistCompetencyEntry[];
}

export function ClinicalCompetencies({ competencies }: ClinicalCompetenciesProps) {
  const { ref, isInView } = useInView();

  return (
    <section
      id="competencies"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 lg:py-36"
      style={{ background: "var(--ph-surface)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(3,105,161,0.15) 50%, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]" style={{ color: "#0369a1" }}>
            02 · Core Competencies
          </p>
          <h2
            className="font-serif leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--ph-text)" }}
          >
            Clinical foundations.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: "#64748b" }}>
            Five years of pharmaceutical practice across hospital, community, and government health systems.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {competencies.map((c, i) => {
            const Icon = getIcon(c.iconName);
            const accent = ACCENTS[i % 2]!;
            return (
              <motion.div
                key={c.title}
                variants={item}
                className="group rounded-2xl p-6 transition-all duration-300"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(3,105,161,0.09)",
                  boxShadow: "0 1px 6px rgba(3,105,161,0.04)",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 8px 28px rgba(3,105,161,0.1)",
                  borderColor: `${accent}30`,
                }}
              >
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: `${accent}12`, border: `1px solid ${accent}25` }}
                >
                  <Icon size={16} style={{ color: accent }} />
                </div>
                <h3 className="mb-2 text-sm font-semibold leading-snug" style={{ color: "var(--ph-text)" }}>
                  {c.title}
                </h3>
                <p className="text-xs leading-[1.8]" style={{ color: "#64748b" }}>
                  {c.description}
                </p>
                <div
                  className="mt-5 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
