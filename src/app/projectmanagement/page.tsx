"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";
import {
  BotIcon,
  MailIcon,
  LineChartIcon,
  MessageIcon,
  UserIcon,
  CheckIcon,
  CreditCardIcon,
  ShareIcon,
  UsersIcon,
  BriefcaseIcon,
  ScaleIcon,
  LandmarkIcon,
  WorkflowIcon,
  CalendarIcon,
  HexagonIcon,
  ArrowRightIcon,
  SettingsIcon,
  TargetIcon,
  TrendingUpIcon,
  FileTextIcon,
  ClockIcon,
  CheckSquareIcon,
} from "@/components/icons/PremiumIcons";

// Aliases
const Bot = BotIcon;
const Mail = MailIcon;
const LineChart = LineChartIcon;
const MessageSquare = MessageIcon;
const UserCheck = UserIcon;
const CheckSquare = CheckSquareIcon || CheckIcon;
const CreditCard = CreditCardIcon;
const Share2 = ShareIcon;
const Users = UsersIcon;
const Briefcase = BriefcaseIcon;
const Scale = ScaleIcon;
const Landmark = LandmarkIcon;
const Workflow = WorkflowIcon;
const Calendar = CalendarIcon;
const Clock = ClockIcon;
const FileText = FileTextIcon;
const Target = TargetIcon;
const TrendingUp = TrendingUpIcon;
const Settings = SettingsIcon;
const ArrowRight = ArrowRightIcon;

export default function ProjectManagementPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] transition-colors duration-300">


      {/* Pattern A */}
      {/* Hero Section - AI Inspired */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-50 dark:opacity-30" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/40 to-gray-100/50 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="badge-glass mb-5">
              <BotIcon size={16} className="mr-2 text-brand" />
              <span className="font-display tracking-wide text-xs uppercase font-bold">
                Project Management Services
              </span>
            </div>
            <h1 className="heading-display mb-3">
              <span className="honey-shimmer">
                Project Management
              </span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-brand-orange mb-4">
              Streamline your projects with practical automation
            </p>
            <p className="text-body-lg mb-8 max-w-3xl">
              We set up dependable automations for task tracking, team
              coordination, and simple reporting so your team spends less time
              managing and more time delivering.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="btn-primary">
                Book a Call
              </Link>
              <Link href="/#projects" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern B */}
      {/* Social Proof / Statistic Section */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="card-honeycomb p-8">
            <div className="text-6xl font-bold text-brand-orange mb-3">68%</div>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              of projects fail due to poor communication and lack of visibility
              into progress
            </p>
            <p className="text-body">
              According to PMI's 2025 Pulse of the Profession report,
              miscommunication, unclear task assignments, and lack of real-time
              progress tracking are the leading causes of project delays and
              budget overruns.
            </p>
          </div>
          <div className="card-honeycomb p-8">
            <p className="italic text-body-lg mb-4">
              "Before working with NomanuAI, our team spent 4 hours a week in
              status meetings. Now everything is automated and visible in
              real-time. We delivered our last project 3 weeks early and 15%
              under budget."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 clip-hex overflow-hidden border-2 border-brand-orange flex-shrink-0">
                <Image
                  src="/testimonialsPicture/raymond-photo.jpg"
                  alt="Raymond - Project Manager, MetaWatt"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold">
                  — Raymond, Project Manager, MetaWatt
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern C */}
      {/* Benefit-Focused Section */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="pm-benefits-honeycomb" />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">
              What we actually do for your project management
            </span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">
            We configure proven workflows in your project tools and connect them
            with your communication and document systems, so projects move
            forward with clear ownership and timely updates.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Automated task creation & assignment",
                desc: "Create tasks from templates, assign owners, and set due dates automatically when new projects start.",
              },
              {
                title: "Simple progress views & summaries",
                desc: "Lightweight dashboards and weekly summaries that show status at a glance without manual updates.",
              },
              {
                title: "Team communication automation",
                desc: "Automated notifications and status updates in Slack/Email to keep everyone aligned without noise.",
              },
              {
                title: "Basic capacity views",
                desc: "See workload across the team using task counts, due dates, and simple filters to prevent overload.",
              },
              {
                title: "Client & stakeholder updates",
                desc: "Automated email summaries and milestone notifications for clear, consistent client communication.",
              },
              {
                title: "Integrations & data sync",
                desc: "Connect PM tools with time tracking, billing, CRM, and docs using Zapier/Make for seamless handoffs.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-honeycomb p-6"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="card-honeycomb p-8">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              Project management platforms we work with
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We specialize in the leading project management platforms:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/asana-logo.png"
                  alt="Asana"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/monday-logo.png"
                  alt="Monday.com"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/clickup-logo.svg"
                  alt="ClickUp"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/notion-logo.png"
                  alt="Notion"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern A */}
      {/* Who We Work With Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-50 dark:opacity-30" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/40 to-gray-100/50 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">
              Who typically needs this
            </span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">
            Our project management automation services work best for growing
            teams that need more structure than simple to‑do lists but aren't
            ready for heavy enterprise systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Digital Marketing Agencies",
                icon: Users,
                copy: "Coordinate campaigns, tasks, and client updates across multiple projects with clear ownership.",
                size: "Teams of 3-25",
              },
              {
                label: "Software Development Teams",
                icon: Settings,
                copy: "Automate sprint routines, bug tracking, and release checklists with simple tool integrations.",
                size: "Dev teams of 3-20",
              },
              {
                label: "Creative Agencies & Design Studios",
                icon: Briefcase,
                copy: "Streamline creative briefs, revision tracking, and asset delivery with approval steps.",
                size: "Studios of 3-15",
              },
              {
                label: "Construction & Engineering Firms",
                icon: Landmark,
                copy: "Track phases and documentation with milestone reminders and simple reporting.",
                size: "Teams of 10-50",
              },
              {
                label: "Consulting Firms",
                icon: Scale,
                copy: "Manage engagements, deliverables, and utilization with light automation and shared views.",
                size: "Solo to 25+ consultants",
              },
            ].map(({ label, icon: Icon, copy, size }) => (
              <div
                key={label}
                className="card-honeycomb p-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <Icon className="w-6 h-6 text-brand-orange" />
                  <div>
                    <span className="text-gray-900 dark:text-white font-semibold block">
                      {label}
                    </span>
                    <span className="text-xs text-brand-orange">{size}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pattern B */}
      {/* Features / Example Automations */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">
              Common automations we build
            </span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">
            These are practical automations we implement often. We tailor them
            to match your workflow and tools.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Project kickoff templates",
                description:
                  "Create project boards, assign core tasks, set deadlines, and schedule kickoff meetings in one flow",
                icon: Target,
              },
              {
                title: "Milestone & deadline reminders",
                description:
                  "Send timely reminders, flag overdue items, and notify stakeholders on schedule changes",
                icon: Calendar,
              },
              {
                title: "Workload overview",
                description:
                  "Simple capacity views by assignee to prevent overload and balance tasks across the team",
                icon: TrendingUp,
              },
              {
                title: "Automated client updates",
                description:
                  "Generate weekly status emails and share client-facing boards without manual compilation",
                icon: FileText,
              },
              {
                title: "Weekly status snapshots",
                description:
                  "Email or Slack summaries of completed tasks, upcoming deadlines, and potential blockers",
                icon: LineChart,
              },
              {
                title: "Cross-tool syncs",
                description:
                  "Keep PM, time tracking, comms, and billing in sync using Zapier/Make so data stays consistent",
                icon: Workflow,
              },
            ].map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="card-honeycomb p-6"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <Icon className="w-6 h-6 text-brand-orange mt-1" />
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white">
                      {title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pattern C */}
      {/* Service Options / Packages */}
      <section className="relative py-32 bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="pm-packages-honeycomb" />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">
              How we can help
            </span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">
            We offer three ways to work together, depending on where you are and
            what you need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Assessment */}
            <div className="card-honeycomb p-8">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mb-2">
                START HERE
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Project Workflow Audit
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                We'll analyze your current project workflows, identify
                bottlenecks, and give you a prioritized automation roadmap.
                Perfect if you want to understand what's possible before
                committing to changes.
              </p>
              <Link href="/#contact" className="btn-primary">
                Book Session
              </Link>
            </div>

            {/* Most Popular */}
            <div className="card-honeycomb p-8 border-2 border-brand-orange/60">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mb-2">
                MOST POPULAR
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                Complete PM Automation Setup
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                We build your entire automated project management system with
                task automation, progress tracking, and team coordination.
                Includes training and 30 days of support after launch.
              </p>
              <Link href="/#contact" className="btn-primary">
                Get Quote
              </Link>
            </div>

            {/* Ongoing Partnership */}
            <div className="card-honeycomb p-8">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mb-2">
                ONGOING
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Monthly PM Optimization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                Monthly optimization of your project workflows, performance
                monitoring, and continuous improvements. Includes priority
                support and quarterly strategy sessions.
              </p>
              <Link href="/#contact" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pattern A */}
      {/* Other Solutions (Cross-Sell) */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-50 dark:opacity-30" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/40 to-gray-100/50 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">
              Related services
            </span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">
            Project management works best when it's connected to your other
            business processes. We also help with these common adjacent needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                id: 1,
                title: "Sales CRM Management",
                description:
                  "Keep your leads, conversations, and follow-ups organized without lifting a finger. Your sales team always knows the next step to move deals forward.",
                icon: Users,
                features: [
                  "Automated lead tracking and qualification",
                  "Smart follow-up reminders and sequences",
                  "Pipeline management and deal progression",
                ],
              },
              {
                id: 2,
                title: "Client Intake & Onboarding",
                description:
                  "Welcome new clients with a smooth, consistent process every time. From booking to first delivery, everything flows without delays or missed details.",
                icon: UserCheck,
                features: [
                  "Automated intake forms and scheduling",
                  "Welcome email sequences and onboarding",
                  "Document collection and e-signatures",
                ],
              },
              {
                id: 4,
                title: "Billing & Payment",
                description:
                  "Send invoices, follow up on payments, and keep records up to date automatically. You maintain healthy cash flow without chasing after clients.",
                icon: CreditCard,
                features: [
                  "Automated invoice generation and sending",
                  "Payment reminders and follow-ups",
                  "Expense tracking and reporting",
                ],
                href: "/billingpayment",
              },
              {
                id: 5,
                title: "Social Media Content",
                description:
                  "Plan your content once and let it publish on schedule across all your channels. Stay visible online without the daily posting grind.",
                icon: Share2,
                features: [
                  "Content planning and scheduling",
                  "Multi-platform publishing automation",
                  "Performance tracking and analytics",
                ],
                href: "/socialmedia",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="group relative card-honeycomb p-6 hover:scale-105 overflow-hidden flex flex-col"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* AI Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Floating Particles */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-4 right-4 w-2 h-2 bg-brand-orange/40 clip-hex animate-pulse" />
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-brand-orange/30 clip-hex animate-pulse animation-delay-300" />
                    <div className="absolute top-1/2 right-2 w-1 h-1 bg-brand-orange/50 clip-hex animate-pulse animation-delay-600" />
                  </div>

                  {/* Icon with Brand Orange Background */}
                  <div className="w-14 h-14 icon-hex mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 dark:text-gray-300 mb-4 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <div className="w-3 h-3 bg-brand-orange clip-hex mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto pt-4">
                    <Link
                      href={
                        service.id === 1
                          ? "/salescrmmanagement"
                          : service.id === 2
                          ? "/clientintake"
                          : service.id === 4
                          ? "/billingpayment"
                          : service.id === 5
                          ? "/socialmedia"
                          : "/#services"
                      }
                      className="btn-primary relative z-10 pointer-events-auto"
                    >
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pattern B */}
      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden bg-paper dark:bg-gray-950">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width text-center relative">
          <h2 className="heading-lg mb-4">
            <span className="text-gradient">
              Ready to streamline your project delivery?
            </span>
          </h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto">
            Book a free 30-minute call to review your current workflows and
            explore practical automations for your team.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/#contact" className="btn-primary">
              Book Free Call
            </Link>
            <Link href="/#services" className="btn-secondary">
              All Services
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
