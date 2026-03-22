"use client";

import React from "react";

interface BackgroundProps {
  patternId?: string;
}

// Dark subtle background overlay using honeycomb image
export const DarkHoneycombBackground = ({
  patternId = "honeycomb-pattern",
  effect = "beat",
}: {
  patternId?: string;
  effect?: "beat" | "current";
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Base Background Image */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.20]"
        style={{
          backgroundImage: "url('/assets/beeInspiration/2754781-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Beating Glow Overlay */}
      {effect === "beat" && (
        <div
          className="absolute inset-0 mix-blend-color-dodge dark:mix-blend-screen animate-hero-glow-beat origin-center"
          style={{
            backgroundImage: "url('/assets/beeInspiration/2754781-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Subtle orange/brand tint */}
          <div className="absolute inset-0 bg-brand/30 mix-blend-overlay dark:mix-blend-color" />
        </div>
      )}

      {/* Running Current Glow Overlay */}
      {effect === "current" && (
        <div
          className="absolute inset-0 mix-blend-color-dodge dark:mix-blend-screen animate-honeycomb-current origin-center"
          style={{
            backgroundImage: "url('/assets/beeInspiration/2754781-2.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            WebkitMaskImage: "linear-gradient(110deg, transparent 40%, rgba(0,0,0,0.5) 45%, black 50%, rgba(0,0,0,0.5) 55%, transparent 60%)",
            WebkitMaskSize: "250% 100%",
            maskImage: "linear-gradient(110deg, transparent 40%, rgba(0,0,0,0.5) 45%, black 50%, rgba(0,0,0,0.5) 55%, transparent 60%)",
            maskSize: "250% 100%",
          }}
        >
          {/* Subtle orange/brand tint to make the bright lines shine in orange */}
          <div className="absolute inset-0 bg-brand/60 mix-blend-overlay dark:mix-blend-color" />
        </div>
      )}
    </div>
  );
};

// Backward compatibility aliases
export const HoneycombBackground = DarkHoneycombBackground;
export const HexDotBackground = DarkHoneycombBackground;
export const CircuitPatternBackground = DarkHoneycombBackground;
export const DottedGridBackground = DarkHoneycombBackground;
