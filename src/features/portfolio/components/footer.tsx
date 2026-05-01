"use client";

import { ArrowUpRight } from "lucide-react";

import { OWNER } from "../data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative border-t py-10"
      style={{
        background: "var(--pf-bg)",
        borderColor: "rgba(255,255,255,0.06)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row lg:px-12">
        <p className="text-xs" style={{ color: "var(--pf-muted)" }}>
          © {year} {OWNER.displayName} · All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href={`mailto:${OWNER.email}`}
            className="flex items-center gap-1 text-xs transition-colors duration-200 hover:underline"
            style={{ color: "var(--pf-muted)" }}
          >
            {OWNER.email}
          </a>
          <a
            href={OWNER.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs transition-colors duration-200"
            style={{ color: "var(--pf-muted)" }}
          >
            LinkedIn <ArrowUpRight size={11} />
          </a>
        </div>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-xs uppercase tracking-widest transition-colors duration-200 hover:underline"
          style={{ color: "var(--pf-gold)" }}
        >
          Back to Top ↑
        </button>
      </div>
    </footer>
  );
}
