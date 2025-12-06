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

const faqData = {
  "خدمات عمومی": [
    {
      question: "چه نوع خدماتی ارائه می‌دهید؟",
      answer: [
        "ما سه دسته اصلی خدمات توسعه نرم‌افزار ارائه می‌دهیم:",
        "- **توسعه وب‌سایت**: از سایت‌های تک‌صفحه‌ای تا پلتفرم‌های پیچیده تجاری",
        "- **اپلیکیشن موبایل**: نیتیو و کراس‌پلتفرم برای iOS و Android",
        "- **نرم‌افزار دسکتاپ**: برای Windows، macOS و Linux",
      ],
    },
    {
      question: "آیا پروژه‌های کوچک را هم می‌پذیرید؟",
      answer:
        "بله، ما پروژه‌ها را در تمام مقیاس‌ها از وب‌سایت‌های ساده شخصی تا پلتفرم‌های enterprise پیچیده می‌پذیریم.",
    },
    {
      question: "آیا مشاوره رایگان ارائه می‌دهید؟",
      answer:
        "بله، ما مشاوره اولیه رایگان برای بررسی نیازهای شما و ارائه راهکار بهینه ارائه می‌دهیم.",
    },
  ],
  "تکنولوژی و فناوری": [
    {
      question: "از چه تکنولوژی‌هایی استفاده می‌کنید؟",
      answer: [
        "ما از جدیدترین و محبوب‌ترین تکنولوژی‌ها استفاده می‌کنیم شامل:",
        "-  **فرانت‌اند** : Next.js، React، Vue.js، Nuxt، Astro",
        "-  **موبایل** : React Native و Expo",
        "-  **دسکتاپ** : Electron",
        "-  **استایل** : Tailwind CSS",
      ],
    },
    {
      question: "آیا می‌توانید با تکنولوژی خاصی که ما می‌خواهیم کار کنید؟",
      answer:
        "بله، تیم ما انعطاف‌پذیر است و می‌تواند با تکنولوژی‌های مختلف کار کند. ما بهترین راه‌حل را متناسب با نیاز پروژه شما پیشنهاد می‌دهیم.",
    },
    {
      question: "آیا وب‌سایت من برای موبایل بهینه خواهد بود؟",
      answer:
        "بله، تمام وب‌سایت‌های ما با طراحی Responsive ساخته می‌شوند و در تمام دستگاه‌ها (موبایل، تبلت، دسکتاپ) به خوبی کار می‌کنند.",
    },
  ],
  "زمان و هزینه": [
    {
      question: "چقدر طول می‌کشد تا پروژه من آماده شود؟",
      answer: [
        "زمان پروژه بستگی به پیچیدگی آن دارد:",
        "- وب‌سایت ساده: 2-4 هفته",
        "- وب‌سایت پیچیده: 2-4 ماه",
        "- اپلیکیشن موبایل: 3-6 ماه",
        "- نرم‌افزار دسکتاپ: 2-6 ماه",
      ],
    },
    {
      question: "هزینه توسعه نرم‌افزار چقدر است؟",
      answer:
        "هزینه بستگی به عوامل متعددی دارد از جمله پیچیدگی، امکانات، تکنولوژی و زمان. پس از مشاوره اولیه، ما یک برآورد دقیق ارائه می‌دهیم.",
    },
    {
      question: "آیا امکان پرداخت به صورت اقساطی وجود دارد؟",
      answer:
        "بله، ما روش‌های پرداخت انعطاف‌پذیری داریم و می‌توانید به صورت مرحله‌ای و همزمان با پیشرفت پروژه هزینه را پرداخت کنید.",
    },
  ],
  "فرآیند کار": [
    {
      question: "فرآیند کار شما چگونه است؟",
      answer: [
        "فرآیند کار ما شامل 6 مرحله است:",
        "1. مشاوره و تحلیل",
        "2. طراحی و برنامه‌ریزی",
        "3. توسعه و پیاده‌سازی",
        "4. تست و کنترل کیفیت",
        "5. راه‌اندازی و استقرار",
        "6. پشتیبانی و نگهداری",
      ],
    },
    {
      question: "آیا می‌توانم پیشرفت پروژه را ببینم؟",
      answer:
        "بله، ما به صورت مستمر با شما در ارتباط هستیم و گزارش‌های پیشرفت منظم ارائه می‌دهیم. همچنین نسخه‌های آزمایشی برای بازبینی در اختیار شما قرار می‌گیرد.",
    },
  ],
  "سئو و بازاریابی": [
    {
      question: "آیا وب‌سایت من برای سئو بهینه می‌شود؟",
      answer: [
        "بله، تمام وب‌سایت‌های ما با سئوی داخلی (On-page SEO) بهینه‌سازی می‌شوند شامل:",
        "- ساختار صحیح HTML",
        "- متاتگ‌های بهینه",
        "- سرعت بالا",
        "- Responsive Design",
      ],
    },
    {
      question: "آیا خدمات بازاریابی دیجیتال هم ارائه می‌دهید؟",
      answer:
        "تمرکز اصلی ما توسعه نرم‌افزار است، اما می‌توانیم شما را برای خدمات بازاریابی راهنمایی کنیم.",
    },
  ],
  "پشتیبانی و نگهداری": [
    {
      question: "بعد از تحویل پروژه چه پشتیبانی ارائه می‌دهید؟",
      answer: [
        "ما پشتیبانی جامع ارائه می‌دهیم:",
        "- پشتیبانی فنی 24/7",
        "- به‌روزرسانی‌های امنیتی",
        "- رفع باگ‌ها",
        "- بهبود و توسعه مستمر",
      ],
    },
    {
      question: "آیا باید برای پشتیبانی هزینه پرداخت کنم؟",
      answer:
        "پشتیبانی اولیه (معمولاً 1-3 ماه) در قیمت پروژه شامل شده است. برای پشتیبانی بلندمدت، پکیج‌های مختلفی ارائه می‌دهیم.",
    },
    {
      question: "اگر مشکلی پیش بیاید چقدر طول می‌کشد تا رفع شود؟",
      answer: [
        "بستگی به شدت مشکل دارد:",
        "- مشکلات بحرانی: کمتر از 4 ساعت",
        "- مشکلات متوسط: 1-2 روز کاری",
        "- بهبودها و تغییرات: بر اساس برنامه‌ریزی",
      ],
    },
  ],
  "میزبانی و استقرار": [
    {
      question: "آیا خدمات میزبانی هم ارائه می‌دهید؟",
      answer:
        "ما در استقرار روی سرورهای ابری به شما کمک می‌کنیم و  سرویس‌های مناسب را برای شما انتخاب می‌کنیم.",
    },
    {
      question: "چقدر uptime سرور تضمین می‌کنید؟",
      answer:
        "با استفاده از زیرساخت‌های ابری معتبر، ما دسترسی 99.9% را تضمین می‌کنیم.",
    },
    {
      question: "آیا از داده‌های من پشتیبان‌گیری می‌شود؟",
      answer: "بله، پشتیبان‌گیری خودکار از تمام داده‌ها انجام می‌شود.",
    },
  ],
  "شروع همکاری": [
    {
      question: "چطور می‌توانم با شما شروع کنم؟",
      answer: [
        "فقط کافی است:",
        "1. از طریق فرم تماس با ما ارتباط بگیرید",
        "2. جلسه مشاوره رایگان رزرو کنید",
        "3. نیازها و اهداف خود را با ما در میان بگذارید",
        "4. پروپوزال و برآورد هزینه دریافت کنید",
      ],
    },
    {
      question: "برای شروع چه اطلاعاتی نیاز است؟",
      answer: [
        "اطلاعات پایه شامل:",
        "- توضیح کلی از پروژه و اهداف",
        "- بودجه تقریبی",
        "- زمان‌بندی مورد انتظار",
        "- نمونه‌های مورد پسند (اگر دارید)",
      ],
    },
    {
      question: "آیا قرارداد رسمی منعقد می‌شود؟",
      answer:
        "بله، برای تمام پروژه‌ها قرارداد رسمی با جزئیات کامل کار، زمان‌بندی و هزینه‌ها منعقد می‌شود.",
    },
  ],
};

export default function FAQPage() {
  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white"
      dir="rtl"
    >
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
              سوالات متداول (FAQ)
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 mt-10 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              variants={{
                hidden: { y: -30, opacity: 0.7 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.3 } },
              }}
            >
              پاسخ به سوالات شما در مورد خدمات، تکنولوژی‌ها و فرآیندهای کاری ما
            </motion.p>
          </div>
        </motion.div>
      </section>

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
