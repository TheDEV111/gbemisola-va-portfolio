"use client";

import { useEffect, useState } from "react";

import { ArrowDown } from "lucide-react";

import { OWNER } from "../data/content";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
      style={{ background: "var(--pf-bg)" }}
    >
      {/* Ambient glow — top */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[60vh] w-[80vw] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(200,169,110,0.09) 0%, transparent 65%)",
        }}
      />
      {/* Ambient glow — bottom-left accent */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[40vh] w-[40vw]"
        style={{
          background:
            "radial-gradient(ellipse at 0% 100%, rgba(167,139,250,0.05) 0%, transparent 60%)",
        }}
      />
      {/* Ambient glow — bottom-right accent */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[40vh] w-[40vw]"
        style={{
          background:
            "radial-gradient(ellipse at 100% 100%, rgba(200,169,110,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-28 pt-32 text-center lg:px-12">
        {/* Eyebrow */}
        <div
          className="mb-8 flex items-center justify-center gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          <span className="h-px w-10 shrink-0" style={{ background: "var(--pf-gold)" }} />
          <span
            className="text-xs font-semibold uppercase tracking-[0.25em]"
            style={{ color: "var(--pf-gold)" }}
          >
            Virtual Assistant · Lagos, Nigeria
          </span>
          <span className="h-px w-10 shrink-0" style={{ background: "var(--pf-gold)" }} />
        </div>

        {/* Name */}
        <h1
          className="pf-serif mb-7 leading-[0.92] tracking-tight"
          style={{
            fontSize: "clamp(3.8rem, 10vw, 9rem)",
            color: "var(--pf-cream)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.9s ease 0.25s, transform 0.9s ease 0.25s",
          }}
        >
          Gbemisola
          <br />
          <span style={{ color: "var(--pf-gold)" }}>Oginni</span>
        </h1>

        {/* Divider */}
        <div
          className="mx-auto mb-7 flex items-center gap-5"
          style={{
            maxWidth: "320px",
            opacity: mounted ? 1 : 0,
            transition: "opacity 0.8s ease 0.38s",
          }}
        >
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.1)" }} />
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: "var(--pf-muted)" }}>
            {OWNER.subtitle}
          </span>
          <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.1)" }} />
        </div>

        {/* Tagline */}
        <p
          className="mx-auto mb-5 text-2xl font-light leading-snug lg:text-3xl"
          style={{
            maxWidth: "680px",
            color: "var(--pf-cream)",
            opacity: mounted ? 0.9 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.9s ease 0.42s, transform 0.9s ease 0.42s",
          }}
        >
          {OWNER.tagline}
        </p>

        {/* Sub-tagline */}
        <p
          className="mx-auto mb-12 text-base leading-relaxed"
          style={{
            maxWidth: "560px",
            color: "var(--pf-muted)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.9s ease 0.52s, transform 0.9s ease 0.52s",
          }}
        >
          Five years in healthcare operations, government logistics, and pharmaceutical
          administration — now channelled into keeping your business ruthlessly organised.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap items-center justify-center gap-4"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.9s ease 0.64s, transform 0.9s ease 0.64s",
          }}
        >
          <a
            href={`mailto:${OWNER.email}?subject=Hire%20Inquiry&body=Hi%20Gbemisola%2C%20I%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20working%20together.`}
            className="pf-btn-primary rounded-full px-9 py-4 text-sm font-semibold tracking-wide"
          >
            Hire Me
          </a>
          <a
            href={OWNER.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="pf-btn-secondary rounded-full px-9 py-4 text-sm font-semibold tracking-wide"
          >
            View Resume
          </a>
        </div>

        {/* Floating stat pills */}
        <div
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
          style={{
            opacity: mounted ? 1 : 0,
            transition: "opacity 1s ease 0.9s",
          }}
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "6", label: "Professional Roles" },
            { value: "B.Pharm", label: "Licensed Pharmacist" },
            { value: "100%", label: "Confidentiality" },
          ].map((pill) => (
            <div
              key={pill.label}
              className="flex items-center gap-2.5 rounded-full px-5 py-2.5"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <span
                className="pf-serif text-sm font-semibold"
                style={{ color: "var(--pf-gold)" }}
              >
                {pill.value}
              </span>
              <span className="text-xs" style={{ color: "var(--pf-muted)" }}>
                {pill.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="pf-scroll-hint absolute bottom-10 left-1/2 flex flex-col items-center gap-2"
        aria-label="Scroll to about"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 1s ease 1.3s",
        }}
      >
        <span className="text-[0.6rem] uppercase tracking-[0.2em]" style={{ color: "var(--pf-muted)" }}>
          Scroll
        </span>
        <ArrowDown size={13} style={{ color: "var(--pf-gold)" }} />
      </button>
    </section>
  );
}
