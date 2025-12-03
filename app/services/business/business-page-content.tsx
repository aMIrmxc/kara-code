"use client";

/*
  Safelist for Tailwind JIT compiler to prevent purging of dynamically generated classes.
  These classes are used across the shared components for the 'business' service page.

  - Accent colors for light/dark themes:
    bg-blue-500/20 border-blue-400/30 text-blue-200 text-blue-400
    hover:bg-blue-500/10
    dark:bg-blue-400/20 dark:border-blue-500/30 dark:text-blue-300

  - Gradient for CTA section:
    from-blue-500/50 to-blue-400/50
*/

import { useRouter } from "next/navigation";
import {
  Building2,
  Globe,
  Shield,
  TrendingUp,
  Users,
  BarChart3,
  Lock,
  Smartphone,
  Clock,
  Target,
  FileText,
  Headphones,
  Database,
  Cloud,
  Settings,
  LineChart,
  Rocket,
  Crown,
  Palette,
  Code2,
} from "lucide-react";
import BaseServiceLayout from "@/components/services/shared/BaseServiceLayout";
import FeaturesSection from "@/components/services/shared/FeaturesSection";
import StatsSection from "@/components/services/shared/StatsSection";
import BenefitsSection from "@/components/services/shared/BenefitsSection";
import WhySection from "@/components/services/shared/WhySection";
import ProcessSection from "@/components/services/shared/ProcessSection";
import CtaSection from "@/components/services/shared/CtaSection";

export default function BusinessPageContent() {
  const router = useRouter();
  const features = [
    {
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سیستم مدیریت محتوا (CMS)",
      description:
        "سیستم مدیریت محتوای پیشرفته که به تیم شما امکان می‌دهد بدون نیاز به دانش فنی، محتوای وبسایت را به‌روزرسانی کنند. این سیستم شامل مدیریت رسانه، نسخه‌بندی محتوا و قابلیت زمان‌بندی انتشار است. همچنین امکان تعریف سطوح دسترسی مختلف برای کاربران وجود دارد تا هر بخش توسط افراد مسئول مدیریت شود.",
      benefits: [
        "ویرایش آسان بدون کدنویسی",
        "مدیریت چندکاربره با سطوح دسترسی",
        "نسخه‌بندی و بازیابی محتوا",
        "زمان‌بندی انتشار مطالب",
      ],
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "پورتال کارمندان و مشتریان",
      description:
        "فضای اختصاصی برای کارمندان و مشتریان شما با قابلیت ورود امن. کارمندان می‌توانند به اسناد داخلی، اخبار شرکت و ابزارهای کاری دسترسی داشته باشند. مشتریان نیز می‌توانند سفارشات، فاکتورها و تیکت‌های پشتیبانی خود را مدیریت کنند. این پورتال با احراز هویت دو مرحله‌ای و رمزنگاری داده‌ها، امنیت بالایی را تضمین می‌کند.",
      benefits: [
        "دسترسی با احراز هویت دومرحله‌ای",
        "داشبورد شخصی‌سازی شده",
        "مدیریت اسناد و فایل‌ها",
        "سیستم تیکتینگ یکپارچه",
        "ارتباطات داخلی بهینه",
      ],
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "گزارشات و تحلیل داده",
      description:
        "داشبورد تحلیلی جامع که اطلاعات کلیدی عملکرد کسب‌وکار را در اختیار مدیران قرار می‌دهد. از آمار بازدیدکنندگان و رفتار کاربران گرفته تا گزارشات فروش و عملکرد تیم‌ها. با یکپارچه‌سازی Google Analytics و ابزارهای تحلیلی پیشرفته، تصمیم‌گیری بر اساس داده‌های واقعی انجام می‌شود.",
      benefits: [
        "گزارشات Real-time",
        "نمودارهای تعاملی و بصری",
        "Export در فرمت‌های مختلف",
        "تحلیل رفتار کاربران",
        "KPI Dashboard سفارشی",
      ],
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "چندزبانه و بین‌المللی",
      description:
        "وبسایت شرکتی شما با پشتیبانی از چندین زبان، آماده حضور در بازارهای جهانی است. سیستم مدیریت ترجمه، تشخیص خودکار زبان بر اساس موقعیت جغرافیایی، و بهینه‌سازی SEO برای هر زبان از ویژگی‌های این بخش است. همچنین امکان نمایش قیمت‌ها در ارزهای مختلف و سازگاری با قوانین GDPR وجود دارد.",
      benefits: [
        "پشتیبانی نامحدود از زبان‌ها",
        "SEO بهینه برای هر زبان",
        "تشخیص خودکار زبان کاربر",
        "مدیریت محتوای چندزبانه",
        "سازگاری با استانداردهای بین‌المللی",
      ],
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳۸٪",
      label: "افزایش نرخ تبدیل",
      description:
        "شرکت‌های دارای وبسایت حرفه‌ای و بهینه، نرخ تبدیل بازدیدکننده به مشتری را تا ۳۸٪ افزایش می‌دهند.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۸۵٪",
      label: "صرفه‌جویی در زمان",
      description:
        "اتوماسیون فرآیندها و CMS پیشرفته، زمان مدیریت محتوا و ارتباطات را تا ۸۵٪ کاهش می‌دهد.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳X",
      label: "افزایش اعتبار برند",
      description:
        "حضور حرفه‌ای آنلاین، اعتبار و اعتماد به برند شما را تا ۳ برابر افزایش می‌دهد.",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۹۹.۹٪",
      label: "آپتایم تضمینی",
      description:
        "با زیرساخت ابری و سیستم‌های پشتیبان، وبسایت شما همیشه در دسترس خواهد بود.",
    },
  ];

  const keyFeatures = [
    {
      icon: <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Company Profile",
      desc: "معرفی جامع شرکت، تیم و خدمات",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Database className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Product Catalog",
      desc: "کاتالوگ محصولات با جستجوی پیشرفته",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Headphones className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Support System",
      desc: "سیستم پشتیبانی و تیکتینگ ۲۴/۷",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "SEO Optimized",
      desc: "بهینه‌سازی کامل برای موتورهای جستجو",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <Lock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Enterprise Security",
      desc: "امنیت سطح سازمانی با SSL و WAF",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Cloud className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Cloud Infrastructure",
      desc: "زیرساخت ابری با مقیاس‌پذیری بالا",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <LineChart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analytics Dashboard",
      desc: "داشبورد تحلیلی با گزارشات جامع",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Settings className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "API Integration",
      desc: "یکپارچه‌سازی با سیستم‌های سازمانی",
      color: "from-teal-500 to-green-500",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Mobile Responsive",
      desc: "طراحی واکنش‌گرا برای همه دستگاه‌ها",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const whyBenefits = [
    {
      icon: <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "اعتبار و برندسازی قدرتمند",
      desc: "وبسایت حرفه‌ای اولین نقطه تماس مشتریان با برند شماست. طراحی مدرن و محتوای با کیفیت، اعتماد مشتریان را جلب کرده و شما را از رقبا متمایز می‌کند.",
    },
    {
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "رشد و توسعه کسب‌وکار",
      desc: "با ابزارهای تحلیلی و CRM یکپارچه، می‌توانید رفتار مشتریان را درک کرده، فرصت‌های جدید را شناسایی کنید و استراتژی‌های رشد را پیاده‌سازی نمایید.",
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "امنیت و حفاظت از داده‌ها",
      desc: "با پروتکل‌های امنیتی پیشرفته، SSL، و سیستم‌های پشتیبان‌گیری خودکار، اطلاعات شرکت و مشتریان شما در بالاترین سطح امنیتی محافظت می‌شود.",
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "دسترسی جهانی ۲۴/۷",
      desc: "وبسایت شما نماینده‌ای است که هیچ‌گاه خسته نمی‌شود. مشتریان از سراسر جهان در هر ساعتی می‌توانند به اطلاعات، محصولات و خدمات شما دسترسی داشته باشند.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analysis and planning",
      desc: "بررسی نیازها، اهداف کسب‌وکار و تحلیل رقبا",
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "02",
      title: "Designing UX/UI",
      desc: "طراحی رابط کاربری منحصر به فرد و کاربرپسند",
      icon: <Palette className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "03",
      title: "Development and programming",
      desc: "کدنویسی با آخرین تکنولوژی‌ها و استانداردها",
      icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "04",
      title: "Launch and support",
      desc: "استقرار، آموزش و پشتیبانی مستمر",
      icon: <Rocket className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <BaseServiceLayout
      title="وبسایت شرکتی حرفه‌ای"
      subtitle="طراحی و توسعه وبسایت شرکتی با سیستم مدیریت محتوای پیشرفته، امنیت سطح سازمانی و قابلیت‌های یکپارچه‌سازی با سیستم‌های کسب‌وکار شما"
      description=""
      primaryButtonText="شروع پروژه وبسایت شرکتی شما"
      secondaryButtonText="مشاهده امکانات"
      gradientColors="from-gray-900 via-blue-950 to-indigo-950"
      accentColor="from-blue-600 to-indigo-600"
      accentColorLight="blue-500"
      accentColorDark="blue-400"
      logoIcon={<Building2 className="w-4 h-4" />}
      logoText="Corporate Website Solutions"
      onPrimaryButtonClick={() =>
        router.push(
          `/register?title=${encodeURIComponent("شروع پروژه وبسایت شرکتی شما")}`
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
        accentColorLight="blue-500"
        accentColorDark="blue-400"
        sectionTitle="قابلیت‌های کلیدی وبسایت شرکتی"
        sectionSubtitle="با کلیک بر روی هر قابلیت، جزئیات و مزایای آن را مشاهده کنید"
        sectionId="key-features"
      />
      <StatsSection
        stats={stats}
        accentColorLight="blue-500"
        accentColorDark="blue-400"
        sectionTitle="تأثیر وبسایت شرکتی بر کسب‌وکار شما"
        sectionSubtitle="آمار و ارقامی که نشان‌دهنده قدرت حضور آنلاین حرفه‌ای است"
        sectionId="results"
        glance="Business Impact"
      />
      <BenefitsSection
        keyFeatures={keyFeatures}
        accentColorLight="blue-500"
        accentColorDark="blue-400"
        sectionTitle="امکانات جامع وبسایت شرکتی مدرن"
        sectionSubtitle="تمام ابزارهایی که برای حضور قدرتمند آنلاین نیاز دارید"
        sectionId="benefits"
        benefit="Comprehensive Features"
      />
      <WhySection
        benefits={whyBenefits}
        accentColor="from-blue-500 to-indigo-500"
        accentColorLight="blue-500"
        accentColorDark="blue-400"
        sectionTitle="چرا شرکت شما به وبسایت حرفه‌ای نیاز دارد؟"
        sectionSubtitle="در عصر دیجیتال، وبسایت شرکتی نماینده اصلی برند شما در فضای آنلاین است. یک وبسایت حرفه‌ای نه تنها اعتبار شما را افزایش می‌دهد، بلکه ابزاری قدرتمند برای رشد کسب‌وکار محسوب می‌شود."
        sectionId="why-corporate"
        why="Why Corporate Website"
      />
      <ProcessSection
        steps={processSteps}
        accentColor="from-blue-500 to-indigo-500"
        accentColorLight="blue-500"
        accentColorDark="blue-400"
        sectionTitle="فرآیند توسعه وبسایت شرکتی"
        sectionSubtitle="از ایده تا اجرا، مراحل ساخت وبسایت شرکتی شما"
        sectionId="process"
        process="Our Process"
      />
      <CtaSection
        accentColor="from-blue-900 to-indigo-900"
        accentColorLight="blue-500"
        accentColorDark="blue-400"
        sectionTitle="آماده‌اید تا شرکت خود را به سطح بعدی ببرید؟"
        sectionSubtitle="با وبسایت شرکتی حرفه‌ای، در دنیای دیجیتال حضوری قدرتمند داشته باشید"
        sectionId="cta"
        primaryButtonText="شروع پروژه وبسایت شرکتی شما"
        start="Get Started Today"
        onPrimaryButtonClick={() => {
          router.push(
            `/register?title=${encodeURIComponent(
              "شروع پروژه وبسایت شرکتی شما"
            )}`
          );
        }}
        onSecondaryButtonClick={() => {
          document
            .getElementById("footer")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </BaseServiceLayout>
  );
}
