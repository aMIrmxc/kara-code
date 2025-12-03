import { Metadata } from "next";
import BusinessPageContent from "./business-page-content";

export const metadata: Metadata = {
  title: "طراحی سایت شرکتی | خدمات تخصصی طراحی وب برای کسب و کارها",
  description:
    "با خدمات طراحی سایت شرکتی ما، کسب و کار خود را در دنیای دیجیتال به نمایش بگذارید. ما وب‌سایت‌های حرفه‌ای، مدرن و بهینه برای موتورهای جستجو طراحی می‌کنیم.",
};

export default function CorporateWebsitePage() {
  return <BusinessPageContent />;
}
