import { Metadata } from "next";
import RealEstatePlatformPageContent from "./property-page-content";

export const metadata: Metadata = {
  title: "طراحی سایت املاک | وب‌سایت‌های حرفه‌ای برای آژانس‌های املاک",
  description:
    "با طراحی سایت املاک، فایل‌های خود را به بهترین شکل به نمایش بگذارید. ما وب‌سایت‌های مدرن با قابلیت جستجوی پیشرفته و نمایش ملک برای آژانس‌های املاک طراحی می‌کنیم.",
};

export default function RealEstatePlatformPage(){
    return <RealEstatePlatformPageContent />;

}
