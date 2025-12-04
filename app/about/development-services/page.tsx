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

export default function DevelopmentServicesPage() {
  const [activeTab, setActiveTab] = useState("web");
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
        "Electron, .NET",
        "کراس‌پلتفرم",
        "رابط کاربری پیشرفته",
        "عملکرد بالا",
      ],
      color: "from-orange-500 to-red-500",
    },
  ];

  const technologies = {
    web: [
      { name: "React & Next.js", desc: "فریمورک‌های پیشرفته JavaScript" },
      { name: "Vue & Nuxt", desc: "توسعه سریع و انعطاف‌پذیر" },
      { name: "Node.js", desc: "بک‌اند مقیاس‌پذیر" },
      { name: "TypeScript", desc: "کد امن و قابل نگهداری" },
      { name: "Tailwind CSS", desc: "طراحی مدرن و responsive" },
      { name: "GraphQL & REST", desc: "API های کارآمد" },
    ],
    mobile: [
      { name: "React Native", desc: "توسعه کراس‌پلتفرم" },
      { name: "Flutter", desc: "رابط کاربری زیبا و سریع" },
      { name: "Native iOS", desc: "Swift و Objective-C" },
      { name: "Native Android", desc: "Kotlin و Java" },
      { name: "Firebase", desc: "بک‌اند و سرویس‌های ابری" },
      { name: "Push Notifications", desc: "اعلان‌های هوشمند" },
    ],
    desktop: [
      { name: "Electron", desc: "اپلیکیشن‌های کراس‌پلتفرم" },
      { name: ".NET Framework", desc: "برنامه‌نویسی Windows" },
      { name: "Qt", desc: "رابط کاربری نیتیو" },
      { name: "Python", desc: "اتوماسیون و تحلیل داده" },
      { name: "C++ & C#", desc: "عملکرد بالا" },
      { name: "SQLite & PostgreSQL", desc: "پایگاه داده محلی" },
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

  // const stats = [
  //   { number: "200+", label: "پروژه موفق" },
  //   { number: "150+", label: "مشتری راضی" },
  //   { number: "98%", label: "رضایت مشتریان" },
  //   { number: "24/7", label: "پشتیبانی" },
  // ];

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

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-balance font-mono">
              <span className="bg-gradient-to-r text-gradient-animated  bg-clip-text text-transparent animate-pulse">
               توسعه نرم‌افزار وب، موبایل و دسکتاپ
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4">
              ما در <span className="font-bold text-white">کارا کد</span> با
              استفاده از جدیدترین تکنولوژی‌ها، راه‌حل‌های نرم‌افزاری قدرتمند،
              مقیاس‌پذیر و امن برای کسب‌وکار شما می‌سازیم. از ایده تا اجرا، ما
              همراه شما هستیم.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:border-white/60 bg-transparent font-persian"
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
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>

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
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-noto-h2">
              خدمات توسعه نرم‌افزار
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4">
              ما طیف کاملی از خدمات توسعه نرم‌افزار را با کیفیت بالا و قیمت
              رقابتی ارائه می‌دهیم
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-noto-h2">
              تکنولوژی‌های پیشرفته
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4 ">
              استفاده از جدیدترین و محبوب‌ترین تکنولوژی‌ها برای ساخت بهترین
              محصولات
            </p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveTab("web")}
              className={cn(
                "px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                {
                  "bg-gradient-to-r from-blue-500 to-cyan-500 text-white":
                    activeTab === "web",
                  "bg-white/5 text-gray-300 hover:bg-white/10":
                    activeTab !== "web",
                }
              )}
            >
              <Globe className="w-5 h-5 inline ml-2" />
              وب
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies[activeTab as keyof typeof technologies].map(
              (tech, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
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
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-noto-h2">
              چرا کارا کد؟
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4">
              مزایای همکاری با ما برای پروژه‌های توسعه نرم‌افزار شما
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-noto-h2">
              فرآیند کار ما
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4">
              از ایده تا اجرا، ما با یک فرآیند شفاف و حرفه‌ای پیش می‌رویم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 opacity-20">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-noto-h2 text-center">
              توسعه نرم‌افزار حرفه‌ای در ایران
            </h2>

            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <strong className="text-white">کارا کد</strong> یک شرکت پیشرو در
                زمینه توسعه نرم‌افزار در ایران است که با تیمی مجرب و متخصص،
                خدمات جامع توسعه وب‌سایت، اپلیکیشن موبایل و نرم‌افزار دسکتاپ را
                ارائه می‌دهد. ما با استفاده از جدیدترین تکنولوژی‌های روز دنیا
                مانند React، Next.js، React Native، Flutter و .NET، محصولات
                نرم‌افزاری با کیفیت بالا، امن و مقیاس‌پذیر می‌سازیم.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4 text-center">
                خدمات توسعه وب‌سایت
              </h3>
              <p>
                طراحی و توسعه وب‌سایت‌های مدرن و حرفه‌ای یکی از تخصص‌های اصلی
                ماست. از وب‌سایت‌های شرکتی و فروشگاه‌های آنلاین گرفته تا
                پلتفرم‌های پیچیده و اپلیکیشن‌های وب تحت SPA، ما می‌توانیم هر نوع
                پروژه وب را با استانداردهای جهانی پیاده‌سازی کنیم. تمام
                وب‌سایت‌های ما responsive، سریع، بهینه شده برای سئو و با امنیت
                بالا ساخته می‌شوند.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4 text-center">
                توسعه اپلیکیشن موبایل
              </h3>
              <p>
                در عصر موبایل، داشتن یک اپلیکیشن قدرتمند و کاربرپسند برای موفقیت
                کسب‌وکار ضروری است. ما اپلیکیشن‌های موبایل نیتیو برای iOS و
                Android و همچنین اپلیکیشن‌های کراس‌پلتفرم با React Native و
                Flutter توسعه می‌دهیم. اپلیکیشن‌های ما با رابط کاربری زیبا،
                عملکرد روان و امکانات پیشرفته، تجربه‌ای عالی برای کاربران فراهم
                می‌کنند.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4 text-center">
                نرم‌افزار دسکتاپ سفارشی
              </h3>
              <p>
                برای کسب‌وکارهایی که به راه‌حل‌های نرم‌افزاری اختصاصی نیاز
                دارند، ما نرم‌افزارهای دسکتاپ قدرتمند و کاربردی می‌سازیم. از
                نرم‌افزارهای مدیریت و اتوماسیون اداری گرفته تا سیستم‌های پیچیده
                enterprise، تیم ما می‌تواند هر نوع نیاز نرم‌افزاری شما را
                برآورده کند.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-4 text-center">
                تضمین کیفیت و پشتیبانی
              </h3>
              <p>
                ما نه تنها در مرحله توسعه، بلکه پس از تحویل پروژه نیز در کنار
                شما هستیم. پشتیبانی 24/7، به‌روزرسانی‌های امنیتی، نگهداری و
                بهبود مستمر بخشی از خدمات ماست. رضایت مشتریان و موفقیت پروژه‌ها
                برای ما در اولویت است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/10 rounded-2xl p-12 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-noto-h2">
              آماده برای شروع پروژه خود هستید؟
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200   max-w-3xl mx-auto leading-relaxed font-persian px-4">
              با تیم حرفه‌ای کارا کد، ایده‌های خود را به محصولات نرم‌افزاری
              قدرتمند تبدیل کنید
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200   max-w-3xl mx-auto leading-relaxed font-persian px-4 mb-12">
              همین حالا با ما تماس بگیرید و از مشاوره رایگان بهره‌مند شوید. ما
              آماده‌ایم تا ایده‌های شما را به واقعیت تبدیل کنیم.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                <span className="text-gradient-animated font-bold font-persian">
                 مشاوره رایگان
                </span>
              </Button>
              
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
