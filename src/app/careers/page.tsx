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
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-slate-900 dark:via-gray-900 dark:to-slate-800 overflow-hidden">
      <Header />

      {/* Hero */}
      <section className="relative section-padding">
        {/* Decorative orbs */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-20 left-24 w-32 h-32 bg-brand-orange rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-24 right-24 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container-width relative z-10 text-center">
          <div className="inline-flex items-center px-6 py-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-6">
            <Sparkles className="w-5 h-5 text-brand-orange mr-2 animate-pulse" />
            <span className="text-brand-orange font-semibold">Were Hiring</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Build the Future of{" "}
            <span className="text-brand-orange">Automation</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Join NomanuAI and help us design, build, and ship automations that
            remove manual work for real businesses.
          </p>
        </div>
      </section>

      {/* Open Roles */}
      <section className="relative pb-20">
        <div className="container-width">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Open Roles
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Were actively hiring for the role below.
            </p>
          </div>

          {/* Role Card */}
          <div className="group relative bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 hover:border-brand-orange/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-orange/10 border border-brand-orange/30 text-brand-orange text-sm font-medium mb-4">
                  <Briefcase className="w-4 h-4" /> AI Automation Intern
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  AI Automation Interns
                </h3>
                <div className="flex flex-wrap gap-2 text-xs text-gray-600 dark:text-gray-300 mb-4">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/60 dark:bg-white/10 border border-gray-200/60 dark:border-white/20">
                    <Globe2 className="w-3 h-3" /> Remote
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/60 dark:bg-white/10 border border-gray-200/60 dark:border-white/20">
                    <Clock className="w-3 h-3" /> Flexible
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/60 dark:bg-white/10 border border-gray-200/60 dark:border-white/20">
                    <GraduationCap className="w-3 h-3" /> Students &
                    Transitioners Welcome
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 max-w-2xl mb-6">
                  Entry-level role focused on building real automations for real
                  clients. Youll learn fast, work with developers, and ship
                  portfolio projects while contributing to live workflows.
                </p>

                {/* Requirements */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 className="w-4 h-4 text-brand-orange" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Requirements
                      </h4>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />{" "}
                        Basic Python and JavaScript
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />{" "}
                        Familiar with Make, Zapier, or n8n
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />{" "}
                        Willingness to learn fast
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />{" "}
                        Currently in university or career transitioning
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Workflow className="w-4 h-4 text-brand-orange" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Nice to Have
                      </h4>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />{" "}
                        APIs, webhooks, JSON basics
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />{" "}
                        Airtable, Google Workspace, Slack
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />{" "}
                        Prompting and LLM tools
                      </li>
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="w-4 h-4 text-brand-orange" />
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        What Youll Get
                      </h4>
                    </div>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />{" "}
                        Real portfolio projects
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />{" "}
                        Mentorship from developers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />{" "}
                        Certifications support and guidance
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-orange" />{" "}
                        Unpaid, flexible, remote schedule
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Apply box */}
              <div className="md:w-64 shrink-0">
                <div className="bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-white/20 p-5">
                  <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                    Apply today
                  </div>
                  <div className="space-y-3">
                    <Link
                      href="/#contact"
                      className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold transition-colors"
                    >
                      Apply via Contact Form
                    </Link>
                    <a
                      href="mailto:careers@nomanu.ai"
                      className="w-full inline-flex items-center justify-center px-4 py-3 rounded-lg bg-white/60 dark:bg-white/10 border border-gray-200/60 dark:border-white/20 text-gray-900 dark:text-white gap-2"
                    >
                      <Mail className="w-4 h-4" /> Email Us
                    </a>
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
