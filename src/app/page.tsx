import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ClientMarquee from "@/components/ClientMarquee";
import Services from "@/components/Services";
import GetStarted from "@/components/GetStarted";
import WhyAutomate from "@/components/WhyAutomate";
import Projects from "@/components/Projects";

import MissionVision from "@/components/MissionVision";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <ClientMarquee />
      <Testimonials />
      <MissionVision />
      <WhyChooseUs />
      <Services />
      <GetStarted />
      <WhyAutomate />
      <Projects />
      <FAQ />

      {/* Stay Updated Section */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        {/* Enhanced AI Background - Home Style */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="circuit-stay-updated"
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
              <rect
                width="100%"
                height="100%"
                fill="url(#circuit-stay-updated)"
              />
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
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse mr-3" />
              <span className="text-sm font-medium text-brand-orange">
                Latest Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Stay Updated with{" "}
              <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                News and Automation Insights
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get practical guides, case studies, and expert tips on automation,
              AI-driven workflows, and integration best practices to help you
              scale operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8 max-w-7xl mx-auto">
            {/* Blog Post 1 */}
            <article className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/blogImages/future-of-business.jpg"
                  alt="Why Automation is the Future of Business"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
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
                  Why Automation is the Future of Business
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Learn how automation can transform your business operations
                  and give you a competitive edge in today's market.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Published by NomanuAI
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Dec 19, 2024
                  </span>
                </div>
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
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/blogImages/social-payroll-automation.jpg"
                  alt="How Automation Saves Money and Time"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
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
                  How Automation Saves Money and Time
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Discover the real cost savings and time benefits that
                  automation brings to businesses of all sizes.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Published by NomanuAI
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Dec 19, 2024
                  </span>
                </div>
                <Link
                  href="/blog/how-automation-saves-money-and-time"
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
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/blogImages/automation-best-practices.jpeg"
                  alt="Automation Best Practices for Success"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full">
                    Best Practices
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    • 6 min read
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                  Automation Best Practices for Success
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  Learn the key strategies and best practices to ensure your
                  automation projects succeed and deliver results.
                </p>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Published by NomanuAI
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Dec 19, 2024
                  </span>
                </div>
                <Link
                  href="/blog/automation-best-practices-for-success"
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

          <div className="text-center">
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange/90 transition-colors duration-200"
            >
              View All Blog Posts
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

      <Contact />
      <Footer />
    </main>
  );
}
