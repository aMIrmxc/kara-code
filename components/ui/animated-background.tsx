import React from "react";

export const AnimatedHeroBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900">
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-green-600 to-emerald-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-yellow-600 to-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-500"></div>
      <div className="absolute top-20 left-20 w-60 h-60 bg-gradient-to-r from-pink-600 to-purple-700 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
    </div>
    {children}
  </div>
);
