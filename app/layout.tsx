import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { vazir, noto } from "@/lib/fonts"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kara Code - Premium Web Development Services",
  description:
    "Professional web development services in Iran. Custom websites, e-commerce solutions, and web applications built with cutting-edge technology.",
  generator: "Kara Code",
  keywords: "web development, Iran, custom websites, e-commerce, web applications, kara-code.ir",
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
        <Suspense fallback={null}>{children}</Suspense>
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
