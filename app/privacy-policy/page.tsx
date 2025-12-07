"use client";

import {
  Shield,
  FileText,
  Users,
  Server,
  Lock,
  HelpCircle,
} from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-gray-900 text-gray-100 font-persian" dir="rtl">
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="space-y-12">
          <header className="text-center border-b border-gray-700 pb-8">
            <div className="inline-block bg-gray-800 p-4 rounded-full mb-4">
              <Shield className="w-12 h-12 text-purple-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight font-noto-kufi">
              سیاست حفظ حریم خصوصی
            </h1>
          </header>

          <section>
            <p className="text-lg leading-relaxed text-gray-300">
              ما یک شرکت توسعه نرم‌افزار با تمرکز بر ایجاد راه‌حل‌های نرم‌افزاری
              با کیفیت بالا و کارآمد هستیم. ما متعهد به حفاظت از حریم خصوصی شما
              و مدیریت داده‌های شخصی شما به صورت باز و شفاف هستیم. این سیاست حفظ
              حریم خصوصی توضیح می‌دهد که چگونه اطلاعات شما را هنگام بازدید از
              وب‌سایت ما جمع‌آوری، استفاده، و حفاظت می‌کنیم.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <FileText className="w-8 h-8 text-purple-400" />
              اطلاعاتی که جمع‌آوری می‌کنیم
            </h2>
            <div className="space-y-6 text-gray-300 pl-4 border-r-4 border-purple-500 px-4">
              <p>
                <strong>داده‌های شخصی:</strong> اطلاعات قابل شناسایی شخصی، مانند
                نام، آدرس ایمیل، شماره تلفن، و اطلاعات دموگرافیک که به صورت
                داوطلبانه ارائه می‌دهید.
              </p>
              <p>
                <strong>داده‌های مشتق شده:</strong> اطلاعاتی که سرورهای ما به
                طور خودکار جمع‌آوری می‌کنند، مانند آدرس IP، نوع مرورگر و
                سیستم‌عامل.
              </p>
              <p>
                <strong>داده‌های مالی:</strong> اطلاعات مربوط به روش پرداخت شما
                (مانند شماره کارت اعتباری) که هنگام خرید یا سفارش خدمات جمع‌آوری
                می‌شود.
              </p>
              <p>
                <strong>داده‌های از مسابقات و نظرسنجی‌ها:</strong> اطلاعاتی که
                هنگام شرکت در فعالیت‌های تبلیغاتی ارائه می‌دهید.
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Users className="w-8 h-8 text-purple-400" />
              چگونه از اطلاعات شما استفاده می‌کنیم
            </h2>
            <p className="text-gray-300">
              داشتن اطلاعات دقیق در مورد شما به ما این امکان را می‌دهد که
              تجربه‌ای روان، کارآمد و سفارشی را برای شما فراهم کنیم. موارد اصلی
              استفاده از اطلاعات شما عبارتند از:
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300 pl-4">
              <li>ایجاد و مدیریت حساب کاربری شما.</li>
              <li>پردازش پرداخت‌ها و انجام تراکنش‌ها.</li>
              <li>ارسال ایمیل‌های مرتبط با حساب کاربری و سفارشات.</li>
              <li>ارائه تبلیغات هدفمند و خبرنامه‌ها.</li>
              <li>بهبود کارایی و عملکرد سایت.</li>
              <li>نظارت و تحلیل روندها برای بهبود تجربه کاربری.</li>
              <li>پاسخ به درخواست‌های پشتیبانی و حل مشکلات.</li>
            </ul>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Server className="w-8 h-8 text-purple-400" />
              اشتراک‌گذاری اطلاعات
            </h2>
            <p className="text-gray-300">
              ما ممکن است اطلاعات شما را در شرایط خاصی به اشتراک بگذاریم:
            </p>
            <div className="space-y-4 text-gray-300">
              <p>
                <strong>بر اساس قانون:</strong> در صورت لزوم برای پاسخ به
                فرآیندهای قانونی یا حفاظت از حقوق.
              </p>
              <p>
                <strong>ارائه‌دهندگان خدمات شخص ثالث:</strong> با شرکت‌هایی که
                خدماتی مانند پردازش پرداخت و تحلیل داده را برای ما انجام
                می‌دهند.
              </p>
              <p>
                <strong>ارتباطات بازاریابی:</strong> با رضایت شما، برای اهداف
                بازاریابی.
              </p>
              <p>
                <strong>شرکای تجاری و وابستگان:</strong> برای ارائه محصولات و
                خدمات مرتبط.
              </p>
            </div>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <Lock className="w-8 h-8 text-purple-400" />
              امنیت و نگهداری داده‌ها
            </h2>
            <p className="text-gray-300 leading-relaxed">
              ما از اقدامات امنیتی اداری، فنی و فیزیکی برای محافظت از اطلاعات
              شخصی شما استفاده می‌کنیم. با این حال، هیچ اقدام امنیتی کامل و ۱۰۰٪
              ایمن نیست. ما اطلاعات شما را فقط تا زمانی که برای اهداف این سیاست
              ضروری باشد یا قانون اجازه دهد، نگهداری خواهیم کرد.
            </p>
          </section>

          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-purple-400" />
              حقوق و انتخاب‌های شما
            </h2>
            <p className="text-gray-300 leading-relaxed">
              شما می‌توانید در هر زمان اطلاعات حساب خود را بررسی، تغییر یا حذف
              کنید. همچنین می‌توانید از دریافت ایمیل‌ها و ارتباطات بازاریابی ما
              انصراف دهید. برای این کار، وارد تنظیمات حساب خود شوید یا با ما
              تماس بگیرید.
            </p>
          </section>

          <section className="text-center pt-8 mt-12">
            <h2 className="text-3xl font-bold text-white">تماس با ما</h2>
            <p className="mt-4 text-lg text-gray-400">
              اگر در مورد این سیاست حفظ حریم خصوصی سؤال یا نظری دارید، لطفاً با
              با ما تماس بگیرید:
            </p>
            <div className="mt-6 space-y-2">
              <p className="text-purple-400 hover:text-purple-300 transition-colors">
                <a href="mailto:contact@kara-code.ir">contact@kara-code.ir</a>
              </p>
              <p>
                <a
                  href="https://wa.me/00989395008603"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  واتس‌اپ
                </a>
                {" | "}
                <a
                  href="https://t.me/KaraCodeir"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  تلگرام
                </a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicyPage;
