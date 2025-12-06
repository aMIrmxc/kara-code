"use client";
import React, { useState, useEffect } from "react";
import "./consulting.css";
import { motion, Variants } from "framer-motion";
import {
  Users,
  Code,
  Smartphone,
  Monitor,
  Zap,
  Target,
  Lightbulb,
  TrendingUp,
  CheckCircle,
  Clock,
  Shield,
  Award,
  ArrowRight,
  MessageSquare,
  Phone,
  Mail,
  Building2,
  Globe,
  Sparkles,
} from "lucide-react";
import ContactCards from "@/components/consulting/ContactCards";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Footer from "@/components/layout/Footer";
import { AnimatedHeroBackground } from "@/components/ui/animated-background";
import { GradientBackgroundProps as GradientBackground } from "@/components/ui/gradient-background";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variants: Variants;
  dir?: "ltr" | "rtl";
  id?: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  variants,
  dir = "ltr",
  id,
}) => {
  return (
    <motion.section
      id={id}
      dir={dir}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

type ServiceType = "web" | "mobile" | "desktop" | "all" | "other" | "";
type Industry = string;
type UserCount = string;

type Budget = string;

type Timeline = string;

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: ServiceType;
  industry: Industry;
  userCount: UserCount;
  budget: Budget;
  timeline: Timeline;
  description: string;
}

const ConsultingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showFloatingButton, setShowFloatingButton] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceType: "",
    industry: "",
    userCount: "",
    budget: "",
    timeline: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | "">(
    ""
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const footerSection = document.getElementById("footer");

      if (heroSection && footerSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const footerRect = footerSection.getBoundingClientRect();
        const isHeroScrolledPast = heroRect.bottom < 0;
        const isFooterVisible = footerRect.top < window.innerHeight;
        setShowFloatingButton(isHeroScrolledPast && !isFooterVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" as const },
    },
  };

  const consultingServices: {
    icon: React.ReactElement;
    title: string;
    description: string;
    color: string;
  }[] = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Application Consulting",
      description:
        "مشاوره جامع برای توسعه وب‌اپلیکیشن‌های مقیاس‌پذیر با معماری مدرن و فناوری‌های روز",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Consulting",
      description:
        "راهنمایی تخصصی برای ساخت اپلیکیشن‌های موبایل بومی و کراس‌پلتفرم با تجربه کاربری عالی",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Desktop Software Consulting",
      description:
        "مشاوره در توسعه نرم‌افزارهای دسکتاپ قدرتمند برای Windows، macOS و Linux",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Technical Architecture",
      description:
        "طراحی معماری نرم‌افزاری بهینه متناسب با نیازهای کسب‌وکار و اهداف بلندمدت شما",
      color: "from-orange-500 to-red-500",
    },
  ];

  const consultingBenefits: {
    icon: React.ReactElement;
    title: string;
    description: string;
    color: string;
  }[] = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Planning",
      description:
        "برنامه‌ریزی استراتژیک برای تضمین موفقیت پروژه با تحلیل دقیق نیازها و اهداف",
      color: "from-blue-600 to-indigo-600",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Scalability Focus",
      description:
        "طراحی راه‌حل‌هایی که با رشد کسب‌وکار شما مقیاس‌پذیر و انعطاف‌پذیر هستند",
      color: "from-emerald-600 to-teal-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security First",
      description:
        "اولویت بندی امنیت و حریم خصوصی در تمام مراحل توسعه و معماری",
      color: "from-red-600 to-rose-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Best Practices",
      description:
        "استفاده از بهترین شیوه‌های صنعت و استانداردهای کدنویسی برای کیفیت بالا",
      color: "from-amber-600 to-yellow-600",
    },
  ];

  const processSteps: {
    icon: React.ReactElement;
    title: string;
    description: string;
    color: string;
  }[] = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Initial Consultation",
      description: "جلسه اولیه برای درک نیازها و اهداف",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Analysis & Planning",
      description: "تحلیل جامع و برنامه‌ریزی دقیق پروژه",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Technical Design",
      description: "طراحی معماری و انتخاب فناوری‌ها",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Implementation Support",
      description: "پشتیبانی در طول توسعه و اجرا",
      color: "from-orange-500 to-red-500",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        serviceType: "",
        industry: "",
        userCount: "",
        budget: "",
        timeline: "",
        description: "",
      });
    }, 1500);
  };

  return (
    <GradientBackground>
      {/* Hero Section */}
      <section
        dir="rtl"
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <AnimatedHeroBackground />

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div
            className={`transition-all duration-1000 text-center ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Badge className="text-xs sm:text-sm mb-6 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono hover:bg-white/20 transition-all duration-300">
              Professional Consulting Services
              <Sparkles className="w-4 h-4" />
            </Badge>

            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 text-balance font-mono">
              <span className="bg-gradient-to-r text-gradient-animated bg-clip-text text-transparent animate-pulse">
                {" "}
                مشاوره تخصصی توسعه نرم‌افزار{" "}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-persian">
              با تیم متخصص کارا کد، مسیر موفقیت پروژه نرم‌افزاری خود را از ابتدا
              تا انتها با اطمینان طی کنید. ما با ارائه مشاوره جامع در زمینه
              توسعه وب، موبایل و دسکتاپ، به شما کمک می‌کنیم تا بهترین تصمیمات
              فنی و استراتژیک را برای کسب‌وکارتان بگیرید
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                variant="my-primary"
                onClick={() =>
                  document
                    .getElementById("consultation-form")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="bg-gradient-to-r text-gradient-animated  bg-clip-text text-transparent animate-pulse font-persian">
                  درخواست مشاوره رایگان
                </span>
              </Button>

              <Button
                variant="my-outline"
                onClick={() =>
                  document
                    .getElementById("services")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="font-persian"> بیشتر بدانید </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Services Section */}
      <AnimatedSection
        dir="rtl"
        id="services"
        className="py-20 px-4 relative bg-black/30"
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="text-xs sm:text-sm mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Our Consulting Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              <span className="font-persian font-noto-h2">
                خدمات مشاوره تخصصی
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-persian">
              ما در کارا کد، مشاوره جامعی در تمام جنبه‌های توسعه نرم‌افزار ارائه
              می‌دهیم. از انتخاب فناوری مناسب تا طراحی معماری و استراتژی توسعه،
              در کنار شما هستیم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingServices.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <CardContent className="p-6 text-center relative z-10 flex flex-col h-full">
                    <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-mono">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow font-persian">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Why Choose Our Consulting */}
      <AnimatedSection
        dir="rtl"
        className="py-20 px-4"
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="text-xs sm:text-sm mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              <span className="font-persian font-noto-h2">
                مزایای مشاوره با ما
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-persian">
              تجربه، تخصص و تعهد ما به موفقیت شما، تضمینی برای انتخاب درست است
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consultingBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <CardContent className="p-6 text-center relative z-10 flex flex-col h-full">
                    <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-mono">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow font-persian">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Consultation Process */}
      <AnimatedSection
        dir="rtl"
        className="py-20 px-4 bg-black/30"
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="text-xs sm:text-sm mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Our Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              <span className="font-persian font-noto-h2">
                فرآیند مشاوره ما
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-persian">
              یک فرآیند شفاف و ساختاریافته برای اطمینان از دریافت بهترین نتیجه
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <CardContent className="p-6 relative z-10">
                    <div>
                      <div className="flex flex-col items-center text-center ">
                        <div className=" text-white mb-4 group-hover:scale-180 transition-transform duration-300 inline-block scale-150 ">
                          {step.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2 font-mono">
                          {step.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed font-persian">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Detailed Description Section */}
      <AnimatedSection
        dir="rtl"
        className="py-20 px-4"
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center font-mono">
                <span className="font-persian font-noto-h2">
                  چرا به مشاوره نیاز دارید؟
                </span>
              </h2>

              <div className="space-y-6 text-gray-300 leading-relaxed font-persian">
                <p className="text-lg">
                  در دنیای پیچیده توسعه نرم‌افزار، تصمیم‌گیری‌های درست در مراحل
                  اولیه می‌تواند تفاوت بین موفقیت و شکست پروژه شما باشد. کارا کد
                  با بیش از چندین سال تجربه در توسعه نرم‌افزارهای وب، موبایل و
                  دسکتاپ، آماده است تا شما را در این مسیر همراهی کند.
                </p>

                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Code className="w-6 h-6 text-purple-400" />
                    توسعه وب حرفه‌ای
                  </h3>
                  <p>
                    چه به دنبال ساخت یک وب‌سایت شرکتی، فروشگاه آنلاین پیچیده، یا
                    یک وب‌اپلیکیشن مقیاس‌پذیر باشید، ما به شما کمک می‌کنیم تا
                    بهترین فناوری‌ها (React، Next.js، Node.js، Django و ...) را
                    انتخاب کرده و معماری مناسبی طراحی کنید که با رشد کسب‌وکار
                    شما همگام باشد.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-6 border border-green-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Smartphone className="w-6 h-6 text-green-400" />
                    اپلیکیشن موبایل هوشمند
                  </h3>
                  <p>
                    در عصر موبایل، داشتن یک اپلیکیشن با تجربه کاربری عالی ضروری
                    است. ما به شما مشاوره می‌دهیم که آیا باید یک اپلیکیشن بومی
                    (Native) بسازید یا از فناوری‌های کراس‌پلتفرم مانند React
                    Native یا Flutter استفاده کنید. همچنین در طراحی UI/UX،
                    بهینه‌سازی عملکرد و استراتژی انتشار در App Store و Google
                    Play کمک می‌کنیم.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-6 border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                    <Monitor className="w-6 h-6 text-blue-400" />
                    نرم‌افزارهای دسکتاپ قدرتمند
                  </h3>
                  <p>
                    برای کسب‌وکارهایی که نیاز به نرم‌افزارهای دسکتاپ پیشرفته
                    دارند، ما راهنمایی کاملی در انتخاب فناوری (Electron، .NET،
                    Qt و ...) و طراحی معماری ارائه می‌دهیم. از مدیریت دیتابیس
                    محلی تا یکپارچگی با سیستم‌های عامل مختلف، تمام جنبه‌ها را
                    پوشش می‌دهیم.
                  </p>
                </div>

                <p className="text-lg">
                  مشاوره ما فراتر از صرفاً انتخاب فناوری است. ما به شما کمک
                  می‌کنیم تا:
                </p>

                <ul className="space-y-3 mr-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      معماری نرم‌افزاری مقیاس‌پذیر و قابل نگهداری طراحی کنید
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      بودجه و زمان‌بندی واقع‌بینانه برای پروژه تعیین کنید
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      از بهترین شیوه‌های امنیتی و حفظ حریم خصوصی استفاده کنید
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      استراتژی‌های بهینه‌سازی عملکرد و SEO را پیاده‌سازی کنید
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span>
                      یک roadmap مشخص برای توسعه و نگهداری بلندمدت داشته باشید
                    </span>
                  </li>
                </ul>

                <p className="text-lg font-semibold text-white">
                  با کارا کد، نه تنها یک مشاور، بلکه یک شریک استراتژیک برای
                  موفقیت دیجیتال خود پیدا می‌کنید.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>

      {/* Consultation Form Section */}
      <AnimatedSection
        id="consultation-form"
        className="py-20 px-1 bg-black/30"
        variants={sectionVariants}
      >
        <div dir="rtl" className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="text-xs sm:text-sm mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Get Started
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              <span className="font-persian font-noto-h2">
                درخواست مشاوره رایگان
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-persian">
              فرم زیر را تکمیل کنید تا کارشناسان ما در اسرع وقت با شما تماس
              بگیرند
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden mx-4 sm:mx-1">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-white font-medium mb-2 text-sm font-persian"
                      style={{ fontFamily: "Tahoma, Arial" }}
                    >
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        نام و نام خانوادگی *
                      </span>
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="نام کامل خود را وارد کنید"
                      style={{ fontFamily: "Tahoma, Arial" }}
                      required
                      dir="rtl"
                      className="input-placeholder"
                    />
                  </div>

                  <div>
                    <label
                      className="block text-white font-medium mb-2 text-sm font-persian"
                      style={{ fontFamily: "Tahoma, Arial" }}
                    >
                      <span className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        شماره تماس *
                      </span>
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="09123456789"
                      required
                      dir="ltr"
                      className="input-placeholder"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm font-persian">
                      <span className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        ایمیل *
                      </span>
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="example@email.com"
                      required
                      dir="ltr"
                      className="input-placeholder"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 text-sm font-persian">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        نام شرکت / کسب‌وکار
                      </span>
                    </label>
                    <Input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="نام شرکت یا کسب‌وکار (اختیاری)"
                      style={{ fontFamily: "Tahoma, Arial" }}
                      dir="rtl"
                      className="input-placeholder"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm font-persian">
                      <span className="flex items-center gap-2">
                        <Code className="w-4 h-4" />
                        نوع خدمات مورد نیاز *
                      </span>
                    </label>
                    <Select
                      onValueChange={(value: ServiceType) =>
                        handleSelectChange("serviceType", value)
                      }
                      value={formData.serviceType}
                      required
                    >
                      <SelectTrigger
                        className="w-full"
                        style={{ fontFamily: "Tahoma, Arial" }}
                      >
                        <SelectValue
                          placeholder="انتخاب کنید..."
                          className="input-placeholder"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web" className="font-persian">
                          توسعه وب
                        </SelectItem>
                        <SelectItem value="mobile" className="font-persian">
                          اپلیکیشن موبایل
                        </SelectItem>
                        <SelectItem value="desktop" className="font-persian">
                          نرم‌افزار دسکتاپ
                        </SelectItem>
                        <SelectItem value="all" className="font-persian">
                          همه موارد
                        </SelectItem>
                        <SelectItem value="other" className="font-persian">
                          سایر
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 text-sm font-persian">
                      <span className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        حوزه فعالیت / صنعت *
                      </span>
                    </label>
                    <Select
                      onValueChange={(value: Industry) =>
                        handleSelectChange("industry", value)
                      }
                      value={formData.industry}
                      required
                    >
                      <SelectTrigger className="w-full  ">
                        <SelectValue
                          placeholder="انتخاب کنید..."
                          className="input-placeholder"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ecommerce" className="font-persian">
                          فروشگاه آنلاین
                        </SelectItem>
                        <SelectItem value="restaurant" className="font-persian">
                          رستوران و کافه
                        </SelectItem>
                        <SelectItem value="healthcare" className="font-persian">
                          پزشکی و سلامت
                        </SelectItem>
                        <SelectItem value="education" className="font-persian">
                          آموزشی
                        </SelectItem>
                        <SelectItem value="realestate" className="font-persian">
                          املاک
                        </SelectItem>
                        <SelectItem value="finance" className="font-persian">
                          مالی و بانکی
                        </SelectItem>
                        <SelectItem value="travel" className="font-persian">
                          گردشگری و سفر
                        </SelectItem>
                        <SelectItem value="corporate" className="font-persian">
                          شرکتی
                        </SelectItem>
                        <SelectItem value="other" className="font-persian">
                          سایر
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2 text-sm font-persian">
                      <span className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        تعداد کاربران تخمینی
                      </span>
                    </label>
                    <Select
                      onValueChange={(value: UserCount) =>
                        handleSelectChange("userCount", value)
                      }
                      value={formData.userCount}
                    >
                      <SelectTrigger className="w-full ">
                        <SelectValue
                          placeholder="انتخاب کنید..."
                          className="input-placeholder"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-100" className="font-persian">
                          کمتر از ۱۰۰ کاربر
                        </SelectItem>
                        <SelectItem value="100-1000" className="font-persian">
                          ۱۰۰ تا ۱۰۰۰ کاربر
                        </SelectItem>
                        <SelectItem value="1000-10000" className="font-persian">
                          ۱۰۰۰ تا ۱۰۰۰۰ کاربر
                        </SelectItem>
                        <SelectItem value="10000+" className="font-persian">
                          بیش از ۱۰۰۰۰ کاربر
                        </SelectItem>
                        <SelectItem value="unknown" className="font-persian">
                          مشخص نیست
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* <div>
                    <label className="block text-white font-medium mb-2 text-sm font-persian">
                      <span className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        بودجه تخمینی
                      </span>
                    </label>
                    <Select
                      onValueChange={(value: Budget) =>
                        handleSelectChange("budget", value)
                      }
                      value={formData.budget}
                    >
                      <SelectTrigger className="w-full ">
                        <SelectValue
                          placeholder="انتخاب کنید..."
                          className="select-trigger-text"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-50m" className="font-persian">
                          زیر ۵۰ میلیون تومان
                        </SelectItem>
                        <SelectItem value="50m-100m" className="font-persian">
                          ۵۰ تا ۱۰۰ میلیون تومان
                        </SelectItem>
                        <SelectItem value="100m-200m" className="font-persian">
                          ۱۰۰ تا ۲۰۰ میلیون تومان
                        </SelectItem>
                        <SelectItem value="200m+" className="font-persian">
                          بیش از ۲۰۰ میلیون تومان
                        </SelectItem>
                        <SelectItem value="flexible" className="font-persian">
                          انعطاف‌پذیر
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div> */}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm font-persian">
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      زمان‌بندی پروژه
                    </span>
                  </label>
                  <Select
                    onValueChange={(value: Timeline) =>
                      handleSelectChange("timeline", value)
                    }
                    value={formData.timeline}
                  >
                    <SelectTrigger className="w-full ">
                      <SelectValue
                        placeholder="انتخاب کنید..."
                        className="input-placeholder"
                      />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="urgent" className="font-persian">
                        فوری (کمتر از ۱ ماه)
                      </SelectItem>
                      <SelectItem value="1-3months" className="font-persian">
                        ۱ تا ۳ ماه
                      </SelectItem>
                      <SelectItem value="3-6months" className="font-persian">
                        ۳ تا ۶ ماه
                      </SelectItem>
                      <SelectItem value="6months+" className="font-persian">
                        بیش از ۶ ماه
                      </SelectItem>
                      <SelectItem value="flexible" className="font-persian">
                        انعطاف‌پذیر
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2 text-sm font-persian">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      توضیحات پروژه *
                    </span>
                  </label>
                  <Textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="لطفاً جزئیات بیشتری در مورد پروژه خود، نیازها، اهداف و هر چیز دیگری که فکر می‌کنید برای ما مفید است را بنویسید..."
                    style={{ fontFamily: "Tahoma, Arial" }}
                    rows={6}
                    required
                    dir="rtl"
                    className="input-placeholder"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold mb-1 font-persian">
                        درخواست شما با موفقیت ثبت شد!
                      </p>
                      <p className="text-gray-300 text-sm font-persian">
                        کارشناسان ما در اسرع وقت با شما تماس خواهند گرفت. از
                        اعتماد شما سپاسگزاریم.
                      </p>
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 py-6 text-lg font-semibold rounded-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="font-persian">در حال ارسال...</span>
                    </>
                  ) : (
                    <>
                      <span className="font-persian">ارسال درخواست مشاوره</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </Button>

                <p className="text-center text-gray-400 text-sm font-persian">
                  با ارسال این فرم، شما با{" "}
                  <a
                    href="/privacy-policy"
                    className="text-white hover:text-purple-300 underline"
                  >
                    سیاست حفظ حریم خصوصی
                  </a>{" "}
                  ما موافقت می‌کنید
                </p>
              </form>
            </CardContent>
          </Card>

          <ContactCards />
        </div>
      </AnimatedSection>

      <Footer />
    </GradientBackground>
  );
};
export default ConsultingPage;
