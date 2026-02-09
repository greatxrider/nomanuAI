"use client";

import { SVGProps } from "react";

// Premium Icon Base Props
interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

// Premium wrapper for consistent icon styling
const IconWrapper = ({
  children,
  size = 24,
  className = "",
  ...props
}: IconProps & { children: React.ReactNode }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`premium-icon ${className}`}
    {...props}
  >
    {children}
  </svg>
);

// ============================================
// PREMIUM SF SYMBOLS INSPIRED ICONS
// ============================================

// Automation / Workflow Icon - represents AI automation
export const AutomationIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
    <circle cx="12" cy="12" r="4" />
  </IconWrapper>
);

// Neural Network Icon - AI Brain
export const NeuralIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="4" cy="6" r="2" />
    <circle cx="20" cy="6" r="2" />
    <circle cx="4" cy="18" r="2" />
    <circle cx="20" cy="18" r="2" />
    <path d="M6 6l4.5 4.5" />
    <path d="M18 6l-4.5 4.5" />
    <path d="M6 18l4.5-4.5" />
    <path d="M18 18l-4.5-4.5" />
  </IconWrapper>
);

// Sales CRM Icon - Handshake/Deal
export const SalesIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" strokeWidth={1.5} />
    <path d="M8 12h8" />
    <path d="M10 9l-2 3 2 3" />
    <path d="M14 9l2 3-2 3" />
  </IconWrapper>
);

// Client Onboarding Icon - Welcome/User Plus
export const OnboardingIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="M16 11h6" />
    <path d="M19 8v6" />
  </IconWrapper>
);

// Project Management Icon - Kanban/Tasks
export const ProjectIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
  </IconWrapper>
);

// Billing/Payment Icon - Wallet/Card
export const BillingIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <path d="M6 15h4" />
    <path d="M14 15h4" />
  </IconWrapper>
);

// Social Media Icon - Share/Network
export const SocialIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="M8.59 13.51l6.83 3.98" />
    <path d="M15.41 6.51l-6.82 3.98" />
  </IconWrapper>
);

// Discovery/Search Icon - Magnifying glass with sparkle
export const DiscoveryIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <path d="M11 8v6" />
    <path d="M8 11h6" />
  </IconWrapper>
);

// Calendar Icon - Premium style
export const CalendarIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h18" />
    <path d="M8 14h.01" />
    <path d="M12 14h.01" />
    <path d="M16 14h.01" />
    <path d="M8 18h.01" />
    <path d="M12 18h.01" />
  </IconWrapper>
);

// Check/Verify Icon
export const CheckIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </IconWrapper>
);

// Arrow Right Icon
export const ArrowRightIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </IconWrapper>
);

// Arrow Up Icon
export const ArrowUpIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M12 19V5" />
    <path d="M5 12l7-7 7 7" />
  </IconWrapper>
);

// Sun Icon (Light Mode)
export const SunIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="M4.93 4.93l1.41 1.41" />
    <path d="M17.66 17.66l1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="M6.34 17.66l-1.41 1.41" />
    <path d="M19.07 4.93l-1.41 1.41" />
  </IconWrapper>
);

// Moon Icon (Dark Mode)
export const MoonIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </IconWrapper>
);

// Menu Icon (Hamburger)
export const MenuIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </IconWrapper>
);

// Close Icon (X)
export const CloseIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </IconWrapper>
);

// Chevron Down Icon
export const ChevronDownIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M6 9l6 6 6-6" />
  </IconWrapper>
);

// GitHub Icon
export const GitHubIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </IconWrapper>
);

// Mail Icon
export const MailIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconWrapper>
);

// Phone Icon
export const PhoneIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </IconWrapper>
);

// Location/Map Pin Icon
export const MapPinIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </IconWrapper>
);

// LinkedIn Icon
export const LinkedInIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </IconWrapper>
);

// Twitter/X Icon
export const TwitterIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </IconWrapper>
);

// Instagram Icon
export const InstagramIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <path d="M17.5 6.5h.01" />
  </IconWrapper>
);

// Facebook Icon
export const FacebookIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </IconWrapper>
);

// Sparkle Icon - Premium quality indicator
export const SparkleIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3Z" />
  </IconWrapper>
);

// CPU/Processor Icon
export const ProcessorIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3" />
    <path d="M15 1v3" />
    <path d="M9 20v3" />
    <path d="M15 20v3" />
    <path d="M20 9h3" />
    <path d="M20 14h3" />
    <path d="M1 9h3" />
    <path d="M1 14h3" />
  </IconWrapper>
);

// Network/Integration Icon
export const NetworkIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="5" r="3" />
    <circle cx="5" cy="19" r="3" />
    <circle cx="19" cy="19" r="3" />
    <path d="M12 8v4" />
    <path d="M5 16l7-4 7 4" />
  </IconWrapper>
);

// Rocket/Launch Icon
export const RocketIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </IconWrapper>
);

// Quote Icon
export const QuoteIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V21z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </IconWrapper>
);

// Star Icon
export const StarIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </IconWrapper>
);

// Bot/AI Assistant Icon
export const BotIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <path d="M8 16h.01" />
    <path d="M16 16h.01" />
  </IconWrapper>
);

// Message/Chat Icon
export const MessageIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </IconWrapper>
);

// Send Icon
export const SendIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M22 2L11 13" />
    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
  </IconWrapper>
);

// User Icon
export const UserIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="8" r="5" />
    <path d="M20 21a8 8 0 1 0-16 0" />
  </IconWrapper>
);

// Users/Team Icon
export const UsersIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="9" cy="7" r="4" />
    <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
  </IconWrapper>
);

// Cookie Icon
export const CookieIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
    <path d="M8.5 8.5h.01" />
    <path d="M8 12h.01" />
    <path d="M12 12h.01" />
    <path d="M12 16h.01" />
    <path d="M16 12h.01" />
  </IconWrapper>
);

// Settings/Gear Icon
export const SettingsIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </IconWrapper>
);

// Code Icon
export const CodeIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M16 18l6-6-6-6" />
    <path d="M8 6l-6 6 6 6" />
  </IconWrapper>
);

// Zap/Lightning Icon
export const ZapIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconWrapper>
);

// Clock/Time Icon
export const ClockIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </IconWrapper>
);

// Dollar/Money Icon
export const DollarIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M12 2v20" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </IconWrapper>
);

// Target/Goal Icon
export const TargetIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </IconWrapper>
);

// Eye/Vision Icon
export const EyeIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </IconWrapper>
);

// Brain Icon
export const BrainIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.54" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.54" />
  </IconWrapper>
);

// Chevron Left Icon
export const ChevronLeftIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="m15 18-6-6 6-6" />
  </IconWrapper>
);

// Chevron Right Icon
export const ChevronRightIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="m9 18 6-6-6-6" />
  </IconWrapper>
);

// Chevron Up Icon
export const ChevronUpIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="m18 15-6-6-6 6" />
  </IconWrapper>
);

// Shield Icon
export const ShieldIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </IconWrapper>
);

// Search Icon
export const SearchIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </IconWrapper>
);

// Filter Icon
export const FilterIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" />
  </IconWrapper>
);

// External Link Icon
export const ExternalLinkIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15,3 21,3 21,9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </IconWrapper>
);

// Trending Up Icon
export const TrendingUpIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <polyline points="23,6 13.5,15.5 8.5,10.5 1,18" />
    <polyline points="17,6 23,6 23,12" />
  </IconWrapper>
);

// Circuit Board Icon
export const CircuitIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M11 9h4a2 2 0 0 0 2-2V3" />
    <circle cx="9" cy="9" r="2" />
    <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
    <circle cx="15" cy="15" r="2" />
  </IconWrapper>
);

// Help Circle Icon
export const HelpIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </IconWrapper>
);

// Lightbulb Icon
export const LightbulbIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </IconWrapper>
);

// Check Circle Icon (larger, filled style)
export const CheckCircleIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </IconWrapper>
);

// Graduation Cap Icon
export const GraduationCapIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3 3 9 3 12 0v-5" />
  </IconWrapper>
);

// Briefcase Icon
export const BriefcaseIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </IconWrapper>
);

// Export all icons
export {
  IconWrapper,
};

export default {
  AutomationIcon,
  NeuralIcon,
  SalesIcon,
  OnboardingIcon,
  ProjectIcon,
  BillingIcon,
  SocialIcon,
  DiscoveryIcon,
  CalendarIcon,
  CheckIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  SunIcon,
  MoonIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  GitHubIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
  FacebookIcon,
  SparkleIcon,
  ProcessorIcon,
  NetworkIcon,
  RocketIcon,
  QuoteIcon,
  StarIcon,
  BotIcon,
  MessageIcon,
  SendIcon,
  UserIcon,
  UsersIcon,
  CookieIcon,
  SettingsIcon,
  CodeIcon,
  ZapIcon,
  ClockIcon,
  DollarIcon,
  TargetIcon,
  EyeIcon,
  BrainIcon,
  ShieldIcon,
  SearchIcon,
  FilterIcon,
  ExternalLinkIcon,
  TrendingUpIcon,
  CircuitIcon,
  HelpIcon,
  LightbulbIcon,
  CheckCircleIcon,
  GraduationCapIcon,
  BriefcaseIcon,
};
