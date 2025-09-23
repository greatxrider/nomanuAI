"use client";

import { useRef } from "react";

type ScrollBlockPosition = "top" | "center" | "bottom";

export const useScrollSmoother = () => {
  // Keep the ref for backward compatibility but it will always be null
  const smootherRef = useRef<null>(null);

  const scrollTo = (target: string | number, smooth: boolean = true, position: ScrollBlockPosition = "top") => {
    // Use native smooth scrolling
    if (typeof target === "string" && target.startsWith("#")) {
      const element = document.querySelector(target);
      if (element) {
        const block: ScrollLogicalPosition = position === "top" ? "start" : position === "center" ? "center" : "end";
        element.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block });
      }
    } else if (typeof target === "number") {
      window.scrollTo({ top: target, behavior: smooth ? "smooth" : "auto" });
    }
  };

  const scrollToTop = () => {
    // Use native smooth scrolling
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    // Use native smooth scrolling
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToElement = (element: string | Element) => {
    // Use native smooth scrolling
    const targetElement = typeof element === "string" ? document.querySelector(element) : element;
    if (targetElement) {
      const headerHeight = 100; // Approximate header height
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const getScrollTop = () => {
    return window.pageYOffset || document.documentElement.scrollTop;
  };

  const getScrollHeight = () => {
    return document.documentElement.scrollHeight;
  };

  const getProgress = () => {
    // Calculate scroll progress manually
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    return scrollHeight > 0 ? scrollTop / scrollHeight : 0;
  };

  const getVelocity = () => {
    // Velocity tracking not available without GSAP
    return 0;
  };

  const pause = (pause: boolean) => {
    // Pause functionality not available without GSAP
    return false;
  };

  return {
    smoother: null, // Always null since we removed GSAP
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
