"use client";

import Link from "next/link";
import {
  motion,
  Variants,
  useScroll,
  useTransform,
} from "@/components/ui/motion";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Instagram,
  ArrowUp,
  Phone,
} from "lucide-react";

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: { opacity: 0, y: 50 },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
  exit: { opacity: 0, y: 20 },
};

export default function Footer() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  return (
    <motion.footer
      id="footer"
      className="relative py-12 sm:py-16 px-4 sm:px-6 bg-black/50 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1  gap-8">
         

          {/* Quick Links */}
          <motion.div
            className="lg:col-span-2"
            variants={cardVariants}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-white mb-4 text-lg font-mono">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors font-persian"
                >
                  خانه
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-400 hover:text-white transition-colors font-persian"
                >
                  پروژه ها
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors font-persian"
                >
                  تماس با ما
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            className="lg:col-span-3"
            variants={cardVariants}
            transition={{ delay: 0.4 }}
          >
            <h4 className="font-semibold text-white mb-4 text-lg font-mono">
              Get in Touch
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400" />
                <a
                  href="mailto:info@kara-code.ir"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  info@kara-code.ir
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <a
                  href="https://wa.me/00989130350774"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Send className="w-5 h-5 text-gray-400" />
                <a
                  href="https://t.me/KaraCodeir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Telegram
                </a>
              </li>
            </ul>
          </motion.div>

           {/* Logo and Branding */}
          <motion.div
            className="lg:col-span-4 text-center "
            variants={cardVariants}
            transition={{ delay: 0.2 }}
          >
            <img
              src="/logos/ck-nobg.png"
              alt="Kara Code Logo"
              className="h-16 sm:h-20 mx-auto  -mb-2"
            />
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-mono">
              Kara Code
            </h3>
            <p className="text-base text-gray-400 font-mono">
              Crafting Digital Excellence
            </p>
            
          </motion.div>
          
        </div>

        <motion.div
          className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm font-mono"
          variants={cardVariants}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} Kara Code. All rights reserved |
          kara-code.ir
        </motion.div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute -top-5 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:translate-x-0 z-20 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 text-white hover:bg-white/20 transition-all"
        aria-label="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </motion.footer>
  );
}