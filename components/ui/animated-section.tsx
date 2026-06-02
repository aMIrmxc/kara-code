"use client"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  dir?: "rtl" | "ltr"
  variants?: any
  scrollDirection: "down" | "up" | null
}

/**
 * AnimatedSection — نسخه اصلاح‌شده
 *
 * تغییرات:
 * 1. حذف useInView → در ناوبری کلاینت‌ساید غیرقابل اعتماد بود
 * 2. حذف initial="hidden" → محتوا را نامرئی می‌کرد و سپس نامرئی باقی می‌ماند
 * 3. حذف framer-motion → از plain <section> استفاده می‌شود
 * 4. حذف AnimatePresence → استفاده نشده بود
 *
 * انیمیشن ورود کارت‌ها توسط CSS animation در page.tsx انجام می‌شود
 * و ۱۰۰٪ قابل اعتماد است چون وابسته به JS state نیست.
 */
export function AnimatedSection({
  children,
  className,
  id,
  dir,
}: AnimatedSectionProps) {
  return (
    <section id={id} dir={dir} className={className}>
      {children}
    </section>
  )
}
