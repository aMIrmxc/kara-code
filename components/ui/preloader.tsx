"use client"

import { useState, useEffect } from "react"

interface PreloaderProps {
  isLoading: boolean
}

export function Preloader({ isLoading }: PreloaderProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-balance font-mono">
          <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            Kara Code
          </span>
        </h1>
        <p className="text-xl text-gray-300 animate-pulse font-mono">
          Crafting Digital Excellence
        </p>
      </div>
    </div>
  )
}