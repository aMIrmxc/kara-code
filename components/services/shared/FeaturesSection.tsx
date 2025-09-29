"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ArrowRight } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
 title: string;
 description: string;
 benefits: string[];
}

interface FeaturesSectionProps {
  features: Feature[];
  accentColorLight: string; // For the accent elements (e.g., "orange-500")
  accentColorDark: string; // For darker accent elements (e.g., "orange-400")
  sectionTitle: string;
  sectionSubtitle: string;
  sectionId: string;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  features,
  accentColorLight,
  accentColorDark,
  sectionTitle,
  sectionSubtitle,
  sectionId,
}) => {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [features.length]);

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

  return (
    <motion.section
      id={sectionId}
      className={`py-16 sm:py-20 px-4 bg-black/30 text-center flex items-center justify-center min-h-screen`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto text-left w-full">
        <motion.div variants={fadeInUp} className="mb-8 sm:mb-12 text-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className={`mb-4 sm:mb-6 inline-flex items-center gap-2 bg-${accentColorLight}/20 backdrop-blur-sm border border-${accentColorDark}/30 text-${accentColorLight.replace('500', '200')} px-3 sm:px-4 py-1 rounded-full`}
          >
            <span className="text-xs sm:text-sm font-semibold">
              Key Features
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-noto-h2 px-4 sm:px-8 text-white mb-3 sm:mb-4 leading-tight"
          >
            {sectionTitle}
          </motion.h2>

          <motion.div variants={fadeInUp} className="flex justify-center">
            <p
              className="text-base sm:text-lg text-gray-300 max-w-3xl font-persian px-4"
              dir="rtl"
            >
              {sectionSubtitle}
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeInScale}
          className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 my-auto border border-white/10 flex flex-col justify-center"
        >
          {/* Feature Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-center cursor-pointer transition-all duration-300 p-2 sm:p-3 md:p-4 rounded-lg flex flex-col items-center justify-center min-h-[70px] sm:min-h-[90px] md:min-h-[100px] ${
                  activeFeature === index
                    ? `bg-${accentColorLight}/20`
                    : "opacity-60 hover:opacity-100 hover:bg-white/5"
                }`}
                onClick={() => setActiveFeature(index)}
              >
                <div className={`text-${accentColorLight.replace('500', '400')} flex mb-1 sm:mb-2`}>
                  {feature.icon}
                </div>
                <div
                  className="text-center text-xs sm:text-sm font-semibold text-white font-persian leading-tight"
                  dir="rtl"
                >
                  {feature.title}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFeature}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-left flex flex-col justify-center min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]"
            >
              <h3
                className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 font-persian px-2 leading-tight"
                dir="rtl"
              >
                {features[activeFeature].title}
              </h3>

              <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                <p
                  className="text-center text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-relaxed font-persian text-sm sm:text-base px-2 sm:px-4"
                  dir="rtl"
                >
                  {features[activeFeature].description}
                </p>
              </div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="flex flex-wrap gap-1 sm:gap-2 justify-center px-2 sm:px-4"
              >
                {features[activeFeature].benefits.map((benefit, i) => (
                  <motion.span
                    key={i}
                    variants={staggerItem}
                    className={`text-xs sm:text-sm bg-${accentColorLight}/20 text-${accentColorLight.replace('500', '200')} px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-persian whitespace-nowrap`}
                    dir="rtl"
                  >
                    {benefit}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;