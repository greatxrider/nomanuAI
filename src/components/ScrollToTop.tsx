"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useScrollSmoother } from "@/lib/useScrollSmoother";

export default function ScrollToTop() {
  const pathname = usePathname();
  const { scrollToTop } = useScrollSmoother();

  useEffect(() => {
    // Scroll to top when pathname changes (page navigation)
    scrollToTop();
  }, [pathname, scrollToTop]);

  return null;
}
