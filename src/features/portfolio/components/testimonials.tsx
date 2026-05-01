"use client";

import { Quote } from "lucide-react";

import { cn } from "@/shared/utils/cn";

import { TESTIMONIALS } from "../data/content";
import { useInView } from "../hooks/use-in-view";

export function Testimonials() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section
      id="testimonials"
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

      {/* Background accent */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(200,169,110,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div
          className={cn("pf-reveal mb-16 text-center", isInView && "in-view")}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="pf-section-label mb-4">05 ─ Testimonials</p>
          <h2
            className="pf-serif leading-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "var(--pf-cream)",
            }}
          >
            What clients say.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.name}
              className={cn(
                "pf-reveal pf-card group flex flex-col rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1",
                isInView && "in-view",
              )}
              style={{ transitionDelay: `${80 + i * 110}ms` }}
            >
              {/* Quote icon */}
              <Quote
                size={20}
                className="mb-6 shrink-0"
                style={{ color: "var(--pf-gold)", opacity: 0.7 }}
                aria-hidden="true"
              />

              {/* Quote text */}
              <p
                className="mb-8 flex-1 text-sm leading-[1.9] italic"
                style={{ color: "var(--pf-muted)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                {/* Avatar initials */}
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(200,169,110,0.1)",
                    border: "1px solid rgba(200,169,110,0.2)",
                    color: "var(--pf-gold)",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium" style={{ color: "var(--pf-cream)" }}>
                    {t.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--pf-muted)" }}>
                    {t.title}
                  </p>
                </div>
              </div>

              {/* Bottom accent */}
              <div
                className="mt-6 h-px w-0 transition-all duration-500 group-hover:w-full"
                style={{ background: "var(--pf-gold)", opacity: 0.2 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
