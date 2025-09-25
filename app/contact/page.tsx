"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  ArrowLeft,
} from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    phone: "",
    projectInfo: "",
    websiteType: "",
    budget: "",
    timeline: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone || !formData.projectInfo || !formData.websiteType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Store form data in localStorage for the verification page
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    // Redirect to phone verification page
    window.location.href = "/verify-phone";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
      {/* Header */}
      <header className="py-6 px-4 border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-mono font-semibold">Back to Home</span>
          </Link>
          <h1 className="text-2xl font-bold text-white font-mono">Kara Code</h1>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-white/10 backdrop-blur-sm border-white/20 text-white font-mono">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance font-mono">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto text-pretty font-persian">
              بیایید درباره دیدگاه شما صحبت کنیم و با هم چیزی شگفت‌انگیز خلق
              کنیم. فرم زیر را پر کنید تا ظرف ۲۴ ساعت با شما تماس بگیریم.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2 font-mono">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 font-mono"
                      placeholder="+98 912 345 6789"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 font-mono">
                      Project Information *
                    </label>
                    <Textarea
                      value={formData.projectInfo}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectInfo: e.target.value,
                        })
                      }
                      className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 min-h-[100px] font-mono"
                      placeholder="Tell us about your project requirements..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 font-mono">
                      Website Type *
                    </label>
                    <Select
                      value={formData.websiteType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, websiteType: value })
                      }
                    >
                      <SelectTrigger className="bg-white/5 border-white/20 text-white font-mono">
                        <SelectValue placeholder="Select website type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">
                          Business Website
                        </SelectItem>
                        <SelectItem value="ecommerce">
                          E-commerce Store
                        </SelectItem>
                        <SelectItem value="projects">
                          Portfolio Website
                        </SelectItem>
                        <SelectItem value="webapp">Web Application</SelectItem>
                        <SelectItem value="blog">Blog/News Site</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 font-mono">
                      Budget Range
                    </label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) =>
                        setFormData({ ...formData, budget: value })
                      }
                    >
                      <SelectTrigger className="bg-white/5 border-white/20 text-white font-mono">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1000">Under $1,000</SelectItem>
                        <SelectItem value="1000-5000">
                          $1,000 - $5,000
                        </SelectItem>
                        <SelectItem value="5000-10000">
                          $5,000 - $10,000
                        </SelectItem>
                        <SelectItem value="10000-plus">$10,000+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2 font-mono">
                      Timeline Expectations
                    </label>
                    <Select
                      value={formData.timeline}
                      onValueChange={(value) =>
                        setFormData({ ...formData, timeline: value })
                      }
                    >
                      <SelectTrigger className="bg-white/5 border-white/20 text-white font-mono">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">ASAP</SelectItem>
                        <SelectItem value="1-month">Within 1 month</SelectItem>
                        <SelectItem value="2-3-months">2-3 months</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white border-0 py-6 text-lg font-semibold rounded-full shadow-2xl hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Message & Verify Phone
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold font-mono">
                        Phone
                      </h3>
                      <p className="text-gray-300 font-mono" dir="ltr">
                        +98 912 345 6789
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold font-mono">
                        Email
                      </h3>
                      <p className="text-gray-300 font-mono" dir="ltr">
                        info@kara-code.ir
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold font-mono">
                        Location
                      </h3>
                      <p className="text-gray-300 font-persian" dir="rtl">
                        تهران، ایران
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media Links */}
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 backdrop-blur-sm rounded-full bg-transparent transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 backdrop-blur-sm rounded-full bg-transparent transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-white/20 text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-purple-500 backdrop-blur-sm rounded-full bg-transparent transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-black/50 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-white mb-2 font-mono">
              Kara Code
            </h3>
            <p className="text-gray-400 font-mono">
              Crafting Digital Excellence
            </p>
          </div>
          <div className="text-gray-500 text-sm font-mono">
            © 2025 Kara Code. All rights reserved. | kara-code.ir
          </div>
        </div>
      </footer>
    </div>
  );
}
