"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Brain,
  Users,
  Shield,
  Clock,
  Target,
  Bot,
} from "lucide-react";

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      id: 1,
      question: "What does NomanuAI do?",
      answer:
        "We build custom AI automation systems for businesses. We take your repetitive tasks and turn them into automated workflows. This includes managing customer data, sending follow-up emails, processing orders, and handling routine admin work. Our goal is to make your business run more efficiently so you can focus on growth and customer service.",
      icon: Bot,
    },
    {
      id: 2,
      question: "Who do you work with?",
      answer:
        "We work with growing businesses that need to scale but are stuck doing manual work. This includes real estate teams, healthcare offices, law firms, consulting companies, and service-based businesses. If you have repetitive tasks taking up 20+ hours per week that could be automated, we can help. We serve businesses of all sizes, from small teams to larger companies looking to streamline operations.",
      icon: Target,
    },
    {
      id: 3,
      question: "Do you provide full-service implementation or just tools?",
      answer:
        "We provide full-service implementation. We don't just give you tools and leave. We build the complete automation system, connect all your existing software, train your team, and provide ongoing support. We handle everything from start to finish, including monitoring systems and making improvements as your business grows. You get a complete solution that works.",
      icon: Shield,
    },
    {
      id: 4,
      question: "Which platforms do you integrate with?",
      answer:
        "We work with whatever platforms you already use. This includes popular tools like Gmail, Slack, Notion, HubSpot, Salesforce, HighLevel, and many others. We also work with specialized industry software. We adapt to your existing tools rather than forcing you to change. We connect everything together so your data flows smoothly between all systems.",
      icon: Zap,
    },
    {
      id: 5,
      question: "How quickly can we see results?",
      answer:
        "Most clients see results within 2-4 weeks. Simple automations like email follow-ups and lead management can be ready in a week. More complex systems take longer, but we work quickly to get you results. We prioritize automations that will save you the most time first. Most businesses save 20-40 hours per month from the first month.",
      icon: Clock,
    },
    {
      id: 6,
      question: "Do we need developers in-house to use your services?",
      answer:
        "No, you don't need any technical staff. We build everything to be easy for regular business people to use. We provide full training and create simple interfaces that anyone on your team can understand. We handle all technical maintenance and updates. Our goal is to make automation accessible to businesses without technical expertise.",
      icon: Users,
    },
    {
      id: 7,
      question: "How do you ensure reliability and security?",
      answer:
        "We use proven, secure platforms and follow best practices for data protection. All systems include backup systems and monitoring to catch issues early. We're certified in the platforms we use and stay updated on security standards. Your data stays within your existing secure systems - we just connect them together. We provide 24/7 monitoring and quick response times.",
      icon: Shield,
    },
    {
      id: 8,
      question: "What is DevMate and ClientMate?",
      answer:
        "DevMate and ClientMate are your dedicated team members. DevMate is your automation developer who builds and maintains your systems. ClientMate is your success manager who ensures everything runs smoothly and helps you get the most from your automation. You have direct contact with both. This dual approach ensures both technical excellence and business success.",
      icon: Users,
    },
    {
      id: 9,
      question: "Can you build AI into our automations?",
      answer:
        "Yes, we integrate AI into many automation systems. This includes AI-powered lead scoring, smart content generation, automated customer service responses, and intelligent data analysis. The AI learns from your business data to make better decisions and improve over time. We use AI to make your automations smarter, not just faster. This helps you provide better service and make better business decisions.",
      icon: Brain,
    },
    {
      id: 10,
      question: "How do we start?",
      answer:
        "The process is simple. First, book a free discovery call where we learn about your business goals and current challenges. This call takes about 30 minutes with no pressure to buy anything. We'll identify where automation can help you most and show you exactly what we can build. If it makes sense for your business, we'll create a custom plan and get started right away. The first step is just a conversation.",
      icon: Target,
    },
  ];

  const handleClick = (id: number) => {
    console.log("FAQ clicked:", id);
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-orange/8 rounded-full filter blur-3xl animate-pulse animation-delay-300" />
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

      {/* FAQ Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 relative z-20">
        <div className="container-width">
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

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Let's discuss how automation can transform your business
                processes
              </p>
              <Link
                href="/#contact"
                className="inline-flex items-center px-6 py-3 bg-brand-orange text-white font-medium rounded-lg hover:bg-brand-orange/90 transition-colors duration-200"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Latest Insights on AI Automation
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover how automation is transforming businesses and learn
              practical strategies to implement AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Blog Post 1 */}
            <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-brand-orange"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full">
                    Automation Benefits
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    • 5 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                  Why Automation is the Future of Business Efficiency
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Discover how automation is revolutionizing business operations
                  and why companies that embrace it are seeing unprecedented
                  growth and efficiency gains.
                </p>
                <Link
                  href="/blog/why-automation-is-future-of-business"
                  className="inline-flex items-center text-brand-orange hover:text-brand-orange-dark font-medium text-sm transition-colors duration-200"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-1"
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
            </article>

            {/* Blog Post 2 */}
            <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full">
                    Cost Savings
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    • 4 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                  How Automation Saves Your Business Money and Time
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Learn the real numbers behind automation ROI and discover how
                  businesses are saving thousands of dollars while reclaiming
                  valuable time.
                </p>
                <Link
                  href="/blog/how-automation-saves-money-time"
                  className="inline-flex items-center text-brand-orange hover:text-brand-orange-dark font-medium text-sm transition-colors duration-200"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-1"
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
            </article>

            {/* Blog Post 3 */}
            <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-blue-600/10 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full">
                    AI Integration
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    • 6 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                  The Top 5 Benefits of AI Automation for Modern Businesses
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Explore the key advantages of AI-powered automation and how
                  it's helping businesses scale, improve accuracy, and enhance
                  customer experiences.
                </p>
                <Link
                  href="/blog/top-5-benefits-ai-automation"
                  className="inline-flex items-center text-brand-orange hover:text-brand-orange-dark font-medium text-sm transition-colors duration-200"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-1"
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
            </article>

            {/* Blog Post 4 */}
            <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-purple-600/10 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full">
                    Implementation
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    • 7 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                  A Step-by-Step Guide to Implementing Business Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Get a practical roadmap for implementing automation in your
                  business, from identifying opportunities to measuring success
                  and scaling up.
                </p>
                <Link
                  href="/blog/step-by-step-guide-business-automation"
                  className="inline-flex items-center text-brand-orange hover:text-brand-orange-dark font-medium text-sm transition-colors duration-200"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-1"
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
            </article>

            {/* Blog Post 5 */}
            <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-indigo-600/10 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-indigo-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full">
                    Case Studies
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    • 8 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                  Real Success Stories: How Companies Transformed with
                  Automation
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Discover inspiring case studies of businesses that achieved
                  remarkable results through strategic automation
                  implementation.
                </p>
                <Link
                  href="/blog/real-success-stories-automation"
                  className="inline-flex items-center text-brand-orange hover:text-brand-orange-dark font-medium text-sm transition-colors duration-200"
                >
                  Read More
                  <svg
                    className="w-4 h-4 ml-1"
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
            </article>
          </div>

          {/* View All Blogs CTA */}
          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-brand-orange text-white font-medium rounded-lg hover:bg-brand-orange/90 transition-colors duration-200"
            >
              View All Blog Posts
              <svg
                className="w-4 h-4 ml-2"
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
