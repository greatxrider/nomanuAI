import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import {
  HeadphonesIcon,
  BotIcon,
  PhoneIcon,
  CalendarIcon,
  TargetIcon,
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
  NetworkIcon,
  EyeIcon,
  SmartphoneIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "24/7 AI Customer Support | NomanuAI",
  description:
    "Always-on AI customer support that resolves tickets, answers complex queries, and escalates with full context, delivering instant help across phone, chat, email, and SMS around the clock.",
  keywords: [
    "24/7 AI customer support",
    "AI help desk",
    "automated customer service",
    "AI ticket resolution",
    "customer support automation",
    "AI knowledge base",
    "sentiment analysis support",
    "omnichannel AI support",
    "NomanuAI",
  ],
  openGraph: {
    title: "24/7 AI Customer Support | NomanuAI",
    description:
      "Always-on AI support that resolves tickets, answers queries, and escalates with context — instant help across every channel, around the clock.",
    url: "https://www.nomanuai.com/customersupport247",
  },
  twitter: {
    card: "summary_large_image",
    title: "24/7 AI Customer Support | NomanuAI",
    description:
      "Always-on AI support that resolves tickets, answers queries, and escalates with context — instant help across every channel, around the clock.",
  },
  alternates: {
    canonical: "/customersupport247",
  },
};

const pageData: ServicePageData = {
  badge: "AI Support Services",
  heroIcon: HeadphonesIcon,
  title: "24/7 AI Customer Support",
  subtitle: "Instant Answers, Every Channel, Every Hour",
  description:
    "Your customers don't wait until business hours to have problems — and they shouldn't have to wait for answers, either. Our 24/7 AI Customer Support system handles inbound queries across phone, live chat, email, and SMS with human-level understanding. It resolves common issues autonomously, creates and manages support tickets, references your knowledge base for accurate answers, detects customer sentiment to prioritize urgent issues, and escalates to human agents with full conversation context when needed. The result is faster resolution, happier customers, and a support team that focuses on complex problems instead of repetitive questions.",
  statistic: {
    value: "90%",
    label: "of consumers rate an immediate response as important or very important when they have a support question",
    source: "HubSpot Research",
  },
  benefits: [
    {
      title: "Truly Always-On Support",
      desc: "Customers get instant help at 3 AM on a holiday just as easily as 10 AM on a Tuesday — no wait times, no voicemail, no frustration.",
    },
    {
      title: "Autonomous Issue Resolution",
      desc: "The AI resolves up to 70% of common support queries — password resets, order tracking, billing questions, how-tos — without involving a human.",
    },
    {
      title: "Sentiment-Aware Escalation",
      desc: "When a customer is frustrated or an issue is complex, the AI detects it in real time and escalates to a human agent with full context and history.",
    },
    {
      title: "Omnichannel Consistency",
      desc: "Deliver the same quality experience across phone, live chat, email, SMS, and social media — with unified conversation history across all channels.",
    },
    {
      title: "Knowledge Base Integration",
      desc: "The AI draws from your existing help docs, FAQs, and SOPs to deliver accurate, brand-consistent answers — and learns from every interaction.",
    },
    {
      title: "Reduced Support Costs",
      desc: "Handle 5x the ticket volume without scaling your support team. AI absorbs repetitive queries so your agents tackle the work that matters.",
    },
  ],
  benefitsIntro:
    "Great support isn't a department — it's a competitive advantage. AI makes it possible to deliver five-star service at scale, 24/7.",
  personas: [
    {
      label: "E-Commerce & Retail",
      icon: SmartphoneIcon,
      copy: "Order status, returns, sizing questions — your customers ask the same things thousands of times. AI handles it instantly across every channel.",
      size: "10-1,000 employees",
    },
    {
      label: "SaaS & Technology",
      icon: RocketIcon,
      copy: "Tier-1 support eats your engineering time. AI resolves login issues, feature questions, and known bugs so your team ships product, not replies.",
      size: "20-500 employees",
    },
    {
      label: "Healthcare & Wellness",
      icon: ShieldIcon,
      copy: "Patients need answers about appointments, prescriptions, and insurance. AI provides compliant, accurate responses and escalates clinical concerns immediately.",
      size: "10-200 staff",
    },
    {
      label: "Financial Services",
      icon: BriefcaseIcon,
      copy: "Account inquiries, transaction questions, and compliance-sensitive interactions handled with accuracy and audit trails your regulators will appreciate.",
      size: "20-500 team",
    },
  ],
  personasIntro:
    "From startups to enterprises, AI support scales to meet your customers wherever they are — without compromising quality or compliance.",
  features: [
    {
      title: "Intelligent Ticket Automation",
      description:
        "Inbound queries are automatically categorized, prioritized, and either resolved by AI or routed to the right human agent with full context.",
      icon: LayersIcon,
    },
    {
      title: "AI Knowledge Base Engine",
      description:
        "The AI indexes your help center, SOPs, and product docs to deliver precise answers. It improves with every interaction and flags content gaps.",
      icon: EyeIcon,
    },
    {
      title: "Real-Time Sentiment Analysis",
      description:
        "Natural language processing detects customer emotion — frustration, urgency, satisfaction — and triggers appropriate escalation or retention workflows.",
      icon: MessageIcon,
    },
    {
      title: "Omnichannel Inbox",
      description:
        "Phone, chat, email, SMS, and social messages flow into a single AI-powered inbox with unified customer profiles and conversation history.",
      icon: NetworkIcon,
    },
    {
      title: "Smart Escalation Handoffs",
      description:
        "When human help is needed, the AI briefs the agent with a full summary, sentiment score, customer history, and recommended resolution — no cold transfers.",
      icon: UsersIcon,
    },
    {
      title: "Support Analytics & CSAT Tracking",
      description:
        "Monitor resolution rates, average handle time, CSAT scores, ticket volume trends, and AI vs. human performance from a live dashboard.",
      icon: LineChartIcon,
    },
  ],
  featuresIntro:
    "Enterprise-grade AI support infrastructure that deploys in weeks, not months — and gets smarter with every conversation.",
  packages: [
    {
      label: "START HERE",
      title: "Support Audit & AI Configuration",
      price: "$997",
      description:
        "We audit your current support workflow, index your knowledge base, configure AI response models, and launch a pilot on your highest-volume support channel within two weeks.",
    },
    {
      label: "MOST POPULAR",
      title: "Full AI Support Deployment",
      price: "Starting at $7,500",
      description:
        "Complete omnichannel AI support implementation — including knowledge base training, ticket automation, sentiment analysis, CRM integration, agent handoff workflows, and 60-day optimization period.",
      popular: true,
    },
    {
      label: "ONGOING",
      title: "AI Support Management Retainer",
      price: "$1,800/mo",
      description:
        "Continuous knowledge base updates, response model retraining, escalation logic tuning, CSAT optimization, monthly performance reviews, and priority technical support.",
    },
  ],
  packagesIntro:
    "Whether you're drowning in tickets or building support from scratch, we deploy AI that delights your customers and frees your team.",
  relatedServices: [
    {
      title: "AI Virtual Receptionist",
      description:
        "Combine 24/7 support with an AI receptionist that handles first-contact calls, screens inquiries, and routes support-specific calls to the AI help desk.",
      icon: BotIcon,
      features: [
        "24/7 call answering",
        "Call screening",
        "FAQ handling",
        "Multi-language support",
      ],
      href: "/virtualreceptionist",
    },
    {
      title: "Intelligent Call Routing",
      description:
        "Route support calls based on issue type, severity, and customer tier — ensuring VIPs and urgent issues reach senior agents immediately.",
      icon: PhoneIcon,
      features: [
        "Intent-based routing",
        "Priority queuing",
        "Skills matching",
        "Overflow handling",
      ],
      href: "/callrouting",
    },
    {
      title: "AI Lead Qualification",
      description:
        "Turn support interactions into revenue by identifying upsell and cross-sell opportunities during customer conversations.",
      icon: TargetIcon,
      features: [
        "Opportunity detection",
        "CRM integration",
        "Conversation intelligence",
        "Real-time alerts",
      ],
      href: "/leadqualification",
    },
  ],
  ctaTitle: "Deliver Five-Star Support Without Five-Star Costs",
  ctaDescription:
    "Book a free support audit and see how AI can resolve the majority of your tickets instantly — while making your human agents more effective on the issues that truly need them.",
};

export default function CustomerSupport247Page() {
  return <ServicePageTemplate data={pageData} />;
}
