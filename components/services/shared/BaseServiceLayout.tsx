"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, ArrowRight } from "lucide-react";
import Footer from "@/components/layout/Footer";

interface BaseServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  gradientColors: string; // For the background gradient
  accentColor: string; // For the accent elements (e.g., "from-orange-600 to-red-600")
  accentColorLight: string; // For lighter accent elements (e.g., "orange-50")
  accentColorDark: string; // For darker accent elements (e.g., "orange-400")
  logoIcon: React.ReactNode;
 logoText: string;
}

const BaseServiceLayout: React.FC<BaseServiceLayoutProps> = ({
  children,
  title,
  subtitle,
  description,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  gradientColors,
  accentColor,
  accentColorLight,
  accentColorDark,
  logoIcon,
  logoText,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as any,
      },
    },
 };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as any,
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as any,
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`min-h-screen bg-gradient-to-br ${gradientColors} overflow-x-hidden`}>
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r ${accentColor} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse`}></div>
          <div className={`absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r ${accentColor} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000`}></div>
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r ${accentColor} rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500`}></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className={`mb-4 sm:mb-6 inline-flex items-center gap-2 bg-${accentColorLight}/20 backdrop-blur-sm border border-${accentColorDark}/30 text-${accentColorLight.replace('500', '200')} px-2 sm:px-4 py-1 rounded-full`}>
              {logoIcon}
              <span className="text-xs sm:text-sm">
                {logoText}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient-animated bg-clip-text text-transparent font-noto-h1">
                {title}
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              dir="rtl"
            >
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={onPrimaryButtonClick}
              >
                <span className="text-gradient-animated font-persian">
                  {primaryButtonText}
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:border-white/60 bg-transparent font-persian"
                onClick={onSecondaryButtonClick}
              >
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollIndicator ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Children content (features, stats, benefits, etc.) */}
      {children}

      <Footer />
    </div>
 );
};

export default BaseServiceLayout;