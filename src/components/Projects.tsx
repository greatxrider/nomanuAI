"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import type { ComponentType } from "react";
import { createPortal } from "react-dom";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  ExternalLinkIcon,
  GitHubIcon,
  ZapIcon,
  UsersIcon,
  TrendingUpIcon,
  ShieldIcon,
  MessageIcon,
  SearchIcon,
  FilterIcon,
  CloseIcon,
  ClockIcon,
  TargetIcon,
  CheckCircleIcon,
  BrainIcon,
  ArrowRightIcon,
  CodeIcon,
  PhoneIcon,
  BotIcon,
  GlobeIcon,
} from "@/components/icons/PremiumIcons";
import { DarkHoneycombBackground } from "@/components/ui/SectionBackgrounds";

// Icon props type for the project icons
interface IconProps {
  size?: number;
  className?: string;
}

// Renders technology chips in a single line; if they overflow, show "+N" with a modal on hover
const TechList = ({ technologies }: { technologies: string[] }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visibleCount, setVisibleCount] = useState<number>(technologies.length);
  const [overflowCount, setOverflowCount] = useState<number>(0);
  const [isHoveringTrigger, setIsHoveringTrigger] = useState<boolean>(false);

  const measure = () => {
    const container = containerRef.current;
    if (!container) return;

    const available = container.clientWidth;
    const children = Array.from(container.children) as HTMLElement[];

    if (children.length === 0) return;

    let count = 0;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const rightEdge = child.offsetLeft + child.offsetWidth;
      if (rightEdge <= available) {
        count++;
      } else {
        break;
      }
    }

    if (count >= technologies.length) {
      setVisibleCount(technologies.length);
      setOverflowCount(0);
      return;
    }

    const remaining = technologies.length - count;
    const gapPx = 8; // Tailwind gap-2

    const measureEl = document.createElement("span");
    measureEl.className =
      "px-2 py-1 bg-brand/10 text-brand text-xs hex-cut-sm font-medium";
    measureEl.style.visibility = "hidden";
    measureEl.style.position = "absolute";
    measureEl.textContent = `+${remaining}`;
    container.appendChild(measureEl);
    const plusWidth = measureEl.offsetWidth;
    container.removeChild(measureEl);

    let newCount = count;
    while (newCount > 0) {
      const last = container.children[newCount - 1] as HTMLElement;
      const usedRight = last.offsetLeft + last.offsetWidth;
      if (usedRight + gapPx + plusWidth <= available) break;
      newCount--;
    }

    setVisibleCount(newCount);
    setOverflowCount(technologies.length - newCount);
  };

  useLayoutEffect(() => {
    measure();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handle = () => measure();
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handle);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handle);
      }
    };
  }, []);

  const hiddenTechs = technologies.slice(visibleCount);

  return (
    <div
      ref={containerRef}
      className="flex items-center gap-2 overflow-visible whitespace-nowrap"
    >
      {technologies.slice(0, visibleCount).map((tech) => (
        <span
          key={tech}
          className="px-2 py-1 bg-brand/10 text-brand text-xs hex-cut-sm font-medium
            border border-brand/20"
        >
          {tech}
        </span>
      ))}
      {overflowCount > 0 && (
        <div
          className="relative inline-block"
          onMouseEnter={() => setIsHoveringTrigger(true)}
          onMouseLeave={() => setIsHoveringTrigger(false)}
        >
          <span className="px-2 py-1 bg-brand/10 text-brand text-xs hex-cut-sm font-medium cursor-default
            border border-brand/20">
            +{overflowCount}
          </span>

          {isHoveringTrigger && (
            <div className="fixed inset-0 z-50 pointer-events-none">
              {/* Non-interactive backdrop so hover is not trapped */}
              <div className="absolute inset-0 bg-ink/40 dark:bg-black/60 backdrop-blur-sm" />
              <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
                <div className="max-w-md w-full bg-paper dark:bg-gray-900 text-ink dark:text-white
                  border border-brand/10 dark:border-brand/15 hex-cut shadow-2xl p-5">
                  <div className="text-sm font-semibold mb-3">
                    Technologies / Apps
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hiddenTechs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-brand/10 text-brand text-xs hex-cut-sm font-medium
                          border border-brand/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Disclaimer Modal Component
const DisclaimerModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  const modalContent = (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-ink/80 dark:bg-black/80 backdrop-blur-md"
      style={{
        zIndex: 999999999,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        className="relative bg-paper dark:bg-gray-900 modal-hex max-w-2xl w-full p-6 shadow-2xl
          border border-brand/10 dark:border-brand/15"
        style={{
          zIndex: 999999999,
          position: "relative",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-ink dark:text-white flex items-center">
            <ShieldIcon size={20} className="text-brand mr-2" />
            Project Portfolio Information
          </h3>
          <button
            onClick={onClose}
            className="text-ink-tertiary hover:text-ink dark:hover:text-white transition-colors duration-300"
          >
            <CloseIcon size={20} />
          </button>
        </div>
        <div className="text-ink-secondary dark:text-gray-300 space-y-3">
          <p>
            Some of our client projects are protected by non-disclosure
            agreements (NDAs) and cannot be publicly displayed.
          </p>
          <p>
            The projects shown here are either showcase examples built by our
            team to demonstrate our skills and expertise, or client projects
            that have been approved for public sharing.
          </p>
          <p>
            This portfolio represents our capabilities across automations,
            web &amp; software development, mobile apps, and AI receptionists
            while respecting client confidentiality.
          </p>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="btn-secondary"
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );

  // Render modal in a portal at the document root to escape any stacking context
  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
};

type Project = {
  id: number;
  title: string;
  description: string;
  category: string;
  image?: string;
  technologies: string[];
  results: string[];
  icon: ComponentType<IconProps>;
  link: string;
  github: string;
};

// Project Detail Modal Component
const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  // Body scroll lock and modal takeover
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    } else {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.style.overflow = "";
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  // Enhanced project details for Lead Flow Automation
  const getProjectDetails = (proj: Project) => {
    if (proj.id === 8) {
      // Contractor Automation (Telegram multi-modal)
      return {
        fullDescription:
          "Multi‑modal AI automation for contractors that processes voice, image, and text via Telegram to extract job requirements, scrape contractor databases, and populate your CRM automatically.",
        detailedFeatures: [
          "Multi‑Modal Inputs: Accepts voice notes (transcribed), images (OCR + vision), and text messages",
          "Automated Web Scraping: Uses Apify actors to gather contractor data that matches extracted criteria",
          "Smart Categorization: AI maps requests to a standardized category list for consistent records",
          "CRM Sync: Pushes structured contractor data to Airtable and GoHighLevel with tags",
          "Access Control: Validates Telegram users and applies usage rules per user",
          "Status Updates: Sends progress and completion summaries back to the user in Telegram",
        ],
        workflowSteps: [
          "User submits voice/image/text in Telegram",
          "System authenticates user and routes by input type",
          "AI extracts location, category, and item count requirements",
          "Apify scrapes contractor sources using extracted parameters",
          "Structured results are stored in Airtable with key business fields",
          "Qualified entries sync to GoHighLevel for follow‑up",
        ],
        businessImpact: [
          "Hands‑Free Intake: Capture jobs while on‑site via voice or images",
          "Faster Sourcing: Automatically finds matching contractors across databases",
          "Clean Data: AI standardizes categories and fields for reliable reporting",
          "Seamless Handoffs: Leads appear in CRM ready for outreach",
          "Scalable Volume: Process multiple requests in parallel",
        ],
        technicalSpecs: [
          "Platform: n8n workflow orchestration",
          "AI: OpenAI GPT‑4 for NLP/vision; Whisper for transcription",
          "Integrations: Telegram Bot API, Apify, Airtable, GoHighLevel",
          "Security: Webhook verification and user allow‑list",
          "Data: JSON parsing, field mapping, and rate‑limited scraping",
        ],
      };
    }
    if (proj.id === 7) {
      // Lead Flow Messenger Automation
      return {
        fullDescription: `This sophisticated automation revolutionizes property investment lead generation through Facebook Messenger. Built with n8n, it creates an intelligent conversation flow that captures high-quality leads, extracts structured data using AI, and seamlessly integrates with your CRM ecosystem. The system handles everything from initial contact to lead qualification, making your sales process completely hands-free.`,
        detailedFeatures: [
          "AI-Powered Data Extraction: Uses OpenAI GPT-4 to intelligently parse lead information from natural conversations",
          "Facebook Messenger Integration: Seamless webhook integration for real-time message processing",
          "Smart Lead Qualification: Automatically identifies and qualifies leads based on predefined criteria",
          "CRM Synchronization: Instant data sync with HighLevel CRM and Airtable for unified lead management",
          "Contextual AI Responses: Memory-enabled conversations that maintain context across interactions",
          "Automated Follow-ups: Intelligent scheduling and calendar integration for discovery calls",
        ],
        workflowSteps: [
          "Facebook Messenger receives incoming lead inquiries via webhook",
          "AI agent analyzes message content and extracts structured data",
          "System validates and processes lead information (name, email, phone, property details)",
          "Data is automatically stored in Airtable with calculated projections",
          "Lead information syncs to HighLevel CRM with appropriate tags",
          "AI generates personalized response based on lead completeness",
          "Follow-up sequences trigger based on lead quality and engagement",
        ],
        businessImpact: [
          "24/7 Lead Capture: Never miss a potential client, even outside business hours",
          "Zero Manual Data Entry: Completely eliminates the need for manual lead processing",
          "Instant Lead Qualification: Automatically identifies high-value prospects",
          "Improved Response Time: Immediate acknowledgment and professional responses",
          "Scalable Growth: Handle unlimited leads without additional staff",
          "Data Accuracy: AI-powered extraction ensures consistent, clean data",
        ],
        technicalSpecs: [
          "Platform: n8n workflow automation",
          "AI Model: OpenAI GPT-4 for natural language processing",
          "Integrations: Facebook Messenger API, Airtable API, HighLevel CRM",
          "Memory: Context-aware conversations with session persistence",
          "Webhook Security: Token-based authentication and verification",
          "Data Processing: Real-time JSON parsing and field mapping",
        ],
      };
    }

    if (proj.id === 9) {
      // CSV to HubSpot Uploader Automation
      return {
        fullDescription:
          "Data migration automation that validates CSVs, maps fields dynamically, and imports records into HubSpot with safe retries and error reporting.",
        detailedFeatures: [
          "Dynamic Field Mapping: Map CSV headers to HubSpot object fields (Deals/Contacts/Companies)",
          "Validation Layer: Required fields, email/phone formats, enum checks before import",
          "Dry‑Run Mode: Preview mappings and errors without changing HubSpot",
          "Batch Imports: Chunking with rate‑limit awareness and automatic retries",
          "Deduplication: Match by email/domain or custom keys to prevent duplicates",
          "Error Report: Exports failed rows with reasons to Google Sheets",
        ],
        workflowSteps: [
          "Upload CSV or select Google Sheet",
          "System inspects headers and proposes field mappings",
          "Validation runs and produces a dry‑run summary",
          "Approved runs import in batches with progress tracking",
          "Failures are logged to a report and can be re‑queued",
        ],
        businessImpact: [
          "Hours Saved: Avoid manual reformatting and one‑by‑one imports",
          "Higher Data Quality: Validation prevents bad records from entering CRM",
          "Lower Risk: Dry‑run and rollback‑safe batching",
        ],
        technicalSpecs: [
          "Platform: n8n",
          "APIs: HubSpot API v3, Google Sheets API",
          "Auth: OAuth2 with token refresh",
          "Data: CSV parsing, schema mapping, and rate‑limit handling",
        ],
      };
    }

    if (proj.id === 10) {
      // Lead Flow Gmail Automation
      return {
        fullDescription:
          "Email‑based lead capture that watches a mailbox, extracts structured data with AI, qualifies leads, and syncs them to Airtable and HighLevel with instant replies.",
        detailedFeatures: [
          "Gmail Watch: Filters for new inquiries and triggers workflows in real‑time",
          "AI Parsing: Extracts names, budget, timelines, and key intent signals",
          "Lead Qualification: Scores and tags based on custom rules",
          "CRM Sync: Creates/updates records in Airtable and HighLevel",
          "Smart Replies: Sends tailored responses and schedules follow‑ups",
          "Memory: Maintains context across threads for accurate summaries",
        ],
        workflowSteps: [
          "New inquiry hits Gmail label/watch",
          "AI parser extracts structured fields and confidence",
          "Lead scored and routed to the correct list/pipeline",
          "Records created/updated in Airtable and HighLevel",
          "Automated reply and follow‑up tasks scheduled",
        ],
        businessImpact: [
          "Faster Response: Auto‑reply within seconds, 24/7",
          "No Manual Entry: Details captured and synced automatically",
          "Better Pipeline: Qualified, tagged leads ready for outreach",
        ],
        technicalSpecs: [
          "Platform: n8n",
          "APIs: Gmail API, Airtable API, HighLevel",
          "AI: OpenAI GPT‑4 for extraction and summarization",
          "Security: OAuth2 scopes and label‑scoped processing",
        ],
      };
    }

    if (proj.id === 11) {
      // Property Insights Automation
      return {
        fullDescription:
          "End‑to‑end insights generator that gathers client inputs, calculates projections, renders charts, and delivers branded PDF reports automatically.",
        detailedFeatures: [
          "Guided Intake: Collects financial inputs via form or email",
          "Calculations: Generates projections and KPIs from inputs",
          "Dynamic Charts: Uses QuickChart API for branded visuals",
          "PDF Reports: Assembles results into a polished report",
          "Delivery: Emails report to client and team automatically",
          "Audit Trail: Stores data and artifacts in Airtable/Drive",
        ],
        workflowSteps: [
          "Client submits inputs (form/email)",
          "System validates and normalizes numeric fields",
          "Calculations and chart rendering run",
          "PDF is generated and stored with metadata",
          "Report is emailed to client and internal recipients",
        ],
        businessImpact: [
          "Time Savings: Minutes instead of hours per analysis",
          "Consistency: Standardized outputs every time",
          "Client Experience: Professional, branded deliverables",
        ],
        technicalSpecs: [
          "Platform: n8n",
          "APIs: QuickChart, Gmail/SMTP, Airtable",
          "Docs: HTML‑to‑PDF generation pipeline",
        ],
      };
    }

    if (proj.id === 12) {
      // E-Commerce Platform
      return {
        fullDescription:
          "Full‑stack e‑commerce platform with AI‑powered product recommendations, real‑time inventory management, Stripe checkout, and an admin dashboard for order and catalog management.",
        detailedFeatures: [
          "AI Recommendations: Personalized product suggestions powered by OpenAI embeddings",
          "Real‑Time Inventory: Stock levels update instantly across storefront and admin",
          "Stripe Checkout: PCI‑compliant payments with subscriptions and one‑time purchases",
          "Admin Dashboard: Manage products, orders, customers, and analytics in one place",
          "Responsive Design: Optimized for desktop, tablet, and mobile shopping",
          "SEO Optimized: Server‑side rendering and structured data for search visibility",
        ],
        workflowSteps: [
          "Customer browses products with AI‑recommended suggestions",
          "Items added to cart with real‑time stock validation",
          "Secure Stripe checkout with multiple payment methods",
          "Order confirmation and inventory auto‑adjustment",
          "Admin notified and fulfillment workflow triggered",
        ],
        businessImpact: [
          "40% Conversion Lift: AI recommendations drive higher cart values",
          "Zero Overselling: Real‑time inventory prevents stock conflicts",
          "Faster Launch: Fully custom yet deployed in weeks, not months",
        ],
        technicalSpecs: [
          "Framework: Next.js with TypeScript",
          "Database: PostgreSQL with Prisma ORM",
          "Payments: Stripe API with webhook verification",
          "AI: OpenAI for product recommendations",
          "Styling: Tailwind CSS with responsive design system",
        ],
      };
    }

    if (proj.id === 13) {
      // Business Dashboard SaaS
      return {
        fullDescription:
          "Custom analytics SaaS dashboard that aggregates business data from multiple sources, visualizes KPIs in real time, and delivers automated performance reports to stakeholders.",
        detailedFeatures: [
          "Multi‑Source Ingestion: Pull data from APIs, databases, and spreadsheets",
          "Interactive Charts: D3.js visualizations with drill‑down and filtering",
          "Automated Reports: Weekly/monthly PDF reports emailed to stakeholders",
          "Role‑Based Access: Admin, manager, and viewer permission tiers",
          "Custom Widgets: Drag‑and‑drop dashboard builder for each team",
          "Real‑Time Updates: WebSocket‑powered live data feeds",
        ],
        workflowSteps: [
          "Connect data sources via API keys or OAuth",
          "Configure KPI widgets and visualization preferences",
          "Dashboard renders real‑time metrics with auto‑refresh",
          "Scheduled reports generated and distributed via email",
          "Alerts trigger when metrics exceed thresholds",
        ],
        businessImpact: [
          "Single Source of Truth: All business metrics in one place",
          "Faster Decisions: Real‑time data instead of weekly spreadsheets",
          "Team Alignment: Shared dashboards keep everyone informed",
        ],
        technicalSpecs: [
          "Frontend: React with D3.js charts",
          "Backend: Node.js REST API",
          "Database: PostgreSQL with caching layer",
          "Infrastructure: AWS with Docker containers",
          "Auth: JWT with role‑based access control",
        ],
      };
    }

    if (proj.id === 14) {
      // Fitness Tracking App
      return {
        fullDescription:
          "Cross‑platform mobile app that delivers AI‑generated workout plans, nutrition logging with barcode scanning, and detailed progress analytics synced with Apple Health and Google Fit.",
        detailedFeatures: [
          "AI Workout Plans: Personalized routines generated by OpenAI based on goals and history",
          "Nutrition Tracking: Log meals with barcode scanning and AI food recognition",
          "Progress Analytics: Charts for weight, strength, and body composition trends",
          "Health Sync: Integrates with Apple HealthKit and Google Fit",
          "Social Features: Share achievements and challenge friends",
          "Offline Mode: Full functionality without internet connection",
        ],
        workflowSteps: [
          "User sets fitness goals and completes onboarding assessment",
          "AI generates personalized workout and nutrition plan",
          "Daily workouts tracked with exercise logging and timers",
          "Nutrition logged via search, barcode scan, or photo",
          "Weekly progress reports with AI‑adjusted recommendations",
        ],
        businessImpact: [
          "10K+ Active Users: Rapid adoption through personalized experience",
          "Higher Retention: AI adaptation keeps users engaged long‑term",
          "Cross‑Platform: Single codebase for iOS and Android",
        ],
        technicalSpecs: [
          "Framework: React Native with TypeScript",
          "Backend: Firebase (Auth, Firestore, Cloud Functions)",
          "AI: OpenAI GPT‑4 for plan generation",
          "Health APIs: Apple HealthKit, Google Fit",
          "Storage: Offline‑first with local SQLite sync",
        ],
      };
    }

    if (proj.id === 15) {
      // Field Service Mobile App
      return {
        fullDescription:
          "Enterprise mobile app for field service teams featuring real‑time job scheduling, GPS tracking, digital inspection forms, photo capture, and offline‑capable data sync.",
        detailedFeatures: [
          "Job Scheduling: Dispatch and reassign jobs in real time from the office",
          "GPS Tracking: Live technician locations on a map for route optimization",
          "Digital Forms: Custom inspection checklists with photo and signature capture",
          "Offline Mode: Complete jobs without connectivity and sync when back online",
          "Push Notifications: Instant alerts for new assignments and schedule changes",
          "Reporting: Automated job completion reports sent to clients and managers",
        ],
        workflowSteps: [
          "Dispatcher assigns job via admin dashboard",
          "Technician receives push notification with job details",
          "GPS navigation to job site with optimal routing",
          "Digital form completed with photos and signatures",
          "Job marked complete and report auto‑generated",
        ],
        businessImpact: [
          "60% Faster Completion: Streamlined workflows eliminate paperwork",
          "Never Offline: Offline‑first architecture ensures reliability",
          "Real‑Time Visibility: Managers see team status instantly",
        ],
        technicalSpecs: [
          "Framework: Flutter with Dart",
          "Backend: Firebase (Auth, Firestore, Cloud Messaging)",
          "Maps: Google Maps API with geofencing",
          "Offline: SQLite local database with background sync",
          "Notifications: Firebase Cloud Messaging (FCM)",
        ],
      };
    }

    if (proj.id === 16) {
      // AI Receptionist for Dental Clinic
      return {
        fullDescription:
          "AI voice receptionist purpose‑built for dental practices that answers calls 24/7, books and reschedules appointments, verifies insurance eligibility, and sends automated reminders — all without human intervention.",
        detailedFeatures: [
          "Natural Voice AI: Human‑like conversations powered by Vapi AI and ElevenLabs",
          "Appointment Management: Books, reschedules, and cancels appointments in real time",
          "Insurance Verification: Confirms patient coverage during the call",
          "Patient Intake: Collects new patient information and medical history",
          "Smart Routing: Escalates urgent calls to on‑call staff automatically",
          "Follow‑Up Calls: Automated appointment reminders and post‑visit check‑ins",
        ],
        workflowSteps: [
          "Incoming call answered by AI receptionist within 2 rings",
          "AI identifies caller intent (booking, inquiry, emergency)",
          "Appointment availability checked against Google Calendar",
          "Booking confirmed with SMS/email confirmation sent",
          "Call summary and recording synced to HighLevel CRM",
        ],
        businessImpact: [
          "24/7 Availability: Never miss a call, even after hours",
          "85% Resolution Rate: Most calls handled without human staff",
          "Reduced No‑Shows: Automated reminders cut missed appointments",
        ],
        technicalSpecs: [
          "Voice AI: Vapi AI with custom prompts",
          "Voice Synthesis: ElevenLabs for natural speech",
          "Telephony: Twilio for call routing and recording",
          "Calendar: Google Calendar API for availability",
          "CRM: HighLevel for patient records and follow‑ups",
        ],
      };
    }

    if (proj.id === 17) {
      // AI Receptionist for Real Estate
      return {
        fullDescription:
          "AI‑powered phone receptionist for real estate agencies that qualifies buyer and seller leads on inbound calls, schedules property viewings, and syncs all data to CRM — operating around the clock.",
        detailedFeatures: [
          "Lead Qualification: AI asks targeted questions to score buyer/seller intent",
          "Property Matching: Suggests relevant listings based on caller criteria",
          "Viewing Scheduling: Books property tours directly into agent calendars",
          "CRM Integration: All call data, transcripts, and lead scores sync to HighLevel and Airtable",
          "Multi‑Language: Supports English and Spanish conversations",
          "Call Transfer: Seamlessly connects high‑priority leads to available agents",
        ],
        workflowSteps: [
          "Caller reaches AI receptionist via office phone line",
          "AI greets caller and identifies intent (buy, sell, rent, inquiry)",
          "Qualification questions gather budget, timeline, and preferences",
          "Matching properties suggested or viewing scheduled",
          "Lead record created in CRM with full call transcript and score",
        ],
        businessImpact: [
          "3x More Leads: Capture every call, including after‑hours inquiries",
          "Instant Qualification: Leads arrive in CRM pre‑scored and tagged",
          "Zero Missed Calls: AI handles overflow during peak hours",
        ],
        technicalSpecs: [
          "Voice AI: Vapi AI with real estate prompts",
          "Voice Synthesis: ElevenLabs for professional tone",
          "Telephony: Twilio for inbound/outbound calls",
          "CRM: HighLevel and Airtable dual sync",
          "Calendar: Google Calendar for viewing appointments",
        ],
      };
    }

    // Default details for other projects
    return {
      fullDescription: proj.description,
      detailedFeatures: [
        `Feature 1 for ${proj.title}`,
        `Feature 2 for ${proj.title}`,
      ],
      workflowSteps: [`Step 1 for ${proj.title}`, `Step 2 for ${proj.title}`],
      businessImpact: proj.results,
      technicalSpecs: proj.technologies.map(
        (tech: string) => `Built with ${tech}`
      ),
    };
  };

  const details = getProjectDetails(project);

  const modalContent = (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 bg-ink/80 dark:bg-black/80 backdrop-blur-md"
      style={{
        zIndex: 999999999,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
      }}
    >
      <div
        className="relative bg-paper dark:bg-gray-900 modal-hex max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl
          border border-brand/10 dark:border-brand/15"
        style={{
          zIndex: 999999999,
          position: "relative",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-3 bg-error hover:bg-error/90 clip-hex shadow-lg hover:shadow-xl
            transition-all duration-300 group z-10"
          style={{ zIndex: 999999999 }}
        >
          <CloseIcon size={20} className="text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="flex flex-col h-full max-h-[90vh]">
          {/* Project Title Section */}
          <div className="px-6 py-4 bg-gradient-to-r from-brand to-accent flex-shrink-0">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm hex-cut-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full h-80 relative flex-shrink-0 bg-paper-secondary dark:bg-gray-800">
            {project.image ? (
              <div
                className="relative h-full group cursor-pointer"
                onClick={() => setIsImageModalOpen(true)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain hover:opacity-90 transition-opacity duration-300"
                />
                {/* Click to expand indicator */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/20">
                  <div className="bg-paper/80 dark:bg-gray-800/80 px-4 py-2 hex-cut-sm backdrop-blur-sm">
                    <span className="text-sm font-medium text-ink dark:text-white">
                      Click to view full image
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
                <div className="icon-container w-24 h-24">
                  <project.icon size={48} className="text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-8">
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-ink dark:text-white mb-3 flex items-center">
                  <TargetIcon size={20} className="mr-2 text-brand" />
                  Overview
                </h3>
                <p className="text-ink-secondary dark:text-gray-300 leading-relaxed">
                  {details.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-ink dark:text-white mb-3 flex items-center">
                  <CheckCircleIcon size={20} className="mr-2 text-brand" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {details.detailedFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-ink-secondary dark:text-gray-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-brand clip-hex mr-3 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workflow Steps */}
              <div>
                <h3 className="text-xl font-bold text-ink dark:text-white mb-3 flex items-center">
                  <ClockIcon size={20} className="mr-2 text-brand" />
                  How It Works
                </h3>
                <ol className="space-y-3">
                  {details.workflowSteps.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-ink-secondary dark:text-gray-300 text-sm"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-brand text-white clip-hex text-xs flex items-center justify-center mr-3 mt-0.5">
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Business Impact */}
              <div>
                <h3 className="text-xl font-bold text-ink dark:text-white mb-3 flex items-center">
                  <TrendingUpIcon size={20} className="mr-2 text-brand" />
                  Business Impact
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {details.businessImpact.map((impact: string, idx: number) => (
                    <div
                      key={idx}
                      className="p-3 bg-brand/5 border border-brand/20 hex-cut-sm"
                    >
                      <p className="text-ink dark:text-gray-300 text-sm font-medium">
                        {impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <h3 className="text-xl font-bold text-ink dark:text-white mb-3 flex items-center">
                  <ZapIcon size={20} className="mr-2 text-brand" />
                  Technical Specifications
                </h3>
                <div className="space-y-2">
                  {details.technicalSpecs.map((spec: string, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center text-ink-secondary dark:text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-brand clip-hex mr-3" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href={project.link}
                  className="btn-primary flex-1 text-center"
                >
                  View Live Demo
                </a>
                <a
                  href={project.github}
                  className="btn-secondary flex-1 text-center"
                >
                  View Code
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-ink/10 dark:bg-white/10 hover:bg-ink/20 dark:hover:bg-white/20
                    text-ink dark:text-white font-semibold hex-cut-sm transition-all duration-300
                    flex items-center justify-center gap-2"
                >
                  <CloseIcon size={16} />
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Image Modal */}
      {isImageModalOpen &&
        project.image &&
        project.image.startsWith("/automations/") && (
          <div
            className="fixed inset-0 flex items-center justify-center p-4 bg-black/95 backdrop-blur-lg"
            style={{ zIndex: 999999999 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setIsImageModalOpen(false);
              }
            }}
          >
            <div className="relative max-w-full max-h-full">
              <button
                onClick={() => setIsImageModalOpen(false)}
                aria-label="Close full image"
                className="absolute top-6 right-6 p-3 bg-error hover:bg-error/90 clip-hex shadow-lg hover:shadow-xl
                  transition-all duration-300 group"
                style={{ zIndex: 999999999 }}
              >
                <CloseIcon size={24} className="text-white group-hover:rotate-90 transition-transform duration-300" />
              </button>
              <img
                src={project.image}
                alt={project.title}
                className="max-w-full max-h-full object-contain"
                style={{ maxHeight: "90vh", maxWidth: "90vw" }}
              />
            </div>
          </div>
        )}
    </div>
  );

  // Render modal in a portal at the document root to escape any stacking context
  return typeof window !== "undefined"
    ? createPortal(modalContent, document.body)
    : null;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects: Project[] = [
    {
      id: 7,
      title: "Lead Flow Messenger Automation",
      description:
        "AI-powered Facebook Messenger bot that captures property investment leads, extracts data, and integrates with CRM systems",
      category: "automations",
      image: "/automations/lead-flow-messenger-project.png",
      technologies: [
        "n8n",
        "OpenAI GPT-4",
        "Facebook Messenger API",
        "Airtable",
        "HighLevel CRM",
      ],
      results: [
        "Automated lead qualification",
        "Real-time CRM integration",
        "AI data extraction",
      ],
      icon: MessageIcon,
      link: "#",
      github: "#",
    },
    {
      id: 8,
      title: "Contractor Automation",
      description:
        "Multi-modal AI automation for contractors that processes voice, image, and text inputs via Telegram to automatically scrape contractor databases and populate CRM systems",
      category: "automations",
      image: "/automations/contractor-project.png",
      technologies: [
        "n8n",
        "OpenAI GPT-4",
        "Telegram Bot API",
        "Apify Web Scraping",
        "Airtable",
        "GoHighLevel CRM",
        "OpenAI Whisper",
      ],
      results: [
        "Multi-modal input processing",
        "Automated contractor database scraping",
        "Hands-free voice operation",
      ],
      icon: UsersIcon,
      link: "#",
      github: "#",
    },
    {
      id: 9,
      title: "CSV to HubSpot Uploader Automation",
      description:
        "Intelligent data migration automation that streamlines CSV imports into HubSpot CRM with dynamic field mapping, validation, and seamless API integration",
      category: "automations",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      technologies: [
        "n8n",
        "HubSpot API v3",
        "Google Sheets",
        "CSV Processing",
        "OAuth2",
        "Dynamic Forms",
        "Data Validation",
      ],
      results: [
        "Automated bulk data imports",
        "Intelligent field mapping",
        "Zero manual data entry",
      ],
      icon: TrendingUpIcon,
      link: "#",
      github: "#",
    },
    {
      id: 10,
      title: "Lead Flow Gmail Automation",
      description:
        "AI-powered Gmail automation that monitors property investment inquiries, extracts financial data, validates leads, and provides instant personalized responses with CRM integration",
      category: "automations",
      image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800",
      technologies: [
        "n8n",
        "OpenAI GPT-4",
        "Gmail API",
        "Airtable",
        "HighLevel CRM",
        "OAuth2",
        "AI Memory",
      ],
      results: [
        "24/7 email lead processing",
        "Instant AI-powered responses",
        "Dual CRM synchronization",
      ],
      icon: MessageIcon,
      link: "#",
      github: "#",
    },
    {
      id: 11,
      title: "Property Insights Automation",
      description:
        "Comprehensive financial planning automation that captures client data, generates dynamic charts, calculates retirement projections, and delivers personalized PDF reports automatically",
      category: "automations",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      technologies: [
        "n8n",
        "Airtable",
        "QuickChart API",
        "Gmail API",
        "Webhook Integration",
        "JavaScript",
        "PDF Generation",
      ],
      results: [
        "Automated financial analysis",
        "Dynamic chart generation",
        "Instant report delivery",
      ],
      icon: TrendingUpIcon,
      link: "#",
      github: "#",
    },
    {
      id: 12,
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce web application with AI-powered product recommendations, real-time inventory management, and seamless payment processing",
      category: "web-software",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Stripe API",
        "PostgreSQL",
        "Prisma",
        "OpenAI",
      ],
      results: [
        "40% increase in conversions",
        "AI-driven product suggestions",
        "Real-time inventory sync",
      ],
      icon: GlobeIcon,
      link: "#",
      github: "#",
    },
    {
      id: 13,
      title: "Business Dashboard SaaS",
      description:
        "Custom analytics dashboard for tracking KPIs, revenue metrics, and team performance with automated reporting and data visualization",
      category: "web-software",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      technologies: [
        "React",
        "Node.js",
        "D3.js",
        "PostgreSQL",
        "REST API",
        "AWS",
        "Docker",
      ],
      results: [
        "Real-time data visualization",
        "Automated weekly reports",
        "Multi-tenant architecture",
      ],
      icon: CodeIcon,
      link: "#",
      github: "#",
    },
    {
      id: 14,
      title: "Fitness Tracking App",
      description:
        "Cross-platform mobile application for fitness tracking with AI-powered workout plans, nutrition logging, and progress analytics",
      category: "mobile-apps",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=800",
      technologies: [
        "React Native",
        "TypeScript",
        "Firebase",
        "OpenAI",
        "HealthKit",
        "Google Fit API",
      ],
      results: [
        "10K+ active users",
        "AI personalized workouts",
        "Cross-platform iOS & Android",
      ],
      icon: PhoneIcon,
      link: "#",
      github: "#",
    },
    {
      id: 15,
      title: "Field Service Mobile App",
      description:
        "Mobile application for field service teams with real-time job scheduling, GPS tracking, digital forms, and offline-capable functionality",
      category: "mobile-apps",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
      technologies: [
        "Flutter",
        "Dart",
        "Firebase",
        "Google Maps API",
        "SQLite",
        "Push Notifications",
      ],
      results: [
        "60% faster job completion",
        "Offline-first architecture",
        "Real-time team tracking",
      ],
      icon: PhoneIcon,
      link: "#",
      github: "#",
    },
    {
      id: 16,
      title: "AI Receptionist for Dental Clinic",
      description:
        "Intelligent AI voice receptionist that handles appointment scheduling, patient inquiries, insurance verification, and follow-up calls 24/7",
      category: "ai-receptionists",
      image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
      technologies: [
        "Vapi AI",
        "OpenAI GPT-4",
        "Twilio",
        "Google Calendar API",
        "HighLevel CRM",
        "ElevenLabs",
      ],
      results: [
        "24/7 call handling",
        "85% call resolution rate",
        "Automated appointment booking",
      ],
      icon: BotIcon,
      link: "#",
      github: "#",
    },
    {
      id: 17,
      title: "AI Receptionist for Real Estate",
      description:
        "AI-powered phone receptionist for real estate agencies that qualifies leads, schedules property viewings, and syncs with CRM systems automatically",
      category: "ai-receptionists",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
      technologies: [
        "Vapi AI",
        "OpenAI GPT-4",
        "Twilio",
        "HighLevel CRM",
        "Airtable",
        "Google Calendar",
        "ElevenLabs",
      ],
      results: [
        "3x more leads captured",
        "Instant lead qualification",
        "Zero missed calls",
      ],
      icon: BotIcon,
      link: "#",
      github: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "automations", label: "Automations" },
    { id: "web-software", label: "Web/Software" },
    { id: "mobile-apps", label: "Mobile Apps" },
    { id: "ai-receptionists", label: "AI Receptionists" },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "all" ? true : project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  return (
    <section
      ref={ref}
      id="projects"
      className="relative section-padding bg-paper dark:bg-gray-950 overflow-hidden"
    >
      {/* Background Image */}
      <img
        src="/assets/beeInspiration/5303586.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-20"
      />
      <div className="absolute inset-0 bg-paper/80 dark:bg-gray-950/75" />
      <DarkHoneycombBackground patternId="projects-honeycomb" />

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out-expo ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="heading-lg text-ink dark:text-white mb-4 text-balance">
            Our <span className="text-gradient">Latest Projects</span>
          </h2>

          <p className="text-body-lg max-w-3xl mx-auto">
            Explore our portfolio of automations, web &amp; software apps,
            mobile apps, and AI receptionists that have transformed businesses
            across industries.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div
          className={`mb-10 transition-all duration-1000 ease-out-expo delay-100 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap items-center gap-4 justify-center">
            {/* Filter Icon */}
            <button
              type="button"
              aria-label="Filter"
              className="hidden sm:flex items-center justify-center w-10 h-10 clip-hex
                border border-ink/10 dark:border-white/10 bg-paper dark:bg-gray-800
                text-ink-tertiary dark:text-gray-400 hover:text-brand hover:border-brand/40
                transition-all duration-300"
            >
              <FilterIcon size={18} />
            </button>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2 hex-cut-sm text-sm font-medium transition-all duration-300
                    border ${
                    activeFilter === filter.id
                      ? "bg-brand text-white border-brand shadow-brand"
                      : "bg-paper dark:bg-gray-800 text-ink-secondary dark:text-gray-300 border-ink/10 dark:border-white/10 hover:border-brand/40 hover:text-brand"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-72 sm:w-80">
              <SearchIcon size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-ink-tertiary dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 hex-cut-sm bg-paper dark:bg-gray-800 text-ink dark:text-white
                  placeholder-ink-tertiary dark:placeholder-gray-500 border border-ink/10 dark:border-white/10
                  focus:outline-none focus:ring-2 focus:ring-brand/40 focus:border-brand/40
                  transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.slice(0, 6).map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className={`card-glass group p-0 overflow-hidden cursor-pointer transition-all duration-700 ease-out-expo
                  hover:shadow-brand hover:-translate-y-1 ${
                  isIntersecting
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="icon-container w-16 h-16">
                      <IconComponent size={32} className="text-white" />
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.link}
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-white/20 backdrop-blur-sm clip-hex hover:bg-white/30 transition-all duration-300"
                    >
                      <ExternalLinkIcon size={20} className="text-white" />
                    </a>
                    <a
                      href={project.github}
                      onClick={(e) => e.stopPropagation()}
                      className="p-3 bg-white/20 backdrop-blur-sm clip-hex hover:bg-white/30 transition-all duration-300"
                    >
                      <GitHubIcon size={20} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-ink dark:text-white mb-3
                    group-hover:text-brand transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-ink-secondary dark:text-gray-400 text-sm mb-4 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies with responsive +N overflow */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-ink dark:text-white mb-2">
                      Technologies / Apps
                    </h4>
                    <TechList technologies={project.technologies} />
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-medium text-ink dark:text-white mb-2">
                      Key Results
                    </h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs text-ink-secondary dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-brand clip-hex mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* See More Button */}
        {filteredProjects.length > 6 && (
          <div className="text-center mt-12">
            <a
              href="/projects"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <span>See All Projects</span>
              <ArrowRightIcon size={18} />
            </a>
          </div>
        )}

        {/* CTA Section */}
        <div
          className={`text-center mt-16 transition-all duration-1000 ease-out-expo delay-500 ${
            isIntersecting
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="card-honeycomb hex-border-pulse p-10 md:p-12 max-w-3xl mx-auto text-center">
            <h3 className="heading-md text-ink dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-body text-ink-secondary dark:text-gray-400 mb-8 max-w-xl mx-auto">
              Let's discuss your project requirements and create a custom AI
              automation solution for your business.
            </p>
            <a
              href="#contact"
              className="btn-primary inline-flex items-center gap-2"
            >
              <span>Start Your Project</span>
              <ArrowRightIcon size={18} />
            </a>
          </div>
        </div>

        {/* Disclaimer Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsDisclaimerOpen(true)}
            className="inline-flex items-center text-sm text-ink-tertiary dark:text-gray-500
              hover:text-ink dark:hover:text-gray-300 transition-colors duration-300"
          >
            <ShieldIcon size={16} className="mr-2" />
            Project Portfolio Information
          </button>
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />

        {/* Disclaimer Modal */}
        {isDisclaimerOpen && (
          <DisclaimerModal
            isOpen={isDisclaimerOpen}
            onClose={() => setIsDisclaimerOpen(false)}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
