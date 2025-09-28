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
  Code2,
  Rocket,
  Palette,
  Shield,
  Zap,
  Users,
  Settings,
  Database,
  Cloud,
  Smartphone,
  Globe,
  TrendingUp,
  MessageSquare,
  Award,
  Lock,
  Cpu,
  Layers,
  GitBranch,
  BarChart3,
  Heart,
  Terminal,
  Gauge,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  Workflow,
  Package,
  Server,
  Activity,
} from "lucide-react";

export default function CustomWebAppPage() {
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
      icon: <Workflow className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "طراحی کاملاً سفارشی",
      description:
        "اپلیکیشن وب شما بر اساس نیازهای منحصر به فرد کسب‌وکارتان طراحی می‌شود. از رابط کاربری گرفته تا منطق پیچیده کسب‌وکار، همه چیز دقیقاً مطابق با خواسته‌های شما پیاده‌سازی می‌شود. با استفاده از آخرین فناوری‌ها و فریمورک‌ها، یک محصول دیجیتال قدرتمند و منعطف خواهید داشت که با رشد کسب‌وکار شما گسترش می‌یابد.",
      benefits: [
        "UI/UX منحصر به فرد",
        "قابلیت توسعه نامحدود",
        "مالکیت کامل کد منبع",
        "بدون محدودیت در ویژگی‌ها",
      ],
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "معماری مقیاس‌پذیر",
      description:
        "با معماری میکروسرویس و استفاده از تکنولوژی‌های ابری، اپلیکیشن شما آماده رشد است. سیستم به گونه‌ای طراحی می‌شود که بتواند از یک استارت‌آپ کوچک تا یک سازمان بزرگ، نیازهای شما را پاسخ دهد. پایگاه داده بهینه‌سازی شده، کش‌گذاری هوشمند، و توزیع بار به صورت خودکار، عملکرد بی‌نقص را تضمین می‌کنند.",
      benefits: [
        "Auto-scaling در AWS/Azure",
        "پایگاه داده NoSQL/SQL",
        "Load Balancing خودکار",
        "CDN و کش هوشمند",
        "صفر Downtime در آپدیت‌ها",
      ],
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "امنیت سطح بانکی",
      description:
        "امنیت اطلاعات در اولویت اول ماست. با پیاده‌سازی استانداردهای OWASP، رمزنگاری End-to-End، و احراز هویت چندعاملی، داده‌های حساس شما و کاربرانتان در امان خواهد بود. تست‌های نفوذ منظم، مانیتورینگ 24/7، و backup خودکار، آرامش خاطر کامل را برای شما فراهم می‌کنند.",
      benefits: [
        "SSL و رمزنگاری 256 بیتی",
        "احراز هویت OAuth 2.0",
        "GDPR Compliant",
        "Penetration Testing منظم",
        "Backup خودکار روزانه",
      ],
    },
    {
      icon: <Gauge className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "عملکرد فوق‌العاده سریع",
      description:
        "با استفاده از تکنیک‌های بهینه‌سازی پیشرفته، اپلیکیشن شما با سرعت نور بارگذاری می‌شود. Lazy Loading، Code Splitting، و Server-Side Rendering تضمین می‌کنند که کاربران تجربه‌ای روان و سریع داشته باشند. با نمره 95+ در Google PageSpeed، رتبه SEO عالی و رضایت کاربر تضمین شده است.",
      benefits: [
        "زمان بارگذاری زیر 2 ثانیه",
        "Progressive Web App",
        "Offline Functionality",
        "Image Optimization خودکار",
        "95+ Google PageSpeed Score",
      ],
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳X",
      label: "افزایش بهره‌وری",
      description:
        "اپلیکیشن‌های سفارشی به طور میانگین بهره‌وری تیم‌ها را تا 3 برابر افزایش می‌دهند با اتوماسیون فرآیندها.",
    },
    {
      icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۹۹.۹٪",
      label: "Uptime تضمین شده",
      description:
        "با استفاده از زیرساخت ابری مدرن و معماری Redundant، دسترسی دائمی به اپلیکیشن شما تضمین می‌شود.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۱۰۰K+",
      label: "کاربر همزمان",
      description:
        "معماری مقیاس‌پذیر ما قادر به پشتیبانی از صدها هزار کاربر همزمان بدون افت عملکرد است.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۶۰٪",
      label: "کاهش هزینه‌ها",
      description:
        "اتوماسیون فرآیندها و حذف سیستم‌های قدیمی، هزینه‌های عملیاتی را تا 60% کاهش می‌دهد.",
    },
  ];

  const keyFeatures = [
    {
      icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Full-Stack Development",
      desc: "توسعه End-to-End با React، Node.js و تکنولوژی‌های مدرن",
      color: "from-fuchsia-500 to-purple-500",
    },
    {
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Cloud Native",
      desc: "Deploy در AWS، Azure یا Google Cloud با Auto-scaling",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Responsive Design",
      desc: "طراحی کاملاً واکنش‌گرا برای تمام دستگاه‌ها",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: <GitBranch className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Version Control",
      desc: "مدیریت کد با Git و CI/CD Pipeline اتوماتیک",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Advanced Security",
      desc: "رمزنگاری، Firewall و امنیت چندلایه",
      color: "from-fuchsia-600 to-violet-600",
    },
    {
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "API Integration",
      desc: "اتصال به هر سرویس خارجی با RESTful/GraphQL APIs",
      color: "from-violet-600 to-indigo-600",
    },
    {
      icon: <Terminal className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Admin Dashboard",
      desc: "پنل مدیریت قدرتمند با آنالیز داده‌ها",
      color: "from-purple-600 to-fuchsia-600",
    },
    {
      icon: <Server className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Microservices",
      desc: "معماری میکروسرویس برای مقیاس‌پذیری بی‌نهایت",
      color: "from-indigo-600 to-purple-600",
    },
    {
      icon: <Sparkles className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "AI Integration",
      desc: "امکان افزودن قابلیت‌های هوش مصنوعی و Machine Learning",
      color: "from-fuchsia-700 to-violet-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-fuchsia-950 to-violet-950 overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-fuchsia-600 to-violet-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-fuchsia-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-fuchsia-500/20 backdrop-blur-sm border border-fuchsia-400/30 text-fuchsia-200 px-2 sm:px-4 py-1 rounded-full">
              <Code2 className="w-4 h-4" />
              <span className="text-xs sm:text-sm">Custom Web Application Development</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="bg-gradient-to-r text-gradient-animated  bg-clip-text text-transparent animate-pulse font-noto-h1">
                وب اپلیکیشن سفارشی
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              dir="rtl"
            >
              یک اپلیکیشن وب اختصاصی با طراحی دلخواه شما و قابلیت‌های کاملاً منعطف برای رشد کسب‌وکارتان
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
                <span className="text-gradient-animated font-bold font-persian">
                  شروع ساخت اپلیکیشن شما
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-fuchsia-500/20 backdrop-blur-sm border border-fuchsia-400/30 text-fuchsia-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">Core Features</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-noto-h2 px-4 sm:px-8 text-white mb-3 sm:mb-4 leading-tight"
            >
              ویژگی‌های اصلی اپلیکیشن سفارشی
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <p
                className="text-base sm:text-lg text-gray-300 max-w-3xl font-persian px-4"
                dir="rtl"
              >
                هر ویژگی با دقت طراحی شده تا نیازهای خاص کسب‌وکار شما را برآورده کند
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
                      ? "bg-fuchsia-500/20"
                      : "opacity-60 hover:opacity-100 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-fuchsia-400 flex mb-1 sm:mb-2">
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
                      className="text-xs sm:text-sm bg-fuchsia-500/20 text-fuchsia-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-persian whitespace-nowrap"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-fuchsia-500/20 backdrop-blur-sm border border-fuchsia-400/30 text-fuchsia-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">Performance Metrics</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              نتایج قابل اندازه‌گیری و تضمین شده
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              آمار و ارقامی که نشان‌دهنده قدرت اپلیکیشن‌های سفارشی است
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
                  className="text-fuchsia-400 flex justify-center mb-3 sm:mb-4"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-fuchsia-500/20 backdrop-blur-sm border border-fuchsia-400/30 text-fuchsia-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Technical Features</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              قابلیت‌های فنی پیشرفته
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              تکنولوژی‌های روز دنیا در خدمت کسب‌وکار شما
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
        id="why-custom-app" 
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-fuchsia-500/20 backdrop-blur-sm border border-fuchsia-400/30 text-fuchsia-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Why Custom Development</span>
            </motion.div>
            
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              dir="rtl"
            >
              چرا توسعه سفارشی بهترین انتخاب است؟
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              برخلاف قالب‌های آماده، اپلیکیشن سفارشی دقیقاً مطابق نیازهای شما طراحی می‌شود و با رشد کسب‌وکارتان توسعه می‌یابد
            </motion.p>
          </motion.div>

          <motion.div variants={staggerContainer} className="space-y-6 sm:space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {[
                {
                  icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "رقابت‌پذیری بی‌نظیر",
                  desc: "با ویژگی‌های منحصر به فرد که رقبا ندارند، در بازار متمایز شوید و مشتریان را با تجربه کاربری بی‌نظیر شگفت‌زده کنید.",
                },
                {
                  icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "انعطاف‌پذیری کامل",
                  desc: "هر زمان که نیاز به ویژگی جدید داشتید، بدون محدودیت‌های پلتفرم‌های آماده، آن را اضافه کنید و سیستم را توسعه دهید.",
                },
                {
                  icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "مالکیت کامل",
                  desc: "کد منبع و تمام دارایی‌های دیجیتال متعلق به شماست. بدون وابستگی به شرکت‌های ثالث و بدون هزینه‌های ماهانه اجباری.",
                },
                {
                  icon: <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
                  title: "عملکرد بهینه",
                  desc: "بدون کدهای اضافی و ماژول‌های غیرضروری، اپلیکیشن شما با حداکثر سرعت و کارایی اجرا می‌شود.",
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
                    className="bg-gradient-to-r from-fuchsia-500 to-violet-500 p-2 sm:p-3 rounded-lg flex-shrink-0 mt-1"
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-fuchsia-500/20 backdrop-blur-sm border border-fuchsia-400/30 text-fuchsia-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Development Process</span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              فرآیند توسعه Agile
            </motion.h2>
            
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              با متدولوژی Agile، پروژه شما در Sprint های کوتاه و با بازخورد مستمر پیش می‌رود
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
                desc: "تحلیل نیازمندی‌ها و طراحی معماری",
                icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "02",
                title: "Design",
                desc: "طراحی UI/UX و Prototype تعاملی",
                icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "03",
                title: "Development",
                desc: "کدنویسی با تست‌های خودکار",
                icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "04",
                title: "Deployment",
                desc: "استقرار، آموزش و پشتیبانی",
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
                    delay: index * 0.2
                  }}
                  whileHover={{ rotate: 360 }}
                  className="bg-gradient-to-r from-fuchsia-500 to-violet-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4"
                >
                  {item.icon}
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-fuchsia-400 font-bold mb-2 text-sm sm:text-base"
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
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 bg-gradient-to-r from-fuchsia-900/50 to-violet-900/50"
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
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-fuchsia-500/20 backdrop-blur-sm border border-fuchsia-400/30 text-fuchsia-200 px-3 sm:px-4 py-1 rounded-full"
          >
            <span className="text-xs sm:text-sm">Start Your Project</span>
          </motion.div>
          
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
          >
            آماده ساخت اپلیکیشن رویایی خود هستید؟
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-persian px-4" 
            dir="rtl"
          >
            از ایده تا اجرا، ما در کنار شما هستیم تا بهترین راه‌حل را برای کسب‌وکارتان بسازیم
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
                  className="bg-gray-100 hover:bg-gray-200 border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="text-gradient-animated font-bold font-persian">
                  شروع ساخت اپلیکیشن شما
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