"use client";


/*
  Safelist for Tailwind JIT compiler to prevent purging of dynamically generated classes.
  These classes are used across the shared components for the 'business' service page.

  - Accent colors for light/dark themes:
    bg-red-500/20 border-red-400/30 text-red-200 text-red-400
    hover:bg-red-500/10
    dark:bg-red-400/20 dark:border-red-500/30 dark:text-red-300

  - Gradient for CTA section:
    from-red-500/50 to-red-400/50
*/

import { useRouter } from "next/navigation";
import {
  Newspaper,
  Clock,
  Globe,
  TrendingUp,
  Users,
  MessageSquare,
  Award,
  MapPin,
  Zap,
  Shield,
  BarChart3,
  Camera,
  Video,
  Radio,
  Rss,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Bell,
  FileText,
  Tv,
  Wifi,
  Search,
  Share2,
  Archive,
  AlertCircle,
  Bookmark,
  Eye,
  Edit3,
  Mic,
  PenTool,
  Database,
  Lock,
  Smartphone,
  Monitor,
  HeadphonesIcon,
} from "lucide-react";
import BaseServiceLayout from "@/components/services/shared/BaseServiceLayout";
import FeaturesSection from "@/components/services/shared/FeaturesSection";
import StatsSection from "@/components/services/shared/StatsSection";
import BenefitsSection from "@/components/services/shared/BenefitsSection";
import WhySection from "@/components/services/shared/WhySection";
import ProcessSection from "@/components/services/shared/ProcessSection";
import CtaSection from "@/components/services/shared/CtaSection";

export default function NewsAgencyWebsitePage() {
  const router = useRouter();
  const features = [
    {
      icon: <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سیستم اخبار فوری",
      description:
        "سیستم پیشرفته انتشار اخبار فوری و عاجل که امکان انتشار لحظه‌ای رویدادها را فراهم می‌کند. با قابلیت نوتیفیکیشن فوری برای کاربران، برچسب‌گذاری اخبار مهم، و نمایش در بخش ویژه صفحه اصلی. این سیستم به شما امکان می‌دهد در کمترین زمان ممکن، اخبار مهم را به اطلاع مخاطبان برسانید و همواره جلوتر از رقبا باشید.",
      benefits: [
        "انتشار در کمتر از ۳۰ ثانیه",
        "اعلان‌های فوری موبایل",
        "پوشش زنده رویدادها",
        "آرشیو جامع اخبار فوری",
      ],
    },
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "محتوای چندرسانه‌ای",
      description:
        "پلتفرم جامع برای مدیریت و نمایش انواع محتوای چندرسانه‌ای شامل ویدیو، پادکست، گالری تصاویر و اینفوگرافیک. با پخش‌کننده ویدیوی اختصاصی، قابلیت پخش زنده، گالری‌های تعاملی و بهینه‌سازی خودکار برای سرعت بارگذاری. همچنین امکان تعامل کاربران با محتوا از طریق نظرات، لایک و اشتراک‌گذاری در شبکه‌های اجتماعی فراهم است.",
      benefits: [
        "پخش زنده رویدادها",
        "گالری‌های تعاملی",
        "پادکست و صوت",
        "اینفوگرافیک متحرک",
        "بهینه‌سازی خودکار تصاویر",
      ],
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "پوشش جهانی اخبار",
      description:
        "سیستم دسته‌بندی پیشرفته برای پوشش اخبار محلی، ملی و بین‌المللی با امکان فیلتر بر اساس موقعیت جغرافیایی. قابلیت نمایش اخبار بر روی نقشه تعاملی، پشتیبانی از چند زبان، و همگام‌سازی با آژانس‌های خبری بین‌المللی. کاربران می‌توانند اخبار مورد علاقه خود را بر اساس منطقه جغرافیایی دنبال کنند.",
      benefits: [
        "نقشه تعاملی اخبار",
        "پشتیبانی چندزبانه",
        "فیلتر جغرافیایی",
        "همگام‌سازی با آژانس‌های جهانی",
        "اخبار محلی سفارشی‌سازی شده",
      ],
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "پنل خبرنگاران",
      description:
        "پنل اختصاصی برای خبرنگاران و نویسندگان با امکان ارسال مستقیم مطالب، ویرایش آنلاین، و مدیریت محتوا. سیستم گردش کار حرفه‌ای برای بررسی و تأیید مطالب، آمار بازدید و تعامل، و ابزارهای ویرایش پیشرفته. خبرنگاران می‌توانند از هر نقطه‌ای گزارش‌های خود را ارسال کنند.",
      benefits: [
        "ارسال مستقیم از موبایل",
        "ویرایشگر پیشرفته",
        "آمار دقیق عملکرد",
        "سیستم امتیازدهی",
        "گردش کار تأیید محتوا",
      ],
    },
  ];

  const stats = [
    {
      icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳x",
      label: "افزایش بازدید",
      description:
        "خبرگزاری‌های دارای وبسایت مدرن و بهینه، تا ۳ برابر بازدید بیشتری نسبت به رقبای سنتی دریافت می‌کنند.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۶۰ ثانیه",
      label: "سرعت انتشار",
      description:
        "از دریافت خبر تا انتشار در وبسایت، کمتر از یک دقیقه زمان نیاز است که سرعت رقابتی چشمگیری ایجاد می‌کند.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۸۵٪",
      label: "تعامل کاربران",
      description:
        "با قابلیت‌های تعاملی مدرن، میزان مشارکت و تعامل کاربران تا ۸۵٪ افزایش می‌یابد.",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۷۰٪",
      label: "بازدید موبایل",
      description:
        "بیش از ۷۰٪ مخاطبان اخبار را از طریق موبایل دنبال می‌کنند؛ طراحی ریسپانسیو ضروری است.",
    },
  ];

  const keyFeatures = [
    {
      icon: <AlertCircle className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Breaking News",
      desc: "سیستم اخبار فوری با نوتیفیکیشن",
      color: "from-red-700 to-red-500",
    },
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Live Streaming",
      desc: "پخش زنده رویدادها و گزارش‌ها",
      color: "from-red-600 to-red-400",
    },
    {
      icon: <Archive className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "News Archive",
      desc: "آرشیو جامع و قابل جستجو",
      color: "from-red-700 to-pink-600",
    },
    {
      icon: <Rss className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "RSS Feed",
      desc: "خوراک RSS برای دنبال‌کنندگان",
      color: "from-red-600 to-orange-500",
    },
    {
      icon: <Search className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Advanced Search",
      desc: "جستجوی پیشرفته در محتوا",
      color: "from-red-500 to-red-400",
    },
    {
      icon: <Share2 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Social Sharing",
      desc: "اشتراک‌گذاری در شبکه‌های اجتماعی",
      color: "from-red-700 to-red-600",
    },
    {
      icon: <Edit3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "CMS System",
      desc: "سیستم مدیریت محتوای قدرتمند",
      color: "from-red-600 to-pink-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analytics",
      desc: "آنالیز دقیق رفتار مخاطبان",
      color: "from-red-500 to-orange-400",
    },
    {
      icon: <Bell className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Push Alerts",
      desc: "اعلان‌های فوری برای کاربران",
      color: "from-red-700 to-red-500",
    },
  ];

  const whyBenefits = [
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "رشد مخاطب و تعامل",
      desc: "با پلتفرم تعاملی و محتوای چندرسانه‌ای، مخاطبان بیشتری جذب کنید و زمان حضور آن‌ها در سایت را تا ۳ برابر افزایش دهید.",
    },
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "سرعت بی‌نظیر در انتشار",
      desc: "با سیستم مدیریت محتوای پیشرفته، اخبار را در کمتر از ۶۰ ثانیه منتشر کنید و همیشه جلوتر از رقبا باشید.",
    },
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "دسترسی جهانی",
      desc: "با پشتیبانی چندزبانه و بهینه‌سازی برای موتورهای جستجو، اخبار شما به مخاطبان سراسر جهان می‌رسد.",
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "اعتبار و حرفه‌ای‌گری",
      desc: "پلتفرم مدرن و امن، اعتماد مخاطبان را جلب کرده و شما را به‌عنوان یک منبع خبری معتبر معرفی می‌کند.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Analysis",
      desc: "تحلیل نیازها و بازار هدف خبرگزاری",
      icon: <Search className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "02",
      title: "Design",
      desc: "طراحی رابط کاربری و تجربه کاربری",
      icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "03",
      title: "Development",
      desc: "توسعه با تکنولوژی‌های روز",
      icon: <Database className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "04",
      title: "Launch",
      desc: "راه‌اندازی و آموزش تیم خبری",
      icon: <Wifi className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <BaseServiceLayout
      title="وبسایت خبرگزاری مدرن"
      subtitle="راه‌اندازی خبرگزاری آنلاین حرفه‌ای با قابلیت انتشار اخبار فوری، محتوای چندرسانه‌ای، پخش زنده و سیستم مدیریت محتوای پیشرفته"
      description=""
      primaryButtonText="شروع پروژه خبرگزاری آنلاین شما"
      secondaryButtonText="مشاهده قابلیت‌ها"
      gradientColors="from-gray-900 via-red-950 to-red-900"
      accentColor="from-red-600 to-red-400"
      accentColorLight="red-500"
      accentColorDark="red-400"
      logoIcon={<Newspaper className="w-4 h-4" />}
      logoText="News Agency Website Solutions"
      onPrimaryButtonClick={() =>
        router.push(
          `/register?title=${encodeURIComponent(
            "شروع پروژه خبرگزاری آنلاین شما",
          )}`,
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
        accentColorLight="red-500"
        accentColorDark="red-400"
        sectionTitle="قابلیت‌های کلیدی پلتفرم خبری"
        sectionSubtitle="با کلیک بر روی هر قابلیت، جزئیات و مزایای آن را مشاهده کنید"
        sectionId="key-features"
      />
      <StatsSection
        stats={stats}
        accentColorLight="red-500"
        accentColorDark="red-400"
        sectionTitle="تأثیر پلتفرم خبری مدرن بر مخاطبان"
        sectionSubtitle="آمار و ارقامی که قدرت یک خبرگزاری آنلاین حرفه‌ای را نشان می‌دهد"
        sectionId="results"
        glance="Results & Impact"
      />
      <BenefitsSection
        keyFeatures={keyFeatures}
        accentColorLight="red-500"
        accentColorDark="red-400"
        sectionTitle="امکانات جامع پلتفرم خبرگزاری"
        sectionSubtitle="تمام ابزارهایی که برای راه‌اندازی و مدیریت یک خبرگزاری حرفه‌ای نیاز دارید"
        sectionId="benefits"
        benefit="Platform Features"
      />
      <WhySection
        benefits={whyBenefits}
        accentColor="from-red-700 to-red-500"
        accentColorLight="red-500"
        accentColorDark="red-400"
        sectionTitle="چرا خبرگزاری شما به پلتفرم دیجیتال مدرن نیاز دارد؟"
        sectionSubtitle="در عصر دیجیتال، سرعت و کیفیت انتشار اخبار تعیین‌کننده موفقیت است. پلتفرم مدرن به شما قدرت رقابت در بازار رسانه را می‌دهد."
        sectionId="why-news-agency"
        why="Why Modern News Platform"
      />
      <ProcessSection
        steps={processSteps}
        accentColor="from-red-700 to-red-500"
        accentColorLight="red-500"
        accentColorDark="red-400"
        sectionTitle="مراحل راه‌اندازی خبرگزاری آنلاین"
        sectionSubtitle="در ۴ مرحله ساده پلتفرم خبری حرفه‌ای خود را راه‌اندازی کنید"
        sectionId="process"
        process="Our Process"
      />
      <CtaSection
        accentColor="from-red-900 to-red-800"
        accentColorLight="red-500"
        accentColorDark="red-400"
        sectionTitle="آماده راه‌اندازی خبرگزاری دیجیتال خود هستید؟"
        sectionSubtitle="با پلتفرم خبری مدرن، صدای خود را به میلیون‌ها مخاطب برسانید"
        sectionId="cta"
        primaryButtonText="شروع پروژه خبرگزاری آنلاین شما"
        start="Get Started Today"
        onPrimaryButtonClick={() => {
          router.push(
            `/register?title=${encodeURIComponent(
              "شروع پروژه خبرگزاری آنلاین شما",
            )}`,
          );
        }}
      />
    </BaseServiceLayout>
  );
}
