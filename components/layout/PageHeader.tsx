"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <motion.div
        className="max-w-6xl mx-auto relative z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0.7 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        <div className="text-center mb-12">
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-6 text-balance font-mono"
            variants={{
              hidden: { y: -50, opacity: 0.7 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
            }}
          >
            {title}
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 mt-10 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
            variants={{
              hidden: { y: -30, opacity: 0.7 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
            }}
          >
            {subtitle}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
