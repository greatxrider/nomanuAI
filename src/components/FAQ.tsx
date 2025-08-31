"use client";

import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Zap,
  Brain,
  Users,
  Shield,
  Clock,
  DollarSign,
  Target,
} from "lucide-react";

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      question: "Do you build software or just give advice?",
      answer:
        "We do both! We build the actual automation tools that work for your business, and we also give you advice on how to use them best. We create the software, connect your existing tools, and help you keep improving as your business grows.",
      icon: Zap,
    },
    {
      id: 2,
      question: "Will this work for my type of business?",
      answer:
        "Yes! We've helped all kinds of businesses - real estate, healthcare, law firms, factories, and service companies. The key is finding the boring, repetitive tasks that take up 20+ hours each week. We'll look at your specific work and show you exactly where automation will help the most.",
      icon: Target,
    },
    {
      id: 3,
      question: "What can automation actually fix for my business?",
      answer:
        "Automation can fix the boring stuff that wastes your time: typing the same information over and over, sending follow-up emails, checking leads, and keeping track of customers. We focus on the biggest time-wasters like managing sales, bringing in new clients, and doing the same admin tasks day after day.",
      icon: Brain,
    },
    {
      id: 4,
      question: "How much time and money will this save me?",
      answer:
        "Most of our clients save 40-70% of their time on the tasks we automate, and they get their money back within 3-6 months. For example, automated lead checking saves 15-20 hours per week, and automated client setup goes from taking days to just hours. We'll show you exactly how much you'll save before we start.",
      icon: DollarSign,
    },
    {
      id: 5,
      question: "Can you handle complicated work processes?",
      answer:
        "Yes! We're experts at building complex workflows that connect multiple systems and make smart decisions. Whether it's scoring leads across different criteria, sending messages through multiple channels, or following strict rules, we build strong solutions that handle all the details and grow with your business.",
      icon: Users,
    },
    {
      id: 6,
      question: "Are you trained and certified in the tools you use?",
      answer:
        "Yes, our team has official training and certifications in all the major platforms we use like Zapier, Make, Microsoft Power Automate, and AI tools. We're also official partners with big CRM platforms like HubSpot, Salesforce, and HighLevel. This means we know the best ways to use these tools.",
      icon: Shield,
    },
    {
      id: 7,
      question: "Do you have examples of work you've done?",
      answer:
        "Yes! We have lots of real examples from different industries. We helped a real estate team automate their lead checking (saving 25 hours per week), a healthcare office streamline patient intake (making it 80% faster), and a consulting firm automate their proposal creation (increasing their success rate by 35%). We'll show you relevant examples when we talk.",
      icon: HelpCircle,
    },
    {
      id: 8,
      question: "What makes you different from other automation companies?",
      answer:
        "We understand your business goals first, then build automation that helps you reach them. Unlike pure tech companies, we focus on making sure your team actually uses and benefits from the automation we build. We don't just create technical solutions - we make sure they work for your business.",
      icon: Brain,
    },
    {
      id: 9,
      question: "Is this a one-time job or ongoing work?",
      answer:
        "We offer both options. Many clients start with one specific automation project, then expand to ongoing improvements as they see results. We provide maintenance, updates, and continuous improvements. Some clients prefer our ongoing partnership where we keep finding new ways to automate as their business changes.",
      icon: Clock,
    },
    {
      id: 10,
      question: "Do I need tech experts on my team?",
      answer:
        "No! We build easy-to-use interfaces and provide full training. Our automations are designed for regular business people to monitor and adjust. We also provide ongoing support and maintenance, so you can focus on running your business while we make sure your automation keeps working smoothly.",
      icon: Users,
    },
  ];

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="container-width">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse mr-3" />
            <span className="text-sm font-medium text-brand-orange">
              Common Questions
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Everything You Need to Know About{" "}
            <span className="text-brand-orange">NomanuAI</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Your complete guide to understanding how we can transform your
            business with smart automation
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {faqs
              .filter((_, index) => index % 2 === 0)
              .map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 rounded-xl"
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
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(faq.id)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <div className="pl-8 border-l-2 border-brand-orange/30">
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6">
            {faqs
              .filter((_, index) => index % 2 === 1)
              .map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-start justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-200 rounded-xl"
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
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openItems.includes(faq.id)
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-4">
                      <div className="pl-8 border-l-2 border-brand-orange/30">
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Let's discuss how automation can transform your business processes
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-brand-orange text-white font-medium rounded-lg hover:bg-brand-orange/90 transition-colors duration-200"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
