import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import {
  BotIcon,
  PhoneIcon,
  CalendarIcon,
  TargetIcon,
  HeadphonesIcon,
  GlobeIcon,
  MessageIcon,
  ShieldIcon,
  ZapIcon,
  UsersIcon,
  BriefcaseIcon,
  SettingsIcon,
  LayersIcon,
  UserIcon,
  TrendingUpIcon,
  LandmarkIcon,
  ScaleIcon,
  NetworkIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "AI Virtual Receptionist | NomanuAI",
  description:
    "Never miss a call again. NomanuAI's AI Virtual Receptionist answers every call 24/7 with natural language understanding, custom voice personas, and multi-language support, so your business always sounds professional.",
  keywords: [
    "AI virtual receptionist",
    "AI phone answering",
    "24/7 receptionist",
    "automated call answering",
    "virtual receptionist service",
    "AI receptionist for business",
    "natural language phone AI",
    "multi-language receptionist",
    "NomanuAI",
  ],
  openGraph: {
    title: "AI Virtual Receptionist | NomanuAI",
    description:
      "Never miss a call again. Our AI receptionist answers 24/7 with natural conversation, custom voice personas, and multi-language support.",
    url: "https://www.nomanuai.com/virtualreceptionist",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Virtual Receptionist | NomanuAI",
    description:
      "Never miss a call again. Our AI receptionist answers 24/7 with natural conversation, custom voice personas, and multi-language support.",
  },
  alternates: {
    canonical: "/virtualreceptionist",
  },
};

const pageData: ServicePageData = {
  badge: "AI Receptionist Services",
  heroIcon: BotIcon,
  title: "AI Virtual Receptionist",
  subtitle: "Your Always-On, Always-Professional Front Desk",
  description:
    "Missed calls are missed revenue. Our AI Virtual Receptionist picks up every call in under two rings — 24 hours a day, 365 days a year. It greets callers with a natural, human-like voice tailored to your brand, handles FAQs, captures caller details, and routes conversations intelligently. With multi-language support and real-time CRM logging, your business never sleeps and never sounds unprofessional.",
  statistic: {
    value: "80%",
    label: "of callers who reach voicemail will not leave a message and won't call back",
    source: "Forbes / Numa Research",
  },
  benefits: [
    {
      title: "Zero Missed Calls",
      desc: "Every inbound call is answered instantly — nights, weekends, and holidays included — so you capture every opportunity.",
    },
    {
      title: "Natural, Human-Like Conversations",
      desc: "Advanced NLP delivers fluid dialogue, not robotic scripts. Callers feel heard and guided, not frustrated.",
    },
    {
      title: "Custom Brand Voice",
      desc: "Choose the tone, personality, and vocabulary that match your brand. Your AI receptionist sounds like your best team member.",
    },
    {
      title: "Multi-Language Support",
      desc: "Serve diverse customer bases seamlessly with support for English, Spanish, French, and dozens more languages on every call.",
    },
    {
      title: "Instant CRM Logging",
      desc: "Call summaries, caller intent, and contact info are pushed to your CRM in real time — no manual data entry required.",
    },
    {
      title: "Dramatic Cost Savings",
      desc: "Replace or supplement a full-time receptionist at a fraction of the cost while improving availability and consistency.",
    },
  ],
  benefitsIntro:
    "An AI receptionist doesn't just answer calls — it transforms how your business connects with every caller, every time.",
  personas: [
    {
      label: "Small Business Owners",
      icon: BriefcaseIcon,
      copy: "You wear every hat. Let AI handle the phone so you can focus on growing your business instead of playing phone tag.",
      size: "1-20 employees",
    },
    {
      label: "Medical & Dental Practices",
      icon: ShieldIcon,
      copy: "Patients expect a live answer. Our HIPAA-aware AI receptionist schedules, triages, and routes calls without hold music.",
      size: "5-100 staff",
    },
    {
      label: "Legal Firms",
      icon: ScaleIcon,
      copy: "First impressions close cases. A polished AI receptionist captures intake details and qualifies leads before they call a competitor.",
      size: "2-50 attorneys",
    },
    {
      label: "Property Management",
      icon: LandmarkIcon,
      copy: "Tenant emergencies don't wait until Monday. Our AI answers maintenance requests and escalates urgencies around the clock.",
      size: "50-500 units",
    },
  ],
  personasIntro:
    "Whether you're a solo practitioner or a growing enterprise, our AI receptionist adapts to your workflow and your callers' expectations.",
  features: [
    {
      title: "24/7 Live Call Answering",
      description:
        "Calls are answered in under two rings at any hour. No voicemail black holes, no missed opportunities.",
      icon: PhoneIcon,
    },
    {
      title: "Intelligent Call Screening",
      description:
        "The AI identifies caller intent, filters spam, and prioritizes urgent calls — delivering only what matters to your team.",
      icon: ShieldIcon,
    },
    {
      title: "Dynamic FAQ Handling",
      description:
        "Train the AI on your business-specific questions so it can resolve common inquiries without transferring a single call.",
      icon: MessageIcon,
    },
    {
      title: "Warm Call Transfers",
      description:
        "When human attention is needed, the AI briefs your team before connecting — so they're prepared, not blindsided.",
      icon: UsersIcon,
    },
    {
      title: "Real-Time Transcription & Summaries",
      description:
        "Every call is transcribed and summarized automatically, creating a searchable record inside your CRM or dashboard.",
      icon: LayersIcon,
    },
    {
      title: "Multi-Location Support",
      description:
        "One AI receptionist can serve multiple offices or business lines, each with its own greeting, routing rules, and escalation paths.",
      icon: NetworkIcon,
    },
  ],
  featuresIntro:
    "Our AI receptionist is loaded with enterprise-grade capabilities that work out of the box — and scale as you grow.",
  packages: [
    {
      label: "START HERE",
      title: "Receptionist Discovery & Setup",
      price: "$797",
      description:
        "We audit your current call flow, design a custom AI voice persona, configure greetings and FAQ responses, and launch a pilot on your primary business line within two weeks.",
    },
    {
      label: "MOST POPULAR",
      title: "Full AI Receptionist Deployment",
      price: "Starting at $4,500",
      description:
        "Complete implementation across all business lines — including CRM integration, multi-language configuration, custom call routing logic, staff training, and 30 days of optimization.",
      popular: true,
    },
    {
      label: "ONGOING",
      title: "Managed Receptionist Retainer",
      price: "$997/mo",
      description:
        "Continuous monitoring, monthly prompt tuning, new FAQ training, call analytics reporting, and priority support to keep your AI receptionist performing at its best.",
    },
  ],
  packagesIntro:
    "Start with a focused pilot or go all-in — every package is designed to deliver ROI from day one.",
  relatedServices: [
    {
      title: "Intelligent Call Routing",
      description:
        "Pair your AI receptionist with smart call distribution to ensure every caller reaches the right person or department instantly.",
      icon: PhoneIcon,
      features: [
        "Intent-based routing",
        "Overflow handling",
        "Priority queuing",
        "Department mapping",
      ],
      href: "/callrouting",
    },
    {
      title: "AI Appointment Scheduling",
      description:
        "Let your receptionist do more than answer — have it book, reschedule, and confirm appointments in real time.",
      icon: CalendarIcon,
      features: [
        "Conversational booking",
        "Calendar sync",
        "Automated reminders",
        "No-show reduction",
      ],
      href: "/appointmentscheduling",
    },
    {
      title: "24/7 AI Customer Support",
      description:
        "Extend your receptionist into a full support agent that resolves tickets, answers complex queries, and escalates with context.",
      icon: HeadphonesIcon,
      features: [
        "Ticket automation",
        "Knowledge base AI",
        "Sentiment analysis",
        "Omnichannel support",
      ],
      href: "/customersupport247",
    },
  ],
  ctaTitle: "Stop Losing Callers to Voicemail",
  ctaDescription:
    "Book a free demo and hear your custom AI receptionist in action. Most businesses are live within two weeks — with zero disruption to existing operations.",
};

export default function VirtualReceptionistPage() {
  return <ServicePageTemplate data={pageData} />;
}
