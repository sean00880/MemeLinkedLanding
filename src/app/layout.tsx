"use client";

import React from "react";
import localFont from "next/font/local";
import "./globals.css";
import LandingLayout from "../components/LandingLayout";
import { usePathname } from "next/navigation";
import DocumentationLayout from "../components/DocumentationLayout";
import DocumentationLayout2 from "../components/DocumentationLayout2";

// Define local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const posts = [
  { title: "How BTCRT Integrates DeFi and Social Networking", href: "/blog/defi-social-networking" },
  { title: "GameFi’s Role in the BTCRT Ecosystem", href: "/blog/gamefi-role" },
  { title: "The Future of Meme-Driven Finance", href: "/blog/meme-finance-future" },
];




interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootContent({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const isLandingPage = pathname === "/";
  const isDocumentationPage = pathname.startsWith("/docs");
  const isBlogPage = pathname.startsWith("/blog");

  return (
    <html lang="en">
      <body>
        {isLandingPage && <>{children}</>}
        {isDocumentationPage && (
          <DocumentationLayout2 posts={posts}>{children}</DocumentationLayout2>
        )}
        {isBlogPage && (
          <DocumentationLayout posts={posts}>{children}</DocumentationLayout>
        )}
        {!isLandingPage && !isDocumentationPage && !isBlogPage && (
          <LandingLayout>{children}</LandingLayout>
        )}
      </body>
    </html>
  );
}