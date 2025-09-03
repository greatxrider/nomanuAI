import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Clock, Calendar } from "lucide-react";

const BlogPostPage = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

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
                Cost Savings
              </span>
            </div>

            {/* Post Meta */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span>4 min read</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>September 01, 2025</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-6">
              <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                How Automation Saves Money and Time
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl mb-10 text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Discover the real cost savings and time benefits that automation
              brings to businesses of all sizes. Learn how smart automation can
              transform your bottom line and free up valuable resources.
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
                src="/blogImages/social-payroll-automation.jpg"
                alt="How Automation Saves Money and Time"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                The Real Cost of Manual Processes
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Every business has repetitive tasks that consume valuable time
                and resources. From data entry and email management to customer
                follow-ups and report generation, these manual processes cost
                more than you might realize.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Consider this: the average employee spends 4-5 hours per day on
                repetitive tasks that could be automated. At an average salary
                of $50,000 per year, that's approximately $25,000 in wasted
                productivity annually per employee.
              </p>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                Direct Cost Savings Through Automation
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Automation delivers immediate and measurable cost savings across
                multiple areas:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Labor Costs:</strong> Reduce manual work by 60-80%,
                    allowing employees to focus on high-value activities
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Error Reduction:</strong> Eliminate costly mistakes
                    that can cost thousands in corrections and customer service
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Operational Efficiency:</strong> Streamline
                    processes to reduce overhead and improve resource
                    utilization
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-orange mr-3 mt-1">•</span>
                  <span className="text-gray-600 dark:text-gray-300">
                    <strong>Scalability:</strong> Handle increased workload
                    without proportional cost increases
                  </span>
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                Time Savings That Drive Growth
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Time is your most valuable resource. Automation frees up hours
                that can be redirected toward strategic initiatives, customer
                service, and business development.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our clients typically save 20-30 hours per week through
                automation. That's equivalent to hiring an additional part-time
                employee without the associated costs.
              </p>

              <blockquote className="border-l-4 border-brand-orange pl-6 py-4 bg-brand-orange/5 rounded-r-lg mb-8">
                <p className="text-lg text-gray-700 dark:text-gray-300 italic">
                  "Automation isn't just about saving money—it's about creating
                  opportunities. The time we've saved has allowed us to focus on
                  innovation and customer experience, driving 40% revenue
                  growth."
                </p>
                <cite className="text-sm text-gray-500 dark:text-gray-400 mt-2 block">
                  - Sarah Johnson, Operations Director
                </cite>
              </blockquote>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                ROI Calculation: Real Numbers
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Let's look at a practical example of automation ROI:
              </p>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Monthly Automation ROI Example
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Time saved per employee:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      20 hours/month
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Hourly cost savings:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      $25/hour
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Monthly labor savings:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      $500/employee
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-300">
                      Error reduction savings:
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      $200/month
                    </span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-semibold">
                    <span className="text-gray-900 dark:text-white">
                      Total monthly savings:
                    </span>
                    <span className="text-brand-orange">$700/employee</span>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                Getting Started with Cost-Saving Automation
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Ready to start saving money and time? Here's how to begin:
              </p>
              <ol className="space-y-3 mb-6">
                <li className="text-gray-600 dark:text-gray-300">
                  <strong>1. Identify High-Cost Processes:</strong> Look for
                  tasks that consume significant time or are prone to errors
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <strong>2. Calculate Current Costs:</strong> Determine the
                  true cost of manual processes including labor, errors, and
                  opportunity costs
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <strong>3. Prioritize by ROI:</strong> Focus on automations
                  that will deliver the highest return on investment
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <strong>4. Start Small:</strong> Begin with one process to
                  demonstrate value and build momentum
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  <strong>5. Measure and Scale:</strong> Track savings and
                  expand successful automations
                </li>
              </ol>

              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-12">
                The Bottom Line
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Automation isn't just a nice-to-have—it's a strategic imperative
                for businesses looking to compete in today's fast-paced market.
                The combination of cost savings and time efficiency creates a
                powerful competitive advantage.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Most businesses see a full return on their automation investment
                within 3-6 months. After that, it's pure profit—money and time
                that can be reinvested in growth, innovation, and customer
                satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <article className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video">
                  <Image
                    src="/blogImages/future-of-business.jpg"
                    alt="Why Automation is the Future of Business"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    Why Automation is the Future of Business
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Learn how automation can transform your business operations
                    and give you a competitive edge.
                  </p>
                  <Link
                    href="/blog/why-automation-is-future-of-business"
                    className="text-brand-orange hover:text-brand-orange-dark font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </article>

              <article className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
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
              Ready to Start Saving?
            </h2>
            <p className="text-lg text-orange-100 mb-8">
              Let's calculate your potential savings and create a custom
              automation strategy
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
