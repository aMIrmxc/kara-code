"use client"

/*
  Safelist for Tailwind JIT compiler to prevent purging of dynamically generated classes.
  These classes are used across the shared components for the 'business' service page.

  - Accent colors for light/dark themes:
    bg-teal-500/20 border-teal-400/30 text-teal-200 text-teal-400
    hover:bg-teal-500/10
    dark:bg-teal-400/20 dark:border-teal-500/30 dark:text-teal-300

  - Gradient for CTA section:
    from-teal-500/50 to-teal-400/50
*/

import { useRouter } from "next/navigation";
import {
  Home,
  Search,
  MapPin,
  Calendar,
  Star,
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
  Key,
  Calculator,
  FileText,
  Clock,
  Map,
  Eye,
  Building2,
} from "lucide-react";
import BaseServiceLayout from "@/components/services/shared/BaseServiceLayout";
import FeaturesSection from "@/components/services/shared/FeaturesSection";
import StatsSection from "@/components/services/shared/StatsSection";
import BenefitsSection from "@/components/services/shared/BenefitsSection";
import WhySection from "@/components/services/shared/WhySection";
import ProcessSection from "@/components/services/shared/ProcessSection";
import CtaSection from "@/components/services/shared/CtaSection";

export default function RealEstatePlatformPageContent() {
  const router = useRouter();
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

  const whyBenefits = [
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
  ];

  const processSteps = [
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
  ];

  return (
    <BaseServiceLayout
      title="پلتفرم جامع املاک و مستغلات"
      subtitle="سفارش پلتفرم حرفه‌ای املاک با قابلیت جستجوی پیشرفته، تور مجازی 360 درجه، نقشه تعاملی و ابزارهای هوشمند خرید و فروش ملک"
      description=""
      primaryButtonText="شروع پروژه پلتفرم املاک شما"
      secondaryButtonText="مشاهده قابلیت‌ها"
      gradientColors="from-gray-900 via-teal-950 to-cyan-950"
      accentColor="from-teal-600 to-cyan-600"
      accentColorLight="teal-500"
      accentColorDark="teal-400"
      logoIcon={<Home className="w-4 h-4" />}
      logoText="Real Estate Platform Solutions"
      onPrimaryButtonClick={() =>
        router.push(
          `/register?title=${encodeURIComponent("شروع پروژه پلتفرم املاک شما")}`
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
        accentColorLight="teal-500"
        accentColorDark="teal-400"
        sectionTitle="قابلیت‌های کلیدی پلتفرم املاک"
        sectionSubtitle="ابزارهای قدرتمند برای تجربه‌ای متفاوت در خرید و فروش ملک"
        sectionId="key-features"
      />
      <StatsSection
        stats={stats}
        accentColorLight="teal-500"
        accentColorDark="teal-400"
        sectionTitle="تأثیر پلتفرم دیجیتال بر کسب‌وکار املاک"
        sectionSubtitle="آمار و ارقامی که قدرت یک پلتفرم حرفه‌ای را نشان می‌دهند"
        sectionId="results"
        glance="Platform Impact"
      />
      <BenefitsSection
        keyFeatures={keyFeatures}
        accentColorLight="teal-500"
        accentColorDark="teal-400"
        sectionTitle="امکانات جامع پلتفرم املاک مدرن"
        sectionSubtitle="مجموعه کاملی از ابزارها برای تسهیل فرآیند خرید، فروش و اجاره املاک"
        sectionId="benefits"
        benefit="Platform Features"
      />
      <WhySection
        benefits={whyBenefits}
        accentColor="from-teal-500 to-cyan-500"
        accentColorLight="teal-500"
        accentColorDark="teal-400"
        sectionTitle="چرا کسب‌وکار املاک شما به پلتفرم دیجیتال نیاز دارد؟"
        sectionSubtitle="در عصر دیجیتال، داشتن یک پلتفرم آنلاین حرفه‌ای دیگر یک انتخاب نیست، بلکه یک ضرورت است. از جذب مشتریان جدید تا بهینه‌سازی فرآیندها، مزایای دیجیتالی شدن بی‌پایان است."
        sectionId="why-real-estate"
        why="Why Digital Platform"
      />
      <ProcessSection
        steps={processSteps}
        accentColor="from-teal-500 to-cyan-500"
        accentColorLight="teal-500"
        accentColorDark="teal-400"
        sectionTitle="مراحل ساخت پلتفرم املاک شما"
        sectionSubtitle="فرآیندی شفاف و حرفه‌ای برای تحویل پلتفرمی قدرتمند"
        sectionId="process"
        process="Development Process"
      />
      <CtaSection
        accentColor="from-teal-900 to-cyan-900"
        accentColorLight="teal-500"
        accentColorDark="teal-400"
        sectionTitle="آماده‌اید تا کسب‌وکار املاک خود را دیجیتال کنید؟"
        sectionSubtitle="با پلتفرم حرفه‌ای املاک، تجربه‌ای نوین برای مشتریان خود خلق کنید"
        sectionId="cta"
        primaryButtonText="شروع ساخت پلتفرم املاک"
        start="Start Your Project"
        onPrimaryButtonClick={() => {
          router.push(
            `/register?title=${encodeURIComponent("شروع ساخت پلتفرم املاک")}`
          );
        }}
      />
    </BaseServiceLayout>
  );
}
