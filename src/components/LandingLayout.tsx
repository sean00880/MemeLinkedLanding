// src/components/LandingLayout.tsx
"use client";
import TopBar from './TopBar2';

const LandingLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {




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
