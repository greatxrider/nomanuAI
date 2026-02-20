"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ZapIcon,
  UsersIcon,
  SettingsIcon,
  ShieldIcon,
  BrainIcon,
  NetworkIcon, // Replaced Globe with NetworkIcon or similar
  ClockIcon,
  DollarIcon,
  ArrowRightIcon,
  HexagonIcon,
  HelpIcon,
  BriefcaseIcon, // Replaced Building with BriefcaseIcon
} from "@/components/icons/PremiumIcons";

// Aliases
const ChevronDown = ChevronDownIcon;
const ChevronUp = ChevronUpIcon;
const Zap = ZapIcon;
const Users = UsersIcon;
const Settings = SettingsIcon;
const Shield = ShieldIcon;
const Brain = BrainIcon;
const Building = BriefcaseIcon; // Fallback
const Globe = NetworkIcon; // Fallback
const Clock = ClockIcon;
const DollarSign = DollarIcon;

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
    <main className="min-h-screen bg-paper dark:bg-gray-950 transition-colors duration-300">
      <Header />

      {/* Hero Section - AI Inspired */}
      {/* Pattern A */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-50 dark:opacity-30" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/40 to-gray-100/50 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />
        </div>

        <div className="container-width relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="badge-glass mb-8">
              <HelpIcon size={16} className="mr-2 text-brand" />
              <span className="font-display tracking-wide text-xs uppercase font-bold">
                Frequently Asked Questions
              </span>
            </div>

            <h1 className="heading-display mb-6">
              Everything You Need to Know About{" "}
              <span className="honey-shimmer">
                AI Automation
              </span>
            </h1>

            <p className="text-body-lg max-w-3xl mx-auto">
              Your complete guide to understanding how we can transform your
              business with smart automation
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content - Services Background Style */}
      <section className="py-16 bg-paper dark:bg-gray-950 relative z-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="faq-content-honeycomb" />
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
                    className="card-honeycomb group"
                  >
                    <div
                      onClick={() => handleClick(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer relative z-10"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleClick(faq.id);
                        }
                      }}
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="icon-hex w-10 h-10 flex-shrink-0 mt-0.5">
                          <faq.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-ink dark:text-white leading-relaxed pt-1.5 group-hover:text-brand transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 pt-2">
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-ink-tertiary dark:text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-ink-tertiary dark:text-gray-400" />
                        )}
                      </div>
                    </div>

                    {openItems.includes(faq.id) && (
                      <div className="px-6 pb-6 pl-[4.5rem]">
                        <div className="text-body text-ink-secondary dark:text-gray-300 text-sm leading-relaxed border-l-2 border-brand/20 pl-4">
                          {faq.answer}
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
                    className="card-honeycomb group"
                  >
                    <div
                      onClick={() => handleClick(faq.id)}
                      className="w-full px-6 py-5 text-left flex items-start justify-between gap-4 cursor-pointer relative z-10"
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleClick(faq.id);
                        }
                      }}
                    >
                      <div className="flex items-start gap-4 flex-1">
                        <div className="icon-hex w-10 h-10 flex-shrink-0 mt-0.5">
                          <faq.icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-ink dark:text-white leading-relaxed pt-1.5 group-hover:text-brand transition-colors duration-300">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 pt-2">
                        {openItems.includes(faq.id) ? (
                          <ChevronUp className="w-5 h-5 text-ink-tertiary dark:text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-ink-tertiary dark:text-gray-400" />
                        )}
                      </div>
                    </div>

                    {openItems.includes(faq.id) && (
                      <div className="px-6 pb-6 pl-[4.5rem]">
                        <div className="text-body text-ink-secondary dark:text-gray-300 text-sm leading-relaxed border-l-2 border-brand/20 pl-4">
                          {faq.answer}
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
      {/* Pattern B */}
      <section className="relative py-20 overflow-hidden bg-paper dark:bg-gray-950">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6">
              Still have questions?
            </h2>
            <p className="text-body-lg mb-8">
              Let's discuss how automation can transform your business processes
            </p>
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRightIcon size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQPage;
