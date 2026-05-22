"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { useProfile, type Profile } from "../context/profile-context";

// Background colour of each profile — the cover panel is painted this colour
// so it blends seamlessly with the outgoing page before it folds away.
const PROFILE_BG: Record<Profile, string> = {
  va: "#06060e",
  pharmacist: "#f0f5fb",
};

export function ProfileTransition() {
  const { isTransitioning, transitionOrigin, profile } = useProfile();
  const [active, setActive] = useState(false);
  const [coverColor, setCoverColor] = useState(PROFILE_BG.va);
  const [foldAngle, setFoldAngle] = useState<-90 | 90>(-90);
  const prevProfileRef = useRef<Profile>(profile);

  useEffect(() => {
    if (isTransitioning) {
      // prevProfileRef still holds the OLD profile — capture its colour
      setCoverColor(PROFILE_BG[prevProfileRef.current]);
      // Fold direction follows the button side: pharmacist is right → fold left (-Y)
      setFoldAngle(profile === "pharmacist" ? -90 : 90);
      setActive(true);
    }
    prevProfileRef.current = profile;
  }, [isTransitioning, profile]);

  const ox = transitionOrigin.x;

  if (!active) {return null;}

  return (
    // Wrapper div supplies CSS perspective so the child gets true 3D depth
    <div
      className="pointer-events-none fixed inset-0 z-[9999]"
      style={{ perspective: "1200px" }}
    >
      <motion.div
        className="h-full w-full"
        style={{
          background: coverColor,
          transformOrigin: `${ox}px 50%`,
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: foldAngle }}
        transition={{ duration: 0.42, ease: [0.4, 0, 0.2, 1] }}
        onAnimationComplete={() => setActive(false)}
      />
    </div>
  );
}
