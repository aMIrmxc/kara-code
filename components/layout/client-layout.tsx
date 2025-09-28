"use client"

import type React from "react"
import { usePageLoader } from "@/hooks/use-page-loader"
import { Preloader } from "@/components/ui/preloader"
import PageTransition from "@/components/layout/page-transition"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const isLoading = usePageLoader()

  return (
    <>
      <Preloader isLoading={isLoading} />
      <PageTransition>{children}</PageTransition>
    </>
  )
}