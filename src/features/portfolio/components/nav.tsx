"use client";

import { useEffect, useState } from "react";

import { ProfileToggle } from "./profile-toggle";
import { useProfile } from "../context/profile-context";
import { OWNER } from "../data/content";

const VA_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const PH_LINKS = [
  { label: "Competencies", href: "#competencies" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { profile } = useProfile();

  const isVA = profile === "va";
  const links = isVA ? VA_LINKS : PH_LINKS;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    // For pharmacist profile, sections use id without # prefix
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: "smooth" });
  };

  const navBg = scrolled
    ? isVA
      ? "rgba(6, 6, 14, 0.92)"
      : "rgba(255, 255, 255, 0.94)"
    : "transparent";

  const borderColor = scrolled
    ? isVA
      ? "rgba(255,255,255,0.05)"
      : "rgba(3,105,161,0.1)"
    : "transparent";

  const logoColor = isVA ? "var(--pf-gold)" : "#0369a1";
  const mutedColor = isVA ? "var(--pf-muted)" : "#64748b";
  const hamburgerColor = isVA ? "var(--pf-cream)" : "#0c1a2e";

  return (
    <header
      className="fixed top-0 z-50 w-full transition-all duration-500"
      style={{
        background: navBg,
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: `1px solid ${borderColor}`,
      }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2"
          aria-label="Back to top"
        >
          <span
            className="text-sm font-medium tracking-[0.18em] uppercase transition-colors duration-300"
            style={{ color: logoColor }}
          >
            {OWNER.firstName}
          </span>
          <span
            className="h-px w-6 transition-all duration-300 group-hover:w-10"
            style={{ background: logoColor }}
          />
        </button>

        {/* Centre — Profile Toggle (desktop) */}
        <div className="hidden md:flex">
          <ProfileToggle />
        </div>

        {/* Desktop right — links + CTA */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm tracking-wide transition-colors duration-200 hover:opacity-100"
                  style={{ color: mutedColor }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <a
            href={`mailto:${OWNER.email}`}
            className="rounded-full border px-5 py-2 text-sm font-medium transition-all duration-300"
            style={{
              borderColor: isVA ? "rgba(200,169,110,0.4)" : "rgba(3,105,161,0.4)",
              color: isVA ? "var(--pf-gold)" : "#0369a1",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = isVA
                ? "rgba(200,169,110,0.06)"
                : "rgba(3,105,161,0.06)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
            }}
          >
            Let&#39;s Talk
          </a>
        </div>

        {/* Mobile — toggle + hamburger */}
        <div className="flex items-center gap-3 md:hidden">
          <ProfileToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            <span
              className="h-px w-6 transition-all duration-300"
              style={{
                background: hamburgerColor,
                transform: menuOpen ? "rotate(45deg) translate(3px, 3px)" : undefined,
              }}
            />
            <span
              className="h-px transition-all duration-300"
              style={{
                background: hamburgerColor,
                width: menuOpen ? "0" : "1rem",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="h-px w-6 transition-all duration-300"
              style={{
                background: hamburgerColor,
                transform: menuOpen ? "rotate(-45deg) translate(3px, -3px)" : undefined,
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="border-t px-6 pb-8 pt-4 md:hidden"
          style={{
            background: isVA ? "rgba(6, 6, 14, 0.98)" : "rgba(255,255,255,0.98)",
            borderColor: isVA ? "rgba(255,255,255,0.06)" : "rgba(3,105,161,0.1)",
          }}
        >
          <ul className="flex flex-col gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-base tracking-wide"
                  style={{ color: mutedColor }}
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
                  borderColor: isVA ? "rgba(200,169,110,0.4)" : "rgba(3,105,161,0.4)",
                  color: isVA ? "var(--pf-gold)" : "#0369a1",
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
