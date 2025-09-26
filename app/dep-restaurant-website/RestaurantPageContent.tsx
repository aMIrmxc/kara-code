"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Utensils,
  Coffee,
  Cake,
  Salad,
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
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";
import { motion, Variants } from "@/components/ui/motion";
import { useScrollDirection } from "@/hooks/use-scroll-direction";

export default function RestaurantPageContent() {
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

  const menuItems = [
    {
      icon: <Salad className="w-8 h-8" />,
      title: "Fresh Salads",
      description:
        "انواع سالادهای تازه و خوشمزه با سس‌های ویژه",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Utensils className="w-8 h-8" />,
      title: "Main Courses",
      description:
        "غذاهای اصلی متنوع شامل استیک، پاستا و غذاهای دریایی",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Cake className="w-8 h-8" />,
      title: "Delicious Desserts",
      description:
        "کیک‌ها و دسرهای خانگی برای یک پایان شیرین",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Specialty Coffee",
      description:
        "قهوه‌های تخصصی و نوشیدنی‌های گرم و سرد",
      color: "from-yellow-500 to-amber-500",
    },
  ];

  const features = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Online Ordering",
      description:
        "سفارش آنلاین آسان و سریع با امکان پرداخت امن",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Easy Reservations",
      description:
        "میز خود را به راحتی و بدون دردسر رزرو کنید",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Fresh Ingredients",
      description:
        "استفاده از بهترین و تازه‌ترین مواد اولیه روز",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cozy Atmosphere",
      description:
        "فضایی دنج و دلنشین برای لذت بردن از غذای شما",
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <>
      {/* Menu Section */}
      <AnimatedSection
        dir="rtl"
        id="menu"
        className="py-20 px-4 relative"
        variants={sectionVariants}
        scrollDirection={scrollDirection}
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Our Menu
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              A Taste of Perfection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-persian">
              منوی متنوع ما را که با بهترین مواد اولیه و با عشق تهیه شده است، کاوش کنید
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuItems.map((item, index) => (
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
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <CardContent className="p-6 text-center relative z-10 flex flex-col h-full">
                    <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-mono">
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

      {/* Features Section */}
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
              An Unforgettable Experience
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-persian">
              ما بهترین خدمات و کیفیت را برای شما فراهم کرده‌ایم تا لحظات خوشی را سپری کنید
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
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
                    className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                  ></div>
                  <CardContent className="p-6 text-center relative z-10 flex flex-col h-full">
                    <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-mono">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed font-persian flex-grow">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
      
      {/* Reservations Section */}
      <AnimatedSection
        dir="rtl"
        id="reservations"
        className="py-20 px-4"
        variants={sectionVariants}
        scrollDirection={scrollDirection}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Book a Table
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              Reserve Your Spot
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto text-pretty font-persian">
              برای اطمینان از داشتن میز در زمان دلخواه، از قبل رزرو کنید.
            </p>
          </div>
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-8">
            <p className="text-center text-white font-persian text-lg">
              برای رزرو میز، لطفا با شماره <a href="tel:+982112345678" className="text-orange-400 hover:text-orange-300">۰۲۱-۱۲۳۴۵۶۷۸</a> تماس بگیرید یا از طریق فرم تماس با ما در ارتباط باشید.
            </p>
          </Card>
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
              Restaurant Name
            </h3>
            <p className="text-gray-400 font-mono">
              A Culinary Journey
            </p>
          </div>
          <div className="text-gray-500 text-sm font-mono">
            © 2025 Restaurant Name. All rights reserved | kara-code.ir
          </div>
        </div>
      </footer>
    </>
  );
}