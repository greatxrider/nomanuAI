"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { CalendarIcon } from "@/components/icons/PremiumIcons";

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const headlines = useMemo(
    () => [
      "Automate Manual Work",
      "Empower Your Team",
      "Integrate AI Into Your Workflow",
      "Eliminate Repetitive Tasks",
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [headlines.length]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Background Image */}
      <img
        src="/assets/beeInspiration/5303586.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/70 to-gray-100/80 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />

      {/* Floating Hex Particles - decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hex-particle w-16 h-16 top-[15%] left-[8%]" style={{ animationDelay: '0s' }} />
        <div className="hex-particle w-10 h-10 top-[25%] right-[12%]" style={{ animationDelay: '2s' }} />
        <div className="hex-particle w-20 h-20 bottom-[20%] left-[15%]" style={{ animationDelay: '4s' }} />
        <div className="hex-particle w-12 h-12 top-[60%] right-[8%]" style={{ animationDelay: '1s' }} />
        <div className="hex-particle w-8 h-8 top-[40%] left-[5%]" style={{ animationDelay: '3s' }} />
        <div className="hex-particle w-14 h-14 bottom-[30%] right-[18%]" style={{ animationDelay: '5s' }} />
      </div>

      <div className="container-width relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-20 md:py-24 text-center px-4 sm:px-6">
          {/* Main Headline - Geometric Exo 2 typeface */}
          <h1
            className={`heading-display max-w-4xl mx-auto mb-6 transition-all duration-1000 ease-out-expo ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-ink dark:text-white block">
              {headlines[currentHeadline].split(" ").slice(0, -1).join(" ")}{" "}
            </span>
            <span className="honey-shimmer">
              {headlines[currentHeadline].split(" ").slice(-1)}
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-body-lg max-w-2xl mx-auto mb-10 text-balance transition-all duration-1000 ease-out-expo delay-100 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            Transform your business with intelligent automation solutions that
            streamline workflows, reduce costs, and boost productivity.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 ease-out-expo delay-200 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2 text-[15px] px-7 py-4"
            >
              <CalendarIcon size={18} className="opacity-90" />
              <span>Book Free Discovery Call</span>
            </Link>
            <Link
              href="/services"
              className="btn-secondary inline-flex items-center justify-center text-[15px] px-7 py-4"
            >
              <span>Explore Services</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom hex-gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="h-32 bg-gradient-to-t from-paper-secondary to-transparent dark:from-gray-900 dark:to-transparent" />
        <div className="divider-honeycomb" />
      </div>
    </section>
  );
};

export default Hero;
