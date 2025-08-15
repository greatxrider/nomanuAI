import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  CheckCircle2,
  Users,
  Briefcase,
  Scale,
  Landmark,
  Bot,
  Mail,
  Workflow,
  LineChart,
  MessageSquare,
} from "lucide-react";

export default function SalesCRMManagementPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      {/* Hero Section - AI Inspired */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
        {/* Enhanced AI Background - matching main page */}
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
            ].map((particle, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-brand-orange rounded-full animate-pulse opacity-30"
                data-left={particle.left}
                data-top={particle.top}
                data-delay={particle.delay}
                data-duration={particle.duration}
              />
            ))}
          </div>

          {/* Gradient Orbs */}
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-orange/10 rounded-full filter blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-orange/8 rounded-full filter blur-3xl animate-pulse animation-delay-300" />
        </div>

        <div className="container-width relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/30 backdrop-blur-sm mb-5">
              <Bot className="w-5 h-5 text-brand-orange" />
              <span className="text-sm font-medium text-brand-orange">
                CRM Management Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3">
              <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
                CRM Management
              </span>
            </h1>
            <p className="text-lg md:text-xl font-semibold text-brand-orange mb-4">
              Turn your CRM into a revenue-generating machine
            </p>
            <p className="text-base md:text-lg lg:text-xl mb-8 text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
              Most businesses use only 20% of their CRM's capabilities. We help
              you unlock the other 80% through smart automation, clean data
              processes, and workflows that actually get used by your team.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/#contact" className="btn-primary">
                Book a Call
              </Link>
              <Link href="/#projects" className="btn-outline">
                See Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Statistic Section */}
      <section className="section-padding">
        <div className="container-width grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="card-branded rounded-2xl p-8">
            <div className="text-4xl font-bold text-brand-orange mb-3">73%</div>
            <p className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              of sales data never makes it into the CRM
            </p>
            <p className="body-md">
              According to Salesforce research. Manual data entry, poor
              adoption, and disconnected tools create gaps that cost businesses
              millions in lost opportunities.
            </p>
          </div>
          <div className="card-branded rounded-2xl p-8">
            <p className="italic body-lg mb-4">
              "Before working with NomanuAI, our team spent 3 hours a day on
              data entry. Now that time goes to actual selling. Our pipeline
              visibility improved 300% and our close rate went up 18%."
            </p>
            <p className="text-gray-900 dark:text-white font-semibold">
              — Sarah Chen, VP Sales, TechFlow Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Benefit-Focused Section */}
      <section className="section-padding bg-gradient-subtle dark:bg-gradient-subtle">
        <div className="container-width">
          <h2 className="heading-lg mb-2">What we actually do for your CRM</h2>
          <div className="accent-line mb-4" />
          <p className="body-lg mb-10 max-w-3xl">
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
              <div key={item.title} className="card-branded rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="card-branded rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              CRM platforms we work with
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We're certified in the major platforms and can work with whatever
              you're currently using:
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              {[
                "HubSpot",
                "Salesforce",
                "Pipedrive",
                "Monday.com",
                "Zoho CRM",
                "Close",
                "ActiveCampaign",
                "Airtable",
                "GoHighLevel",
                "Keap",
              ].map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Work With */}
      <section className="section-padding">
        <div className="container-width">
          <h2 className="heading-lg mb-2">Who typically needs this</h2>
          <div className="accent-line mb-4" />
          <p className="body-lg mb-10 max-w-3xl">
            Our CRM management services work best for growing businesses that
            have outgrown basic contact management but aren't quite ready for a
            full sales operations team.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "SaaS Startups",
                icon: Users,
                copy: "Need to track product usage data alongside sales metrics to optimize customer success.",
                size: "10-50 employees",
              },
              {
                label: "Professional Services",
                icon: Briefcase,
                copy: "Want to automate client intake, project kickoff, and invoice generation workflows.",
                size: "5-30 employees",
              },
              {
                label: "B2B Sales Teams",
                icon: Scale,
                copy: "Struggling with lead qualification, follow-up consistency, and accurate forecasting.",
                size: "3-25 sales reps",
              },
              {
                label: "E-commerce Brands",
                icon: Landmark,
                copy: "Need to connect customer data from multiple channels into one organized system.",
                size: "$500K-$10M revenue",
              },
            ].map(({ label, icon: Icon, copy, size }) => (
              <div key={label} className="card-branded rounded-xl p-6">
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
      <section className="section-padding bg-gradient-subtle dark:bg-gradient-subtle">
        <div className="container-width">
          <h2 className="heading-lg mb-2">Common automations we build</h2>
          <div className="accent-line mb-4" />
          <p className="body-lg mb-10 max-w-3xl">
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
                timeline: "2-3 weeks to build",
              },
              {
                title: "Follow-up sequence automation",
                description:
                  "Sends personalized emails based on lead behavior, creates tasks for sales reps at optimal times",
                icon: Mail,
                timeline: "1-2 weeks to build",
              },
              {
                title: "Deal pipeline reporting",
                description:
                  "Daily dashboards showing win rates, deal velocity, and bottlenecks by rep and stage",
                icon: LineChart,
                timeline: "3-4 weeks to build",
              },
              {
                title: "Customer onboarding workflows",
                description:
                  "Automatically creates project records, assigns team members, sends welcome sequences",
                icon: Workflow,
                timeline: "2-3 weeks to build",
              },
              {
                title: "Meeting summary automation",
                description:
                  "Records key points from sales calls, updates deal records, creates follow-up tasks",
                icon: MessageSquare,
                timeline: "3-4 weeks to build",
              },
              {
                title: "Renewal reminder system",
                description:
                  "Tracks contract end dates, alerts account managers, triggers renewal conversations",
                icon: Mail,
                timeline: "1-2 weeks to build",
              },
            ].map(({ title, description, icon: Icon, timeline }) => (
              <div key={title} className="card-branded rounded-xl p-6">
                <div className="flex items-start space-x-3 mb-3">
                  <Icon className="w-6 h-6 text-brand-orange mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {title}
                    </h3>
                    <p className="text-xs text-brand-orange font-medium">
                      {timeline}
                    </p>
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
      <section className="section-padding">
        <div className="container-width">
          <h2 className="heading-lg mb-2">How we can help</h2>
          <div className="accent-line mb-4" />
          <p className="body-lg mb-10 max-w-3xl">
            We offer three ways to work together, depending on where you are and
            what you need.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quick Assessment */}
            <div className="card-branded rounded-2xl p-8">
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
              <Link href="/#contact" className="btn-primary">
                Book Session
              </Link>
            </div>

            {/* Most Popular */}
            <div className="card-branded rounded-2xl p-8 border-2 border-brand-orange/60 shadow-lg">
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
              <Link href="/#contact" className="btn-primary">
                Get Quote
              </Link>
            </div>

            {/* Ongoing Partnership */}
            <div className="card-branded rounded-2xl p-8">
              <p className="text-xs uppercase tracking-wider font-semibold text-brand-orange mb-2">
                ONGOING
              </p>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
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
              <Link href="/#contact" className="btn-primary">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Solutions (Cross-Sell) */}
      <section className="section-padding bg-gradient-subtle dark:bg-gradient-subtle">
        <div className="container-width">
          <h2 className="heading-lg mb-2">Related services</h2>
          <div className="accent-line mb-4" />
          <p className="body-lg mb-10 max-w-3xl">
            CRM management works best when it's connected to your other business
            processes. We also help with these common adjacent needs.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Client Onboarding",
                description:
                  "Automate new customer welcome sequences and project kickoff workflows",
              },
              {
                name: "Project Management",
                description:
                  "Connect your CRM to project tools for seamless client delivery tracking",
              },
              {
                name: "Invoice Management",
                description:
                  "Automatically generate and send invoices based on project milestones",
              },
              {
                name: "Marketing Automation",
                description:
                  "Connect lead generation campaigns to your CRM for better attribution",
              },
            ].map(({ name, description }) => (
              <Link
                key={name}
                href="/#services"
                className="card-branded rounded-xl p-6 hover-glow block"
              >
                <h4 className="text-gray-900 dark:text-white font-semibold mb-2">
                  {name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-6 right-10 w-48 h-48 rounded-full bg-brand-orange/10 blur-3xl" />
        </div>
        <div className="container-width text-center relative">
          <h2 className="heading-lg mb-4">
            Ready to turn your CRM into a growth engine?
          </h2>
          <p className="body-lg mb-8 max-w-2xl mx-auto">
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
