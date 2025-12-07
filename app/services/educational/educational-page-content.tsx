"use client";

/*
  Safelist for Tailwind JIT compiler to prevent purging of dynamically generated classes.
  These classes are used across the shared components for the 'business' service page.

  - Accent colors for light/dark themes:
    bg-amber-500/20 border-amber-400/30 text-amber-200 text-amber-400
    hover:bg-amber-500/10
    dark:bg-amber-400/20 dark:border-amber-500/30 dark:text-amber-300

  - Gradient for CTA section:
    from-amber-500/50 to-amber-400/50
*/

import { useRouter } from "next/navigation";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Star,
  Smartphone,
  Globe,
  TrendingUp,
  MessageSquare,
  Calendar,
  ChartBar,
  Clock,
  Video,
  FileText,
  BarChart3,
  Shield,
  Zap,
  Check,
  ArrowRight,
  Phone,
  Mail,
  Monitor,
  Brain,
  Trophy,
  Target,
  Laptop,
  Headphones,
  PenTool,
  Library,
  CreditCard,
  UserCheck,
  PlayCircle,
  Download,
} from "lucide-react";
import BaseServiceLayout from "@/components/services/shared/BaseServiceLayout";
import FeaturesSection from "@/components/services/shared/FeaturesSection";
import StatsSection from "@/components/services/shared/StatsSection";
import BenefitsSection from "@/components/services/shared/BenefitsSection";
import WhySection from "@/components/services/shared/WhySection";
import ProcessSection from "@/components/services/shared/ProcessSection";
import CtaSection from "@/components/services/shared/CtaSection";

export default function EducationalPageContent() {
  const router = useRouter();
  const features = [
    {
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سیستم مدیریت دوره‌ها",
      description:
        "سیستم جامع مدیریت دوره‌های آموزشی که به مدرسان امکان ایجاد، ویرایش و انتشار محتوای آموزشی را می‌دهد. با قابلیت آپلود ویدیو، فایل‌های PDF، ارائه‌ها و منابع تکمیلی. دانش‌آموزان می‌توانند به راحتی در دوره‌ها ثبت‌نام کنند، پیشرفت خود را دنبال کنند و با محتوای تعاملی درگیر شوند. سیستم به صورت خودکار پیشرفت را ذخیره و گزارش‌های عملکردی تولید می‌کند.",
      benefits: [
        "آپلود نامحدود محتوا",
        "پشتیبانی از انواع فرمت‌ها",
        "دسته‌بندی هوشمند دوره‌ها",
        "مسیرهای یادگیری شخصی‌سازی شده",
      ],
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "کلاس‌های آنلاین زنده",
      description:
        "پلتفرم ویدیو کنفرانس یکپارچه برای برگزاری کلاس‌های زنده با کیفیت HD. امکانات شامل اشتراک‌گذاری صفحه، تخته سفید دیجیتال، چت زنده، امکان ضبط جلسات، breakout rooms برای کار گروهی، و سیستم حضور و غیاب خودکار. مدرسان می‌توانند کوییز‌های زنده برگزار کنند و بازخورد فوری دریافت نمایند. تمام جلسات به صورت خودکار ضبط و در پروفایل دانش‌آموز ذخیره می‌شود.",
      benefits: [
        "کیفیت HD و پایداری بالا",
        "ضبط خودکار جلسات",
        "ابزارهای تعاملی پیشرفته",
        "یکپارچگی با تقویم",
        "پشتیبانی از 500+ شرکت‌کننده",
      ],
    },
    {
      icon: <Trophy className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "سیستم ارزیابی و گواهینامه",
      description:
        "سیستم ارزیابی هوشمند با انواع آزمون‌ها شامل چندگزینه‌ای، تشریحی، پروژه محور و ارزیابی عملی. بانک سوال با دسته‌بندی بر اساس سطح دشواری، تصحیح خودکار، گزارش‌های تحلیلی عملکرد، و صدور گواهینامه‌های دیجیتال با QR code قابل تأیید. امکان تعیین حد نصاب قبولی، تعداد دفعات مجاز آزمون، و زمان‌بندی انعطاف‌پذیر وجود دارد.",
      benefits: [
        "گواهینامه‌های blockchain",
        "تصحیح خودکار آزمون‌ها",
        "گزارش‌های تحلیلی جامع",
        "سیستم ضد تقلب پیشرفته",
      ],
    },
    {
      icon: <ChartBar className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "داشبورد تحلیلی",
      description:
        "داشبورد مدیریتی قدرتمند با نمایش real-time آمار و اطلاعات. شامل گزارش‌های فروش دوره‌ها، نرخ تکمیل، میانگین نمرات، نقشه حرارتی فعالیت کاربران، پیش‌بینی ریزش دانش‌آموزان با هوش مصنوعی، و توصیه‌های بهبود عملکرد. مدیران می‌توانند ROI هر دوره را محاسبه کنند و تصمیمات داده‌محور اتخاذ نمایند.",
      benefits: [
        "گزارش‌های real-time",
        "پیش‌بینی با AI",
        "صادرات داده‌ها",
        "داشبوردهای شخصی‌سازی شده",
        "هشدارهای هوشمند",
      ],
    },
  ];

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۸۵٪",
      label: "افزایش نرخ یادگیری",
      description:
        "پلتفرم‌های آموزشی تعاملی با محتوای چندرسانه‌ای و گیمیفیکیشن، نرخ یادگیری را تا ۸۵٪ نسبت به روش‌های سنتی افزایش می‌دهند.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۷۰٪",
      label: "کاهش هزینه آموزش",
      description:
        "با حذف هزینه‌های فضای فیزیکی، رفت‌وآمد و چاپ منابع، هزینه‌های آموزشی تا ۷۰٪ کاهش می‌یابد.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳x",
      label: "افزایش دسترسی",
      description:
        "پلتفرم آنلاین امکان دسترسی به ۳ برابر دانش‌آموزان بیشتر را فراهم می‌کند، بدون محدودیت جغرافیایی.",
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۹۲٪",
      label: "رضایت کاربران",
      description:
        "۹۲٪ از دانش‌آموزان از انعطاف‌پذیری و کیفیت یادگیری در پلتفرم‌های مدرن رضایت کامل دارند.",
    },
  ];

  const keyFeatures = [
    {
      icon: <Video className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Video Streaming",
      desc: "پخش ویدیو با کیفیت HD و سرعت بالا",
      color: "from-amber-600 to-yellow-500",
    },
    {
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "AI Learning Path",
      desc: "مسیر یادگیری شخصی‌سازی شده با هوش مصنوعی",
      color: "from-yellow-600 to-amber-500",
    },
    {
      icon: <Headphones className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "24/7 Support",
      desc: "پشتیبانی آنلاین در تمام ساعات",
      color: "from-amber-700 to-orange-500",
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Secure Platform",
      desc: "امنیت بالا و حفاظت از داده‌های کاربران",
      color: "from-orange-600 to-amber-600",
    },
    {
      icon: <Smartphone className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Mobile Learning",
      desc: "اپلیکیشن موبایل iOS و Android",
      color: "from-yellow-700 to-amber-600",
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Multi-language",
      desc: "پشتیبانی از چندین زبان",
      color: "from-amber-600 to-yellow-600",
    },
    {
      icon: <FileText className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Rich Content",
      desc: "محتوای متنوع: ویدیو، PDF، کوییز",
      color: "from-yellow-600 to-orange-500",
    },
    {
      icon: <UserCheck className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Student Tracking",
      desc: "پیگیری پیشرفت دانش‌آموزان",
      color: "from-orange-600 to-yellow-600",
    },
    {
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Payment Gateway",
      desc: "درگاه پرداخت امن و متنوع",
      color: "from-amber-700 to-yellow-600",
    },
  ];

  const whyBenefits = [
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "دسترسی جهانی",
      desc: "با حذف محدودیت‌های جغرافیایی، به دانش‌آموزان سراسر دنیا آموزش دهید و بازار هدف خود را به صورت نامحدود گسترش دهید.",
    },
    {
      icon: <Target className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "یادگیری شخصی‌سازی شده",
      desc: "با استفاده از هوش مصنوعی و تحلیل داده، مسیر یادگیری منحصر به فرد برای هر دانش‌آموز ایجاد کنید و نتایج بهتری کسب نمایید.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "مقیاس‌پذیری بی‌نهایت",
      desc: "بدون نیاز به افزایش فضا یا منابع فیزیکی، به هزاران دانش‌آموز همزمان خدمات ارائه دهید و درآمد خود را چند برابر کنید.",
    },
    {
      icon: <Monitor className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "محتوای تعاملی و جذاب",
      desc: "با ترکیب ویدیو، انیمیشن، گیمیفیکیشن و محتوای تعاملی، تجربه یادگیری را جذاب‌تر و موثرتر از همیشه کنید.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery",
      desc: "تحلیل نیازها و اهداف آموزشی شما",
      icon: <PenTool className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "02",
      title: "Design",
      desc: "طراحی UX/UI منحصر به فرد و کاربرپسند",
      icon: <Laptop className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "03",
      title: "Development",
      desc: "توسعه با جدیدترین فناوری‌ها",
      icon: <Library className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "04",
      title: "Launch & Support",
      desc: "راه‌اندازی و پشتیبانی مستمر",
      icon: <Trophy className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <BaseServiceLayout
      title="پلتفرم آموزشی هوشمند"
      subtitle="طراحی و توسعه پلتفرم آموزش آنلاین حرفه‌ای با سیستم مدیریت دوره‌ها، کلاس‌های زنده، ارزیابی هوشمند و صدور گواهینامه دیجیتال"
      description=""
      primaryButtonText="شروع ساخت پلتفرم آموزشی شما"
      secondaryButtonText="مشاهده امکانات"
      gradientColors="from-gray-900 via-amber-950 to-yellow-950"
      accentColor="from-amber-600 to-yellow-600"
      accentColorLight="amber-500"
      accentColorDark="amber-400"
      logoIcon={<GraduationCap className="w-4 h-4" />}
      logoText="Educational Platform Solutions"
      onPrimaryButtonClick={() =>
        router.push(`/consulting#consultation-form`)
      }
      onSecondaryButtonClick={() =>
        document
          .getElementById("key-features")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <FeaturesSection
        features={features}
        accentColorLight="amber-500"
        accentColorDark="amber-400"
        sectionTitle="امکانات اصلی پلتفرم آموزشی"
        sectionSubtitle="با کلیک بر روی هر قابلیت، جزئیات کامل آن را مشاهده کنید"
        sectionId="key-features"
      />
      <StatsSection
        stats={stats}
        accentColorLight="amber-500"
        accentColorDark="amber-400"
        sectionTitle="تأثیر پلتفرم آموزشی بر رشد موسسه شما"
        sectionSubtitle="آمار و ارقام واقعی از تحول دیجیتال در آموزش"
        sectionId="results"
        glance="Impact & Results"
      />
      <BenefitsSection
        keyFeatures={keyFeatures}
        accentColorLight="amber-500"
        accentColorDark="amber-400"
        sectionTitle="ویژگی‌های کلیدی پلتفرم آموزشی مدرن"
        sectionSubtitle="تمام ابزارهایی که برای ارائه تجربه آموزشی استثنایی نیاز دارید"
        sectionId="benefits"
        benefit="Platform Features"
      />
      <WhySection
        benefits={whyBenefits}
        accentColor="from-amber-500 to-yellow-500"
        accentColorLight="amber-500"
        accentColorDark="amber-400"
        sectionTitle="چرا موسسه شما به پلتفرم آموزشی آنلاین نیاز دارد؟"
        sectionSubtitle="در عصر دیجیتال، آموزش آنلاین نه یک انتخاب بلکه یک ضرورت است. پلتفرم آموزشی مدرن، کلید موفقیت و رشد پایدار موسسه شماست."
        sectionId="why-educational"
        why="Why Online Education"
      />
      <ProcessSection
        steps={processSteps}
        accentColor="from-amber-500 to-yellow-500"
        accentColorLight="amber-500"
        accentColorDark="amber-400"
        sectionTitle="مراحل توسعه پلتفرم آموزشی شما"
        sectionSubtitle="در ۴ مرحله ساده و شفاف، پلتفرم آموزشی حرفه‌ای خود را راه‌اندازی کنید"
        sectionId="process"
        process="Development Process"
      />
      <CtaSection
        accentColor="from-amber-900 to-yellow-900"
        accentColorLight="amber-500"
        accentColorDark="amber-400"
        sectionTitle="آماده تحول دیجیتال در آموزش هستید؟"
        sectionSubtitle="با پلتفرم آموزشی حرفه‌ای، آینده آموزش را از امروز بسازید"
        sectionId="cta"
        primaryButtonText="شروع ساخت پلتفرم آموزشی شما"
        start="Start Your Journey"
        onPrimaryButtonClick={() => {
          router.push(`/consulting#consultation-form`)
        }}
      />
    </BaseServiceLayout>
  );
}
