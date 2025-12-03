import type { Metadata } from "next";
import TravelBookingWebsitePageContent from "./travel-page-content";

export const metadata: Metadata = {
  title: "طراحی سایت گردشگری | وب‌سایت برای آژانس‌های مسافرتی و رزرو آنلاین",
  description:
    "با طراحی سایت گردشگری، خدمات سفر و تورهای خود را آنلاین عرضه کنید. ما وب‌سایت‌های حرفه‌ای برای آژانس‌های مسافرتی با قابلیت رزرو تور، هتل و بلیط طراحی می‌کنیم.",
};


export default function TravelBookingWebsitePage() {
        return <TravelBookingWebsitePageContent />;
    
}