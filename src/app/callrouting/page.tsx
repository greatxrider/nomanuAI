import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import {
  PhoneIcon,
  BotIcon,
  CalendarIcon,
  TargetIcon,
  HeadphonesIcon,
  NetworkIcon,
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
  GlobeIcon,
  RocketIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "Intelligent Call Routing | NomanuAI",
  description:
    "AI-powered call routing that detects caller intent in real time and connects every call to the right person, department, or workflow — eliminating transfers, hold times, and lost leads.",
  keywords: [
    "intelligent call routing",
    "AI call distribution",
    "smart call transfer",
    "intent-based routing",
    "call overflow handling",
    "automated call routing",
    "AI phone system",
    "call center AI",
    "NomanuAI",
  ],
  openGraph: {
    title: "Intelligent Call Routing | NomanuAI",
    description:
      "AI-powered call routing that detects intent and connects every caller to the right destination — zero hold time, zero wasted transfers.",
    url: "https://www.nomanuai.com/callrouting",
  },
  twitter: {
    card: "summary_large_image",
    title: "Intelligent Call Routing | NomanuAI",
    description:
      "AI-powered call routing that detects intent and connects every caller to the right destination — zero hold time, zero wasted transfers.",
  },
  alternates: {
    canonical: "/callrouting",
  },
};

const pageData: ServicePageData = {
  badge: "Call Routing Services",
  heroIcon: PhoneIcon,
  title: "Intelligent Call Routing",
  subtitle: "Every Call, Right Person, First Time",
  description:
    "Traditional phone trees frustrate callers and cost you business. Our AI-powered call routing listens to what callers actually say, determines their intent in seconds, and connects them to the right person or department — no button-pressing menus, no blind transfers, no hold music marathons. It handles overflow, after-hours escalation, and priority queuing automatically, so your team only receives calls they're equipped to handle.",
  statistic: {
    value: "68%",
    label: "of customers say being transferred between departments is the most frustrating service experience",
    source: "Salesforce State of the Connected Customer",
  },
  benefits: [
    {
      title: "First-Call Resolution",
      desc: "Callers reach the right person on the first try — eliminating the transfers and repeating that drive customers away.",
    },
    {
      title: "Intent-Based Detection",
      desc: "Natural language understanding identifies why someone is calling within the first few seconds of conversation, not after five menu prompts.",
    },
    {
      title: "Zero Hold Time Overflow",
      desc: "When your team is at capacity, AI handles the overflow — taking messages, scheduling callbacks, or resolving queries independently.",
    },
    {
      title: "Priority Call Escalation",
      desc: "VIP clients, urgent issues, and high-value leads are automatically flagged and fast-tracked to senior staff or on-call teams.",
    },
    {
      title: "After-Hours Intelligence",
      desc: "Calls outside business hours are routed to AI-powered voicemail, on-call staff, or emergency protocols — never to a dead end.",
    },
    {
      title: "Actionable Call Analytics",
      desc: "Every routing decision is logged with intent data, wait times, and outcomes so you can continuously optimize your call flow.",
    },
  ],
  benefitsIntro:
    "Intelligent routing doesn't just move calls faster — it makes every caller feel like they're your only caller.",
  personas: [
    {
      label: "Multi-Department Businesses",
      icon: NetworkIcon,
      copy: "Sales, support, billing, operations — AI routes callers to the correct department by understanding what they need, not what button they press.",
      size: "20-500 employees",
    },
    {
      label: "Healthcare Providers",
      icon: ShieldIcon,
      copy: "Route patient calls to scheduling, nursing, billing, or pharmacy without revealing PHI. HIPAA-aware routing keeps your practice compliant.",
      size: "10-200 staff",
    },
    {
      label: "Call Centers & BPOs",
      icon: HeadphonesIcon,
      copy: "Reduce average handle time and agent burnout by ensuring each call arrives pre-qualified with context and intent already captured.",
      size: "50-1,000 agents",
    },
    {
      label: "Professional Services Firms",
      icon: BriefcaseIcon,
      copy: "Clients expect to reach their advisor directly. AI identifies the caller and routes to the right partner, associate, or assistant instantly.",
      size: "5-100 professionals",
    },
  ],
  personasIntro:
    "From lean teams to enterprise call centers, intelligent routing scales to match any business structure.",
  features: [
    {
      title: "Natural Language Intent Detection",
      description:
        "The AI listens to the caller's opening statement and classifies intent in real time — no IVR menus, no key presses required.",
      icon: MessageIcon,
    },
    {
      title: "Skills-Based Agent Matching",
      description:
        "Calls are matched to agents or team members based on expertise, availability, language, and historical performance data.",
      icon: UsersIcon,
    },
    {
      title: "Automatic Overflow Handling",
      description:
        "When queues fill up, AI seamlessly takes over — capturing details, offering callbacks, or resolving the issue without human intervention.",
      icon: LayersIcon,
    },
    {
      title: "CRM-Informed Routing",
      description:
        "Caller ID is matched against your CRM instantly, enabling personalized greetings and routing based on account history and status.",
      icon: SettingsIcon,
    },
    {
      title: "Time & Location Rules",
      description:
        "Set routing rules by time of day, caller geography, or business unit. The AI adapts in real time as conditions change.",
      icon: GlobeIcon,
    },
    {
      title: "Live Dashboard & Reporting",
      description:
        "Monitor call volume, routing accuracy, wait times, and resolution rates from a single real-time dashboard.",
      icon: LineChartIcon,
    },
  ],
  featuresIntro:
    "Built on enterprise telephony infrastructure with AI intelligence layered on top — powerful enough for call centers, simple enough for small teams.",
  packages: [
    {
      label: "START HERE",
      title: "Call Flow Audit & Design",
      price: "$697",
      description:
        "We map your existing call flow, identify bottlenecks and missed routing opportunities, design an optimized AI routing schema, and deliver a ready-to-implement blueprint.",
    },
    {
      label: "MOST POPULAR",
      title: "Full Routing Implementation",
      price: "Starting at $3,500",
      description:
        "End-to-end deployment of AI call routing across your phone system — including intent model training, CRM integration, overflow logic, staff onboarding, and 30-day tuning period.",
      popular: true,
    },
    {
      label: "ONGOING",
      title: "Routing Optimization Retainer",
      price: "$750/mo",
      description:
        "Monthly call flow analysis, intent model retraining, new department/team onboarding, routing rule updates, and priority technical support.",
    },
  ],
  packagesIntro:
    "Whether you need a routing audit or a complete overhaul, we build call flows that callers actually appreciate.",
  relatedServices: [
    {
      title: "AI Virtual Receptionist",
      description:
        "Combine intelligent routing with a 24/7 AI receptionist that answers, screens, and qualifies every inbound call before routing.",
      icon: BotIcon,
      features: [
        "24/7 call answering",
        "Custom brand voice",
        "Multi-language support",
        "FAQ handling",
      ],
      href: "/virtualreceptionist",
    },
    {
      title: "AI Appointment Scheduling",
      description:
        "Route scheduling-related calls directly to an AI booking agent that handles availability checks, confirmations, and reminders.",
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
      title: "AI Lead Qualification",
      description:
        "Before routing sales calls, let AI qualify the lead — scoring urgency, budget, and fit so your closers only talk to real prospects.",
      icon: TargetIcon,
      features: [
        "Automated lead scoring",
        "CRM integration",
        "Real-time alerts",
        "Conversation intelligence",
      ],
      href: "/leadqualification",
    },
  ],
  ctaTitle: "End the Transfer Runaround",
  ctaDescription:
    "See how AI call routing can cut your transfer rate and hold times in half. Book a free call flow audit and get a custom routing blueprint for your business.",
};

export default function CallRoutingPage() {
  return <ServicePageTemplate data={pageData} />;
}
