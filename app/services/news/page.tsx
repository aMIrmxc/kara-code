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
  Newspaper,
  Clock,
  Globe,
  TrendingUp,
  Users,
  MessageSquare,
  Award,
  MapPin,
  Zap,
  Shield,
  BarChart3,
  Camera,
  Video,
  Radio,
  Rss,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Bell,
  FileText,
  Tv,
  Wifi,
  Search,
  Share2,
  Archive,
  AlertCircle,
  Bookmark,
  Eye,
  Edit3,
  Mic,
  PenTool,
  Database,
  Lock,
  Smartphone,
  Monitor,
  HeadphonesIcon,
} from "lucide-react";

export default function NewsAgencyWebsitePage() {
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
      icon: <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سیستم اخبار فوری",
      description:
        "سیستم پیشرفته انتشار اخبار فوری و عاجل که امکان انتشار لحظه‌ای رویدادها را فراهم می‌کند. با قابلیت نوتیفیکیشن فوری برای کاربران، برچسب‌گذاری اخبار مهم، و نمایش در بخش ویژه صفحه اصلی. این سیستم به شما امکان می‌دهد در کمترین زمان ممکن، اخبار مهم را به اطلاع مخاطبان برسانید و همواره جلوتر از رقبا باشید.",
      benefits: [
        "انتشار در کمتر از ۳۰ ثانیه",
        "اعلان‌های فوری موبایل",
        "پوشش زنده رویدادها",
        "آرشیو جامع اخبار فوری",
      ],
    },
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "محتوای چندرسانه‌ای",
      description:
        "پلتفرم جامع برای مدیریت و نمایش انواع محتوای چندرسانه‌ای شامل ویدیو، پادکست، گالری تصاویر و اینفوگرافیک. با پخش‌کننده ویدیوی اختصاصی، قابلیت پخش زنده، گالری‌های تعاملی و بهینه‌سازی خودکار برای سرعت بارگذاری. همچنین امکان تعامل کاربران با محتوا از طریق نظرات، لایک و اشتراک‌گذاری در شبکه‌های اجتماعی فراهم است.",
      benefits: [
        "پخش زنده رویدادها",
        "گالری‌های تعاملی",
        "پادکست و صوت",
        "اینفوگرافیک متحرک",
        "بهینه‌سازی خودکار تصاویر",
      ],
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "پوشش جهانی اخبار",
      description:
        "سیستم دسته‌بندی پیشرفته برای پوشش اخبار محلی، ملی و بین‌المللی با امکان فیلتر بر اساس موقعیت جغرافیایی. قابلیت نمایش اخبار بر روی نقشه تعاملی، پشتیبانی از چند زبان، و همگام‌سازی با آژانس‌های خبری بین‌المللی. کاربران می‌توانند اخبار مورد علاقه خود را بر اساس منطقه جغرافیایی دنبال کنند.",
      benefits: [
        "نقشه تعاملی اخبار",
        "پشتیبانی چندزبانه",
        "فیلتر جغرافیایی",
        "همگام‌سازی با آژانس‌های جهانی",
        "اخبار محلی سفارشی‌سازی شده",
      ],
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "پنل خبرنگاران",
      description:
        "پنل اختصاصی برای خبرنگاران و نویسندگان با امکان ارسال مستقیم مطالب، ویرایش آنلاین، و مدیریت محتوا. سیستم گردش کار حرفه‌ای برای بررسی و تأیید مطالب، آمار بازدید و تعامل، و ابزارهای ویرایش پیشرفته. خبرنگاران می‌توانند از هر نقطه‌ای گزارش‌های خود را ارسال کنند.",
      benefits: [
        "ارسال مستقیم از موبایل",
        "ویرایشگر پیشرفته",
        "آمار دقیق عملکرد",
        "سیستم امتیازدهی",
        "گردش کار تأیید محتوا",
      ],
    },
  ];

  const stats = [
    {
      icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳x",
      label: "افزایش بازدید",
      description:
        "خبرگزاری‌های دارای وبسایت مدرن و بهینه، تا ۳ برابر بازدید بیشتری نسبت به رقبای سنتی دریافت می‌کنند.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۶۰ ثانیه",
      label: "سرعت انتشار",
      description:
        "از دریافت خبر تا انتشار در وبسایت، کمتر از یک دقیقه زمان نیاز است که سرعت رقابتی چشمگیری ایجاد می‌کند.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۸۵٪",
      label: "تعامل کاربران",
      description:
        "با قابلیت‌های تعاملی مدرن، میزان مشارکت و تعامل کاربران تا ۸۵٪ افزایش می‌یابد.",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۷۰٪",
      label: "بازدید موبایل",
      description:
        "بیش از ۷۰٪ مخاطبان اخبار را از طریق موبایل دنبال می‌کنند؛ طراحی ریسپانسیو ضروری است.",
    },
  ];

  const keyFeatures = [
    {
      icon: <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Breaking News",
      desc: "سیستم اخبار فوری با نوتیفیکیشن",
      color: "from-red-700 to-red-500",
    },
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Live Streaming",
      desc: "پخش زنده رویدادها و گزارش‌ها",
      color: "from-red-600 to-red-400",
    },
    {
      icon: <Archive className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "News Archive",
      desc: "آرشیو جامع و قابل جستجو",
      color: "from-red-700 to-pink-600",
    },
    {
      icon: <Rss className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "RSS Feed",
      desc: "خوراک RSS برای دنبال‌کنندگان",
      color: "from-red-600 to-orange-500",
    },
    {
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Advanced Search",
      desc: "جستجوی پیشرفته در محتوا",
      color: "from-red-500 to-red-400",
    },
    {
      icon: <Share2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Social Sharing",
      desc: "اشتراک‌گذاری در شبکه‌های اجتماعی",
      color: "from-red-700 to-red-600",
    },
    {
      icon: <Edit3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "CMS System",
      desc: "سیستم مدیریت محتوای قدرتمند",
      color: "from-red-600 to-pink-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analytics",
      desc: "آنالیز دقیق رفتار مخاطبان",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: <Bell className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Push Alerts",
      desc: "اعلان‌های فوری برای کاربران",
      color: "from-red-700 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-red-900 overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-red-700 to-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-red-600 to-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-red-700 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-400/30 text-red-200 px-2 sm:px-4 py-1 rounded-full">
              <Newspaper className="w-4 h-4" />
              <span className="text-xs sm:text-sm">News Agency Website Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient-animated bg-clip-text text-transparent font-noto-h1">
                وبسایت خبرگزاری مدرن
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              dir="rtl"
            >
             راه‌اندازی خبرگزاری آنلاین حرفه‌ای با قابلیت انتشار اخبار فوری، محتوای چندرسانه‌ای، پخش زنده و سیستم مدیریت محتوای پیشرفته
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
                  شروع پروژه خبرگزاری آنلاین شما
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
                توضیحات بیشتر
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
          <motion.div variants={fadeInUp}  className="mb-8 sm:mb-12 text-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-400/30 text-red-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">Key Features</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-noto-h2 px-4 sm:px-8 text-white mb-3 sm:mb-4 leading-tight"
            >
              قابلیت‌های کلیدی پلتفرم خبری
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
                      ? "bg-red-600/20"
                      : "opacity-60 hover:opacity-100 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-red-400 flex mb-1 sm:mb-2">
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
                      className="text-xs sm:text-sm bg-red-600/20 text-red-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-persian whitespace-nowrap"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-400/30 text-red-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">Results & Impact</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              تأثیر پلتفرم خبری مدرن بر مخاطبان
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              آمار و ارقامی که قدرت یک خبرگزاری آنلاین حرفه‌ای را نشان می‌دهد
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
                  className="text-red-400 flex justify-center mb-3 sm:mb-4"
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
        viewport={{ once: false, amount: 0.4 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-400/30 text-red-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Platform Features</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              امکانات جامع پلتفرم خبرگزاری
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              تمام ابزارهایی که برای راه‌اندازی و مدیریت یک خبرگزاری حرفه‌ای نیاز دارید
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
        id="why-news-agency" 
        className="py-16 sm:py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-400/30 text-red-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Why Modern News Platform</span>
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              dir="rtl"
            >
              چرا خبرگزاری شما به پلتفرم دیجیتال مدرن نیاز دارد؟
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              در عصر دیجیتال، سرعت و کیفیت انتشار اخبار تعیین‌کننده موفقیت است. 
              پلتفرم مدرن به شما قدرت رقابت در بازار رسانه را می‌دهد.
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {[
                {
                  icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "رشد مخاطب و تعامل",
                  desc: "با پلتفرم تعاملی و محتوای چندرسانه‌ای، مخاطبان بیشتری جذب کنید و زمان حضور آن‌ها در سایت را تا ۳ برابر افزایش دهید.",
                },
                {
                  icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "سرعت بی‌نظیر در انتشار",
                  desc: "با سیستم مدیریت محتوای پیشرفته، اخبار را در کمتر از ۶۰ ثانیه منتشر کنید و همیشه جلوتر از رقبا باشید.",
                },
                {
                  icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "دسترسی جهانی",
                  desc: "با پشتیبانی چندزبانه و بهینه‌سازی برای موتورهای جستجو، اخبار شما به مخاطبان سراسر جهان می‌رسد.",
                },
                {
                  icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "اعتبار و حرفه‌ای‌گری",
                  desc: "پلتفرم مدرن و امن، اعتماد مخاطبان را جلب کرده و شما را به‌عنوان یک منبع خبری معتبر معرفی می‌کند.",
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
                    className="bg-gradient-to-r from-red-700 to-red-500 p-2 sm:p-3 rounded-lg flex-shrink-0 mt-1"
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
        viewport={{ once: false, amount: 0.4 }}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-400/30 text-red-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Our Process</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              مراحل راه‌اندازی خبرگزاری آنلاین
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              در ۴ مرحله ساده پلتفرم خبری حرفه‌ای خود را راه‌اندازی کنید
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
                title: "Analysis",
                desc: "تحلیل نیازها و بازار هدف خبرگزاری",
                icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "02",
                title: "Design",
                desc: "طراحی رابط کاربری و تجربه کاربری",
                icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "03",
                title: "Development",
                desc: "توسعه با تکنولوژی‌های روز",
                icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "04",
                title: "Launch",
                desc: "راه‌اندازی و آموزش تیم خبری",
                icon: <Wifi className="w-5 h-5 sm:w-6 sm:h-6" />,
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
                  className="bg-gradient-to-r from-red-700 to-red-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                >
                  {item.icon}
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-red-400 font-bold mb-2 text-sm sm:text-base"
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
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 bg-gradient-to-r from-red-900/50 to-red-800/50"
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
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-red-600/20 backdrop-blur-sm border border-red-400/30 text-red-200 px-3 sm:px-4 py-1 rounded-full"
          >
            <span className="text-xs sm:text-sm">Get Started Today</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
          >
            آماده راه‌اندازی خبرگزاری دیجیتال خود هستید؟
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-persian px-4" 
            dir="rtl"
          >
            با پلتفرم خبری مدرن، صدای خود را به میلیون‌ها مخاطب برسانید
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
                  شروع پروژه خبرگزاری آنلاین شما
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        id="footer"
        className="py-8 sm:py-12 px-4 sm:px-6 bg-black/50 border-t border-white/10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-4 sm:mb-6 text-center sm:text-left"
          >
            <img
              src="/logos/ck-nobg.png"
              alt="Kara Code Logo"
              className="h-12 sm:h-16 lg:h-18 mx-auto sm:mx-0 -mb-1 sm:-mb-2"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4 font-mono">
              Kara Code
            </h3>
            <p className="text-sm sm:text-base text-gray-400 font-mono">
              Crafting Digital Excellence
            </p>
          </motion.div>
          <div className="text-gray-500 text-xs sm:text-sm font-mono text-center sm:text-left">
            © 2025 Kara Code. All rights reserved | kara-code.ir
          </div>
        </div>
      </motion.footer>
    </div>
  );
}