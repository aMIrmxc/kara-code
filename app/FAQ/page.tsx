"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import CtaSection from "@/components/services/shared/CtaSection";
import Footer from "@/components/layout/Footer";
import { CheckCircle } from "lucide-react";
import ContactCards from "@/components/consulting/ContactCards";
import { faqData } from "./data";
import { PageHeader } from "@/components/layout/PageHeader";

export default function FAQPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white"
      dir="rtl"
    >
      <PageHeader
        title="سوالات متداول (FAQ)"
        subtitle="پاسخ به سوالات شما در مورد خدمات، تکنولوژی‌ها و فرآیندهای کاری ما"
      />

      <motion.section
        id="faq-section"
        className="py-20 px-4 bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="max-w-4xl mx-auto">
          {Object.entries(faqData).map(([category, faqs], index) => (
            <motion.div
              key={category}
              className="mb-12"
              initial={{ opacity: 0.7, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-noto-h2 border-b-2 border-purple-500 pb-4">
                {category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    value={`item-${index}-${faqIndex}`}
                    key={faqIndex}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl mb-4 px-6"
                  >
                    <AccordionTrigger className="text-lg font-semibold text-right hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300 leading-relaxed text-base">
                      {Array.isArray(faq.answer) ? (
                        <ul className="space-y-2 mt-2">
                          {faq.answer.map((line, lineIndex) => (
                            <li key={lineIndex} className="flex items-start">
                              {line.startsWith("-") ||
                              /^\d+\./.test(line.trim()) ? (
                                <>
                                  <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-1 flex-shrink-0" />
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: line
                                        .replace(/^\s*-\s*/, "")
                                        .replace(/^\s*\d+\.\s*/, ""),
                                    }}
                                  />
                                </>
                              ) : (
                                <span>{line}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div
        initial={{ opacity: 0.7 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <CtaSection
          sectionTitle="سوال دیگری دارید؟"
          sectionSubtitle="اگر پاسخ سوال خود را پیدا نکردید، با ما تماس بگیرید. تیم ما آماده پاسخگویی به شماست."
          sectionId="cta-faq"
          children={<ContactCards />}
        />
      </motion.div>

      <Footer />
    </div>
  );
}
