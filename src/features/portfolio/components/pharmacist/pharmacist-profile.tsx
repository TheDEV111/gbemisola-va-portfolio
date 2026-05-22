"use client";

import { motion } from "framer-motion";

import { ClinicalCompetencies } from "./clinical-competencies";
import { ClinicalContact } from "./clinical-contact";
import { ClinicalCredentials } from "./clinical-credentials";
import { ClinicalExperience } from "./clinical-experience";
import { ClinicalHero } from "./clinical-hero";

export function PharmacistProfile() {
  return (
    <motion.div
      key="pharmacist-profile"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      style={{ background: "var(--ph-bg)" }}
    >
      <ClinicalHero />
      <ClinicalCompetencies />
      <ClinicalExperience />
      <ClinicalCredentials />
      <ClinicalContact />

      {/* Footer */}
      <footer
        className="border-t py-8 text-center"
        style={{
          background: "var(--ph-surface)",
          borderColor: "rgba(3,105,161,0.1)",
        }}
      >
        <p className="text-xs" style={{ color: "#94a3b8" }}>
          © {new Date().getFullYear()} Oluwagbemisola Oginni · Licensed Pharmacist · Lagos, Nigeria
        </p>
      </footer>
    </motion.div>
  );
}
