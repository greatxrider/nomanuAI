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
  CameraIcon, // Assuming CameraIcon exists or mapping it
  VideoIcon, // Assuming VideoIcon exists or mapping it
  EditIcon, // Assuming EditIcon exists or mapping it
  HeartIcon, // Assuming HeartIcon exists or mapping it
  EyeIcon,
  BarChartIcon, // Assuming BarChartIcon exists or mapping it
  HashIcon, // Assuming HashIcon exists or mapping it
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
const Hash = HashIcon || ShareIcon; // Fallback
const Camera = CameraIcon || EyeIcon; // Fallback
const Video = VideoIcon || EyeIcon; // Fallback
const Edit3 = EditIcon || FileTextIcon; // Fallback
const Heart = HeartIcon || ShareIcon; // Fallback
const Eye = EyeIcon;
const BarChart3 = BarChartIcon || LineChartIcon; // Fallback
const ArrowRight = ArrowRightIcon;

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-paper dark:bg-gray-950 transition-colors duration-300">


      {/* Hero Section - AI Inspired */}
      {/* Pattern A */}
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
                Social Media Content Services
              </span>
            </div>
            <h1 className="heading-display mb-3">
              <span className="honey-shimmer">
                Social Media Content
              </span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-brand-orange mb-4">
              Build a consistent social presence with practical automation
            </p>
            <p className="text-body-lg mb-8 max-w-3xl">
              We set up dependable content calendars, reusable templates, and
              scheduling so you stay visible and engage your audience without
              daily posting.
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
            <div className="text-6xl font-bold text-brand-orange mb-3">73%</div>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              of businesses struggle to maintain consistent social media posting
            </p>
            <p className="text-body">
              According to Sprout Social's State of Social Media report, content
              planning, creation, and consistent posting across multiple
              platforms overwhelm most marketing teams, leading to inconsistent
              brand presence and missed engagement opportunities.
            </p>
          </div>
          <div className="card-honeycomb p-8">
            <p className="italic text-body-lg mb-4">
              "Before working with NomanuAI, our social media was hit-or-miss.
              Now we post consistently across 5 platforms, our engagement is up
              200%, and I spend 2 hours a week instead of 15 on social media."
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 clip-hex overflow-hidden border-2 border-brand-orange flex-shrink-0">
                <Image
                  src="/testimonialsPicture/yvonne-photo.jpg"
                  alt="Yvonne - Marketing Director, Haivyne"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-gray-900 dark:text-white font-semibold">
                  — Yvonne, Marketing Director, Haivyne
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefit-Focused Section */}
      {/* Pattern C */}
      <section className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden">
        {/* Paper + Honeycomb Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="social-benefits-honeycomb" />
        </div>

        <div className="container-width relative z-10">
          <h2 className="heading-lg mb-2">
            <span className="text-gradient">
              What we actually do for your social media
            </span>
          </h2>
          <div className="hex-accent-line mb-4" />
          <p className="text-body-lg mb-10 max-w-3xl">
            We set up reliable content workflows—planning, templates,
            scheduling, and simple reporting—so you publish consistently with
            clear processes your team can follow.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: "Content planning & calendar",
                desc: "Plan themes and schedule posts around your goals and audience with a simple, reusable calendar.",
              },
              {
                title: "Reusable content templates",
                desc: "Create post and caption templates and prompts your team can reuse for faster creation.",
              },
              {
                title: "Multi-platform publishing",
                desc: "Schedule and tailor posts for Facebook, Instagram, LinkedIn, and X using best-practice presets.",
              },
              {
                title: "Engagement alerts & helpers",
                desc: "Monitor comments and mentions, and use saved replies to respond faster without the noise.",
              },
              {
                title: "Simple performance snapshots",
                desc: "Track reach and engagement with lightweight dashboards and weekly summaries.",
              },
              {
                title: "Content repurposing",
                desc: "Turn blogs and videos into multiple post formats to save time and stay consistent.",
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
              Social media platforms we work with
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We specialize in the leading social media and content platforms:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/facebook-logo.svg"
                  alt="Facebook"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/instagram-logo.png"
                  alt="Instagram"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/linkedin-logo.png"
                  alt="LinkedIn"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/x-logo.png"
                  alt="X (Twitter)"
                  width={160}
                  height={48}
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/60 dark:border-gray-700/60 hex-cut-sm p-4 w-full flex items-center justify-center">
                <Image
                  src="/servicesApps/youtube-logo.png"
                  alt="YouTube"
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
        {/* Gradient + Texture Background */}
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
            Our social media automation services work best for businesses that
            understand the importance of social presence but lack the time or
            resources to maintain consistent, engaging content.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Small Business Owners",
                icon: Briefcase,
                copy: "Maintain professional social presence while focusing on core business operations and customer service.",
                size: "Solo to 10 employees",
              },
              {
                label: "Marketing Agencies",
                icon: Users,
                copy: "Scale social media services for multiple clients with automated content creation and publishing workflows.",
                size: "Agencies managing 10+ clients",
              },
              {
                label: "Content Creators & Influencers",
                icon: Camera,
                copy: "Amplify reach across platforms, repurpose content efficiently, and maintain consistent posting schedules.",
                size: "Individual creators & teams",
              },
              {
                label: "E-commerce Brands",
                icon: Settings,
                copy: "Showcase products, engage customers, and drive sales through automated social commerce strategies.",
                size: "$50K-$5M revenue",
              },
              {
                label: "Professional Services",
                icon: Scale,
                copy: "Build thought leadership, share expertise, and attract clients through consistent, valuable content.",
                size: "Consultants to 50+ staff",
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
            everything to match your brand voice, audience, and business goals.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                title: "AI-powered content calendar",
                description:
                  "Automatically generates content ideas, captions, and posting schedules based on your industry, audience engagement, and business goals",
                icon: Calendar,
              },
              {
                title: "Cross-platform publishing",
                description:
                  "Formats and publishes content optimally for each platform while maintaining brand consistency across all channels",
                icon: Share2,
              },
              {
                title: "Engagement monitoring & response",
                description:
                  "Tracks mentions, comments, and messages across platforms with automated responses and escalation for important interactions",
                icon: MessageSquare,
              },
              {
                title: "Content repurposing workflows",
                description:
                  "Transforms blog posts, videos, and other content into multiple social media formats, saving hours of manual work",
                icon: Edit3,
              },
              {
                title: "Performance analytics dashboard",
                description:
                  "Real-time tracking of reach, engagement, and conversion metrics with insights to optimize content strategy",
                icon: BarChart3,
              },
              {
                title: "Hashtag research & optimization",
                description:
                  "Automatically researches and suggests trending, relevant hashtags to maximize reach and discoverability",
                icon: Hash,
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
      {/* Pattern C */}
      <section className="relative py-32 bg-paper dark:bg-gray-950 overflow-hidden">
        {/* Honeycomb Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.25] dark:opacity-15" style={{ backgroundImage: "url('/assets/beeInspiration/5303586.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="absolute inset-0 bg-paper/60 dark:bg-gray-950/80" />
          <DarkHoneycombBackground patternId="social-packages-honeycomb" />
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
                Social Media Strategy Audit
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                We'll analyze your current social media presence, identify
                missed opportunities, and give you a prioritized automation
                roadmap. Perfect if you want to understand what's possible.
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
                Complete Social Media Automation
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                We build your entire automated social media system with content
                planning, creation, publishing, and analytics. Includes training
                and 30 days of support after launch.
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
                Monthly Content Optimization
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm leading-relaxed">
                Monthly optimization of your content strategy, performance
                monitoring, and continuous improvements. Includes priority
                support and quarterly strategy sessions.
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
        {/* Enhanced AI Background - Same as Home/About section */}
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
            Social media automation works best when it's connected to your other
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
                          : service.id === 4
                          ? "/billingpayment"
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
              Ready to automate your social media success?
            </span>
          </h2>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto">
            Book a free 30-minute call to discuss your current social media
            challenges and see how we can help you build consistent online
            presence.
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
