import type { Metadata } from "next";
import PageContent from "./page-content";

export const metadata: Metadata = {
  title: "کارا کد - خدمات ویژه طراحی و توسعه وب",
  description:
    "کارا کد  پروژه‌های نرم‌افزاری استثنایی خلق می‌کند که باعث رشد کسب‌وکار شما می‌شود. ما با استفاده از فناوری‌های پیشرفته، وب‌سایت‌های سفارشی، پلتفرم‌های تجارت الکترونیک و اپلیکیشن‌های وب برای جذب مخاطبان شما می‌سازیم.",
  keywords:
    "طراحی وب، توسعه وب، وب‌سایت سفارشی، فروشگاه آنلاین، اپلیکیشن وب، کارا کد، خدمات وب، طراحی وب حرفه‌ای، توسعه وب در ایران",
  authors: [{ name: "تیم کارا کد", url: "https://kara-code.ir" }],
  creator: "کارا کد",
  publisher: "کارا کد",
  alternates: {
    canonical: "https://kara-code.ir",
    languages: {
      "fa-IR": "https://kara-code.ir",
      "en-US": "https://kara-code.ir/en",
    },
  },
  openGraph: {
    title: "کارا کد - خدمات ویژه طراحی و توسعه وب",
    description:
      "حضور دیجیتال خود را با خدمات تخصصی توسعه وب از کارا کد متحول کنید. ما در ساخت وب‌سایت‌ها و اپلیکیشن‌های با کارایی بالا و طراحی خیره‌کننده تخصص داریم.",
    url: "https://kara-code.ir",
    siteName: "کارا کد",
    images: [
      {
        url: "https://kara-code.ir/og-image-fa.png",
        width: 1200,
        height: 630,
        alt: "کارا کد - خدمات توسعه وب",
      },
    ],
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "کارا کد - خدمات ویژه طراحی و توسعه وب",
    description:
      "برند خود را با راهکارهای سفارشی کارا کد ارتقا دهید. خدمات توسعه وب، تجارت الکترونیک و اپلیکیشن‌های ما را برسی کنید.",
    creator: "@KaraCode",
    images: ["https://kara-code.ir/twitter-image-fa.png"],
  },
  robots: "index, follow",
};

export default function HomePage() {
  return <PageContent />;
}
