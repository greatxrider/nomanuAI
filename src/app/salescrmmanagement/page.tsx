
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
} from "@/components/icons/PremiumIcons";

// Create alias for WorkflowIcon to match previous usage if needed, or just use WorkflowIcon
const Workflow = WorkflowIcon;
const MessageSquare = MessageIcon;
const Bot = BotIcon;
const Mail = MailIcon;
const LineChart = LineChartIcon;
const Users = UsersIcon;
const Briefcase = BriefcaseIcon;
const Scale = ScaleIcon;
const Landmark = LandmarkIcon;
const UserCheck = UserIcon; // Mapping UserCheck to UserIcon or similar
const CheckSquare = CheckIcon; // Mapping CheckSquare to CheckIcon
const CreditCard = CreditCardIcon;
const Share2 = ShareIcon;

export default function SalesCRMManagementPage() {
  return (
    <main className="min-h-screen transition-colors duration-300">


      {/* Hero Section - AI Inspired */}
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
                CRM Management Services
              </span>
            </div>
            <h1 className="heading-display mb-3">
              <span className="honey-shimmer">
                CRM Management
              </span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-brand-orange mb-4">
              Turn your CRM into a revenue-generating machine
            </p>
            <p className="text-body-lg mb-8 max-w-3xl">
              Most businesses use only 20% of their CRM's capabilities. We help
              you unlock the other 80% through smart automation, clean data
              processes, and workflows that actually get used by your team.
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
      {/* Pattern B */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="card-honeycomb p-8">
            <div className="text-6xl font-bold text-brand-orange mb-3">76%</div>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              of businesses say less than half of their CRM data is accurate or
              complete
            </p>
            <p className="text-body">
              According to Validity's 2025 State of CRM Data Management report,
              incomplete and inaccurate CRM records, caused by manual entry,
              poor adoption, and disconnected tools, cost companies millions in
              lost opportunities.
            </p>
          </div>
          <div className="card-honeycomb p-8">
            <p className="italic text-body-lg mb-4">
              "Before working with NomanuAI, our team spent 3 hours a day on
              data entry. Now that time goes to actual selling. Our pipeline
              visibility improved 300% and our close rate went up 18%."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 clip-hex overflow-hidden border-2 border-brand-orange flex-shrink-0">
                <Image
                  src="/testimonialsPicture/yvonne-photo.jpg"
                  alt="Yvonne - Business Owner, Haivyne"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold">
                  — Yvonne, Business Owner, Haivyne
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit-Focused Section */}
      {/* Pattern C */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="salescrmmanagement-benefits-honeycomb" />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">
              What we actually do for your CRM
            </span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">
            We don't just set up your CRM and walk away. We build sustainable
            systems that your team will actually use, with ongoing support to
            ensure adoption and ROI.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Data cleanup & migration",
                desc: "Remove duplicates, standardize formats, and migrate your data without losing important history.",
              },
              {
                title: "Custom automation workflows",
                desc: "Lead scoring, follow-up sequences, and task creation that matches how your team actually works.",
              },
              {
                title: "Integration with your tools",
                desc: "Connect your CRM to email, calendar, marketing tools, and accounting software seamlessly.",
              },
              {
                title: "Team training & adoption",
                desc: "We train your team on the new processes and provide documentation so nothing gets forgotten.",
              },
              {
                title: "Reporting & analytics setup",
                desc: "Build dashboards that show you what's actually moving the needle for your business.",
              },
              {
                title: "Ongoing optimization",
                desc: "Monthly check-ins to refine workflows and add new automations as your business grows.",
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
              CRM platforms we work with
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We specialize in the leading CRM platforms:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/crmLogo/hubspot-logo.png"
                  alt="HubSpot"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/crmLogo/salesforce-logo.png"
                  alt="Salesforce"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/crmLogo/zoho-logo.png"
                  alt="Zoho"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/crmLogo/highlevel-logo.png"
                  alt="GoHighLevel"
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
      {/* Pattern A */}
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
            Our CRM management services work best for growing businesses that
            have outgrown basic contact management but aren't quite ready for a
            full sales operations team.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Real Estate Agencies & Teams",
                icon: Landmark,
                copy: "Coordinate leads, follow-ups, and pipeline stages across agents without manual tracking.",
                size: "Teams of 3-25 agents",
              },
              {
                label: "Digital Marketing Agencies",
                icon: Users,
                copy: "Centralize client onboarding, approvals, and reporting with automated workflows.",
                size: "5-50 team members",
              },
              {
                label: "B2B SaaS Startups",
                icon: LineChart,
                copy: "Connect product usage data to your CRM for clean pipelines, health scores, and renewals.",
                size: "Seed to Series B",
              },
              {
                label: "Professional Services (Legal, Accounting, Consulting)",
                icon: Scale,
                copy: "Automate intake, engagement letters, task handoffs, and billing with audit-ready records.",
                size: "Solo to 25+ staff",
              },
              {
                label: "E-commerce Brands",
                icon: Briefcase,
                copy: "Unify customer, order, and support data for targeted campaigns and higher LTV.",
                size: "$500K-$50M revenue",
              },
            ].map(({ label, icon: Icon, copy, size }) => (
              <div
                key={label}
                className="card-honeycomb p-6"
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className="icon-hex w-10 h-10">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
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
            These are real examples from recent client projects. We customize
            everything to match your specific sales process and business needs.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "Lead qualification chatbot",
                description:
                  "Captures visitor info, asks qualifying questions, schedules demos for qualified leads automatically",
                icon: Bot,
              },
              {
                title: "Follow-up sequence automation",
                description:
                  "Sends personalized emails based on lead behavior, creates tasks for sales reps at optimal times",
                icon: Mail,
              },
              {
                title: "Deal pipeline reporting",
                description:
                  "Daily dashboards showing win rates, deal velocity, and bottlenecks by rep and stage",
                icon: LineChart,
              },
              {
                title: "Customer onboarding workflows",
                description:
                  "Automatically creates project records, assigns team members, sends welcome sequences",
                icon: Workflow,
              },
              {
                title: "Meeting summary automation",
                description:
                  "Records key points from sales calls, updates deal records, creates follow-up tasks",
                icon: MessageSquare,
              },
              {
                title: "Renewal reminder system",
                description:
                  "Tracks contract end dates, alerts account managers, triggers renewal conversations",
                icon: Mail,
              },
            ].map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="card-honeycomb p-6"
              >
                <div className="flex items-start space-x-3 mb-3">
                  <div className="icon-hex w-10 h-10">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
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
      {/* Pattern C */}
      <section className="relative py-32 bg-paper dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="salescrmmanagement-packages-honeycomb" />
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
                CRM Health Check
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                $497 (2 hour session)
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                We'll review your current setup, identify the biggest gaps, and
                give you a prioritized action plan. Great if you're not sure
                where to start or want a second opinion.
              </p>
              <Link href="/#contact" className="btn-primary w-full text-center">
                Book Session
              </Link>
            </div>

            {/* Most Popular */}
            <div className="card-honeycomb p-8 border-2 border-brand-orange/60 shadow-lg">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mb-2">
                MOST POPULAR
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                Complete CRM Setup
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Starting at $3,500
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                We clean up your data, build custom automations, set up
                reporting, and train your team. Includes 30 days of support
                after launch to ensure everything works smoothly.
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
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                Monthly Optimization
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                $1,200/month
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                Monthly check-ins to optimize workflows, add new automations,
                and keep your system running as your business evolves. Includes
                priority support and quarterly strategy sessions.
              </p>
              <Link href="/#contact" className="btn-primary w-full text-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Solutions (Cross-Sell) */}
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
            CRM management works best when it's connected to your other business
            processes. We also help with these common adjacent needs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
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
                href: "/clientintake",
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

      {/* Final CTA */}
      {/* Pattern B */}
      <section className="relative py-20 overflow-hidden bg-paper dark:bg-gray-950">
        <div className="absolute top-0 left-0 right-0 divider-honeycomb" />
        <div className="absolute bottom-0 left-0 right-0 divider-honeycomb" />

        <div className="container-width text-center relative">
          <h2 className="heading-lg mb-4">
            <span className="text-gradient">
              Ready to turn your CRM into a growth engine?
            </span>
          </h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto">
            Book a free 30-minute call to discuss your current setup and see if
            we're a good fit. No sales pitch, just an honest conversation about
            your CRM challenges.
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
