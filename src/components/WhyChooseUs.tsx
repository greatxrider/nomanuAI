"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  Users,
  Shield,
  Brain,
  Zap,
  Rocket,
  TrendingUp,
  Eye,
  Target,
} from "lucide-react";

const WhyChooseUs = () => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });
  const features = [
    {
      icon: Users,
      title: "Dedicated Support: Your DevMate & ClientMate",
      description:
        "You get two dedicated experts: a DevMate who builds your automation and a ClientMate who ensures everything runs smoothly. No waiting, no confusion - just results.",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop&crop=face",
      highlight: true,
    },
    {
      icon: Shield,
      title: "Customer Service is Our Strength",
      description:
        "We answer your calls, respond to your emails, and solve your problems quickly. You're not just another client - you're our priority.",
      image: "/whyChoose/customer-service.jpg",
      highlight: true,
    },
    {
      icon: Brain,
      title: "AI + Automation Expertise",
      description:
        "We know how to make AI work for your business. Our systems learn from your data and make smart decisions that save you time and money.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      highlight: true,
    },
    {
      icon: Zap,
      title: "Process-Driven, Tool-Agnostic",
      description:
        "We focus on what you want to achieve, not what tools we prefer. We'll use whatever works best to get you the results you need.",
      image: "/whyChoose/process-driven.png",
      highlight: true,
    },
    {
      icon: Rocket,
      title: "Scalable & Sustainable Architecture",
      description:
        "Your automation grows with your business. We build it right the first time so you don't have to rebuild it later. That means more money in your pocket.",
      image: "/whyChoose/sustainable.png",
      highlight: true,
    },
    {
      icon: TrendingUp,
      title: "No-Code/Low-Code Implementation",
      description:
        "We use the best automation tools available. This means faster results, lower costs, and solutions that work immediately without months of development.",
      image: "/whyChoose/low-code.png",
      highlight: true,
    },
    {
      icon: Eye,
      title: "People-First Impact",
      description:
        "We don't replace your team - we make them better. Your people focus on what they do best while our automation handles the boring stuff.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      highlight: true,
    },
    {
      icon: Target,
      title: "Transparent Collaboration",
      description:
        "You see everything we do. We keep you updated, share our progress, and work together to make sure you get exactly what you want.",
      image: "/whyChoose/people-meeting.jpg",
      highlight: true,
    },
  ];

  return (
    <section
      ref={ref}
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
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
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isIntersecting
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
            <Brain className="w-5 h-5 text-brand-orange mr-3 animate-pulse" />
            <span className="text-brand-orange font-semibold">
              WHY BUSINESSES CHOOSE NOMANUAI?
            </span>
            <div className="w-2 h-2 bg-brand-orange rounded-full ml-3 animate-pulse" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Businesses{" "}
            <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
              Choose NomanuAI?
            </span>
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
                className={`group relative bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/10 overflow-hidden ${
                  isIntersecting
                    ? index % 2 === 0
                      ? "animate-fade-in-left opacity-100"
                      : "animate-fade-in-right opacity-100"
                    : index % 2 === 0
                    ? "opacity-0 -translate-x-32"
                    : "opacity-0 translate-x-32"
                }`}
                style={{
                  animationDelay: `${index * 200}ms`,
                  transitionDelay: `${index * 100}ms`,
                }}
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

                    <div
                      className={`relative h-64 overflow-hidden rounded-2xl ${
                        feature.title.includes("Dedicated Support") ||
                        feature.title.includes("AI + Automation Expertise") ||
                        feature.title.includes("People-First Impact")
                          ? "bg-white"
                          : ""
                      }`}
                    >
                      {feature.title.includes("Dedicated Support") ? (
                        <iframe
                          src="https://lottie.host/embed/2d72dc12-f9c3-4246-9ca4-761c6b68b7e8/otmznHELV9.lottie"
                          title={feature.title}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      ) : feature.title.includes(
                          "AI + Automation Expertise"
                        ) ? (
                        <iframe
                          src="https://lottie.host/embed/087108cc-2e05-43ae-ab7b-a6097b603f0c/d2NDpHCZcX.lottie"
                          title={feature.title}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      ) : feature.title.includes("People-First Impact") ? (
                        <iframe
                          src="https://lottie.host/embed/15c9e726-c4e6-4c91-b85e-8689fe0cb5f9/KSIIvmyugy.lottie"
                          title={feature.title}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      ) : (
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    </div>
                  </>
                ) : (
                  // Right column: Image first, then icon, then title
                  <>
                    <div
                      className={`relative h-64 overflow-hidden rounded-2xl mb-6 ${
                        feature.title.includes("Dedicated Support") ||
                        feature.title.includes("AI + Automation Expertise") ||
                        feature.title.includes("People-First Impact")
                          ? "bg-white"
                          : ""
                      }`}
                    >
                      {feature.title.includes("Dedicated Support") ? (
                        <iframe
                          src="https://lottie.host/embed/2d72dc12-f9c3-4246-9ca4-761c6b68b7e8/otmznHELV9.lottie"
                          title={feature.title}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      ) : feature.title.includes(
                          "AI + Automation Expertise"
                        ) ? (
                        <iframe
                          src="https://lottie.host/embed/087108cc-2e05-43ae-ab7b-a6097b603f0c/d2NDpHCZcX.lottie"
                          title={feature.title}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      ) : feature.title.includes("People-First Impact") ? (
                        <iframe
                          src="https://lottie.host/embed/15c9e726-c4e6-4c91-b85e-8689fe0cb5f9/KSIIvmyugy.lottie"
                          title={feature.title}
                          className="w-full h-full"
                          allowFullScreen
                        />
                      ) : (
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                        />
                      )}
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
