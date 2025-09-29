"use client";

import { Metadata } from "next";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ShoppingBag,
  CreditCard,
  Package,
  TrendingUp,
  Users,
  Shield,
  Smartphone,
  Globe,
  BarChart3,
  ShoppingCart,
  Store,
  Truck,
  Heart,
  Search,
  Filter,
  Tag,
  Lock,
  RefreshCw,
  Zap,
  Star,
  MessageSquare,
  Award,
  ArrowRight,
  Check,
  Clock,
  DollarSign,
  Percent,
  Layers,
  Database,
  Settings,
  ChartBar,
  Mail,
  Phone,
} from "lucide-react";
import Footer from "@/components/layout/Footer";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
  AnimatePresence,
} from "framer-motion";

export default function EcommercePlatformPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);

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
    }, 15000);

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
      title: "سبد خرید هوشمند",
      description:
        "سیستم سبد خرید پیشرفته با قابلیت ذخیره‌سازی خودکار، محاسبه لحظه‌ای هزینه ارسال، اعمال کدهای تخفیف و کوپن، و پیشنهاد محصولات مرتبط. کاربران می‌توانند محصولات را برای خرید بعدی ذخیره کنند، مقایسه کنند و از تخفیف‌های ویژه سبد خرید بهره‌مند شوند. سیستم به صورت هوشمند محصولات مکمل را پیشنهاد می‌دهد و فرآیند پرداخت را در کمترین مراحل ممکن تکمیل می‌کند.",
      benefits: [
        "پرداخت سریع یک کلیکه",
        "ذخیره‌سازی سبد برای بعد",
        "محاسبه خودکار مالیات و ارسال",
        "پیشنهاد محصولات مکمل",
      ],
    },
    {
      icon: <Package className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "مدیریت موجودی پیشرفته",
      description:
        "سیستم مدیریت موجودی در زمان واقعی که به صورت خودکار موجودی انبار را کنترل می‌کند، هشدارهای کمبود موجودی ارسال می‌کند و از فروش بیش از موجودی جلوگیری می‌کند. امکان مدیریت چند انبار، پیش‌فروش محصولات، رزرو موجودی برای سفارشات خاص و گزارش‌گیری دقیق از گردش کالا. سیستم به صورت هوشمند پیش‌بینی نیاز آینده را انجام می‌دهد و پیشنهاد سفارش‌گذاری مجدد ارائه می‌کند.",
      benefits: [
        "کنترل موجودی لحظه‌ای",
        "هشدار اتمام موجودی",
        "مدیریت چند انباره",
        "پیش‌بینی نیاز آینده",
        "گزارش گردش کالا",
      ],
    },
    {
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "درگاه پرداخت امن",
      description:
        "درگاه‌های پرداخت متنوع و امن با پشتیبانی از تمام بانک‌های داخلی، کیف پول الکترونیک، پرداخت اقساطی و ارزهای دیجیتال. سیستم با استانداردهای امنیتی PCI-DSS سازگار است و از رمزنگاری SSL استفاده می‌کند. امکان پرداخت درب منزل، پرداخت با کارت اعتباری، و تسویه حساب با فروشندگان به صورت خودکار. تمام تراکنش‌ها قابل پیگیری و بازگشت‌پذیر هستند.",
      benefits: [
        "پشتیبانی از همه بانک‌ها",
        "پرداخت اقساطی",
        "کیف پول دیجیتال",
        "امنیت بالا SSL",
        "تسویه خودکار",
      ],
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "پنل کاربری جامع",
      description:
        "داشبورد کاربری شخصی‌سازی شده با امکان مدیریت سفارشات، آدرس‌ها، لیست علاقه‌مندی‌ها، تاریخچه خرید و امتیازات باشگاه مشتریان. کاربران می‌توانند سفارشات خود را پیگیری کنند، فاکتور دریافت کنند، محصولات را امتیازدهی و نقد کنند، و از پیشنهادات شخصی‌سازی شده بهره‌مند شوند. سیستم وفاداری با امتیازدهی و جوایز ویژه مشتریان دائمی.",
      benefits: [
        "پیگیری آنلاین سفارش",
        "مدیریت آدرس‌ها",
        "تاریخچه کامل خرید",
        "باشگاه مشتریان",
        "پیشنهادات شخصی",
      ],
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳۰۰٪",
      label: "رشد میانگین فروش",
      description:
        "فروشگاه‌های آنلاین با پلتفرم حرفه‌ای ما، به طور متوسط ۳۰۰٪ رشد فروش در سال اول را تجربه می‌کنند.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۲۴/۷",
      label: "فروش شبانه‌روزی",
      description:
        "فروشگاه شما حتی در زمان خواب شما هم فعال است و سفارش می‌گیرد؛ درآمد بدون وقفه و محدودیت زمانی.",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۱۰۰٪",
      label: "دسترسی جهانی",
      description:
        "با حذف محدودیت‌های جغرافیایی، به مشتریان سراسر کشور و حتی جهان دسترسی پیدا کنید.",
    },
    {
      icon: <DollarSign className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۷۰٪",
      label: "کاهش هزینه‌ها",
      description:
        "کاهش ۷۰٪ هزینه‌های عملیاتی نسبت به فروشگاه فیزیکی با حذف اجاره، دکوراسیون و نیروی فروش.",
    },
  ];

  const keyFeatures = [
    {
      icon: <Store className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "فروشگاه چندفروشنده",
      desc: "امکان ایجاد مارکت‌پلیس با فروشندگان متعدد",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "جستجوی پیشرفته",
      desc: "فیلترهای هوشمند و جستجوی سریع محصولات",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: <Tag className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "مدیریت تخفیف",
      desc: "کوپن‌ها، تخفیف‌های زمان‌دار و فروش ویژه",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: <Truck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "مدیریت ارسال",
      desc: "محاسبه هزینه ارسال و پیگیری مرسولات",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "لیست علاقه‌مندی",
      desc: "ذخیره و مدیریت محصولات مورد علاقه",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "گزارشات تحلیلی",
      desc: "آنالیز فروش، رفتار کاربران و عملکرد",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "اپلیکیشن موبایل",
      desc: "PWA و اپلیکیشن اختصاصی iOS و Android",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "امنیت پیشرفته",
      desc: "SSL، احراز هویت دومرحله‌ای و ضد تقلب",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سرعت بارگذاری",
      desc: "بهینه‌سازی عملکرد و CDN جهانی",
      color: "from-yellow-500 to-amber-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-rose-950 to-pink-950 overflow-x-hidden">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-4"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-purple-600 to-rose-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-sm border border-rose-400/30 text-rose-200 px-2 sm:px-4 py-1 rounded-full">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-xs sm:text-sm">
                E-commerce Platform Solutions
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              <span className="text-gradient-animated bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-400 font-noto-h1">
                پلتفرم فروشگاه آنلاین مدرن
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed font-persian px-4"
              dir="rtl"
            >
              راه‌اندازی فروشگاه اینترنتی حرفه‌ای با قابلیت‌های پیشرفته مدیریت
              محصولات، سبد خرید هوشمند، درگاه پرداخت امن و پنل مدیریت جامع
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
                  شروع ساخت فروشگاه آنلاین شما
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
        id="key-features"
        className="py-16 sm:py-20 px-4 bg-black/30 text-center flex items-center justify-center min-h-screen"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2}}
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto text-left w-full">
          <motion.div variants={fadeInUp} className="mb-8 sm:mb-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-sm border border-rose-400/30 text-rose-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">
                Key Features
              </span>
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold font-noto-h2 px-4 sm:px-8 text-white mb-3 sm:mb-4 leading-tight"
            >
              قابلیت‌های کلیدی پلتفرم
            </motion.h2>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <p
                className="text-base sm:text-lg text-gray-300 max-w-3xl font-persian px-4"
                dir="rtl"
              >
                با کلیک روی هر قابلیت، جزئیات کامل و مزایای آن را مشاهده کنید
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
                      ? "bg-rose-500/20"
                      : "opacity-60 hover:opacity-100 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-rose-400 flex mb-1 sm:mb-2">
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
                      className="text-xs sm:text-sm bg-rose-500/20 text-rose-200 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-persian whitespace-nowrap"
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
              viewport={{ once: false, amount: 0.4 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-sm border border-rose-400/30 text-rose-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm font-semibold">
                Business Impact
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              تأثیر فروشگاه آنلاین بر کسب‌وکار شما
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              آمار و نتایج واقعی از مشتریان موفق ما
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
                  className="text-rose-400 flex justify-center mb-3 sm:mb-4"
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
        viewport={{ once: false, amount: 0.2 }}
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-sm border border-rose-400/30 text-rose-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Platform Features</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              امکانات جامع پلتفرم فروشگاهی
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              تمام ابزارهایی که برای راه‌اندازی و رشد فروشگاه آنلاین نیاز دارید
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
        id="why-ecommerce"
        className="py-16 sm:py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-sm border border-rose-400/30 text-rose-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">
                Why E-commerce Platform
              </span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
              dir="rtl"
            >
              چرا کسب‌وکار شما به فروشگاه آنلاین نیاز دارد؟
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              در عصر دیجیتال، فروشگاه آنلاین نه یک انتخاب، بلکه یک ضرورت است. از
              دسترسی به بازار بزرگ‌تر گرفته تا کاهش هزینه‌ها، مزایای حضور آنلاین
              بی‌شمار است.
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
                  title: "دسترسی به بازار جهانی",
                  desc: "با حذف محدودیت‌های جغرافیایی، محصولات خود را به مشتریان سراسر کشور و حتی جهان عرضه کنید و بازار هدف خود را صدها برابر گسترش دهید.",
                },
                {
                  icon: (
                    <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  ),
                  title: "کاهش چشمگیر هزینه‌ها",
                  desc: "بدون نیاز به اجاره مکان فیزیکی، دکوراسیون گران‌قیمت و نیروی فروش متعدد، هزینه‌های عملیاتی خود را تا ۷۰٪ کاهش دهید.",
                },
                {
                  icon: (
                    <ChartBar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  ),
                  title: "تحلیل دقیق رفتار مشتری",
                  desc: "با ابزارهای تحلیلی پیشرفته، رفتار خرید مشتریان را بررسی کنید، محصولات پرفروش را شناسایی کنید و استراتژی‌های بازاریابی هدفمند طراحی کنید.",
                },
                {
                  icon: (
                    <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  ),
                  title: "اتوماسیون فرآیندها",
                  desc: "از ثبت سفارش تا ارسال کالا، تمام فرآیندها به صورت خودکار مدیریت می‌شوند و زمان شما برای توسعه کسب‌وکار آزاد می‌شود.",
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
                    className="bg-gradient-to-r from-rose-500 to-pink-500 p-2 sm:p-3 rounded-lg flex-shrink-0 mt-1"
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
        viewport={{ once: false, amount: 0.2 }}
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
              className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-sm border border-rose-400/30 text-rose-200 px-3 sm:px-4 py-1 rounded-full"
            >
              <span className="text-xs sm:text-sm">Our Process</span>
            </motion.div>
            <motion.h2
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
            >
              مراحل راه‌اندازی فروشگاه آنلاین
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-persian px-4"
              dir="rtl"
            >
              در ۴ مرحله ساده، فروشگاه آنلاین حرفه‌ای خود را راه‌اندازی کنید
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
                title: "مشاوره و برنامه‌ریزی",
                desc: "تحلیل نیازها و طراحی استراتژی",
                icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "02",
                title: "طراحی UI/UX",
                desc: "طراحی رابط کاربری جذاب و کاربرپسند",
                icon: <Layers className="w-5 h-5 sm:w-6 sm:h-6" />,
              },
              {
                step: "03",
                title: "توسعه و برنامه‌نویسی",
                desc: "پیاده‌سازی با آخرین تکنولوژی‌ها",
                icon: <Settings className="w-5 h-5 sm:w-6 sm:h-6" />,
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
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    delay: index * 0.2,
                  }}
                  whileHover={{ rotate: 360 }}
                  className="bg-gradient-to-r from-rose-500 to-pink-500 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white"
                >
                  {item.icon}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ delay: index * 0.2 + 0.2 }}
                  className="text-rose-400 font-bold mb-2 text-sm sm:text-base"
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
        className="min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 bg-gradient-to-r from-rose-900/50 to-pink-900/50"
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
            className="mb-4 sm:mb-6 inline-flex items-center gap-2 bg-rose-500/20 backdrop-blur-sm border border-rose-400/30 text-rose-200 px-3 sm:px-4 py-1 rounded-full"
          >
            <span className="text-xs sm:text-sm">Get Started Today</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4 sm:px-8 font-noto-h2 leading-tight"
          >
            آماده راه‌اندازی فروشگاه آنلاین خود هستید؟
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 font-persian px-4"
            dir="rtl"
          >
            همین امروز فروشگاه آنلاین حرفه‌ای خود را راه‌اندازی کنید و وارد
            دنیای تجارت الکترونیک شوید
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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
                  شروع پروژه فروشگاه آنلاین شما
                </span>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            ></motion.div>
          </motion.div>
        </div>
      </motion.section>

     <Footer />
    </div>
  );
}
