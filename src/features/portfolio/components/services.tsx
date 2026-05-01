"use client";

import { cn } from "@/shared/utils/cn";

import { SERVICES } from "../data/content";
import { useInView } from "../hooks/use-in-view";

export function Services() {
  const { ref: sectionRef, isInView } = useInView();

  return (
    <section
      id="services"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-40"
      style={{ background: "var(--pf-bg)" }}
    >
      {/* Top border gradient */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(167,139,250,0.15) 50%, transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div
          className={cn("pf-reveal mb-16 text-center", isInView && "in-view")}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="pf-section-label mb-4">02 ─ Services</p>
          <h2
            className="pf-serif mb-5 leading-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "var(--pf-cream)",
            }}
          >
            What I bring to your table.
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed" style={{ color: "var(--pf-muted)" }}>
            From inbox zero to complex project tracking — I cover the full spectrum of virtual
            assistance with the rigor of a healthcare professional.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={cn("pf-reveal pf-service-card group rounded-2xl p-7", isInView && "in-view")}
                style={{ transitionDelay: `${80 + i * 55}ms` }}
              >
                {/* Icon */}
                <div
                  className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-300"
                  style={{
                    background: "rgba(200,169,110,0.08)",
                    border: "1px solid rgba(200,169,110,0.15)",
                  }}
                >
                  <Icon
                    size={19}
                    style={{ color: "var(--pf-gold)" }}
                    aria-hidden="true"
                  />
                </div>

                {/* Text */}
                <h3
                  className="mb-3 text-base font-semibold"
                  style={{ color: "var(--pf-cream)" }}
                >
                  {service.title}
                </h3>
                <p className="text-sm leading-[1.8]" style={{ color: "var(--pf-muted)" }}>
                  {service.description}
                </p>

                {/* Hover accent line */}
                <div
                  className="mt-6 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: "var(--pf-gold)", opacity: 0.3 }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
