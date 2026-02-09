"use client";

import Image from "next/image";
import {
  CodeIcon,
  MapPinIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  InstagramIcon,
} from "@/components/icons/PremiumIcons";

interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  languages: string[];
  degree: string;
  school?: string;
  experience: string;
  roles?: string[];
  location?: string;
  certifications?: string[];
}

const TeamCards = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Jeph",
      title: "AI Automation Specialist",
      image: "/devTeam/jeph-logo.jpg",
      languages: ["JavaScript", "TypeScript", "Python", "C++", "C#"],
      degree:
        "Bachelor of Science in Electronics and Communications Engineering",
      school: "Mindanao State University - Iligan Institute of Technology",
      experience: "4+ years in software, web, and AI automation",
      roles: ["Co-Founder & former CTO of Nyxpro (IT Services BPO)"],
      location: "Philippines",
      certifications: [
        "Nucamp Full-Stack Coding Bootcamp",
        "IBM DevOps & Software Engineering – Certified Professional",
        "Treehouse Full Stack JavaScript",
        "Treehouse Python Developer Bootcamp",
      ],
    },
    {
      id: 2,
      name: "Yvonne",
      title: "AI Automation Specialist",
      image: "/devTeam/yvonne-picture.jpg",
      languages: ["JavaScript", "TypeScript", "Python"],
      degree: "Kodego Bootcamp Graduate",
      experience: "1 year of experience in Automation",
      location: "Philippines",
    },
    {
      id: 3,
      name: "Clint",
      title: "AI Automation Specialist",
      image: "/devTeam/clint-picture.jpg",
      languages: ["Python", "JavaScript", "TypeScript", "C++"],
      degree: "BS Information Technology – Magna Cum Laude",
      school: "Mindanao State University - Iligan Institute of Technology",
      experience: "2 years of experience in Automation",
      location: "Philippines",
    },
    {
      id: 4,
      name: "Jeah",
      title: "AI Automation Specialist",
      image: "/devTeam/jeah-picture.jpg",
      languages: ["Python", "JavaScript", "TypeScript", "C++"],
      degree: "BS Information Technology – Magna Cum Laude",
      school: "Mindanao State University - Iligan Institute of Technology",
      experience: "1 year of experience in Automation",
      location: "Philippines",
    },
    {
      id: 5,
      name: "Gabrielle",
      title: "AI Automation Specialist",
      image: "/devTeam/gabrielle-picture.jpg",
      languages: ["Python", "JavaScript", "TypeScript", "C++"],
      degree: "BS Information Technology – Magna Cum Laude",
      school: "Mindanao State University - Iligan Institute of Technology",
      experience: "1 year of experience in Automation",
      location: "Philippines",
    },
    {
      id: 6,
      name: "Christine",
      title: "AI Automation Specialist",
      image: "/devTeam/christine-picture.jpg",
      languages: ["Python", "JavaScript", "TypeScript", "C++"],
      degree: "BS Information Technology – Magna Cum Laude",
      school: "Mindanao State University - Iligan Institute of Technology",
      experience: "1 year of experience in Automation",
      location: "Philippines",
    },
    {
      id: 7,
      name: "Mohammed",
      title: "AI Automation Specialist",
      image: "/devTeam/mohammed.jpg",
      languages: ["JavaScript", "Python", "TypeScript"],
      degree: "Electronics and Communications Engineering",
      location: "Kilakarai",
      experience: "1 year of experience in Automation",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {teamMembers.map((member, index) => (
        <div
          key={member.id}
          className="card-glass group p-6 transition-all duration-500 ease-out-expo
            hover:shadow-brand hover:-translate-y-1"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          {/* Profile Header */}
          <div className="flex items-center space-x-4 mb-5">
            <div className="relative">
              <div className="icon-container w-16 h-16 p-0 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-ink dark:text-white
                group-hover:text-brand transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-sm text-brand font-medium">
                {member.title}
              </p>
              {member.location && (
                <div className="flex items-center mt-1">
                  <MapPinIcon size={12} className="text-ink-tertiary dark:text-gray-500 mr-1" />
                  <span className="text-xs text-ink-tertiary dark:text-gray-500">
                    {member.location}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-5">
            <div className="flex items-center mb-2">
              <CodeIcon size={14} className="text-brand mr-2" />
              <h4 className="text-sm font-medium text-ink dark:text-white">
                Programming Languages
              </h4>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {member.languages.slice(0, 3).map((language, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-brand/10 text-brand font-medium hex-cut-sm text-xs
                    border border-brand/20"
                >
                  {language}
                </span>
              ))}
              {member.languages.length > 3 && (
                <div className="relative group/tooltip">
                  <span className="px-2 py-1 bg-ink/5 dark:bg-white/5 text-ink-tertiary dark:text-gray-400
                    font-medium hex-cut-sm text-xs cursor-pointer hover:bg-brand/10 hover:text-brand
                    transition-all duration-300 border border-ink/10 dark:border-white/10">
                    +{member.languages.length - 3} more
                  </span>
                  {/* Hover Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2
                    bg-ink dark:bg-gray-800 text-white text-xs hex-cut-sm shadow-lg
                    opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300
                    pointer-events-none whitespace-nowrap z-50">
                    {member.languages.slice(3).join(", ")}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0
                      border-l-4 border-r-4 border-t-4 border-transparent border-t-ink dark:border-t-gray-800" />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 pt-4 border-t border-ink/10 dark:border-white/10">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 clip-hex hover:bg-brand/10 transition-colors duration-300 group/icon"
            >
              <LinkedInIcon size={16} className="text-ink-tertiary dark:text-gray-400
                group-hover/icon:text-brand transition-colors duration-300" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 clip-hex hover:bg-brand/10 transition-colors duration-300 group/icon"
            >
              <GitHubIcon size={16} className="text-ink-tertiary dark:text-gray-400
                group-hover/icon:text-brand transition-colors duration-300" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="p-2 clip-hex hover:bg-brand/10 transition-colors duration-300 group/icon"
            >
              <TwitterIcon size={16} className="text-ink-tertiary dark:text-gray-400
                group-hover/icon:text-brand transition-colors duration-300" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 clip-hex hover:bg-brand/10 transition-colors duration-300 group/icon"
            >
              <InstagramIcon size={16} className="text-ink-tertiary dark:text-gray-400
                group-hover/icon:text-brand transition-colors duration-300" />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
