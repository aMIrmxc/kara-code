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
  Plane,
  Hotel,
  Calendar,
  Globe,
  Star,
  MapPin,
  CreditCard,
  Shield,
  Users,
  Clock,
  TrendingUp,
  BarChart3,
  Search,
  Smartphone,
  Zap,
  Award,
  MessageSquare,
  Check,
  ArrowRight,
  Map,
  Briefcase,
  Car,
  Ship,
  Train,
  Compass,
  Camera,
  Wallet,
  HeartHandshake,
  Navigation,
  Ticket,
  Building,
  Phone,
  Mail,
} from "lucide-react";
import Footer from "@/components/layout/Footer";

export default function TravelBookingWebsitePage() {
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
      icon: <Plane className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "رزرو پرواز جامع",
      description:
        "سیستم جستجو و رزرو پرواز پیشرفته که به کاربران امکان می‌دهد بین صدها ایرلاین داخلی و خارجی جستجو کنند. با مقایسه قیمت‌ها، زمان‌ها و کلاس‌های پروازی، بهترین گزینه را انتخاب کنند. فیلترهای هوشمند بر اساس بودجه، زمان پرواز، توقف‌ها و ایرلاین مورد نظر، فرآیند انتخاب را ساده می‌کند. همچنین امکان انتخاب صندلی، اضافه کردن بار و خدمات ویژه وجود دارد.",
      benefits: [
        "جستجوی چند مسیره و چندشهره",
        "مقایسه قیمت لحظه‌ای",
        "ذخیره جستجوهای قبلی",
        "اعلان تغییر قیمت",
      ],
    },
    {
      icon: <Hotel className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "رزرو هتل و اقامتگاه",
      description:
        "پلتفرم رزرو اقامتگاه با دسترسی به بیش از میلیون‌ها هتل، هاستل، ویلا و آپارتمان در سراسر جهان. سیستم نمایش تصاویر ۳۶۰ درجه، نقشه تعاملی، امتیازات و نظرات واقعی مسافران، انتخاب را آسان می‌کند. فیلترهای پیشرفته شامل امکانات، فاصله از مراکز مهم، قیمت و ستاره هتل، تجربه جستجوی بی‌نظیری ارائه می‌دهد. گارانتی بهترین قیمت و لغو رایگان از دیگر مزایا است.",
      benefits: [
        "تضمین بهترین قیمت",
        "لغو رایگان در اکثر رزروها",
        "نقشه و موقعیت دقیق",
        "عکس‌ها و ویدیوهای واقعی",
        "نظرات تأیید شده مسافران",
      ],
    },
    {
      icon: <Car className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "اجاره خودرو و ترانسفر",
      description:
        "سرویس اجاره خودرو در مقصد با گزینه‌های متنوع از اقتصادی تا لوکس. امکان رزرو آنلاین با مشاهده مشخصات کامل خودرو، بیمه و شرایط اجاره. سیستم ترانسفر فرودگاهی با رانندگان محلی معتبر، قیمت‌گذاری شفاف و امکان انتخاب نوع وسیله نقلیه. پشتیبانی ۲۴ ساعته و امکان تغییر یا لغو رزرو، اطمینان خاطر مسافران را تضمین می‌کند.",
      benefits: [
        "بیمه کامل و جامع",
        "تحویل در فرودگاه",
        "بدون هزینه پنهان",
        "پشتیبانی ۲۴/۷",
        "گزینه‌های سوخت انعطاف‌پذیر",
      ],
    },
    {
      icon: <Compass className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "تورها و جاذبه‌های گردشگری",
      description:
        "مجموعه کاملی از تورهای یک‌روزه، بلیط موزه‌ها، پارک‌های تفریحی و فعالیت‌های ماجراجویانه در هر مقصد. راهنماهای محلی حرفه‌ای، قیمت‌های گروهی ویژه و امکان رزرو آنی بدون نیاز به چاپ بلیط. سیستم امتیازدهی و نظرات کاربران، انتخاب بهترین تجربه‌ها را تسهیل می‌کند. بلیط‌های الکترونیکی با QR کد برای ورود سریع و بدون صف.",
      benefits: [
        "ورود بدون صف",
        "راهنمای صوتی چندزبانه",
        "لغو رایگان تا ۲۴ ساعت قبل",
        "بلیط موبایلی",
        "تخفیف‌های گروهی",
      ],
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۶۵٪",
      label: "افزایش نرخ تبدیل",
      description:
        "پلتفرم‌های رزرو آنلاین با رابط کاربری بهینه، نرخ تبدیل بازدیدکننده به مشتری را تا ۶۵٪ افزایش می‌دهند.",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۱۵۰+",
      label: "کشور تحت پوشش",
      description:
        "دسترسی به خدمات رزرو در بیش از ۱۵۰ کشور جهان، بازار هدف شما را به کل دنیا گسترش می‌دهد.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۲۴/۷",
      label: "رزرو شبانه‌روزی",
      description:
        "مشتریان در هر ساعت از شبانه‌روز و از هر نقطه جهان می‌توانند رزرو کنند، یعنی فروش بدون توقف.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۸۵٪",
      label: "رضایت کاربران",
      description:
        "با سیستم‌های یکپارچه و پشتیبانی آنلاین، رضایت مشتریان به بیش از ۸۵٪ می‌رسد.",
    },
  ];

  const keyFeatures = [
    {
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "جستجوی پیشرفته",
      desc: "موتور جستجوی هوشمند با فیلترهای چندگانه",
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: <Wallet className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "کیف پول دیجیتال",
      desc: "سیستم کیف پول برای پرداخت سریع و کش‌بک",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "پرداخت امن",
      desc: "درگاه‌های پرداخت معتبر با رمزنگاری SSL",
      color: "from-cyan-500 to-sky-500",
    },
    {
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سیستم امتیازدهی",
      desc: "نظرات و امتیازات واقعی از مسافران قبلی",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "اپلیکیشن موبایل",
      desc: "دسترسی آسان از طریق اپ iOS و Android",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "پشتیبانی ۲۴/۷",
      desc: "تیم پشتیبانی آماده کمک در هر زمان",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "گزارش‌های تحلیلی",
      desc: "داشبورد مدیریتی با آمار دقیق فروش",
      color: "from-sky-500 to-cyan-500",
    },
    {
      icon: <Map className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "نقشه تعاملی",
      desc: "نمایش هتل‌ها و جاذبه‌ها روی نقشه",
      color: "from-blue-500 to-sky-500",
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "برنامه وفاداری",
      desc: "جوایز و تخفیف‌های ویژه برای کاربران وفادار",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-sky-950 to-blue-950 overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-sky-600 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-600 to-sky-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 text-sky-200 px-2 sm:px-4 py-1 rounded-full">
              <Plane className="w-4 h-4" />
              <span className="text-xs sm:text-sm">
                Travel Booking Platform
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-balance font-noto-h1">
              <span className="bg-gradient-to-r text-gradient-animated  bg-clip-text text-transparent animate-pulse">
                پلتفرم رزرو آنلاین سفر
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              dir="rtl"
            >
              راه‌اندازی پلتفرم جامع رزرو سفر با قابلیت رزرو پرواز، هتل، اجاره
              خودرو و تورهای گردشگری در یک مکان
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
              <Button
                size="lg"
                className="bg-gray-100 hover:bg-gray-200 border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <>
                  <span className="text-gradient-animated font-bold font-persian">
                    شروع ساخت پلتفرم رزرو سفر شما
                  </span>
                </>
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
                مشاهده قابلیت‌ها
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
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 text-sky-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">
                Core Features
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-noto-h2 px-4 sm:px-8 text-white mb-3 sm:mb-4 leading-tight"
            >
              امکانات اصلی پلتفرم رزرو سفر
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <p
                className="text-base sm:text-lg text-gray-300 max-w-3xl font-persian px-4"
                dir="rtl"
              >
                با کلیک روی هر بخش، جزئیات کامل آن را مشاهده کنید
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
                      ? "bg-sky-500/20"
                      : "opacity-60 hover:opacity-100 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-sky-400 flex mb-1 sm:mb-2">
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
                      className="text-xs sm:text-sm bg-sky-500/20 text-sky-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-persian whitespace-nowrap"
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
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 text-sky-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">
                Platform Impact
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              تأثیر پلتفرم رزرو سفر بر کسب‌وکار شما
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              آمار و نتایج واقعی از پلتفرم‌های رزرو آنلاین موفق
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
                  viewport={{ once: false }}
                  transition={{ duration: 2, delay: index * 0.1 }}
                  className="text-sky-400 flex justify-center mb-3 sm:mb-4"
                >
                  {stat.icon}
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false }}
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
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 text-sky-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Platform Features</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              ویژگی‌های کلیدی پلتفرم رزرو سفر حرفه‌ای
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              تمام ابزارهایی که برای راه‌اندازی یک پلتفرم رزرو سفر موفق نیاز
              دارید
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

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 ">
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
        id="why-travel-platform"
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
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 text-sky-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">
                Why Choose Our Platform
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              dir="rtl"
            >
              چرا کسب‌وکار شما به پلتفرم رزرو آنلاین نیاز دارد؟
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              در عصر دیجیتال، یک پلتفرم رزرو آنلاین کلید موفقیت در صنعت گردشگری
              است. از اتوماسیون فرآیندها تا افزایش درآمد، مزایای بی‌شماری در
              انتظار شماست.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="space-y-6 sm:space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {[
                {
                  icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "دسترسی جهانی به بازار",
                  desc: "پلتفرم آنلاین شما را به میلیون‌ها مسافر در سراسر جهان متصل می‌کند و محدودیت‌های جغرافیایی را از بین می‌برد.",
                },
                {
                  icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "اتوماسیون کامل فرآیندها",
                  desc: "از رزرو تا پرداخت و صدور بلیط، تمام فرآیندها به صورت خودکار انجام می‌شود و نیاز به نیروی انسانی را کاهش می‌دهد.",
                },
                {
                  icon: (
                    <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  ),
                  title: "تحلیل داده‌ها و بینش‌های تجاری",
                  desc: "با داشبورد تحلیلی پیشرفته، رفتار مشتریان را بشناسید و تصمیمات استراتژیک بر اساس داده‌های واقعی بگیرید.",
                },
                {
                  icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "ساخت برند قدرتمند دیجیتال",
                  desc: "با ارائه تجربه کاربری عالی و خدمات یکپارچه، برند شما به عنوان یک پلتفرم معتبر و حرفه‌ای شناخته می‌شود.",
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
                    className="bg-gradient-to-r from-sky-500 to-blue-500 p-2 sm:p-3 rounded-lg flex-shrink-0 mt-1"
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
              viewport={{ once: false }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 text-sky-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Development Process</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              مراحل ساخت پلتفرم رزرو سفر شما
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              از ایده تا راه‌اندازی، در کنار شما هستیم
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
                desc: "بررسی نیازها و تعیین ویژگی‌های پلتفرم",
                icon: <Compass className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "02",
                title: "طراحی UI/UX",
                desc: "طراحی رابط کاربری جذاب و کاربرپسند",
                icon: <Map className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "03",
                title: "توسعه و یکپارچه‌سازی",
                desc: "کدنویسی و اتصال به سرویس‌های رزرو",
                icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "04",
                title: "راه‌اندازی و پشتیبانی",
                desc: "آموزش، راه‌اندازی و پشتیبانی مداوم",
                icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
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
                  viewport={{ once: false }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.2,
                  }}
                  whileHover={{ rotate: 360 }}
                  className="bg-gradient-to-r from-sky-500 to-blue-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                >
                  {item.icon}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-sky-400 font-bold mb-2 text-sm sm:text-base"
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
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 bg-gradient-to-r from-sky-900/50 to-blue-900/50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.7 }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm border border-sky-400/30 text-sky-200 px-3 sm:px-4 py-1 rounded-full"
          >
            <span className="text-xs sm:text-sm">Start Your Journey</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
          >
            آماده راه‌اندازی پلتفرم رزرو سفر خود هستید؟
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-persian px-4"
            dir="rtl"
          >
            با پلتفرم حرفه‌ای رزرو سفر، کسب‌وکار خود را به سطح جهانی برسانید
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gray-100 hover:bg-gray-200 border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <>
                  <span className="text-gradient-animated font-bold font-persian">
                    شروع ساخت پلتفرم رزرو سفر شما
                  </span>
                </>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

     <Footer />
    </div>
  );
}
