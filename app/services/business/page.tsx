"use client";

import { Metadata } from "next";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import {
  Building2,
  Globe,
  Shield,
  TrendingUp,
  Users,
  MessageSquare,
  Award,
  Briefcase,
  BarChart3,
  Zap,
  Lock,
  Smartphone,
  Clock,
  Target,
  FileText,
  Headphones,
  ChevronRight,
  CheckCircle,
  Database,
  Cloud,
  Settings,
  Layers,
  Search,
  Mail,
  Phone,
  ArrowUpRight,
  Rocket,
  Crown,
  Palette,
  Code2,
  UserCheck,
  LineChart,
  FolderOpen,
  PresentationIcon,
} from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function CorporateWebsitePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);

  // Section refs for animations
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const statsRef = useRef(null);

  // Animation variants
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

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 4);
    }, 8000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سیستم مدیریت محتوا (CMS)",
      description:
        "سیستم مدیریت محتوای پیشرفته که به تیم شما امکان می‌دهد بدون نیاز به دانش فنی، محتوای وبسایت را به‌روزرسانی کنند. این سیستم شامل مدیریت رسانه، نسخه‌بندی محتوا و قابلیت زمان‌بندی انتشار است. همچنین امکان تعریف سطوح دسترسی مختلف برای کاربران وجود دارد تا هر بخش توسط افراد مسئول مدیریت شود.",
      benefits: [
        "ویرایش آسان بدون کدنویسی",
        "مدیریت چندکاربره با سطوح دسترسی",
        "نسخه‌بندی و بازیابی محتوا",
        "زمان‌بندی انتشار مطالب",
      ],
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "پورتال کارمندان و مشتریان",
      description:
        "فضای اختصاصی برای کارمندان و مشتریان شما با قابلیت ورود امن. کارمندان می‌توانند به اسناد داخلی، اخبار شرکت و ابزارهای کاری دسترسی داشته باشند. مشتریان نیز می‌توانند سفارشات، فاکتورها و تیکت‌های پشتیبانی خود را مدیریت کنند. این پورتال با احراز هویت دو مرحله‌ای و رمزنگاری داده‌ها، امنیت بالایی را تضمین می‌کند.",
      benefits: [
        "دسترسی با احراز هویت دومرحله‌ای",
        "داشبورد شخصی‌سازی شده",
        "مدیریت اسناد و فایل‌ها",
        "سیستم تیکتینگ یکپارچه",
        "ارتباطات داخلی بهینه",
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "گزارشات و تحلیل داده",
      description:
        "داشبورد تحلیلی جامع که اطلاعات کلیدی عملکرد کسب‌وکار را در اختیار مدیران قرار می‌دهد. از آمار بازدیدکنندگان و رفتار کاربران گرفته تا گزارشات فروش و عملکرد تیم‌ها. با یکپارچه‌سازی Google Analytics و ابزارهای تحلیلی پیشرفته، تصمیم‌گیری بر اساس داده‌های واقعی انجام می‌شود.",
      benefits: [
        "گزارشات Real-time",
        "نمودارهای تعاملی و بصری",
        "Export در فرمت‌های مختلف",
        "تحلیل رفتار کاربران",
        "KPI Dashboard سفارشی",
      ],
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "چندزبانه و بین‌المللی",
      description:
        "وبسایت شرکتی شما با پشتیبانی از چندین زبان، آماده حضور در بازارهای جهانی است. سیستم مدیریت ترجمه، تشخیص خودکار زبان بر اساس موقعیت جغرافیایی، و بهینه‌سازی SEO برای هر زبان از ویژگی‌های این بخش است. همچنین امکان نمایش قیمت‌ها در ارزهای مختلف و سازگاری با قوانین GDPR وجود دارد.",
      benefits: [
        "پشتیبانی نامحدود از زبان‌ها",
        "SEO بهینه برای هر زبان",
        "تشخیص خودکار زبان کاربر",
        "مدیریت محتوای چندزبانه",
        "سازگاری با استانداردهای بین‌المللی",
      ],
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳۸٪",
      label: "افزایش نرخ تبدیل",
      description:
        "شرکت‌های دارای وبسایت حرفه‌ای و بهینه، نرخ تبدیل بازدیدکننده به مشتری را تا ۳۸٪ افزایش می‌دهند.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۸۵٪",
      label: "صرفه‌جویی در زمان",
      description:
        "اتوماسیون فرآیندها و CMS پیشرفته، زمان مدیریت محتوا و ارتباطات را تا ۸۵٪ کاهش می‌دهد.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳X",
      label: "افزایش اعتبار برند",
      description:
        "حضور حرفه‌ای آنلاین، اعتبار و اعتماد به برند شما را تا ۳ برابر افزایش می‌دهد.",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۹۹.۹٪",
      label: "آپتایم تضمینی",
      description:
        "با زیرساخت ابری و سیستم‌های پشتیبان، وبسایت شما همیشه در دسترس خواهد بود.",
    },
  ];

  const keyFeatures = [
    {
      icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Company Profile",
      desc: "معرفی جامع شرکت، تیم و خدمات",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Product Catalog",
      desc: "کاتالوگ محصولات با جستجوی پیشرفته",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Headphones className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Support System",
      desc: "سیستم پشتیبانی و تیکتینگ ۲۴/۷",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "SEO Optimized",
      desc: "بهینه‌سازی کامل برای موتورهای جستجو",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Enterprise Security",
      desc: "امنیت سطح سازمانی با SSL و WAF",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Cloud Infrastructure",
      desc: "زیرساخت ابری با مقیاس‌پذیری بالا",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <LineChart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analytics Dashboard",
      desc: "داشبورد تحلیلی با گزارشات جامع",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "API Integration",
      desc: "یکپارچه‌سازی با سیستم‌های سازمانی",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Mobile Responsive",
      desc: "طراحی واکنش‌گرا برای همه دستگاه‌ها",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-2 sm:px-4 py-1 rounded-full">
              <Building2 className="w-4 h-4" />
              <span className="text-xs sm:text-sm">
                Corporate Website Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient-animated bg-clip-text text-transparent font-noto-h1">
                وبسایت شرکتی حرفه‌ای
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              dir="rtl"
            >
              طراحی و توسعه وبسایت شرکتی با سیستم مدیریت محتوای پیشرفته، امنیت
              سطح سازمانی و قابلیت‌های یکپارچه‌سازی با سیستم‌های کسب‌وکار شما
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="text-gradient-animated font-persian">
                  شروع پروژه وبسایت شرکتی شما
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:border-white/60 bg-transparent font-persian"
                onClick={() =>
                  document
                    .getElementById("key-features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                مشاهده امکانات
              </Button>
            </div>
          </div>
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

      {/* Key Features Section */}
      <motion.section
        ref={featuresRef}
        id="key-features"
        className="py-16 sm:py-20 px-4 bg-black/30 text-center flex items-center justify-center min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto text-left w-full">
          <motion.div variants={fadeInUp} className="mb-8 sm:mb-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">
                Key Features
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-noto-h2 px-4 sm:px-8 text-white mb-3 sm:mb-4 leading-tight"
            >
              قابلیت‌های کلیدی وبسایت شرکتی
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <p
                className="text-base sm:text-lg text-gray-300 max-w-3xl font-persian px-4"
                dir="rtl"
              >
                با کلیک بر روی هر قابلیت، جزئیات و مزایای آن را مشاهده کنید
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeInScale}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 my-auto border border-white/10 flex flex-col justify-center"
          >
            {/* Feature Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-center cursor-pointer transition-all duration-300 p-2 sm:p-3 md:p-4 rounded-lg flex flex-col items-center justify-center min-h-[70px] sm:min-h-[90px] md:min-h-[100px] ${
                    activeFeature === index
                      ? "bg-blue-500/20"
                      : "opacity-60 hover:opacity-100 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-blue-400 flex mb-1 sm:mb-2">
                    {feature.icon}
                  </div>
                  <div
                    className="text-center text-xs sm:text-sm font-semibold text-white font-persian leading-tight"
                    dir="rtl"
                  >
                    {feature.title}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Feature Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-left flex flex-col justify-center min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]"
              >
                <h3
                  className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 md:mb-6 font-persian px-2 leading-tight"
                  dir="rtl"
                >
                  {features[activeFeature].title}
                </h3>

                <div className="flex justify-center mb-4 sm:mb-6 md:mb-8">
                  <p
                    className="text-center text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl leading-relaxed font-persian text-sm sm:text-base px-2 sm:px-4"
                    dir="rtl"
                  >
                    {features[activeFeature].description}
                  </p>
                </div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="flex flex-wrap gap-1 sm:gap-2 justify-center px-2 sm:px-4"
                >
                  {features[activeFeature].benefits.map((benefit, i) => (
                    <motion.span
                      key={i}
                      variants={staggerItem}
                      className="text-xs sm:text-sm bg-blue-500/20 text-blue-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-persian whitespace-nowrap"
                      dir="rtl"
                    >
                      {benefit}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section
        ref={statsRef}
        id="results"
        className="py-16 sm:py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={fadeInUp} className="mb-8 sm:mb-12">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">
                Business Impact
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              تأثیر وبسایت شرکتی بر کسب‌وکار شما
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              آمار و ارقامی که نشان‌دهنده قدرت حضور آنلاین حرفه‌ای است
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
                  className="text-blue-400 flex justify-center mb-3 sm:mb-4"
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

      {/* Benefits Section */}
      <motion.section
        id="benefits"
        className="py-16 sm:py-20 px-4 bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Comprehensive Features</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              امکانات جامع وبسایت شرکتی مدرن
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              تمام ابزارهایی که برای حضور قدرتمند آنلاین نیاز دارید
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

      {/* Why Section */}
      <motion.section
        id="why-corporate"
        className="py-16 sm:py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Why Corporate Website</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              dir="rtl"
            >
              چرا شرکت شما به وبسایت حرفه‌ای نیاز دارد؟
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              در عصر دیجیتال، وبسایت شرکتی نماینده اصلی برند شما در فضای آنلاین
              است. یک وبسایت حرفه‌ای نه تنها اعتبار شما را افزایش می‌دهد، بلکه
              ابزاری قدرتمند برای رشد کسب‌وکار محسوب می‌شود.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="space-y-6 sm:space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {[
                {
                  icon: <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "اعتبار و برندسازی قدرتمند",
                  desc: "وبسایت حرفه‌ای اولین نقطه تماس مشتریان با برند شماست. طراحی مدرن و محتوای با کیفیت، اعتماد مشتریان را جلب کرده و شما را از رقبا متمایز می‌کند.",
                },
                {
                  icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "رشد و توسعه کسب‌وکار",
                  desc: "با ابزارهای تحلیلی و CRM یکپارچه، می‌توانید رفتار مشتریان را درک کرده، فرصت‌های جدید را شناسایی کنید و استراتژی‌های رشد را پیاده‌سازی نمایید.",
                },
                {
                  icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "امنیت و حفاظت از داده‌ها",
                  desc: "با پروتکل‌های امنیتی پیشرفته، SSL، و سیستم‌های پشتیبان‌گیری خودکار، اطلاعات شرکت و مشتریان شما در بالاترین سطح امنیتی محافظت می‌شود.",
                },
                {
                  icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "دسترسی جهانی ۲۴/۷",
                  desc: "وبسایت شما نماینده‌ای است که هیچ‌گاه خسته نمی‌شود. مشتریان از سراسر جهان در هر ساعتی می‌توانند به اطلاعات، محصولات و خدمات شما دسترسی داشته باشند.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ x: -10 }}
                  className="flex items-start gap-3 sm:gap-4 flex-row-reverse"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 p-2 sm:p-3 rounded-lg flex-shrink-0 mt-1"
                  >
                    {benefit.icon}
                  </motion.div>

                  <div className="flex-1 text-right">
                    <h4
                      className="text-base sm:text-lg text-white font-semibold mb-1 sm:mb-2 font-persian"
                      dir="rtl"
                    >
                      {benefit.title}
                    </h4>
                    <p
                      className="text-sm sm:text-base text-gray-400 font-persian leading-relaxed"
                      dir="rtl"
                    >
                      {benefit.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        id="process"
        className="py-16 sm:py-20 px-4 bg-black/30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Our Process</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              فرآیند توسعه وبسایت شرکتی
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              از ایده تا اجرا، مراحل ساخت وبسایت شرکتی شما
            </motion.p>
          </motion.div>

          <motion.div
            dir="rtl"
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          >
            {[
              {
                step: "01",
                title: "تحلیل و برنامه‌ریزی",
                desc: "بررسی نیازها، اهداف کسب‌وکار و تحلیل رقبا",
                icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "02",
                title: "طراحی UX/UI",
                desc: "طراحی رابط کاربری منحصر به فرد و کاربرپسند",
                icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "03",
                title: "توسعه و برنامه‌نویسی",
                desc: "کدنویسی با آخرین تکنولوژی‌ها و استانداردها",
                icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "04",
                title: "راه‌اندازی و پشتیبانی",
                desc: "استقرار، آموزش و پشتیبانی مستمر",
                icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.2,
                  }}
                  whileHover={{ rotate: 360 }}
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                >
                  {item.icon}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-blue-400 font-bold mb-2 text-sm sm:text-base"
                >
                  {item.step}
                </motion.div>

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 font-persian">
                  {item.title}
                </h3>

                <p
                  className="text-sm sm:text-base text-gray-400 font-persian leading-relaxed px-2"
                  dir="rtl"
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        id="cta"
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 bg-gradient-to-r from-blue-900/50 to-indigo-900/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 px-3 sm:px-4 py-1 rounded-full"
          >
            <span className="text-xs sm:text-sm">Get Started Today</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
          >
            آماده‌اید تا شرکت خود را به سطح بعدی ببرید؟
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-persian px-4"
            dir="rtl"
          >
            با وبسایت شرکتی حرفه‌ای، در دنیای دیجیتال حضوری قدرتمند داشته باشید
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300"
                onClick={() =>
                  document
                    .getElementById("")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="text-gradient-animated font-persian">
                  درخواست مشاوره رایگان
                </span>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-full transition-all duration-300 hover:border-white/60 bg-transparent font-persian"
                onClick={() =>
                  document
                    .getElementById("footer")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <Phone className="w-5 h-5 ml-2" />
                تماس با ما
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

     <Footer />
    </div>
  );
}
