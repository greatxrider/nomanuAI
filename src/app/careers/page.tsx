import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Zap,
  Code2,
  Workflow,
  Clock,
  Globe2,
  CheckCircle2,
  Mail,
  ArrowRight,
} from "lucide-react";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Join NomanuAI - AI Automation Jobs",
  description:
    "Join NomanuAI's innovative team and help shape the future of AI automation. Explore exciting career opportunities in AI development, automation engineering, and business transformation.",
  keywords: [
    "NomanuAI careers",
    "AI automation jobs",
    "automation engineer jobs",
    "AI developer jobs",
    "remote AI jobs",
    "automation careers",
    "tech careers",
    "AI company jobs",
  ],
  openGraph: {
    title: "Careers | Join NomanuAI - AI Automation Jobs",
    description:
      "Join NomanuAI's innovative team and help shape the future of AI automation. Explore exciting career opportunities in AI development and automation engineering.",
    url: "https://www.nomanuai.com/careers",
    images: [
      {
        url: "/assets/ai-automation.jpg",
        width: 1200,
        height: 630,
        alt: "Careers at NomanuAI - AI Automation Jobs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Join NomanuAI - AI Automation Jobs",
    description:
      "Join NomanuAI's innovative team and help shape the future of AI automation. Explore exciting career opportunities.",
    images: ["/assets/ai-automation.jpg"],
  },
  alternates: {
    canonical: "/careers",
  },
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section - match Sales CRM hero styling */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Enhanced AI Background - matching Sales CRM */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Circuit Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="circuit-careers"
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
              <rect width="100%" height="100%" fill="url(#circuit-careers)" />
            </svg>
          </div>

          {/* Floating AI Particles */}
          <div className="absolute inset-0">
            {[
              { left: "15%", top: "20%", delay: "0s", duration: "4s" },
              { left: "85%", top: "30%", delay: "0.5s", duration: "3.5s" },
              { left: "25%", top: "70%", delay: "1s", duration: "4.5s" },
              { left: "75%", top: "60%", delay: "1.5s", duration: "3s" },
            ].map((particle, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-brand-orange rounded-full animate-pulse opacity-30"
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

        <div className="container-width relative z-10 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
            <Sparkles className="w-5 h-5 text-brand-orange mr-2 animate-pulse" />
            <span className="text-brand-orange font-semibold">
              We're Hiring
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Build the Future of{" "}
            <span className="text-brand-orange bg-gradient-to-r from-brand-orange to-orange-500 bg-clip-text text-transparent">
              Automation
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Join NomanuAI and help us design, build, and ship automations that
            remove manual work for real businesses. Be part of the AI
            revolution.
          </p>

          {/* Hero CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/#contact" className="btn-primary">
              Apply Now
            </Link>
            <a href="mailto:careers@nomanu.ai" className="btn-secondary">
              careers@nomanu.ai
            </a>
          </div>
        </div>
      </section>

      {/* Open Roles - match Sales CRM section container and background */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        {/* Background visuals */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-brand-orange/50 via-orange-400/25 to-brand-orange-light/40 rounded-full blur-3xl animate-pulse opacity-75" />
          <div
            className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-orange-light/40 via-brand-orange/50 to-orange-500/35 rounded-full blur-3xl animate-pulse opacity-65"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-orange/10 via-orange-400/15 to-brand-orange/10 rounded-full blur-3xl animate-pulse opacity-40"
            style={{ animationDelay: "4s" }}
          />
          <div className="absolute inset-0 opacity-50">
            {[
              { left: "15%", top: "20%", delay: "0s", size: "w-4 h-4" },
              { left: "85%", top: "30%", delay: "1s", size: "w-3 h-3" },
              { left: "25%", top: "70%", delay: "2s", size: "w-5 h-5" },
              { left: "75%", top: "60%", delay: "3s", size: "w-3 h-3" },
            ].map((particle, i) => (
              <div
                key={i}
                className={`absolute ${particle.size} bg-gradient-to-r from-brand-orange to-orange-400 rounded-full animate-pulse`}
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: "3s",
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="container-width relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Open Roles
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We're actively hiring for the role below. Join our team and help
              shape the future of business automation.
            </p>
          </div>

          {/* Role Card */}
          <div className="group relative bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/20 dark:border-gray-700/20 hover:border-brand-orange/30 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/10 max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-orange/20 to-orange-500/20 border border-brand-orange/30 text-brand-orange text-sm font-semibold mb-6">
                  <Briefcase className="w-4 h-4" /> AI Automation Intern
                </div>

                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  AI Automation Interns
                </h3>

                <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-300 mb-6">
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-700/80 border border-gray-200/60 dark:border-gray-600/60 shadow-sm">
                    <Globe2 className="w-4 h-4 text-brand-orange" /> Remote
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-700/80 border border-gray-200/60 dark:border-gray-600/60 shadow-sm">
                    <Clock className="w-4 h-4 text-brand-orange" /> Flexible
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 dark:bg-gray-700/80 border border-gray-200/60 dark:border-gray-600/60 shadow-sm">
                    <GraduationCap className="w-4 h-4 text-brand-orange" />{" "}
                    Students & Transitioners Welcome
                  </span>
                </div>

                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
                  Entry-level role focused on building real automations for real
                  clients. You'll learn fast, work with developers, and ship
                  portfolio projects while contributing to live workflows.
                </p>

                {/* Requirements Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-300/30 dark:bg-gray-800/30 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                        <Code2 className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                        Requirements
                      </h4>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>Basic Python and JavaScript</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>Familiar with Make, Zapier, or n8n</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>Willingness to learn fast</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>
                          Currently in university or career transitioning
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-300/30 dark:bg-gray-800/30 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                        <Workflow className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                        Nice to Have
                      </h4>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>APIs, webhooks, JSON basics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>Airtable, Google Workspace, Slack</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>Prompting and LLM tools</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-300/30 dark:bg-gray-800/30 rounded-2xl p-6 border border-white/20 dark:border-gray-700/20">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-brand-orange/20 rounded-xl flex items-center justify-center">
                        <Zap className="w-5 h-5 text-brand-orange" />
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                        What You'll Get
                      </h4>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>Real portfolio projects</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>Mentorship from developers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>Certifications support and guidance</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                        <span>Unpaid, flexible, remote schedule</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Apply box */}
              <div className="lg:w-96 shrink-0">
                <div className="bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-white/20 dark:border-gray-700/20 p-6 sticky top-32">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-brand-orange rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-orange/25">
                      <Briefcase className="w-8 h-8 text-brand-orange" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Ready to Apply?
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Join our team and start building the future
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Link
                      href="/#contact"
                      className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-brand-orange via-orange-500 to-brand-orange hover:from-orange-500 hover:via-brand-orange hover:to-orange-500 text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                    >
                      <span>Apply via Contact Form</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <a
                      href="mailto:careers@nomanu.ai"
                      className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white/80 dark:bg-gray-700/80 border border-white/40 dark:border-gray-600/60 text-gray-900 dark:text-white gap-3 hover:border-brand-orange/40 hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email Us Directly (careers@nomanu.ai)</span>
                    </a>
                  </div>

                  <div className="mt-6 p-4 bg-gray-300/30 dark:bg-gray-800/30 rounded-xl border border-white/20 dark:border-gray-700/20">
                    <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                      <p className="font-medium mb-1">Application Process</p>
                      <p>1. Send your application</p>
                      <p>2. We'll review within 48 hours</p>
                      <p>3. Schedule an interview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - match Sales CRM final section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-brand-orange/50 via-orange-400/25 to-brand-orange-light/40 rounded-full blur-3xl animate-pulse opacity-75" />
          <div
            className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-orange-light/40 via-brand-orange/50 to-orange-500/35 rounded-full blur-3xl animate-pulse opacity-65"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-orange/10 via-orange-400/15 to-brand-orange/10 rounded-full blur-3xl animate-pulse opacity-40"
            style={{ animationDelay: "4s" }}
          />
          <div className="absolute inset-0 opacity-50">
            {[
              { left: "15%", top: "20%", delay: "0s", size: "w-4 h-4" },
              { left: "85%", top: "30%", delay: "1s", size: "w-3 h-3" },
              { left: "25%", top: "70%", delay: "2s", size: "w-5 h-5" },
              { left: "75%", top: "60%", delay: "3s", size: "w-3 h-3" },
            ].map((particle, i) => (
              <div
                key={i}
                className={`absolute ${particle.size} bg-gradient-to-r from-brand-orange to-orange-400 rounded-full animate-pulse`}
                style={{
                  left: particle.left,
                  top: particle.top,
                  animationDelay: particle.delay,
                  animationDuration: "3s",
                  filter: "blur(1px)",
                }}
              />
            ))}
          </div>
        </div>
        <div className="container-width text-center relative z-10">
          <h2 className="heading-lg mb-4">
            <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
              Ready to build the future of automation?
            </span>
          </h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto">
            Apply now or email us your CV and a short note on why you want to
            join. We review every application.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/#contact" className="btn-primary">
              Apply Now
            </Link>
            <a href="mailto:careers@nomanu.ai" className="btn-secondary">
              careers@nomanu.ai
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
