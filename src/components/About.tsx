"use client";

import Image from "next/image";
import TeamCarousel from "./TeamCarousel";
import {
  Cpu,
  Users2,
  Lightbulb,
  Zap,
  Sparkles,
  Brain,
  CircuitBoard,
  Network,
} from "lucide-react";

const About = () => {
  const stats = [
    { label: "Automation Projects", value: "50+", icon: Zap },
    { label: "Happy Clients", value: "5+", icon: Users2 },
    { label: "AI Solutions Solved", value: "50+", icon: Lightbulb },
  ];

  const team = [
    {
      title: "AI Specialists",
      icon: Brain,
      description: "Expert in machine learning and AI algorithms",
    },
    {
      title: "AI Engineers",
      icon: Cpu,
      description: "Building robust AI-powered automation systems",
    },
    {
      title: "Automation Specialists",
      icon: CircuitBoard,
      description: "Creating intelligent business solutions",
    },
  ];

  return (
    <section
      id="about"
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Enhanced AI Background - Same as Home section */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit-about"
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
            <rect width="100%" height="100%" fill="url(#circuit-about)" />
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
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
            <Brain className="w-5 h-5 text-brand-orange mr-3 animate-pulse" />
            <span className="text-brand-orange font-semibold">
              Meet Our Team
            </span>
            <div className="w-2 h-2 bg-brand-orange rounded-full ml-3 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="text-brand-orange">NomanuAI</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're an AI Automation Agency that transforms how businesses
            operate. We help startups and growing companies eliminate manual
            work by building intelligent automation systems that handle
            repetitive tasks, streamline workflows, and free up your team to
            focus on what truly matters—growing your business.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group relative bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/10 overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* AI Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 text-center">
                    <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-orange/25 group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>

                    <div className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 font-medium">
                      {stat.label}
                    </div>
                  </div>

                  {/* Floating AI Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-brand-orange/40 rounded-full animate-pulse" />
                    <div
                      className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-brand-orange/40 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    />
                    <div
                      className="absolute top-1/2 right-2 w-1 h-1 bg-brand-orange/50 rounded-full animate-pulse"
                      style={{ animationDelay: "2s" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Team Roles */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Our Expertise
              </h3>
              {team.map((member, index) => (
                <div
                  key={member.title}
                  className="group relative bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center shadow-lg shadow-brand-orange/25 group-hover:scale-110 transition-transform duration-300">
                      <member.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {member.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {member.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Design */}
          <div className="relative">
            {/* AI Processing Visualization */}
            <div className="group relative bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-800/90 dark:to-gray-900/90 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl shadow-brand-orange/10 overflow-hidden">
              {/* Neural Network Pattern */}
              <div className="absolute inset-0 opacity-20">
                <svg
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="neuralGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" stopColor="#E56518" />
                      <stop offset="100%" stopColor="#E56518" />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="3" fill="url(#neuralGradient)" />
                  <circle cx="200" cy="150" r="3" fill="url(#neuralGradient)" />
                  <circle cx="300" cy="100" r="3" fill="url(#neuralGradient)" />
                  <path
                    d="M100,100 L200,150 L300,100"
                    stroke="url(#neuralGradient)"
                    strokeWidth="1"
                    fill="none"
                  />
                  <path
                    d="M250,50 L250,150 L250,250"
                    stroke="url(#neuralGradient)"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>

              <div className="relative z-10 text-center">
                <div className="w-24 h-24 bg-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-brand-orange/25 group-hover:scale-110 transition-transform duration-300">
                  <Network className="w-12 h-12 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  AI-Powered Solutions
                </h3>

                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  We transform complex business processes into intelligent,
                  automated workflows. Our solutions adapt and learn, becoming
                  more efficient over time.
                </p>

                <div className="space-y-3">
                  {[
                    "Intelligent Automation",
                    "Custom AI Solutions",
                    "Process Optimization",
                    "Data Intelligence",
                  ].map((solution, idx) => (
                    <div
                      key={solution}
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg border border-white/20 hover:border-brand-orange/50 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${idx * 100}ms` }}
                    >
                      <Sparkles className="w-4 h-4 text-brand-orange flex-shrink-0" />
                      <span className="text-sm text-gray-900 dark:text-white font-medium">
                        {solution}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating AI Particles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-2 h-2 bg-brand-orange/40 rounded-full animate-pulse" />
                <div
                  className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-brand-orange/40 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
                <div
                  className="absolute top-1/2 right-2 w-1 h-1 bg-brand-orange/50 rounded-full animate-pulse"
                  style={{ animationDelay: "2s" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Team Members Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Your{" "}
              <span className="text-brand-orange">Automation Partners</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your partners in building efficient, scalable systems that support
              growth today and adapt for tomorrow.
            </p>
          </div>

          <TeamCarousel />
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            <Sparkles className="w-5 h-5 mr-2" />
            Ready to Transform Your Business?
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
