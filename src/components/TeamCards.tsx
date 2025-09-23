"use client";

import Image from "next/image";
import { Code, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";

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
      {teamMembers.map((member) => (
        <div
          key={member.id}
          className="group bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-xl shadow-brand-orange/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-brand-orange/20"
        >
          {/* AI Background Effects */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-2 right-2 w-1 h-1 bg-brand-orange/40 rounded-full animate-pulse" />
            <div
              className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-brand-orange/40 rounded-full animate-pulse"
              style={{ animationDelay: "1s" }}
            />
          </div>

          <div className="relative z-10 p-6">
            {/* Profile Header */}
            <div className="flex items-center space-x-4 mb-4">
              <div className="relative">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/25 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={60}
                    height={60}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 w-16 h-16 bg-brand-orange/20 rounded-full blur-md animate-pulse" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-brand-orange transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-sm text-brand-orange font-semibold">
                  {member.title}
                </p>
                {member.location && (
                  <div className="flex items-center mt-1">
                    <MapPin className="w-3 h-3 text-gray-500 mr-1" />
                    <span className="text-xs text-gray-600 dark:text-gray-400">
                      {member.location}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <Code className="w-4 h-4 text-brand-orange mr-2" />
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Programming Languages
                </h4>
              </div>
              <div className="flex flex-wrap gap-1">
                {member.languages.slice(0, 3).map((language, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-brand-orange/10 text-brand-orange font-medium rounded-full text-xs border border-brand-orange/20"
                  >
                    {language}
                  </span>
                ))}
                {member.languages.length > 3 && (
                  <div className="relative group">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 font-medium rounded-full text-xs cursor-pointer hover:bg-brand-orange/10 hover:text-brand-orange transition-all duration-300">
                      +{member.languages.length - 3} more
                    </span>
                    {/* Hover Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap z-50">
                      {member.languages.slice(3).join(", ")}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-800"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-3 pt-2 border-t border-gray-200 dark:border-gray-700">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-1.5 rounded-md hover:bg-brand-orange/10 transition-colors">
                <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-1.5 rounded-md hover:bg-brand-orange/10 transition-colors">
                <Github className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="p-1.5 rounded-md hover:bg-brand-orange/10 transition-colors">
                <Twitter className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-1.5 rounded-md hover:bg-brand-orange/10 transition-colors">
                <Instagram className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCards;
