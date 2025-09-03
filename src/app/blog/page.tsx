"use client";

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Automation is the Future of Business",
      excerpt:
        "Discover how automation is revolutionizing business operations and why companies that embrace it are seeing unprecedented growth and efficiency gains.",
      category: "Automation Benefits",
      readTime: "5 min read",
      slug: "why-automation-is-future-of-business",
      date: "2025-09-01",
      image: "/blogImages/future-of-business.jpg",
    },
    {
      id: 2,
      title: "How Automation Saves Money and Time",
      excerpt:
        "Learn the real numbers behind automation ROI and discover how businesses are saving thousands of dollars while reclaiming valuable time.",
      category: "Cost Savings",
      readTime: "4 min read",
      slug: "how-automation-saves-money-and-time",
      date: "2025-09-01",
      image: "/blogImages/social-payroll-automation.jpg",
    },
    {
      id: 3,
      title: "Automation Best Practices for Success",
      excerpt:
        "Learn the key strategies and best practices to ensure your automation projects succeed and deliver measurable results.",
      category: "Best Practices",
      readTime: "6 min read",
      slug: "automation-best-practices-for-success",
      date: "2025-09-01",
      image: "/blogImages/automation-best-practices.jpeg",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Enhanced AI Background - match Home */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="circuit-blog"
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
              <rect width="100%" height="100%" fill="url(#circuit-blog)" />
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
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
              <span className="text-brand-orange font-semibold">BLOG</span>
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse ml-3" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                AI Automation Insights
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover the latest insights, strategies, and success stories
              about AI automation and how it's transforming businesses
              worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="relative py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden z-20">
        {/* Background effects to match Services section */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Glowing Orange Gradient Orbs */}
          <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-brand-orange/50 via-orange-400/25 to-brand-orange-light/40 rounded-full blur-3xl animate-pulse opacity-75" />
          <div
            className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-orange-light/40 via-brand-orange/50 to-orange-500/35 rounded-full blur-3xl animate-pulse opacity-65"
            style={{ animationDelay: "2s" }}
          />

          {/* Central Glowing Effect */}
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-orange/10 via-orange-400/15 to-brand-orange/10 rounded-full blur-3xl animate-pulse opacity-40"
            style={{ animationDelay: "4s" }}
          />

          {/* Floating Particles */}
          <div className="absolute inset-0 opacity-40">
            {[
              { left: "15%", top: "20%", delay: "0s", size: "w-4 h-4" },
              { left: "85%", top: "30%", delay: "1s", size: "w-3 h-3" },
              { left: "25%", top: "70%", delay: "2s", size: "w-5 h-5" },
              { left: "75%", top: "60%", delay: "3s", size: "w-3 h-3" },
              { left: "45%", top: "15%", delay: "4s", size: "w-4 h-4" },
              { left: "65%", top: "80%", delay: "5s", size: "w-3 h-3" },
            ].map((p, i) => (
              <div
                key={i}
                className={`absolute ${p.size} bg-gradient-to-r from-brand-orange to-orange-400 rounded-full animate-pulse`}
                style={{
                  left: p.left,
                  top: p.top,
                  animationDelay: p.delay,
                  animationDuration: "3s",
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container-width relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group relative bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/10 overflow-hidden z-30"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                <div className="p-6 relative z-20">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium text-brand-orange bg-brand-orange/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      • {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between relative z-30">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-brand-orange hover:text-brand-orange-dark font-medium text-sm transition-colors duration-200 cursor-pointer relative z-40"
                      style={{ position: "relative", zIndex: 100 }}
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-orange">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Let's discuss how automation can transform your business processes
            </p>
            <Link
              href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-orange font-semibold rounded-lg hover:bg-gray-100 transition-colors"
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

export default BlogPage;
