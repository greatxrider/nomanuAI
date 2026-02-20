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

// Automation / Workflow Icon
export const AutomationIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="8" height="8" x="3" y="3" rx="2" />
    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
    <rect width="8" height="8" x="13" y="13" rx="2" />
  </IconWrapper>
);

// Neural Network Icon
export const NeuralIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="3" />
    <circle cx="6" cy="6" r="3" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="6" r="3" />
    <circle cx="18" cy="18" r="3" />
    <line x1="8.5" x2="15.5" y1="8.5" y2="15.5" />
    <line x1="8.5" x2="15.5" y1="15.5" y2="8.5" />
  </IconWrapper>
);

// Sales CRM Icon
export const SalesIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M3 21l1.65-3.8a2 2 0 0 1 1.9-1.2h2.9a2 2 0 0 1 1.9 1.2L13 21" />
    <path d="M9.19 8.55A4 4 0 1 0 3 10" />
    <path d="M14.5 18.5h2.9a2 2 0 0 0 1.9-1.2l1.65-3.8" />
    <path d="M21 10a4 4 0 1 0-6.19-1.45" />
  </IconWrapper>
);

// Client Onboarding Icon
export const OnboardingIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" x2="20" y1="8" y2="14" />
    <line x1="23" x2="17" y1="11" y2="11" />
  </IconWrapper>
);

// Project Management Icon
export const ProjectIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M8 6h13" />
    <path d="M8 12h13" />
    <path d="M8 18h13" />
    <path d="M3 6h.01" />
    <path d="M3 12h.01" />
    <path d="M3 18h.01" />
  </IconWrapper>
);

// Billing/Payment Icon
export const BillingIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </IconWrapper>
);

// Social Media Icon
export const SocialIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </IconWrapper>
);

// Discovery/Search Icon
export const DiscoveryIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </IconWrapper>
);

// Calendar Icon
export const CalendarIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </IconWrapper>
);

// Check Icon
export const CheckIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <polyline points="20 6 9 17 4 12" />
  </IconWrapper>
);

// Arrow Right Icon
export const ArrowRightIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </IconWrapper>
);

// Arrow Up Icon
export const ArrowUpIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="m5 12 7-7 7 7" />
    <path d="M12 19V5" />
  </IconWrapper>
);

// Sun Icon
export const SunIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </IconWrapper>
);

// Moon Icon
export const MoonIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </IconWrapper>
);

// Menu Icon
export const MenuIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </IconWrapper>
);

// Close Icon
export const CloseIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </IconWrapper>
);

// Chevron Down Icon
export const ChevronDownIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="m6 9 6 6 6-6" />
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
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </IconWrapper>
);

// Phone Icon
export const PhoneIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </IconWrapper>
);

// Map Pin Icon
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
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </IconWrapper>
);

// Twitter Icon
export const TwitterIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </IconWrapper>
);

// Instagram Icon
export const InstagramIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </IconWrapper>
);

// Facebook Icon
export const FacebookIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </IconWrapper>
);

// Sparkle Icon
export const SparkleIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
  </IconWrapper>
);

// Processor Icon
export const ProcessorIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="16" height="16" x="4" y="4" rx="2" />
    <rect width="6" height="6" x="9" y="9" />
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

// Network Icon
export const NetworkIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="6" height="6" x="16" y="16" rx="1" />
    <rect width="6" height="6" x="2" y="16" rx="1" />
    <rect width="6" height="6" x="9" y="2" rx="1" />
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
    <path d="M12 12V8" />
  </IconWrapper>
);

// Rocket Icon
export const RocketIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
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

// Bot Icon
export const BotIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="M2 14h2" />
    <path d="M20 14h2" />
    <path d="M15 13v2" />
    <path d="M9 13v2" />
  </IconWrapper>
);

// Message Icon
export const MessageIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </IconWrapper>
);

// Send Icon
export const SendIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </IconWrapper>
);

// User Icon
export const UserIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </IconWrapper>
);

// Users Icon
export const UsersIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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

// Settings Icon
export const SettingsIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
    <circle cx="12" cy="12" r="3" />
  </IconWrapper>
);

// Code Icon
export const CodeIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </IconWrapper>
);

// Zap Icon
export const ZapIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </IconWrapper>
);

// Clock Icon
export const ClockIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </IconWrapper>
);

// Dollar Icon
export const DollarIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <line x1="12" x2="12" y1="2" y2="22" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </IconWrapper>
);

// Target Icon
export const TargetIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </IconWrapper>
);

// Eye Icon
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
    <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
  </IconWrapper>
);

// External Link Icon
export const ExternalLinkIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" x2="21" y1="14" y2="3" />
  </IconWrapper>
);

// Trending Up Icon
export const TrendingUpIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </IconWrapper>
);

// Circuit Icon
export const CircuitIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" />
    <path d="M11 9h4a2 2 0 0 0 2-2V3" />
    <circle cx="9" cy="9" r="2" />
    <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
    <circle cx="15" cy="15" r="2" />
  </IconWrapper>
);

// Help Icon
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

// Check Circle Icon
export const CheckCircleIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
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

// Hexagon Icon
export const HexagonIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
  </IconWrapper>
);

// Line Chart Icon
export const LineChartIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M3 3v18h18" />
    <path d="m19 9-5 5-4-4-3 3" />
  </IconWrapper>
);

// Credit Card Icon
export const CreditCardIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </IconWrapper>
);

// Share Icon
export const ShareIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
    <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
  </IconWrapper>
);

// Scale Icon
export const ScaleIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </IconWrapper>
);

// Landmark Icon
export const LandmarkIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <line x1="3" x2="21" y1="22" y2="22" />
    <line x1="6" x2="6" y1="18" y2="11" />
    <line x1="10" x2="10" y1="18" y2="11" />
    <line x1="14" x2="14" y1="18" y2="11" />
    <line x1="18" x2="18" y1="18" y2="11" />
    <polygon points="12 2 20 7 4 7" />
  </IconWrapper>
);

// Workflow Icon
export const WorkflowIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="8" height="8" x="3" y="3" rx="2" />
    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
    <rect width="8" height="8" x="13" y="13" rx="2" />
  </IconWrapper>
);

// FileText Icon
export const FileTextIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" x2="8" y1="13" y2="13" />
    <line x1="16" x2="8" y1="17" y2="17" />
    <line x1="10" x2="8" y1="9" y2="9" />
  </IconWrapper>
);

// Receipt Icon
export const ReceiptIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 17.5v-11" />
  </IconWrapper>
);

// Edit Icon
export const EditIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    <path d="m15 5 4 4" />
  </IconWrapper>
);

// Heart Icon
export const HeartIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </IconWrapper>
);

// BarChart Icon
export const BarChartIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <line x1="12" x2="12" y1="20" y2="10" />
    <line x1="18" x2="18" y1="20" y2="4" />
    <line x1="6" x2="6" y1="20" y2="16" />
  </IconWrapper>
);

// Hash Icon
export const HashIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <line x1="4" x2="20" y1="9" y2="9" />
    <line x1="4" x2="20" y1="15" y2="15" />
    <line x1="10" x2="8" y1="3" y2="21" />
    <line x1="16" x2="14" y1="3" y2="21" />
  </IconWrapper>
);

// BookOpen Icon
export const BookOpenIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </IconWrapper>
);

// AlertCircle Icon
export const AlertCircleIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </IconWrapper>
);

// Bell Icon
export const BellIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </IconWrapper>
);

// Camera Icon
export const CameraIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </IconWrapper>
);

// CheckSquare Icon
export const CheckSquareIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <polyline points="9 11 12 14 22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </IconWrapper>
);

// ClipboardCheck Icon
export const ClipboardCheckIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="m9 14 2 2 4-4" />
  </IconWrapper>
);

// Globe Icon
export const GlobeIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="2" x2="22" y1="12" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </IconWrapper>
);

// UserPlus Icon
export const UserPlusIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="8.5" cy="7" r="4" />
    <line x1="20" x2="20" y1="8" y2="14" />
    <line x1="23" x2="17" y1="11" y2="11" />
  </IconWrapper>
);

// Video Icon
export const VideoIcon = ({ size = 24, className = "", ...props }: IconProps) => (
  <IconWrapper size={size} className={className} {...props}>
    <path d="m22 8-6 4 6 4V8Z" />
    <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
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
  HexagonIcon,
  LineChartIcon,
  CreditCardIcon,
  ShareIcon,
  ScaleIcon,
  LandmarkIcon,
  WorkflowIcon,
  FileTextIcon,
  ReceiptIcon,
  EditIcon,
  HeartIcon,
  BarChartIcon,
  HashIcon,
  BookOpenIcon,
  AlertCircleIcon,
  BellIcon,
  CameraIcon,
  CheckSquareIcon,
  ClipboardCheckIcon,
  GlobeIcon,
  UserPlusIcon,
  VideoIcon,
};
