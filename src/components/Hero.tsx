"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { CalendarIcon, HexagonIcon } from "@/components/icons/PremiumIcons";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const headlines = useMemo(
    () => [
      "Build Custom AI Agents",
      "Develop AI-Powered Products",
      "Create MCP Servers",
      "Deploy AI Voice Agents",
      "Engineer Custom Software",
      "Automate Complex Workflows",
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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-paper dark:bg-gray-950"
    >
      {/* Background Pattern */}
      <DarkHoneycombBackground patternId="hero-honeycomb" />

      <div className="container-width relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-20 md:py-24 text-center px-4 sm:px-6">
          
          {/* Badge */}
          <div className={`badge-glass mb-8 transition-all duration-1000 ease-out-expo ${
              isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <HexagonIcon size={14} className="mr-2 text-brand" />
            <span className="font-display tracking-wide text-xs uppercase font-bold">AI-Powered Automation</span>
          </div>

          {/* Main Headline - Geometric Exo 2 typeface */}
          <h1
            className={`heading-display max-w-5xl mx-auto mb-8 transition-all duration-1000 ease-out-expo delay-100 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-ink dark:text-white block mb-2">
              {headlines[currentHeadline].split(" ").slice(0, -1).join(" ")}{" "}
            </span>
            <span className="honey-shimmer relative inline-block">
              {headlines[currentHeadline].split(" ").slice(-1)}
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-body-lg max-w-2xl mx-auto mb-12 text-balance text-ink-secondary dark:text-gray-300 transition-all duration-1000 ease-out-expo delay-200 ${
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
            className={`flex flex-col sm:flex-row gap-5 mb-16 transition-all duration-1000 ease-out-expo delay-300 ${
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
          >
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group inline-flex items-center justify-center gap-3 text-[16px] px-8 py-4 shadow-brand hover:shadow-brand-lg"
            >
              <CalendarIcon size={20} className="opacity-90 group-hover:scale-110 transition-transform duration-300" />
              <span>Book Discovery Call</span>
            </Link>
            <Link
              href="/services"
              className="btn-secondary group inline-flex items-center justify-center gap-2 text-[16px] px-8 py-4"
            >
              <span>Explore Services</span>
              <HexagonIcon size={16} className="text-brand opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className={`flex items-center justify-center gap-8 opacity-60 grayscale transition-all duration-1000 ease-out-expo delay-500 ${
              isIntersecting ? "opacity-60 translate-y-0" : "opacity-0 translate-y-4"
            }`}>
            {/* Placeholder for logos or trust badges if needed later */}
          </div>

        </div>
      </div>

      {/* Bottom hex-gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <div className="h-40 bg-gradient-to-t from-paper-secondary to-transparent dark:from-gray-900 dark:to-transparent" />
        <div className="divider-honeycomb" />
      </div>
    </section>
  );
};

export default Hero;
