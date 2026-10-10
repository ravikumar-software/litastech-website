"use client";

import Link from "next/link";
import { useState } from "react";

const initialFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact Us" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success !== false) {
        setStatus("success");
        setFormData({ ...initialFormData });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Contact form submission failed:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "block w-full min-w-0 rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-violet-500 focus:ring-2 focus:ring-violet-100";

  return (
    <main className="min-h-screen overflow-x-clip bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:py-4 lg:px-8">
          <Link
            href="/"
            className="min-w-0 text-lg font-bold tracking-tight sm:text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            <span className="text-violet-600">Litas</span>{" "}
            <span className="text-slate-900">Technologies</span>
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 lg:flex xl:gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.href === "/contact"
                    ? "rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
                    : "text-sm font-medium text-slate-600 transition hover:text-violet-600"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile/tablet menu button */}
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 lg:hidden"
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile/tablet navigation panel */}
        {menuOpen && (
          <nav
            aria-label="Mobile navigation"
            className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg sm:px-6 lg:hidden"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    link.href === "/contact"
                      ? "rounded-xl bg-violet-600 px-4 py-3 text-sm font-semibold text-white"
                      : "rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 sm:text-sm sm:tracking-wider">
            Contact Litas Technologies
          </p>

          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-violet-600">useful together.</span>
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Have an idea for a web application, mobile application, CRM or AI
            automation solution? Tell us about your requirement and let&apos;s
            discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact details and enquiry form */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Contact information */}
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 sm:text-sm sm:tracking-wider">
              Get in Touch
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl lg:text-4xl">
              Let&apos;s talk about your business requirement.
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              Whether you are looking to build a new application, automate an
              existing process or develop a business solution, we would be happy
              to understand your requirement.
            </p>

            <div className="mt-8 space-y-6 sm:mt-10">
              <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600 sm:h-12 sm:w-12">
                  @
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold">Email Us</h3>
                  <a
                    href="mailto:ravikumarsoftware18@gmail.com"
                    className="mt-1 block break-words text-slate-600 transition hover:text-violet-600"
                  >
                    ravikumarsoftware18@gmail.com
                  </a>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600 sm:h-12 sm:w-12">
                  +
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold">Call Us</h3>
                  <a
                    href="tel:+919600185783"
                    className="mt-1 block text-slate-600 transition hover:text-violet-600"
                  >
                    +91 96001 85783
                  </a>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Monday - Friday · 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600 sm:h-12 sm:w-12">
                  LT
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold">Litas Technologies</h3>
                  <p className="mt-1 text-slate-600">
                    Chennai, Tamil Nadu, India
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    Serving businesses with practical digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry form */}
          <div className="min-w-0 rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 sm:text-sm sm:tracking-wider">
              Send an Enquiry
            </p>

            <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl">
              Tell us about your requirement.
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base sm:leading-7">
              Share a few details and we&apos;ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5 sm:mt-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Name <span className="text-violet-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  placeholder="Your name"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-semibold"
                >
                  Company
                </label>
                <input
                  id="company"
                  type="text"
                  name="company"
                  autoComplete="organization"
                  value={formData.company}
                  onChange={handleChange}
                  maxLength={150}
                  placeholder="Your company name"
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="min-w-0">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email <span className="text-violet-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    maxLength={254}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>

                <div className="min-w-0">
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    maxLength={30}
                    placeholder="+91"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold"
                >
                  Service Required
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option value="">Select a service</option>
                  <option value="Web Application">Web Application</option>
                  <option value="Mobile Application">Mobile Application</option>
                  <option value="Business Software">Business Software</option>
                  <option value="CRM Solution">CRM Solution</option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Your Requirement <span className="text-violet-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={5000}
                  rows={5}
                  placeholder="Tell us about your project or requirement..."
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div aria-live="polite" aria-atomic="true">
                {status === "success" && (
                  <div className="rounded-xl bg-green-50 p-4 text-sm font-medium leading-6 text-green-700">
                    Thank you! Your enquiry has been sent successfully.
                    We&apos;ll get back to you shortly.
                  </div>
                )}

                {status === "error" && (
                  <div className="rounded-xl bg-red-50 p-4 text-sm font-medium leading-6 text-red-700">
                    Something went wrong. Please try again or email us directly.
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex min-h-12 w-full items-center justify-center rounded-xl bg-violet-600 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>

              <p className="text-center text-xs leading-5 text-slate-500">
                Your details will be used to respond to your enquiry.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-violet-600 px-5 py-10 text-center text-white sm:rounded-3xl sm:px-8 sm:py-14">
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
              Have an idea? Let&apos;s discuss it.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-violet-100 sm:mt-5 sm:text-lg sm:leading-8">
              We can help turn your business requirement into a practical
              digital solution.
            </p>
            <a
              href="mailto:ravikumarsoftware18@gmail.com"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 font-bold text-violet-700 transition hover:bg-violet-50 sm:mt-8 sm:px-7"
            >
              Email Litas Technologies
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-4 py-10 text-slate-300 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          <div className="min-w-0">
            <h3 className="text-xl font-bold text-white">
              <span className="text-violet-400">Litas</span> Technologies
            </h3>
            <p className="mt-4 max-w-md text-sm leading-7 sm:text-base">
              Digital solutions for service businesses — from web applications
              and mobile apps to CRM and AI automation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Company</h3>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm sm:grid-cols-1">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <Link href="/about" className="transition hover:text-white">
                About
              </Link>
              <Link href="/solutions" className="transition hover:text-white">
                Solutions
              </Link>
              <Link href="/industries" className="transition hover:text-white">
                Industries
              </Link>
              <Link href="/contact" className="transition hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Products</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href="https://beautycrm.litastech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition hover:text-white"
              >
                Beauty CRM
              </a>
              <Link
                href="/solutions"
                className="block transition hover:text-white"
              >
                Custom Software
              </Link>
              <Link
                href="/solutions"
                className="block transition hover:text-white"
              >
                AI Automation
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6 text-xs leading-6 text-slate-500 sm:mt-10 sm:text-sm">
          © {new Date().getFullYear()} Litas Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
