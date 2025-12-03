import { Metadata } from "next";
import CustomAppPageContent from "./custom-app-page-content";

export const metadata: Metadata = {
  title: "توسعه اپلیکیشن سفارشی | ساخت برنامه‌های اختصاصی برای نیازهای شما",
  description:
    "با خدمات توسعه اپلیکیشن سفارشی، ایده‌های خود را به واقعیت تبدیل کنید. ما برنامه‌های موبایل و دسکتاپ متناسب با نیازهای منحصر به فرد کسب و کار شما طراحی و پیاده‌سازی می‌کنیم.",
};

export default function CustomWebAppPage() {
  return <CustomAppPageContent />;
}
