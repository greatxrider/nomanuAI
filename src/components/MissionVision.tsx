"use client";

import Image from "next/image";
import { Target, Eye, Rocket } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="relative section-padding bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Glowing Orange Gradient Background Effects - Services Style */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Glowing Orange Gradient Orbs - Brighter Edges */}
        <div className="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-brand-orange/70 via-orange-400/40 to-brand-orange-light/60 rounded-full blur-3xl animate-pulse opacity-90" />
        <div
          className="absolute bottom-10 -right-20 w-[500px] h-[500px] bg-gradient-to-r from-brand-orange-light/60 via-brand-orange/70 to-orange-500/50 rounded-full blur-3xl animate-pulse opacity-80"
          style={{ animationDelay: "2s" }}
        />

        {/* Central Glowing Effect */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-orange/10 via-orange-400/15 to-brand-orange/10 rounded-full blur-3xl animate-pulse opacity-40"
          style={{ animationDelay: "4s" }}
        />

        {/* Additional Floating Orange Particles - Brighter */}
        <div className="absolute inset-0 opacity-80">
          {[
            { left: "15%", top: "20%", delay: "0s", size: "w-4 h-4" },
            { left: "85%", top: "30%", delay: "1s", size: "w-3 h-3" },
            { left: "25%", top: "70%", delay: "2s", size: "w-5 h-5" },
            { left: "75%", top: "60%", delay: "3s", size: "w-3 h-3" },
            { left: "45%", top: "15%", delay: "4s", size: "w-4 h-4" },
            { left: "65%", top: "80%", delay: "5s", size: "w-3 h-3" },
          ].map((particle, i) => (
            <div
              key={i}
              className={`absolute ${particle.size} bg-gradient-to-r from-brand-orange to-orange-400 rounded-full animate-pulse`}
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.delay,
                animationDuration: "3s",
                filter: "blur(1px)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container-width relative z-10">
        {/* Main Container */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left Column - Image */}
            <div className="relative">
              <Image
                src="/assets/mission-vision.jpg"
                alt="Mission and Vision"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column - Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-brand-orange/10 border border-brand-orange/30 text-brand-orange rounded-full text-sm font-medium mb-6 w-fit">
                <span className="text-brand-orange mr-2">*</span>
                ABOUT NOMANUAI
              </div>

              {/* Main Title */}
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Your automation journey{" "}
                <span className="text-brand-orange">starts here</span>
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                NomanuAI is a digital automation company that helps
                forward-thinking businesses eliminate operational inefficiencies
                by automating and integrating their web-based tools. We
                specialize in building intelligent, scalable workflows that
                connect your apps, streamline processes, and enable your teams
                to focus on what truly matters—creativity, innovation, and
                growth.
              </p>

              {/* Vision & Mission Single Container */}
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Vision */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Vision
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        To lead the future of intelligent business systems—where
                        automation and AI drive operational excellence, and
                        individuals are free to contribute their most valuable
                        and meaningful work.
                      </p>
                    </div>
                  </div>

                  {/* Mission */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Mission
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        To empower organizations to automate and integrate their
                        business processes—so their people can spend less time
                        on manual tasks and more time on strategic, creative,
                        and high-impact work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="/aboutus"
                className="inline-flex items-center bg-brand-orange hover:bg-orange-500 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-fit"
              >
                Know More About Us!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
