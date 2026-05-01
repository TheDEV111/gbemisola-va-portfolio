"use client";

import { useEffect, useState } from "react";

import { OWNER } from "../data/content";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(6, 6, 14, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">
        {/* Logo / Wordmark */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2"
          aria-label="Back to top"
        >
          <span
            className="text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300"
            style={{ color: "var(--pf-gold)" }}
          >
            {OWNER.firstName}
          </span>
          <span className="h-px w-6 transition-all duration-300 group-hover:w-10" style={{ background: "var(--pf-gold)" }} />
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="pf-nav-link text-sm tracking-wide transition-colors duration-200"
                style={{ color: "var(--pf-muted)" }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={`mailto:${OWNER.email}`}
          className="hidden rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/5 md:block"
          style={{
            borderColor: "rgba(200, 169, 110, 0.4)",
            color: "var(--pf-gold)",
          }}
        >
          Let&#39;s Talk
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className="h-px w-6 transition-all duration-300"
            style={{
              background: "var(--pf-cream)",
              transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : undefined,
            }}
          />
          <span
            className="h-px transition-all duration-300"
            style={{
              background: "var(--pf-cream)",
              width: menuOpen ? "0" : "1rem",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="h-px w-6 transition-all duration-300"
            style={{
              background: "var(--pf-cream)",
              transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : undefined,
            }}
          />
        </button>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="border-t px-6 pb-8 pt-4 md:hidden"
          style={{
            background: "rgba(6, 6, 14, 0.98)",
            borderColor: "rgba(255,255,255,0.06)",
          }}
        >
          <ul className="flex flex-col gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-base tracking-wide"
                  style={{ color: "var(--pf-muted)" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${OWNER.email}`}
                className="inline-block rounded-full border px-5 py-2 text-sm font-medium"
                style={{
                  borderColor: "rgba(200, 169, 110, 0.4)",
                  color: "var(--pf-gold)",
                }}
              >
                Let&#39;s Talk
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
