"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Check } from "lucide-react";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const headlines = [
    "Automate\nManual\nWork",
    "Empower\nYour\nTeam",
    "Integrate\nAI Into\nYour Workflow",
    "Eliminate\nRepetitive\nTasks",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeadline((prev) => (prev + 1) % headlines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Enhanced AI Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-10" data-speed="0.3">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M20,20 L80,20 L80,80 L20,80 Z"
                  fill="none"
                  stroke="#E56518"
                  strokeWidth="1"
                />
                <circle cx="20" cy="20" r="3" fill="#E56518" />
                <circle cx="80" cy="20" r="3" fill="#E56518" />
                <circle cx="80" cy="80" r="3" fill="#E56518" />
                <circle cx="20" cy="80" r="3" fill="#E56518" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {[
            { left: "15%", top: "20%", delay: "0s", duration: "4s" },
            { left: "85%", top: "30%", delay: "0.5s", duration: "3.5s" },
            { left: "25%", top: "70%", delay: "1s", duration: "4.5s" },
            { left: "75%", top: "60%", delay: "1.5s", duration: "3s" },
            { left: "45%", top: "15%", delay: "2s", duration: "4.2s" },
            { left: "65%", top: "80%", delay: "2.5s", duration: "3.8s" },
            { left: "10%", top: "50%", delay: "3s", duration: "4.1s" },
            { left: "90%", top: "45%", delay: "3.5s", duration: "3.7s" },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-brand-orange rounded-full animate-float opacity-30"
              data-speed={0.5 + i * 0.1}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div
          className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl animate-pulse"
          data-speed="0.2"
        />
        <div
          className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-orange/8 rounded-full filter blur-3xl animate-pulse animation-delay-300"
          data-speed="0.4"
        />
      </div>

      <div className="container-width relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-16 md:py-20 text-center px-4 sm:px-6">
          {/* Innovation Badge */}
          <div
            className={`inline-flex items-center px-4 py-2 mb-8 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm transition-all duration-1000 ${isIntersecting
              ? "animate-fade-in-down opacity-100"
              : "opacity-0 translate-y-8"
              }`}
            data-speed="0.8"
          >
            <div className="w-2 h-2 bg-brand-orange rounded-full mr-2 animate-pulse" />
            <span className="text-sm font-medium text-brand-orange">
              AI-Powered Automation
            </span>
          </div>

          {/* Main Headline */}
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6 leading-tight transition-all duration-1000 ${isIntersecting
              ? "animate-fade-in-down opacity-100"
              : "opacity-0 translate-y-12"
              }`}
            data-speed="0.6"
          >
            <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
              {headlines[currentHeadline]
                .split("\n")
                .map((line, index, array) => (
                  <span key={index} className="inline">
                    {line}
                    {index < array.length - 1 && " "}
                  </span>
                ))}
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-6 md:mb-8 leading-relaxed transition-all duration-1000 delay-200 px-4 ${isIntersecting
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-8"
              }`}
            data-speed="0.7"
          >
            Transform your business with intelligent automation solutions that
            streamline workflows, reduce costs, and boost productivity.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 md:mb-12 transition-all duration-1000 delay-300 items-center justify-center ${isIntersecting
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-8"
              }`}
            data-speed="0.9"
          >
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-sm sm:max-w-none"
            >
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline" />
              <span className="hidden sm:inline">Book Your Free Discovery Call</span>
              <span className="sm:hidden">Free Discovery Call</span>
            </Link>
            <Link href="/services" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto max-w-sm sm:max-w-none">
              <span className="hidden sm:inline">Explore Our Services</span>
              <span className="sm:hidden">Our Services</span>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400 transition-all duration-1000 delay-400 ${isIntersecting
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-8"
              }`}
            data-speed="1.0"
          >
            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-brand-orange" />
              <span>No Setup Fees</span>
            </div>

            <div className="flex items-center">
              <Check className="w-4 h-4 mr-2 text-brand-orange" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
