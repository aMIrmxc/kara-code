"use client";

import { Metadata } from "next";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
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

// Custom hook for section scroll progress
function useSectionScrollProgress(ref: React.RefObject<HTMLElement>) {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  return scrollYProgress;
}

export default function RestaurantWebsitePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

  // Section refs
  const heroRef = useRef<HTMLElement>(null);
  const featuresRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);
  const benefitsRef = useRef<HTMLElement>(null);
  const whyRef = useRef<HTMLElement>(null);
  const processRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  // Page scroll progress
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero section animations
  const heroProgress = useSectionScrollProgress(heroRef);
  const heroY = useTransform(heroProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(heroProgress, [0, 0.5, 1], [1, 1, 0]);
  const heroScale = useTransform(heroProgress, [0, 0.5, 1], [1, 1, 0.9]);

  // Features section animations
  const featuresProgress = useSectionScrollProgress(featuresRef);
  const featuresY = useTransform(featuresProgress, [0, 0.5, 1], [100, 0, -50]);
  const featuresOpacity = useTransform(featuresProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const featuresScale = useTransform(featuresProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.95]);
  const featuresRotate = useTransform(featuresProgress, [0, 0.5, 1], [-5, 0, 5]);

  // Stats section animations
  const statsProgress = useSectionScrollProgress(statsRef);
  const statsY = useTransform(statsProgress, [0, 0.5, 1], [100, 0, -50]);
  const statsOpacity = useTransform(statsProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const statsScale = useTransform(statsProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  // Benefits section animations
  const benefitsProgress = useSectionScrollProgress(benefitsRef);
  const benefitsY = useTransform(benefitsProgress, [0, 0.5, 1], [80, 0, -40]);
  const benefitsOpacity = useTransform(benefitsProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // Why section animations
  const whyProgress = useSectionScrollProgress(whyRef);
  const whyY = useTransform(whyProgress, [0, 0.5, 1], [60, 0, -30]);
  const whyOpacity = useTransform(whyProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  const whyScale = useTransform(whyProgress, [0, 0.5, 1], [0.95, 1, 0.98]);

  // Process section animations
  const processProgress = useSectionScrollProgress(processRef);
  const processY = useTransform(processProgress, [0, 0.5, 1], [50, 0, -30]);
  const processOpacity = useTransform(processProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  // CTA section animations
  const ctaProgress = useSectionScrollProgress(ctaRef);
  const ctaY = useTransform(ctaProgress, [0, 0.5, 1], [50, 0, 0]);
  const ctaOpacity = useTransform(ctaProgress, [0, 0.3, 1], [0, 1, 1]);
  const ctaScale = useTransform(ctaProgress, [0, 0.5, 1], [0.9, 1, 1]);

  // Background parallax
  const bgY = useTransform(smoothProgress, [0, 1], [0, -300]);

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

  // Helper function to create staggered animations based on scroll
  const getStaggeredTransform = (
    progress: MotionValue<number>,
    index: number,
    totalItems: number
  ) => {
    const start = index / totalItems * 0.3;
    const end = start + 0.7;
    
    return {
      y: useTransform(progress, [start, end], [50, 0]),
      opacity: useTransform(progress, [start, end], [0, 1]),
      scale: useTransform(progress, [start, end], [0.8, 1]),
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-950 to-red-950 overflow-x-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y: bgY }}
        className="fixed inset-0 pointer-events-none"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-orange-950/50 to-red-950/50" />
      </motion.div>

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
        style={{
          opacity: heroOpacity,
          scale: heroScale,
          y: heroY,
        }}
      >
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            style={{
              rotate: useTransform(heroProgress, [0, 1], [0, 180]),
              scale: useTransform(heroProgress, [0, 1], [1, 1.5]),
            }}
            className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          />
          <motion.div 
            style={{
              rotate: useTransform(heroProgress, [0, 1], [0, -180]),
              scale: useTransform(heroProgress, [0, 1], [1, 1.3]),
            }}
            className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-30"
          />
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-2 sm:px-4 py-1 rounded-full"
              style={{
                scale: useTransform(heroProgress, [0, 0.5], [1, 0.9]),
              }}
            >
              <Utensils className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Restaurant Website Solutions</span>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-gradient-animated bg-clip-text text-transparent font-noto-h1">
                وبسایت حرفه‌ای رستوران
              </span>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              dir="rtl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              سفارش وبسایت آنلاین رستوران شما با توانایی مجهز شدن به  منوی دیجیتال تعاملی و قابلیت رزرو میز و سیستم سفارش‌گیری و پرداخت
              آنلاین  
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
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
                    شروع پروژه وبسایت آنلاین شما
                  </span>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
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
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: showScrollIndicator ? 1 : 0, y: showScrollIndicator ? 0 : 100 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-4 h-8 sm:w-6 sm:h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
            <div className="w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1 sm:mt-2"></div>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Key Features Section */}
      <motion.section
        ref={featuresRef}
        id="key-features"
        className="py-16 sm:py-20 px-4 bg-black/30 text-center flex items-center justify-center min-h-screen"
        style={{
          opacity: featuresOpacity,
          scale: featuresScale,
          y: featuresY,
          rotateX: featuresRotate,
        }}
      >
        <div className="max-w-6xl mx-auto text-left w-full">
          <motion.div className="mb-8 sm:mb-12 text-center">
            <motion.div 
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
              style={{
                scale: useTransform(featuresProgress, [0.2, 0.4], [0, 1]),
              }}
            >
              <span className="text-xs sm:text-sm font-semibold">Key Features</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-noto-h2 px-4 sm:px-8 text-white mb-3 sm:mb-4 leading-tight"
              style={{
                y: useTransform(featuresProgress, [0.2, 0.5], [30, 0]),
                opacity: useTransform(featuresProgress, [0.2, 0.5], [0, 1]),
              }}
            >
              قابلیت‌های کلیدی در عمل
            </motion.h2>

            <motion.div 
              className="flex justify-center"
              style={{
                y: useTransform(featuresProgress, [0.3, 0.6], [30, 0]),
                opacity: useTransform(featuresProgress, [0.3, 0.6], [0, 1]),
              }}
            >
              <p
                className="text-base sm:text-lg text-gray-300 max-w-3xl font-persian px-4"
                dir="rtl"
              >
                با کلیک بر روی هر قابلیت، جزئیات و مزایای آن را مشاهده کنید
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 my-auto border border-white/10 flex flex-col justify-center"
            style={{
              scale: useTransform(featuresProgress, [0.3, 0.6], [0.9, 1]),
              opacity: useTransform(featuresProgress, [0.3, 0.6], [0.5, 1]),
            }}
          >
            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4">
              {features.map((feature, index) => {
                const transforms = getStaggeredTransform(featuresProgress, index, features.length);
                return (
                  <motion.div
                    key={index}
                    style={transforms}
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
                );
              })}
            </div>

            {/* Feature Details */}
            <div className="text-left flex flex-col justify-center min-h-[350px] sm:min-h-[400px] lg:min-h-[500px]">
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

              <div className="flex flex-wrap gap-1 sm:gap-2 justify-center px-2 sm:px-4">
                {features[activeFeature].benefits.map((benefit, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-xs sm:text-sm bg-orange-500/20 text-orange-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-persian whitespace-nowrap"
                    dir="rtl"
                  >
                    {benefit}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section 
        ref={statsRef}
        id="results" 
        className="py-16 sm:py-20 px-4"
        style={{
          opacity: statsOpacity,
          scale: statsScale,
          y: statsY,
        }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div className="mb-8 sm:mb-12">
            <motion.div 
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
              style={{
                scale: useTransform(statsProgress, [0.1, 0.3], [0, 1]),
              }}
            >
              <span className="text-xs sm:text-sm font-semibold">Results at a glance</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-8 font-noto-h2 leading-tight"
              style={{
                y: useTransform(statsProgress, [0.1, 0.4], [50, 0]),
                opacity: useTransform(statsProgress, [0.1, 0.4], [0, 1]),
              }}
            >
              نتایجی که وبسایت آنلاین برای رستوران شما دارد در یک نگاه
            </motion.h2>
            
            <motion.p
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
              style={{
                y: useTransform(statsProgress, [0.2, 0.5], [30, 0]),
                opacity: useTransform(statsProgress, [0.2, 0.5], [0, 1]),
              }}
            >
              نگاهی عمیق به تأثیر وبسایت بر رشد کسب‌وکار شما
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => {
              const transforms = getStaggeredTransform(statsProgress, index, stats.length);
              return (
                <motion.div
                  key={index}
                  style={transforms}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 text-center flex flex-col justify-center min-h-[200px] sm:min-h-[250px]"
                >
                  <motion.div 
                    className="text-orange-400 flex justify-center mb-3 sm:mb-4"
                    style={{
                      rotate: useTransform(statsProgress, [0.3 + index * 0.1, 0.5 + index * 0.1], [0, 360]),
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  
                  <motion.div 
                    className="text-3xl sm:text-4xl font-bold text-white mb-2 font-noto-h2"
                    style={{
                      scale: useTransform(statsProgress, [0.3 + index * 0.1, 0.5 + index * 0.1], [0, 1]),
                    }}
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
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        ref={benefitsRef}
        id="benefits" 
        className="py-16 sm:py-20 px-4 bg-black/30"
        style={{
          opacity: benefitsOpacity,
          y: benefitsY,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16">
            <motion.div 
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
              style={{
                scale: useTransform(benefitsProgress, [0.1, 0.3], [0, 1]),
              }}
            >
              <span className="text-xs sm:text-sm">Benefits</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              style={{
                y: useTransform(benefitsProgress, [0.1, 0.4], [50, 0]),
                opacity: useTransform(benefitsProgress, [0.1, 0.4], [0, 1]),
              }}
            >
              ویژگی های کلی یک وب سایت رستورانی خوب
            </motion.h2>
            
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
              style={{
                y: useTransform(benefitsProgress, [0.2, 0.5], [30, 0]),
                opacity: useTransform(benefitsProgress, [0.2, 0.5], [0, 1]),
              }}
            >
              تمام ابزارهایی که برای موفقیت آنلاین رستوران تان نیاز دارید
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {keyFeatures.map((feature, index) => {
              const transforms = getStaggeredTransform(benefitsProgress, index, keyFeatures.length);
              return (
                <motion.div
                  key={index}
                  style={transforms}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 sm:p-6 group"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
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
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Why Section */}
      <motion.section 
        ref={whyRef}
        id="why-restaurant" 
        className="py-16 sm:py-20 px-4"
        style={{
          opacity: whyOpacity,
          scale: whyScale,
          y: whyY,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16">
            <motion.div 
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
              style={{
                scale: useTransform(whyProgress, [0.1, 0.3], [0, 1]),
              }}
            >
              <span className="text-xs sm:text-sm">Why restaurant online website</span>
            </motion.div>
            
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              dir="rtl"
              style={{
                y: useTransform(whyProgress, [0.1, 0.4], [50, 0]),
                opacity: useTransform(whyProgress, [0.1, 0.4], [0, 1]),
              }}
            >
              چرا رستوران شما به یک وب‌سایت حرفه‌ای نیاز دارد؟
            </motion.h2>
            
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
              style={{
                y: useTransform(whyProgress, [0.2, 0.5], [30, 0]),
                opacity: useTransform(whyProgress, [0.2, 0.5], [0, 1]),
              }}
            >
              یک وب‌سایت مدرن فقط یک ویترین آنلاین نیست، بلکه یک ابزار قدرتمند
              برای رشد کسب‌وکار شماست. از افزایش فروش گرفته تا تقویت برند،
              مزایای داشتن یک پلتفرم اختصاصی بی‌شمار است.
            </motion.p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {[
                {
                  icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
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
              ].map((benefit, index) => {
                const transforms = getStaggeredTransform(whyProgress, index, 4);
                return (
                  <motion.div
                    key={index}
                    style={transforms}
                    whileHover={{ x: -10 }}
                    className="flex items-start gap-3 sm:gap-4 flex-row-reverse"
                  >
                    <motion.div 
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
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
                      <p className="text-sm sm:text-base text-gray-400 font-persian leading-relaxed" dir="rtl">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section 
        ref={processRef}
        id="process" 
        className="py-16 sm:py-20 px-4 bg-black/30"
        style={{
          opacity: processOpacity,
          y: processY,
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16">
            <motion.div 
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
              style={{
                scale: useTransform(processProgress, [0.1, 0.3], [0, 1]),
              }}
            >
              <span className="text-xs sm:text-sm">Our Process</span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              style={{
                y: useTransform(processProgress, [0.1, 0.4], [50, 0]),
                opacity: useTransform(processProgress, [0.1, 0.4], [0, 1]),
              }}
            >
              فرآیند ساده، نتایج خیره‌کننده
            </motion.h2>
            
            <motion.p
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
              style={{
                y: useTransform(processProgress, [0.2, 0.5], [30, 0]),
                opacity: useTransform(processProgress, [0.2, 0.5], [0, 1]),
              }}
            >
              در ۴ مرحله ساده وبسایت رستوران خود را راه‌اندازی کنید
            </motion.p>
          </motion.div>

          <div dir="rtl" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
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
            ].map((item, index) => {
              const transforms = getStaggeredTransform(processProgress, index, 4);
              return (
                <motion.div 
                  key={index} 
                  style={transforms}
                  whileHover={{ y: -10 }}
                  className="text-center"
                >
                  <motion.div 
                    className="bg-gradient-to-r from-orange-500 to-red-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                    style={{
                      rotate: useTransform(processProgress, [0.3 + index * 0.1, 0.5 + index * 0.1], [0, 360]),
                    }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  
                  <motion.div 
                    className="text-orange-400 font-bold mb-2 text-sm sm:text-base"
                    style={{
                      opacity: useTransform(processProgress, [0.3 + index * 0.1, 0.5 + index * 0.1], [0, 1]),
                    }}
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
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        id="cta"
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 bg-gradient-to-r from-orange-900/50 to-red-900/50"
        style={{
          opacity: ctaOpacity,
          scale: ctaScale,
          y: ctaY,
        }}
      >
        <div className="max-w-4xl mx-auto text-center w-full">
          <motion.div 
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-3 sm:px-4 py-1 rounded-full"
            style={{
              scale: useTransform(ctaProgress, [0.2, 0.4], [0, 1]),
            }}
          >
            <span className="text-xs sm:text-sm">Get Started</span>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            style={{
              y: useTransform(ctaProgress, [0.2, 0.5], [50, 0]),
              opacity: useTransform(ctaProgress, [0.2, 0.5], [0, 1]),
            }}
          >
            آماده‌اید تا رستوران خود را به وبسایت آنلاین مجهز کنید؟
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-persian px-4" 
            dir="rtl"
            style={{
              y: useTransform(ctaProgress, [0.3, 0.6], [30, 0]),
              opacity: useTransform(ctaProgress, [0.3, 0.6], [0, 1]),
            }}
          >
            با وبسایت حرفه‌ای، رستوران خود را به سطح جدیدی از موفقیت برسانید
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
            style={{
              y: useTransform(ctaProgress, [0.4, 0.7], [30, 0]),
              opacity: useTransform(ctaProgress, [0.4, 0.7], [0, 1]),
            }}
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
                  شروع پروژه وبسایت آنلاین شما
                </span>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer
        id="footer"
        className="py-8 sm:py-12 px-4 sm:px-6 bg-black/50 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-4 sm:mb-6 text-center sm:text-left">
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
          </div>
          <div className="text-gray-500 text-xs sm:text-sm font-mono text-center sm:text-left">
            © 2025 Kara Code. All rights reserved | kara-code.ir
          </div>
        </div>
      </footer>
    </div>
  );
}