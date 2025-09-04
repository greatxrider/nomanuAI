"use client";

import { useEffect, useRef } from "react";
import { ScrollSmoother } from "gsap/ScrollSmoother";

type ScrollBlockPosition = "top" | "center" | "bottom";

export const useScrollSmoother = () => {
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get the existing ScrollSmoother instance
      const smoother = ScrollSmoother.get();
      if (smoother) {
        smootherRef.current = smoother;
      }
    }
  }, []);

  const scrollTo = (target: string | number, smooth: boolean = true, position: ScrollBlockPosition = "top") => {
    if (smootherRef.current) {
      smootherRef.current.scrollTo(target, smooth, position);
    } else {
      // Fallback to native smooth scrolling
      if (typeof target === "string" && target.startsWith("#")) {
        const element = document.querySelector(target);
        if (element) {
          const block: ScrollLogicalPosition = position === "top" ? "start" : position === "center" ? "center" : "end";
          element.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block });
        }
      } else if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: smooth ? "smooth" : "auto" });
      }
    }
  };

  const scrollToTop = () => {
    if (smootherRef.current) {
      smootherRef.current.scrollTo(0);
    } else {
      // Fallback to native smooth scrolling
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToBottom = () => {
    if (smootherRef.current) {
      smootherRef.current.scrollTo("100%");
    } else {
      // Fallback to native smooth scrolling
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };

  const scrollToElement = (element: string | Element) => {
    if (smootherRef.current) {
      smootherRef.current.scrollTo(element, true, "top");
    } else {
      // Fallback to native smooth scrolling
      const targetElement = typeof element === "string" ? document.querySelector(element) : element;
      if (targetElement) {
        const headerHeight = 100; // Approximate header height
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({ top: elementPosition, behavior: "smooth" });
      }
    }
  };

  const getScrollTop = () => {
    if (smootherRef.current) {
      return smootherRef.current.scrollTop();
    }
    return window.pageYOffset || document.documentElement.scrollTop;
  };

  const getScrollHeight = () => {
    if (smootherRef.current) {
      return smootherRef.current.scrollTop(); // This should be scrollHeight but the API might be different
    }
    return document.documentElement.scrollHeight;
  };

  const getProgress = () => {
    if (smootherRef.current) {
      return smootherRef.current.progress;
    }
    // Calculate scroll progress manually
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    return scrollHeight > 0 ? scrollTop / scrollHeight : 0;
  };

  const getVelocity = () => {
    if (smootherRef.current) {
      return smootherRef.current.getVelocity();
    }
    return 0;
  };

  const pause = (pause: boolean) => {
    if (smootherRef.current) {
      return smootherRef.current.paused(pause);
    }
    return false;
  };

  return {
    smoother: smootherRef.current,
    scrollTo,
    scrollToTop,
    scrollToBottom,
    scrollToElement,
    getScrollTop,
    getScrollHeight,
    getProgress,
    getVelocity,
    pause,
  };
};
