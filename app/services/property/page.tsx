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
  Home,
  Search,
  MapPin,
  Calendar,
  Star,
  Smartphone,
  Globe,
  TrendingUp,
  Users,
  MessageSquare,
  Award,
  Building,
  Camera,
  CreditCard,
  Zap,
  Shield,
  BarChart3,
  Heart,
  Video,
  Filter,
  Key,
  Calculator,
  FileText,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Bed,
  Bath,
  Square,
  DollarSign,
  Clock,
  Map,
  Eye,
  Building2,
} from "lucide-react";

export default function RealEstatePlatformPage() {
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
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "جستجوی پیشرفته املاک",
      description:
        "سیستم جستجوی هوشمند با فیلترهای متعدد شامل قیمت، متراژ، تعداد اتاق، موقعیت جغرافیایی، نوع ملک، سال ساخت و امکانات رفاهی. کاربران می‌توانند با استفاده از نقشه تعاملی، املاک را در محدوده دلخواه جستجو کنند. سیستم پیشنهاد هوشمند بر اساس سابقه جستجو، املاک مشابه را نمایش می‌دهد. ذخیره جستجوها و دریافت اعلان برای املاک جدید مطابق با معیارهای تعیین شده از دیگر قابلیت‌های این بخش است.",
      benefits: [
        "فیلترهای پیشرفته و دقیق",
        "جستجو روی نقشه تعاملی",
        "ذخیره جستجوهای مورد علاقه",
        "اعلان املاک جدید",
      ],
    },
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "تور مجازی 360 درجه",
      description:
        "بازدید مجازی از املاک با تکنولوژی 360 درجه و واقعیت مجازی. خریداران می‌توانند بدون حضور فیزیکی، تمام فضاهای ملک را با جزئیات کامل بررسی کنند. امکان اندازه‌گیری ابعاد، مشاهده ملک در ساعات مختلف روز، نمایش پلان سه‌بعدی و حتی چیدمان مجازی مبلمان فراهم است. این قابلیت باعث صرفه‌جویی در زمان و افزایش نرخ تبدیل بازدیدکنندگان به خریدار می‌شود.",
      benefits: [
        "کاهش 70% بازدیدهای غیرضروری",
        "نمایش 24 ساعته املاک",
        "تجربه کاربری منحصر به فرد",
        "افزایش اعتماد خریداران",
        "قابلیت اشتراک‌گذاری آسان",
      ],
    },
    {
      icon: <Calculator className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "محاسبه‌گر وام و اقساط",
      description:
        "ابزار محاسبه دقیق وام مسکن با در نظر گرفتن نرخ‌های روز بانک‌ها، میزان پیش‌پرداخت، مدت بازپرداخت و سایر پارامترها. کاربران می‌توانند توان مالی خود را ارزیابی کرده و بهترین گزینه تسهیلات را انتخاب کنند. مقایسه شرایط مختلف بانک‌ها، محاسبه مالیات و عوارض، و برآورد هزینه‌های جانبی خرید ملک نیز در این بخش انجام می‌شود.",
      benefits: [
        "محاسبات دقیق و به‌روز",
        "مقایسه تسهیلات بانک‌ها",
        "برآورد کامل هزینه‌ها",
        "پیشنهاد بهترین گزینه وام",
        "ذخیره و مقایسه سناریوها",
      ],
    },
    {
      icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "پروفایل مشاوران املاک",
      description:
        "معرفی کامل مشاوران املاک با سوابق کاری، تخصص‌ها، گواهینامه‌ها و امتیازات مشتریان. امکان مشاهده املاک تحت نمایندگی هر مشاور، رزرو قرار ملاقات آنلاین، چت مستقیم و مشاهده نظرات مشتریان قبلی. سیستم رتبه‌بندی هوشمند بر اساس عملکرد و رضایت مشتریان، انتخاب بهترین مشاور را تسهیل می‌کند.",
      benefits: [
        "انتخاب مشاور متخصص",
        "مشاهده سوابق و تجربیات",
        "ارتباط مستقیم و آسان",
        "سیستم امتیازدهی شفاف",
        "رزرو آنلاین قرار ملاقات",
      ],
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "65%",
      label: "افزایش لیدهای کیفی",
      description:
        "پلتفرم‌های املاک با قابلیت‌های پیشرفته، تعداد متقاضیان جدی را تا 65% افزایش می‌دهند و زمان فروش را کاهش می‌دهند.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "24/7",
      label: "نمایش املاک",
      description:
        "املاک شما در تمام ساعات شبانه‌روز قابل بازدید مجازی هستند، حتی در تعطیلات و خارج از ساعات کاری.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "80%",
      label: "رضایت مشتریان",
      description:
        "با ارائه اطلاعات کامل و شفاف، تور مجازی و ابزارهای کاربردی، رضایت خریداران به بیش از 80% می‌رسد.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "40%",
      label: "کاهش زمان معامله",
      description:
        "فرآیند خرید و فروش با ابزارهای دیجیتال تا 40% سریع‌تر انجام می‌شود و کارایی تیم فروش افزایش می‌یابد.",
    },
  ];

  const keyFeatures = [
    {
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Property Search",
      desc: "جستجوی پیشرفته با فیلترهای هوشمند",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Virtual Tours",
      desc: "تور مجازی 360 درجه از املاک",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Map className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Interactive Map",
      desc: "نقشه تعاملی با نمایش املاک و امکانات محله",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Calculator className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Mortgage Calculator",
      desc: "محاسبه‌گر وام و اقساط با نرخ‌های روز",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Building className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Property Comparison",
      desc: "مقایسه همزمان چند ملک",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Favorites List",
      desc: "ذخیره و مدیریت املاک مورد علاقه",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Live Chat",
      desc: "چت آنلاین با مشاوران املاک",
      color: "from-rose-500 to-orange-500",
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Document Management",
      desc: "مدیریت اسناد و قراردادها",
      color: "from-orange-500 to-amber-500",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Verified Listings",
      desc: "املاک تایید شده با مدارک معتبر",
      color: "from-amber-500 to-yellow-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-teal-950 to-cyan-950 overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
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
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 px-2 sm:px-4 py-1 rounded-full">
              <Home className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Real Estate Platform Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient-animated bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent font-noto-h1">
                پلتفرم جامع املاک و مستغلات
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              dir="rtl"
            >
              سفارش پلتفرم حرفه‌ای املاک با قابلیت جستجوی پیشرفته، تور مجازی 360 درجه، نقشه تعاملی و ابزارهای هوشمند خرید و فروش ملک
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("cta")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="font-persian">
                  شروع پروژه پلتفرم املاک شما
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">Key Features</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-noto-h2 px-4 sm:px-8 text-white mb-3 sm:mb-4 leading-tight"
            >
              قابلیت‌های کلیدی پلتفرم املاک
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <p
                className="text-base sm:text-lg text-gray-300 max-w-3xl font-persian px-4"
                dir="rtl"
              >
                ابزارهای قدرتمند برای تجربه‌ای متفاوت در خرید و فروش ملک
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
                      ? "bg-teal-500/20"
                      : "opacity-60 hover:opacity-100 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-teal-400 flex mb-1 sm:mb-2">
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
                      className="text-xs sm:text-sm bg-teal-500/20 text-teal-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-persian whitespace-nowrap"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">Platform Impact</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              تأثیر پلتفرم دیجیتال بر کسب‌وکار املاک
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              آمار و ارقامی که قدرت یک پلتفرم حرفه‌ای را نشان می‌دهند
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
                  className="text-teal-400 flex justify-center mb-3 sm:mb-4"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Platform Features</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              امکانات جامع پلتفرم املاک مدرن
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              مجموعه کاملی از ابزارها برای تسهیل فرآیند خرید، فروش و اجاره املاک
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
        id="why-real-estate" 
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Why Digital Platform</span>
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              dir="rtl"
            >
              چرا کسب‌وکار املاک شما به پلتفرم دیجیتال نیاز دارد؟
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              در عصر دیجیتال، داشتن یک پلتفرم آنلاین حرفه‌ای دیگر یک انتخاب نیست، بلکه یک ضرورت است. از جذب مشتریان جدید تا بهینه‌سازی فرآیندها، مزایای دیجیتالی شدن بی‌پایان است.
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {[
                {
                  icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "افزایش دسترسی به مشتریان",
                  desc: "با حضور آنلاین 24/7، دامنه مشتریان خود را از محلی به ملی و حتی بین‌المللی گسترش دهید و فرصت‌های فروش را چند برابر کنید.",
                },
                {
                  icon: <Eye className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "شفافیت و اعتمادسازی",
                  desc: "نمایش کامل اطلاعات، تصاویر، مدارک و قیمت‌ها به صورت شفاف، اعتماد خریداران را جلب کرده و فرآیند تصمیم‌گیری را تسریع می‌کند.",
                },
                {
                  icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "تحلیل رفتار کاربران",
                  desc: "با ابزارهای آنالیز پیشرفته، رفتار کاربران را بررسی کنید، محبوب‌ترین املاک را شناسایی کنید و استراتژی‌های بازاریابی را بهینه کنید.",
                },
                {
                  icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "مزیت رقابتی پایدار",
                  desc: "با ارائه تجربه کاربری برتر، ابزارهای نوین و خدمات آنلاین، از رقبای سنتی پیشی بگیرید و جایگاه خود را در بازار تثبیت کنید.",
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
                    className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 sm:p-3 rounded-lg flex-shrink-0 mt-1"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Development Process</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              مراحل ساخت پلتفرم املاک شما
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              فرآیندی شفاف و حرفه‌ای برای تحویل پلتفرمی قدرتمند
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
                desc: "تحلیل نیازها و بازار هدف شما",
                icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "02",
                title: "UX/UI Design",
                desc: "طراحی رابط کاربری حرفه‌ای و کاربرپسند",
                icon: <Home className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "03",
                title: "Development",
                desc: "توسعه با جدیدترین تکنولوژی‌ها",
                icon: <Building className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "04",
                title: "Deploy & Support",
                desc: "راه‌اندازی و پشتیبانی مستمر",
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
                    delay: index * 0.2
                  }}
                  whileHover={{ rotate: 360 }}
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white"
                >
                  {item.icon}
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-teal-400 font-bold mb-2 text-sm sm:text-base"
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
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 bg-gradient-to-r from-teal-900/50 to-cyan-900/50"
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
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 px-3 sm:px-4 py-1 rounded-full"
          >
            <span className="text-xs sm:text-sm">Start Your Project</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
          >
            آماده‌اید تا کسب‌وکار املاک خود را دیجیتال کنید؟
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-persian px-4" 
            dir="rtl"
          >
            با پلتفرم حرفه‌ای املاک، تجربه‌ای نوین برای مشتریان خود خلق کنید
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
                className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300"
              >
                <span className="font-persian">
                  شروع ساخت پلتفرم املاک
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
              >
                <Phone className="w-5 h-5 ml-2" />
                <span>مشاوره رایگان</span>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center text-gray-400 text-sm"
          >
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-400" />
              <span className="font-persian">ضمانت کیفیت</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-400" />
              <span className="font-persian">پشتیبانی 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-400" />
              <span className="font-persian">آموزش رایگان</span>
            </div>
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