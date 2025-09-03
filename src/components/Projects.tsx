"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { useIntersectionObserver } from "@/lib/useIntersectionObserver";
import {
  ExternalLink,
  Github,
  Zap,
  Users,
  TrendingUp,
  Shield,
  MessageCircle,
  Search,
  Filter,
  X,
  Clock,
  Target,
  CheckCircle,
} from "lucide-react";

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
      "px-2 py-1 bg-brand-orange/10 text-brand-orange text-xs rounded-full font-medium";
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
          className="px-2 py-1 bg-brand-orange/10 text-brand-orange text-xs rounded-full font-medium"
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
          <span className="px-2 py-1 bg-brand-orange/10 text-brand-orange text-xs rounded-full font-medium cursor-default">
            +{overflowCount}
          </span>

          {isHoveringTrigger && (
            <div className="fixed inset-0 z-50 pointer-events-none">
              {/* Non-interactive backdrop so hover is not trapped */}
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
                <div className="max-w-md w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl p-4">
                  <div className="text-sm font-semibold mb-3">
                    Technologies / Apps
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {hiddenTechs.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-brand-orange/10 text-brand-orange text-xs rounded-full font-medium"
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
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
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
        className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full p-6 shadow-2xl"
        style={{
          zIndex: 999999999,
          position: "relative",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
            <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
            Project Portfolio Information
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="text-gray-600 dark:text-gray-300 space-y-3">
          <p>
            Some of our client automation projects are protected by
            non-disclosure agreements (NDAs) and cannot be publicly displayed.
          </p>
          <p>
            The projects shown here are either showcase examples built by our
            team to demonstrate our skills and expertise, or client projects
            that have been approved for public sharing.
          </p>
          <p>
            This portfolio represents our capabilities while respecting client
            confidentiality.
          </p>
        </div>
        <div className="mt-6 text-center">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors duration-300"
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

// Project Detail Modal Component
const ProjectModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: any;
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
  const getProjectDetails = (proj: any) => {
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
      className="fixed inset-0 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
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
        className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
        style={{
          zIndex: 999999999,
          position: "relative",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 p-3 bg-red-500 hover:bg-red-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
          style={{ zIndex: 999999999 }}
        >
          <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="flex flex-col h-full max-h-[90vh]">
          {/* Project Title Section */}
          <div className="px-6 py-4 bg-gradient-to-r from-brand-orange to-brand-orange-dark flex-shrink-0">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
              {project.title}
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.slice(0, 4).map((tech: string) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full h-80 relative flex-shrink-0 bg-gray-50 dark:bg-gray-800">
            {project.image && project.image.startsWith("/automations/") ? (
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
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                  <div className="bg-gray-300/30 dark:bg-gray-800/30 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      Click to view full image
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center">
                <div className="w-24 h-24 bg-brand-orange rounded-xl flex items-center justify-center">
                  <project.icon className="w-12 h-12 text-white" />
                </div>
              </div>
            )}
          </div>

          {/* Content Section */}
          <div className="flex-1 overflow-y-auto p-6 lg:p-8">
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-brand-orange" />
                  Overview
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {details.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-brand-orange" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {details.detailedFeatures.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-600 dark:text-gray-300 text-sm"
                    >
                      <div className="w-2 h-2 bg-brand-orange rounded-full mr-3 mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Workflow Steps */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-brand-orange" />
                  How It Works
                </h3>
                <ol className="space-y-3">
                  {details.workflowSteps.map((step, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-gray-600 dark:text-gray-300 text-sm"
                    >
                      <span className="flex-shrink-0 w-6 h-6 bg-brand-orange text-white rounded-full text-xs flex items-center justify-center mr-3 mt-0.5">
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Business Impact */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-brand-orange" />
                  Business Impact
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {details.businessImpact.map((impact, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-brand-orange/5 border border-brand-orange/20 rounded-lg"
                    >
                      <p className="text-gray-700 dark:text-gray-300 text-sm font-medium">
                        {impact}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-brand-orange" />
                  Technical Specifications
                </h3>
                <div className="space-y-2">
                  {details.technicalSpecs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex items-center text-gray-600 dark:text-gray-300 text-sm"
                    >
                      <div className="w-1.5 h-1.5 bg-brand-orange rounded-full mr-3" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={project.link}
                  className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  View Live Demo
                </a>
                <a
                  href={project.github}
                  className="flex-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                >
                  View Code
                </a>
                <button
                  onClick={onClose}
                  className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
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
                className="absolute top-6 right-6 p-3 bg-red-500 hover:bg-red-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                style={{ zIndex: 999999999 }}
              >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
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
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      id: 7,
      title: "Lead Flow Messenger Automation",
      description:
        "AI-powered Facebook Messenger bot that captures property investment leads, extracts data, and integrates with CRM systems",
      category: "n8n-automations",
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
      icon: MessageCircle,
      link: "#",
      github: "#",
    },
    {
      id: 8,
      title: "Contractor Automation",
      description:
        "Multi-modal AI automation for contractors that processes voice, image, and text inputs via Telegram to automatically scrape contractor databases and populate CRM systems",
      category: "n8n-automations",
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
      icon: Users,
      link: "#",
      github: "#",
    },
    {
      id: 9,
      title: "CSV to HubSpot Uploader Automation",
      description:
        "Intelligent data migration automation that streamlines CSV imports into HubSpot CRM with dynamic field mapping, validation, and seamless API integration",
      category: "n8n-automations",
      image: "/automations/csv-to-hubspot-project.png",
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
      icon: TrendingUp,
      link: "#",
      github: "#",
    },
    {
      id: 10,
      title: "Lead Flow Gmail Automation",
      description:
        "AI-powered Gmail automation that monitors property investment inquiries, extracts financial data, validates leads, and provides instant personalized responses with CRM integration",
      category: "n8n-automations",
      image: "/automations/lead-flow-gmail-project.png",
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
      icon: MessageCircle,
      link: "#",
      github: "#",
    },
    {
      id: 11,
      title: "Property Insights Automation",
      description:
        "Comprehensive financial planning automation that captures client data, generates dynamic charts, calculates retirement projections, and delivers personalized PDF reports automatically",
      category: "n8n-automations",
      image: "/automations/property-insights-project.png",
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
      icon: TrendingUp,
      link: "#",
      github: "#",
    },
  ];

  const filters = [
    { id: "all", label: "All" },
    { id: "n8n-automations", label: "n8n Automations" },
    { id: "zapier-automations", label: "Zapier Automations" },
    { id: "make-automations", label: "Make Automations" },
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
      className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Enhanced AI Background - Home Style */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="circuit-projects"
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
            <rect width="100%" height="100%" fill="url(#circuit-projects)" />
          </svg>
        </div>

        {/* Floating AI Particles */}
        <div className="absolute inset-0">
          {[
            { left: "15%", top: "20%", delay: "0s", duration: "4s" },
            { left: "85%", top: "30%", delay: "0.5s", duration: "3.5s" },
            { left: "25%", top: "70%", delay: "1s", duration: "4.5s" },
            { left: "75%", top: "60%", delay: "1.5s", duration: "3s" },
            { left: "45%", top: "15%", delay: "2s", duration: "4.2s" },
            { left: "65%", top: "80%", delay: "2.5s", duration: "3.8s" },
            { left: "10%", top: "50%", delay: "3s", duration: "4.1s" },
            { left: "90%", top: "45%", delay: "3.5s", duration: "3.7s" },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-brand-orange rounded-full animate-float opacity-60"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-brand-orange/20 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-brand-orange/15 rounded-full filter blur-3xl animate-pulse animation-delay-300" />
      </div>

      <div className="container-width relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isIntersecting
              ? "animate-fade-in-up opacity-100"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-6 py-3 bg-brand-orange/10 border border-brand-orange/30 rounded-full backdrop-blur-sm mb-8">
            <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse mr-3" />
            <span className="text-sm font-medium text-brand-orange">
              Our Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-brand-orange via-brand-orange-light to-brand-orange bg-clip-text text-transparent">
              Latest Projects
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of AI automation solutions that have
            transformed businesses across industries.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-10">
          <div className="flex items-center gap-4 justify-center">
            {/* Filter Icon */}
            <button
              type="button"
              aria-label="Filter"
              className="hidden sm:flex items-center justify-center w-8 h-8 rounded-md border border-white/10 bg-white/5 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:border-brand-orange/40"
            >
              <Filter className="w-4 h-4" />
            </button>

            {/* Filter Pills */}
            <div className="flex items-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 shadow-sm border ${
                    activeFilter === filter.id
                      ? "bg-brand-orange text-white border-brand-orange/60 shadow-brand-orange/20"
                      : "bg-white/5 text-gray-600 dark:text-gray-300 border-white/10 hover:border-brand-orange/40 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-72 sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-lg bg-white/5 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-orange/40 focus:border-brand-orange/40"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(0, 6).map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-white/20 hover:border-brand-orange/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/10 overflow-hidden cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-brand-orange/20 to-brand-orange/10 flex items-center justify-center relative overflow-hidden">
                  {project.image &&
                  project.image.startsWith("/automations/") ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-brand-orange rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  )}
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-brand-orange/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a
                      href={project.link}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-brand-orange transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies with responsive +N overflow */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Technologies / Apps
                    </h4>
                    <TechList technologies={project.technologies} />
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Key Results
                    </h4>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs text-gray-600 dark:text-gray-300"
                        >
                          <div className="w-2 h-2 bg-brand-orange rounded-full mr-2 flex-shrink-0" />
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
              className="inline-flex items-center bg-gray-300/30 dark:bg-gray-800/30 hover:bg-gray-300/40 dark:hover:bg-gray-800/40 text-gray-900 dark:text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border border-gray-200/50 dark:border-white/20 backdrop-blur-sm"
            >
              <span>See All Projects</span>
              <ExternalLink className="w-5 h-5 ml-2" />
            </a>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gray-300/30 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-white/20 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a custom AI
              automation solution for your business.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-brand-orange hover:bg-brand-orange-dark text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Start Your Project
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>

        {/* Disclaimer Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setIsDisclaimerOpen(true)}
            className="inline-flex items-center text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
          >
            <Shield className="w-4 h-4 mr-2" />
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
