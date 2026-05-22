"use client";

import { useRef } from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Stethoscope } from "lucide-react";

import { useProfile, type Profile } from "../context/profile-context";

export function ProfileToggle() {
  const { profile, switchProfile, isTransitioning } = useProfile();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSwitch = (to: Profile) => {
    if (to === profile || isTransitioning) {return;}
    const rect = containerRef.current?.getBoundingClientRect();
    const origin = rect
      ? { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      : { x: window.innerWidth / 2, y: 40 };
    switchProfile(to, origin);
  };

  const isVA = profile === "va";
  const pillSpring = { type: "spring", stiffness: 400, damping: 35 } as const;

  return (
    <div ref={containerRef} className="relative flex items-center" aria-label="Switch professional profile">
      <div
        className="relative flex items-center rounded-full p-1"
        style={{
          background: isVA ? "rgba(200,169,110,0.08)" : "rgba(3,105,161,0.08)",
          border: isVA
            ? "1px solid rgba(200,169,110,0.25)"
            : "1px solid rgba(3,105,161,0.3)",
          transition: "background 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* VA button */}
        <button
          onClick={() => handleSwitch("va")}
          disabled={isTransitioning}
          className="relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300"
          style={{ color: isVA ? "#c8a96e" : "#94a3b8" }}
          aria-pressed={isVA}
        >
          {isVA && (
            <motion.span
              layoutId="toggle-pill"
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(200,169,110,0.2), rgba(200,169,110,0.1))",
                border: "1px solid rgba(200,169,110,0.3)",
              }}
              transition={pillSpring}
            />
          )}
          <span className="relative z-10 flex items-center gap-1.5">
            <AnimatePresence mode="wait">
              <motion.span
                key={isVA ? "briefcase-active" : "briefcase-idle"}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Briefcase size={12} strokeWidth={isVA ? 2.5 : 1.8} />
              </motion.span>
            </AnimatePresence>
            <span className="hidden sm:inline">Virtual Assistant</span>
          </span>
        </button>

        {/* Pharmacist button */}
        <button
          onClick={() => handleSwitch("pharmacist")}
          disabled={isTransitioning}
          className="relative z-10 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-300"
          style={{ color: !isVA ? "#0369a1" : "#94a3b8" }}
          aria-pressed={!isVA}
        >
          {!isVA && (
            <motion.span
              layoutId="toggle-pill"
              className="absolute inset-0 rounded-full"
              style={{
                background: "linear-gradient(135deg, rgba(3,105,161,0.25), rgba(13,148,136,0.15))",
                border: "1px solid rgba(3,105,161,0.35)",
              }}
              transition={pillSpring}
            />
          )}
          <span className="relative z-10 flex items-center gap-1.5">
            <AnimatePresence mode="wait">
              <motion.span
                key={!isVA ? "steth-active" : "steth-idle"}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Stethoscope size={12} strokeWidth={!isVA ? 2.5 : 1.8} />
              </motion.span>
            </AnimatePresence>
            <span className="hidden sm:inline">Pharmacist</span>
          </span>
        </button>
      </div>
    </div>
  );
}
