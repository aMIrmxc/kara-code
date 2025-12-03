"use client"

/*
  Safelist for Tailwind JIT compiler to prevent purging of dynamically generated classes.
  These classes are used across the shared components for the 'business' service page.

  - Accent colors for light/dark themes:
    bg-sky-500/20 border-sky-400/30 text-sky-200 text-sky-400
    hover:bg-sky-500/10
    dark:bg-sky-400/20 dark:border-sky-500/30 dark:text-sky-300

  - Gradient for CTA section:
    from-sky-500/50 to-sky-400/50
*/

import { useRouter } from "next/navigation";
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
  Map,
  Car,
  Compass,
  Wallet,
  HeartHandshake,
  Activity,
} from "lucide-react";
import BaseServiceLayout from "@/components/services/shared/BaseServiceLayout";
import FeaturesSection from "@/components/services/shared/FeaturesSection";
import StatsSection from "@/components/services/shared/StatsSection";
import BenefitsSection from "@/components/services/shared/BenefitsSection";
import WhySection from "@/components/services/shared/WhySection";
import ProcessSection from "@/components/services/shared/ProcessSection";
import CtaSection from "@/components/services/shared/CtaSection";

export default function TravelBookingWebsitePageContent() {
  const router = useRouter();
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
      icon: <Activity className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۹۹.۹٪",
      label: "Uptime تضمین شده",
      description:
        "با استفاده از زیرساخت ابری مدرن و معماری Redundant، دسترسی دائمی به وبسایت شما تضمین می‌شود.",
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
      title: "Advanced Search",
      desc: "موتور جستجوی هوشمند با فیلترهای چندگانه",
      color: "from-sky-500 to-blue-500",
    },
    {
      icon: <Wallet className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Digital Wallet",
      desc: "سیستم کیف پول برای پرداخت سریع و کش‌بک",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Secure Payment",
      desc: "درگاه‌های پرداخت معتبر با رمزنگاری SSL",
      color: "from-cyan-500 to-sky-500",
    },
    {
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Rating & Reviews",
      desc: "نظرات و امتیازات واقعی از مسافران قبلی",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Mobile App",
      desc: "دسترسی آسان از طریق اپ iOS و Android",
      color: "from-teal-500 to-cyan-500",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "24/7 Support",
      desc: "تیم پشتیبانی آماده کمک در هر زمان",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analytics Dashboard",
      desc: "داشبورد مدیریتی با آمار دقیق فروش",
      color: "from-sky-500 to-cyan-500",
    },
    {
      icon: <Map className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Interactive map",
      desc: "نمایش هتل‌ها و جاذبه‌ها روی نقشه",
      color: "from-blue-500 to-sky-500",
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Loyalty program",
      desc: "جوایز و تخفیف‌های ویژه برای کاربران وفادار",
      color: "from-indigo-500 to-blue-500",
    },
  ];

  const whyBenefits = [
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: " دسترسی از سراسر ایران",
      desc: "پلتفرم آنلاین شما را به میلیون‌ها مسافر در سراسر ایران متصل می‌کند و محدودیت‌های جغرافیایی را از بین می‌برد.",
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "اتوماسیون کامل فرآیندها",
      desc: "از رزرو تا پرداخت و صدور بلیط، تمام فرآیندها به صورت خودکار انجام می‌شود و نیاز به نیروی انسانی را کاهش می‌دهد.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "تحلیل داده‌ها و بینش‌های تجاری",
      desc: "با داشبورد تحلیلی پیشرفته، رفتار مشتریان را بشناسید و تصمیمات استراتژیک بر اساس داده‌های واقعی بگیرید.",
    },
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "ساخت برند قدرتمند دیجیتال",
      desc: "با ارائه تجربه کاربری عالی و خدمات یکپارچه، برند شما به عنوان یک پلتفرم معتبر و حرفه‌ای شناخته می‌شود.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analysis and planning",
      desc: "بررسی نیازها و تعیین ویژگی‌های پلتفرم",
      icon: <Compass className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "02",
      title: "UI/UX design",
      desc: "طراحی رابط کاربری جذاب و کاربرپسند",
      icon: <Map className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "03",
      title: "Development and integration",
      desc: "کدنویسی و اتصال به سرویس‌های رزرو",
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "04",
      title: "Launch and support",
      desc: "آموزش، راه‌اندازی و پشتیبانی مداوم",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <BaseServiceLayout
      title="پلتفرم رزرو آنلاین سفر"
      subtitle="راه‌اندازی پلتفرم جامع رزرو سفر با قابلیت رزرو پرواز، هتل، اجاره خودرو و تورهای گردشگری در یک مکان"
      description=""
      primaryButtonText="شروع ساخت پلتفرم رزرو سفر شما"
      secondaryButtonText="مشاهده قابلیت‌ها"
      gradientColors="from-gray-900 via-sky-950 to-blue-950"
      accentColor="from-sky-600 to-blue-600"
      accentColorLight="sky-500"
      accentColorDark="sky-400"
      logoIcon={<Plane className="w-4 h-4" />}
      logoText="Travel Booking Platform"
      onPrimaryButtonClick={() =>
        router.push(
          `/register?title=${encodeURIComponent(
            "شروع ساخت پلتفرم رزرو سفر شما"
          )}`
        )
      }
      onSecondaryButtonClick={() =>
        document
          .getElementById("key-features")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <FeaturesSection
        features={features}
        accentColorLight="sky-500"
        accentColorDark="sky-400"
        sectionTitle="امکانات اصلی پلتفرم رزرو سفر"
        sectionSubtitle="با کلیک روی هر بخش، جزئیات کامل آن را مشاهده کنید"
        sectionId="key-features"
      />
      <StatsSection
        stats={stats}
        accentColorLight="sky-500"
        accentColorDark="sky-400"
        sectionTitle="تأثیر پلتفرم رزرو سفر بر کسب‌وکار شما"
        sectionSubtitle="آمار و نتایج واقعی از پلتفرم‌های رزرو آنلاین موفق"
        sectionId="results"
        glance="Platform Impact"
      />
      <BenefitsSection
        keyFeatures={keyFeatures}
        accentColorLight="sky-500"
        accentColorDark="sky-400"
        sectionTitle="ویژگی‌های کلیدی پلتفرم رزرو سفر حرفه‌ای"
        sectionSubtitle="تمام ابزارهایی که برای راه‌اندازی یک پلتفرم رزرو سفر موفق نیاز دارید"
        sectionId="benefits"
        benefit="Platform Features"
      />
      <WhySection
        benefits={whyBenefits}
        accentColor="from-sky-500 to-blue-500"
        accentColorLight="sky-500"
        accentColorDark="sky-400"
        sectionTitle="چرا کسب‌وکار شما به پلتفرم رزرو آنلاین نیاز دارد؟"
        sectionSubtitle="در عصر دیجیتال، یک پلتفرم رزرو آنلاین کلید موفقیت در صنعت گردشگری است. از اتوماسیون فرآیندها تا افزایش درآمد، مزایای بی‌شماری در انتظار شماست."
        sectionId="why-travel-platform"
        why="Why Choose Our Platform"
      />
      <ProcessSection
        steps={processSteps}
        accentColor="from-sky-500 to-blue-500"
        accentColorLight="sky-500"
        accentColorDark="sky-400"
        sectionTitle="مراحل ساخت پلتفرم رزرو سفر شما"
        sectionSubtitle="از ایده تا راه‌اندازی، در کنار شما هستیم"
        sectionId="process"
        process="Development Process"
      />
      <CtaSection
        accentColor="from-sky-900 to-blue-900"
        accentColorLight="sky-500"
        accentColorDark="sky-400"
        sectionTitle="آماده راه‌اندازی پلتفرم رزرو سفر خود هستید؟"
        sectionSubtitle="با پلتفرم حرفه‌ای رزرو سفر، کسب‌وکار خود را به سطح جهانی برسانید"
        sectionId="cta"
        primaryButtonText="شروع ساخت پلتفرم رزرو سفر شما"
        start="Start Your Journey"
        onPrimaryButtonClick={() => {
          router.push(
            `/register?title=${encodeURIComponent(
              "شروع ساخت پلتفرم رزرو سفر شما"
            )}`
          );
        }}
      />
    </BaseServiceLayout>
  );
}
