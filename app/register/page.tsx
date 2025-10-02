"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Mail, Lock, User } from "lucide-react";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const [title, setTitle] = useState("ایجاد حساب کاربری جدید");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const urlTitle = searchParams.get("title");
    if (urlTitle) {
      setTitle(urlTitle);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      // You can use a toast notification here to show the error
      alert("Passwords do not match!");
      return;
    }
    setIsLoading(true);
    // Add your registration logic here
    setTimeout(() => setIsLoading(false), 2000);
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

      {/* Register Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-200 font-noto-h2">{title}</p>
          </div>

          {/* Register Form Card */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="text-white font-medium flex items-center gap-2"
                >
                  <User className="w-4 h-4" />
                  <span className="font-persian">نام</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="نام خود را وارد کنید"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/60 focus:ring-white/20 backdrop-blur-sm"
                />
              </div>

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

              {/* Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="text-white font-medium flex items-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span className="font-persian">رمز عبور</span>
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 focus:border-white/60 focus:ring-white/20 backdrop-blur-sm"
                />
              </div>

              {/* Confirm Password Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="confirm-password"
                  className="text-white font-medium flex items-center gap-2"
                >
                  <Lock className="w-4 h-4" />
                  <span className="font-persian">تکرار رمز عبور</span>
                </Label>
                <Input
                  id="confirm-password"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
                  {isLoading ? "در حال ایجاد حساب..." : "ثبت نام"}
                </span>
              </Button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-gray-300 font-persian">
                  یا
                </span>
              </div>
            </div>

            {/* Sign up with google*/}
            <div>
              <Button
                type="button"
                size="lg"
                className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm px-8 py-6 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.2 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.02 0 5.58-1 7.44-2.71l-3.57-2.77c-1.01.68-2.3 1.08-3.87 1.08-2.98 0-5.5-2.01-6.4-4.72H1.06v2.86C2.97 20.26 7.08 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 13.95c-.22-.68-.35-1.4-.35-2.13s.13-1.45.35-2.13V7.83H1.06C.4 9.15 0 10.54 0 12s.4 2.85 1.06 4.17l3.5-2.86z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.6 0 3.03.55 4.15 1.47l3.1-3.1C17.58 1.42 15.03.5 12 .5 7.08.5 2.97 3.74 1.06 7.83l3.5 2.86c.9-2.71 3.42-4.72 6.4-4.72z"
                  />
                </svg>
                <span className="font-persian">ثبت نام با گوگل</span>
              </Button>
            </div>
            
            {/* Already have an account Link */}
            <div className="text-center mt-8">
              <Link
                href="/login"
                className="text-white/60 hover:text-white transition-colors font-persian"
              >
                قبلا ثبت نام کرده‌اید؟ وارد شوید
              </Link>
            </div>
          </div>
            {/* Back to Home Link */}
            <div className="text-center mt-8">
              <Link
                href="/"
                className="text-white/60 hover:text-white transition-colors font-persian"
              >
                بازگشت به صفحه اصلی
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
}