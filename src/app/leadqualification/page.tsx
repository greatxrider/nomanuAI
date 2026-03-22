import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import {
  TargetIcon,
  BotIcon,
  PhoneIcon,
  CalendarIcon,
  HeadphonesIcon,
  MessageIcon,
  ShieldIcon,
  ZapIcon,
  UsersIcon,
  BriefcaseIcon,
  SettingsIcon,
  LayersIcon,
  UserIcon,
  TrendingUpIcon,
  LineChartIcon,
  RocketIcon,
  NetworkIcon,
  EyeIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "AI Lead Qualification | NomanuAI",
  description:
    "Automated AI lead qualification that scores, engages, and routes high-value prospects in real time, so your sales team closes more deals and wastes zero time on unqualified leads.",
  keywords: [
    "AI lead qualification",
    "automated lead scoring",
    "lead qualification AI",
    "intelligent lead routing",
    "sales automation AI",
    "CRM lead scoring",
    "conversational lead qualification",
    "lead response automation",
    "NomanuAI",
  ],
  openGraph: {
    title: "AI Lead Qualification | NomanuAI",
    description:
      "AI-powered lead qualification that scores, engages, and routes high-value prospects to your sales team in real time.",
    url: "https://www.nomanuai.com/leadqualification",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Lead Qualification | NomanuAI",
    description:
      "AI-powered lead qualification that scores, engages, and routes high-value prospects to your sales team in real time.",
  },
  alternates: {
    canonical: "/leadqualification",
  },
};

const pageData: ServicePageData = {
  badge: "Lead Qualification Services",
  heroIcon: TargetIcon,
  title: "AI Lead Qualification",
  subtitle: "Close More Deals by Talking to Fewer People",
  description:
    "Your sales team's most expensive resource is their time — and most of it is wasted on leads that were never going to buy. Our AI lead qualification system engages every inbound lead instantly through phone, chat, or SMS, asks the right discovery questions, scores fit and urgency against your ideal customer profile, and routes only the hottest prospects to your closers. Unqualified leads are nurtured automatically until they're ready. The result: shorter sales cycles, higher close rates, and a pipeline that actually converts.",
  statistic: {
    value: "78%",
    label: "of sales go to the company that responds to a lead first",
    source: "Harvard Business Review / InsideSales.com",
  },
  benefits: [
    {
      title: "Instant Lead Response",
      desc: "Every lead is engaged within seconds of form submission or inbound call — no more five-minute response windows costing you the deal.",
    },
    {
      title: "Intelligent Scoring & Ranking",
      desc: "AI evaluates budget, authority, need, and timeline (BANT) through natural conversation and assigns a real-time qualification score.",
    },
    {
      title: "Higher Close Rates",
      desc: "Your sales team only speaks with pre-qualified, high-intent prospects — dramatically increasing conversion rates per rep hour.",
    },
    {
      title: "Automated Lead Nurturing",
      desc: "Leads that aren't ready today enter an AI-powered nurture sequence with personalized touchpoints until they're sales-ready.",
    },
    {
      title: "Real-Time CRM Enrichment",
      desc: "Every conversation updates your CRM with qualification data, call summaries, lead scores, and recommended next actions.",
    },
    {
      title: "Scalable Without Headcount",
      desc: "Handle 10 or 10,000 leads per day without hiring SDRs. AI qualification scales linearly while your costs stay flat.",
    },
  ],
  benefitsIntro:
    "Stop guessing which leads are worth your time. AI qualification gives your sales team a curated pipeline of buyers — not browsers.",
  personas: [
    {
      label: "B2B SaaS Companies",
      icon: RocketIcon,
      copy: "Inbound demo requests are surging but your SDR team can't keep up. AI qualifies every lead and books only the ones worth a demo.",
      size: "10-500 employees",
    },
    {
      label: "Real Estate Agencies",
      icon: BriefcaseIcon,
      copy: "Not every inquiry is a serious buyer. AI asks the right questions — budget, timeline, location — and routes hot leads to the right agent.",
      size: "5-100 agents",
    },
    {
      label: "Financial Services",
      icon: LineChartIcon,
      copy: "Compliance matters. AI qualifies prospects while collecting required disclosures, then routes to licensed advisors with full context.",
      size: "10-200 advisors",
    },
    {
      label: "Home Services & Contractors",
      icon: SettingsIcon,
      copy: "Every call could be a $500 job or a $50,000 project. AI determines scope, urgency, and budget so you bid the right jobs.",
      size: "1-50 crews",
    },
  ],
  personasIntro:
    "Whether you sell software or services, AI lead qualification ensures your team spends time on the opportunities that matter most.",
  features: [
    {
      title: "Conversational Qualification",
      description:
        "The AI engages leads in natural dialogue — asking discovery questions that feel helpful, not interrogative — to uncover true intent and fit.",
      icon: MessageIcon,
    },
    {
      title: "Custom Scoring Models",
      description:
        "Define your ideal customer profile and the AI builds a scoring model around your specific criteria — industry, budget, timeline, company size, and more.",
      icon: TargetIcon,
    },
    {
      title: "Multi-Channel Engagement",
      description:
        "Qualify leads via inbound phone calls, website chat, SMS, or email — the AI adapts its approach based on the channel and lead behavior.",
      icon: NetworkIcon,
    },
    {
      title: "Real-Time Sales Alerts",
      description:
        "When a hot lead is identified, your sales team receives instant notifications via Slack, SMS, email, or CRM task — with full context attached.",
      icon: ZapIcon,
    },
    {
      title: "CRM & Pipeline Integration",
      description:
        "Qualified leads are pushed into your CRM with enriched profiles, conversation transcripts, and recommended deal stages — ready for outreach.",
      icon: SettingsIcon,
    },
    {
      title: "Qualification Analytics",
      description:
        "Track lead volume, qualification rates, conversion by source, response times, and scoring accuracy from a centralized reporting dashboard.",
      icon: LineChartIcon,
    },
  ],
  featuresIntro:
    "From first touch to handoff, every lead interaction is automated, scored, and logged — giving your sales team an unfair advantage.",
  packages: [
    {
      label: "START HERE",
      title: "Lead Flow Audit & Scoring Design",
      price: "$897",
      description:
        "We analyze your current lead sources, define your ideal customer profile, build a custom scoring model, and design the AI qualification conversation flow — delivered as a ready-to-deploy blueprint.",
    },
    {
      label: "MOST POPULAR",
      title: "Full Qualification Deployment",
      price: "Starting at $5,500",
      description:
        "End-to-end implementation of AI lead qualification across all channels — including CRM integration, scoring model training, nurture sequence setup, sales team onboarding, and 30-day optimization.",
      popular: true,
    },
    {
      label: "ONGOING",
      title: "Lead Qualification Retainer",
      price: "$1,200/mo",
      description:
        "Continuous scoring model refinement, new lead source onboarding, conversion analysis, nurture sequence optimization, and priority support to keep your pipeline growing.",
    },
  ],
  packagesIntro:
    "Turn your lead flood into a qualified pipeline. Every package is built to deliver measurable sales impact within 30 days.",
  relatedServices: [
    {
      title: "AI Virtual Receptionist",
      description:
        "Capture every inbound lead with a 24/7 AI receptionist that answers calls, collects information, and feeds qualified leads into your pipeline.",
      icon: BotIcon,
      features: [
        "24/7 call answering",
        "Caller intent capture",
        "CRM logging",
        "Custom brand voice",
      ],
      href: "/virtualreceptionist",
    },
    {
      title: "Intelligent Call Routing",
      description:
        "Once leads are qualified, route them instantly to the right sales rep based on territory, expertise, deal size, or availability.",
      icon: PhoneIcon,
      features: [
        "Skills-based matching",
        "Priority escalation",
        "CRM-informed routing",
        "Overflow handling",
      ],
      href: "/callrouting",
    },
    {
      title: "24/7 AI Customer Support",
      description:
        "After the sale, keep customers happy with AI-powered support that resolves issues fast and identifies upsell opportunities.",
      icon: HeadphonesIcon,
      features: [
        "Ticket automation",
        "Sentiment analysis",
        "Knowledge base AI",
        "Escalation management",
      ],
      href: "/customersupport247",
    },
  ],
  ctaTitle: "Stop Wasting Sales Hours on Bad Leads",
  ctaDescription:
    "Book a free lead flow audit and see exactly how AI qualification can increase your close rate while cutting your cost per acquisition. Most teams see results within the first 30 days.",
};

export default function LeadQualificationPage() {
  return <ServicePageTemplate data={pageData} />;
}
