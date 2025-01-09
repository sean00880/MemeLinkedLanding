"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection: React.FC = () => {
  return (
    <section
      className=" flex items-center justify-center h-screen bg-cover bg-center relative"
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
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl px-6 md:px-12 space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Column: Presale Widget */}
        <div
          className="presale-widget flex flex-col justify-center items-center p-8 bg-white/90 backdrop-blur-lg rounded-xl shadow-xl text-center w-full md:w-1/2"
          style={{
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.6), inset 0px 1px 2px rgba(255, 255, 255, 0.1)", // Neumorphic shadow for the card
          }}
        >
          {/* Title */}
          <h2 className="text-3xl mb-4 text-black">
            Join the Presale
          </h2>
          {/* Description */}
          <p className="text-black mb-6 text-lg">
            Be part of the revolution. Buy MemeLinked tokens and shape the
            future!
          </p>
          {/* Button */}
          <button
            className="px-8 py-3 bg-gradient-to-r from-green-400 to-purple-500 text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
          >
            Buy Now
          </button>
        </div>

        {/* Right Column: Project Info + Socials */}
        <div
          className="project-info flex flex-col justify-center items-center p-8 bg-black/90 backdrop-blur-xl rounded-xl shadow-xl text-center w-full md:w-1/2"
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
            A DeFi project on Ethereum, part of the Monkey Sol Inu ecosystem,
            where memes meet social media.
          </p>

          {/* Contract Address */}
          <div className="mb-6">
            <div className="bg-white text-black px-4 py-2 rounded-lg font-mono text-md font-bold shadow-inner">
              0xMemeLinkedContractAddress
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
            <Link href="https://t.me/memelinked">
              <Image
                src="/icons/telegram.png"
                width={50}
                height={50}
                alt="Telegram"
                className="socials border-2 border-green-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://www.dextools.io/app/en/ether/pair-explorer/memelinked">
              <Image
                src="/icons/dextools.png"
                width={50}
                height={50}
                alt="DexTools"
                className="socials border-2 border-purple-400 hover:scale-110 hover:drop-shadow-lg transition-transform rounded-full"
              />
            </Link>
            <Link href="https://dexscreener.com/ethereum/memelinked">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
