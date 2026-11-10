"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Send, AlertCircle, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MotionReveal } from "@/components/motion/MotionReveal";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<"idle" | "opened">("idle");

  const copyEmail = () => {
    navigator.clipboard.writeText("gaurav.init13@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText("+919628135776");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Please write at least 10 characters";
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const subjectLine = `[Portfolio Contact] ${formData.subject.trim()}`;
    const bodyText = `Hi Gaurav,\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}\n\n---\nSent via Portfolio Contact Form`;

    const mailtoUrl = `mailto:gaurav.init13@gmail.com?subject=${encodeURIComponent(
      subjectLine
    )}&body=${encodeURIComponent(bodyText)}`;

    window.location.href = mailtoUrl;
    setSubmitStatus("opened");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 scroll-mt-16 border-b border-void-border/30 relative">
      {/* Anchor alias for #get-in-touch */}
      <div id="get-in-touch" className="absolute -top-16 left-0 h-0 w-0 pointer-events-none" />

      <Container size="lg">
        <MotionReveal delay={0.1}>
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-void-border/40 pb-6 mb-12">
            <div>
              <span className="font-mono text-xs text-crimson-glow tracking-widest uppercase block mb-1">
                {"//"} 08. DIRECT CONTACT
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-neutral-white">
                Get in Touch
              </h2>
            </div>
            <p className="font-mono text-xs text-neutral-muted sm:text-right">
              Open to Software Engineering &amp; Systems Roles
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (5 Cols): Invitation & Direct Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-neutral-white">
                  Let&apos;s build something resilient together.
                </h3>
                <p className="font-light text-base text-neutral-light leading-relaxed">
                  I am actively seeking software engineering roles, distributed systems projects, and technical collaborations.
                  Whether you have an opportunity or simply want to connect, feel free to reach out.
                </p>
              </div>

              {/* Email Address Detail */}
              <div className="space-y-2">
                <span className="font-mono text-xs text-neutral-muted uppercase tracking-wider block">
                  Primary Direct Channel
                </span>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:gaurav.init13@gmail.com"
                    className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-void-border-bright bg-void-elevated/80 hover:bg-void-border hover:border-crimson-primary/50 text-neutral-white hover:text-crimson-glow font-mono text-sm sm:text-base font-medium transition-all group"
                    aria-label="Send email to gaurav.init13@gmail.com"
                  >
                    <Mail className="h-4 w-4 text-crimson-glow group-hover:scale-110 transition-transform shrink-0" />
                    <span className="break-all sm:break-normal">gaurav.init13@gmail.com</span>
                  </a>

                  <button
                    onClick={copyEmail}
                    className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-void-border bg-void-charcoal/60 hover:bg-void-elevated text-neutral-light hover:text-white font-mono text-xs transition-colors"
                    aria-label="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-crimson-glow" />
                        <span className="text-crimson-glow">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Details & Social Links Bar */}
              <div className="space-y-6 pt-6 border-t border-void-border/40 font-mono text-xs">
                {/* Social Profiles */}
                <div className="space-y-1.5">
                  <span className="text-neutral-muted block uppercase tracking-wider">Social Profiles</span>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://github.com/Gauravgits1308"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-neutral-light hover:text-crimson-glow transition-colors"
                    >
                      <span>GitHub</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                    <a
                      href="https://linkedin.com/in/gaurav-gupta-48258a323"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-neutral-light hover:text-crimson-glow transition-colors"
                    >
                      <span>LinkedIn</span>
                      <ArrowUpRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <span className="text-neutral-muted block uppercase tracking-wider">Phone / WhatsApp</span>
                  <div className="flex items-center gap-2">
                    <a
                      href="tel:+919628135776"
                      className="text-neutral-light hover:text-white transition-colors"
                    >
                      +91-9628135776
                    </a>
                    <button
                      onClick={copyPhone}
                      className="p-1 text-neutral-muted hover:text-crimson-glow transition-colors"
                      title="Copy phone"
                    >
                      {copiedPhone ? <Check className="h-3 w-3 text-crimson-glow" /> : <Copy className="h-3 w-3" />}
                    </button>
                  </div>
                </div>

                {/* Location */}
                <div className="space-y-1.5">
                  <span className="text-neutral-muted block uppercase tracking-wider">Location Base</span>
                  <p className="text-neutral-light">Kota, Rajasthan, India • IIIT Kota</p>
                </div>
              </div>
            </div>

            {/* Right Column (7 Cols): Clean & Functional Contact Form */}
            <div className="lg:col-span-7 rounded-2xl border border-void-border/60 bg-void-charcoal/30 backdrop-blur-sm p-6 sm:p-8 space-y-6">
              <div className="border-b border-void-border/40 pb-4">
                <h4 className="font-display text-lg font-bold text-neutral-white">
                  Send a Direct Message
                </h4>
                <p className="font-mono text-xs text-neutral-muted mt-0.5">
                  Fill in your details below to prepare an email directly to my inbox
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs" noValidate>
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-neutral-light font-medium block">
                      Your Name <span className="text-crimson-glow">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formErrors.name) setFormErrors({ ...formErrors, name: "" });
                      }}
                      placeholder="Jane Doe"
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-void-black/60 text-neutral-white placeholder:text-neutral-dark focus:outline-none transition-colors ${
                        formErrors.name
                          ? "border-crimson-primary focus:border-crimson-primary"
                          : "border-void-border/80 focus:border-crimson-primary/60"
                      }`}
                    />
                    {formErrors.name && (
                      <span className="text-[11px] text-crimson-glow flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{formErrors.name}</span>
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-neutral-light font-medium block">
                      Email Address <span className="text-crimson-glow">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formErrors.email) setFormErrors({ ...formErrors, email: "" });
                      }}
                      placeholder="jane@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-xl border bg-void-black/60 text-neutral-white placeholder:text-neutral-dark focus:outline-none transition-colors ${
                        formErrors.email
                          ? "border-crimson-primary focus:border-crimson-primary"
                          : "border-void-border/80 focus:border-crimson-primary/60"
                      }`}
                    />
                    {formErrors.email && (
                      <span className="text-[11px] text-crimson-glow flex items-center gap-1 mt-1">
                        <AlertCircle className="h-3 w-3 shrink-0" />
                        <span>{formErrors.email}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-neutral-light font-medium block">
                    Subject <span className="text-crimson-glow">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value });
                      if (formErrors.subject) setFormErrors({ ...formErrors, subject: "" });
                    }}
                    placeholder="SDE Opportunity / Technical Inquiry"
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-void-black/60 text-neutral-white placeholder:text-neutral-dark focus:outline-none transition-colors ${
                      formErrors.subject
                        ? "border-crimson-primary focus:border-crimson-primary"
                        : "border-void-border/80 focus:border-crimson-primary/60"
                    }`}
                  />
                  {formErrors.subject && (
                    <span className="text-[11px] text-crimson-glow flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{formErrors.subject}</span>
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-neutral-light font-medium block">
                    Message <span className="text-crimson-glow">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (formErrors.message) setFormErrors({ ...formErrors, message: "" });
                    }}
                    placeholder="Describe your project, role, or technical discussion topic..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border bg-void-black/60 text-neutral-white placeholder:text-neutral-dark focus:outline-none transition-colors resize-none ${
                      formErrors.message
                        ? "border-crimson-primary focus:border-crimson-primary"
                        : "border-void-border/80 focus:border-crimson-primary/60"
                    }`}
                  />
                  {formErrors.message && (
                    <span className="text-[11px] text-crimson-glow flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{formErrors.message}</span>
                    </span>
                  )}
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-crimson-primary hover:bg-crimson-hover text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-md shadow-crimson-primary/20 hover:translate-y-[-1px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crimson-glow"
                  >
                    <span>Send Message</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>

                  <span className="text-[11px] text-neutral-muted">
                    Opens your default email client with details prefilled
                  </span>
                </div>

                {/* Honest Submission Status Feedback */}
                {submitStatus === "opened" && (
                  <div className="p-3.5 rounded-xl border border-crimson-primary/40 bg-crimson-primary/10 text-neutral-white flex items-start gap-2.5 mt-3 animate-fade-in">
                    <CheckCircle className="h-4 w-4 text-crimson-glow shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <p className="font-semibold text-crimson-glow">Email Client Triggered</p>
                      <p className="text-neutral-light text-[11px] leading-relaxed">
                        A prefilled draft with your message has opened in your default email application. If your client did not launch, feel free to write directly to{" "}
                        <a href="mailto:gaurav.init13@gmail.com" className="underline text-white hover:text-crimson-glow">
                          gaurav.init13@gmail.com
                        </a>.
                      </p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </MotionReveal>
      </Container>
    </section>
  );
}
