import { Metadata } from "next";
import MedicalPageContent from "./medical-page-content";

export const metadata: Metadata = {
  title: "طراحی سایت پزشکی | وب‌سایت برای پزشکان، کلینیک‌ها و بیمارستان‌ها",
  description:
    "با خدمات طراحی سایت پزشکی، حضور آنلاین خود را در حوزه سلامت تقویت کنید. ما وب‌سایت‌های حرفه‌ای برای پزشکان، کلینیک‌ها و مراکز درمانی با رعایت استانداردهای امنیتی طراحی می‌کنیم.",
};

export default function MedicalPage() {
  return <MedicalPageContent />;
}
