"use client";

import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-5">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-xl font-bold tracking-tight sm:text-2xl"
          >
            <span className="text-violet-600">Litas</span>{" "}
            <span className="text-slate-900">Technologies</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            <Link href="/" className="text-sm font-medium text-violet-600">
              Home
            </Link>

            <Link
              href="/about"
              className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
            >
              About
            </Link>

            <Link
              href="/solutions"
              className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
            >
              Solutions
            </Link>

            <Link
              href="/industries"
              className="text-sm font-medium text-slate-600 transition hover:text-violet-600"
            >
              Industries
            </Link>

            <Link
              href="/contact"
              className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
            >
              Contact Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <span className="text-2xl leading-none">×</span>
            ) : (
              <span className="text-xl leading-none">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-lg md:hidden">
            <nav className="flex flex-col">
              <Link
                href="/"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-violet-600"
              >
                Home
              </Link>

              <Link
                href="/about"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-violet-50 hover:text-violet-600"
              >
                About
              </Link>

              <Link
                href="/solutions"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-violet-50 hover:text-violet-600"
              >
                Solutions
              </Link>

              <Link
                href="/industries"
                onClick={closeMenu}
                className="rounded-lg px-4 py-3 font-medium text-slate-700 hover:bg-violet-50 hover:text-violet-600"
              >
                Industries
              </Link>

              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-2 rounded-lg bg-violet-600 px-4 py-3 text-center font-semibold text-white hover:bg-violet-700"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-5 sm:py-16 md:grid-cols-2 md:gap-12 md:py-24 lg:py-28">
          {/* Hero Content */}
          <div>
            <div className="mb-4 inline-flex rounded-full bg-violet-100 px-3 py-1.5 text-xs font-semibold text-violet-700 sm:px-4 sm:py-2 sm:text-sm">
              Software • Automation • AI
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Simple Digital Solutions for{" "}
              <span className="text-violet-600">Service Businesses</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              Litas Technologies builds practical web applications, mobile
              applications, CRM platforms and AI automation solutions for
              growing businesses.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Link
                href="/solutions"
                className="w-full rounded-xl bg-violet-600 px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-700 sm:w-auto"
              >
                Explore Solutions
              </Link>

              <Link
                href="/contact"
                className="w-full rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-center font-semibold text-slate-700 transition hover:border-violet-400 hover:text-violet-600 sm:w-auto"
              >
                Talk to Us
              </Link>
            </div>
          </div>

          {/* Hero Product Card */}
          <div className="relative">
            <div className="rounded-2xl border border-violet-100 bg-white p-4 shadow-xl shadow-violet-100 sm:rounded-3xl sm:p-6">
              <div className="rounded-xl bg-violet-50 p-5 sm:rounded-2xl sm:p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-violet-600 sm:text-sm">
                  Litas Product
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  Beauty CRM
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  Manage customers, services, staff, appointments, billing,
                  payments and business reports.
                </p>

                <a
                  href="https://beautycrm.litastech.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 block rounded-lg bg-violet-600 px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-700 sm:inline-block"
                >
                  Open Beauty CRM
                </a>
              </div>

              {/* Product Features */}
              <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-5 sm:gap-3">
                {[
                  ["Web", "Applications"],
                  ["Mobile", "Apps"],
                  ["CRM", "Business Management"],
                  ["AI", "Automation"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-xl border border-slate-200 p-3 sm:p-4"
                  >
                    <p className="text-lg font-bold text-violet-600 sm:text-xl">
                      {title}
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500 sm:text-sm">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE BUILD ================= */}
      <section className="px-4 py-14 sm:px-5 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 sm:text-sm">
              What We Build
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Technology that solves everyday business problems
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              We focus on useful software that is simple to understand, easy to
              operate and designed around real business workflows.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:mt-12 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Web Applications",
                text: "Custom business applications for customer management, billing, operations, reporting and workflows.",
              },
              {
                number: "02",
                title: "Mobile Applications",
                text: "Mobile-first applications designed for business owners, employees and customers.",
              },
              {
                number: "03",
                title: "AI Automation",
                text: "AI assistants and automation solutions that reduce repetitive work and improve productivity.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl sm:p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-600 sm:h-12 sm:w-12 sm:text-base">
                  {item.number}
                </div>

                <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="bg-slate-50 px-4 py-14 sm:px-5 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 sm:text-sm">
              Industries
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Built for service businesses
            </h2>
          </div>

          <div className="mt-9 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-5 lg:grid-cols-4">
            {[
              "Beauty Parlours",
              "Salons",
              "Bakeries",
              "Spas & Wellness",
              "Repair & Maintenance",
              "Fitness & Training",
              "Local Businesses",
              "Growing Service Businesses",
            ].map((industry) => (
              <div
                key={industry}
                className="flex min-h-[80px] items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-center text-sm font-semibold shadow-sm transition hover:border-violet-200 hover:shadow-md sm:min-h-[90px] sm:p-5 sm:text-base"
              >
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-4 py-14 sm:px-5 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-violet-600 px-5 py-10 text-center text-white sm:rounded-3xl sm:px-8 sm:py-14 md:px-16">
            <h2 className="text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              Have a business process you want to digitize?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-violet-100 sm:mt-5 sm:text-lg sm:leading-8">
              Tell us what you currently do manually and what you want your
              software to achieve.
            </p>

            <Link
              href="/contact"
              className="mt-7 inline-block w-full rounded-xl bg-white px-7 py-3.5 font-bold text-violet-700 transition hover:bg-violet-50 sm:mt-8 sm:w-auto"
            >
              Discuss Your Requirement
            </Link>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-slate-950 px-4 py-10 text-slate-300 sm:px-5 sm:py-12">
        <div className="mx-auto grid max-w-7xl gap-8 sm:gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-bold text-white">
              <span className="text-violet-400">Litas</span> Technologies
            </h3>

            <p className="mt-4 text-sm leading-6 sm:text-base sm:leading-7">
              Digital solutions for service businesses — from web applications
              and mobile apps to CRM and AI automation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white">Company</h3>

            <div className="mt-4 space-y-3 text-sm sm:text-base">
              <Link href="/about" className="block transition hover:text-white">
                About
              </Link>

              <Link
                href="/solutions"
                className="block transition hover:text-white"
              >
                Solutions
              </Link>

              <Link
                href="/industries"
                className="block transition hover:text-white"
              >
                Industries
              </Link>

              <Link
                href="/contact"
                className="block transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white">Products</h3>

            <div className="mt-4 space-y-3 text-sm sm:text-base">
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

        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:mt-10 sm:text-sm">
          © {new Date().getFullYear()} Litas Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
