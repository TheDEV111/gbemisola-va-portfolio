"use client";


import { cn } from "@/shared/utils/cn";

import { ABOUT, OWNER } from "../data/content";
import { useInView } from "../hooks/use-in-view";

export function About() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section
      id="about"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden py-28 lg:py-40"
      style={{ background: "var(--pf-surface)" }}
    >
      {/* Subtle top border */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,169,110,0.2) 40%, rgba(200,169,110,0.2) 60%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_1.2fr]">
          {/* Left — Label + Stats */}
          <div>
            <div
              className={cn("pf-reveal", isInView && "in-view")}
              style={{ transitionDelay: "0ms" }}
            >
              <p className="pf-section-label mb-4">01 ─ About</p>
              <h2
                className="pf-serif mb-12 leading-tight"
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                  color: "var(--pf-cream)",
                }}
              >
                {ABOUT.headline}
              </h2>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6">
              {ABOUT.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={cn("pf-reveal pf-card rounded-2xl p-6", isInView && "in-view")}
                  style={{ transitionDelay: `${(i + 1) * 80}ms` }}
                >
                  <p
                    className="pf-serif mb-1 text-4xl font-bold leading-none"
                    style={{ color: "var(--pf-gold)" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-sm leading-snug" style={{ color: "var(--pf-muted)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Signature / credentials */}
            <div
              className={cn("pf-reveal mt-10 flex items-center gap-4", isInView && "in-view")}
              style={{ transitionDelay: "360ms" }}
            >
              <div
                className="h-px flex-1"
                style={{ background: "rgba(255,255,255,0.07)" }}
              />
              <div className="text-right">
                <p
                  className="pf-serif text-sm italic"
                  style={{ color: "var(--pf-muted)" }}
                >
                  {OWNER.displayName}
                </p>
                <p className="text-xs uppercase tracking-widest" style={{ color: "var(--pf-gold)" }}>
                  B.Pharm · Licensed Pharmacist
                </p>
              </div>
            </div>
          </div>

          {/* Right — Bio paragraphs */}
          <div className="flex flex-col justify-center gap-7">
            {ABOUT.paragraphs.map((para, i) => (
              <p
                key={i}
                className={cn("pf-reveal text-base leading-[1.9]", isInView && "in-view")}
                style={{
                  color: i === 0 ? "var(--pf-cream)" : "var(--pf-muted)",
                  fontSize: i === 0 ? "1.05rem" : "1rem",
                  transitionDelay: `${(i + 2) * 100}ms`,
                }}
              >
                {para}
              </p>
            ))}

            {/* Highlighted pull quote */}
            <blockquote
              className={cn("pf-reveal mt-2 border-l-2 pl-6", isInView && "in-view")}
              style={{
                borderColor: "var(--pf-gold)",
                transitionDelay: "500ms",
              }}
            >
              <p className="text-base italic leading-relaxed" style={{ color: "var(--pf-cream)" }}>
                &ldquo;I don&rsquo;t just execute tasks — I protect the conditions that allow you
                to do your best work.&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
