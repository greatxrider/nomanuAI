"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import { CalendarIcon, HexagonIcon } from "@/components/icons/PremiumIcons";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden
        bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Background Image */}
      <img
        src="/assets/beeInspiration/5303586.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/40 to-gray-100/50 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />

      {/* Honeycomb Mesh Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.1] dark:opacity-[0.05]" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='104' viewBox='0 0 60 104' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-opacity='0.4' fill='%23e56518'/%3E%3Cpath d='M30 104l25.98-15V59L30 44 4.02 59v30z' fill-opacity='0.4' fill='%23e56518'/%3E%3C/svg%3E")`,
             backgroundSize: '60px 104px'
           }} 
      />

      {/* Floating Hex Particles - decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="hex-particle w-16 h-16 top-[15%] left-[8%]" style={{ animationDelay: '0s' }} />
        <div className="hex-particle w-10 h-10 top-[25%] right-[12%]" style={{ animationDelay: '2s' }} />
        <div className="hex-particle w-20 h-20 bottom-[20%] left-[15%]" style={{ animationDelay: '4s' }} />
        <div className="hex-particle w-12 h-12 top-[60%] right-[8%]" style={{ animationDelay: '1s' }} />
        <div className="hex-particle w-8 h-8 top-[40%] left-[5%]" style={{ animationDelay: '3s' }} />
        <div className="hex-particle w-14 h-14 bottom-[30%] right-[18%]" style={{ animationDelay: '5s' }} />
        
        {/* Large Hexagon Outline Decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand/5 rounded-full opacity-20 animate-pulse-subtle pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-brand/5 rounded-full opacity-10 animate-pulse-subtle animation-delay-500 pointer-events-none" />
      </div>

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
