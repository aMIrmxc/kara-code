"use client";

import { useState, useEffect, useRef } from "react";

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(null);
  const lastScrollY = useRef(0);
  const currentDirection = useRef<"down" | "up" | null>(null);

  useEffect(() => {
    // مقداردهی اولیه
    lastScrollY.current = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY.current ? "down" : "up";
      
      // فقط در صورتی که تغییر جهت بیش از ۵ پیکسل باشد و جهت واقعاً تغییر کرده باشد
      if (
        direction !== currentDirection.current &&
        (scrollY - lastScrollY.current > 5 || scrollY - lastScrollY.current < -5)
      ) {
        currentDirection.current = direction;
        setScrollDirection(direction);
      }
      lastScrollY.current = scrollY > 0 ? scrollY : 0;
    };

    // استفاده از passive: true برای بهبود پرفورمنس اسکرول
    window.addEventListener("scroll", updateScrollDirection, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, []); // آرایه خالی: لیسنر فقط یک بار ثبت می‌شود

  return scrollDirection;
}