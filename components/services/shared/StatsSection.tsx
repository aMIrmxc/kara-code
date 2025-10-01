"use client";

import { motion } from "framer-motion";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

interface StatsSectionProps {
  stats: Stat[];
  accentColorLight: string;
  accentColorDark: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionId: string;
  glance: string
}

const StatsSection: React.FC<StatsSectionProps> = ({
  stats,
  accentColorLight,
  accentColorDark,
  sectionTitle,
  sectionSubtitle,
  sectionId,
  glance
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
      <div className="max-w-7xl mx-auto text-center">
        <motion.div variants={fadeInUp} className="mb-8 sm:mb-12">
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
            <span className="text-xs sm:text-sm font-semibold">
              {glance}
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-8 font-noto-h2 leading-tight"
          >
            {sectionTitle}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-persian px-4"
            dir="rtl"
          >
            {sectionSubtitle}
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center flex flex-col justify-center min-h-[200px] sm:min-h-[250px]"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileInView={{ rotate: 360 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ duration: 2, delay: index * 0.1 }}
                className={`text-${accentColorLight.replace(
                  "500",
                  "400"
                )} flex justify-center mb-3 sm:mb-4`}
              >
                {stat.icon}
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  delay: index * 0.1 + 0.2,
                }}
                className="text-3xl sm:text-4xl font-bold text-white mb-2 font-noto-h2"
                dir="rtl"
              >
                {stat.value}
              </motion.div>

              <h4
                className="text-base sm:text-lg font-semibold text-gray-200 mb-2 font-persian"
                dir="rtl"
              >
                {stat.label}
              </h4>

              <p
                className="text-xs sm:text-sm text-gray-400 font-persian leading-relaxed px-1"
                dir="rtl"
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default StatsSection;