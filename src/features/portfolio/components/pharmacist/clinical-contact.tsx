"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Linkedin, Mail, MapPin } from "lucide-react";

import { OWNER } from "../../data/content";
import { useInView } from "../../hooks/use-in-view";

export function ClinicalContact() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Clinical Pharmacist Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Hi Gbemisola,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}\n\nBest regards,\n${form.name}`,
    );
    window.location.href = `mailto:${OWNER.email}?subject=${subject}&body=${body}`;
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    background: "#ffffff",
    border: "1.5px solid rgba(3,105,161,0.15)",
    borderRadius: "12px",
    padding: "12px 16px",
    fontSize: "14px",
    color: "#0c1a2e",
    outline: "none",
    transition: "border-color 0.2s ease",
  };

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-24 lg:py-36"
      style={{ background: "var(--ph-surface)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(3,105,161,0.15) 50%, transparent)" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]"
            style={{ color: "#0369a1" }}
          >
            05 · Contact
          </p>
          <h2
            className="font-serif leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", color: "var(--ph-text)" }}
          >
            Open to clinical opportunities.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed" style={{ color: "#64748b" }}>
            Hospital roles, pharmaceutical research, health system management, or collaborative projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
          {/* Left */}
          <motion.div
            className="flex flex-col gap-8"
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* CV Download card */}
            <a
              href="/CV Pharmacist Oginni Oluwagbemisola.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl p-5 transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(3,105,161,0.06), rgba(13,148,136,0.04))",
                border: "1.5px solid rgba(3,105,161,0.18)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(3,105,161,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "linear-gradient(135deg, rgba(3,105,161,0.1), rgba(13,148,136,0.07))";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(3,105,161,0.18)";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "linear-gradient(135deg, rgba(3,105,161,0.06), rgba(13,148,136,0.04))";
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: "#0369a1", boxShadow: "0 4px 12px rgba(3,105,161,0.3)" }}
                >
                  <Download size={15} style={{ color: "#ffffff" }} />
                </div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: "#0c1a2e" }}>
                    Clinical CV
                  </p>
                  <p className="text-xs" style={{ color: "#64748b" }}>
                    Full pharmaceutical career history
                  </p>
                </div>
              </div>
              <ArrowUpRight
                size={16}
                style={{ color: "#0369a1" }}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            {/* Contact details */}
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${OWNER.email}`}
                className="group flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: "rgba(3,105,161,0.07)", border: "1px solid rgba(3,105,161,0.15)" }}
                >
                  <Mail size={14} style={{ color: "#0369a1" }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#94a3b8" }}>Email</p>
                  <p className="text-sm font-medium group-hover:underline" style={{ color: "#0c1a2e" }}>
                    {OWNER.email}
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: "rgba(3,105,161,0.07)", border: "1px solid rgba(3,105,161,0.15)" }}
                >
                  <MapPin size={14} style={{ color: "#0369a1" }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#94a3b8" }}>Location</p>
                  <p className="text-sm font-medium" style={{ color: "#0c1a2e" }}>{OWNER.location}</p>
                </div>
              </div>

              <a
                href={OWNER.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl"
                  style={{ background: "rgba(3,105,161,0.07)", border: "1px solid rgba(3,105,161,0.15)" }}
                >
                  <Linkedin size={14} style={{ color: "#0369a1" }} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest" style={{ color: "#94a3b8" }}>LinkedIn</p>
                  <p className="flex items-center gap-1 text-sm font-medium group-hover:underline" style={{ color: "#0c1a2e" }}>
                    View Profile <ArrowUpRight size={12} />
                  </p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: "#f8fafc",
                border: "1.5px solid rgba(3,105,161,0.1)",
              }}
            >
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest" style={{ color: "#64748b" }}>
                      Your Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Dr. Amara Okafor"
                      style={inputBase}
                      onFocus={(e) => (e.target.style.borderColor = "#0369a1")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(3,105,161,0.15)")}
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest" style={{ color: "#64748b" }}>
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@hospital.org"
                      style={inputBase}
                      onFocus={(e) => (e.target.style.borderColor = "#0369a1")}
                      onBlur={(e) => (e.target.style.borderColor = "rgba(3,105,161,0.15)")}
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-medium uppercase tracking-widest" style={{ color: "#64748b" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe the role or opportunity you have in mind..."
                    style={{ ...inputBase, resize: "none" }}
                    onFocus={(e) => (e.target.style.borderColor = "#0369a1")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(3,105,161,0.15)")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full cursor-pointer rounded-xl py-3.5 text-sm font-semibold tracking-wide transition-all duration-300"
                  style={{ background: "#0369a1", color: "#ffffff" }}
                  onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.background = "#0284c7")}
                  onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.background = "#0369a1")}
                >
                  Send Message (Opens Email App)
                </button>
                <p className="text-center text-xs" style={{ color: "#94a3b8" }}>
                  Response time is typically within 24 hours.
                </p>
              </div>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
