"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Code,
  Smartphone,
  Monitor,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Award,
  Rocket,
  CheckCircle,
  Layers,
  Database,
  Cloud,
  Lock,
  Search,
  BarChart,
  Settings,
  MessageSquare,
  Target,
  Sparkles,
  ArrowRight,
  Star,
  Heart,
} from "lucide-react";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import CtaSection from "@/components/services/shared/CtaSection";

export default function DevelopmentServicesPage() {
  const [activeTab, setActiveTab] = useState("frontend");
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);


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

  const serviceItems = [
    {
      icon: <Globe className="w-8 h-8 text-gray-800" />,
      title: "خدمات توسعه وب‌سایت",
      description:
        "طراحی وب‌سایت‌های مدرن، از وب‌سایت‌های شرکتی و فروشگاه‌های آنلاین تا پلتفرم‌های پیچیده با استانداردهای جهانی، ریسپانسیو، سریع و بهینه برای سئو.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-gray-800" />,
      title: "توسعه اپلیکیشن موبایل",
      description:
        "توسعه اپلیکیشن‌های نیتیو (iOS و Android) و کراس-پلتفرم (React Native و Flutter) با رابط کاربری زیبا، عملکرد روان و امکانات پیشرفته.",
    },
    {
      icon: <Monitor className="w-8 h-8 text-gray-800" />,
      title: "نرم‌افزار دسکتاپ سفارشی",
      description:
        "ساخت نرم‌افزارهای دسکتاپ قدرتمند و کاربردی برای مدیریت، اتوماسیون اداری و سیستم‌های enterprise متناسب با نیازهای اختصاصی کسب‌وکار شما.",
    },
    {
      icon: <Award className="w-8 h-8 text-gray-800" />,
      title: "تضمین کیفیت و پشتیبانی",
      description:
        "ارائه پشتیبانی ۲۴/۷، به‌روزرسانی‌های امنیتی، نگهداری و بهبود مستمر برای تضمین رضایت مشتریان و موفقیت بلندمدت پروژه‌ها.",
    },
  ];

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "توسعه وب‌سایت",
      description:
        "طراحی و توسعه وب‌سایت‌های حرفه‌ای با استفاده از جدیدترین فناوری‌ها. از سایت‌های تک‌صفحه‌ای گرفته تا پلتفرم‌های پیچیده تجاری، ما راه‌حل‌های سفارشی متناسب با نیاز شما ارائه می‌دهیم.",
      features: [
        "React, Next.js, Vue.js",
        "طراحی Responsive",
        "سئو داخلی",
        "عملکرد بالا",
      ],
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "توسعه اپلیکیشن موبایل",
      description:
        "اپلیکیشن‌های موبایل نیتیو و کراس‌پلتفرم برای iOS و Android. تجربه کاربری روان، طراحی زیبا و عملکرد بهینه در دستگاه‌های مختلف.",
      features: [
        "React Native, Flutter",
        "iOS & Android",
        "UI/UX مدرن",
        "عملکرد نیتیو",
      ],
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Monitor className="w-12 h-12" />,
      title: "نرم‌افزار دسکتاپ",
      description:
        "نرم‌افزارهای دسکتاپ قدرتمند برای Windows، macOS و Linux. راه‌حل‌های سفارشی برای مدیریت کسب‌وکار، اتوماسیون فرآیندها و افزایش بهره‌وری.",
      features: [
        "Electron Desktop App Framework",
        "کراس‌پلتفرم",
        "رابط کاربری پیشرفته",
        "عملکرد بالا",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const technologies = {
    frontend: [
      {
        name: "Next.js",
        desc: "فول استک React با SSR/SSG، App Router و سرعت فوق‌العاده",
      },
      {
        name: "React",
        desc: "کامپوننت‌های قدرتمند با Suspense، Concurrent و بهینه‌سازی خودکار",
      },
      {
        name: "Vue + Composition API",
        desc: "ری‌اکتیویته سریع، TypeScript native و ماژول‌های سبک",
      },
      {
        name: "Nuxt ",
        desc: "فریم‌ورک full-stack Vue با SSR، Nitro و سرعت لود زیر ۱ ثانیه",
      },
      {
        name: "Astro",
        desc: "خروجی استاتیک فوق‌سریع، جزایل هیدراته و Core Web Vitals عالی",
      },
      {
        name: "Tailwind CSS ",
        desc: "یوتیلیتی‌کلاس‌های JIT، حجم CSS نهایی زیر ۱۰KB و تم کاملاً سفارشی",
      },
    ],
    backend: [
      {
        name: "Express.js",
        desc: "فریم‌ورک سبک و سریع Node.js با Middlewareهای قدرتمند و روتینگ انعطاف‌پذیر برای APIهای پرترافیک",
      },
      {
        name: "Nest.js",
        desc: "فریم‌ورک مدرن TypeScript-first با معماری ماژولار، Dependency Injection و ساختار enterprise-grade",
      },
      {
        name: "GraphQL",
        desc: "API Query Language برای دریافت دقیق داده‌ها، کاهش Over-fetching و افزایش سرعت اپلیکیشن تا ۵۰٪",
      },
      {
        name: "REST API",
        desc: "طراحی RESTful با استاندارد OpenAPI 3، Swagger documentation و caching هوشمند برای scalability بالا",
      },
      {
        name: "PostgreSQL & Redis",
        desc: "پایگاه داده رابطه‌ای قدرتمند با Redis برای caching سریع‌تر از ۱ms و پشتیبانی از میلیون‌ها رکورد",
      },
      {
        name: "containerization ",
        desc: "containerization با Docker و  deployment خودکار و zero-downtime scaling",
      },
    ],

    mobile: [
      {
        name: "React Native + Expo",
        desc: "تک‌کد برای iOS و اندروید، توسعه سریع و آپدیت بدون استور",
      },
      {
        name: "Expo SDK 50+",
        desc: "دسترسی کامل به دوربین، GPS، نوتیفیکیشن، اثر انگشت و سنسورها",
      },
      {
        name: "Expo Router",
        desc: "ناوبری native با بهترین عملکرد و deep-linking خودکار",
      },
      {
        name: "Expo Dev Client",
        desc: "بیلد اختصاصی با امکانات نیتیو بدون نیاز به eject",
      },
      {
        name: "Expo Modules",
        desc: "ماژول‌های آماده برای پرداخت، آنالیتیکس، push و اد‌موب",
      },
      {
        name: "OTA Updates",
        desc: "بروزرسانی آنی بدون نیاز به انتشار در اپ‌استور و گوگل‌پلی",
      },
    ],
    desktop: [
      {
        name: "Electron Framework",
        desc: "توسعه اپلیکیشن‌های کراس‌پلتفرم با JavaScript، HTML و CSS برای Windows، macOS و Linux",
      },
      {
        name: "Native API Integration",
        desc: "دسترسی کامل به APIهای سیستم عامل شامل فایل سیستم، نوتیفیکیشن و سخت‌افزار",
      },
      {
        name: "Auto Updater",
        desc: "سیستم به‌روزرسانی خودکار برای انتشار نسخه‌های جدید بدون نیاز به دانلود دستی",
      },
      {
        name: "SQLite & Local Storage",
        desc: "پایگاه داده محلی قدرتمند برای ذخیره‌سازی اطلاعات آفلاین و همگام‌سازی",
      },
      {
        name: "Multi-Window Architecture",
        desc: "مدیریت چند پنجره همزمان با امکانات پیشرفته Drag & Drop و Window Management",
      },
      {
        name: "Performance Optimization",
        desc: "بهینه‌سازی مصرف حافظه و پردازنده برای عملکرد سریع و روان در تمامی پلتفرم‌ها",
      },
    ],
  };

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "سرعت و کارایی بالا",
      description:
        "بهینه‌سازی کد و استفاده از CDN برای بارگذاری سریع‌تر از 2 ثانیه",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "امنیت در سطح بانکی",
      description:
        "رمزنگاری SSL/TLS، احراز هویت دو مرحله‌ای و حفاظت از داده‌ها",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "سئوی پیشرفته",
      description:
        "بهینه‌سازی برای موتورهای جستجو، افزایش ترافیک ارگانیک و رتبه بهتر",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "تجربه کاربری عالی",
      description: "طراحی UI/UX مدرن با تمرکز بر نیازهای کاربران ایرانی",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "معماری مقیاس‌پذیر",
      description: "معماری microservices برای رشد آینده کسب‌وکار شما",
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "زیرساخت ابری",
      description:
        "استقرار در سرورهای ابری با دسترسی 99.9% و پشتیبان‌گیری خودکار",
    },
  ];

  const process = [
    {
      number: "01",
      title: "مشاوره و تحلیل",
      description:
        "بررسی دقیق نیازهای شما، تحلیل بازار و رقبا، و ارائه راهکار بهینه",
    },
    {
      number: "02",
      title: "طراحی و برنامه‌ریزی",
      description:
        "طراحی رابط کاربری، معماری سیستم و تعیین تکنولوژی‌های مورد استفاده",
    },
    {
      number: "03",
      title: "توسعه و پیاده‌سازی",
      description: "کدنویسی استاندارد با روش‌های Agile و تست مداوم در هر مرحله",
    },
    {
      number: "04",
      title: "تست و کنترل کیفیت",
      description:
        "تست‌های جامع عملکردی، امنیتی و تجربه کاربری قبل از راه‌اندازی",
    },
    {
      number: "05",
      title: "راه‌اندازی و استقرار",
      description: "انتقال به سرور production با صفر downtime و نظارت دقیق",
    },
    {
      number: "06",
      title: "پشتیبانی و نگهداری",
      description: "پشتیبانی 24/7، به‌روزرسانی‌های امنیتی و بهبود مستمر",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white"
      dir="rtl"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500"></div>
          <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
        </div>

        <motion.div
          className="max-w-6xl mx-auto relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
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
                hidden: { y: -50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <span className="bg-gradient-to-r text-gradient-animated  bg-clip-text text-transparent animate-pulse">
                توسعه نرم‌افزار وب، موبایل و دسکتاپ
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              variants={{
                hidden: { y: -30, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              ما در <span className="font-bold text-white">کارا کد</span> با
              استفاده از جدیدترین تکنولوژی‌ها، راه‌حل‌های نرم‌افزاری قدرتمند،
              مقیاس‌پذیر و امن برای کسب‌وکار شما می‌سازیم. از ایده تا اجرا، ما
              همراه شما هستیم.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const element = document.getElementById("services-section");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:border-white/60 bg-transparent font-persian cursor-pointer"
              >
                توضیحات بیشتر
              </Button>

              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-gradient-animated font-bold font-persian">
                  مشاوره رایگان
                </span>
              </Button>
            </motion.div>
          </div>

          {/* Stats */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollIndicator ? 1 : 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <div className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section
        id="services-section"
        className="py-20 px-4 bg-black/30"
        transition={{ duration: 0.5 }}
        initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-noto-h2">
              خدمات توسعه نرم‌افزار
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4">
              ما طیف کاملی از خدمات توسعه نرم‌افزار را با کیفیت بالا و قیمت
              رقابتی ارائه می‌دهیم
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-noto-h2">
              تکنولوژی‌های پیشرفته
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4 ">
              استفاده از جدیدترین و محبوب‌ترین تکنولوژی‌ها برای ساخت بهترین
              محصولات
            </p>
          </motion.div>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveTab("frontend")}
              className={cn(
                "px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                {
                  "bg-gradient-to-r from-blue-500 to-cyan-500 text-white":
                    activeTab === "frontend",
                  "bg-white/5 text-gray-300 hover:bg-white/10":
                    activeTab !== "frontend",
                }
              )}
            >
              <Code className="w-5 h-5 inline ml-2" />
              فرانت‌اند
            </Button>
            <Button
              onClick={() => setActiveTab("backend")}
              className={cn(
                "px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                {
                  "bg-gradient-to-r from-teal-700 to-teal-500 text-white":
                    activeTab === "backend",
                  "bg-white/5 text-gray-300 hover:bg-white/10":
                    activeTab !== "backend",
                }
              )}
            >
              <Database className="w-5 h-5 inline ml-2" />
              بک‌اند
            </Button>

            <Button
              onClick={() => setActiveTab("mobile")}
              className={cn(
                "px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                {
                  "bg-gradient-to-r from-purple-500 to-pink-500 text-white":
                    activeTab === "mobile",
                  "bg-white/5 text-gray-300 hover:bg-white/10":
                    activeTab !== "mobile",
                }
              )}
            >
              <Smartphone className="w-5 h-5 inline ml-2" />
              موبایل
            </Button>
            <Button
              onClick={() => setActiveTab("desktop")}
              className={cn(
                "px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                {
                  "bg-gradient-to-r from-orange-500 to-red-500 text-white":
                    activeTab === "desktop",
                  "bg-white/5 text-gray-300 hover:bg-white/10":
                    activeTab !== "desktop",
                }
              )}
            >
              <Monitor className="w-5 h-5 inline ml-2" />
              دسکتاپ
            </Button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {technologies[activeTab as keyof typeof technologies].map(
                (tech, index) => (
                  <motion.div
                    key={tech.name}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Code className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{tech.name}</h4>
                        <p className="text-sm text-gray-400">{tech.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        className="py-20 px-4 bg-black/30"
        initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={{
              hidden: { y: -50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-noto-h2">
              چرا کارا کد؟
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4">
              مزایای همکاری با ما برای پروژه‌های توسعه نرم‌افزار شما
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={{
              hidden: { y: -50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
            }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-noto-h2">
              فرآیند کار ما
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4">
              از ایده تا اجرا، ما با یک فرآیند شفاف و حرفه‌ای پیش می‌رویم
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                variants={{
                  hidden: { y: 50, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 h-full">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 opacity-20">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Content Section */}
      <motion.section
        className="py-20 px-4 bg-black/30"
        initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
          >
            <motion.div
              className="max-w-3xl mx-auto text-center mb-16"
              variants={{
                hidden: { y: -50, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
              }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-noto-h2">
                توسعه نرم‌افزار حرفه‌ای در ایران
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                <strong className="text-white">کارا کد</strong> یک شرکت پیشرو در
                زمینه توسعه نرم‌افزار در ایران است که با تیمی مجرب و متخصص،
                خدمات جامع توسعه وب‌سایت، اپلیکیشن موبایل و نرم‌افزار دسکتاپ را
                ارائه می‌دهد. ما با استفاده از جدیدترین تکنولوژی‌های روز دنیا
                محصولات نرم‌افزاری با کیفیت بالا، امن و مقیاس‌پذیر می‌سازیم.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 p-6 rounded-xl flex gap-6 items-start border border-transparent hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-300"
                  variants={{
                    hidden: { x: -50, opacity: 0 },
                    visible: { x: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <CtaSection
          accentColor="purple"
          accentColorLight="purple-500"
          accentColorDark="purple-800"
          sectionTitle="آماده برای شروع پروژه خود هستید؟"
          sectionSubtitle="با تیم حرفه‌ای کارا کد، ایده‌های خود را به محصولات نرم‌افزاری قدرتمند تبدیل کنید. همین حالا با ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید. ما آماده‌ایم تا ایده‌های شما را به واقعیت تبدیل کنیم."
          sectionId="cta"
          primaryButtonText="مشاوره رایگان"
        />
      </motion.div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
