import { Metadata } from "next";
import NewsPageContent from "./news-page-content";

export const metadata: Metadata = {
  title: "طراحی سایت خبری | پورتال‌های خبری و وب‌سایت‌های اطلاع‌رسانی",
  description:
    "با خدمات طراحی سایت خبری، اخبار و محتوای خود را به سرعت منتشر کنید. ما پلتفرم‌های خبری مدرن، سریع و با قابلیت مدیریت آسان برای خبرگزاری‌ها و رسانه‌ها طراحی می‌کنیم.",
};

export default function NewsPage() {
  return <NewsPageContent />;
}
