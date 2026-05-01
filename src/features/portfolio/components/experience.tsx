"use client";

import { cn } from "@/shared/utils/cn";

import { EXPERIENCE } from "../data/content";
import { useInView } from "../hooks/use-in-view";

export function Experience() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section
      id="experience"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-40"
      style={{ background: "var(--pf-bg)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(167,139,250,0.15) 50%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          className={cn("pf-reveal mb-16 text-center", isInView && "in-view")}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="pf-section-label mb-4">04 ─ Experience</p>
          <h2
            className="pf-serif leading-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "var(--pf-cream)",
            }}
          >
            A track record built in the field.
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 hidden h-full w-px lg:block"
            style={{ background: "rgba(255,255,255,0.06)" }}
          />

          <div className="flex flex-col gap-8">
            {EXPERIENCE.map((job, i) => (
              <div
                key={`${job.role}-${job.period}`}
                className={cn("pf-reveal lg:pl-12", isInView && "in-view")}
                style={{ transitionDelay: `${80 + i * 90}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-0 hidden h-3 w-3 -translate-x-[5px] rounded-full lg:block"
                  style={{
                    background: i === 0 ? "var(--pf-gold)" : "var(--pf-surface)",
                    border: `1.5px solid ${i === 0 ? "var(--pf-gold)" : "rgba(255,255,255,0.15)"}`,
                    top: "1.6rem",
                    boxShadow: i === 0 ? "0 0 10px rgba(200,169,110,0.4)" : "none",
                  }}
                />

                <div
                  className="pf-card rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    borderColor: i === 0 ? "rgba(200,169,110,0.2)" : undefined,
                  }}
                >
                  {/* Header */}
                  <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3
                        className="text-base font-semibold"
                        style={{ color: "var(--pf-cream)" }}
                      >
                        {job.role}
                      </h3>
                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span
                          className="text-sm font-medium"
                          style={{ color: "var(--pf-gold)" }}
                        >
                          {job.company}
                        </span>
                        {job.type && (
                          <>
                            <span style={{ color: "var(--pf-muted)" }}>·</span>
                            <span
                              className="rounded-full px-2.5 py-0.5 text-xs"
                              style={{
                                background: "rgba(167,139,250,0.08)",
                                border: "1px solid rgba(167,139,250,0.2)",
                                color: "#a78bfa",
                              }}
                            >
                              {job.type}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <span
                      className="shrink-0 rounded-full px-3 py-1 text-xs"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.07)",
                        color: "var(--pf-muted)",
                      }}
                    >
                      {job.period}
                    </span>
                  </div>

                  {/* Highlights */}
                  <ul className="flex flex-col gap-3">
                    {job.highlights.map((point, pi) => (
                      <li key={pi} className="flex items-start gap-3">
                        <span
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full"
                          style={{ background: "var(--pf-gold)" }}
                        />
                        <span className="text-sm leading-[1.8]" style={{ color: "var(--pf-muted)" }}>
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
