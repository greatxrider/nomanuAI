"use client";

import { useState } from "react";
import Link from "next/link";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  HelpIcon,
  ZapIcon,
  BrainIcon,
  UsersIcon,
  ShieldIcon,
  ClockIcon,
  DollarIcon,
  TargetIcon,
  CalendarIcon,
} from "@/components/icons/PremiumIcons";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const faqs = [
    {
      id: 1,
      question: "Do you build software or just give advice?",
      answer:
        "We do both! We build the actual automation tools that work for your business, and we also give you advice on how to use them best. We create the software, connect your existing tools, and help you keep improving as your business grows.",
      icon: ZapIcon,
    },
    {
      id: 2,
      question: "Will this work for my type of business?",
      answer:
        "Yes! We've helped all kinds of businesses - real estate, healthcare, law firms, factories, and service companies. The key is finding the boring, repetitive tasks that take up 20+ hours each week. We'll look at your specific work and show you exactly where automation will help the most.",
      icon: TargetIcon,
    },
    {
      id: 3,
      question: "What can automation actually fix for my business?",
      answer:
        "Automation can fix the boring stuff that wastes your time: typing the same information over and over, sending follow-up emails, checking leads, and keeping track of customers. We focus on the biggest time-wasters like managing sales, bringing in new clients, and doing the same admin tasks day after day.",
      icon: BrainIcon,
    },
    {
      id: 4,
      question: "How much time and money will this save me?",
      answer:
        "Most of our clients save 40-70% of their time on the tasks we automate, and they get their money back within 3-6 months. For example, automated lead checking saves 15-20 hours per week, and automated client setup goes from taking days to just hours. We'll show you exactly how much you'll save before we start.",
      icon: DollarIcon,
    },
    {
      id: 5,
      question: "Can you handle complicated work processes?",
      answer:
        "Yes! We're experts at building complex workflows that connect multiple systems and make smart decisions. Whether it's scoring leads across different criteria, sending messages through multiple channels, or following strict rules, we build strong solutions that handle all the details and grow with your business.",
      icon: UsersIcon,
    },
    {
      id: 6,
      question: "Are you trained and certified in the tools you use?",
      answer:
        "Yes, our team has official training and certifications in all the major platforms we use like Zapier, Make, Microsoft Power Automate, and AI tools. We're also official partners with big CRM platforms like HubSpot, Salesforce, and HighLevel. This means we know the best ways to use these tools.",
      icon: ShieldIcon,
    },
    {
      id: 7,
      question: "Do you have examples of work you've done?",
      answer:
        "Yes! We have lots of real examples from different industries. We helped a real estate team automate their lead checking (saving 25 hours per week), a healthcare office streamline patient intake (making it 80% faster), and a consulting firm automate their proposal creation (increasing their success rate by 35%). We'll show you relevant examples when we talk.",
      icon: HelpIcon,
    },
    {
      id: 8,
      question: "What makes you different from other automation companies?",
      answer:
        "We understand your business goals first, then build automation that helps you reach them. Unlike pure tech companies, we focus on making sure your team actually uses and benefits from the automation we build. We don't just create technical solutions - we make sure they work for your business.",
      icon: BrainIcon,
    },
    {
      id: 9,
      question: "Is this a one-time job or ongoing work?",
      answer:
        "We offer both options. Many clients start with one specific automation project, then expand to ongoing improvements as they see results. We provide maintenance, updates, and continuous improvements. Some clients prefer our ongoing partnership where we keep finding new ways to automate as their business changes.",
      icon: ClockIcon,
    },
    {
      id: 10,
      question: "Do I need tech experts on my team?",
      answer:
        "No! We build easy-to-use interfaces and provide full training. Our automations are designed for regular business people to monitor and adjust. We also provide ongoing support and maintenance, so you can focus on running your business while we make sure your automation keeps working smoothly.",
      icon: UsersIcon,
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      ref={ref}
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/assets/beeInspiration/5303586.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-15 dark:opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/85 via-white/75 to-gray-100/85 dark:from-gray-950/75 dark:via-gray-900/65 dark:to-gray-950/75" />

      <div className="container-width relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out-expo ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading-lg text-ink dark:text-white mb-4 text-balance">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-body-lg max-w-2xl mx-auto">
            Your complete guide to understanding how we can transform your
            business with smart automation
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto">
          {/* Left Column */}
          <div className="flex-1 space-y-4">
            {faqs
              .filter((_, index) => index % 2 === 0)
              .map((faq, index) => {
                const IconComponent = faq.icon;
                return (
                  <div
                    key={faq.id}
                    className={`card group transition-all duration-700 ease-out-expo ${
                      isIntersecting
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-5 py-4 text-left flex items-start justify-between gap-4
                        hover:bg-ink/5 dark:hover:bg-white/5 transition-colors duration-200 hex-cut-sm"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="flex-shrink-0 mt-0.5 w-8 h-8 clip-hex bg-brand/10
                          flex items-center justify-center">
                          <IconComponent size={16} className="text-brand" />
                        </div>
                        <h3 className="font-semibold text-ink dark:text-white text-[15px] leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 mt-0.5">
                        {openItems.includes(faq.id) ? (
                          <ChevronUpIcon size={18} className="text-ink-tertiary dark:text-gray-400" />
                        ) : (
                          <ChevronDownIcon size={18} className="text-ink-tertiary dark:text-gray-400" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out-expo ${
                        openItems.includes(faq.id)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-5 pb-5">
                        <div className="pl-11 border-l-2 border-brand/20">
                          <p className="text-ink-secondary dark:text-gray-400 text-[14px] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-4">
            {faqs
              .filter((_, index) => index % 2 === 1)
              .map((faq, index) => {
                const IconComponent = faq.icon;
                return (
                  <div
                    key={faq.id}
                    className={`card group transition-all duration-700 ease-out-expo ${
                      isIntersecting
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                    style={{ transitionDelay: `${(index + 1) * 100}ms` }}
                  >
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      className="w-full px-5 py-4 text-left flex items-start justify-between gap-4
                        hover:bg-ink/5 dark:hover:bg-white/5 transition-colors duration-200 hex-cut-sm"
                    >
                      <div className="flex items-start gap-3 flex-1">
                        <div className="flex-shrink-0 mt-0.5 w-8 h-8 clip-hex bg-brand/10
                          flex items-center justify-center">
                          <IconComponent size={16} className="text-brand" />
                        </div>
                        <h3 className="font-semibold text-ink dark:text-white text-[15px] leading-relaxed">
                          {faq.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0 mt-0.5">
                        {openItems.includes(faq.id) ? (
                          <ChevronUpIcon size={18} className="text-ink-tertiary dark:text-gray-400" />
                        ) : (
                          <ChevronDownIcon size={18} className="text-ink-tertiary dark:text-gray-400" />
                        )}
                      </div>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out-expo ${
                        openItems.includes(faq.id)
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-5 pb-5">
                        <div className="pl-11 border-l-2 border-brand/20">
                          <p className="text-ink-secondary dark:text-gray-400 text-[14px] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ease-out-expo delay-500 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="card-honeycomb hex-border-pulse p-8 md:p-10 max-w-2xl mx-auto text-center">
            <h3 className="text-xl font-semibold text-ink dark:text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-body text-ink-secondary dark:text-gray-400 mb-6">
              Let's discuss how automation can transform your business processes
            </p>
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              <CalendarIcon size={18} />
              <span>Schedule a Free Consultation</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
