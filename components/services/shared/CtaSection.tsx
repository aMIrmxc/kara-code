"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

interface CtaSectionProps {
  accentColor: string;
  accentColorLight: string;
  accentColorDark: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionId: string;
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  start?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({
  accentColor,
  accentColorLight,
  accentColorDark,
  sectionTitle,
  sectionSubtitle,
  sectionId,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  start = "شروع پروژه",
}) => {
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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      id={sectionId}
      className={`min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 bg-gradient-to-r from-${accentColorLight}/50 to-${accentColorDark}/50`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={staggerContainer}
    >
      <div className="max-w-4xl mx-auto text-center w-full">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          className={`mb-4 sm:mb-6 inline-flex items-center gap-2 bg-${accentColorLight}/20 backdrop-blur-sm border border-${accentColorDark}/30 text-${accentColorLight.replace(
            "500",
            "200"
          )} px-3 sm:px-4 py-1 rounded-full`}
        >
          {start && <span className="text-xs sm:text-sm border-white">{start}</span>}
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
        >
          {sectionTitle}
        </motion.h2>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-persian px-4"
          dir="rtl"
        >
          {sectionSubtitle}
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center px-4"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300"
              onClick={onPrimaryButtonClick}
            >
              <span className="text-gradient-animated font-persian">
                {primaryButtonText}
              </span>
            </Button>
          </motion.div>
          {secondaryButtonText && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:border-white/60 bg-transparent font-persian"
                onClick={onSecondaryButtonClick}
              >
                <Phone className="w-5 h-5 ml-2" />
                {secondaryButtonText}
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CtaSection;
