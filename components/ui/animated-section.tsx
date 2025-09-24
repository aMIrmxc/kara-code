"use client"

import { AnimatePresence } from "framer-motion"
import { motion, Variants } from "@/components/ui/motion"
import { useInView } from "react-intersection-observer"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  dir?: "rtl" | "ltr"
  variants: Variants
  scrollDirection: "down" | "up" | null
}

export function AnimatedSection({
  children,
  className,
  id,
  dir,
  variants,
  scrollDirection,
}: AnimatedSectionProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Determine the current animation state
  const animateState = inView ? "visible" : "hidden"

  return (
    <motion.section
      ref={ref}
      id={id}
      dir={dir}
      className={className}
      initial="hidden"
      animate={animateState}
      exit="hidden" // Always exit to hidden state
      variants={variants}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  )
}