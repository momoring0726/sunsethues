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
    <div className="min-h-screen font-sans text-[#4a4036] dark:text-[#e6dfd5]">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#e6dfd5] bg-[#faf7f5]/80 backdrop-blur-md dark:border-[#3e3530] dark:bg-[#2c2520]/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-semibold tracking-widest uppercase text-[#5d5045] dark:text-[#d7ccc8]">
            SunsetHues
          </div>
          <nav className="hidden gap-10 text-base font-medium text-[#8d7f73] sm:flex dark:text-[#ac9e93]">
            <Link
              href="#portfolio"
              className="hover:text-[#4a4036] transition-colors dark:hover:text-[#e6dfd5]"
            >
              Portfolio
            </Link>
            <Link
              href="#services"
              className="hover:text-[#4a4036] transition-colors dark:hover:text-[#e6dfd5]"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="hover:text-[#4a4036] transition-colors dark:hover:text-[#e6dfd5]"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-[#4a4036] transition-colors dark:hover:text-[#e6dfd5]"
            >
              Contact
            </Link>
          </nav>
          <Link
            href="#contact"
            className="rounded-none bg-[#8c7b70] px-8 py-3 text-sm font-medium uppercase tracking-wider text-[#faf7f5] transition-colors hover:bg-[#75665c] dark:bg-[#d7ccc8] dark:text-[#2c2520] dark:hover:bg-[#beb2ae]"
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
              {/* Overlay: Warm Coffee Brown tint */}
              <div className="absolute inset-0 bg-[#3e3025]/40" />
            </div>
          ))}

          {/* Hero Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pt-20">
            <h1 className="max-w-5xl text-6xl font-light tracking-tight sm:text-8xl drop-shadow-sm font-serif italic text-[#fbf9f6]">
              Timeless.{" "}
              <span className="not-italic font-sans font-normal">
                Authentic.
              </span>
            </h1>
            <p className="mt-8 max-w-3xl text-2xl text-[#efebe9] drop-shadow-sm font-light tracking-wide leading-relaxed">
              Capturing the quiet moments and the loud celebrations in soft,
              golden light.
            </p>
            <div className="mt-14 flex gap-6">
              <Link
                href="#portfolio"
                className="min-w-[180px] border border-[#fbf9f6] bg-[#fbf9f6] px-10 py-4 text-base font-bold uppercase tracking-widest text-[#4a4036] transition-colors hover:bg-[#efebe9]"
              >
                View Gallery
              </Link>
              <Link
                href="#contact"
                className="min-w-[180px] border border-[#fbf9f6] px-10 py-4 text-base font-bold uppercase tracking-widest text-[#fbf9f6] backdrop-blur-sm transition-colors hover:bg-[#fbf9f6]/10"
              >
                Inquire
              </Link>
            </div>
          </div>
        </section>

        {/* Portfolio / Selected Works */}
        <section id="portfolio" className="mx-auto max-w-7xl px-6 py-32">
          <div className="mb-20 flex flex-col items-center justify-center text-center">
            <span className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#a1887f]">
              Selected Works
            </span>
            <h2 className="text-5xl font-light text-[#4a4036] dark:text-[#e6dfd5] font-serif italic">
              Love Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Gallery Item 1 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-[#e6dfd5] dark:bg-[#3e3530]">
              <img
                src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"
                alt="Wedding couple"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-[#2c2520]/0 p-8 opacity-0 transition-all duration-500 group-hover:bg-[#2c2520]/30 group-hover:opacity-100">
                <span className="bg-[#faf7f5]/95 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#5d4037] backdrop-blur-md shadow-sm">
                  Batangas Wedding
                </span>
              </div>
            </div>

            {/* Gallery Item 2 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-[#e6dfd5] dark:bg-[#3e3530]">
              <img
                src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?q=80&w=2070&auto=format&fit=crop"
                alt="Wedding detail"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-[#2c2520]/0 p-8 opacity-0 transition-all duration-500 group-hover:bg-[#2c2520]/30 group-hover:opacity-100">
                <span className="bg-[#faf7f5]/95 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#5d4037] backdrop-blur-md shadow-sm">
                  Details
                </span>
              </div>
            </div>

            {/* Gallery Item 3 */}
            <div className="group relative aspect-[3/4] overflow-hidden bg-[#e6dfd5] dark:bg-[#3e3530]">
              <img
                src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop"
                alt="Reception event"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end justify-center bg-[#2c2520]/0 p-8 opacity-0 transition-all duration-500 group-hover:bg-[#2c2520]/30 group-hover:opacity-100">
                <span className="bg-[#faf7f5]/95 px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#5d4037] backdrop-blur-md shadow-sm">
                  The Reception
                </span>
              </div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <button className="inline-block border-2 border-[#8d7f73] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#8d7f73] transition-colors hover:bg-[#8d7f73] hover:text-[#faf7f5] dark:border-[#d7ccc8] dark:text-[#d7ccc8] dark:hover:bg-[#d7ccc8] dark:hover:text-[#2c2520]">
              View Full Portfolio
            </button>
          </div>
        </section>

        {/* Services - Bento Box Grid */}
        <section
          id="services"
          className="bg-[#f2eeeb] py-32 dark:bg-[#3e3530]/50"
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-20 text-center">
              <span className="mb-4 block text-sm font-bold uppercase tracking-[0.25em] text-[#a1887f]">
                Offerings
              </span>
              <h2 className="text-5xl font-light text-[#4a4036] dark:text-[#e6dfd5] font-serif italic">
                Services & Investments
              </h2>
            </div>

            {/* Bento Grid */}
            <div className="grid h-auto min-h-[800px] grid-cols-1 gap-6 md:grid-cols-3 md:grid-rows-2">
              {/* Item 1: Weddings (Large, Spans 2 cols, 2 rows on Desktop) */}
              <div className="group relative col-span-1 md:col-span-2 md:row-span-2 overflow-hidden rounded-sm bg-[#e6dfd5] dark:bg-[#2c2520]">
                <img
                  src="https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1600&auto=format&fit=crop"
                  alt="Wedding"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c2520]/90 via-[#2c2520]/20 to-transparent p-12 flex flex-col justify-end">
                  <h3 className="text-4xl font-serif italic text-[#fbf9f6]">
                    Weddings
                  </h3>
                  <p className="mt-4 text-lg text-[#efebe9] opacity-90">
                    Full-day coverage capturing every emotion, from the
                    preparation to the final send-off.
                  </p>
                </div>
              </div>

              {/* Item 2: Pre-Nup / Engagement (Top Right) */}
              <div className="group relative col-span-1 md:col-span-1 md:row-span-1 overflow-hidden rounded-sm bg-[#e6dfd5] dark:bg-[#2c2520]">
                <img
                  src="https://images.unsplash.com/photo-1621621667797-e06afc217fb0?q=80&w=800&auto=format&fit=crop"
                  alt="Engagement"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c2520]/90 via-[#2c2520]/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-serif italic text-[#fbf9f6]">
                    Engagement
                  </h3>
                  <p className="mt-2 text-base text-[#efebe9] opacity-90">
                    Stylized outdoor storytelling.
                  </p>
                </div>
              </div>

              {/* Item 3: Events (Bottom Right) */}
              <div className="group relative col-span-1 md:col-span-1 md:row-span-1 overflow-hidden rounded-sm bg-[#e6dfd5] dark:bg-[#2c2520]">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop"
                  alt="Events"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2c2520]/90 via-[#2c2520]/20 to-transparent p-8 flex flex-col justify-end">
                  <h3 className="text-2xl font-serif italic text-[#fbf9f6]">
                    Events & Galas
                  </h3>
                  <p className="mt-2 text-base text-[#efebe9] opacity-90">
                    Corporate and social gatherings.
                  </p>
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
          <h2 className="text-5xl font-light text-[#4a4036] dark:text-[#e6dfd5] font-serif italic">
            Let's create something beautiful.
          </h2>
          <p className="mt-6 text-xl text-[#8d7f73] dark:text-[#ac9e93]">
            Currently booking for the 2025-2026 season.
          </p>
          <div className="mt-14 flex flex-col items-center justify-center gap-6 sm:flex-row">
            <a
              href="mailto:hello@example.com"
              className="w-full bg-[#8c7b70] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#faf7f5] transition-colors hover:bg-[#75665c] dark:bg-[#d7ccc8] dark:text-[#2c2520] dark:hover:bg-[#beb2ae] sm:w-auto"
            >
              Email Me
            </a>
            <a
              href="#"
              className="w-full border border-[#d7ccc8] px-10 py-4 text-sm font-bold uppercase tracking-widest text-[#5d4037] transition-colors hover:bg-[#f2eeeb] dark:border-[#5d4037] dark:text-[#d7ccc8] dark:hover:bg-[#3e3530] sm:w-auto"
            >
              Instagram
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#e6dfd5] py-14 text-center text-sm font-medium text-[#a1887f] dark:border-[#3e3530] uppercase tracking-widest">
        &copy; {new Date().getFullYear()} Lens & Light Photography.
      </footer>
    </div>
  );
}
