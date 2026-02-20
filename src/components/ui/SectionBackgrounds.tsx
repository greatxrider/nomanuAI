"use client";

import React from "react";

interface BackgroundProps {
  patternId?: string;
}

// Dark subtle background overlay using honeycomb image
export const DarkHoneycombBackground: React.FC<BackgroundProps> = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.20]"
        style={{
          backgroundImage: "url('/assets/beeInspiration/2754781-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    </div>
  );
};

// Backward compatibility aliases
export const HoneycombBackground = DarkHoneycombBackground;
export const HexDotBackground = DarkHoneycombBackground;
export const CircuitPatternBackground = DarkHoneycombBackground;
export const DottedGridBackground = DarkHoneycombBackground;
