"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  const features = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
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
      icon: <Calendar className="w-8 h-8" />,
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
      icon: <Menu className="w-8 h-8" />,
      title: "منوی دیجیتال تعاملی",
      description:
        "منوی کاغذی را با یک منوی دیجیتال جذاب و تعاملی جایگزین کنید. تصاویر باکیفیت، توضیحات کامل، فیلترهای غذایی (رژیم کتو، وگان، بدون گلوتن و...) و قابلیت به‌روزرسانی آنی، تجربه مشتری را بهبود می‌بخشد. منو می‌تواند چندزبانه باشد و به‌طور خودکار بر اساس زمان روز (صبحانه، ناهار، شام) یا مناسبت‌ها تغییر کند. همچنین امکان نمایش برچسب‌هایی مانند 'پرفروش'، 'جدید' یا 'تخفیف‌دار' به صورت خودکار وجود دارد.",
      benefits: [
        "به‌روزرسانی آسان و آنی",
        "امکان پشتیبانی از چند زبان",
        "امکان دسته‌بندی محصولات",
        "جذابیت بصری بالا",
        "کاهش هزینه چاپ منو",
        "افزایش میانگین سفارش با پیشنهادات هوشمند",
      ],
    },
    {
      icon: <Users className="w-8 h-8" />,
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

  const packages = [
    {
      name: "Starter",
      price: "از ۱۵ میلیون تومان",
      features: [
        "طراحی واکنش‌گرا (Responsive)",
        "منوی دیجیتال",
        "گالری تصاویر",
        "اطلاعات تماس و موقعیت",
        "یکپارچه‌سازی شبکه‌های اجتماعی",
        "فرم تماس",
        "SEO پایه",
      ],
      recommended: false,
    },
    {
      name: "Professional",
      price: "از ۳۰ میلیون تومان",
      features: [
        "همه امکانات پکیج Starter",
        "سیستم سفارش آنلاین",
        "سیستم رزرو میز",
        "پنل مدیریت محتوا",
        "گزارش‌گیری و آنالیز",
        "چندزبانه",
        "SEO پیشرفته",
        "پشتیبانی ۶ ماهه",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      price: "سفارشی",
      features: [
        "همه امکانات پکیج Professional",
        "اپلیکیشن موبایل",
        "سیستم وفاداری مشتری",
        "یکپارچه‌سازی با POS",
        "مدیریت چند شعبه",
        "API سفارشی",
        "پشتیبانی ۲۴/۷",
        "آموزش تیم",
      ],
      recommended: false,
    },
  ];

  const testimonials = [
    {
      name: "رستوران ایتالیایی بلا ویتا",
      role: "صاحب رستوران",
      content:
        "بعد از راه‌اندازی وبسایت جدید، سفارشات آنلاین ما ۳۵٪ افزایش یافت. سیستم رزرو میز هم کار ما را خیلی راحت‌تر کرده.",
      rating: 5,
    },
    {
      name: "کافه رستوران صبحانه",
      role: "مدیر رستوران",
      content:
        "وبسایتی که کارا کد برای ما طراحی کرد، دقیقاً همان چیزی بود که نیاز داشتیم. حرفه‌ای، زیبا و کاربرپسند.",
      rating: 5,
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "۴۵٪",
      label: "میانگین افزایش فروش",
      description:
        "رستوران‌های دارای وبسایت حرفه‌ای و سفارش آنلاین، به‌طور متوسط ۴۵٪ فروش بیشتری نسبت به رقبای خود تجربه می‌کنند.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "۲۴/۷",
      label: "دریافت سفارش",
      description:
        "وبسایت شما حتی در ساعات تعطیلی نیز مشتری جذب کرده و سفارش می‌گیرد؛ یعنی درآمدی بدون وقفه.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "۶۰٪",
      label: "کاهش تماس تلفنی",
      description:
        "با رزرو آنلاین و منوی دیجیتال، حجم تماس‌ها تا ۶۰٪ کمتر می‌شود و تیم شما روی کیفیت سرویس تمرکز می‌کند.",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      value: "۳۰٪",
      label: "بازگشت مشتری",
      description:
        "سیستم وفاداری یکپارچه در وبسایت، احتمال بازگشت مشتری را تا ۳۰٪ افزایش می‌دهد.",
    },
  ];

  const keyFeatures = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "Online Ordering",
      desc: "سیستم سفارش آنلاین با پردازش امن",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Table Booking",
      desc: "رزرو آنلاین میز با تأیید خودکار",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photo Gallery",
      desc: "گالری حرفه‌ای از غذاها و فضای رستوران",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Reviews System",
      desc: "سیستم نظرات و امتیازدهی مشتریان",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Location & Hours",
      desc: "نمایش موقعیت و ساعات کاری",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Secure Payment",
      desc: "درگاه پرداخت امن و چندگانه",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Loyalty Program",
      desc: "سیستم وفاداری مشتریان با امتیاز و جوایز",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      desc: "داشبورد آنالیز فروش و رفتار مشتری",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Push Notifications",
      desc: "اطلاع‌رسانی لحظه‌ای برای پیشنهادها و تخفیف‌ها",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-orange-950 to-red-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-600 to-pink-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-1 py-1 rounded-full">
              <Utensils className="w-4 h-4" />
              <span className="text-sm">Restaurant Website Solutions</span>
            </div>

            <h1 className="font-mono text-6xl md:text-7xl font-bold text-white mb-6 ">
              <span className="text-gradient-animated bg-clip-text text-transparent ">
                وبسایت رستوران حرفه‌ای
              </span>
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-persian"
              dir="rtl"
            >
              حضور آنلاین قدرتمند برای رستوران شما با سیستم سفارش‌گیری و پرداخت
              آنلاین، رزرو میز و منوی دیجیتال تعاملی
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                size="lg"
                className="bg-gray-100 hover:bg-gray-200 border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                onClick={() =>
                  document
                    .getElementById("")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="text-gradient-animated font-persian">
                  شروع پروژه وبسایت رستوران شما
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/40 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg rounded-full transition-all duration-300 hover:border-white/60 bg-transparent font-persian"
                onClick={() =>
                  document
                    .getElementById("")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                توضیحات بیشتر
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/*  Key Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-4 py-1 rounded-full">
              <span className="text-sm font-semibold">
                 Key Features
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              قابلیت‌های کلیدی در عمل
            </h2>
            <p
              className="text-lg text-gray-300 max-w-3xl mx-auto font-persian"
              dir="rtl"
            >
              با کلیک بر روی هر قابلیت، جزئیات و مزایای آن را مشاهده کنید
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`text-center cursor-pointer transition-all duration-300 p-4 rounded-lg ${
                    activeFeature === index
                      ? "bg-orange-500/20"
                      : "opacity-60 hover:opacity-100 hover:bg-white/5"
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-orange-400 flex justify-center mb-3">
                    {feature.icon}
                  </div>
                  <div
                    className="text-sm font-semibold text-white font-persian"
                    dir="rtl"
                  >
                    {feature.title}
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center h-[600px]  md:h-[480px]">
              <h3
                className="text-2xl font-bold text-white mb-3 font-persian"
                dir="rtl"
              >
                {features[activeFeature].title}
              </h3>
              <p
                className="text-gray-300 mb-12  max-w-2xl mx-auto leading-relaxed font-persian"
                dir="rtl"
              >
                {features[activeFeature].description}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {features[activeFeature].benefits.map((benefit, i) => (
                  <span
                    key={i}
                    className="text-xs bg-orange-500/20 text-orange-200 px-3 py-1.5 rounded-full font-persian"
                    dir="rtl"
                  >
                    {benefit}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-12">
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-4 py-1 rounded-full">
              <span className="text-sm font-semibold">Results at a glance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              نتایج وبسایت آنلاین رستوران شما در یک نگاه
            </h2>
            <p
              className="text-lg text-gray-300 max-w-3xl mx-auto font-persian"
              dir="rtl"
            >
              نگاهی عمیق به تأثیر وبسایت بر رشد کسب‌وکار شما
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center transform transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 flex flex-col justify-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-orange-400 flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <h4
                  className="text-lg font-semibold text-gray-200 mb-2"
                  dir="rtl"
                >
                  {stat.label}
                </h4>
                <p className="text-xs text-gray-400 font-persian" dir="rtl">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      

      {/* Benefits Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-1 py-1 rounded-full">
              <span className="text-sm">Benefits</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              ویژگی های کلی یک وب سایت رستورانی
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto font-persian"
              dir="rtl"
            >
              تمام ابزارهایی که برای موفقیت آنلاین رستوران شما نیاز دارید
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div
                  className={`bg-gradient-to-r ${feature.color} p-3 rounded-lg inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 font-persian" dir="rtl">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-1 py-1 rounded-full">
              <span className="text-sm">Why restaurant online website</span>
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 "
              dir="rtl"
            >
              چرا رستوران شما به یک وب‌سایت حرفه‌ای نیاز دارد؟
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto font-persian"
              dir="rtl"
            >
              یک وب‌سایت مدرن فقط یک ویترین آنلاین نیست، بلکه یک ابزار قدرتمند
              برای رشد کسب‌وکار شماست. از افزایش فروش گرفته تا تقویت برند،
              مزایای داشتن یک پلتفرم اختصاصی بی‌شمار است.
            </p>
          </div>

          <div >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {[
                {
                  icon: <TrendingUp className="w-6 h-6 text-white" />,
                  title: "افزایش درآمد و فروش",
                  desc: "با دریافت سفارشات آنلاین در ۲۴ ساعت شبانه‌روز، فروش خود را تا ۴۰٪ افزایش دهید و محدودیت‌های زمانی و مکانی را از بین ببرید.",
                },
                {
                  icon: <Clock className="w-6 h-6 text-white" />,
                  title: "صرفه‌جویی در زمان و هزینه‌ها",
                  desc: "سیستم رزرواسیون خودکار و منوی دیجیتال، تماس‌های تلفنی را کاهش داده و به تیم شما اجازه می‌دهد روی کیفیت خدمات تمرکز کنند.",
                },
                {
                  icon: <Award className="w-6 h-6 text-white" />,
                  title: "برندسازی و هویت دیجیتال",
                  desc: "فضای منحصر به فرد، داستان و غذاهای خاص رستوران خود را به نمایش بگذارید و یک تصویر حرفه‌ای و ماندگار در ذهن مشتریان بسازید.",
                },
                {
                  icon: <Shield className="w-6 h-6 text-white" />,
                  title: "برتری رقابتی",
                  desc: "با حضوری مدرن و ارائه خدمات آنلاین، از رقبایی که هنوز به روش‌های سنتی کار می‌کنند، متمایز شوید و مشتریان بیشتری جذب کنید.",
                },
                
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 flex-row-reverse space-y-6"
                >
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div className="flex-1">
                    <h4
                      className="text-lg text-white font-semibold mb-1 font-persian"
                      dir="rtl"
                    >
                      {benefit.title}
                    </h4>
                    <p className="text-gray-400 font-persian text-sm" dir="rtl">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-1 py-1 rounded-full">
              <span className="text-sm">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Restaurant Website Packages
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto font-persian"
              dir="rtl"
            >
              پکیج‌های طراحی شده ویژه نیازهای رستوران‌ها و کافه‌ها
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`bg-white/5 backdrop-blur-sm border ${
                  pkg.recommended ? "border-orange-400" : "border-white/10"
                } rounded-2xl p-8 relative ${
                  pkg.recommended ? "scale-105" : ""
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    پرطرفدارترین
                  </div>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">
                  {pkg.name}
                </h3>
                <div
                  className="text-3xl font-bold text-orange-400 mb-6"
                  dir="rtl"
                >
                  {pkg.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span
                        className="text-gray-300 text-sm font-persian"
                        dir="rtl"
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                    pkg.recommended
                      ? "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-xl"
                      : "border border-white/30 text-white hover:bg-white/10"
                  }`}
                >
                  انتخاب پکیج
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-1 py-1 rounded-full">
              <span className="text-sm">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple Process, Stunning Results
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto font-persian"
              dir="rtl"
            >
              در ۴ مرحله ساده وبسایت رستوران خود را راه‌اندازی کنید
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Consultation",
                desc: "بررسی نیازها و اهداف رستوران شما",
                icon: <MessageSquare className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "Design",
                desc: "طراحی منحصر به فرد متناسب با برند شما",
                icon: <Wine className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Development",
                desc: "توسعه با آخرین تکنولوژی‌ها",
                icon: <Coffee className="w-6 h-6" />,
              },
              {
                step: "04",
                title: "Launch",
                desc: "راه‌اندازی و آموزش تیم شما",
                icon: <Zap className="w-6 h-6" />,
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon}
                </div>
                <div className="text-orange-400 font-bold mb-2">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm font-persian" dir="rtl">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-1 py-1 rounded-full">
              <span className="text-sm">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto font-persian"
              dir="rtl"
            >
              داستان موفقیت رستوران‌هایی که به ما اعتماد کردند
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 font-persian" dir="rtl">
                  "{testimonial.content}"
                </p>
                <div>
                  <div
                    className="font-semibold text-white font-persian"
                    dir="rtl"
                  >
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-400 font-persian" dir="rtl">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-orange-900/50 to-red-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 text-orange-200 px-1 py-1 rounded-full">
            <span className="text-sm">Get Started</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Elevate Your Restaurant's Online Presence?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-persian" dir="rtl">
            با وبسایت حرفه‌ای، رستوران شما را به سطح جدیدی از موفقیت برسانید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              <span>تماس برای مشاوره رایگان</span>
            </Button>
            <Button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              <span>درخواست قیمت</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/50 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Kara Code</h3>
              <p className="text-gray-400 text-sm font-persian" dir="rtl">
                متخصص طراحی وبسایت رستوران و کافه
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">
                Restaurant Services
              </h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Online Ordering System</li>
                <li>Table Reservation</li>
                <li>Digital Menu</li>
                <li>Customer Reviews</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Fine Dining</li>
                <li>Fast Food</li>
                <li>Cafes & Bistros</li>
                <li>Food Trucks</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Email: restaurant@kara-code.ir</p>
                <p>Phone: +98 123 456 7890</p>
                <p>Available 24/7</p>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-white/10">
            <p className="text-gray-500 text-sm font-persian">
              © 2025 Kara Code. All rights reserved | Specialized in Restaurant
              Websites
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
