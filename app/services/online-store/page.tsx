import { Metadata } from "next";
import EcommercePlatformPageContent from "./online-store-page-content";

export const metadata: Metadata = {
  title: "طراحی سایت فروشگاهی | ساخت فروشگاه اینترنتی حرفه‌ای و مدرن",
  description:
    "با خدمات طراحی سایت فروشگاهی، محصولات خود را به صورت آنلاین بفروشید. ما فروشگاه‌های اینترنتی با طراحی جذاب، مدیریت آسان و درگاه پرداخت امن ایجاد می‌کنیم.",
};


export default function EcommercePlatformPage() {
  return <EcommercePlatformPageContent />;
}
