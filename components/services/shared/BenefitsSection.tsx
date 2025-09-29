"use client";

import { motion } from "framer-motion";

interface KeyFeature {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}

interface BenefitsSectionProps {
  keyFeatures: KeyFeature[];
  accentColorLight: string;
  accentColorDark: string;
  sectionTitle: string;
  sectionSubtitle: string;
  sectionId: string;
  benefit: string
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  keyFeatures,
  accentColorLight,
  accentColorDark,
  sectionTitle,
  sectionSubtitle,
  sectionId,
  benefit
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
            <span className="text-xs sm:text-sm">{benefit}</span>
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
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 group"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className={`bg-gradient-to-r ${feature.color} p-2 sm:p-3 rounded-lg inline-flex mb-3 sm:mb-4`}
              >
                <div className="text-white">{feature.icon}</div>
              </motion.div>

              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>

              <p
                className="text-sm sm:text-base text-gray-300 font-persian leading-relaxed"
                dir="rtl"
              >
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BenefitsSection;