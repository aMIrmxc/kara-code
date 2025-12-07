"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { AnimatedHeroBackground } from "@/components/ui/animated-background";
import { GradientBackground } from "@/components/ui/gradient-background";
import { Preloader } from "@/components/ui/preloader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Zap } from "lucide-react";
import Head from "next/head";

const HomePageContent = dynamic(() => import("./HomePageContent"), {
  ssr: false,
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: "کارا کد",
  alternateName: "خدمات وب کارا کد",
  url: "https://kara-code.ir",
  logo: "https://kara-code.ir/logos/ck-w-circle.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+98-939-500-8603",
    contactType: "خدمات مشتریان",
    areaServed: "IR",
    availableLanguage: ["fa", "en"],
  },
  sameAs: [
    "https://www.instagram.com/karacode",
    "https://twitter.com/karacode",
    "https://www.linkedin.com/company/karacode",
  ],
};

export default function PageContent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 500); // Small delay to ensure smooth transition

    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const footerSection = document.getElementById("footer");

      if (heroSection && footerSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const footerRect = footerSection.getBoundingClientRect();

        const isHeroScrolledPast = heroRect.bottom < 0;
        const isFooterVisible = footerRect.top < window.innerHeight;

        setShowFloatingButton(isHeroScrolledPast && !isFooterVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <GradientBackground>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <Preloader isLoading={isLoading} />
      {/* Hero Section */}
      <section
        dir="rtl"
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <AnimatedHeroBackground />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 text-center ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="text-xs sm:text-sm mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono hover:bg-white/20 transition-all duration-300">
              Premium Web Development Services
              <Zap className="w-4 h-4 " />
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-balance font-mono">
              <span className="bg-gradient-to-r text-gradient-animated  bg-clip-text text-transparent animate-pulse">
                Kara Code
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto text-pretty leading-relaxed font-persian ">
              ما پروژه‌های نرم‌افزاری استثنایی خلق می‌کنیم که باعث رشد کسب‌وکار
              شما شده و با راه‌حل‌های پیشرفته توسعه وب، مخاطبان شما را مجذوب خود
              می‌کند
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
              <Button
                variant="my-outline"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                درباره ما
              </Button>

              <Link href="/consulting" className="inline-block">
                <Button variant="my-outline">مشاوره رایگان</Button>
              </Link>
              <Link href="/services">
                <Button variant="my-primary">
                  <span className="text-gradient-animated font-bold font-persian">
                    پروژه خود را انتخاب کنید
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div
          className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-500 text-sm font-persian text-center ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div dir="rtl" className="flex gap-4 items-center justify-center">
            {/* <Link
              href="/register"
              className="text-white/60 hover:text-white transition-colors text-persian text-center "
            >
              ایجاد حساب کاربری
            </Link>
            <span className="text-white/60">|</span>
            <Link
              href="/login"
              className="text-white/60 hover:text-white transition-colors text-persian text-center "
            >
              کاربر فعلی هستید؟ اینجا وارد شوید
            </Link> */}
          </div>
        </div>
      </section>

      {!isLoading && <HomePageContent />}
    </GradientBackground>
  );
}
