"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Why Automation is the Future of Business Efficiency",
      excerpt:
        "Discover how automation is revolutionizing business operations and why companies that embrace it are seeing unprecedented growth and efficiency gains.",
      category: "Automation Benefits",
      readTime: "5 min read",
      slug: "why-automation-is-future-of-business",
      date: "2024-01-15",
      imageColor: "from-brand-orange/20 to-brand-orange/10",
      iconColor: "text-brand-orange",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      id: 2,
      title: "How Automation Saves Your Business Money and Time",
      excerpt:
        "Learn the real numbers behind automation ROI and discover how businesses are saving thousands of dollars while reclaiming valuable time.",
      category: "Cost Savings",
      readTime: "4 min read",
      slug: "how-automation-saves-money-time",
      date: "2024-01-12",
      imageColor: "from-green-500/20 to-green-600/10",
      iconColor: "text-green-600",
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1",
    },
    {
      id: 3,
      title: "The Top 5 Benefits of AI Automation for Modern Businesses",
      excerpt:
        "Explore the key advantages of AI-powered automation and how it's helping businesses scale, improve accuracy, and enhance customer experiences.",
      category: "AI Integration",
      readTime: "6 min read",
      slug: "top-5-benefits-ai-automation",
      date: "2024-01-10",
      imageColor: "from-blue-500/20 to-blue-600/10",
      iconColor: "text-blue-600",
      icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    },
    {
      id: 4,
      title: "A Step-by-Step Guide to Implementing Business Automation",
      excerpt:
        "Get a practical roadmap for implementing automation in your business, from identifying opportunities to measuring success and scaling up.",
      category: "Implementation",
      readTime: "7 min read",
      slug: "step-by-step-guide-business-automation",
      date: "2024-01-08",
      imageColor: "from-purple-500/20 to-purple-600/10",
      iconColor: "text-purple-600",
      icon: "M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
    },
    {
      id: 5,
      title: "Real Success Stories: How Companies Transformed with Automation",
      excerpt:
        "Discover inspiring case studies of businesses that achieved remarkable results through strategic automation implementation.",
      category: "Case Studies",
      readTime: "8 min read",
      slug: "real-success-stories-automation",
      date: "2024-01-05",
      imageColor: "from-indigo-500/20 to-indigo-600/10",
      iconColor: "text-indigo-600",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950 dark:to-gray-900">
        <div className="container-width">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              AI Automation Insights
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
      <section className="py-16 bg-white dark:bg-gray-900 relative z-20">
        <div className="container-width">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden relative z-30"
              >
                <div
                  className={`aspect-video bg-gradient-to-br ${post.imageColor} flex items-center justify-center relative z-10`}
                >
                  <svg
                    className={`w-16 h-16 ${post.iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d={post.icon}
                    />
                  </svg>
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

      <Footer />
    </main>
  );
};

export default BlogPage;
