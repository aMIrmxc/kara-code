"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "@/components/ui/animated-section";
import { PageHeader } from "@/components/layout/PageHeader";
import { useScrollDirection } from "@/hooks/use-scroll-direction";
import { GradientBackground } from "@/components/ui/gradient-background";
import Footer from "@/components/layout/Footer";

const projectsItems = [
  {
    title: "Restaurant Website",
    category: "Restaurant",
    image: "/modern-restaurant-website.png",
    description: "وب‌سایت رستوران شما با سیستم سفارش آنلاین و رزرو",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Corporate Website",
    category: "Business",
    image: "/professional-corporate-website.png",
    description: "وب‌سایت شرکتی حرفه‌ای با سیستم مدیریت محتوا",
    color: "from-blue-800 to-indigo-400",
  },
  {
    title: "E-commerce Platform",
    category: "Online-Store",
    image: "/modern-ecommerce-website.png",
    description: "پلتفرم تجارت الکترونیک مدرن با درنظر گرفتن نیاز های خاص شما",
    color: "from-rose-600 to-pink-500",
  },
  {
    title: "Real Estate Platform",
    category: "Property",
    image: "/real-estate-website.png",
    description: "پلتفرم جامع املاک با قابلیت جستجوی ملک و تورهای مجازی",
    color: "from-teal-700 to-teal-500",
  },
  {
    title: "Travel Booking Site",
    category: "Travel",
    image: "/modern-travel-booking-website-with-destinations.jpg",
    description: "پلتفرم رزرو سفر با امکان رزرو پرواز، هتل و فعالیت‌ها",
    color: "from-sky-600 to-sky-500",
  },
  {
    title: "Healthcare Portal",
    category: "Medical",
    image: "/modern-healthcare-website.png",
    description:
      "پورتال بیماران با امکان رزرو نوبت، سوابق پزشکی و ویژگی‌های پزشکی از راه دور",
    color: "from-cyan-700 to-cyan-500",
  },
  {
    title: "Educational Platform",
    category: "Educational",
    image: "/modern-e-learning-platform-with-courses.jpg",
    description:
      "پلتفرم آموزش الکترونیکی تعاملی با مدیریت دوره‌ها و پیگیری پیشرفت",
    color: "from-amber-700 to-yellow-500",
  },
  {
    title: "News Agency",
    category: "News",
    image: "/news-agency-website.png",
    description:
      " وب سایت آژانس خبری مدرن با اخبار روزانه ، رویداد های فوری و محتوای چندرسانه ای",
    color: "from-red-700 to-red-500",
  },
  {
    title: "Custom Web App",
    category: "Custom-App",
    image: "/custom-web-app.png",
    description:
      "اپلیکیشن اختصاصی تحت وب با طراحی سفارشی و امکانات کاملاً انعطاف‌پذیر",
    color: "from-fuchsia-700 to-violet-600",
  },
];

export default function ServicesPage() {
  const scrollDirection = useScrollDirection();

  return (
    <GradientBackground>
      <PageHeader
        title="وب‌سایت شما کدام است؟"
        subtitle="نمونه‌کارهای متنوع ما را که راه‌حل‌های نوآورانه وب در صنایع و نیازهای مختلف کسب‌وکار را به نمایش می‌گذارد، بررسی کنید"
      />

      {/* Project Section */}
      <AnimatedSection
        dir="rtl"
        id="projects"
        className="py-20 px-4 bg-black/30"
        scrollDirection={scrollDirection}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsItems.map((item, index) => (
              <Link
                href={`/services/${item.category.toLowerCase()}`}
                key={index}
                className="h-full"
              >
                {/*
                  CSS animation instead of Framer Motion initial/animate.

                  WHY: Framer Motion's `initial="hidden"` makes content invisible
                  by default and depends on JS animation to make it visible.
                  On client-side navigation, Next.js Router Cache can preserve
                  stale component state, preventing the animation from re-triggering.
                  This leaves content permanently at opacity: 0 (white screen).

                  CSS animations are 100% reliable because they:
                  - Always play on DOM insertion (every navigation)
                  - Don't depend on JavaScript state or lifecycle
                  - Work regardless of Next.js router caching
                */}
                <div
                  className="flex flex-col h-full animate-[fadeInUp_0.5s_ease-in-out_forwards]"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    opacity: 0,
                  }}
                >
                  <Card className="h-full bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
                    <div className="relative overflow-hidden h-48">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={`${item.title} - یک پروژه از کارا کد`}
                        width={400}
                        height={200}
                        priority={false}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6 flex flex-col">
                      <Badge
                        className={`text-xs sm:text-sm mb-3 bg-gradient-to-r ${item.color} text-white border-0 font-mono`}
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </AnimatedSection>
      <Footer />
    </GradientBackground>
  );
}
