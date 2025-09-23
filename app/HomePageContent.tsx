"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
} from "lucide-react"

export default function HomePageContent() {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Web Development",
      description: "Tailored web solutions built with cutting-edge technologies to meet your unique business needs.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description: "Mobile-first designs that look stunning and function perfectly on all devices and screen sizes.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment processing and inventory management systems.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Applications",
      description: "Complex web applications with advanced functionality and seamless user experiences.",
      color: "from-orange-500 to-red-500",
    },
  ]

  const portfolioItems = [
    {
      title: "E-commerce Platform",
      category: "Online Store",
      image: "/modern-ecommerce-website.png",
      description: "Modern e-commerce platform with advanced filtering and payment integration",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Corporate Website",
      category: "Business",
      image: "/professional-corporate-website.png",
      description: "Professional corporate website with content management system",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "SaaS Dashboard",
      category: "Web App",
      image: "/modern-saas-dashboard.png",
      description: "Complex SaaS dashboard with real-time analytics and user management",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Restaurant Website",
      category: "Food & Dining",
      image: "/modern-restaurant-website.png",
      description: "Beautiful restaurant website with online ordering and reservation system",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Real Estate Platform",
      category: "Property",
      image: "/real-estate-website.png",
      description: "Comprehensive real estate platform with advanced property search and virtual tours",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Healthcare Portal",
      category: "Medical",
      image: "/modern-healthcare-website.png",
      description: "Patient portal with appointment booking, medical records, and telemedicine features",
      color: "from-teal-500 to-green-500",
    },
    {
      title: "Educational Platform",
      category: "Education",
      image: "/modern-e-learning-platform-with-courses.jpg",
      description: "Interactive e-learning platform with course management and progress tracking",
      color: "from-rose-500 to-orange-500",
    },
    {
      title: "News Agency",
      category: "News",
      image: "/news-agency-website.png",
      description: "A modern news agency website with news, featured stories, and multimedia content.",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Travel Booking Site",
      category: "Travel",
      image: "/modern-travel-booking-website-with-destinations.jpg",
      description: "Full-featured travel booking platform with flight, hotel, and activity reservations",
      color: "from-sky-500 to-blue-500",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      content:
        "Kara Code delivered an exceptional website that exceeded our expectations. Their attention to detail and technical expertise is outstanding.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      company: "Digital Solutions",
      content:
        "Professional, reliable, and innovative. They transformed our vision into a beautiful, functional website that drives results.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Agency",
      content:
        "The team at Kara Code is incredibly talented. They built us a stunning e-commerce platform that has boosted our sales significantly.",
      rating: 5,
    },
  ]

  const benefits = [
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Lightning Fast Performance",
      description: "Optimized code and modern technologies ensure your website loads in under 2 seconds",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Bank-Level Security",
      description: "Advanced security measures protect your data and users with SSL, encryption, and secure hosting",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "SEO Optimized",
      description: "Built-in SEO best practices help your website rank higher in search results",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "User-Centric Design",
      description: "Intuitive interfaces designed with your users in mind for maximum engagement",
      color: "from-pink-500 to-rose-500",
    },
  ]

  const goals = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Drive Business Growth",
      description: "Create digital solutions that directly contribute to your business success and revenue growth",
      color: "from-emerald-500 to-green-500",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "Stay ahead of the curve with cutting-edge technologies and creative problem-solving approaches",
      color: "from-yellow-500 to-amber-500",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Long-term Partnerships",
      description: "Build lasting relationships with clients through exceptional service and ongoing support",
      color: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Pixel-Perfect Design",
      description: "Deliver visually stunning websites that reflect your brand and captivate your audience",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <>
      {/* Services Section */}
      <section id="services" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              Comprehensive Web Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-persian">
              از ایده تا اجرا، ما خدمات کامل توسعه وب را ارائه می‌دهیم که ایده‌های شما را به راه‌حل‌های دیجیتال قدرتمند تبدیل می‌کند
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl group overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-mono">{service.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-persian">{(() => {
                    switch (service.title) {
                      case "Custom Web Development":
                        return "راه‌حل‌های وب سفارشی با استفاده از فناوری‌های روز برای پاسخگویی به نیازهای منحصربه‌فرد کسب‌وکار شما."
                      case "Responsive Design":
                        return "طراحی‌های موبایل-اول که در تمام دستگاه‌ها و اندازه‌های صفحه نمایش، خیره‌کننده و بی‌نقص عمل می‌کنند."
                      case "E-commerce Solutions":
                        return "فروشگاه‌های آنلاین کامل با پردازش پرداخت امن و سیستم‌های مدیریت موجودی."
                      case "Web Applications":
                        return "اپلیکیشن‌های وب پیچیده با قابلیت‌های پیشرفته و تجربه‌های کاربری یکپارچه."
                      default:
                        return service.description
                    }
                  })()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              Unmatched Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-persian">
              ما فراتر از وب‌سایت‌ها، راه‌حل‌های جامعی ارائه می‌دهیم که نتایج واقعی برای کسب‌وکار شما به ارمغان می‌آورد
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-mono">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-persian">{(() => {
                    switch (benefit.title) {
                      case "Lightning Fast Performance":
                        return "کد بهینه‌سازی‌شده و فناوری‌های مدرن تضمین می‌کنند که وب‌سایت شما در کمتر از ۲ ثانیه بارگذاری شود."
                      case "Bank-Level Security":
                        return "اقدامات امنیتی پیشرفته با SSL، رمزگذاری و میزبانی امن از داده‌ها و کاربران شما محافظت می‌کند."
                      case "SEO Optimized":
                        return "بهترین شیوه‌های سئو داخلی به وب‌سایت شما کمک می‌کند تا در نتایج جستجو رتبه بالاتری کسب کند."
                      case "User-Centric Design":
                        return "رابط‌های کاربری بصری که با در نظر گرفتن کاربران شما برای حداکثر تعامل طراحی شده‌اند."
                      default:
                        return benefit.description
                    }
                  })()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
                About Kara Code
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
                Crafting Digital Excellence Since Day One
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed font-persian" dir="rtl">
                در کارا کد، ما به قدرت توسعه وب استثنایی برای تحول کسب‌وکارها ایمان داریم. تیم ما متشکل از توسعه‌دهندگان و طراحان ماهر، بی‌وقفه تلاش می‌کنند تا تجربیات دیجیتالی خلق کنند که نه‌تنها خیره‌کننده به نظر می‌رسند، بلکه نتایج واقعی به همراه دارند
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed font-persian" dir="rtl">
                با تخصص در جدیدترین فناوری‌ها و اشتیاق به نوآوری، ما راه‌حل‌های وبی ارائه می‌دهیم که فراتر از انتظارات عمل کرده و به مشتریان ما در دستیابی به اهداف دیجیتالشان کمک می‌کند
              </p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2 font-mono">150+</div>
                  <div className="text-sm text-gray-400 font-mono">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2 font-mono">100%</div>
                  <div className="text-sm text-gray-400 font-mono">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 font-mono">24/7</div>
                  <div className="text-sm text-gray-400 font-mono">Support Available</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-white/5 to-white/2 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 flex items-center gap-3 border border-blue-500/30">
                    <Users className="w-6 h-6 text-cyan-300" />
                    <div>
                      <div className="text-white font-semibold font-mono">Expert Team</div>
                      <div className="text-gray-400 text-sm font-mono">Skilled Developers</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 flex items-center gap-3 border border-purple-500/30">
                    <Award className="w-6 h-6 text-pink-300" />
                    <div>
                      <div className="text-white font-semibold font-mono">Quality First</div>
                      <div className="text-gray-400 text-sm font-mono">Premium Results</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 flex items-center gap-3 border border-green-500/30">
                    <Zap className="w-6 h-6 text-emerald-300" />
                    <div>
                      <div className="text-white font-semibold font-mono">Fast Delivery</div>
                      <div className="text-gray-400 text-sm font-mono">On-Time Projects</div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-lg p-4 flex items-center gap-3 border border-orange-500/30">
                    <CheckCircle className="w-6 h-6 text-orange-300" />
                    <div>
                      <div className="text-white font-semibold font-mono">Guaranteed</div>
                      <div className="text-gray-400 text-sm font-mono">100% Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Our Mission
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              Goals That Drive Us
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-persian">
              هر پروژه‌ای که ما بر عهده می‌گیریم با این اصول اصلی هدایت می‌شود که نتایج استثنایی را برای مشتریان ما تضمین می‌کند
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group overflow-hidden relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${goal.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <CardContent className="p-6 text-center relative z-10">
                  <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {goal.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 font-mono">{goal.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-persian">{(() => {
                    switch (goal.title) {
                      case "Drive Business Growth":
                        return "ایجاد راه‌حل‌های دیجیتالی که مستقیماً به موفقیت کسب‌وکار و رشد درآمد شما کمک می‌کنند."
                      case "Innovation First":
                        return "با فناوری‌های پیشرفته و رویکردهای خلاقانه برای حل مشکلات، همیشه یک قدم جلوتر باشید."
                      case "Long-term Partnerships":
                        return "ایجاد روابط پایدار با مشتریان از طریق خدمات استثنایی و پشتیبانی مداوم."
                      case "Pixel-Perfect Design":
                        return "ارائه وب‌سایت‌های بصری خیره‌کننده که برند شما را منعکس کرده و مخاطبان شما را مجذوب خود می‌کند."
                      default:
                        return goal.description
                    }
                  })()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Our Portfolio
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">Recent Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-persian">
              نمونه‌کارهای متنوع ما را که راه‌حل‌های وب نوآورانه در صنایع و نیازهای مختلف کسب‌وکار را به نمایش می‌گذارد، بررسی کنید.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-sm border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <Badge className={`mb-3 bg-gradient-to-r ${item.color} text-white border-0 font-mono`}>
                    {item.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-white mb-2 font-mono">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-persian">{(() => {
                    switch (item.title) {
                      case "E-commerce Platform":
                        return "پلتفرم تجارت الکترونیک مدرن با فیلترینگ پیشرفته و یکپارچه‌سازی پرداخت."
                      case "Corporate Website":
                        return "وب‌سایت شرکتی حرفه‌ای با سیستم مدیریت محتوا."
                      case "SaaS Dashboard":
                        return "داشبورد SaaS پیچیده با تحلیل‌های لحظه‌ای و مدیریت کاربران."
                      case "Restaurant Website":
                        return "وب‌سایت رستوران زیبا با سیستم سفارش آنلاین و رزرو."
                      case "Real Estate Platform":
                        return "پلتفرم جامع املاک با جستجوی پیشرفته ملک و تورهای مجازی."
                      case "Healthcare Portal":
                        return "پورتال بیماران با امکان رزرو نوبت، سوابق پزشکی و ویژگی‌های پزشکی از راه دور."
                      case "Educational Platform":
                        return "پلتفرم آموزش الکترونیکی تعاملی با مدیریت دوره‌ها و پیگیری پیشرفت."
                      case "News Agency":
                        return "یک وب سایت آژانس خبری مدرن با اخبار  روزانه ، رویداد های برجسته و محتوای چندرسانه ای."
                      case "Travel Booking Site":
                        return "پلتفرم کامل رزرو سفر با امکان رزرو پرواز، هتل و فعالیت‌ها."
                      default:
                        return item.description
                    }
                  })()}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-12 px-4 bg-black/50 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">Kara Code</h3>
            <p className="text-gray-400 font-mono">Crafting Digital Excellence</p>
          </div>
          <div className="text-gray-500 text-sm font-mono">© 2025 Kara Code. All rights reserved. | kara-code.ir</div>
        </div>
      </footer>
    </>
  )
}