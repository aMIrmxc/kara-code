"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Mail, ArrowLeft } from "lucide-react"; // Using ArrowLeft for back link

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500"></div>
        <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
      </div>

      {/* Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-200 font-noto-h2">
              فراموشی رمز عبور
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
            {isSent ? (
              <div className="text-center text-white font-persian">
                <h3 className="text-xl font-bold mb-4">لینک ارسال شد</h3>
                <p className="text-gray-300">
                  اگر ایمیل شما در سیستم ما موجود باشد، لینکی برای بازنشانی رمز عبور دریافت خواهید کرد.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-white font-medium flex items-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span className="font-persian">ایمیل</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/60 focus:ring-white/20 backdrop-blur-sm"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 border-0 px-8 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <span className=" font-bold font-persian">
                    {isLoading ? "در حال ارسال..." : "ارسال لینک بازنشانی"}
                  </span>
                </Button>
              </form>
            )}
          </div>

          {/* Back to Login Link */}
          <div className="text-center mt-8">
            <Link
              href="/login"
              className="text-white/60 hover:text-white transition-colors font-persian flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>بازگشت به صفحه ورود</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}