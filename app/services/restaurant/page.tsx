import { Metadata } from "next";

export const metadata: Metadata = {
  title: "طراحی سایت رستوران | وب‌سایت برای رستوران‌ها، کافه‌ها و فست‌فود",
  description:
    "با طراحی سایت رستوران، منوی خود را آنلاین کرده و سفارش آنلاین دریافت کنید. ما وب‌سایت‌های جذاب با گالری تصاویر، منوی دیجیتال و سیستم رزرو آنلاین برای رستوران‌ها طراحی می‌کنیم.",
};
("use client");

/*
  Safelist for Tailwind JIT compiler to prevent purging of dynamically generated classes.
  These classes are used across the shared components for the 'business' service page.

  - Accent colors for light/dark themes:
    bg-orange-500/20 border-orange-400/30 text-orange-200 text-orange-400
    hover:bg-orange-500/10
    dark:bg-orange-400/20 dark:border-orange-500/30 dark:text-orange-300

  - Gradient for CTA section:
    from-orange-500/50 to-orange-400/50
*/

import { useRouter } from "next/navigation";
import {
  Utensils,
  Clock,
  ShoppingCart,
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
  Camera,
  Menu,
  Wine,
  Coffee,
} from "lucide-react";
import BaseServiceLayout from "@/components/services/shared/BaseServiceLayout";
import FeaturesSection from "@/components/services/shared/FeaturesSection";
import StatsSection from "@/components/services/shared/StatsSection";
import BenefitsSection from "@/components/services/shared/BenefitsSection";
import WhySection from "@/components/services/shared/WhySection";
import ProcessSection from "@/components/services/shared/ProcessSection";
import CtaSection from "@/components/services/shared/CtaSection";

export default function RestaurantWebsitePage() {
  const router = useRouter();
  const features = [
    {
      icon: <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />,
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
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
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
      icon: <Menu className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "منوی دیجیتال تعاملی",
      description:
        "منوی کاغذی را با یک منوی دیجیتال جذاب و تعاملی جایگزین کنید. تصاویر باکیفیت، توضیحات کامل، فیلترهای غذایی (رژیم کتو، وگان، بدون گلوتن و...) و قابلیت به‌روزرسانی آنی، تجربه مشتری را بهبود می‌بخشد. منو می‌تواند چندزبانه باشد و به‌طور خودکار بر اساس زمان روز (صبحانه، ناهار، شام) یا مناسبت‌ها تغییر کند. همچنین امکان نمایش برچسب‌هایی مانند 'پرفروش'، 'جدید' یا 'تخفیف‌دار' به صورت خودکار وجود دارد.",
      benefits: [
        "به‌روزرسانی آسان و آنی",
        "امکان پشتیبانی از چند زبان",
        "امکان دسته‌بندی محصولات",
        "جذابیت بصری بالا",
        "کاهش هزینه چاپ منو",
      ],
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
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

  const stats = [
    {
      icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۴۵٪",
      label: "میانگین افزایش فروش",
      description:
        "رستوران‌های دارای وبسایت حرفه‌ای و سفارش آنلاین، به‌طور متوسط ۴۵٪ فروش بیشتری نسبت به رقبای خود تجربه می‌کنند.",
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۲۴/۷",
      label: "دریافت سفارش",
      description:
        "وبسایت شما حتی در ساعات تعطیلی نیز مشتری جذب کرده و سفارش می‌گیرد؛ یعنی درآمدی بدون وقفه.",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۶۰٪",
      label: "کاهش تماس تلفنی",
      description:
        "با رزرو آنلاین و منوی دیجیتال، حجم تماس‌ها تا ۶۰٪ کمتر می‌شود و تیم شما روی کیفیت سرویس تمرکز می‌کند.",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      value: "۳۰٪",
      label: "بازگشت مشتری",
      description:
        "سیستم وفاداری یکپارچه در وبسایت، احتمال بازگشت مشتری را تا ۳۰٪ افزایش می‌دهد.",
    },
  ];

  const keyFeatures = [
    {
      icon: <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Online Ordering",
      desc: "سیستم سفارش آنلاین با پردازش امن",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Table Booking",
      desc: "رزرو آنلاین میز با تأیید خودکار",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: <Camera className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Photo Gallery",
      desc: "گالری حرفه‌ای از غذاها و فضای رستوران",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Reviews System",
      desc: "سیستم نظرات و امتیازدهی مشتریان",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Location & Hours",
      desc: "نمایش موقعیت و ساعات کاری",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <CreditCard className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Secure Payment",
      desc: "درگاه پرداخت امن و چندگانه",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Loyalty Program",
      desc: "سیستم وفاداری مشتریان با امتیاز و جوایز",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Analytics Dashboard",
      desc: "داشبورد آنالیز فروش و رفتار مشتری",
      color: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Push Notifications",
      desc: "اطلاع‌رسانی لحظه‌ای برای پیشنهادها و تخفیف‌ها",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const whyBenefits = [
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "افزایش درآمد و فروش",
      desc: "با دریافت سفارشات آنلاین در ۲۴ ساعت شبانه‌روز، فروش خود را تا ۴۰٪ افزایش دهید و محدودیت‌های زمانی و مکانی را از بین ببرید.",
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "صرفه‌جویی در زمان و هزینه‌ها",
      desc: "سیستم رزرواسیون خودکار و منوی دیجیتال، تماس‌های تلفنی را کاهش داده و به تیم شما اجازه می‌دهد روی کیفیت خدمات تمرکز کنند.",
    },
    {
      icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "برندسازی و هویت دیجیتال",
      desc: "فضای منحصر به فرد، داستان و غذاهای خاص رستوران خود را به نمایش بگذارید و یک تصویر حرفه‌ای و ماندگار در ذهن مشتریان بسازید.",
    },
    {
      icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "برتری رقابتی",
      desc: "با حضوری مدرن و ارائه خدمات آنلاین، از رقبایی که هنوز به روش‌های سنتی کار می‌کنند، متمایز شوید و مشتریان بیشتری جذب کنید.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      desc: "بررسی نیازها و اهداف رستوران شما",
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "02",
      title: "Design",
      desc: "طراحی منحصر به فرد متناسب با برند شما",
      icon: <Wine className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "03",
      title: "Development",
      desc: "توسعه با آخرین تکنولوژی‌ها",
      icon: <Coffee className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
    {
      step: "04",
      title: "Launch",
      desc: "راه‌اندازی و آموزش تیم شما",
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
    },
  ];

  return (
    <BaseServiceLayout
      title="وبسایت حرفه‌ای رستوران"
      subtitle="سفارش وبسایت آنلاین رستوران شما با توانایی مجهز شدن به منوی دیجیتال تعاملی و قابلیت رزرو میز و سیستم سفارش‌گیری و پرداخت آنلاین"
      description=""
      primaryButtonText="شروع پروژه وبسایت آنلاین شما"
      secondaryButtonText="مشاهده قابلیت‌ها"
      gradientColors="from-gray-900 via-orange-950 to-red-950"
      accentColor="from-orange-600 to-red-600"
      accentColorLight="orange-500"
      accentColorDark="orange-400"
      logoIcon={<Utensils className="w-4 h-4" />}
      logoText="Restaurant Website Solutions"
      onPrimaryButtonClick={() =>
        router.push(
          `/register?title=${encodeURIComponent(
            "شروع ساخت وبسایت رستوران شما"
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
        accentColorLight="orange-500"
        accentColorDark="orange-400"
        sectionTitle="قابلیت‌های کلیدی در عمل"
        sectionSubtitle="با کلیک بر روی هر قابلیت، جزئیات و مزایای آن را مشاهده کنید"
        sectionId="key-features"
      />
      <StatsSection
        stats={stats}
        accentColorLight="orange-500"
        accentColorDark="orange-400"
        sectionTitle="نتایجی که وبسایت آنلاین برای رستوران شما دارد در یک نگاه"
        sectionSubtitle="نگاهی عمیق به تأثیر وبسایت بر رشد کسب‌وکار شما"
        sectionId="results"
        glance="Results at a glance"
      />
      <BenefitsSection
        keyFeatures={keyFeatures}
        accentColorLight="orange-500"
        accentColorDark="orange-400"
        sectionTitle="ویژگی های کلی یک وب سایت رستورانی خوب"
        sectionSubtitle="تمام ابزارهایی که برای موفقیت آنلاین رستوران تان نیاز دارید"
        sectionId="benefits"
        benefit="Benefits"
      />
      <WhySection
        benefits={whyBenefits}
        accentColor="from-orange-500 to-red-500"
        accentColorLight="orange-500"
        accentColorDark="orange-400"
        sectionTitle="چرا رستوران شما به یک وب‌سایت حرفه‌ای نیاز دارد؟"
        sectionSubtitle="یک وب‌سایت مدرن فقط یک ویترین آنلاین نیست، بلکه یک ابزار قدرتمند برای رشد کسب‌وکار شماست. از افزایش فروش گرفته تا تقویت برند، مزایای داشتن یک پلتفرم اختصاصی بی‌شمار است."
        sectionId="why-restaurant"
        why="Why restaurant online website"
      />
      <ProcessSection
        steps={processSteps}
        accentColor="from-orange-500 to-red-500"
        accentColorLight="orange-500"
        accentColorDark="orange-400"
        sectionTitle="فرآیند ساده، نتایج خیره‌کننده"
        sectionSubtitle="در ۴ مرحله ساده وبسایت رستوران خود را راه‌اندازی کنید"
        sectionId="process"
        process="Our Process"
      />
      <CtaSection
        accentColor="from-orange-900 to-red-900"
        accentColorLight="orange-500"
        accentColorDark="orange-400"
        sectionTitle="آماده‌اید تا رستوران خود را به وبسایت آنلاین مجهز کنید؟"
        sectionSubtitle="با وبسایت حرفه‌ای، رستوران خود را به سطح جدیدی از موفقیت برسانید"
        sectionId="cta"
        primaryButtonText="شروع پروژه وبسایت آنلاین شما"
        start="Get Started"
        onPrimaryButtonClick={() =>
          router.push(
            `/register?title=${encodeURIComponent("شروع ساخت وبسایت شما")}`
          )
        }
      />
    </BaseServiceLayout>
  );
}
