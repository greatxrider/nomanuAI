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

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 overflow-hidden">
      {/* Hero */}
      <section className="relative section-padding pt-32">
        {/* Decorative orbs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-24 w-32 h-32 bg-brand-orange rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-24 right-24 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
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
        </div>
      </section>

      {/* Open Roles */}
      <section className="relative pb-32">
        <div className="container-width">
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
          <div className="group relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-gray-200/50 dark:border-gray-700/50 hover:border-brand-orange/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/10 max-w-6xl mx-auto">
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
                  <div className="bg-white/60 dark:bg-gray-700/60 rounded-2xl p-6 border border-gray-200/40 dark:border-gray-600/40">
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

                  <div className="bg-white/60 dark:bg-gray-700/60 rounded-2xl p-6 border border-gray-200/40 dark:border-gray-600/40">
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

                  <div className="bg-white/60 dark:bg-gray-700/60 rounded-2xl p-6 border border-gray-200/40 dark:border-gray-600/40">
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
              <div className="lg:w-80 shrink-0">
                <div className="bg-gradient-to-br from-brand-orange/5 to-orange-500/5 backdrop-blur-sm rounded-2xl border border-brand-orange/20 p-6 sticky top-32">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-brand-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                      className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-gradient-to-r from-brand-orange to-orange-500 hover:from-orange-500 hover:to-brand-orange text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 group"
                    >
                      <span>Apply via Contact Form</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>

                    <a
                      href="mailto:careers@nomanu.ai"
                      className="w-full inline-flex items-center justify-center px-6 py-4 rounded-xl bg-white/80 dark:bg-gray-700/80 border border-gray-200/60 dark:border-gray-600/60 text-gray-900 dark:text-white gap-3 hover:border-brand-orange/40 hover:bg-white dark:hover:bg-gray-600 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      <Mail className="w-5 h-5" />
                      <span>Email Us Directly</span>
                    </a>
                  </div>

                  <div className="mt-6 p-4 bg-white/60 dark:bg-gray-700/60 rounded-xl border border-gray-200/40 dark:border-gray-600/40">
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

      <Footer />
    </main>
  );
}
