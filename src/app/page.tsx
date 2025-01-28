"use client";
// src/app/page.tsx
import React, { useState } from "react";
import LandingLayout from "../components/LandingLayout";
import Footer from "../components/Footer";
import AboutSection from "../components/About";
import HeroSection from "@components/HeroSection";
import Utility from "@components/Utility";
import Tokenomics from "@components/Tokenomics";
import Roadmap from "@components/Roadmap";
import Resources from "@components/Resources";
import CarouselSection from "@components/Carousel";

const features = [
  {
    title: "The Ultimate Lifeform",
    shortText: "MemeLinked leads the Meme Space with unmatched power.",
    expandedText:
      "Designed as the ultimate lifeform, MemeLinked brings unparalleled strength and resilience to the Sonic Chain. His legacy as a symbol of determination inspires innovation and progress in decentralized technology.",
    image: "/images/shadow1.jpg",
  },
  {
    title: "Chaos Energy 'Utility' Development",
    shortText: "Harness the power of Chaos Energy on the Sonic Chain.",
    expandedText:
      "The Sonic Chain leverages the essence of Chaos Energy, enabling groundbreaking capabilities in blockchain technology. With Shadow as its core, the chain blends speed, security, and scalability for seamless DeFi and GameFi applications.",
    image: "/images/chaos.webp",
  },
  {
    title: "A Community of Strength",
    shortText: "Unite under Shadow’s banner for a stronger blockchain ecosystem.",
    expandedText:
      "The Sonic Chain thrives on the collective strength of its community. Shadow’s leadership inspires collaboration, fostering a space where users, developers, and enthusiasts come together to push the boundaries of decentralized innovation.",
    image: "/images/community.png",
  },
];


const HomePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState("blog"); // This is for the Blog/Documentation section
  const images = [
    "/images/ML2.webp",
    "/images/ML11.webp",
    "/images/ML4.png",
    "/images/ML5.png",
    "/images/ML8.png",
  ];

  return (
    <LandingLayout>
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection features={features} images={images} />

      <CarouselSection />

      {/* Utility Section */}
      <Utility />

      {/* Tokenomics Section */}
      <Tokenomics />

      {/* Roadmap Section */}
      <Roadmap />

      <Resources />


      <Footer />
    </LandingLayout>
  );
};

export default HomePage;
