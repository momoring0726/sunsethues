import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-100 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-black/80">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-bold tracking-tighter">SunsetHues</div>
          <nav className="hidden gap-8 text-sm font-medium sm:flex">
            <Link
              href="#portfolio"
              className="hover:text-zinc-500 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#services"
              className="hover:text-zinc-500 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="hover:text-zinc-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-zinc-500 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <Link
            href="#contact"
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
          >
            Book Now
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="flex min-h-[90vh] flex-col items-center justify-center px-6 pt-32 text-center">
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-7xl">
            Capturing love stories <br /> in their purest form.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Professional wedding and event photography based in the Philippines.
            Preserving your most cherished moments with elegance and
            authenticity.
          </p>
          <div className="mt-10 flex gap-4">
            <Link
              href="#portfolio"
              className="rounded-full bg-zinc-900 px-8 py-3 font-medium text-white transition-transform hover:scale-105 dark:bg-zinc-100 dark:text-black"
            >
              View Gallery
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-zinc-200 px-8 py-3 font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
            >
              Get in Touch
            </Link>
          </div>
        </section>

        {/* Portfolio / Selected Works */}
        <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">
                Selected Works
              </h2>
              <p className="mt-2 text-zinc-500">
                Highlights from recent celebrations.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Gallery Item 1 */}
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
                alt="Wedding couple"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-medium text-white">
                  Sarah & James — Batangas
                </span>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Wedding detail"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-medium text-white">
                  Floral Details — Garden Wedding
                </span>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop"
                alt="Reception event"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="font-medium text-white">
                  The Reception — Manila
                </span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="text-sm font-semibold underline underline-offset-4 hover:text-zinc-600 dark:hover:text-zinc-300">
              View Full Portfolio
            </button>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-zinc-50 py-24 dark:bg-zinc-900/50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="mb-16 text-center text-3xl font-semibold tracking-tight">
              Services & Events
            </h2>
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-800">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-medium">Weddings</h3>
                <p className="text-zinc-500">
                  Full-day coverage capturing every emotion, from the
                  preparation to the final send-off.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-800">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-medium">Events & Galas</h3>
                <p className="text-zinc-500">
                  Professional coverage for corporate events, birthdays,
                  anniversaries, and social gatherings.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm dark:bg-zinc-800">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-medium">
                  Pre-Nup / Engagement
                </h3>
                <p className="text-zinc-500">
                  Casual and stylized outdoor shoots to tell your story before
                  the big day.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <section
          id="contact"
          className="mx-auto max-w-2xl px-6 py-24 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            Ready to tell your story?
          </h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Currently booking for 2024-2025 season. Let's create something
            beautiful together.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@example.com"
              className="w-full rounded-full bg-zinc-900 px-8 py-4 font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-black sm:w-auto"
            >
              Email Me
            </a>
            <a
              href="#"
              className="w-full rounded-full border border-zinc-200 px-8 py-4 font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 sm:w-auto"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800">
        &copy; {new Date().getFullYear()} Lens & Light Photography. All rights
        reserved.
      </footer>
    </div>
  );
}
