"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
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
  UserPlusIcon,
  ClipboardCheckIcon,
  SendIcon,
  FilterIcon,
  ZapIcon,
  BookOpenIcon,
  GlobeIcon,
  ShieldIcon,
  CheckSquareIcon,
  ClockIcon,
  NetworkIcon,
} from "@/components/icons/PremiumIcons";

// Aliases
const Bot = BotIcon;
const Mail = MailIcon;
const LineChart = LineChartIcon;
const MessageSquare = MessageIcon;
const UserCheck = UserIcon;
const CheckSquare = CheckSquareIcon || CheckIcon; // Fallback to CheckIcon if CheckSquareIcon is not available
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
const UserPlus = UserPlusIcon || UserIcon;
const ClipboardCheck = ClipboardCheckIcon || CheckIcon;
const Send = SendIcon;
const Filter = FilterIcon;
const Zap = ZapIcon;
const Target = TargetIcon;
const TrendingUp = TrendingUpIcon;
const BookOpen = BookOpenIcon || FileTextIcon;
const Settings = SettingsIcon;
const Globe = GlobeIcon || NetworkIcon;
const Shield = ShieldIcon;
const ArrowRight = ArrowRightIcon;

const ClientIntakeOnboardingPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-[var(--color-paper)] transition-colors duration-300">


      {/* Hero Section - Pattern A: Gradient + Texture */}
      {/* Pattern A */}
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
                Client Intake & Onboarding Services
              </span>
            </div>
            <h1 className="heading-display mb-3">
              <span className="honey-shimmer">
                Client Intake & Onboarding
              </span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-brand-orange mb-4">
              Streamline your client onboarding with proven automation workflows
            </p>
            <p className="text-body-lg mb-8 max-w-3xl">
              We'll help you build efficient onboarding systems for client
              intake, scheduling, document collection, and project setup.
              Perfect for growing businesses ready to scale their processes.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="https://calendar.app.google/ydhNfzf6HS7uVcUp7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a Call
              </Link>
              <Link href="/#projects" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section - Pattern B: Clean Paper */}
      {/* Pattern B */}
      <section className="relative py-20 overflow-hidden bg-paper dark:bg-gray-950">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="card-honeycomb p-8">
            <div className="text-6xl font-bold text-brand-orange mb-3">84%</div>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              of businesses lose potential clients during lengthy onboarding
              processes
            </p>
            <p className="text-body">
              According to HubSpot research, complex intake processes, manual
              data collection, and poor communication during onboarding lead to
              client drop-offs and damaged first impressions.
            </p>
          </div>
          <div className="card-honeycomb p-8">
            <p className="italic text-body-lg mb-4">
              "Before working with NomanuAI, our client onboarding took 2 weeks
              and involved countless back-and-forth emails. Now our entire
              process is automated, clients get started in 2 days, and our team
              can focus on actual project delivery instead of paperwork."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 clip-hex overflow-hidden border-2 border-brand-orange flex-shrink-0">
                <Image
                  src="/testimonialsPicture/paul-photo.jpg"
                  alt="Paul - Agency Owner, BambooWorks"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold">
                  — Paul, Agency Owner, BambooWorks
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Pattern C: Paper + Honeycomb */}
      {/* Pattern C */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="clientintake-benefits-honeycomb" />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">
              What we actually do for your client onboarding
            </span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">
            We help you build comprehensive automation workflows that handle
            every aspect of client onboarding. We'll create systems that grow
            with your business and integrate with your existing tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Smart Lead Capture",
                desc: "Intelligent forms that collect and qualify leads, automatically routing them to the right team members.",
              },
              {
                title: "Automated Welcome Sequences",
                desc: "Personalized email sequences that guide clients through your process and set proper expectations.",
              },
              {
                title: "Document Management",
                desc: "Streamlined systems for gathering contracts, questionnaires, and project materials with automated reminders.",
              },
              {
                title: "Advanced Scheduling",
                desc: "Smart calendar integration that handles discovery calls, kickoff meetings, and project milestones.",
              },
              {
                title: "Project Setup Automation",
                desc: "Automatic creation of project folders, team assignments, and communication channels.",
              },
              {
                title: "Progress Monitoring",
                desc: "Real-time tracking of onboarding status with automated notifications and follow-ups.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-honeycomb p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="card-honeycomb p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Onboarding Platforms we integrate with
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We work with your existing tools and can recommend the best
                platforms for your specific onboarding needs:
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { src: "/servicesApps/typeform-logo.png", alt: "Typeform" },
                { src: "/servicesApps/calendly-logo.svg", alt: "Calendly" },
                { src: "/servicesApps/airtable-logo.png", alt: "Airtable" },
                { src: "/servicesApps/notion-logo.png", alt: "Notion" },
                { src: "/servicesApps/clickup-logo.svg", alt: "ClickUp" },
                { src: "/servicesApps/monday-logo.png", alt: "Monday.com" },
                { src: "/servicesApps/asana-logo.png", alt: "Asana" },
                { src: "/servicesApps/slack-logo.png", alt: "Slack" },
                { src: "/servicesApps/zoom-logo.svg", alt: "Zoom" },
                {
                  src: "/servicesApps/googleWorkspace-logo.png",
                  alt: "Google Workspace",
                },
              ].map(({ src, alt }) => (
                <div
                  key={alt}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hex-cut-sm p-3 text-center border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 flex items-center justify-center"
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={140}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section - Pattern A: Gradient + Texture */}
      {/* Pattern A */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
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
            Perfect for growing businesses and agencies that want to scale their
            onboarding processes. We work best with businesses that have 3-25
            team members and are ready to implement professional automation
            systems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Growing Marketing Agencies",
                icon: Users,
                copy: "Comprehensive automation for client intake, project setup, and client communication workflows.",
                size: "5-20 team members",
              },
              {
                label: "Consulting Firms",
                icon: Briefcase,
                copy: "Professional intake processes and advanced document management automation.",
                size: "3-15 staff",
              },
              {
                label: "Development Agencies",
                icon: Settings,
                copy: "Advanced project setup automation and sophisticated client communication workflows.",
                size: "Teams of 5-20 developers",
              },
              {
                label: "Creative Agencies",
                icon: Users,
                copy: "Professional client brief systems and advanced file organization automation.",
                size: "Studios of 5-15 creatives",
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

      {/* Features Section - Pattern B: Clean Paper */}
      {/* Pattern B */}
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
            These are proven automation solutions we've built for similar
            businesses. We'll customize everything to match your specific
            onboarding process and business requirements.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Intelligent lead qualification",
                description:
                  "Smart forms that qualify leads and automatically route them to the right team members",
                icon: Bot,
              },
              {
                title: "Dynamic email sequences",
                description:
                  "Personalized email campaigns that adapt based on client behavior and responses",
                icon: Mail,
              },
              {
                title: "Advanced deal tracking",
                description:
                  "Comprehensive dashboards showing deal progress, bottlenecks, and conversion metrics",
                icon: LineChart,
              },
              {
                title: "Automated client onboarding",
                description:
                  "End-to-end workflows that handle everything from initial contact to project kickoff",
                icon: Workflow,
              },
              {
                title: "Meeting automation",
                description:
                  "Automated meeting scheduling, note-taking, and follow-up task creation",
                icon: MessageSquare,
              },
              {
                title: "Contract lifecycle management",
                description:
                  "Automated contract tracking, renewal reminders, and client communication",
                icon: Mail,
              },
            ].map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="card-honeycomb p-6"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <Icon className="w-6 h-6 text-brand-orange mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
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

      {/* Service Options Section - Pattern C: Paper + Honeycomb */}
      {/* Pattern C */}
      <section className="relative py-32 overflow-hidden bg-paper dark:bg-gray-950">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="clientintake-packages-honeycomb" />
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
                Onboarding Audit
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                We'll analyze your current onboarding process, identify
                optimization opportunities, and create a strategic roadmap for
                implementing automation. Perfect if you want to understand the
                full scope before committing to changes.
              </p>
              <Link
                href="https://calendar.app.google/ydhNfzf6HS7uVcUp7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Book Session
              </Link>
            </div>

            {/* Most Popular */}
            <div className="card-honeycomb p-8 border-2 border-brand-orange/60">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mb-2">
                MOST POPULAR
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-1">
                Complete Onboarding Setup
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                We build your complete automated onboarding system from lead
                capture to project kickoff. Includes advanced integrations, team
                training, comprehensive documentation, and 60 days of support to
                ensure everything works perfectly.
              </p>
              <Link
                href="https://calendar.app.google/ydhNfzf6HS7uVcUp7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Get Quote
              </Link>
            </div>

            {/* Ongoing Partnership */}
            <div className="card-honeycomb p-8">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mb-2">
                ONGOING
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Onboarding Optimization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                Ongoing optimization of your onboarding workflows, performance
                monitoring, and continuous improvements. Includes priority
                support, monthly strategy sessions, and quarterly system audits
                to ensure peak performance.
              </p>
              <Link
                href="https://calendar.app.google/ydhNfzf6HS7uVcUp7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section - Pattern A: Gradient + Texture */}
      {/* Pattern A */}
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
            Client onboarding works best when it's integrated with your other
            business processes. We also help with these common adjacent
            automation needs.
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
                idealFor: [
                  "Sales Teams",
                  "Real Estate Agents",
                  "Insurance Agencies",
                  "B2B Companies",
                  "Consultants",
                ],
                href: "/salescrmmanagement",
              },
              {
                id: 3,
                title: "Project Management",
                description:
                  "Track tasks, deadlines, and progress automatically across your tools. Everyone stays aligned, and projects move from start to finish with less effort.",
                icon: CheckSquare,
                features: [
                  "Automated task creation and assignment",
                  "Progress tracking and milestone management",
                  "Team communication and updates",
                ],
                idealFor: [
                  "Project Managers",
                  "Agencies",
                  "Development Teams",
                  "Construction Firms",
                  "Event Planners",
                ],
                href: "/projectmanagement",
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
                idealFor: [
                  "Freelancers",
                  "Small Businesses",
                  "Consultants",
                  "Service Providers",
                  "Agencies",
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
                idealFor: [
                  "Social Media Managers",
                  "Content Creators",
                  "Brands",
                  "Influencers",
                  "Marketing Agencies",
                ],
                href: "/socialmedia",
              },
            ].map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Link
                  key={service.id}
                  href={service.href}
                  className="group relative card-honeycomb p-6 hover:scale-105 overflow-hidden flex flex-col block"
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
                  <div className="icon-hex w-14 h-14 mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <IconComponent size={24} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
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
                    <span className="btn-primary relative z-10 pointer-events-auto">
                      <span>Learn More</span>
                      <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section - Pattern B: Clean Paper */}
      {/* Pattern B */}
      <section className="relative py-20 overflow-hidden bg-paper dark:bg-gray-950">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg mb-4">
              <span className="text-gradient">
                Ready to scale your client onboarding?
              </span>
            </h2>
            <p className="text-body-lg mb-8 max-w-2xl mx-auto">
              Stop losing potential clients to inefficient onboarding processes.
              Let's build you a professional automation system that creates
              great first impressions and scales with your business growth.
            </p>
            <div className="flex items-center justify-center gap-3">
              <Link
                href="https://calendar.app.google/ydhNfzf6HS7uVcUp7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book Free Call
              </Link>
              <Link href="/#services" className="btn-secondary">
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ClientIntakeOnboardingPage;
