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
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container-width">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
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
