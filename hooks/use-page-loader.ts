"use client";

import { useState, useEffect } from "react";

// Simplified hook that doesn't interfere with Next.js navigation
export function usePageLoader() {
  const [isLoading, setIsLoading] = useState(false);

  // Only show preloader for initial page load, not during navigation
  // This avoids the useInsertionEffect conflict with Next.js router
  useEffect(() => {
    // Show loading on initial mount only
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return isLoading;
}
