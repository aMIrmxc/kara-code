"use client";

/*
  Safelist for Tailwind JIT compiler to prevent purging of dynamically generated classes.
  These classes are used across the shared components for the 'business' service page.

  - Accent colors for light/dark themes:
    bg-cyan-500/20 border-cyan-400/30 text-cyan-200 text-cyan-400
    hover:bg-cyan-500/10
    dark:bg-cyan-400/20 dark:border-cyan-500/30 dark:text-cyan-300

  - Gradient for CTA section:
    from-cyan-500/50 to-cyan-400/50
*/

import { useRouter } from "next/navigation";
import {
  Stethoscope,
  Clock,
  Calendar,
  Star,
  TrendingUp,
  Users,
  MessageSquare,
  Award,
  MapPin,
  CreditCard,
  Zap,
  Shield,
  BarChart3,
  FileText,
  Video,
  Pill,
  Activity,
  ShieldCheck,
  HeartHandshake,
  Brain,
  Microscope,
  ClipboardList,
  Database,
  UserCheck,
  Hospital,
} from "lucide-react";
import BaseServiceLayout from "@/components/services/shared/BaseServiceLayout";
import FeaturesSection from "@/components/services/shared/FeaturesSection";
import StatsSection from "@/components/services/shared/StatsSection";
import BenefitsSection from "@/components/services/shared/BenefitsSection";
import WhySection from "@/components/services/shared/WhySection";
import ProcessSection from "@/components/services/shared/ProcessSection";
import CtaSection from "@/components/services/shared/CtaSection";

export default function MedicalPageContent() {
  const router = useRouter();
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
      icon: <Video className="w-6 h-6 sm:w-8 sm-h-8" />,
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

  const whyBenefits = [
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
  ];

  const processSteps = [
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
  ];

  return (
    <BaseServiceLayout
      title="پورتال جامع سلامت و درمان"
      subtitle="سفارش پورتال بیماران با قابلیت رزرو نوبت آنلاین، مدیریت پرونده‌های پزشکی، ویزیت از راه دور و خدمات دیجیتال سلامت"
      description=""
      primaryButtonText="شروع پروژه پورتال سلامت شما"
      secondaryButtonText="مشاهده قابلیت‌ها"
      gradientColors="from-gray-900 via-cyan-950 to-teal-950"
      accentColor="from-cyan-600 to-teal-600"
      accentColorLight="cyan-500"
      accentColorDark="cyan-400"
      logoIcon={<Stethoscope className="w-4 h-4" />}
      logoText="Healthcare Portal Solutions"
      onPrimaryButtonClick={() =>
        router.push(
          `/register?title=${encodeURIComponent("شروع پروژه پورتال سلامت شما")}`
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
        accentColorLight="cyan-500"
        accentColorDark="cyan-400"
        sectionTitle="قابلیت‌های اصلی پورتال سلامت"
        sectionSubtitle="با کلیک بر روی هر قابلیت، جزئیات کامل و مزایای آن را مشاهده کنید"
        sectionId="key-features"
      />
      <StatsSection
        stats={stats}
        accentColorLight="cyan-500"
        accentColorDark="cyan-400"
        sectionTitle="تأثیر پورتال سلامت بر مرکز درمانی شما"
        sectionSubtitle="آمار و نتایج واقعی از مراکز درمانی که از پورتال سلامت استفاده می‌کنند"
        sectionId="results"
        glance="Impact & Results"
      />
      <BenefitsSection
        keyFeatures={keyFeatures}
        accentColorLight="cyan-500"
        accentColorDark="cyan-400"
        sectionTitle="امکانات کامل پورتال سلامت دیجیتال"
        sectionSubtitle="تمامی ابزارهای مورد نیاز برای دیجیتالی کردن خدمات درمانی شما"
        sectionId="benefits"
        benefit="Complete Features"
      />
      <WhySection
        benefits={whyBenefits}
        accentColor="from-cyan-500 to-teal-500"
        accentColorLight="cyan-500"
        accentColorDark="cyan-400"
        sectionTitle="چرا مرکز درمانی شما به پورتال دیجیتال نیاز دارد؟"
        sectionSubtitle="پورتال سلامت دیجیتال نه تنها تجربه بیماران را بهبود می‌بخشد، بلکه کارایی مرکز درمانی شما را به طور چشمگیری افزایش می‌دهد و هزینه‌های عملیاتی را کاهش می‌دهد."
        sectionId="why-healthcare"
        why="Why Healthcare Portal"
      />
      <ProcessSection
        steps={processSteps}
        accentColor="from-cyan-500 to-teal-500"
        accentColorLight="cyan-500"
        accentColorDark="cyan-400"
        sectionTitle="فرآیند پیاده‌سازی پورتال سلامت"
        sectionSubtitle="در ۴ مرحله ساده و منظم، پورتال سلامت مرکز درمانی شما را راه‌اندازی می‌کنیم"
        sectionId="process"
        process="Implementation Process"
      />
      <CtaSection
        accentColor="from-cyan-900 to-teal-900"
        accentColorLight="cyan-500"
        accentColorDark="cyan-400"
        sectionTitle="آماده دیجیتالی کردن خدمات درمانی خود هستید؟"
        sectionSubtitle="با پورتال سلامت حرفه‌ای، مرکز درمانی خود را به سطح جدیدی از کارایی و رضایت بیماران برسانید"
        sectionId="cta"
        primaryButtonText="شروع پروژه پورتال سلامت شما"
        start="Get Started Today"
        onPrimaryButtonClick={() => {
          router.push(
            `/register?title=${encodeURIComponent(
              "شروع پروژه پورتال سلامت شما"
            )}`
          );
        }}
      />
    </BaseServiceLayout>
  );
}
