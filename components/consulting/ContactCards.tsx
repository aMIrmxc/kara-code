"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock } from "lucide-react";

const ContactCards = () => {
  return (
    <div className="mt-12 grid md:grid-cols-3 gap-6">
      <Card
        dir="ltr"
        className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 mx-4 sm:mx-1"
      >
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white font-semibold mb-2 font-mono">
            تماس تلفنی
          </h3>
          <p className="text-gray-300 text-sm mb-2 font-persian">
            با ما تماس بگیرید
          </p>
          <a
            href="tel:+989395008603"
            className="text-purple-400 hover:text-purple-300 font-mono"
          >
            0939-500-8603
          </a>
        </CardContent>
      </Card>

      <Card
        dir="ltr"
        className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 mx-4 sm:mx-1"
      >
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white font-semibold mb-2 font-mono">ایمیل</h3>
          <p className="text-gray-300 text-sm mb-2 font-persian">
            برای ما ایمیل بفرستید
          </p>
          <a
            href="mailto:contact@kara-code.ir"
            className="text-blue-400 hover:text-blue-300 font-mono"
          >
            contact@kara-code.ir
          </a>
        </CardContent>
      </Card>

      <Card
        dir="ltr"
        className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 mx-4 sm:mx-1"
      >
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-white font-semibold mb-2 font-mono">
            ساعات کاری
          </h3>
          <p className="text-gray-300 text-sm font-persian">شنبه تا پنجشنبه</p>
          <p className="text-green-400 font-mono">9:00 - 18:00</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactCards;
