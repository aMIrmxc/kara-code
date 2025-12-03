import { Metadata } from "next";

export const metadata: Metadata = {
  title: "توسعه اپلیکیشن سفارشی | ساخت برنامه‌های اختصاصی برای نیازهای شما",
  description:
    "با خدمات توسعه اپلیکیشن سفارشی، ایده‌های خود را به واقعیت تبدیل کنید. ما برنامه‌های موبایل و دسکتاپ متناسب با نیازهای منحصر به فرد کسب و کار شما طراحی و پیاده‌سازی می‌کنیم.",
};

("use client");

/*
  Safelist for Tailwind JIT compiler to prevent purging of dynamically generated classes.
  These classes are used across the shared components for the 'business' service page.

  - Accent colors for light/dark themes:
    bg-fuchsia-500/20 border-fuchsia-400/30 text-fuchsia-200 text-fuchsia-400
    hover:bg-fuchsia-500/10
    dark:bg-fuchsia-400/20 dark:border-fuchsia-500/30 dark:text-fuchsia-300

  - Gradient for CTA section:
    from-fuchsia-500/50 to-fuchsia-400/50
*/

import { useRouter } from "next/navigation";
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
import BaseServiceLayout from "@/components/services/shared/BaseServiceLayout";
import FeaturesSection from "@/components/services/shared/FeaturesSection";
import StatsSection from "@/components/services/shared/StatsSection";
import BenefitsSection from "@/components/services/shared/BenefitsSection";
import WhySection from "@/components/services/shared/WhySection";
import ProcessSection from "@/components/services/shared/ProcessSection";
import CtaSection from "@/components/services/shared/CtaSection";

export default function CustomWebAppPage() {
  const router = useRouter();
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
        "با استفاده از زیرساخت ابری مدرن و معماری Redundant، دسترسی دائمی به وبسایت شما تضمین می‌شود.",
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

  const whyBenefits = [
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
  ];

  const processSteps = [
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
  ];

  return (
    <BaseServiceLayout
      title="وب اپلیکیشن سفارشی"
      subtitle="یک اپلیکیشن وب اختصاصی با طراحی دلخواه شما و قابلیت‌های کاملاً منعطف برای رشد کسب‌وکارتان"
      primaryButtonText="شروع ساخت وب اپلیکشیشن سفارشی شما"
      secondaryButtonText="مشاهده قابلیت‌ها"
      gradientColors="from-gray-900 via-fuchsia-950 to-violet-950"
      accentColor="from-fuchsia-600 to-violet-600"
      accentColorLight="fuchsia-500"
      accentColorDark="fuchsia-400"
      logoIcon={<Code2 className="w-4 h-4" />}
      logoText="Custom Web Application Development"
      onPrimaryButtonClick={() =>
        router.push(
          `/register?title=${encodeURIComponent(
            "شروع ساخت وب اپلیکشیشن سفارشی شما"
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
        accentColorLight="fuchsia-500"
        accentColorDark="fuchsia-400"
        sectionTitle="ویژگی‌های اصلی اپلیکیشن سفارشی"
        sectionSubtitle="هر ویژگی با دقت طراحی شده تا نیازهای خاص کسب‌وکار شما را برآورده کند"
        sectionId="key-features"
      />
      <StatsSection
        stats={stats}
        accentColorLight="fuchsia-500"
        accentColorDark="fuchsia-400"
        sectionTitle="نتایج قابل اندازه‌گیری و تضمین شده"
        sectionSubtitle="آمار و ارقامی که نشان‌دهنده قدرت اپلیکیشن‌های سفارشی است"
        sectionId="results"
        glance="Performance Metrics"
      />
      <BenefitsSection
        keyFeatures={keyFeatures}
        accentColorLight="fuchsia-500"
        accentColorDark="fuchsia-400"
        sectionTitle="قابلیت‌های فنی پیشرفته"
        sectionSubtitle="تکنولوژی‌های روز دنیا در خدمت کسب‌وکار شما"
        sectionId="benefits"
        benefit="Technical Features"
      />
      <WhySection
        benefits={whyBenefits}
        accentColor="from-fuchsia-500 to-violet-500"
        accentColorLight="fuchsia-500"
        accentColorDark="fuchsia-400"
        sectionTitle="چرا توسعه سفارشی بهترین انتخاب است؟"
        sectionSubtitle="برخلاف قالب‌های آماده، اپلیکیشن سفارشی دقیقاً مطابق نیازهای شما طراحی می‌شود و با رشد کسب‌وکارتان توسعه می‌یابد"
        sectionId="why-custom-app"
        why="Why Custom Development"
      />
      <ProcessSection
        steps={processSteps}
        accentColor="from-fuchsia-500 to-violet-500"
        accentColorLight="fuchsia-500"
        accentColorDark="fuchsia-400"
        sectionTitle="فرآیند توسعه Agile"
        sectionSubtitle="با متدولوژی Agile، پروژه شما در Sprint های کوتاه و با بازخورد مستمر پیش می‌رود"
        sectionId="process"
        process="Development Process"
      />
      <CtaSection
        accentColor="from-fuchsia-900/50 to-violet-900/50"
        accentColorLight="fuchsia-500"
        accentColorDark="fuchsia-400"
        sectionTitle="آماده ساخت اپلیکیشن رویایی خود هستید؟"
        sectionSubtitle="از ایده تا اجرا، ما در کنار شما هستیم تا بهترین راه‌حل را برای کسب‌وکارتان بسازیم"
        sectionId="cta"
        primaryButtonText="شروع ساخت وب اپلیکشیشن سفارشی شما"
        start="Start Your Project"
        onPrimaryButtonClick={() => {
          router.push(
            `/register?title=${encodeURIComponent(
              "شروع ساخت وب اپلیکشیشن سفارشی شما"
            )}`
          );
        }}
      />
    </BaseServiceLayout>
  );
}
