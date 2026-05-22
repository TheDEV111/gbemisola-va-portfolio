"use client";

import { motion } from "framer-motion";
import {
  Activity,
  BookOpen,
  ClipboardList,
  FlaskConical,
  ShieldCheck,
  Thermometer,
  Users,
  Warehouse,
} from "lucide-react";

import { useInView } from "../../hooks/use-in-view";

const COMPETENCIES = [
  {
    icon: FlaskConical,
    title: "Drug Therapy Management",
    description:
      "Prescription review, drug interaction screening, and therapeutic outcome monitoring across hospital and community settings.",
    accent: "#0369a1",
  },
  {
    icon: Activity,
    title: "Clinical Documentation",
    description:
      "Accurate pharmaceutical records, dispensing logs, and regulatory compliance documentation using EMR systems.",
    accent: "#0d9488",
  },
  {
    icon: Users,
    title: "Patient Counselling",
    description:
      "Clear medication education and adherence counselling for patients across diverse socioeconomic backgrounds.",
    accent: "#0369a1",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description:
      "NAFDAC and PCN standards adherence, including controlled substance management and audit-ready record-keeping.",
    accent: "#0d9488",
  },
  {
    icon: Warehouse,
    title: "Inventory & Supply Chain",
    description:
      "Cold chain compliance, stock reconciliation, and essential medicine availability management across government health facilities.",
    accent: "#0369a1",
  },
  {
    icon: Thermometer,
    title: "Cold Chain Management",
    description:
      "Temperature-sensitive commodity handling, storage protocol enforcement, and cold chain documentation.",
    accent: "#0d9488",
  },
  {
    icon: ClipboardList,
    title: "Pharmaceutical Administration",
    description:
      "Policy implementation, team coordination, and liaison with regulatory bodies, hospital departments, and government agencies.",
    accent: "#0369a1",
  },
  {
    icon: BookOpen,
    title: "Research & Outreach",
    description:
      "Health awareness campaigns, community outreach coordination, and evidence-based practice contributions.",
    accent: "#0d9488",
  },
];

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

export function ClinicalCompetencies() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 lg:py-36"
      style={{ background: "var(--ph-surface)" }}
    >
      {/* Top rule */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(3,105,161,0.15) 50%, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#0369a1" }}
          >
            02 · Core Competencies
          </p>
          <h2
            className="font-serif leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--ph-text)" }}
          >
            Clinical foundations.
          </h2>
          <p
            className="mx-auto mt-3 max-w-md text-sm leading-relaxed"
            style={{ color: "#64748b" }}
          >
            Five years of pharmaceutical practice across hospital, community, and government health systems.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {COMPETENCIES.map((c) => {
            const Icon = c.icon;
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
                  borderColor: `${c.accent}30`,
                }}
              >
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: `${c.accent}12`, border: `1px solid ${c.accent}25` }}
                >
                  <Icon size={16} style={{ color: c.accent }} />
                </div>
                <h3
                  className="mb-2 text-sm font-semibold leading-snug"
                  style={{ color: "var(--ph-text)" }}
                >
                  {c.title}
                </h3>
                <p className="text-xs leading-[1.8]" style={{ color: "#64748b" }}>
                  {c.description}
                </p>

                {/* Accent bottom line on hover */}
                <div
                  className="mt-5 h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-full"
                  style={{ background: `linear-gradient(90deg, ${c.accent}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
