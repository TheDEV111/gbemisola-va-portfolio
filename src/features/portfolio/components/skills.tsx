"use client";

import { cn } from "@/shared/utils/cn";

import { SKILLS } from "../data/content";
import { useInView } from "../hooks/use-in-view";

export function Skills() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section
      id="skills"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-40"
      style={{ background: "var(--pf-surface)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,169,110,0.18) 50%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          className={cn("pf-reveal mb-16 text-center", isInView && "in-view")}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="pf-section-label mb-4">03 ─ Skills & Tools</p>
          <h2
            className="pf-serif leading-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "var(--pf-cream)",
            }}
          >
            The toolkit. The fluency.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((group, gi) => (
            <div
              key={group.category}
              className={cn("pf-reveal", isInView && "in-view")}
              style={{ transitionDelay: `${80 + gi * 100}ms` }}
            >
              <h3
                className="mb-5 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{ color: "var(--pf-gold)" }}
              >
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span key={tool} className="pf-skill-badge">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
