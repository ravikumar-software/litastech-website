import Link from "next/link";

const industries = [
  {
    number: "01",
    title: "Beauty Parlours & Salons",
    description:
      "Digital tools for customer management, appointments, services, billing, payments, staff and business reports.",
    features: [
      "Customer Management",
      "Appointments",
      "Service Management",
      "Billing & Payments",
      "Staff Management",
      "Business Reports",
    ],
  },
  {
    number: "02",
    title: "Bakeries & Food Businesses",
    description:
      "Simple software solutions to manage customers, orders, billing, operations and day-to-day business activities.",
    features: [
      "Order Management",
      "Customer Management",
      "Billing",
      "Inventory Workflows",
      "Reports",
      "Business Automation",
    ],
  },
  {
    number: "03",
    title: "Spas & Wellness",
    description:
      "Technology solutions for managing customers, services, appointments, staff and recurring business activities.",
    features: [
      "Customer Profiles",
      "Appointments",
      "Service Management",
      "Staff Management",
      "Payments",
      "Reports",
    ],
  },
  {
    number: "04",
    title: "Repair & Maintenance",
    description:
      "Organize customer requests, service activities, technicians, billing and follow-up using practical digital workflows.",
    features: [
      "Service Requests",
      "Customer Management",
      "Technician Management",
      "Job Tracking",
      "Billing",
      "Follow-up",
    ],
  },
  {
    number: "05",
    title: "Fitness & Training",
    description:
      "Digital solutions for managing members, schedules, services, payments and daily business operations.",
    features: [
      "Member Management",
      "Schedules",
      "Service Management",
      "Payments",
      "Customer Follow-up",
      "Reports",
    ],
  },
  {
    number: "06",
    title: "Local Businesses",
    description:
      "Affordable and practical technology solutions designed for small and growing local businesses.",
    features: [
      "Customer Management",
      "Billing",
      "Business Operations",
      "Reports",
      "Automation",
      "Digital Workflows",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-5">
          <Link
            href="/"
            className="text-xl font-bold tracking-tight sm:text-2xl"
          >
            <span className="text-violet-600">Litas</span>{" "}
            <span className="text-slate-900">Technologies</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
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
              className="text-sm font-medium text-violet-600"
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

          {/* Mobile button */}
          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-lg border border-slate-200 text-xl">
              ☰
            </summary>

            <div className="absolute right-0 top-12 w-56 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
              <Link
                href="/"
                className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-violet-50"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-violet-50"
              >
                About
              </Link>

              <Link
                href="/solutions"
                className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-violet-50"
              >
                Solutions
              </Link>

              <Link
                href="/industries"
                className="block rounded-lg px-4 py-3 text-sm font-medium text-violet-600 hover:bg-violet-50"
              >
                Industries
              </Link>

              <Link
                href="/contact"
                className="mt-2 block rounded-lg bg-violet-600 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Contact Us
              </Link>
            </div>
          </details>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-5 sm:py-20 md:py-24">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 inline-flex rounded-full bg-violet-100 px-4 py-2 text-xs font-semibold text-violet-700 sm:text-sm">
              Industries We Serve
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Digital Solutions for{" "}
              <span className="text-violet-600">Service Businesses</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              We build practical software, CRM platforms and AI automation
              solutions around the real workflows of small and growing service
              businesses.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INDUSTRIES ================= */}
      <section className="px-4 py-14 sm:px-5 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 sm:text-sm">
              Our Focus
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Technology built around your business
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Every business has different workflows. Our solutions can be
              designed around the way your business actually operates.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.number}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl sm:p-7"
              >
                {/* Number */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-600 sm:h-12 sm:w-12 sm:text-base">
                  {industry.number}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {industry.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {industry.description}
                </p>

                {/* Features */}
                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-600">
                    Possible Solutions
                  </p>

                  <div className="grid grid-cols-1 gap-2">
                    {industry.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 text-sm text-slate-600"
                      >
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-xs font-bold text-violet-600">
                          ✓
                        </span>

                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW WE HELP ================= */}
      <section className="bg-slate-50 px-4 py-14 sm:px-5 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 sm:text-sm">
              How We Help
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              From manual processes to digital workflows
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We help businesses identify repetitive activities and turn them
              into simple digital processes.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-xl">
                💻
              </div>

              <h3 className="mt-5 text-xl font-bold">Digital Applications</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Replace spreadsheets, notebooks and manual processes with
                practical web and mobile applications.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-xl">
                📊
              </div>

              <h3 className="mt-5 text-xl font-bold">Business Visibility</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Bring important business information together through
                dashboards, reports and structured workflows.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-xl">
                🤖
              </div>

              <h3 className="mt-5 text-xl font-bold">AI Automation</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                Introduce AI assistants and automation where they can reduce
                repetitive work and support daily operations.
              </p>
            </div>
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
              Tell us about your business and the process you want to improve.
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
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
          {/* Company */}
          <div>
            <h3 className="text-xl font-bold text-white">
              <span className="text-violet-400">Litas</span> Technologies
            </h3>

            <p className="mt-4 text-sm leading-6 sm:text-base sm:leading-7">
              Digital solutions for service businesses — from web applications
              and mobile apps to CRM and AI automation.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-white">Company</h3>

            <div className="mt-4 space-y-3 text-sm sm:text-base">
              <Link href="/about" className="block hover:text-white">
                About
              </Link>

              <Link href="/solutions" className="block hover:text-white">
                Solutions
              </Link>

              <Link
                href="/industries"
                className="block text-violet-400 hover:text-white"
              >
                Industries
              </Link>

              <Link href="/contact" className="block hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-bold text-white">Products</h3>

            <div className="mt-4 space-y-3 text-sm sm:text-base">
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

        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:mt-10 sm:text-sm">
          © {new Date().getFullYear()} Litas Technologies. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
