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
  Stethoscope,
  Clock,
  Calendar,
  Star,
  Smartphone,
  Globe,
  TrendingUp,
  Users,
  MessageSquare,
  Award,
  MapPin,
  CreditCard,
  Zap,
  Shield,
  BarChart3,
  Heart,
  FileText,
  Video,
  Lock,
  Database,
  Activity,
  UserCheck,
  Check,
  ArrowRight,
  Phone,
  Mail,
  ClipboardList,
  Pill,
  Brain,
  ShieldCheck,
  HeartHandshake,
  Microscope,
  AlertCircle,
  Hospital,
} from "lucide-react";

export default function HealthcarePortalPage() {
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
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سیستم رزرو نوبت آنلاین",
      description:
        "سیستم رزرواسیون هوشمند که به بیماران امکان می‌دهد نوبت‌های خود را به صورت آنلاین رزرو کنند. این سیستم با تقویم پزشکان هماهنگ شده و به طور خودکار زمان‌های موجود را نمایش می‌دهد. بیماران می‌توانند پزشک، تاریخ و ساعت مورد نظر را انتخاب کنند و بلافاصله تأییدیه دریافت کنند. سیستم یادآوری خودکار از طریق پیامک و ایمیل، تعداد عدم حضورها را کاهش می‌دهد.",
      benefits: [
        "کاهش 70% زمان انتظار",
        "یادآوری خودکار نوبت‌ها",
        "مدیریت صف‌های انتظار",
        "گزارش‌گیری آماری دقیق",
      ],
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "پرونده الکترونیک سلامت",
      description:
        "سیستم جامع مدیریت پرونده‌های پزشکی که تمامی اطلاعات درمانی بیمار را در یک مکان متمرکز می‌کند. این سیستم شامل سوابق پزشکی، نتایج آزمایشات، تصاویر رادیولوژی، نسخه‌های دارویی و گزارشات ویزیت می‌باشد. بیماران می‌توانند به راحتی به پرونده خود دسترسی داشته باشند و پزشکان می‌توانند با رعایت حریم خصوصی، اطلاعات را به اشتراک بگذارند.",
      benefits: [
        "دسترسی 24/7 به سوابق",
        "رمزنگاری امن اطلاعات",
        "کاهش خطاهای پزشکی",
        "صرفه‌جویی در زمان و هزینه",
        "قابلیت اشتراک‌گذاری امن",
      ],
    },
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "ویزیت آنلاین و مشاوره از راه دور",
      description:
        "پلتفرم ویدئو کنفرانس امن برای انجام ویزیت‌های آنلاین که به بیماران امکان می‌دهد بدون نیاز به حضور فیزیکی، با پزشک خود مشاوره کنند. این سیستم با کیفیت HD، رمزنگاری end-to-end، امکان به اشتراک‌گذاری تصاویر و مستندات پزشکی، و نسخه‌نویسی الکترونیک، تجربه‌ای نزدیک به ویزیت حضوری را فراهم می‌کند.",
      benefits: [
        "صرفه‌جویی در زمان و هزینه سفر",
        "دسترسی به متخصصان از راه دور",
        "کاهش خطر انتقال بیماری",
        "ضبط جلسات برای مرور",
      ],
    },
    {
      icon: <Pill className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "مدیریت دارو و یادآوری",
      description:
        "سیستم هوشمند مدیریت داروها که به بیماران کمک می‌کند داروهای خود را به موقع مصرف کنند. این سیستم شامل یادآوری‌های خودکار، اطلاعات کامل دارویی، تداخلات دارویی، و امکان تمدید نسخه آنلاین می‌باشد. همچنین ارتباط مستقیم با داروخانه‌ها برای ارسال نسخه و تحویل دارو به درب منزل فراهم است.",
      benefits: [
        "یادآوری‌های هوشمند مصرف دارو",
        "هشدار تداخلات دارویی",
        "تمدید آنلاین نسخه",
        "ارتباط مستقیم با داروخانه",
        "پیگیری عوارض جانبی",
      ],
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۸۵٪",
      label: "رضایت بیماران",
      description:
        "مراکز درمانی با پورتال بیمار، میزان رضایت ۸۵٪ بالاتری را از بیماران خود دریافت می‌کنند.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۶۰٪",
      label: "کاهش زمان انتظار",
      description:
        "سیستم نوبت‌دهی آنلاین، زمان انتظار در مطب را تا ۶۰٪ کاهش می‌دهد.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۴۰٪",
      label: "افزایش بهره‌وری",
      description:
        "اتوماسیون فرآیندها باعث افزایش ۴۰٪ بهره‌وری کادر درمانی می‌شود.",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۱۰۰٪",
      label: "امنیت اطلاعات",
      description:
        "رمزنگاری پیشرفته و استانداردهای HIPAA برای حفاظت کامل از اطلاعات بیماران.",
    },
  ];

  const keyFeatures = [
    {
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Appointment System",
      desc: "سیستم رزرو نوبت هوشمند با یادآوری خودکار",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Medical Records",
      desc: "پرونده الکترونیک سلامت با دسترسی امن",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Telemedicine",
      desc: "ویزیت آنلاین با کیفیت HD و امنیت بالا",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Pill className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Medication Management",
      desc: "مدیریت دارو با یادآوری و تمدید نسخه",
      color: "from-cyan-600 to-blue-600",
    },
    {
      icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Health Monitoring",
      desc: "پایش علائم حیاتی و وضعیت سلامت",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Online Payment",
      desc: "پرداخت آنلاین امن و صورتحساب الکترونیک",
      color: "from-indigo-500 to-cyan-500",
    },
    {
      icon: <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Secure Messaging",
      desc: "پیام‌رسان امن بین پزشک و بیمار",
      color: "from-purple-500 to-cyan-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Health Analytics",
      desc: "داشبورد تحلیلی سلامت و پیشرفت درمان",
      color: "from-cyan-500 to-indigo-500",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "HIPAA Compliance",
      desc: "رعایت استانداردهای بین‌المللی حریم خصوصی",
      color: "from-teal-600 to-cyan-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-cyan-950 to-teal-950 overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-200 px-2 sm:px-4 py-1 rounded-full">
              <Stethoscope className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Healthcare Portal Solutions</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient-animated-health bg-clip-text text-transparent font-noto-h1">
                پورتال جامع سلامت و درمان
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              dir="rtl"
            >
             سفارش پورتال بیماران با قابلیت رزرو نوبت آنلاین، مدیریت پرونده‌های پزشکی، ویزیت از راه دور و خدمات دیجیتال سلامت
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="font-persian">
                  شروع پروژه پورتال سلامت شما
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
          <motion.div variants={fadeInUp} className="mb-8 sm:mb-12 text-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">Core Features</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-noto-h2 px-4 sm:px-8 text-white mb-3 sm:mb-4 leading-tight"
            >
              قابلیت‌های اصلی پورتال سلامت
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <p
                className="text-base sm:text-lg text-gray-300 max-w-3xl font-persian px-4"
                dir="rtl"
              >
                با کلیک بر روی هر قابلیت، جزئیات کامل و مزایای آن را مشاهده کنید
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
                      ? "bg-cyan-500/20"
                      : "opacity-60 hover:opacity-100 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-cyan-400 flex mb-1 sm:mb-2">
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
                      className="text-xs sm:text-sm bg-cyan-500/20 text-cyan-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-persian whitespace-nowrap"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">Impact & Results</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              تأثیر پورتال سلامت بر مرکز درمانی شما
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              آمار و نتایج واقعی از مراکز درمانی که از پورتال سلامت استفاده می‌کنند
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
                  className="text-cyan-400 flex justify-center mb-3 sm:mb-4"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Complete Features</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              امکانات کامل پورتال سلامت دیجیتال
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              تمامی ابزارهای مورد نیاز برای دیجیتالی کردن خدمات درمانی شما
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
        id="why-healthcare" 
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Why Healthcare Portal</span>
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              dir="rtl"
            >
              چرا مرکز درمانی شما به پورتال دیجیتال نیاز دارد؟
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              پورتال سلامت دیجیتال نه تنها تجربه بیماران را بهبود می‌بخشد، بلکه
              کارایی مرکز درمانی شما را به طور چشمگیری افزایش می‌دهد و
              هزینه‌های عملیاتی را کاهش می‌دهد.
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {[
                {
                  icon: <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "بهبود تجربه بیمار",
                  desc: "دسترسی آسان به خدمات، کاهش زمان انتظار و افزایش رضایت بیماران با ارائه خدمات دیجیتال 24/7",
                },
                {
                  icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "تصمیم‌گیری هوشمندانه",
                  desc: "دسترسی به داده‌های جامع و تحلیل‌های پیشرفته برای بهبود کیفیت مراقبت‌های پزشکی",
                },
                {
                  icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "امنیت و محرمانگی",
                  desc: "حفاظت کامل از اطلاعات حساس بیماران با رمزنگاری پیشرفته و رعایت استانداردهای بین‌المللی",
                },
                {
                  icon: <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "بهره‌وری عملیاتی",
                  desc: "اتوماسیون فرآیندها، کاهش خطاهای انسانی و صرفه‌جویی در زمان و هزینه‌های اداری",
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
                    className="bg-gradient-to-r from-cyan-500 to-teal-500 p-2 sm:p-3 rounded-lg flex-shrink-0 mt-1"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Implementation Process</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              فرآیند پیاده‌سازی پورتال سلامت
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              در ۴ مرحله ساده و منظم، پورتال سلامت مرکز درمانی شما را راه‌اندازی می‌کنیم
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
                desc: "تحلیل نیازها و فرآیندهای مرکز درمانی",
                icon: <Microscope className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "02",
                title: "Customization",
                desc: "طراحی و شخصی‌سازی بر اساس نیازهای خاص",
                icon: <ClipboardList className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "03",
                title: "Integration",
                desc: "یکپارچه‌سازی با سیستم‌های موجود",
                icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "04",
                title: "Training",
                desc: "آموزش کامل کادر و پشتیبانی مستمر",
                icon: <UserCheck className="w-5 h-5 sm:w-6 sm:h-6" />,
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
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white"
                >
                  {item.icon}
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-cyan-400 font-bold mb-2 text-sm sm:text-base"
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

      {/* Security Section */}
      <motion.section 
        id="security" 
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <Lock className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Security & Compliance</span>
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              dir="rtl"
            >
              امنیت و استانداردهای بین‌المللی
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              حفاظت از اطلاعات بیماران با بالاترین استانداردهای امنیتی جهانی
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <ShieldCheck className="w-6 h-6" />,
                title: "HIPAA Compliance",
                desc: "رعایت کامل استانداردهای HIPAA برای حفاظت از اطلاعات سلامت",
              },
              {
                icon: <Lock className="w-6 h-6" />,
                title: "End-to-End Encryption",
                desc: "رمزنگاری سرتاسری تمام داده‌ها در حال انتقال و ذخیره‌سازی",
              },
              {
                icon: <UserCheck className="w-6 h-6" />,
                title: "Multi-Factor Authentication",
                desc: "احراز هویت چند عاملی برای دسترسی امن کاربران",
              },
              {
                icon: <Database className="w-6 h-6" />,
                title: "Regular Backups",
                desc: "پشتیبان‌گیری منظم و خودکار از تمام اطلاعات",
              },
              {
                icon: <AlertCircle className="w-6 h-6" />,
                title: "Audit Trails",
                desc: "ثبت و پیگیری تمام فعالیت‌ها برای شفافیت کامل",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Data Privacy",
                desc: "حفظ حریم خصوصی بیماران طبق قوانین GDPR",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="text-cyan-400 mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 font-persian" dir="rtl">
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
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 bg-gradient-to-r from-cyan-900/50 to-teal-900/50"
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
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 text-cyan-200 px-3 sm:px-4 py-1 rounded-full"
          >
            <Hospital className="w-4 h-4" />
            <span className="text-xs sm:text-sm">Get Started Today</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
          >
            آماده دیجیتالی کردن خدمات درمانی خود هستید؟
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-persian px-4" 
            dir="rtl"
          >
            با پورتال سلامت حرفه‌ای، مرکز درمانی خود را به سطح جدیدی از کارایی و رضایت بیماران برسانید
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
                className="w-full sm:w-auto bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white border-0 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300"
              >
                <span className="font-persian">
                  شروع پروژه پورتال سلامت شما
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
              Crafting Digital Healthcare Excellence
            </p>
          </motion.div>
          <div className="text-gray-500 text-xs sm:text-sm font-mono text-center sm:text-left">
            © 2025 Kara Code. All rights reserved | kara-code.ir
          </div>
        </div>
      </motion.footer>

      <style jsx>{`
        .text-gradient-animated-health {
          background: linear-gradient(
            270deg,
            #06b6d4,
            #14b8a6,
            #0891b2,
            #0e7490
          );
          background-size: 400% 400%;
          animation: gradient 8s ease infinite;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}