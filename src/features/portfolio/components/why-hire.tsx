"use client";

import { cn } from "@/shared/utils/cn";

import { WHY_HIRE } from "../data/content";
import { useInView } from "../hooks/use-in-view";

export function WhyHire() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section
      id="why-hire"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-40"
      style={{ background: "var(--pf-bg)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(167,139,250,0.12) 50%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          className={cn("pf-reveal mb-16 text-center", isInView && "in-view")}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="pf-section-label mb-4">06 ─ Why Work With Me</p>
          <h2
            className="pf-serif leading-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "var(--pf-cream)",
            }}
          >
            The difference is in the details.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_HIRE.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={cn(
                  "pf-reveal group flex flex-col rounded-2xl p-7 transition-all duration-300",
                  isInView && "in-view",
                )}
                style={{
                  background: "rgba(255,255,255,0.018)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transitionDelay: `${80 + i * 70}ms`,
                }}
              >
                <div
                  className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(200,169,110,0.07)",
                  }}
                >
                  <Icon size={17} style={{ color: "var(--pf-gold)" }} aria-hidden="true" />
                </div>

                <h3
                  className="mb-3 text-base font-semibold"
                  style={{ color: "var(--pf-cream)" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-[1.85]" style={{ color: "var(--pf-muted)" }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
