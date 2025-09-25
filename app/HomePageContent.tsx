"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Smartphone,
  ShoppingCart,
  Globe,
  Star,
  CheckCircle,
  Zap,
  Users,
  Award,
  Rocket,
  Shield,
  Target,
  TrendingUp,
  Heart,
  Lightbulb,
  Palette,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion, Variants } from "@/components/ui/motion";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

export default function HomePageContent() {
  const scrollDirection = useScrollDirection();

  const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: { opacity: 0, y: 50 },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    exit: { opacity: 0, y: 20 },
  };

  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Development",
      description:
        "راه‌حل‌های وب سفارشی با استفاده از فناوری‌های روز برای پاسخگویی به نیازهای منحصربه‌فرد کسب‌وکار شما",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "طراحی‌های موبایل-اول که در تمام دستگاه‌ها و اندازه‌های صفحه نمایش، خیره‌کننده و بی‌نقص عمل می‌کنند",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description:
        "فروشگاه‌های آنلاین کامل با پردازش پرداخت امن و سیستم‌های مدیریت موجودی",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Applications",
      description:
        "اپلیکیشن‌های وب پیچیده با قابلیت‌های پیشرفته و تجربه‌های کاربری یکپارچه",
      color: "from-orange-500 to-red-500",
    },
  ];

  const projectsItems = [
    {
      title: "E-commerce Platform",
      category: "Online Store",
      image: "/modern-ecommerce-website.png",
      description:
        "پلتفرم تجارت الکترونیک مدرن با فیلترینگ پیشرفته و یکپارچه‌سازی پرداخت",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Corporate Website",
      category: "Business",
      image: "/professional-corporate-website.png",
      description: "وب‌سایت شرکتی حرفه‌ای با سیستم مدیریت محتوا",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "SaaS Dashboard",
      category: "Web App",
      image: "/modern-saas-dashboard.png",
      description: "داشبورد SaaS پیچیده با تحلیل‌های لحظه‌ای و مدیریت کاربران",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Restaurant Website",
      category: "Food & Dining",
      image: "/modern-restaurant-website.png",
      description: "وب‌سایت رستوران زیبا با سیستم سفارش آنلاین و رزرو",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Real Estate Platform",
      category: "Property",
      image: "/real-estate-website.png",
      description: "پلتفرم جامع املاک با جستجوی پیشرفته ملک و تورهای مجازی",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Healthcare Portal",
      category: "Medical",
      image: "/modern-healthcare-website.png",
      description:
        "پورتال بیماران با امکان رزرو نوبت، سوابق پزشکی و ویژگی‌های پزشکی از راه دور",
      color: "from-teal-500 to-green-500",
    },
    {
      title: "Educational Platform",
      category: "Education",
      image: "/modern-e-learning-platform-with-courses.jpg",
      description:
        "پلتفرم آموزش الکترونیکی تعاملی با مدیریت دوره‌ها و پیگیری پیشرفت",
      color: "from-rose-500 to-orange-500",
    },
    {
      title: "News Agency",
      category: "News",
      image: "/news-agency-website.png",
      description:
        "یک وب سایت آژانس خبری مدرن با اخبار  روزانه ، رویداد های برجسته و محتوای چندرسانه ای",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Travel Booking Site",
      category: "Travel",
      image: "/modern-travel-booking-website-with-destinations.jpg",
      description: "پلتفرم کامل رزرو سفر با امکان رزرو پرواز، هتل و فعالیت‌ها",
      color: "from-sky-500 to-blue-500",
    },
  ];

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description:
        "کد بهینه‌سازی‌شده و فناوری‌های مدرن تضمین می‌کنند که وب‌سایت شما در کمتر از ۲ ثانیه بارگذاری شود",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Level Security",
      description:
        "اقدامات امنیتی پیشرفته با SSL، رمزگذاری و میزبانی امن از داده‌ها و کاربران شما محافظت می‌کند",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO Optimized",
      description:
        "بهترین شیوه‌های سئو داخلی به وب‌سایت شما کمک می‌کند تا در نتایج جستجو رتبه بالاتری کسب کند",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-Centric Design",
      description:
        "رابط‌های کاربری بصری که با در نظر گرفتن کاربران شما برای حداکثر تعامل طراحی شده‌اند",
      color: "from-pink-500 to-rose-500",
    },
  ];

  const goals = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Drive Business Growth",
      description:
        "ایجاد راه‌حل‌های دیجیتالی که مستقیماً به موفقیت کسب‌وکار و رشد درآمد شما کمک می‌کنند",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description:
        "با فناوری‌های پیشرفته و رویکردهای خلاقانه برای حل مشکلات، همیشه یک قدم جلوتر باشید",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Long-term Partnerships",
      description:
        "ایجاد روابط پایدار با مشتریان از طریق خدمات منحصربفرد و پشتیبانی مداوم",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Pixel-Perfect Design",
      description:
        "ارائه وب‌سایت‌های بصری خیره‌کننده که برند شما را منعکس کرده و مخاطبان شما را مجذوب خود می‌کند",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <>
      {/* Services Section */}
      <AnimatedSection
        dir="rtl"
        id="services"
        className="py-20 px-4 relative"
        variants={sectionVariants}
        scrollDirection={scrollDirection}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              Comprehensive Web Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-persian">
              از ایده تا اجرا، ما خدمات کامل توسعه وب را ارائه می‌دهیم که
              ایده‌های شما را به راه‌حل‌های دیجیتال قدرتمند تبدیل می‌کند
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
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
                    <p className="text-gray-300 text-sm leading-relaxed font-persian flex-grow">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        dir="rtl"
        className="py-20 px-4 bg-black/30"
        variants={sectionVariants}
        scrollDirection={scrollDirection}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              Unmatched Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-persian">
              ما فراتر از وب‌سایت‌ها، راه‌حل‌های جامعی ارائه می‌دهیم که نتایج
              واقعی برای کسب‌وکار شما به ارمغان می‌آورد
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={cardVariants as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
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
                    <p className="text-gray-300 text-sm leading-relaxed font-persian flex-grow">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection
        dir="rtl"
        className="py-20 px-4 overflow-x-hidden"
        variants={sectionVariants}
        scrollDirection={scrollDirection}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
                About Kara Code
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
                Crafting Digital Excellence Since Day One
              </h2>
              <p
                className="text-lg text-gray-300 mb-6 leading-relaxed font-persian"
                dir="rtl"
              >
                در کارا کد، ما به قدرت توسعه وب برای تحول کسب‌وکارها ایمان
                داریم. تیم ما متشکل از توسعه‌دهندگان و طراحان ماهر، بی‌وقفه تلاش
                می‌کنند تا تجربیات دیجیتالی خلق کنند که نه‌تنها خیره‌کننده به
                نظر می‌رسند، بلکه نتایج واقعی به همراه دارند
              </p>
              <p
                className="text-lg text-gray-300 mb-8 leading-relaxed font-persian"
                dir="rtl"
              >
                با تخصص در جدیدترین فناوری‌ها و اشتیاق به نوآوری، ما راه‌حل‌های
                وبی ارائه می‌دهیم که فراتر از انتظارات عمل کرده و به مشتریان ما
                در دستیابی به اهداف دیجیتالشان کمک می‌کند
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2 font-mono">
                    150+
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2 font-mono">
                    100%
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
                    Client Satisfaction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">
                    24/7
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
                    Support Available
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-br from-white/5 to-white/2 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 flex items-center gap-3 border border-blue-500/30">
                    <Users className="w-6 h-6 text-cyan-300" />
                    <div>
                      <div className="text-white font-semibold font-mono">
                        Expert Team
                      </div>
                      <div className="text-gray-400 text-sm font-mono">
                        Skilled Developers
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 flex items-center gap-3 border border-purple-500/30">
                    <Award className="w-6 h-6 text-pink-300" />
                    <div>
                      <div className="text-white font-semibold font-mono">
                        Quality First
                      </div>
                      <div className="text-gray-400 text-sm font-mono">
                        Premium Results
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 flex items-center gap-3 border border-green-500/30">
                    <Zap className="w-6 h-6 text-emerald-300" />
                    <div>
                      <div className="text-white font-semibold font-mono">
                        Fast Delivery
                      </div>
                      <div className="text-gray-400 text-sm font-mono">
                        On-Time Projects
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 flex items-center gap-3 border border-orange-500/30">
                    <CheckCircle className="w-6 h-6 text-orange-300" />
                    <div>
                      <div className="text-white font-semibold font-mono">
                        Guaranteed
                      </div>
                      <div className="text-gray-400 text-sm font-mono">
                        100% Satisfaction
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        dir="rtl"
        className="py-20 px-4 bg-black/30"
        variants={sectionVariants}
        scrollDirection={scrollDirection}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Our Mission
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              Goals That Drive Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-persian">
              هر پروژه‌ای که ما بر عهده می‌گیریم با این اصول اصلی هدایت می‌شود
              که نتایج ویژه را برای مشتریان ما تضمین می‌کند
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, index) => (
              <motion.div
                key={index}
                variants={cardVariants as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group overflow-hidden relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <CardContent className="p-6 text-center relative z-10 flex flex-col h-full">
                    <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {goal.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-mono">
                      {goal.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed font-persian flex-grow">
                      {goal.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Project Section */}
      <AnimatedSection
        dir="rtl"
        id="projects"
        className="py-20 px-4"
        variants={sectionVariants}
        scrollDirection={scrollDirection}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Projects List
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              ?Which is your desired website
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-persian">
              نمونه‌کارهای متنوع ما را که راه‌حل‌های وب نوآورانه در صنایع و
              نیازهای مختلف کسب‌وکار را به نمایش می‌گذارد، بررسی کنید
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsItems.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants as any}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <CardContent className="p-6 flex flex-col">
                    <Badge
                      className={`mb-3 bg-gradient-to-r ${item.color} text-white border-0 font-mono`}
                    >
                      {item.category}
                    </Badge>
                    <h3 className="text-xl font-semibold text-white mb-2 font-mono">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed font-persian flex-grow">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer
        id="footer"
        className="py-12 px-4 bg-black/50 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <img
              src="/logos/ck-nobg.png"
              alt="Kara Code Logo"
              className="h-18 mx-auto -mb-2 "
            />
            <h3 className="text-2xl font-bold text-white mb-4 font-mono">
              Kara Code
            </h3>
            <p className="text-gray-400 font-mono">
              Crafting Digital Excellence
            </p>
          </div>
          <div className="text-gray-500 text-sm font-mono">
            © 2025 Kara Code. All rights reserved | kara-code.ir
          </div>
        </div>
      </footer>
    </>
  );
}
