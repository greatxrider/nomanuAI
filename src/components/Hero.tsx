"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  Zap,
  Brain,
  Cpu,
  Network,
  Bot,
  Sparkles,
} from "lucide-react";

const Hero = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = [
    "Lead Generation",
    "CRM Integration",
    "Process Automation",
    "Business Growth",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    >
      {/* AI Neural Network Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Neural Network Pattern */}
        <div className="absolute inset-0">
          {/* Neural network nodes */}
          <div className="absolute top-20 left-20 w-3 h-3 bg-brand-orange rounded-full animate-pulse"></div>
          <div className="absolute top-32 left-40 w-2 h-2 bg-brand-orange/60 rounded-full animate-pulse animation-delay-200"></div>
          <div className="absolute top-40 left-60 w-3 h-3 bg-brand-orange rounded-full animate-pulse animation-delay-400"></div>
          <div className="absolute top-24 right-32 w-2 h-2 bg-brand-orange/60 rounded-full animate-pulse animation-delay-300"></div>
          <div className="absolute top-48 right-48 w-3 h-3 bg-brand-orange rounded-full animate-pulse animation-delay-500"></div>

          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#E56518" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#E56518" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <line
              x1="80"
              y1="80"
              x2="160"
              y2="128"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse"
            />
            <line
              x1="160"
              y1="128"
              x2="240"
              y2="160"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse animation-delay-200"
            />
            <line
              x1="240"
              y1="160"
              x2="320"
              y2="96"
              stroke="url(#lineGradient)"
              strokeWidth="1"
              className="animate-pulse animation-delay-400"
            />
          </svg>
        </div>

        {/* Floating AI Elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-brand-orange/8 rounded-full filter blur-2xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-brand-orange/5 rounded-full filter blur-xl animate-float animation-delay-200"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 h-28 bg-brand-orange/6 rounded-full filter blur-2xl animate-float animation-delay-400"></div>

        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(229,101,24,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(229,101,24,0.02)_1px,transparent_1px)] bg-[size:80px_80px] animate-pulse"></div>
      </div>

      <div className="container-width relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* AI Innovation Badge */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-gray-800/50 border border-gray-700 rounded-full backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-brand-orange mr-2 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">
                AI-Powered Automation Solutions
              </span>
              <Sparkles className="w-4 h-4 text-brand-orange ml-2 animate-pulse animation-delay-200" />
            </div>
          </div>

          {/* Interactive AI Icons */}
          <div className="flex justify-center items-center space-x-8 mb-10">
            <div className="group relative">
              <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700 backdrop-blur-sm hover:border-brand-orange/50 transition-all duration-300 hover:scale-110">
                <Brain className="w-7 h-7 text-brand-orange group-hover:animate-pulse" />
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Intelligence
              </div>
            </div>

            <div className="group relative">
              <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700 backdrop-blur-sm hover:border-brand-orange/50 transition-all duration-300 hover:scale-110 animation-delay-200">
                <Network className="w-7 h-7 text-gray-300 group-hover:text-brand-orange group-hover:animate-pulse transition-colors" />
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Networks
              </div>
            </div>

            <div className="group relative">
              <div className="p-4 rounded-xl bg-gray-800/30 border border-gray-700 backdrop-blur-sm hover:border-brand-orange/50 transition-all duration-300 hover:scale-110 animation-delay-400">
                <Bot className="w-7 h-7 text-brand-orange group-hover:animate-pulse" />
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                Automation
              </div>
            </div>
          </div>

          {/* Main Headline with Perfect Font Sizes */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
              Business Intelligence
            </span>
            <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light mt-2">
              with AI Automation
            </span>
          </h1>

          {/* Dynamic Subheadline with Rotating Text */}
          <div className="text-lg md:text-xl mb-10 h-16 flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <span className="text-gray-300">Revolutionizing</span>
              <div className="relative overflow-hidden h-7">
                <span className="absolute inset-0 text-brand-orange font-bold">
                  {words[currentWord]}
                </span>
              </div>
              <Zap className="w-5 h-5 text-brand-orange animate-pulse" />
            </div>
          </div>

          {/* Enhanced Description */}
          <p className="text-base md:text-lg mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Harness the power of{" "}
            <span className="text-brand-orange font-semibold">
              artificial intelligence
            </span>{" "}
            to automate your business processes, amplify productivity, and
            accelerate growth.
            <span className="text-white font-medium">
              {" "}
              Join the AI revolution today.
            </span>
          </p>

          {/* Interactive CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="#contact"
              className="group relative bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 text-base flex items-center overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Launch AI Journey
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange-light to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="#services"
              className="group border-2 border-gray-600 text-gray-300 hover:bg-brand-orange/10 hover:border-brand-orange hover:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-opacity-50 text-base backdrop-blur-sm"
            >
              <span className="flex items-center">
                Explore Solutions
                <Network className="ml-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
              </span>
            </Link>
          </div>

          {/* AI-Powered Stats with Enhanced Design */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group relative bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4">
                <Cpu className="w-5 h-5 text-brand-orange/30 group-hover:text-brand-orange group-hover:animate-pulse transition-all" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-3 group-hover:scale-110 transition-transform">
                500+
              </div>
              <div className="text-gray-300 font-medium leading-tight">
                AI Processes
                <br />
                Automated
              </div>
            </div>

            <div className="group relative bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4">
                <Brain className="w-5 h-5 text-brand-orange/30 group-hover:text-brand-orange group-hover:animate-pulse transition-all" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-3 group-hover:scale-110 transition-transform">
                95%
              </div>
              <div className="text-gray-300 font-medium leading-tight">
                Efficiency
                <br />
                Improvement
              </div>
            </div>

            <div className="group relative bg-gray-800/20 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105">
              <div className="absolute top-4 right-4">
                <Sparkles className="w-5 h-5 text-brand-orange/30 group-hover:text-brand-orange group-hover:animate-pulse transition-all" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-brand-orange mb-3 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-gray-300 font-medium leading-tight">
                Enterprise
                <br />
                Partners
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <div className="w-6 h-10 border-2 border-brand-orange rounded-full flex justify-center opacity-60">
            <div className="w-1 h-3 bg-brand-orange rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs text-gray-400 uppercase tracking-wide">
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
