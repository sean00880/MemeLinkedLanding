"use client";
import React, { useState, useEffect } from 'react';
import TopBar from './TopBar2';
import Sidebar from './Sidebar2';
import Footer from './Footer';

interface DocumentationLayoutProps {
  children: React.ReactNode;
  posts: { title: string; href: string }[];
}

const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({ children, posts }) => {
  const [isDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar />
      <div className="flex flex-row">
        {/* Pass the posts prop to Sidebar */}
        <Sidebar posts={posts} />
        
        {/* Main content area */}
        <main className="bg-background text-foreground flex-grow p-4">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default DocumentationLayout;
