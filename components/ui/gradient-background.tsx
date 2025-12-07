import React from "react";
import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  children: React.ReactNode;
  className?: string;
  gradientColors?: string;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  className,
  gradientColors = "from-gray-900 via-purple-900 to-indigo-900",
}) => {
  return (
    <div
      className={cn(
        "min-h-screen bg-gradient-to-br",
        gradientColors,
        className
      )}
    >
      {children}
    </div>
  );
};
