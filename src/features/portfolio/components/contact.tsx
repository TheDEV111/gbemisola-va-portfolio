"use client";

import { useState } from "react";

import { ArrowUpRight, Linkedin, Mail, MapPin } from "lucide-react";

import { cn } from "@/shared/utils/cn";

import { OWNER } from "../data/content";
import { useInView } from "../hooks/use-in-view";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function Contact() {
  const { ref: sectionRef, isInView } = useInView();
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      form.subject || `Inquiry from ${form.name}`,
    );
    const body = encodeURIComponent(
      `Hi Gbemisola,\n\nMy name is ${form.name} (${form.email}).\n\n${form.message}\n\nBest regards,\n${form.name}`,
    );

    window.location.href = `mailto:${OWNER.email}?subject=${subject}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-xl border bg-transparent px-5 py-3.5 text-sm outline-none transition-all duration-200 placeholder:opacity-40 focus:border-opacity-100";
  const inputStyle = {
    borderColor: "rgba(255,255,255,0.08)",
    color: "var(--pf-cream)",
    background: "rgba(255,255,255,0.025)",
  };

  return (
    <section
      id="contact"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-28 lg:py-40"
      style={{ background: "var(--pf-surface)" }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(200,169,110,0.2) 50%, transparent)",
        }}
      />

      {/* Background glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px]"
        style={{
          background:
            "radial-gradient(circle at 80% 80%, rgba(200,169,110,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div
          className={cn("pf-reveal mb-16 text-center", isInView && "in-view")}
          style={{ transitionDelay: "0ms" }}
        >
          <p className="pf-section-label mb-4">07 ─ Get In Touch</p>
          <h2
            className="pf-serif leading-tight"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              color: "var(--pf-cream)",
            }}
          >
            Let&rsquo;s build something
            <br />
            <em className="not-italic" style={{ color: "var(--pf-gold)" }}>
              excellent.
            </em>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
          {/* Left — Contact info */}
          <div
            className={cn("pf-reveal flex flex-col justify-between gap-10", isInView && "in-view")}
            style={{ transitionDelay: "100ms" }}
          >
            <div>
              <p
                className="mb-8 max-w-sm text-base leading-[1.9]"
                style={{ color: "var(--pf-muted)" }}
              >
                Whether you&rsquo;re looking for a dedicated VA, short-term project support, or
                just want to explore how I could help — I&rsquo;d love to hear from you.
              </p>

              <div className="flex flex-col gap-5">
                <a
                  href={`mailto:${OWNER.email}`}
                  className="group flex items-center gap-4 transition-colors duration-200"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(200,169,110,0.07)",
                      border: "1px solid rgba(200,169,110,0.15)",
                    }}
                  >
                    <Mail size={16} style={{ color: "var(--pf-gold)" }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest" style={{ color: "var(--pf-muted)" }}>
                      Email
                    </p>
                    <p
                      className="text-sm font-medium transition-colors duration-200 group-hover:underline"
                      style={{ color: "var(--pf-cream)" }}
                    >
                      {OWNER.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(200,169,110,0.07)",
                      border: "1px solid rgba(200,169,110,0.15)",
                    }}
                  >
                    <MapPin size={16} style={{ color: "var(--pf-gold)" }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest" style={{ color: "var(--pf-muted)" }}>
                      Location
                    </p>
                    <p className="text-sm font-medium" style={{ color: "var(--pf-cream)" }}>
                      {OWNER.location}
                    </p>
                  </div>
                </div>

                <a
                  href={OWNER.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 transition-colors duration-200"
                >
                  <div
                    className="flex h-11 w-11 items-center justify-center rounded-xl"
                    style={{
                      background: "rgba(200,169,110,0.07)",
                      border: "1px solid rgba(200,169,110,0.15)",
                    }}
                  >
                    <Linkedin size={16} style={{ color: "var(--pf-gold)" }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest" style={{ color: "var(--pf-muted)" }}>
                      LinkedIn
                    </p>
                    <p
                      className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 group-hover:underline"
                      style={{ color: "var(--pf-cream)" }}
                    >
                      View Profile
                      <ArrowUpRight size={13} />
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Availability card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(200,169,110,0.04)",
                border: "1px solid rgba(200,169,110,0.15)",
              }}
            >
              <div className="mb-3 flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: "#4ade80", boxShadow: "0 0 8px #4ade80" }}
                />
                <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4ade80" }}>
                  Currently Available
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "var(--pf-muted)" }}>
                Open to freelance contracts, part-time retainers, and full-time remote
                VA roles. Response time is typically under 24 hours.
              </p>
            </div>
          </div>

          {/* Right — Contact form */}
          <form
            onSubmit={handleSubmit}
            className={cn("pf-reveal", isInView && "in-view")}
            style={{ transitionDelay: "200ms" }}
          >
            <div
              className="rounded-2xl p-8"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs uppercase tracking-widest"
                      style={{ color: "var(--pf-muted)" }}
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Amara Okafor"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs uppercase tracking-widest"
                      style={{ color: "var(--pf-muted)" }}
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs uppercase tracking-widest"
                    style={{ color: "var(--pf-muted)" }}
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Hiring Inquiry / Project Discussion"
                    className={inputClass}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-widest"
                    style={{ color: "var(--pf-muted)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about what you need and how I can help…"
                    className={inputClass}
                    style={{ ...inputStyle, resize: "none" }}
                  />
                </div>

                <button
                  type="submit"
                  className="pf-btn-primary mt-2 w-full rounded-xl py-4 text-sm font-semibold tracking-wide"
                >
                  Send Message — Opens Email App
                </button>

                <p className="text-center text-xs" style={{ color: "var(--pf-muted)", opacity: 0.6 }}>
                  This will open your default mail client with the message pre-filled.
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
