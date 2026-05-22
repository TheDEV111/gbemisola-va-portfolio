"use client";

import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

import { useInView } from "../../hooks/use-in-view";

const CLINICAL_ROLES = [
  {
    role: "Corper Pharmacist (NYSC)",
    org: "Lagos State Ministry of Health, Alausa",
    badge: "NYSC",
    period: "Jun 2025 – May 2026",
    highlights: [
      "LMCU: Supported end-to-end pharmaceutical supply chain operations — warehouse receiving, inventory control, and last-mile delivery — ensuring stock availability across distribution points.",
      "LSMS: Managed warehouse workflows (picking, packing, labelling, storage optimisation), maintaining 98% inventory accuracy. Reduced order processing turnaround by reorganising warehouse layout.",
      "DPS: Supported regulatory oversight, documentation management, stakeholder coordination, and raising purchase orders.",
      "Trained and supervised interns on handling temperature-sensitive pharmaceuticals, hazardous materials, and expiry monitoring.",
    ],
    accent: "#0369a1",
    current: true,
  },
  {
    role: "Locum Pharmacist",
    org: "Andrea Pharmacy, Surulere",
    badge: "",
    period: "Dec 2025 – Feb 2026",
    highlights: [
      "Conducted comprehensive medication reviews and patient counselling, improving adherence and health outcomes for chronic disease patients.",
      "Identified and resolved over 200 medication-related problems including drug interactions, contraindications, and adherence barriers.",
      "Managed daily pharmacy operations including prescription processing, inventory management, and quality assurance.",
      "Implemented informal inventory tracking systems to optimise stock levels and reduce waste.",
    ],
    accent: "#0d9488",
    current: false,
  },
  {
    role: "Intern Pharmacist",
    org: "Federal Neuro-Psychiatric Hospital, Yaba",
    badge: "",
    period: "Feb 2024 – Jan 2025",
    highlights: [
      "Dispensed medications for neuropsychiatric conditions (epilepsy, ADHD, autism spectrum disorders) and monitored for drug interactions.",
      "Reviewed individualised medication regimens for paediatric patients, ensuring age-appropriate dosing and formulation.",
      "Collaborated with specialists to optimise pharmacotherapy for patients with complex needs.",
      "Conducted medication reconciliation during admissions and discharges; monitored adverse effects of psychotropic medications.",
      "Participated in interdisciplinary rounds and maintained accurate documentation in EHR systems per NAFDAC standards.",
    ],
    accent: "#0369a1",
    current: false,
  },
  {
    role: "Locum Pharmacist",
    org: "Ori Pharmacy, Shomolu",
    badge: "",
    period: "Mar 2023 – Nov 2024",
    highlights: [
      "Compared prescription details against safety standards and insurance requirements to support patients.",
      "Interacted with healthcare professionals to support timely and proper processing of prescriptions.",
      "Educated patients on possible drug interactions, potential side effects, and optimal methods of administration.",
    ],
    accent: "#0d9488",
    current: false,
  },
  {
    role: "Cover Pharmacist",
    org: "Jomavid Pharmacy, Itire",
    badge: "",
    period: "Oct 2023 – Feb 2024",
    highlights: [
      "Prepared packaging and labels for prescriptions, verifying accuracy of dosage, side effects, interactions, and refill instructions.",
      "Educated patients on possible drug interactions, potential side effects, and optimal administration methods.",
      "Compared prescription details against safety standards.",
    ],
    accent: "#0369a1",
    current: false,
  },
  {
    role: "Cover Pharmacist",
    org: "Pharma 33, Obanikoro",
    badge: "",
    period: "Aug 2023 – Sep 2023",
    highlights: [
      "Prepared packaging and labels for prescriptions, verifying accuracy of dosage, side effects, interactions, and refill instructions.",
      "Monitored inventory levels and notified procurement officer of out-of-stock items.",
    ],
    accent: "#0d9488",
    current: false,
  },
  {
    role: "Locum Pharmacist",
    org: "Protrust Pharmacy, Ebute Metta",
    badge: "",
    period: "Jun 2022 – Oct 2022",
    highlights: [
      "Followed policies, procedures, and best practices for pharmacy operations.",
      "Performed blood pressure and blood glucose tests on patients.",
      "Monitored inventory levels and reported items requiring reorder to the Superintendent Pharmacist.",
    ],
    accent: "#0369a1",
    current: false,
  },
  {
    role: "Pharmacy Student Intern",
    org: "Havana Specialist Hospital, Surulere",
    badge: "",
    period: "Sep 2021 – Nov 2021",
    highlights: [
      "Gained practical experience in medication dispensing, medication reconciliation, and inventory management in a hospital pharmacy setting.",
      "Assisted pharmacists in reviewing patient profiles, identifying drug-related problems, and providing pharmaceutical interventions.",
      "Participated in medication safety initiatives including error reporting and quality improvement projects.",
    ],
    accent: "#0d9488",
    current: false,
  },
  {
    role: "Pharmacy Student Intern",
    org: "Vatican Bells Pharmaceuticals Ltd., Surulere",
    badge: "",
    period: "Nov 2019 – Jan 2020",
    highlights: [
      "Gained foundational exposure to pharmaceutical dispensing, prescription processing, and pharmacy operations.",
      "Supported daily workflow and inventory management under supervision of licensed pharmacists.",
    ],
    accent: "#0369a1",
    current: false,
  },
];

export function ClinicalExperience() {
  const { ref, isInView } = useInView();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 lg:py-36"
      style={{ background: "var(--ph-bg)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(13,148,136,0.15) 50%, transparent)" }}
      />

      <div className="mx-auto max-w-4xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#0d9488" }}
          >
            03 · Clinical Experience
          </p>
          <h2
            className="font-serif leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--ph-text)" }}
          >
            A record built in practice.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical rule */}
          <div
            className="absolute left-3 top-0 hidden h-full w-px lg:left-4 lg:block"
            style={{ background: "rgba(3,105,161,0.1)" }}
          />

          <div className="flex flex-col gap-6">
            {CLINICAL_ROLES.map((role, i) => (
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
                    background: role.current ? role.accent : "#ffffff",
                    border: `2px solid ${role.accent}`,
                    boxShadow: role.current ? `0 0 10px ${role.accent}60` : "none",
                  }}
                />

                <div
                  className="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: "#ffffff",
                    border: `1px solid ${role.current ? role.accent + "25" : "rgba(3,105,161,0.08)"}`,
                    boxShadow: role.current
                      ? `0 2px 16px ${role.accent}12`
                      : "0 1px 4px rgba(3,105,161,0.04)",
                  }}
                >
                  {/* Header row */}
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="mb-1 flex flex-wrap items-center gap-2">
                        <h3
                          className="text-sm font-semibold"
                          style={{ color: "var(--ph-text)" }}
                        >
                          {role.role}
                        </h3>
                        {role.current && (
                          <span
                            className="rounded-full px-2 py-0.5 text-xs font-medium"
                            style={{ background: `${role.accent}12`, color: role.accent }}
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
                        <span className="text-xs font-medium" style={{ color: role.accent }}>
                          {role.org}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
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

                  {/* Highlights */}
                  <ul className="flex flex-col gap-2">
                    {role.highlights.map((h, hi) => (
                      <li key={hi} className="flex items-start gap-2.5">
                        <span
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                          style={{ background: role.accent }}
                        />
                        <span className="text-xs leading-[1.85]" style={{ color: "#64748b" }}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
