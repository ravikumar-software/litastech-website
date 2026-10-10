import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/contact", label: "Contact Us" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 md:py-4 lg:px-8">
          <Link
            href="/"
            className="min-w-0 text-lg font-bold tracking-tight sm:text-2xl"
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
                  link.href === "/about"
                    ? "text-sm font-semibold text-violet-600"
                    : link.href === "/contact"
                      ? "rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-700"
                      : "text-sm font-medium text-slate-600 transition hover:text-violet-600"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Responsive mobile/tablet navigation using native details */}
          <details className="relative lg:hidden">
            <summary
              aria-label="Toggle navigation menu"
              className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition hover:bg-slate-50 [&::-webkit-details-marker]:hidden"
            >
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
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-14 z-50 w-60 max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={
                    link.href === "/about"
                      ? "block rounded-xl bg-violet-50 px-4 py-3 text-sm font-semibold text-violet-700"
                      : "mb-1 block rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-violet-50 hover:text-violet-700"
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-50 via-white to-purple-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 sm:text-sm sm:tracking-wider">
            About Litas Technologies
          </p>
          <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Technology with a{" "}
            <span className="text-violet-600">practical business focus.</span>
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Litas Technologies creates software products and digital solutions
            for service businesses and growing companies.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 sm:text-sm sm:tracking-wider">
              Our Mission
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
              Make useful technology accessible to growing businesses.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              Our mission is to help small and growing businesses use technology
              to simplify their everyday operations, improve productivity and
              serve their customers better.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              We combine software development, automation and AI to create
              solutions around real business workflows.
            </p>
          </div>

          <div className="min-w-0 rounded-2xl bg-violet-50 p-5 sm:rounded-3xl sm:p-7 md:p-10">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-lg font-bold text-white sm:h-14 sm:w-14 sm:text-xl">
              LT
            </div>
            <h3 className="mt-5 text-xl font-bold sm:mt-7 sm:text-2xl">
              Our approach
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-700 sm:text-base">
              {[
                "Understand the business workflow",
                "Design a simple user experience",
                "Build and deploy practical solutions",
                "Improve using customer feedback",
                "Add automation where it creates value",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 font-bold text-violet-600"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What we believe */}
      <section className="bg-slate-50 px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 sm:text-sm sm:tracking-wider">
              What We Believe
            </p>
            <h2 className="mt-3 text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
              Software should make business simpler.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">
              Business owners should be able to understand and use their
              software without unnecessary complexity.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600 sm:h-12 sm:w-12">
                01
              </div>
              <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
                Simplicity
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                We aim to make software easy to understand, learn and operate.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600 sm:h-12 sm:w-12">
                02
              </div>
              <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
                Practicality
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                We focus on real business problems rather than technology for
                technology&apos;s sake.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7 sm:col-span-2 lg:col-span-1">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600 sm:h-12 sm:w-12">
                03
              </div>
              <h3 className="mt-5 text-lg font-bold sm:mt-6 sm:text-xl">
                Continuous Improvement
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                We believe good software improves continuously as businesses and
                customer needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="px-4 pb-12 pt-2 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-violet-600 px-5 py-10 text-center text-white sm:rounded-3xl sm:px-8 sm:py-14">
            <h2 className="text-2xl font-bold leading-snug sm:text-3xl md:text-4xl">
              Let&apos;s build something useful.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-violet-100 sm:mt-5 sm:text-lg sm:leading-8">
              Have an idea for a web application, mobile application, CRM or AI
              automation solution?
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-white px-6 py-3 text-center font-bold text-violet-700 transition hover:bg-violet-50 sm:mt-8 sm:px-7"
            >
              Talk to Litas Technologies
            </Link>
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
