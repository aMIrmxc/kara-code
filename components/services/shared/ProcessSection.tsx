"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  step: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface ProcessSectionProps {
  steps: ProcessStep[];
  accentColor: string;
  accentColorLight: string;
  accentColorDark: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionId: string;
  process: string;
}

const ProcessSection: React.FC<ProcessSectionProps> = ({
  steps,
  accentColor,
  accentColorLight,
  accentColorDark,
  sectionTitle,
  sectionSubtitle,
  sectionId,
  process,
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
      className="py-16 sm:py-20 px-4 bg-black/30"
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
            <span className="text-xs sm:text-sm">{process}</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
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
          dir="rtl"
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{ y: -10 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: index * 0.2,
                }}
                whileHover={{ rotate: 360 }}
                className={`bg-gradient-to-r ${accentColor} w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}
              >
                {item.icon}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ delay: index * 0.2 + 0.2 }}
                className={`text-${accentColorLight.replace(
                  "500",
                  "400"
                )} font-bold mb-2 text-sm sm:text-base`}
              >
                {item.step}
              </motion.div>

              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>

              <p
                className="text-sm sm:text-base text-gray-400 font-persian leading-relaxed px-2"
                dir="rtl"
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ProcessSection;