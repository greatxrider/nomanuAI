"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Code,
  GraduationCap,
  Briefcase,
  MapPin,
} from "lucide-react";

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
      name: "Jed",
      title: "Jr. Automation Specialist & Web Developer",
      image: "/devTeam/jed-picture.jpg",
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

  // Removed auto-rotation - carousel only changes on manual interaction

  const currentMember = teamMembers[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Carousel Container */}
      <div className="relative bg-white/20 dark:bg-gray-800/20 backdrop-blur-md rounded-3xl border border-white/30 dark:border-gray-700/30 shadow-2xl shadow-brand-orange/10 overflow-hidden transition-all duration-500 ease-in-out">
        {/* AI Background Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-4 w-2 h-2 bg-brand-orange/40 rounded-full animate-pulse" />
          <div
            className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-brand-orange/40 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 right-2 w-1 h-1 bg-brand-orange/50 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 p-8">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous team member"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-full border border-white/40 dark:border-gray-700/40 hover:border-brand-orange/50 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:text-brand-orange transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next team member"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/30 dark:bg-gray-800/30 backdrop-blur-md rounded-full border border-white/40 dark:border-gray-700/40 hover:border-brand-orange/50 transition-all duration-300 hover:scale-110 shadow-lg flex items-center justify-center group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200 group-hover:text-brand-orange transition-colors" />
          </button>

          {/* Team Member Card */}
          <div className="flex flex-col lg:flex-row items-center gap-8 animate-fade-in">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-48 h-48 bg-brand-orange rounded-full flex items-center justify-center shadow-2xl shadow-brand-orange/25 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={currentMember.image}
                  alt={currentMember.name}
                  width={180}
                  height={180}
                  className="w-44 h-44 rounded-full object-cover"
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 w-48 h-48 bg-brand-orange/20 rounded-full blur-xl animate-pulse" />
            </div>

            {/* Member Details */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {currentMember.name}
                </h3>
                <p className="text-xl text-brand-orange font-semibold mb-4">
                  {currentMember.title}
                </p>
              </div>

              {/* Skills Section */}
              <div className="mb-6">
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  <Code className="w-5 h-5 text-brand-orange mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Programming Languages
                  </h4>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2">
                  {currentMember.languages.map((language, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-brand-orange/10 text-brand-orange font-medium rounded-full text-sm border border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="mb-6">
                <div className="flex items-center justify-center lg:justify-start mb-3">
                  <GraduationCap className="w-5 h-5 text-brand-orange mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Education
                  </h4>
                </div>
                <div className="space-y-2">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Degree:</span>{" "}
                    {currentMember.degree}
                  </p>
                  {currentMember.school && (
                    <p className="text-gray-700 dark:text-gray-300">
                      <span className="font-semibold">University:</span>{" "}
                      {currentMember.school}
                    </p>
                  )}
                  {currentMember.certifications &&
                    currentMember.certifications.length > 0 && (
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1">
                          Certifications:
                        </p>
                        <div className="space-y-1">
                          {currentMember.certifications.map((cert, index) => (
                            <p
                              key={index}
                              className="text-sm text-gray-600 dark:text-gray-400 ml-2"
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
                  <Briefcase className="w-5 h-5 text-brand-orange mr-2" />
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Experience
                  </h4>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {currentMember.experience}
                </p>
                {currentMember.roles && (
                  <div className="space-y-1">
                    {currentMember.roles.map((role, index) => (
                      <p
                        key={index}
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        • {role}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Location (if applicable) */}
              {currentMember.location && (
                <div className="flex items-center justify-center lg:justify-start">
                  <MapPin className="w-4 h-4 text-brand-orange mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
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
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-brand-orange scale-125"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-brand-orange/50"
            }`}
          />
        ))}
      </div>

      {/* Member Counter */}
      <div className="text-center mt-4">
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {currentIndex + 1} of {teamMembers.length}
        </span>
      </div>
    </div>
  );
};

export default TeamCarousel;
