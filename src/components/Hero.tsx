"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Zap,
  Bot,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Clock,
  Users,
  TrendingDown,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
  const [currentHeadline, setCurrentHeadline] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const headlines = [
    "Automate Manual Work",
    "Capture Every Lead",
    "Integrate AI Into Your Workflow",
    "Eliminate Repetitive Tasks",
  ];

  const automationStats = [
    {
      problemValue: "40%",
      problemLabel: "Lost Leads",
      solutionValue: "95%",
      solutionLabel: "Captured",
      problemIcon: TrendingDown,
      solutionIcon: TrendingUp,
      arrow: "→",
    },
    {
      problemValue: "4hrs",
      problemLabel: "Response Time",
      solutionValue: "2min",
      solutionLabel: "AI Response",
      problemIcon: Clock,
      solutionIcon: Zap,
      arrow: "→",
    },
    {
      problemValue: "Manual",
      problemLabel: "Task Chaos",
      solutionValue: "100%",
      solutionLabel: "Automated",
      problemIcon: Users,
      solutionIcon: Bot,
      arrow: "→",
    },
    {
      problemValue: "$8K",
      problemLabel: "Wasted Monthly",
      solutionValue: "$7.5K",
      solutionLabel: "Saved Monthly",
      problemIcon: TrendingDown,
      solutionIcon: CheckCircle,
      arrow: "→",
    },
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
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Column - Main Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Innovation Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse mr-3" />
              <span className="text-sm font-medium text-brand-orange">
                Trusted by 50+ Businesses
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="block bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent min-h-[1.2em]">
                {headlines[currentHeadline]}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl mb-10 text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0">
              At Nomanu AI, we take busywork off your plate. Our team transforms
              manual processes into seamless, automated workflows powered by
              AI—so you can focus on what matters most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="group relative bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base flex items-center justify-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange-light to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="group border-2 border-brand-orange/30 bg-brand-orange/5 hover:bg-brand-orange/10 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
              >
                Sample Projects
              </button>
            </div>

            {/* AI-Powered Transformation Stats */}
            <div className="relative">
              {/* AI Circuit Background Pattern */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
                <div className="absolute bottom-0 right-1/4 w-40 h-px bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent" />
                <div className="absolute top-1/2 left-0 w-px h-16 bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent" />
                <div className="absolute top-1/2 right-0 w-px h-16 bg-gradient-to-b from-transparent via-brand-orange/30 to-transparent" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 relative z-10">
                {automationStats.map((stat, index) => (
                  <div
                    key={index}
                    className="group relative bg-gradient-to-br from-white/10 via-white/5 to-transparent dark:from-gray-800/60 dark:via-gray-800/30 dark:to-transparent rounded-xl p-4 border border-brand-orange/20 hover:border-brand-orange/50 transition-all duration-500 backdrop-blur-sm overflow-hidden hover:scale-105 hover:shadow-lg hover:shadow-brand-orange/10"
                  >
                    {/* Animated Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Circuit Node Decorations */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-brand-orange/40 rounded-full animate-pulse" />
                    <div
                      className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-brand-orange/30 rounded-full animate-pulse"
                      style={{ animationDelay: "300ms" }}
                    />

                    <div className="flex items-center justify-between lg:flex-col lg:text-center relative z-10">
                      {/* Problem Section */}
                      <div className="flex-1 lg:mb-3">
                        <div className="flex items-center space-x-2 mb-1 justify-center lg:justify-center">
                          <div className="relative">
                            <stat.problemIcon className="w-4 h-4 text-red-400 group-hover:scale-110 transition-all duration-300 relative z-10" />
                            <div className="absolute inset-0 bg-red-400/20 rounded-full filter blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="text-lg font-bold text-red-400 group-hover:text-red-300 transition-colors">
                            {stat.problemValue}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-400 dark:group-hover:text-gray-300 transition-colors">
                          {stat.problemLabel}
                        </div>
                      </div>

                      {/* AI Transformation Arrow */}
                      <div className="flex-shrink-0 mx-3 lg:my-3 lg:mx-0 relative">
                        <div className="relative">
                          <div className="text-brand-orange font-bold text-lg group-hover:scale-110 transition-transform duration-300 relative z-10">
                            {stat.arrow}
                          </div>
                          <div className="absolute inset-0 bg-brand-orange/30 rounded-full filter blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
                        </div>
                        {/* Mini AI Pulse */}
                        <div className="absolute -top-1 -right-1 w-1 h-1 bg-brand-orange rounded-full animate-ping opacity-60" />
                      </div>

                      {/* Solution Section */}
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1 justify-center lg:justify-center">
                          <div className="relative">
                            <stat.solutionIcon className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-all duration-300 relative z-10 group-hover:drop-shadow-glow" />
                            <div className="absolute inset-0 bg-brand-orange/30 rounded-full filter blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="text-lg font-bold text-brand-orange group-hover:text-brand-orange-light transition-colors">
                            {stat.solutionValue}
                          </div>
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 group-hover:text-brand-orange/80 transition-colors">
                          {stat.solutionLabel}
                        </div>
                      </div>
                    </div>

                    {/* Hover Data Flow Effect */}
                    <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-orange/0 to-transparent group-hover:via-brand-orange/60 transition-all duration-700" />
                  </div>
                ))}
              </div>

              {/* AI Processing Indicator */}
              <div className="flex justify-center mt-4">
                <div className="flex items-center space-x-2 px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm">
                  <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
                  <span className="text-xs font-medium text-brand-orange">
                    AI-Powered Transformation
                  </span>
                  <div
                    className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"
                    style={{ animationDelay: "500ms" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Floating Automation Tool Logos (Zapier larger, all with animated gray container) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            {/* Organized Triangular Floating Automation Tool Logos (Zapier container bigger) */}
            <div className="relative w-full h-[520px] flex items-center justify-center">
              {/* Triangle vertices for 3 logos, n8n and Zapier larger, with gray background container and animation */}
              <div
                className="absolute animate-float"
                style={{
                  left: "50%",
                  top: "5%",
                  transform: "translate(-50%, 0)",
                }}
              >
                <div className="bg-gray-200 dark:bg-gray-800 rounded-xl p-4 flex items-center justify-center shadow-lg">
                  <Image
                    src="/logo/N8n-logo-new.svg.png"
                    alt="n8n logo"
                    width={220}
                    height={220}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div
                className="absolute animate-float"
                style={{
                  left: "20%",
                  top: "65%",
                  transform: "translate(0, 0)",
                }}
              >
                <div className="bg-gray-200 dark:bg-gray-800 rounded-xl p-4 flex items-center justify-center shadow-lg">
                  <Image
                    src="/logo/make-logo.png"
                    alt="Make logo"
                    width={180}
                    height={180}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
              <div
                className="absolute animate-float"
                style={{
                  left: "80%",
                  top: "65%",
                  transform: "translate(-100%, 0)",
                }}
              >
                <div className="bg-gray-200 dark:bg-gray-800 rounded-xl p-8 flex items-center justify-center shadow-lg">
                  <Image
                    src="/logo/Zapier_logo.svg.png"
                    alt="Zapier logo"
                    width={260}
                    height={260}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-brand-orange/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-brand-orange rounded-full mt-2 animate-pulse" />
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-500 uppercase tracking-wide">
            Discover More
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
