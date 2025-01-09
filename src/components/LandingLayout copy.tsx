// src/components/LandingLayout.tsx
"use client";
import React, { useState, useEffect } from 'react';
import TopBar from './TopBar2';

const LandingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <main className="w-full bg-background text-foreground">
        {children}
      </main>
    </div>
  );
};

export default LandingLayout;
