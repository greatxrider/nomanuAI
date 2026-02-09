"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CodeIcon,
  GraduationCapIcon,
  BriefcaseIcon,
  MapPinIcon,
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

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Jeph",
      title: "Sr. Automation Specialist",
      image: "/devTeam/jeph-logo.jpg",
      languages: ["JavaScript", "TypeScript", "Python", "C++", "C#"],
      degree:
        "Bachelor of Technology in Mechanical Engineering, Bachelor of Science in Electronics and Communications Engineering",
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
      title: "Jr. Automation Specialist & Web Developer",
      image: "/devTeam/yvonne-picture.jpg",
      languages: ["JavaScript", "TypeScript", "Python"],
      degree: "Kodego Bootcamp Graduate",
      experience: "1 year of experience in Automation",
      location: "Philippines",
    },
    {
      id: 3,
      name: "Jeah",
      title: "Jr. Automation Specialist",
      image: "/devTeam/jeah-picture.jpg",
      languages: ["Python", "JavaScript", "TypeScript", "C++"],
      degree: "BS Information Technology – Magna Cum Laude",
      school: "Mindanao State University - Iligan Institute of Technology",
      experience: "1 year of experience in Automation",
      location: "Philippines",
    },
    {
      id: 4,
      name: "Gabrielle",
      title: "Jr. Automation Specialist",
      image: "/devTeam/gabrielle-picture.jpg",
      languages: ["Python", "JavaScript", "TypeScript", "C++"],
      degree: "BS Information Technology – Magna Cum Laude",
      school: "Mindanao State University - Iligan Institute of Technology",
      experience: "1 year of experience in Automation",
      location: "Philippines",
    },
    {
      id: 5,
      name: "Christine",
      title: "Jr. Automation Specialist",
      image: "/devTeam/christine-picture.jpg",
      languages: ["Python", "JavaScript", "TypeScript", "C++"],
      degree: "BS Information Technology – Magna Cum Laude",
      school: "Mindanao State University - Iligan Institute of Technology",
      experience: "1 year of experience in Automation",
      location: "Philippines",
    },
    {
      id: 6,
      name: "Clint",
      title: "Mid-Level Automation Specialist",
      image: "/devTeam/clint-picture.jpg",
      languages: ["Python", "JavaScript", "TypeScript", "C++"],
      degree: "BS Information Technology – Magna Cum Laude",
      school: "Mindanao State University - Iligan Institute of Technology",
      experience: "2 years of experience in Automation",
      location: "Philippines",
    },
    {
      id: 7,
      name: "Mohammed",
      title: "Jr. Automation Specialist",
      image: "/devTeam/mohammed.jpg",
      languages: ["JavaScript", "Python", "TypeScript"],
      degree: "Electronics and Communications Engineering",
      location: "Kilakarai",
      experience: "1 year of experience in Automation",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="card-glass overflow-hidden transition-all duration-500 ease-out-expo">
        <div className="relative z-10 p-8">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous team member"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12
              bg-paper/80 dark:bg-gray-800/80 backdrop-blur-sm clip-hex
              border border-ink/10 dark:border-white/10 hover:border-brand/50
              transition-all duration-300 hover:scale-110
              flex items-center justify-center group"
          >
            <ChevronLeftIcon size={24} className="text-ink-secondary dark:text-gray-300
              group-hover:text-brand transition-colors duration-300" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next team member"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12
              bg-paper/80 dark:bg-gray-800/80 backdrop-blur-sm clip-hex
              border border-ink/10 dark:border-white/10 hover:border-brand/50
              transition-all duration-300 hover:scale-110
              flex items-center justify-center group"
          >
            <ChevronRightIcon size={24} className="text-ink-secondary dark:text-gray-300
              group-hover:text-brand transition-colors duration-300" />
          </button>

          {/* Team Member Card */}
          <div className="flex flex-col lg:flex-row items-center gap-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="icon-container w-48 h-48 p-0 overflow-hidden">
                <Image
                  src={currentMember.image}
                  alt={currentMember.name}
                  width={192}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Member Details */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h3 className="heading-md text-ink dark:text-white mb-2">
                  {currentMember.name}
                </h3>
                <p className="text-lg text-brand font-semibold mb-4">
                  {currentMember.title}
                </p>
              </div>

              {/* Skills Section */}
              <div className="mb-6">
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  <CodeIcon size={18} className="text-brand mr-2" />
                  <h4 className="text-[15px] font-semibold text-ink dark:text-white">
                    Programming Languages
                  </h4>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {currentMember.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-brand/10 text-brand font-medium hex-cut-sm text-sm
                        border border-brand/20 hover:border-brand/40 transition-all duration-300"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-6">
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  <GraduationCapIcon size={18} className="text-brand mr-2" />
                  <h4 className="text-[15px] font-semibold text-ink dark:text-white">
                    Education
                  </h4>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-ink-secondary dark:text-gray-300">
                    <span className="font-semibold">Degree:</span>{" "}
                    {currentMember.degree}
                  </p>
                  {currentMember.school && (
                    <p className="text-sm text-ink-secondary dark:text-gray-300">
                      <span className="font-semibold">University:</span>{" "}
                      {currentMember.school}
                    </p>
                  )}
                  {currentMember.certifications &&
                    currentMember.certifications.length > 0 && (
                      <div>
                        <p className="text-sm text-ink-secondary dark:text-gray-300 font-semibold mb-1">
                          Certifications:
                        </p>
                        <div className="space-y-1">
                          {currentMember.certifications.map((cert, index) => (
                            <p
                              key={index}
                              className="text-xs text-ink-tertiary dark:text-gray-400 ml-2"
                            >
                              • {cert}
                            </p>
                          ))}
                        </div>
                      </div>
                    )}
                </div>
              </div>

              {/* Experience Section */}
              <div className="mb-6">
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  <BriefcaseIcon size={18} className="text-brand mr-2" />
                  <h4 className="text-[15px] font-semibold text-ink dark:text-white">
                    Experience
                  </h4>
                </div>
                <p className="text-sm text-ink-secondary dark:text-gray-300 mb-2">
                  {currentMember.experience}
                </p>
                {currentMember.roles && (
                  <div className="space-y-1">
                    {currentMember.roles.map((role, index) => (
                      <p
                        key={index}
                        className="text-xs text-ink-tertiary dark:text-gray-400"
                      >
                        • {role}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Location */}
              {currentMember.location && (
                <div className="flex items-center justify-center lg:justify-start">
                  <MapPinIcon size={16} className="text-brand mr-2" />
                  <span className="text-sm text-ink-secondary dark:text-gray-300">
                    {currentMember.location}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {teamMembers.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to team member ${index + 1}`}
            className={`w-3 h-3 clip-hex transition-all duration-300 ${
              index === currentIndex
                ? "bg-brand scale-150"
                : "bg-ink/20 dark:bg-white/20 hover:bg-brand/50"
            }`}
          />
        ))}
      </div>

      {/* Member Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-ink-tertiary dark:text-gray-500">
          {currentIndex + 1} of {teamMembers.length}
        </span>
      </div>
    </div>
  );
};

export default TeamCarousel;
