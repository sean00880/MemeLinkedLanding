"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section
      className=" flex items-center justify-center min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/images/ML11.webp')", // Full-screen background pattern image
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // Fix the background image to avoid scrolling with the page
      }}
    >
      {/* Background Overlay to create a dark and subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-90"></div>

      {/* Main Content Container */}
      <div className="relative z-10 mt-20 md:mt-0 min-h-screen flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 md:px-12 space-y-8 md:space-y-0 md:space-x-8">
   

        {/* Right Column: Project Info + Socials */}
        <div
          className="project-info flex flex-col justify-center items-center p-8 bg-black/90 backdrop-blur-xl rounded-xl shadow-xl text-center w-full"
          style={{
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.6), inset 0px 1px 2px rgba(38, 35, 35, 0.38)", // Neumorphic shadow for the card
          }}
        >
          {/* Logo */}
          <Image
            src="/images/MLLogo.png"
            width={150}
            height={150}
            alt="MemeLinked Logo"
            className="mb-6 rounded-full animate-pulse"
          />

          {/* Title */}
          <h1 className="text-5xl font-extrabold mb-2">
          <span className="meme animate-glitch">Meme</span>
          <span className="animate-glitch2">LINKED</span>
        </h1>
          {/* Description */}
          <p className="text-gray-300 mb-4">
            A DeFi project on Ethereum,
            where memes meet social media.
          </p>

          {/* Contract Address */}
          <div className="mb-6">
            <div className="bg-white text-black px-4 py-2 rounded-lg text-md font-bold shadow-inner">
            0xb062444f2844ddc306533243d8f0a1f67e26fdb5
            </div>
            <p className="text-md text-gray-400 mt-2">Official Contract Address</p>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <Link href="https://x.com/memelinked">
              <Image
                src="/icons/x.png"
                width={50}
                height={50}
                alt="Twitter"
                className="socials border-2 border-purple-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://t.me/memelinkedportal">
              <Image
                src="/icons/telegram.png"
                width={50}
                height={50}
                alt="Telegram"
                className="socials border-2 border-green-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://www.dextools.io/app/en/ether/pair-explorer/0xb062444f2844ddc306533243d8f0a1f67e26fdb5?t=1738108551755">
              <Image
                src="/icons/dextools.png"
                width={50}
                height={50}
                alt="DexTools"
                className="socials border-2 border-purple-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://dexscreener.com/ethereum/0xb062444f2844ddc306533243d8f0a1f67e26fdb5">
              <Image
                src="/icons/dexscreener.png"
                width={50}
                height={50}
                alt="DexScreener"
                className="socials border-2 border-green-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://linktr.ee/memelinked">
              <Image
                src="/icons/linktree.png"
                width={50}
                height={50}
                alt="Linktree"
                className="socials border-2 border-purple-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://www.tickertrending.com/ticker/MK">
              <Image
                src="/icons/TickerTrending.jpg"
                width={50}
                height={50}
                alt="Linktree"
                className="socials border-2 border-purple-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
