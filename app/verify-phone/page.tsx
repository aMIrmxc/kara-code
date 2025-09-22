"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import { Phone, ArrowLeft, CheckCircle, Shield } from "lucide-react"
import Link from "next/link"

export default function VerifyPhonePage() {
  const [verificationCode, setVerificationCode] = useState("")
  const [isVerified, setIsVerified] = useState(false)
  const [formData, setFormData] = useState<any>(null)
  const { toast } = useToast()

  useEffect(() => {
    // Get form data from localStorage
    const storedData = localStorage.getItem("contactFormData")
    if (storedData) {
      setFormData(JSON.parse(storedData))
    }
  }, [])

  const handleVerification = (e: React.FormEvent) => {
    e.preventDefault()

    if (verificationCode.length !== 6) {
      toast({
        title: "Invalid Code",
        description: "Please enter a 6-digit verification code.",
        variant: "destructive",
      })
      return
    }

    // Simulate verification process
    setTimeout(() => {
      setIsVerified(true)
      toast({
        title: "Phone Verified Successfully!",
        description: "Thank you for verifying your phone number. We'll contact you soon.",
      })

      // Clear stored form data
      localStorage.removeItem("contactFormData")
    }, 1000)
  }

  const resendCode = () => {
    toast({
      title: "Verification Code Sent",
      description: "A new verification code has been sent to your phone.",
    })
  }

  if (isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
        <Card className="w-full max-w-md bg-white/5 backdrop-blur-sm border-white/10">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>

            <h1 className="text-2xl font-bold text-white mb-4">Verification Successful!</h1>

            <p className="text-gray-300 mb-6 leading-relaxed font-persian">
              از اینکه شماره تلفن خود را تأیید کردید سپاسگزاریم. تیم ما جزئیات پروژه شما را بررسی کرده و ظرف ۲۴ ساعت با شما تماس خواهد گرفت.
            </p>

            <div className="bg-white/5 rounded-lg p-4 mb-6">
              <h3 className="text-white font-semibold mb-2">Your Project Details:</h3>
              {formData && (
                <div className="text-sm text-gray-300 space-y-1 font-persian">
                  <p>
                    <strong>تلفن:</strong> {formData.phone}
                  </p>
                  <p>
                    <strong>نوع وب‌سایت:</strong> {formData.websiteType}
                  </p>
                  <p>
                    <strong>بودجه:</strong> {formData.budget || "مشخص نشده"}
                  </p>
                  <p>
                    <strong>زمان‌بندی:</strong> {formData.timeline || "مشخص نشده"}
                  </p>
                </div>
              )}
            </div>

            <Link href="/">
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 py-3 font-semibold rounded-full">
                Back to Homepage
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <Card className="w-full max-w-md bg-white/5 backdrop-blur-sm border-white/10 relative z-10">
        <CardHeader className="text-center pb-4">
          <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-cyan-400" />
          </div>

          <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white mx-auto">
            <Phone className="w-4 h-4 mr-2" />
            Phone Verification
          </Badge>

          <CardTitle className="text-2xl font-bold text-white">Verify Your Phone Number</CardTitle>

          <p className="text-gray-300 text-sm font-persian">
            ما یک کد تأیید ۶ رقمی به{" "}
            <span className="text-cyan-400 font-semibold">{formData?.phone || "شماره تلفن شما"}</span> ارسال کردیم.
          </p>
        </CardHeader>

        <CardContent className="p-6 pt-0">
          <form onSubmit={handleVerification} className="space-y-6">
            <div>
              <label className="block text-white font-medium mb-2">Verification Code</label>
              <Input
                type="text"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, "").slice(0, 6))}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 text-center text-2xl tracking-widest"
                placeholder="000000"
                maxLength={6}
                required
              />
              <p className="text-gray-400 text-xs mt-2 font-persian">کد ۶ رقمی ارسال شده به تلفن خود را وارد کنید</p>
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white border-0 py-3 font-semibold rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300"
              disabled={verificationCode.length !== 6}
            >
              Verify Phone Number
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm mb-3 font-persian">کد را دریافت نکردید؟</p>
            <Button
              variant="ghost"
              onClick={resendCode}
              className="text-cyan-400 hover:text-cyan-300 hover:bg-white/5 text-sm"
            >
              Resend Code
            </Button>
          </div>

          <div className="mt-6 pt-6 border-t border-white/10">
            <Link href="/">
              <Button variant="ghost" className="w-full text-gray-300 hover:text-white hover:bg-white/5">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Homepage
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
