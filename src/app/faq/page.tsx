"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Users,
  Settings,
  Shield,
  Brain,
  Building,
  Globe,
  Clock,
  DollarSign,
} from "lucide-react";

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const faqs = [
    {
      id: "1",
      question: "What does NomanuAI do?",
      answer:
        "NomanuAI helps businesses automate their work using AI. We create smart systems that handle repetitive tasks, connect different software tools, and make your business run more efficiently. Our goal is to save you time and money while improving accuracy.",
      icon: Zap,
    },
    {
      id: "2",
      question: "Do you provide full-service implementation or just tools?",
      answer:
        "We provide complete implementation services. This means we design, build, set up, and train your team on the automation systems. We don't just give you tools - we make sure everything works perfectly for your business needs.",
      icon: Settings,
    },
    {
      id: "3",
      question: "How quickly can we see results?",
      answer:
        "Most clients start seeing benefits within 2-4 weeks. Simple automations can show results in days, while complex systems take 6-8 weeks to fully implement. We always start with quick wins to demonstrate value early.",
      icon: Clock,
    },
    {
      id: "4",
      question: "How do you ensure reliability and security?",
      answer:
        "We use industry-standard security practices and reliable platforms. All data is encrypted, we follow strict access controls, and we regularly test our systems. We also provide 24/7 monitoring and backup solutions.",
      icon: Shield,
    },
    {
      id: "5",
      question: "Can you build AI into our automations?",
      answer:
        "Yes, we specialize in AI-powered automation. We can add machine learning, natural language processing, and predictive analytics to make your automations smarter. This helps with decision-making and improves accuracy over time.",
      icon: Brain,
    },
    {
      id: "6",
      question: "Who do you work with?",
      answer:
        "We work with businesses of all sizes, from small startups to large companies. Our clients include e-commerce stores, healthcare providers, financial services, real estate agencies, and manufacturing companies. We adapt our solutions to fit your specific industry needs.",
      icon: Users,
    },
    {
      id: "7",
      question: "Which platforms do you integrate with?",
      answer:
        "We work with all major platforms including Zapier, Make, Power Automate, UiPath, and custom solutions. We can connect your existing tools like CRM systems, email platforms, accounting software, and more. We're platform-agnostic and choose the best tools for your needs.",
      icon: Globe,
    },
    {
      id: "8",
      question: "Do we need developers in-house to use your services?",
      answer:
        "No, you don't need developers on your team. We handle all the technical work and provide training for your staff. Our systems are designed to be user-friendly, and we offer ongoing support to help your team succeed.",
      icon: Building,
    },
    {
      id: "9",
      question: "What is DevMate and ClientMate?",
      answer:
        "DevMate and ClientMate are our specialized automation solutions. DevMate helps development teams automate their workflows and project management. ClientMate focuses on customer service and client relationship automation. Both are designed to improve efficiency and customer satisfaction.",
      icon: Users,
    },
    {
      id: "10",
      question: "How do we start?",
      answer:
        "Getting started is easy. First, we schedule a free consultation to understand your needs. Then we create a custom plan and start with a small pilot project. Once you see the results, we scale up to automate more processes. We guide you through every step.",
      icon: DollarSign,
    },
  ];

  const handleClick = (id: string) => {
    setOpenItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      {/* Hero Section - Home Background Style */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Enhanced AI Background - Home Style */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="circuit-faq-hero"
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
              <rect width="100%" height="100%" fill="url(#circuit-faq-hero)" />
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
                className="absolute w-2 h-2 bg-brand-orange rounded-full animate-float opacity-60"
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
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-orange/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-orange/15 rounded-full filter blur-3xl animate-pulse animation-delay-300" />
        </div>

        <div className="container-width relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse mr-3" />
              <span className="text-sm font-medium text-brand-orange">
                Frequently Asked Questions
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Everything You Need to Know About{" "}
              <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                AI Automation
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Your complete guide to understanding how we can transform your
              business with smart automation
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content - Services Background Style */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative z-20 overflow-hidden">
        {/* Glowing Orange Gradient Background Effects - Services Style */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Glowing Orange Gradient Orbs - Brighter Edges */}
          <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-brand-orange/70 via-orange-400/40 to-brand-orange-light/60 rounded-full blur-3xl animate-pulse opacity-90" />
          <div
            className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-orange-light/60 via-brand-orange/70 to-orange-500/50 rounded-full blur-3xl animate-pulse opacity-80"
            style={{ animationDelay: "2s" }}
          />

          {/* Central Glowing Effect */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-orange/10 via-orange-400/15 to-brand-orange/10 rounded-full blur-3xl animate-pulse opacity-40"
            style={{ animationDelay: "4s" }}
          />

          {/* Additional Floating Orange Particles - Brighter */}
          <div className="absolute inset-0 opacity-80">
            {[
              { left: "15%", top: "20%", delay: "0s", size: "w-4 h-4" },
              { left: "85%", top: "30%", delay: "1s", size: "w-3 h-3" },
              { left: "25%", top: "70%", delay: "2s", size: "w-5 h-5" },
              { left: "75%", top: "60%", delay: "3s", size: "w-3 h-3" },
              { left: "45%", top: "15%", delay: "4s", size: "w-4 h-4" },
              { left: "65%", top: "80%", delay: "5s", size: "w-3 h-3" },
            ].map((particle, i) => (
              <div
                key={i}
                className={`absolute ${particle.size} bg-gradient-to-r from-brand-orange to-orange-400 rounded-full animate-pulse`}
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: "3s",
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container-width relative z-10">
          {/* FAQ Grid */}
          <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto relative z-30">
            {/* Left Column */}
            <div className="flex-1 space-y-6 relative z-40">
              {faqs
                .filter((_, index) => index % 2 === 0)
                .map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 relative z-50"
                  >
                    <div
                      onClick={() => handleClick(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 rounded-xl cursor-pointer relative z-60"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleClick(faq.id);
                        }
                      }}
                      style={{ position: "relative", zIndex: 100 }}
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="flex-shrink-0 mt-1">
                          <faq.icon className="w-5 h-5 text-brand-orange" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        )}
                      </div>
                    </div>

                    {openItems.includes(faq.id) && (
                      <div className="px-6 pb-4">
                        <div className="pl-8 border-l-2 border-brand-orange/30">
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>

            {/* Right Column */}
            <div className="flex-1 space-y-6 relative z-40">
              {faqs
                .filter((_, index) => index % 2 === 1)
                .map((faq) => (
                  <div
                    key={faq.id}
                    className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 relative z-50"
                  >
                    <div
                      onClick={() => handleClick(faq.id)}
                      className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 rounded-xl cursor-pointer relative z-60"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleClick(faq.id);
                        }
                      }}
                      style={{ position: "relative", zIndex: 100 }}
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="flex-shrink-0 mt-1">
                          <faq.icon className="w-5 h-5 text-brand-orange" />
                        </div>
                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                        )}
                      </div>
                    </div>

                    {openItems.includes(faq.id) && (
                      <div className="px-6 pb-4">
                        <div className="pl-8 border-l-2 border-brand-orange/30">
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Home Background Style */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Enhanced AI Background - Home Style */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="circuit-faq-cta"
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
              <rect width="100%" height="100%" fill="url(#circuit-faq-cta)" />
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
                className="absolute w-2 h-2 bg-brand-orange rounded-full animate-float opacity-60"
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
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-orange/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-orange/15 rounded-full filter blur-3xl animate-pulse animation-delay-300" />
        </div>

        <div className="container-width relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Still have questions?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how automation can transform your business processes
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              Schedule a Free Consultation
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQPage;
