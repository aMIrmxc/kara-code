"use client";

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
  Tag,
  Zap,
  MessageSquare,
  Clock,
  DollarSign,
  Percent,
  Layers,
  Settings,
  ChartBar,
  RefreshCw,
} from "lucide-react";
import BaseServiceLayout from "@/components/services/shared/BaseServiceLayout";
import FeaturesSection from "@/components/services/shared/FeaturesSection";
import StatsSection from "@/components/services/shared/StatsSection";
import BenefitsSection from "@/components/services/shared/BenefitsSection";
import WhySection from "@/components/services/shared/WhySection";
import ProcessSection from "@/components/services/shared/ProcessSection";
import CtaSection from "@/components/services/shared/CtaSection";

export default function EcommercePlatformPage() {
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

  const whyBenefits = [
    {
      icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "دسترسی به بازار جهانی",
      desc: "با حذف محدودیت‌های جغرافیایی، محصولات خود را به مشتریان سراسر کشور و حتی جهان عرضه کنید و بازار هدف خود را صدها برابر گسترش دهید.",
    },
    {
      icon: <Percent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "کاهش چشمگیر هزینه‌ها",
      desc: "بدون نیاز به اجاره مکان فیزیکی، دکوراسیون گران‌قیمت و نیروی فروش متعدد، هزینه‌های عملیاتی خود را تا ۷۰٪ کاهش دهید.",
    },
    {
      icon: <ChartBar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "تحلیل دقیق رفتار مشتری",
      desc: "با ابزارهای تحلیلی پیشرفته، رفتار خرید مشتریان را بررسی کنید، محصولات پرفروش را شناسایی کنید و استراتژی‌های بازاریابی هدفمند طراحی کنید.",
    },
    {
      icon: <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "اتوماسیون فرآیندها",
      desc: "از ثبت سفارش تا ارسال کالا، تمام فرآیندها به صورت خودکار مدیریت می‌شوند و زمان شما برای توسعه کسب‌وکار آزاد می‌شود.",
    },
  ];

  const processSteps = [
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
  ];

  return (
    <BaseServiceLayout
      title="پلتفرم فروشگاه آنلاین مدرن"
      subtitle="راه‌اندازی فروشگاه اینترنتی حرفه‌ای با قابلیت‌های پیشرفته مدیریت محصولات، سبد خرید هوشمند، درگاه پرداخت امن و پنل مدیریت جامع"
      description=""
      primaryButtonText="شروع ساخت فروشگاه آنلاین شما"
      secondaryButtonText="مشاهده امکانات"
      gradientColors="from-gray-900 via-rose-950 to-pink-950"
      accentColor="from-rose-600 to-pink-600"
      accentColorLight="rose-500"
      accentColorDark="rose-400"
      logoIcon={<ShoppingBag className="w-4 h-4" />}
      logoText="E-commerce Platform Solutions"
      onSecondaryButtonClick={() =>
        document
          .getElementById("key-features")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <FeaturesSection
        features={features}
        accentColorLight="rose-500"
        accentColorDark="rose-400"
        sectionTitle="قابلیت‌های کلیدی پلتفرم"
        sectionSubtitle="با کلیک روی هر قابلیت، جزئیات کامل و مزایای آن را مشاهده کنید"
        sectionId="key-features"
      />
      <StatsSection
        stats={stats}
        accentColorLight="rose-500"
        accentColorDark="rose-400"
        sectionTitle="تأثیر فروشگاه آنلاین بر کسب‌وکار شما"
        sectionSubtitle="آمار و نتایج واقعی از مشتریان موفق ما"
        sectionId="results"
        glance="Business Impact"
      />
      <BenefitsSection
        keyFeatures={keyFeatures}
        accentColorLight="rose-500"
        accentColorDark="rose-400"
        sectionTitle="امکانات جامع پلتفرم فروشگاهی"
        sectionSubtitle="تمام ابزارهایی که برای راه‌اندازی و رشد فروشگاه آنلاین نیاز دارید"
        sectionId="benefits"
        benefit="Platform Features"
      />
      <WhySection
        benefits={whyBenefits}
        accentColor="from-rose-500 to-pink-500"
        accentColorLight="rose-500"
        accentColorDark="rose-400"
        sectionTitle="چرا کسب‌وکار شما به فروشگاه آنلاین نیاز دارد؟"
        sectionSubtitle="در عصر دیجیتال، فروشگاه آنلاین نه یک انتخاب، بلکه یک ضرورت است. از دسترسی به بازار بزرگ‌تر گرفته تا کاهش هزینه‌ها، مزایای حضور آنلاین بی‌شمار است."
        sectionId="why-ecommerce"
        why="Why E-commerce Platform"
      />
      <ProcessSection
        steps={processSteps}
        accentColor="from-rose-500 to-pink-500"
        accentColorLight="rose-500"
        accentColorDark="rose-400"
        sectionTitle="مراحل راه‌اندازی فروشگاه آنلاین"
        sectionSubtitle="در ۴ مرحله ساده، فروشگاه آنلاین حرفه‌ای خود را راه‌اندازی کنید"
        sectionId="process"
        process="Our Process"
      />
      <CtaSection
        accentColor="from-rose-900 to-pink-900"
        accentColorLight="rose-500"
        accentColorDark="rose-400"
        sectionTitle="آماده راه‌اندازی فروشگاه آنلاین خود هستید؟"
        sectionSubtitle="همین امروز فروشگاه آنلاین حرفه‌ای خود را راه‌اندازی کنید و وارد دنیای تجارت الکترونیک شوید"
        sectionId="cta"
        primaryButtonText="شروع پروژه فروشگاه آنلاین شما"
        start="Get Started Today"
      />
    </BaseServiceLayout>
  );
}
