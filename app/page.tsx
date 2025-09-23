"use client"

import { useState, useEffect } from "react"
import dynamic from "next/dynamic"
import { Preloader } from "@/components/ui/preloader"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ArrowRight,
  Zap,
  ArrowUp,
  Phone,
} from "lucide-react"

const HomePageContent = dynamic(() => import("./HomePageContent"), {
  ssr: false,
})

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [showFloatingButton, setShowFloatingButton] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      setIsVisible(true)
    }, 500) // Small delay to ensure smooth transition

    const handleScroll = () => {
      const heroSection = document.getElementById("hero")
      const footerSection = document.getElementById("footer")

      if (heroSection && footerSection) {
        const heroRect = heroSection.getBoundingClientRect()
        const footerRect = footerSection.getBoundingClientRect()

        const isHeroScrolledPast = heroRect.bottom < 0
        const isFooterVisible = footerRect.top < window.innerHeight

        setShowFloatingButton(isHeroScrolledPast && !isFooterVisible)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      <Preloader isLoading={isLoading} />
      {/* Hero Section */}
      <section dir="rtl" id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500"></div>
          <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Badge className="mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono hover:bg-white/20 transition-all duration-300">
             Premium Web Development Services
              <Zap className="w-4 h-4 " />
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-balance font-mono">
              <span className="bg-gradient-to-r text-gradient-animated  bg-clip-text text-transparent animate-pulse">
                Kara Code
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed font-persian">
              ما تجربیات دیجیتالی استثنایی خلق می‌کنیم که باعث رشد کسب‌وکار شما شده و با راه‌حل‌های پیشرفته توسعه وب، مخاطبان شما را مجذوب خود می‌کند
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              

              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg rounded-full transition-all duration-300 hover:border-white/60 bg-transparent font-persian"
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
              >
                مشاهده نمونه کارهای ما
              </Button>


              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gray-100 hover:bg-gray-200 border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <>
                    <ArrowRight className="ml-2 w-5 h-5 text-gray-800" />
                    <span className="text-gradient-animated font-bold font-persian">پروژه خود را سفارش دهید</span>
                  </>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {!isLoading && <HomePageContent />}

      {/* Floating Buttons Container */}
      <div dir="rtl"
        className={`fixed bottom-8 right-8 z-50 transition-all duration-500 transform flex flex-col gap-3 ${
          showFloatingButton
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-16 opacity-0 scale-95 pointer-events-none"
        }`}
      >
       
          <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gray-100 hover:bg-gray-200 border-0 px-6 py-4 text-base font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                >
                  <>
                    <ArrowRight className="ml-2 w-5 h-5 text-gray-800" />
                    <span className="text-gradient-animated font-bold font-persian">پروژه خود را سفارش دهید</span>
                  </>
                </Button>
              </Link>
      </div>
    </div>
  )
}


