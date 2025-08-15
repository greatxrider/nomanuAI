"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Calendar, Check } from "lucide-react";

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);

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
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Enhanced AI Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
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
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-orange/8 rounded-full filter blur-3xl animate-pulse animation-delay-300" />
      </div>

      <div className="container-width relative z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
          {/* Innovation Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse mr-3" />
            <span className="text-sm font-medium text-brand-orange">
              From manual to automated.
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-6">
            <span className="block bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent min-h-[1.2em] whitespace-pre-line">
              {headlines[currentHeadline]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg lg:text-xl mb-10 text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto text-center">
            At Nomanu AI, we take busywork off your plate. We design, build, and
            run automation workflows that replace manual work—while training
            your team to harness AI across every stage of your business, so you
            can focus on what matters most.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center">
            <Link
              href="#contact"
              className="group relative bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange backdrop-blur-sm text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-700 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 text-base flex items-center justify-center overflow-hidden border-2 border-transparent hover:border-transparent"
            >
              <span className="relative z-10 flex items-center">
                Book Free Consultation
                <div className="ml-3 relative">
                  <Calendar className="w-5 h-5" />
                  <Check className="w-3 h-3 absolute -bottom-1 -right-1 text-green-400" />
                </div>
              </span>

              {/* AI Colored Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-105" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm scale-110" />

              {/* Multi-colored Glowing Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/60 via-pink-500/70 to-blue-500/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-lg scale-110" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/40 via-purple-500/50 to-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-xl scale-125" />

              {/* Inner Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/20 via-pink-500/30 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" />

              {/* Subtle Background Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400/5 via-pink-500/10 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Glowing Shadow Effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-400/50 via-purple-500/50 to-pink-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl scale-110 -z-10" />
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-blue-400/30 via-green-400/30 to-yellow-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-2xl scale-125 -z-20" />
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-20">
        <button
          onClick={() => {
            const nextSection = document.getElementById("services");
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="animate-bounce cursor-pointer hover:scale-110 transition-transform duration-300"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-brand-orange/50 rounded-full flex justify-center bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm hover:border-brand-orange transition-colors duration-300">
              <div className="w-1 h-3 bg-brand-orange rounded-full mt-2 animate-pulse" />
            </div>
            <span className="text-xs text-gray-600 dark:text-gray-500 uppercase tracking-wide bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm px-2 py-1 rounded hover:text-brand-orange transition-colors duration-300">
              Discover More
            </span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
