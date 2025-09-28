import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { vazir, noto } from "@/lib/fonts"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import ClientLayout from "@/components/layout/client-layout"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kara Code - Premium Web Development Services",
  description:
    "Professional web development services in Iran. Custom websites, e-commerce solutions, and web applications built with cutting-edge technology.",
  generator: "Kara Code",
  keywords: "web development, Iran, custom websites, e-commerce, web applications, kara-code.ir",
  icons: {
    icon: "/logos/ck-w-circle.png",
    shortcut: "/logos/ck-w-circle.png",
    apple: "/logos/ck-w-circle.png",
  },
  openGraph: {
    images: [
      {
        url: "/logos/ck-w-circle.png",
        width: 600,
        height: 600,
        alt: "Kara Code Logo",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body 
        className={`font-mono ${GeistSans.variable} ${GeistMono.variable} ${vazir.variable} ${noto.variable}`}
      >
        <Suspense fallback={null}>
          <ClientLayout>{children}</ClientLayout>
        </Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
