"use client";

import Link from "next/link";
import Image from "next/image";

import Footer from "@/components/Footer";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

const BlogPostPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Enhanced AI Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="circuit"
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
              <rect width="100%" height="100%" fill="url(#circuit)" />
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
          <div className="max-w-4xl mx-auto">
            {/* Innovation Badge */}
            <div className="inline-flex items-center px-4 py-2 mb-8 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse mr-3" />
              <span className="text-sm font-medium text-brand-orange">
                Automation Benefits
              </span>
            </div>

            {/* Post Meta */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>September 01, 2025</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                Why Automation is the Future of Business
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl mb-10 text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Discover how automation is revolutionizing business operations and
              why companies that embrace it are seeing unprecedented growth and
              efficiency gains.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 bg-white dark:bg-gray-900">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
              <Image
                src="/blogImages/future-of-business.jpg"
                alt="Why Automation is the Future of Business"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width">
          <article className="max-w-4xl mx-auto prose prose-lg dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-600 dark:prose-p:text-gray-300">
            <p className="text-lg leading-relaxed mb-8">
              In today's rapidly evolving business landscape, automation has
              emerged as the cornerstone of operational efficiency and
              competitive advantage. Companies that embrace automation are not
              just streamlining their processes—they're fundamentally
              transforming how they operate, compete, and grow.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
              The Automation Revolution: What's Driving the Change
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The shift toward automation isn't just a trend—it's a fundamental
              change in how businesses operate. Several key factors are driving
              this transformation:
            </p>

            <ul className="space-y-3 mb-8 text-gray-600 dark:text-gray-300">
              <li className="leading-relaxed">
                <strong className="text-gray-900 dark:text-white">
                  Rising operational costs
                </strong>{" "}
                - Manual processes are becoming increasingly expensive to
                maintain
              </li>
              <li className="leading-relaxed">
                <strong className="text-gray-900 dark:text-white">
                  Competitive pressure
                </strong>{" "}
                - Companies that automate gain significant advantages over those
                that don't
              </li>
              <li className="leading-relaxed">
                <strong className="text-gray-900 dark:text-white">
                  Technology accessibility
                </strong>{" "}
                - AI and automation tools are now more accessible than ever
              </li>
              <li className="leading-relaxed">
                <strong className="text-gray-900 dark:text-white">
                  Customer expectations
                </strong>{" "}
                - Faster, more accurate service is now the standard
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
              Key Benefits of Business Automation
            </h2>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
              1. Increased Efficiency
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Automation eliminates the time-consuming, repetitive tasks that
              drain your team's productivity. By automating routine processes,
              your employees can focus on high-value activities that drive
              growth and innovation.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
              2. Cost Reduction
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              While there's an initial investment in automation, the long-term
              cost savings are substantial. Automated processes reduce errors,
              eliminate redundant work, and allow you to do more with fewer
              resources.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
              3. Improved Accuracy
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Human error is inevitable in manual processes. Automation ensures
              consistent, accurate results every time, reducing costly mistakes
              and improving overall quality.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
              4. Scalability
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Automated systems can handle increased workloads without
              proportional increases in staff or resources. This scalability is
              crucial for business growth.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 mt-8">
              5. Enhanced Customer Experience
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Automation enables faster response times, 24/7 availability, and
              personalized interactions, leading to improved customer
              satisfaction and loyalty.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
              Real-World Impact: Success Stories
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Companies across industries are seeing remarkable results from
              automation implementation:
            </p>

            <blockquote className="border-l-4 border-brand-orange pl-6 italic text-gray-700 dark:text-gray-300 mb-8 bg-gray-50 dark:bg-gray-800 py-4 rounded-r-lg">
              "After implementing automation, we reduced our order processing
              time by 80% and increased customer satisfaction scores by 35%. The
              ROI was immediate and continues to grow." - Sarah Chen, Operations
              Director
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
              Getting Started with Automation
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              The journey to automation doesn't have to be overwhelming. Here's
              a practical approach:
            </p>

            <ol className="space-y-3 mb-8 text-gray-600 dark:text-gray-300">
              <li className="leading-relaxed">
                <strong className="text-gray-900 dark:text-white">
                  Identify opportunities
                </strong>{" "}
                - Look for repetitive, time-consuming tasks
              </li>
              <li className="leading-relaxed">
                <strong className="text-gray-900 dark:text-white">
                  Start small
                </strong>{" "}
                - Begin with one process and expand gradually
              </li>
              <li className="leading-relaxed">
                <strong className="text-gray-900 dark:text-white">
                  Choose the right tools
                </strong>{" "}
                - Select automation solutions that integrate with your existing
                systems
              </li>
              <li className="leading-relaxed">
                <strong className="text-gray-900 dark:text-white">
                  Train your team
                </strong>{" "}
                - Ensure everyone understands and embraces the new processes
              </li>
              <li className="leading-relaxed">
                <strong className="text-gray-900 dark:text-white">
                  Measure and optimize
                </strong>{" "}
                - Track results and continuously improve
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
              The Future is Automated
            </h2>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              As we look to the future, automation will become even more
              integral to business success. Companies that fail to adapt risk
              falling behind their competitors. The question isn't whether to
              automate—it's how quickly you can implement it effectively.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              The businesses that will thrive in the coming years are those that
              view automation not as a cost-cutting measure, but as a strategic
              investment in their future. By embracing automation today, you're
              positioning your company for long-term success and growth.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 mt-12">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Ready to Transform Your Business?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Discover how NomanuAI can help you implement automation
                solutions that drive real results for your business.
              </p>
              <Link
                href="https://calendar.app.google/hTHhAJ1rCRTQMgheA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-brand-orange text-white font-medium rounded-lg hover:bg-brand-orange/90 transition-colors duration-200"
              >
                Schedule a Free Consultation
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src="/blogImages/social-payroll-automation.jpg"
                    alt="How Automation Saves Money and Time"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    How Automation Saves Money and Time
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Learn the real numbers behind automation ROI and discover
                    how businesses are saving thousands.
                  </p>
                  <Link
                    href="/blog/how-automation-saves-money-and-time"
                    className="text-brand-orange hover:text-brand-orange-dark font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>

              <article className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src="/blogImages/automation-best-practices.jpeg"
                    alt="Automation Best Practices for Success"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Automation Best Practices for Success
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Learn the key strategies and best practices to ensure your
                    automation projects succeed.
                  </p>
                  <Link
                    href="/blog/automation-best-practices-for-success"
                    className="text-brand-orange hover:text-brand-orange-dark font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-orange">
        <div className="container-width">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
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

export default BlogPostPage;
