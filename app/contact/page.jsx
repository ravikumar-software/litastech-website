"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
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
    setForm({
      ...form,
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
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(
          "Thank you! Your enquiry has been submitted successfully. We will contact you shortly.",
        );

        setForm({
          name: "",
          company: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("Unable to submit your enquiry. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-900 px-5 py-16 text-white sm:px-8 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
            Contact Litas Tech
          </p>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
            Let&apos;s build something better together.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Have a software, automation, cloud, IT support or digital
            transformation requirement? Send us your enquiry and our team will
            get back to you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-5 py-12 sm:px-8 lg:px-16 lg:py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
          {/* Left Side */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              How can we help?
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Tell us about your requirement. Whether you need a web
              application, mobile application, AI automation, IT support or a
              custom software solution, we would be happy to discuss it with
              you.
            </p>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-xl">
                    ✉️
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500">Email</p>
                    <a
                      href="mailto:ravikumarsoftware18@gmail.com"
                      className="mt-1 block break-all font-semibold text-slate-900 hover:text-cyan-600"
                    >
                      ravikumarsoftware18@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-xl">
                    💻
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Our Services
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">
                      Web • Mobile • AI Automation • IT Services
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-xl">
                    📍
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Location
                    </p>
                    <p className="mt-1 font-semibold text-slate-900">
                      Chennai, Tamil Nadu, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Send an Enquiry
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fill in the details below and we&apos;ll get in touch with you.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Company name"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-700">
                    Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Service Required
                </label>

                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                >
                  <option value="">Select a service</option>
                  <option value="Web Application">
                    Web Application Development
                  </option>
                  <option value="Mobile Application">
                    Mobile Application Development
                  </option>
                  <option value="AI Automation">AI Automation</option>
                  <option value="IT Services">IT Services</option>
                  <option value="Cloud Services">Cloud Services</option>
                  <option value="Software Support">
                    Software Support & Maintenance
                  </option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Your Enquiry *
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Please describe your requirement..."
                  className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-100"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-cyan-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Sending Enquiry..." : "Send Enquiry →"}
              </button>

              {status && (
                <div className="rounded-xl bg-slate-50 p-4 text-center text-sm leading-6 text-slate-700">
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
