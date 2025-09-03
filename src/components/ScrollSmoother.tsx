"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// Register both ScrollTrigger and ScrollSmoother plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

interface ScrollSmootherProps {
  children: React.ReactNode;
}

const ScrollSmootherComponent = ({ children }: ScrollSmootherProps) => {
  const smootherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Create the smooth scroller
      const smoother = ScrollSmoother.create({
        wrapper: smootherRef.current,
        content: smootherRef.current?.querySelector("#smooth-content"),
        smooth: 1.5, // how long (in seconds) it takes to "catch up" to the native scroll position
        effects: true, // looks for data-speed and data-lag attributes on elements
        smoothTouch: 0.1, // much shorter smoothing time on touch devices
        normalizeScroll: true, // normalize scroll across different devices
        ignoreMobileResize: true, // ignore mobile resize events for better performance
      });

      // Cleanup function
      return () => {
        if (smoother) {
          smoother.kill();
        }
      };
    }
  }, []);

  return (
    <div ref={smootherRef} id="smooth-wrapper" className="relative">
      <div id="smooth-content" className="relative">
        {children}
      </div>
    </div>
  );
};

export default ScrollSmootherComponent;
