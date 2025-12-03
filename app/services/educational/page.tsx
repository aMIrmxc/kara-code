import { Metadata } from "next";
import EducationalPageContent from "./educational-page-content";

export const metadata: Metadata = {
  title: "طراحی سایت آموزشی | پلتفرم‌های یادگیری آنلاین و وب‌سایت‌های آموزشی",
  description:
    "با خدمات طراحی سایت آموزشی ما، دانش و تخصص خود را به صورت آنلاین به اشتراک بگذارید. ما پلتفرم‌های یادگیری الکترونیکی (LMS) و وب‌سایت‌های آموزشی جذاب و کاربرپسند ایجاد می‌کنیم.",
};

export default function EducationalPage() {
  return <EducationalPageContent />;
}
