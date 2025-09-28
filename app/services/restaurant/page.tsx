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
  Utensils,
  Clock,
  ShoppingCart,
  Calendar,
  Star,
  Smartphone,
  Globe,
  TrendingUp,
  Users,
  MessageSquare,
  Award,
  ChefHat,
  MapPin,
  CreditCard,
  Zap,
  Shield,
  BarChart3,
  Heart,
  Camera,
  Menu,
  Wine,
  Coffee,
  Pizza,
  Check,
  ArrowRight,
  Phone,
  Mail,
} from "lucide-react";

export default function RestaurantWebsitePage() {
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
      icon: <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سیستم سفارش آنلاین",
      description:
        " سیستم سفارش‌گیری آنلاین جامع به مشتریان شما اجازه می‌دهد به راحتی از طریق وبسایت سفارشات خود را بدهند. این سیستم با درگاه‌های پرداخت یکپارچه شده و فرآیند سفارش را از ابتدا تا انتها مدیریت می‌کند. مشتری می‌تواند منو را مرور کند، موارد دلخواه را به سبد خرید اضافه کند، زمان تحویل را انتخاب کند و به‌صورت آنلاین پرداخت کند. تمام این مراحل با رابط کاربری ساده و به دور از پیچیدگی انجام می‌شود .",
      benefits: [
        "بهینه‌سازی شده برای موبایل",
        "کاهش خطاهای سفارش",
        "پشتیبانی از کد تخفیف و وفاداری",
        "گزارش‌گیری دقیق فروش",
      ],
    },
    {
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "رزرو میز هوشمند",
      description:
        "با سیستم رزرو آنلاین، مشتریان می‌توانند میز خود را در هر ساعتی از شبانه‌روز رزرو کنند. این سیستم به شما کمک می‌کند تا ظرفیت رستوران را بهینه مدیریت کرده و از  پیچیدگی ها بکاهید. قابلیت انتخاب میز خاص، اضافه کردن درخواست‌های ویژه (رژیم غذایی، جشن تولد و...)، ارسال خودکار ایمیل و پیامک تأیید، و همچنین یادآوری قبل از زمان رزرو از جمله ویژگی‌هایی است که  می تواند تجربه‌ای فراتر از انتظار برای مشتری رقم می‌زند.",
      benefits: [
        "مدیریت بهینه ظرفیت",
        "ایجاد پایگاه داده مشتریان",
        "تأیید خودکار رزرو",
        "همگام‌سازی با تقویم گوگل",
        "پیش‌بینی و آنالیز ترافیک",
      ],
    },
    {
      icon: <Menu className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "منوی دیجیتال تعاملی",
      description:
        "منوی کاغذی را با یک منوی دیجیتال جذاب و تعاملی جایگزین کنید. تصاویر باکیفیت، توضیحات کامل، فیلترهای غذایی (رژیم کتو، وگان، بدون گلوتن و...) و قابلیت به‌روزرسانی آنی، تجربه مشتری را بهبود می‌بخشد. منو می‌تواند چندزبانه باشد و به‌طور خودکار بر اساس زمان روز (صبحانه، ناهار، شام) یا مناسبت‌ها تغییر کند. همچنین امکان نمایش برچسب‌هایی مانند 'پرفروش'، 'جدید' یا 'تخفیف‌دار' به صورت خودکار وجود دارد.",
      benefits: [
        "به‌روزرسانی آسان و آنی",
        "امکان پشتیبانی از چند زبان",
        "امکان دسته‌بندی محصولات",
        "جذابیت بصری بالا",
        "کاهش هزینه چاپ منو",
      ],
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "قسمت درباره ما",
      description:
        "صفحه‌ای اختصاصی برای معرفی داستان رستوران شما، سرآشپزها، فلسفه کاری و جوایز و افتخارات. این بخش به شما کمک می‌کند اعتماد مشتریان را جلب کرده و برند خود را به‌عنوان یک رستوران حرفه‌ای و قابل‌اعتماد معرفی کنید. امکان نمایش تصاویر تیم، ویدیوهای پشت‌صحنه، و حتی نظرات مشتریان مشهور در یک قالب زیبا و کاربرپسند فراهم است.",
      benefits: [
        "افزایش اعتماد مشتری",
        "معرفی تیم حرفه‌ای",
        "نمایش افتخارات و جوایز",
        "ارتباط عاطفی با مشتری",
        "بهبود برندینگ رستوران",
      ],
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۴۵٪",
      label: "میانگین افزایش فروش",
      description:
        "رستوران‌های دارای وبسایت حرفه‌ای و سفارش آنلاین، به‌طور متوسط ۴۵٪ فروش بیشتری نسبت به رقبای خود تجربه می‌کنند.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۲۴/۷",
      label: "دریافت سفارش",
      description:
        "وبسایت شما حتی در ساعات تعطیلی نیز مشتری جذب کرده و سفارش می‌گیرد؛ یعنی درآمدی بدون وقفه.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۶۰٪",
      label: "کاهش تماس تلفنی",
      description:
        "با رزرو آنلاین و منوی دیجیتال، حجم تماس‌ها تا ۶۰٪ کمتر می‌شود و تیم شما روی کیفیت سرویس تمرکز می‌کند.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳۰٪",
      label: "بازگشت مشتری",
      description:
        "سیستم وفاداری یکپارچه در وبسایت، احتمال بازگشت مشتری را تا ۳۰٪ افزایش می‌دهد.",
    },
  ];

  const keyFeatures = [
    {
      icon: <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Online Ordering",
      desc: "سیستم سفارش آنلاین با پردازش امن",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Table Booking",
      desc: "رزرو آنلاین میز با تأیید خودکار",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Camera className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Photo Gallery",
      desc: "گالری حرفه‌ای از غذاها و فضای رستوران",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Reviews System",
      desc: "سیستم نظرات و امتیازدهی مشتریان",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Location & Hours",
      desc: "نمایش موقعیت و ساعات کاری",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Secure Payment",
      desc: "درگاه پرداخت امن و چندگانه",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Loyalty Program",
      desc: "سیستم وفاداری مشتریان با امتیاز و جوایز",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analytics Dashboard",
      desc: "داشبورد آنالیز فروش و رفتار مشتری",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Push Notifications",
      desc: "اطلاع‌رسانی لحظه‌ای برای پیشنهادها و تخفیف‌ها",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-950 to-red-950 overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-red-600 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-2 sm:px-4 py-1 rounded-full">
              <Utensils className="w-4 h-4" />
              <span className="text-xs sm:text-sm">
                Restaurant Website Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient-animated bg-clip-text text-transparent font-noto-h1">
                وبسایت حرفه‌ای رستوران
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              dir="rtl"
            >
              سفارش وبسایت آنلاین رستوران شما با توانایی مجهز شدن به منوی
              دیجیتال تعاملی و قابلیت رزرو میز و سیستم سفارش‌گیری و پرداخت
              آنلاین
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
                  شروع پروژه وبسایت آنلاین شما
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
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">
                Key Features
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-noto-h2 px-4 sm:px-8 text-white mb-3 sm:mb-4 leading-tight"
            >
              قابلیت‌های کلیدی در عمل
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
                      ? "bg-orange-500/20"
                      : "opacity-60 hover:opacity-100 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-orange-400 flex mb-1 sm:mb-2">
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
                      className="text-xs sm:text-sm bg-orange-500/20 text-orange-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-persian whitespace-nowrap"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">
                Results at a glance
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              نتایجی که وبسایت آنلاین برای رستوران شما دارد در یک نگاه
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              نگاهی عمیق به تأثیر وبسایت بر رشد کسب‌وکار شما
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
                  className="text-orange-400 flex justify-center mb-3 sm:mb-4"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Benefits</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              ویژگی های کلی یک وب سایت رستورانی خوب
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              تمام ابزارهایی که برای موفقیت آنلاین رستوران تان نیاز دارید
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
        id="why-restaurant"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">
                Why restaurant online website
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              dir="rtl"
            >
              چرا رستوران شما به یک وب‌سایت حرفه‌ای نیاز دارد؟
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              یک وب‌سایت مدرن فقط یک ویترین آنلاین نیست، بلکه یک ابزار قدرتمند
              برای رشد کسب‌وکار شماست. از افزایش فروش گرفته تا تقویت برند،
              مزایای داشتن یک پلتفرم اختصاصی بی‌شمار است.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="space-y-6 sm:space-y-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {[
                {
                  icon: (
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  ),
                  title: "افزایش درآمد و فروش",
                  desc: "با دریافت سفارشات آنلاین در ۲۴ ساعت شبانه‌روز، فروش خود را تا ۴۰٪ افزایش دهید و محدودیت‌های زمانی و مکانی را از بین ببرید.",
                },
                {
                  icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "صرفه‌جویی در زمان و هزینه‌ها",
                  desc: "سیستم رزرواسیون خودکار و منوی دیجیتال، تماس‌های تلفنی را کاهش داده و به تیم شما اجازه می‌دهد روی کیفیت خدمات تمرکز کنند.",
                },
                {
                  icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "برندسازی و هویت دیجیتال",
                  desc: "فضای منحصر به فرد، داستان و غذاهای خاص رستوران خود را به نمایش بگذارید و یک تصویر حرفه‌ای و ماندگار در ذهن مشتریان بسازید.",
                },
                {
                  icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "برتری رقابتی",
                  desc: "با حضوری مدرن و ارائه خدمات آنلاین، از رقبایی که هنوز به روش‌های سنتی کار می‌کنند، متمایز شوید و مشتریان بیشتری جذب کنید.",
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
                    className="bg-gradient-to-r from-orange-500 to-red-500 p-2 sm:p-3 rounded-lg flex-shrink-0 mt-1"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Our Process</span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              فرآیند ساده، نتایج خیره‌کننده
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              در ۴ مرحله ساده وبسایت رستوران خود را راه‌اندازی کنید
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
                title: "Consultation",
                desc: "بررسی نیازها و اهداف رستوران شما",
                icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "02",
                title: "Design",
                desc: "طراحی منحصر به فرد متناسب با برند شما",
                icon: <Wine className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "03",
                title: "Development",
                desc: "توسعه با آخرین تکنولوژی‌ها",
                icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "04",
                title: "Launch",
                desc: "راه‌اندازی و آموزش تیم شما",
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
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.2,
                  }}
                  whileHover={{ rotate: 360 }}
                  className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                >
                  {item.icon}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-orange-400 font-bold mb-2 text-sm sm:text-base"
                >
                  {item.step}
                </motion.div>

                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
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
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 bg-gradient-to-r from-orange-900/50 to-red-900/50"
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
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
          >
            <span className="text-xs sm:text-sm">Get Started</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
          >
            آماده‌اید تا رستوران خود را به وبسایت آنلاین مجهز کنید؟
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-persian px-4"
            dir="rtl"
          >
            با وبسایت حرفه‌ای، رستوران خود را به سطح جدیدی از موفقیت برسانید
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gray-100 hover:bg-gray-200 border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300"
              >
                <span className="text-gradient-animated font-persian">
                  شروع پروژه وبسایت آنلاین شما
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
