"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"

export function usePageLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => {
      // Delay hiding the preloader to allow for animations
      setTimeout(() => setIsLoading(false), 500)
    }

    // Initial load
    handleComplete()

    // Listen for route changes
    const originalPushState = history.pushState
    history.pushState = function (...args) {
      handleStart()
      originalPushState.apply(history, args)
      // Since we can't directly listen to the end of a route change,
      // we'll rely on the PageTransition component's lifecycle.
      // The initial state change is enough to show the preloader.
    }

    return () => {
      history.pushState = originalPushState
    }
  }, [pathname])

  // Effect for initial load and direct URL visits
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 1000) // Adjust delay as needed
    return () => clearTimeout(timer)
  }, [pathname])

  return isLoading
}