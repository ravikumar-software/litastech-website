import Link from "next/link";

export default function AboutPage() {
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

            <Link href="/about" className="text-sm font-medium text-violet-600">
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
            About Litas Technologies
          </p>

          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
            Technology with a{" "}
            <span className="text-violet-600">practical business focus.</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Litas Technologies creates software products and digital solutions
            for service businesses and growing companies.
          </p>
        </div>
      </section>

      {/* ================= MISSION ================= */}
      <section className="px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-wider text-violet-600">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Make useful technology accessible to growing businesses.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our mission is to help small and growing businesses use technology
              to simplify their everyday operations, improve productivity and
              serve their customers better.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              We combine software development, automation and AI to create
              solutions around real business workflows.
            </p>
          </div>

          <div className="rounded-3xl bg-violet-50 p-8 md:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-600 text-xl font-bold text-white">
              LT
            </div>

            <h3 className="mt-7 text-2xl font-bold">Our approach</h3>

            <ul className="mt-5 space-y-4 text-slate-700">
              <li className="flex gap-3">
                <span className="font-bold text-violet-600">✓</span>
                Understand the business workflow
              </li>

              <li className="flex gap-3">
                <span className="font-bold text-violet-600">✓</span>
                Design a simple user experience
              </li>

              <li className="flex gap-3">
                <span className="font-bold text-violet-600">✓</span>
                Build and deploy practical solutions
              </li>

              <li className="flex gap-3">
                <span className="font-bold text-violet-600">✓</span>
                Improve using customer feedback
              </li>

              <li className="flex gap-3">
                <span className="font-bold text-violet-600">✓</span>
                Add automation where it creates value
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE BELIEVE ================= */}
      <section className="bg-slate-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-wider text-violet-600">
              What We Believe
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Software should make business simpler.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Business owners should be able to understand and use their
              software without unnecessary complexity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600">
                01
              </div>

              <h3 className="mt-6 text-xl font-bold">Simplicity</h3>

              <p className="mt-3 leading-7 text-slate-600">
                We aim to make software easy to understand, learn and operate.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600">
                02
              </div>

              <h3 className="mt-6 text-xl font-bold">Practicality</h3>

              <p className="mt-3 leading-7 text-slate-600">
                We focus on real business problems rather than technology for
                technology's sake.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 font-bold text-violet-600">
                03
              </div>

              <h3 className="mt-6 text-xl font-bold">Continuous Improvement</h3>

              <p className="mt-3 leading-7 text-slate-600">
                We believe good software improves continuously as businesses and
                customer needs evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-5 pb-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-3xl bg-violet-600 px-8 py-14 text-center text-white">
            <h2 className="text-3xl font-bold md:text-4xl">
              Let's build something useful.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-violet-100">
              Have an idea for a web application, mobile application, CRM or AI
              automation solution?
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded-xl bg-white px-7 py-3.5 font-bold text-violet-700 hover:bg-violet-50"
            >
              Talk to Litas Technologies
            </Link>
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
