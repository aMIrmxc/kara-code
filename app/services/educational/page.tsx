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
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Star,
  Smartphone,
  Globe,
  TrendingUp,
  MessageSquare,
  Calendar,
  ChartBar,
  Clock,
  Video,
  FileText,
  BarChart3,
  Shield,
  Zap,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Monitor,
  Brain,
  Trophy,
  Target,
  Laptop,
  Headphones,
  PenTool,
  Library,
  CreditCard,
  UserCheck,
  PlayCircle,
  Download,
} from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function EducationalPlatformPage() {
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
        ease: "easeOut" as any
      }
    }
  };

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as any
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as any
      }
    }
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
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سیستم مدیریت دوره‌ها",
      description:
        "سیستم جامع مدیریت دوره‌های آموزشی که به مدرسان امکان ایجاد، ویرایش و انتشار محتوای آموزشی را می‌دهد. با قابلیت آپلود ویدیو، فایل‌های PDF، ارائه‌ها و منابع تکمیلی. دانش‌آموزان می‌توانند به راحتی در دوره‌ها ثبت‌نام کنند، پیشرفت خود را دنبال کنند و با محتوای تعاملی درگیر شوند. سیستم به صورت خودکار پیشرفت را ذخیره و گزارش‌های عملکردی تولید می‌کند.",
      benefits: [
        "آپلود نامحدود محتوا",
        "پشتیبانی از انواع فرمت‌ها",
        "دسته‌بندی هوشمند دوره‌ها",
        "مسیرهای یادگیری شخصی‌سازی شده",
      ],
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "کلاس‌های آنلاین زنده",
      description:
        "پلتفرم ویدیو کنفرانس یکپارچه برای برگزاری کلاس‌های زنده با کیفیت HD. امکانات شامل اشتراک‌گذاری صفحه، تخته سفید دیجیتال، چت زنده، امکان ضبط جلسات، breakout rooms برای کار گروهی، و سیستم حضور و غیاب خودکار. مدرسان می‌توانند کوییز‌های زنده برگزار کنند و بازخورد فوری دریافت نمایند. تمام جلسات به صورت خودکار ضبط و در پروفایل دانش‌آموز ذخیره می‌شود.",
      benefits: [
        "کیفیت HD و پایداری بالا",
        "ضبط خودکار جلسات",
        "ابزارهای تعاملی پیشرفته",
        "یکپارچگی با تقویم",
        "پشتیبانی از 500+ شرکت‌کننده",
      ],
    },
    {
      icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سیستم ارزیابی و گواهینامه",
      description:
        "سیستم ارزیابی هوشمند با انواع آزمون‌ها شامل چندگزینه‌ای، تشریحی، پروژه محور و ارزیابی عملی. بانک سوال با دسته‌بندی بر اساس سطح دشواری، تصحیح خودکار، گزارش‌های تحلیلی عملکرد، و صدور گواهینامه‌های دیجیتال با QR code قابل تأیید. امکان تعیین حد نصاب قبولی، تعداد دفعات مجاز آزمون، و زمان‌بندی انعطاف‌پذیر وجود دارد.",
      benefits: [
        "گواهینامه‌های blockchain",
        "تصحیح خودکار آزمون‌ها",
        "گزارش‌های تحلیلی جامع",
        "سیستم ضد تقلب پیشرفته",
      ],
    },
    {
      icon: <ChartBar className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "داشبورد تحلیلی",
      description:
        "داشبورد مدیریتی قدرتمند با نمایش real-time آمار و اطلاعات. شامل گزارش‌های فروش دوره‌ها، نرخ تکمیل، میانگین نمرات، نقشه حرارتی فعالیت کاربران، پیش‌بینی ریزش دانش‌آموزان با هوش مصنوعی، و توصیه‌های بهبود عملکرد. مدیران می‌توانند ROI هر دوره را محاسبه کنند و تصمیمات داده‌محور اتخاذ نمایند.",
      benefits: [
        "گزارش‌های real-time",
        "پیش‌بینی با AI",
        "صادرات داده‌ها",
        "داشبوردهای شخصی‌سازی شده",
        "هشدارهای هوشمند",
      ],
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۸۵٪",
      label: "افزایش نرخ یادگیری",
      description:
        "پلتفرم‌های آموزشی تعاملی با محتوای چندرسانه‌ای و گیمیفیکیشن، نرخ یادگیری را تا ۸۵٪ نسبت به روش‌های سنتی افزایش می‌دهند.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۷۰٪",
      label: "کاهش هزینه آموزش",
      description:
        "با حذف هزینه‌های فضای فیزیکی، رفت‌وآمد و چاپ منابع، هزینه‌های آموزشی تا ۷۰٪ کاهش می‌یابد.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳x",
      label: "افزایش دسترسی",
      description:
        "پلتفرم آنلاین امکان دسترسی به ۳ برابر دانش‌آموزان بیشتر را فراهم می‌کند، بدون محدودیت جغرافیایی.",
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۹۲٪",
      label: "رضایت کاربران",
      description:
        "۹۲٪ از دانش‌آموزان از انعطاف‌پذیری و کیفیت یادگیری در پلتفرم‌های مدرن رضایت کامل دارند.",
    },
  ];

  const keyFeatures = [
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Video Streaming",
      desc: "پخش ویدیو با کیفیت HD و سرعت بالا",
      color: "from-amber-600 to-yellow-500",
    },
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "AI Learning Path",
      desc: "مسیر یادگیری شخصی‌سازی شده با هوش مصنوعی",
      color: "from-yellow-600 to-amber-500",
    },
    {
      icon: <Headphones className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "24/7 Support",
      desc: "پشتیبانی آنلاین در تمام ساعات",
      color: "from-amber-700 to-orange-500",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Secure Platform",
      desc: "امنیت بالا و حفاظت از داده‌های کاربران",
      color: "from-orange-600 to-amber-600",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Mobile Learning",
      desc: "اپلیکیشن موبایل iOS و Android",
      color: "from-yellow-700 to-amber-600",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Multi-language",
      desc: "پشتیبانی از چندین زبان",
      color: "from-amber-600 to-yellow-600",
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Rich Content",
      desc: "محتوای متنوع: ویدیو، PDF، کوییز",
      color: "from-yellow-600 to-orange-500",
    },
    {
      icon: <UserCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Student Tracking",
      desc: "پیگیری پیشرفت دانش‌آموزان",
      color: "from-orange-600 to-yellow-600",
    },
    {
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Payment Gateway",
      desc: "درگاه پرداخت امن و متنوع",
      color: "from-amber-700 to-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-amber-950 to-yellow-950 overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-yellow-600 to-amber-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-amber-700 to-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 px-2 sm:px-4 py-1 rounded-full">
              <GraduationCap className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Educational Platform Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient-animated bg-clip-text text-transparent font-noto-h1">
                پلتفرم آموزشی هوشمند
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              dir="rtl"
            >
             طراحی و توسعه پلتفرم آموزش آنلاین حرفه‌ای با سیستم مدیریت دوره‌ها، کلاس‌های زنده، ارزیابی هوشمند و صدور گواهینامه دیجیتال
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
                  شروع ساخت پلتفرم آموزشی شما
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
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}

      >
        <div className="max-w-6xl mx-auto text-left w-full">
          <motion.div variants={fadeInUp}  className="mb-8 sm:mb-12 text-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">Core Features</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-noto-h2 px-4 sm:px-8 text-white mb-3 sm:mb-4 leading-tight"
            >
              امکانات اصلی پلتفرم آموزشی
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <p
                className="text-base sm:text-lg text-gray-300 max-w-3xl font-persian px-4"
                dir="rtl"
              >
                با کلیک بر روی هر قابلیت، جزئیات کامل آن را مشاهده کنید
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
                      ? "bg-amber-500/20"
                      : "opacity-60 hover:opacity-100 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-amber-400 flex mb-1 sm:mb-2">
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
                      className="text-xs sm:text-sm bg-amber-500/20 text-amber-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-persian whitespace-nowrap"
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
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div variants={fadeInUp} className="mb-8 sm:mb-12">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">Impact & Results</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              تأثیر پلتفرم آموزشی بر رشد موسسه شما
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              آمار و ارقام واقعی از تحول دیجیتال در آموزش
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
                  transition: { duration: 0.2 }
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center flex flex-col justify-center min-h-[200px] sm:min-h-[250px]"
              >
                <motion.div 
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 2, delay: index * 0.1 }}
                  className="text-amber-400 flex justify-center mb-3 sm:mb-4"
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
                    delay: index * 0.1 + 0.2
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
                
                <p className="text-xs sm:text-sm text-gray-400 font-persian leading-relaxed px-1" dir="rtl">
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
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Platform Features</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              ویژگی‌های کلیدی پلتفرم آموزشی مدرن
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              تمام ابزارهایی که برای ارائه تجربه آموزشی استثنایی نیاز دارید
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
                  transition: { duration: 0.2 }
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
                
                <p className="text-sm sm:text-base text-gray-300 font-persian leading-relaxed" dir="rtl">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Section */}
      <motion.section 
        id="why-educational" 
        className="py-16 sm:py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Why Online Education</span>
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              dir="rtl"
            >
              چرا موسسه شما به پلتفرم آموزشی آنلاین نیاز دارد؟
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              در عصر دیجیتال، آموزش آنلاین نه یک انتخاب بلکه یک ضرورت است. 
              پلتفرم آموزشی مدرن، کلید موفقیت و رشد پایدار موسسه شماست.
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {[
                {
                  icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "دسترسی جهانی",
                  desc: "با حذف محدودیت‌های جغرافیایی، به دانش‌آموزان سراسر دنیا آموزش دهید و بازار هدف خود را به صورت نامحدود گسترش دهید.",
                },
                {
                  icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "یادگیری شخصی‌سازی شده",
                  desc: "با استفاده از هوش مصنوعی و تحلیل داده، مسیر یادگیری منحصر به فرد برای هر دانش‌آموز ایجاد کنید و نتایج بهتری کسب نمایید.",
                },
                {
                  icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "مقیاس‌پذیری بی‌نهایت",
                  desc: "بدون نیاز به افزایش فضا یا منابع فیزیکی، به هزاران دانش‌آموز همزمان خدمات ارائه دهید و درآمد خود را چند برابر کنید.",
                },
                {
                  icon: <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "محتوای تعاملی و جذاب",
                  desc: "با ترکیب ویدیو، انیمیشن، گیمیفیکیشن و محتوای تعاملی، تجربه یادگیری را جذاب‌تر و موثرتر از همیشه کنید.",
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
                    className="bg-gradient-to-r from-amber-600 to-yellow-500 p-2 sm:p-3 rounded-lg flex-shrink-0 mt-1"
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
                    <p className="text-sm sm:text-base text-gray-400 font-persian leading-relaxed" dir="rtl">
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
        viewport={{ once: false, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Development Process</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              مراحل توسعه پلتفرم آموزشی شما
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              در ۴ مرحله ساده و شفاف، پلتفرم آموزشی حرفه‌ای خود را راه‌اندازی کنید
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
                title: "Discovery",
                desc: "تحلیل نیازها و اهداف آموزشی شما",
                icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "02",
                title: "Design",
                desc: "طراحی UX/UI منحصر به فرد و کاربرپسند",
                icon: <Laptop className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "03",
                title: "Development",
                desc: "توسعه با جدیدترین فناوری‌ها",
                icon: <Library className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "04",
                title: "Launch & Support",
                desc: "راه‌اندازی و پشتیبانی مستمر",
                icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />,
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
                    delay: index * 0.2
                  }}
                  whileHover={{ rotate: 360 }}
                  className="bg-gradient-to-r from-amber-600 to-yellow-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                >
                  {item.icon}
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-amber-400 font-bold mb-2 text-sm sm:text-base"
                >
                  {item.step}
                </motion.div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 font-persian leading-relaxed px-2" dir="rtl">
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
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 bg-gradient-to-r from-amber-900/50 to-yellow-900/50"
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
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-200 px-3 sm:px-4 py-1 rounded-full"
          >
            <span className="text-xs sm:text-sm">Start Your Journey</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
          >
            آماده تحول دیجیتال در آموزش هستید؟
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-persian px-4" 
            dir="rtl"
          >
            با پلتفرم آموزشی حرفه‌ای، آینده آموزش را از امروز بسازید
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300"
              >
                <span className="text-gradient-animated font-persian">
                  شروع ساخت پلتفرم آموزشی شما
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

     <Footer />
    </div>
  );
}