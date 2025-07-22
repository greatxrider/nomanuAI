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
  ArrowRight,
  Play,
  CheckCircle,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react";

const Hero = () => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const features = [
    { text: "Intelligent Process Automation", icon: Brain },
    { text: "Smart Data Analytics", icon: TrendingUp },
    { text: "Automated Decision Making", icon: Cpu },
    { text: "24/7 AI Operations", icon: Clock },
  ];

  const automationStats = [
    { value: "10x", label: "Faster Processing", icon: Zap },
    { value: "99.9%", label: "Accuracy Rate", icon: CheckCircle },
    { value: "80%", label: "Cost Reduction", icon: TrendingUp },
    { value: "24/7", label: "AI Monitoring", icon: Shield },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
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
                Next-Gen AI Automation Platform
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="block text-gray-900 dark:text-white">
                Automate
              </span>
              <span className="block bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                Everything
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-300 font-light mt-2">
                with Intelligent AI
              </span>
            </h1>

            {/* Dynamic Feature Display */}
            <div className="mb-8 h-12 flex items-center justify-center lg:justify-start">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-brand-orange/20 border border-brand-orange/30">
                  {(() => {
                    const IconComponent = features[currentFeature].icon;
                    return (
                      <IconComponent className="w-5 h-5 text-brand-orange" />
                    );
                  })()}
                </div>
                <div className="text-lg md:text-xl text-gray-900 dark:text-white font-medium">
                  {features[currentFeature].text}
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl mb-10 text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Transform your business with{" "}
              <span className="text-brand-orange font-semibold">
                AI-powered automation
              </span>{" "}
              that learns, adapts, and scales with your needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="group relative bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-base flex items-center justify-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  Start AI Transformation
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-orange-light to-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="group border-2 border-brand-orange/30 bg-brand-orange/5 hover:bg-brand-orange/10 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
              >
                <Play
                  className={`w-5 h-5 mr-2 transition-transform ${
                    isPlaying ? "scale-110" : ""
                  }`}
                />
                Watch Demo
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {automationStats.map((stat, index) => (
                <div key={index} className="group text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                    <stat.icon className="w-4 h-4 text-brand-orange group-hover:scale-110 transition-transform" />
                    <div className="text-2xl font-bold text-brand-orange">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Interactive AI Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Central AI Core */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Core Circle */}
                <div className="absolute inset-8 bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 rounded-full border-2 border-brand-orange/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="relative">
                    <Brain className="w-16 h-16 md:w-20 md:h-20 text-brand-orange animate-pulse" />
                    <div className="absolute inset-0 bg-brand-orange/20 rounded-full filter blur-xl animate-ping" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[
                  { icon: Cpu, angle: 0, delay: 0 },
                  { icon: Network, angle: 72, delay: 200 },
                  { icon: Bot, angle: 144, delay: 400 },
                  { icon: Zap, angle: 216, delay: 600 },
                  { icon: Sparkles, angle: 288, delay: 800 },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="absolute w-12 h-12 md:w-16 md:h-16"
                    style={{
                      transform: `rotate(${item.angle}deg) translateX(140px) rotate(-${item.angle}deg)`,
                      top: "50%",
                      left: "50%",
                      marginTop: "-24px",
                      marginLeft: "-24px",
                      animationDelay: `${item.delay}ms`,
                    }}
                  >
                    <div className="w-full h-full bg-gray-800/40 border border-brand-orange/40 rounded-full backdrop-blur-sm flex items-center justify-center hover:scale-110 transition-all duration-300 animate-float">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6 text-brand-orange" />
                    </div>
                  </div>
                ))}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <defs>
                    <linearGradient
                      id="connectionGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#E56518" stopOpacity="0.6" />
                      <stop
                        offset="100%"
                        stopColor="#E56518"
                        stopOpacity="0.1"
                      />
                    </linearGradient>
                  </defs>
                  {[
                    { x2: "85%", y2: "50%", delay: "0ms" }, // 0 degrees
                    { x2: "61.16%", y2: "79.42%", delay: "200ms" }, // 72 degrees
                    { x2: "21.68%", y2: "29.43%", delay: "400ms" }, // 144 degrees
                    { x2: "21.68%", y2: "70.57%", delay: "600ms" }, // 216 degrees
                    { x2: "61.16%", y2: "20.58%", delay: "800ms" }, // 288 degrees
                  ].map((line, index) => (
                    <line
                      key={index}
                      x1="50%"
                      y1="50%"
                      x2={line.x2}
                      y2={line.y2}
                      stroke="url(#connectionGradient)"
                      strokeWidth="2"
                      className="animate-pulse"
                      style={{ animationDelay: line.delay }}
                    />
                  ))}
                </svg>

                {/* Pulse Rings */}
                <div className="absolute inset-0 rounded-full border border-brand-orange/20 animate-ping animation-duration-3000" />
                <div className="absolute inset-4 rounded-full border border-brand-orange/15 animate-ping animation-duration-4000 animation-delay-500" />
              </div>

              {/* Floating Info Cards */}
              <div className="absolute -top-8 -left-8 bg-gray-800/80 backdrop-blur-sm border border-brand-orange/30 rounded-lg p-3 animate-float">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-xs text-gray-300">AI Active</span>
                </div>
              </div>

              <div className="absolute -bottom-8 -right-8 bg-gray-800/80 backdrop-blur-sm border border-brand-orange/30 rounded-lg p-3 animate-float animation-delay-1000">
                <div className="flex items-center space-x-2">
                  <TrendingUp className="w-3 h-3 text-brand-orange" />
                  <span className="text-xs text-gray-300">Optimizing</span>
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
