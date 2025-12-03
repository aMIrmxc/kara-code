import { Metadata } from "next";
import RestaurantWebsitePageContent from "./restaurant-page-content";

export const metadata: Metadata = {
  title: "طراحی سایت رستوران | وب‌سایت برای رستوران‌ها، کافه‌ها و فست‌فود",
  description:
    "با طراحی سایت رستوران، منوی خود را آنلاین کرده و سفارش آنلاین دریافت کنید. ما وب‌سایت‌های جذاب با گالری تصاویر، منوی دیجیتال و سیستم رزرو آنلاین برای رستوران‌ها طراحی می‌کنیم.",
};


export default function RestaurantWebsitePage() {
    return <RestaurantWebsitePageContent />;
}