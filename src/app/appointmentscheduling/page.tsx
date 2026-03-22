import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import type { ServicePageData } from "@/components/ServicePageTemplate";
import {
  CalendarIcon,
  BotIcon,
  PhoneIcon,
  TargetIcon,
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
  GlobeIcon,
  RocketIcon,
  LandmarkIcon,
  WrenchIcon,
  NetworkIcon,
} from "@/components/icons/PremiumIcons";

export const metadata: Metadata = {
  title: "AI Appointment Scheduling | NomanuAI",
  description:
    "AI-powered appointment scheduling that books, reschedules, and confirms appointments through natural conversation, syncing with your calendar, reducing no-shows, and filling your schedule around the clock.",
  keywords: [
    "AI appointment scheduling",
    "automated booking",
    "AI scheduling assistant",
    "conversational booking",
    "appointment reminders",
    "no-show reduction",
    "calendar sync AI",
    "scheduling automation",
    "NomanuAI",
  ],
  openGraph: {
    title: "AI Appointment Scheduling | NomanuAI",
    description:
      "Book, reschedule, and confirm appointments through natural AI conversation — 24/7, with zero double-bookings and fewer no-shows.",
    url: "https://www.nomanuai.com/appointmentscheduling",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Appointment Scheduling | NomanuAI",
    description:
      "Book, reschedule, and confirm appointments through natural AI conversation — 24/7, with zero double-bookings and fewer no-shows.",
  },
  alternates: {
    canonical: "/appointmentscheduling",
  },
};

const pageData: ServicePageData = {
  badge: "AI Scheduling Services",
  heroIcon: CalendarIcon,
  title: "AI Appointment Scheduling",
  subtitle: "Your Calendar, Fully Automated",
  description:
    "Empty slots cost you money. Phone tag costs you time. Our AI appointment scheduler holds natural conversations with callers and website visitors to find the perfect time, books it instantly in your calendar, sends confirmations and reminders, and handles reschedules — all without a single click from your team. It integrates with Google Calendar, Outlook, and industry-specific platforms, and its smart reminder sequences have been proven to cut no-shows by up to 40%.",
  statistic: {
    value: "67%",
    label: "of consumers prefer self-service scheduling over calling to book an appointment",
    source: "Zipwhip Consumer Texting Report",
  },
  benefits: [
    {
      title: "24/7 Booking Availability",
      desc: "Appointments are booked at 2 AM, on Sundays, and during holidays — whenever your prospects are ready, your AI scheduler is ready too.",
    },
    {
      title: "Natural Conversational Flow",
      desc: "No clunky forms. Callers and chat visitors simply tell the AI what they need and when, and it finds the best available slot in seconds.",
    },
    {
      title: "Automated Reminders & Confirmations",
      desc: "SMS, email, and voice reminders are sent at optimal intervals — dramatically reducing no-shows and last-minute cancellations.",
    },
    {
      title: "Smart Conflict Resolution",
      desc: "The AI cross-references all calendars in real time, preventing double-bookings and suggesting alternatives when preferred times are unavailable.",
    },
    {
      title: "Effortless Rescheduling",
      desc: "Clients can reschedule by calling, texting, or chatting — the AI handles the entire flow and updates all systems automatically.",
    },
    {
      title: "Backfill Empty Slots",
      desc: "When a cancellation opens a slot, the AI proactively reaches out to waitlisted clients to fill the gap — maximizing your utilization rate.",
    },
  ],
  benefitsIntro:
    "Stop trading phone calls to book a 30-minute meeting. AI scheduling turns a five-minute task into a five-second experience.",
  personas: [
    {
      label: "Healthcare & Dental Clinics",
      icon: ShieldIcon,
      copy: "Patient scheduling is your biggest admin burden. AI handles new-patient intake, follow-up bookings, and recall reminders without tying up your front desk.",
      size: "5-100 providers",
    },
    {
      label: "Salons & Spas",
      icon: UserIcon,
      copy: "Clients book after hours more than during them. An AI scheduler captures those bookings and fills chairs that would otherwise sit empty.",
      size: "1-30 stylists",
    },
    {
      label: "Professional Consultants",
      icon: BriefcaseIcon,
      copy: "Your time is your product. Let AI manage your calendar so every hour is accounted for and every meeting starts with context.",
      size: "Solo to 50 team",
    },
    {
      label: "Home Services & Contractors",
      icon: WrenchIcon,
      copy: "You can't answer the phone from a job site. AI books service appointments, collects job details, and dispatches your crew — hands-free.",
      size: "1-50 technicians",
    },
  ],
  personasIntro:
    "If your business runs on appointments, our AI scheduler makes sure every slot is filled and every client is confirmed.",
  features: [
    {
      title: "Conversational Booking Engine",
      description:
        "Clients describe what they need in natural language and the AI matches them to the right service, provider, and time slot instantly.",
      icon: MessageIcon,
    },
    {
      title: "Universal Calendar Sync",
      description:
        "Two-way sync with Google Calendar, Outlook, Calendly, Acuity, and industry platforms like Dentrix, Mindbody, and ServiceTitan.",
      icon: CalendarIcon,
    },
    {
      title: "Multi-Channel Reminders",
      description:
        "Automated SMS, email, and voice call reminders at 48-hour, 24-hour, and 1-hour intervals — fully customizable per service type.",
      icon: PhoneIcon,
    },
    {
      title: "Waitlist & Backfill Automation",
      description:
        "Cancellations trigger automatic outreach to waitlisted clients, filling empty slots before they cost you revenue.",
      icon: TrendingUpIcon,
    },
    {
      title: "Intake Form Collection",
      description:
        "Before the appointment, the AI collects required information — insurance details, job descriptions, preferences — so you're prepared.",
      icon: LayersIcon,
    },
    {
      title: "Scheduling Analytics Dashboard",
      description:
        "Track booking rates, no-show percentages, peak demand times, and provider utilization from a centralized analytics view.",
      icon: LineChartIcon,
    },
  ],
  featuresIntro:
    "From the first booking request to the follow-up reminder, every step is automated, tracked, and optimized.",
  packages: [
    {
      label: "START HERE",
      title: "Scheduling Audit & Configuration",
      price: "$597",
      description:
        "We analyze your current booking process, configure the AI scheduler with your services, providers, and availability rules, and launch a pilot on your primary booking channel.",
    },
    {
      label: "MOST POPULAR",
      title: "Full Scheduling Automation",
      price: "Starting at $3,000",
      description:
        "Complete deployment across phone, web, and SMS channels — including calendar integrations, reminder sequences, waitlist logic, intake forms, and 30-day optimization.",
      popular: true,
    },
    {
      label: "ONGOING",
      title: "Scheduling Management Retainer",
      price: "$750/mo",
      description:
        "Ongoing calendar rule updates, reminder sequence optimization, new provider onboarding, no-show analysis, and priority support to keep bookings flowing.",
    },
  ],
  packagesIntro:
    "Fill your calendar without filling your voicemail. Every package is designed to pay for itself within the first month.",
  relatedServices: [
    {
      title: "AI Virtual Receptionist",
      description:
        "Pair scheduling with a full AI receptionist that answers calls, handles FAQs, and routes non-booking inquiries to the right team.",
      icon: BotIcon,
      features: [
        "24/7 call answering",
        "Custom brand voice",
        "FAQ handling",
        "CRM logging",
      ],
      href: "/virtualreceptionist",
    },
    {
      title: "Intelligent Call Routing",
      description:
        "Ensure scheduling calls reach the AI booker while sales, support, and billing calls are routed to the right human team.",
      icon: PhoneIcon,
      features: [
        "Intent-based routing",
        "Overflow handling",
        "Skills matching",
        "After-hours logic",
      ],
      href: "/callrouting",
    },
    {
      title: "AI Lead Qualification",
      description:
        "Before booking a consultation, let AI qualify the lead to ensure your calendar is filled with high-value prospects, not tire-kickers.",
      icon: TargetIcon,
      features: [
        "Automated scoring",
        "Budget qualification",
        "CRM integration",
        "Real-time alerts",
      ],
      href: "/leadqualification",
    },
  ],
  ctaTitle: "Fill Every Slot, Automatically",
  ctaDescription:
    "See how AI scheduling can eliminate phone tag and cut no-shows by up to 40%. Book a free demo and we'll show you your custom booking flow in action.",
};

export default function AppointmentSchedulingPage() {
  return <ServicePageTemplate data={pageData} />;
}
