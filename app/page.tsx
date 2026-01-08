"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const heroSlides = [
  {
    url: "https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=2070&auto=format&fit=crop",
    alt: "Wedding couple in garden",
  },
  {
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    alt: "Bride holding bouquet",
  },
  {
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=2070&auto=format&fit=crop",
    alt: "Wedding reception lights",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen font-sans text-[#5a4a47] dark:text-[#f5f5f5]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#f5ebe0] bg-[#fdfbf8]/90 backdrop-blur-md dark:border-[#2a2a2a] dark:bg-[#1a1a1a]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-semibold tracking-widest uppercase text-[#6b5450] dark:text-[#f0d9cd]">
            SunsetHues
          </div>
          <nav className="hidden gap-10 text-base font-medium text-[#8b7b77] sm:flex dark:text-[#d4b5a0]">
            <Link
              href="#portfolio"
              className="hover:text-[#5a4a47] transition-colors dark:hover:text-[#f5f5f5]"
            >
              Portfolio
            </Link>
            <Link
              href="#services"
              className="hover:text-[#5a4a47] transition-colors dark:hover:text-[#f5f5f5]"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="hover:text-[#5a4a47] transition-colors dark:hover:text-[#f5f5f5]"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#5a4a47] transition-colors dark:hover:text-[#f5f5f5]"
            >
              Contact
            </Link>
          </nav>
          <Link
            href="#contact"
            className="rounded-none bg-gradient-to-r from-[#b8956a] to-[#d4af6f] px-8 py-3 text-sm font-medium uppercase tracking-wider text-white transition-all hover:shadow-md hover:from-[#a87d57] hover:to-[#c49d5c] dark:bg-[#d0c9b8] dark:text-[#3a3a3a] dark:hover:bg-[#b8b0a1]"
          >
            Book Now
          </Link>
        </div>
      </header>

      <main>
        {/* Hero Section with Full Screen Carousel */}
        <section className="relative h-screen w-full overflow-hidden text-center text-white">
          {/* Background Images */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.url}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
              {/* Overlay: Soft dark tint */}
              <div className="absolute inset-0 bg-[#000000]/25" />
            </div>
          ))}

          {/* Hero Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20">
            <h1 className="max-w-5xl text-6xl font-light tracking-tight sm:text-8xl drop-shadow-sm font-serif italic text-white">
              Timeless.{" "}
              <span className="not-italic font-sans font-normal">
                Authentic.
              </span>
            </h1>
            <p className="mt-8 max-w-3xl text-2xl text-[#f5f5f5] drop-shadow-sm font-light tracking-wide leading-relaxed">
              Capturing the quiet moments and the loud celebrations in soft,
              golden light.
            </p>
            <div className="mt-14 flex gap-6">
              <Link
                href="#portfolio"
                className="min-w-[180px] border border-white bg-white px-10 py-4 text-base font-bold uppercase tracking-widest text-[#3a3a3a] transition-colors hover:bg-[#f0f0f0]"
              >
                View Gallery
              </Link>
              <Link
                href="#contact"
                className="min-w-[180px] border border-white px-10 py-4 text-base font-bold uppercase tracking-widest text-white backdrop-blur-sm transition-colors hover:bg-white/10"
              >
                Inquire
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio / Selected Works */}
        <section id="portfolio" className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-20 flex flex-col items-center justify-center text-center">
            <span className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#a8896e]">
              Selected Works
            </span>
            <h2 className="text-5xl font-light text-[#5a4a47] dark:text-[#f0d9cd] font-serif italic">
              Love Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Gallery Item 1 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-[#f5ebe0] dark:bg-[#2a2a2a]">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
                alt="Wedding couple"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-[#000000]/0 p-8 opacity-0 transition-all duration-500 group-hover:bg-[#000000]/20 group-hover:opacity-100">
                <span className="bg-[#fdfbf8]/98 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#5a4a47] backdrop-blur-md shadow-sm">
                  Batangas Wedding
                </span>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-[#f5ebe0] dark:bg-[#2a2a2a]">
              <img
                src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=2070&auto=format&fit=crop"
                alt="Wedding detail"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-[#000000]/0 p-8 opacity-0 transition-all duration-500 group-hover:bg-[#000000]/20 group-hover:opacity-100">
                <span className="bg-[#fdfbf8]/98 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#5a4a47] backdrop-blur-md shadow-sm">
                  Details
                </span>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-[#f5ebe0] dark:bg-[#2a2a2a]">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop"
                alt="Reception event"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-[#000000]/0 p-8 opacity-0 transition-all duration-500 group-hover:bg-[#000000]/20 group-hover:opacity-100">
                <span className="bg-[#fdfbf8]/98 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#5a4a47] backdrop-blur-md shadow-sm">
                  The Reception
                </span>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <button className="inline-block border-2 border-[#a8896e] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#a8896e] transition-all hover:bg-[#a8896e] hover:text-white hover:shadow-md dark:border-[#d4af6f] dark:text-[#d4af6f] dark:hover:bg-[#d4af6f] dark:hover:text-[#1a1a1a]">
              View Full Portfolio
            </button>
          </div>
        </section>

        {/* Services - Bento Box Grid */}
        <section
          id="services"
          className="bg-[#fdf9f3] py-32 dark:bg-[#2a2a2a]/50"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 text-center">
              <span className="mb-4 block text-base font-bold uppercase tracking-[0.25em] text-[#9c4b04]">
                Offerings
              </span>
              <h2 className="text-5xl font-light text-[#5a4a47] dark:text-[#f0d9cd] font-serif italic">
                Services & Investments
              </h2>
            </div>

            {/* Services Grid with Icons and Photos */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service 1: Weddings */}
              <div className="group bg-white dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-56 overflow-hidden bg-[#f5ebe0]">
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=600&auto=format&fit=crop"
                    alt="Wedding Photography"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#b8956a] to-[#d4af6f] flex items-center justify-center text-xl">
                      💍
                    </div>
                    <h3 className="text-2xl font-serif italic text-[#5a4a47] dark:text-[#f0d9cd]">
                      Weddings
                    </h3>
                  </div>
                  <p className="text-[#8b7b77] dark:text-[#c8b5a0] mb-4 text-sm leading-relaxed">
                    Full-day coverage capturing every emotion, from the
                    preparation to the final send-off. We document your love
                    story with artistry and care.
                  </p>
                  <ul className="space-y-2 text-xs text-[#a8896e] dark:text-[#d4af6f]">
                    <li>✓ 8-10 hours coverage</li>
                    <li>✓ Two photographers</li>
                    <li>✓ Engagement photos included</li>
                  </ul>
                </div>
              </div>

              {/* Service 2: Engagement & Pre-Nup */}
              <div className="group bg-white dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-56 overflow-hidden bg-[#f5ebe0]">
                  <img
                    src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=600&auto=format&fit=crop"
                    alt="Engagement Photography"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#b8956a] to-[#d4af6f] flex items-center justify-center text-xl">
                      📸
                    </div>
                    <h3 className="text-2xl font-serif italic text-[#5a4a47] dark:text-[#f0d9cd]">
                      Engagement
                    </h3>
                  </div>
                  <p className="text-[#8b7b77] dark:text-[#c8b5a0] mb-4 text-sm leading-relaxed">
                    Stylized outdoor storytelling in your favorite locations.
                    Perfect for announcements, invitations, or simply
                    celebrating your love.
                  </p>
                  <ul className="space-y-2 text-xs text-[#a8896e] dark:text-[#d4af6f]">
                    <li>✓ 2-3 hours session</li>
                    <li>✓ Custom locations</li>
                    <li>✓ 150+ digital photos</li>
                  </ul>
                </div>
              </div>

              {/* Service 3: Events & Galas */}
              <div className="group bg-white dark:bg-[#1a1a1a] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="relative h-56 overflow-hidden bg-[#f5ebe0]">
                  <img
                    src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600&auto=format&fit=crop"
                    alt="Event Photography"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#b8956a] to-[#d4af6f] flex items-center justify-center text-xl">
                      🎉
                    </div>
                    <h3 className="text-2xl font-serif italic text-[#5a4a47] dark:text-[#f0d9cd]">
                      Events & Galas
                    </h3>
                  </div>
                  <p className="text-[#8b7b77] dark:text-[#c8b5a0] mb-4 text-sm leading-relaxed">
                    Corporate gatherings, private celebrations, and milestone
                    events. We capture the atmosphere and moments that matter.
                  </p>
                  <ul className="space-y-2 text-xs text-[#a8896e] dark:text-[#d4af6f]">
                    <li>✓ Flexible hours</li>
                    <li>✓ Candid & formal shots</li>
                    <li>✓ Quick turnaround</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact / Footer */}
        <section
          id="contact"
          className="mx-auto max-w-2xl px-6 py-32 text-center"
        >
          <h2 className="text-5xl font-light text-[#5a4a47] dark:text-[#f0d9cd] font-serif italic">
            Let's create something beautiful.
          </h2>
          <p className="mt-6 text-xl text-[#8b7b77] dark:text-[#d4b5a0]">
            Currently booking for the 2025-2026 season.
          </p>
          <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="mailto:hello@example.com"
              className="w-full bg-gradient-to-r from-[#b8956a] to-[#d4af6f] px-10 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:shadow-md hover:from-[#a87d57] hover:to-[#c49d5c] dark:bg-[#d0c9b8] dark:text-[#3a3a3a] dark:hover:bg-[#b8b0a1] sm:w-auto"
            >
              Email Me
            </a>
            <a
              href="#"
              className="w-full border border-[#d4af6f] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#a8896e] transition-all hover:bg-[#fdf9f3] dark:border-[#d4af6f] dark:text-[#d4af6f] dark:hover:bg-[#3a3a3a] sm:w-auto"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#f5ebe0] py-14 text-center text-sm font-medium text-[#a8896e] dark:border-[#2a2a2a] uppercase tracking-widest">
        &copy; {new Date().getFullYear()} SunsetHues Photography. All rights
        reserved.
      </footer>
    </div>
  );
}
