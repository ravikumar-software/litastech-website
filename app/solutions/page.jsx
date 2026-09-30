import Link from "next/link";

const solutions = [
  {
    number: "01",
    title: "Web Applications",
    shortTitle: "Web Apps",
    description:
      "Custom web applications designed around your business processes, customers, operations and reporting requirements.",
    features: [
      "Business Management Systems",
      "Customer Management",
      "Billing & Invoicing",
      "Dashboards & Reports",
      "Workflow Management",
      "Cloud-based Applications",
    ],
  },
  {
    number: "02",
    title: "Mobile Applications",
    shortTitle: "Mobile Apps",
    description:
      "Mobile-first applications that help business owners, employees and customers access important information from anywhere.",
    features: [
      "Android Applications",
      "iOS Applications",
      "Mobile-first Web Apps",
      "Employee Applications",
      "Customer Applications",
      "API Integration",
    ],
  },
  {
    number: "03",
    title: "CRM Solutions",
    shortTitle: "CRM",
    description:
      "Simple CRM platforms to manage customers, services, appointments, staff, sales, payments and business activities.",
    features: [
      "Customer Management",
      "Service Management",
      "Appointment Management",
      "Staff Management",
      "Sales & Billing",
      "Business Reports",
    ],
  },
  {
    number: "04",
    title: "AI Automation",
    shortTitle: "AI",
    description:
      "Practical AI solutions that can assist with repetitive tasks, business information, customer interactions and daily operations.",
    features: [
      "AI Business Assistants",
      "AI Chatbots",
      "Process Automation",
      "Customer Support",
      "Business Information",
      "AI-powered Workflows",
    ],
  },
  {
    number: "05",
    title: "Business Automation",
    shortTitle: "Automation",
    description:
      "Convert repetitive manual activities into structured digital workflows that are easier to operate and monitor.",
    features: [
      "Manual Process Automation",
      "Notifications",
      "Task Workflows",
      "Data Collection",
      "Approvals",
      "Reports & Alerts",
    ],
  },
  {
    number: "06",
    title: "Custom Software",
    shortTitle: "Custom",
    description:
      "Software designed specifically for your business when standard applications do not fit your requirements.",
    features: [
      "Requirement Analysis",
      "Custom Development",
      "Database Solutions",
      "API Development",
      "Third-party Integration",
      "Ongoing Enhancement",
    ],
  },
];

export default function SolutionsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-white text-slate-900">
      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-5">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight sm:text-2xl"
          >
            <span className="text-violet-600">Litas</span>{" "}
            <span className="text-slate-900">Technologies</span>
          </Link>

          {/* Desktop Navigation */}
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
              className="text-sm font-medium text-violet-600"
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

          {/* Mobile Navigation */}
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
                className="block rounded-lg px-4 py-3 text-sm font-medium text-violet-600 hover:bg-violet-50"
              >
                Solutions
              </Link>

              <Link
                href="/industries"
                className="block rounded-lg px-4 py-3 text-sm font-medium hover:bg-violet-50"
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
              Our Solutions
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Practical Technology for{" "}
              <span className="text-violet-600">Growing Businesses</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              From web applications and mobile apps to CRM platforms and AI
              automation, we build digital solutions around real business
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SOLUTIONS ================= */}
      <section className="px-4 py-14 sm:px-5 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 sm:text-sm">
              What We Offer
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              Technology solutions that fit your workflow
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Start with a specific business problem and build the right digital
              solution around it.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-12 md:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.number}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl sm:p-7"
              >
                {/* Number */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 text-sm font-bold text-violet-600 sm:h-12 sm:w-12 sm:text-base">
                  {solution.number}
                </div>

                {/* Title */}
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {solution.description}
                </p>

                {/* Features */}
                <div className="mt-5 border-t border-slate-100 pt-5">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-violet-600">
                    Includes
                  </p>

                  <div className="grid grid-cols-1 gap-2">
                    {solution.features.map((feature) => (
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

      {/* ================= FEATURED PRODUCT ================= */}
      <section className="bg-slate-50 px-4 py-14 sm:px-5 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* Content */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 sm:text-sm">
                Litas Product
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Beauty CRM
              </h2>

              <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                A practical CRM platform designed for beauty parlours and salons
                to manage customers, services, staff, appointments, billing,
                payments and business reports.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  "Customers",
                  "Services",
                  "Staff",
                  "Appointments",
                  "Billing",
                  "Payments",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 bg-white p-3 text-sm font-medium text-slate-700 sm:p-4"
                  >
                    ✓ {item}
                  </div>
                ))}
              </div>

              <a
                href="https://beautycrm.litastech.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-block w-full rounded-xl bg-violet-600 px-6 py-3.5 text-center font-semibold text-white transition hover:bg-violet-700 sm:w-auto"
              >
                Open Beauty CRM
              </a>
            </div>

            {/* Product Preview */}
            <div className="rounded-2xl border border-violet-100 bg-white p-4 shadow-xl shadow-violet-100 sm:rounded-3xl sm:p-6">
              <div className="rounded-2xl bg-violet-50 p-5 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-wider text-violet-600">
                  Beauty Business Management
                </p>

                <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                  Everything in one place
                </h3>

                <div className="mt-6 space-y-3">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold">Customers</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Manage customer information and history
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold">Billing & Payments</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Manage bills, payments and daily collections
                    </p>
                  </div>

                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-sm font-semibold">Reports</p>
                    <p className="mt-1 text-xs text-slate-500">
                      Understand daily business activity
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="px-4 py-14 sm:px-5 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 sm:text-sm">
              Our Approach
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
              From idea to working solution
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              We keep the process practical and focused on the actual business
              requirement.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:mt-12 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Understand",
                text: "Understand your current process and business requirement.",
              },
              {
                number: "02",
                title: "Design",
                text: "Design a simple workflow and user experience.",
              },
              {
                number: "03",
                title: "Build",
                text: "Develop and test the required digital solution.",
              },
              {
                number: "04",
                title: "Improve",
                text: "Continue enhancing the solution as your business grows.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6"
              >
                <div className="text-sm font-bold text-violet-600">
                  {step.number}
                </div>

                <h3 className="mt-3 text-lg font-bold">{step.title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
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

          {/* Company */}
          <div>
            <h3 className="font-bold text-white">Company</h3>

            <div className="mt-4 space-y-3 text-sm sm:text-base">
              <Link href="/about" className="block hover:text-white">
                About
              </Link>

              <Link
                href="/solutions"
                className="block text-violet-400 hover:text-white"
              >
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
