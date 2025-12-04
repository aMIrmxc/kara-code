"use client";

import { useState, useEffect } from "react";

interface PreloaderProps {
  isLoading: boolean;
}

export function Preloader({ isLoading }: PreloaderProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("preloader-active");
    } else {
      document.body.classList.remove("preloader-active");
    }

    // Cleanup function to remove the class when the component unmounts
    return () => {
      document.body.classList.remove("preloader-active");
    };
  }, [isLoading]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[100] flex h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 transition-opacity duration-500 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-balance  font-mono">
          <span className="text-gradient-animated bg-clip-text text-transparent ">
            Kara Code
          </span>
        </h1>
        <p className="text-xl text-gray-300 animate-pulse font-mono">
          From Idea to Implementation.
        </p>
      </div>
    </div>
  );
}
