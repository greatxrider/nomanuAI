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
  DollarIcon,
  ReceiptIcon, // Assuming ReceiptIcon exists or mapping it
  AlertCircleIcon, // Assuming AlertCircleIcon exists or mapping it
  BellIcon, // Assuming BellIcon exists or mapping it
  CheckSquareIcon,
} from "@/components/icons/PremiumIcons";

// Aliases and Fallbacks
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
const FileText = FileTextIcon;
const Target = TargetIcon;
const TrendingUp = TrendingUpIcon;
const Settings = SettingsIcon;
const DollarSign = DollarIcon;
const Receipt = ReceiptIcon || FileTextIcon; // Fallback
const AlertCircle = AlertCircleIcon || CheckIcon; // Fallback
const Bell = BellIcon || CheckIcon; // Fallback
const ArrowRight = ArrowRightIcon;

export default function BillingPaymentPage() {
  return (
    <main className="min-h-screen bg-[var(--color-paper)] transition-colors duration-300">


      {/* Hero Section - AI Inspired */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Enhanced AI Background - matching main page */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-50 dark:opacity-30" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-white/40 to-gray-100/50 dark:from-gray-950/70 dark:via-gray-900/60 dark:to-gray-950/70" />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="badge-glass mb-5">
              <BotIcon size={16} className="mr-2 text-brand" />
              <span className="font-display tracking-wide text-xs uppercase font-bold">
                Billing & Payment Services
              </span>
            </div>
            <h1 className="heading-display mb-3">
              <span className="honey-shimmer">
                Billing & Payment
              </span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-brand-orange mb-4">
              Streamline your billing with practical automation
            </p>
            <p className="text-body-lg mb-8 max-w-3xl">
              We set up dependable invoicing, payment links, and reminder
              workflows so you get paid faster without manual follow‑ups.
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

      {/* Social Proof / Statistic Section */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="card-honeycomb p-8">
            <div className="text-6xl font-bold text-brand-orange mb-3">61%</div>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              of small businesses struggle with late payments and cash flow
              issues
            </p>
            <p className="text-body">
              According to QuickBooks' Small Business Payment Trends report,
              manual invoicing processes, lack of payment reminders, and
              inefficient follow-up systems cause significant cash flow problems
              for growing businesses.
            </p>
          </div>
          <div className="card-honeycomb p-8">
            <p className="italic text-body-lg mb-4">
              "Before working with NomanuAI, I spent 6 hours a week on invoicing
              and chasing payments. Now everything is automated and I get paid
              40% faster. My outstanding receivables dropped from $15K to $3K."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 clip-hex overflow-hidden border-2 border-brand-orange flex-shrink-0">
                <Image
                  src="/testimonialsPicture/derick-photo.jpg"
                  alt="Derick - Business Owner, Anonova"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold">
                  — Derick, Business Owner, Anonova
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit-Focused Section */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        {/* Paper + Honeycomb Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="billing-benefits-honeycomb" />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">
              What we actually do for your billing & payments
            </span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">
            We configure reliable billing workflows and connect invoicing,
            payments, reminders, and simple reporting so money moves on time and
            your team spends less time chasing payments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Automated invoice generation",
                desc: "Create and send professional invoices from templates when work completes or time is logged.",
              },
              {
                title: "Payment processing setup",
                desc: "Set up Stripe/PayPal payment links and checkout so clients can pay by card or bank transfer.",
              },
              {
                title: "Smart payment reminders",
                desc: "Automated, friendly reminders before and after due dates that keep cash flowing without pressure.",
              },
              {
                title: "Expense tracking & reporting",
                desc: "Basic expense categorization and monthly summaries for better visibility and simple tax prep.",
              },
              {
                title: "Upcoming payments overview",
                desc: "See what's due and when with simple lists and filters based on invoice status and due dates.",
              },
              {
                title: "Billing snapshot dashboard",
                desc: "At‑a‑glance view of outstanding invoices, recent payments, and trends in a simple dashboard.",
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
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Billing & payment platforms we work with
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We specialize in the leading billing and payment platforms:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/stripe-logo.png"
                  alt="Stripe"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/paypal-logo.png"
                  alt="PayPal"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/quickbooks-logo.png"
                  alt="QuickBooks"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/freshbooks-logo.png"
                  alt="FreshBooks"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/xero-logo.svg"
                  alt="Xero"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        {/* Enhanced AI Background - matching main page */}
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
            Our billing & payment automation services work best for growing
            businesses that want to improve cash flow and remove manual steps
            from invoicing and payment collection.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Freelancers & Consultants",
                icon: Users,
                copy: "Automate client billing, track project expenses, and get paid faster with professional invoicing workflows.",
                size: "Solo to 5 team members",
              },
              {
                label: "Professional Services Firms",
                icon: Scale,
                copy: "Streamline time‑based billing, expense reimbursements, and multi‑client payments with audit trails.",
                size: "3‑25 professionals",
              },
              {
                label: "Creative Agencies",
                icon: Briefcase,
                copy: "Handle project‑based billing, retainers, and milestone payments with clear approval steps.",
                size: "Teams of 3‑20",
              },
              {
                label: "E‑commerce & SaaS Businesses",
                icon: DollarSign,
                copy: "Automate subscriptions, dunning (failed payment recovery), and basic revenue summaries.",
                size: "Early‑stage to growing",
              },
              {
                label: "Service‑Based Businesses",
                icon: Settings,
                copy: "Connect billing with scheduling, CRM, and projects so work and payments stay in sync.",
                size: "Small to mid‑size teams",
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
            to match your billing process and tools.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Invoice send on completion",
                description:
                  "Automatically send invoices when a job completes, time thresholds are met, or milestones close",
                icon: Receipt,
              },
              {
                title: "Payment reminder sequences",
                description:
                  "Send polite reminders at sensible intervals and notify internally when payments are overdue",
                icon: Bell,
              },
              {
                title: "Basic failed payment recovery",
                description:
                  "Use Stripe/PayPal retries and notifications to recover failed payments with minimal manual work",
                icon: AlertCircle,
              },
              {
                title: "Expense capture to reports",
                description:
                  "Pull expenses from receipts/bank and categorize to your accounting or a shared sheet for reviews",
                icon: FileText,
              },
              {
                title: "Upcoming payments calendar",
                description:
                  "See expected payments and due dates in a simple calendar or list view for planning",
                icon: TrendingUp,
              },
              {
                title: "Billing snapshot dashboard",
                description:
                  "Track outstanding invoices, recent payments, and basic trends in a clear, lightweight dashboard",
                icon: LineChart,
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

      {/* Service Options / Packages */}
      <section className="relative py-32 bg-paper dark:bg-gray-950 overflow-hidden">
        {/* Paper + Honeycomb Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="billing-packages-honeycomb" />
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Billing Process Audit
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                We'll analyze your current billing workflow, identify cash flow
                bottlenecks, and give you a prioritized automation roadmap.
                Perfect if you want to understand what's costing you money.
              </p>
              <Link href="/#contact" className="btn-primary w-full text-center">
                Book Session
              </Link>
            </div>

            {/* Most Popular */}
            <div className="card-honeycomb p-8 border-2 border-brand-orange/60">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mb-2">
                MOST POPULAR
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Complete Billing Automation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                We build your entire automated billing system with invoice
                generation, payment processing, and reminder workflows. Includes
                training and 30 days of support after launch.
              </p>
              <Link href="/#contact" className="btn-primary w-full text-center">
                Get Quote
              </Link>
            </div>

            {/* Ongoing Partnership */}
            <div className="card-honeycomb p-8">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mb-2">
                ONGOING
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Monthly Financial Optimization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                Monthly optimization of your billing workflows, cash flow
                monitoring, and continuous improvements. Includes priority
                support and quarterly financial strategy sessions.
              </p>
              <Link href="/#contact" className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Solutions (Cross-Sell) */}
      <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
        {/* Enhanced AI Background - matching main page */}
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
            Billing & payment automation works best when it's connected to your
            other business processes. We also help with these common adjacent
            needs.
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
                  <div className="icon-hex w-14 h-14 mb-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <IconComponent className="w-7 h-7 text-white" />
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
                    <Link
                      href={
                        service.id === 1
                          ? "/salescrmmanagement"
                          : service.id === 2
                          ? "/clientintake"
                          : service.id === 3
                          ? "/projectmanagement"
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

      {/* Final CTA */}
      <section className="relative py-20 overflow-hidden bg-paper dark:bg-gray-950">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width text-center relative">
          <h2 className="heading-lg mb-4">
            <span className="text-gradient">
              Ready to supercharge your cash flow?
            </span>
          </h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto">
            Book a free 30-minute call to review your current billing workflows
            and explore practical automations to speed up payments.
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
