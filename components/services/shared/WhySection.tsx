"use client";

import { motion } from "framer-motion";

interface Benefit {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface WhySectionProps {
  benefits: Benefit[];
  accentColor: string;
  accentColorLight: string;
  accentColorDark: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionId: string;
  why: string;
}

const WhySection: React.FC<WhySectionProps> = ({
  benefits,
  accentColor,
  accentColorLight,
  accentColorDark,
  sectionTitle,
  sectionSubtitle,
  sectionId,
  why,
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
      className="py-16 sm:py-20 px-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          className="text-center mb-12 sm:mb-16"
        >
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
            <span className="text-xs sm:text-sm">{why}</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            dir="rtl"
          >
            {sectionTitle}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
            dir="rtl"
          >
            {sectionSubtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="space-y-6 sm:space-y-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ x: -10 }}
                className="flex items-start gap-3 sm:gap-4 flex-row-reverse"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ delay: 0.1, duration: 0.3 }}
                  className={`bg-gradient-to-r ${accentColor} p-2 sm:p-3 rounded-lg flex-shrink-0 mt-1`}
                >
                  {benefit.icon}
                </motion.div>

                <div className="flex-1 text-right">
                  <h4
                    className="text-base sm:text-lg text-white font-semibold mb-1 sm:mb-2 font-persian"
                    dir="rtl"
                  >
                    {benefit.title}
                  </h4>
                  <p
                    className="text-sm sm:text-base text-gray-400 font-persian leading-relaxed"
                    dir="rtl"
                  >
                    {benefit.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhySection;