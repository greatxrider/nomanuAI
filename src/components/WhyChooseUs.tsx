"use client";

import Image from "next/image";
import {
  Users,
  Shield,
  Brain,
  Zap,
  Rocket,
  TrendingUp,
  Eye,
  Target,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Users,
      title: "Dedicated Support: Your DevMate & ClientMate",
      description:
        "Every client gets a DevMate (your personal automation developer) and a ClientMate (your customer success manager), ensuring both technical execution and strategic alignment are always covered.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=face",
      highlight: true,
    },
    {
      icon: Shield,
      title: "Customer Service is Our Strength",
      description:
        "We pride ourselves on delivering responsive, proactive, personalized service at every step.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      highlight: true,
    },
    {
      icon: Brain,
      title: "AI + Automation Expertise",
      description:
        "We combine the power of artificial intelligence with automation to create smart systems that think and act on your behalf.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      highlight: true,
    },
    {
      icon: Zap,
      title: "Process-Driven, Tool-Agnostic",
      description:
        "We focus on your business goals—not just tools—ensuring the best solution, regardless of platform.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      highlight: true,
    },
    {
      icon: Rocket,
      title: "Scalable & Sustainable Architecture",
      description:
        "Automations are designed to grow with your business—minimizing rework and maximizing ROI.",
      image:
        "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      highlight: true,
    },
    {
      icon: TrendingUp,
      title: "No-Code/Low-Code Implementation",
      description:
        "We use modern automation platforms to move quickly without heavy development cycles.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      highlight: true,
    },
    {
      icon: Eye,
      title: "People-First Impact",
      description:
        "Our automations don't replace people—they elevate them. We free teams to focus on strategy, creativity, and leadership.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      highlight: true,
    },
    {
      icon: Target,
      title: "Transparent Collaboration",
      description:
        "We work closely with your team, providing clear communication, documented progress, and shared visibility across every phase.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      highlight: true,
    },
  ];

  return (
    <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Enhanced AI Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit-why"
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
            <rect width="100%" height="100%" fill="url(#circuit-why)" />
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
              WHY BUSINESSES CHOOSE NOMANUAI?
            </span>
            <div className="w-2 h-2 bg-brand-orange rounded-full ml-3 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Transform Your{" "}
            <span className="text-brand-orange">Business with AI</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Intelligent automation solutions that adapt, learn, and scale with
            your business goals
          </p>
        </div>

        {/* Featured Cards - Hero Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/10 overflow-hidden"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* AI Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content - Different layout for left vs right columns */}
                {index % 2 === 0 ? (
                  // Left column: Icon first, then title, then image
                  <>
                    {/* Icon Badge */}
                    <div className="relative z-10 mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-2xl border border-brand-orange/20">
                        <feature.icon className="w-8 h-8 text-brand-orange" />
                      </div>
                    </div>

                    <div className="relative z-10 mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    <div className="relative h-64 overflow-hidden rounded-2xl">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                  </>
                ) : (
                  // Right column: Image first, then icon, then title
                  <>
                    <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>

                    {/* Icon Badge */}
                    <div className="relative z-10 mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-orange/10 rounded-2xl border border-brand-orange/20">
                        <feature.icon className="w-8 h-8 text-brand-orange" />
                      </div>
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </>
                )}

                {/* Floating AI Particles */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-6 right-6 w-3 h-3 bg-brand-orange/40 rounded-full animate-pulse" />
                  <div
                    className="absolute bottom-6 left-6 w-2 h-2 bg-brand-orange/40 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <div
                    className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-brand-orange/50 rounded-full animate-pulse"
                    style={{ animationDelay: "2s" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
