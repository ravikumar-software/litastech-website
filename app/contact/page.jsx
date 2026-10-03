"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            <span className="text-violet-600">Litas</span>{" "}
            <span className="text-slate-900">Technologies</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="text-sm font-medium text-slate-600 hover:text-violet-600"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 hover:text-violet-600"
            >
              About
            </Link>

            <Link
              href="/solutions"
              className="text-sm font-medium text-slate-600 hover:text-violet-600"
            >
              Solutions
            </Link>

            <Link
              href="/industries"
              className="text-sm font-medium text-slate-600 hover:text-violet-600"
            >
              Industries
            </Link>

            <Link
              href="/contact"
              className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-violet-700"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </header>
      {/* ================= PAGE HERO ================= */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24">
          <p className="font-semibold uppercase tracking-wider text-violet-600">
            Contact Litas Technologies
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Let&apos;s build something{" "}
            <span className="text-violet-600">useful together.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Have an idea for a web application, mobile application, CRM or AI
            automation solution? Tell us about your requirement and let&apos;s
            discuss how we can help.
          </p>
        </div>
      </section>
      {/* ================= CONTACT SECTION ================= */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          {/* LEFT SIDE */}
          <div>
            <p className="font-semibold uppercase tracking-wider text-violet-600">
              Get in Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Let&apos;s talk about your business requirement.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Whether you are looking to build a new application, automate an
              existing process or develop a business solution, we would be happy
              to understand your requirement.
            </p>

            {/* Contact Information */}
            <div className="mt-10 space-y-6">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600">
                  @
                </div>

                <div>
                  <h3 className="font-bold">Email Us</h3>
                  <a
                    href="mailto:ravikumarsoftware18@gmail.com"
                    className="mt-1 block text-slate-600 hover:text-violet-600"
                  >
                    ravikumarsoftware18@gmail.com
                  </a>
                  <p className="mt-1 text-sm text-slate-500">
                    We&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600">
                  +
                </div>

                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <a
                    href="tel:+919600185783"
                    className="mt-1 block text-slate-600 hover:text-violet-600"
                  >
                    +91 96001 85783
                  </a>
                  <p className="mt-1 text-sm text-slate-500">
                    Monday - Friday · 9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600">
                  LT
                </div>

                <div>
                  <h3 className="font-bold">Litas Technologies</h3>
                  <p className="mt-1 text-slate-600">
                    Chennai, Tamil Nadu, India
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Serving businesses with practical digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-7 md:p-10">
            <p className="font-semibold uppercase tracking-wider text-violet-600">
              Send an Enquiry
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Tell us about your requirement.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Share a few details and we&apos;ll get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Name <span className="text-violet-600">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />
              </div>

              {/* COMPANY */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />
              </div>

              {/* EMAIL + PHONE */}
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Email <span className="text-violet-600">*</span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                  />
                </div>
              </div>

              {/* SERVICE */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Service Required
                </label>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
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

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Your Requirement <span className="text-violet-600">*</span>
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project or requirement..."
                  className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
                />
              </div>

              {/* SUCCESS */}
              {status === "success" && (
                <div className="rounded-xl bg-green-50 p-4 text-sm font-medium text-green-700">
                  Thank you! Your enquiry has been sent successfully. We&apos;ll
                  get back to you shortly.
                </div>
              )}

              {/* ERROR */}
              {status === "error" && (
                <div className="rounded-xl bg-red-50 p-4 text-sm font-medium text-red-700">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-violet-600 px-6 py-3.5 font-semibold text-white transition hover:bg-violet-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Enquiry"}
              </button>
            </form>
          </div>
        </div>
      </section>
      {/* ================= CTA ================= */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-violet-600 px-8 py-14 text-center text-white">
            <h2 className="text-3xl font-bold md:text-4xl">
              Have an idea? Let&apos;s discuss it.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-violet-100">
              We can help turn your business requirement into a practical
              digital solution.
            </p>

            <a
              href="mailto:ravikumarsoftware18@gmail.com"
              className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-violet-700 hover:bg-violet-50"
            >
              Email Litas Technologies
            </a>
          </div>
        </div>
      </section>
      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 px-5 py-12 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white">
              <span className="text-violet-400">Litas</span> Technologies
            </h3>

            <p className="mt-4 leading-7">
              Digital solutions for service businesses — from web applications
              and mobile apps to CRM and AI automation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Company</h3>

            <div className="mt-4 space-y-3">
              <Link href="/" className="block hover:text-white">
                Home
              </Link>

              <Link href="/about" className="block hover:text-white">
                About
              </Link>

              <Link href="/solutions" className="block hover:text-white">
                Solutions
              </Link>

              <Link href="/industries" className="block hover:text-white">
                Industries
              </Link>

              <Link href="/contact" className="block hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Products</h3>

            <div className="mt-4 space-y-3">
              <a
                href="https://beautycrm.litastech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-white"
              >
                Beauty CRM
              </a>

              <Link href="/solutions" className="block hover:text-white">
                Custom Software
              </Link>

              <Link href="/solutions" className="block hover:text-white">
                AI Automation
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-slate-800 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Litas Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
