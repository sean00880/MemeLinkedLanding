"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black text-white py-12">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#191919] via-black to-transparent opacity-60 blur-2xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center space-y-8">
        {/* Logo and Slogan */}
        <div className="flex flex-col items-center text-center">
          <Image
            src="/images/LOGODARK.png" // Replace with your logo path
            alt="MemeLinked Logo"
            width={200}
            height={40}
            className="mb-4 h-auto"
          />
          <p className="text-gray-200 text-lg">
            Building the Future of Decentralized Innovation.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-6 w-full text-center">
          <div>
            <h3 className="text-xl font-bold mb-3 text-green-400">Menu</h3>
            <ul>
              <li className="mb-2 hover:text-white">
                <Link href="/#home">Home</Link>
              </li>
              <li className="mb-2 hover:text-white">
                <Link href="/#about">About</Link>
              </li>
              <li className="mb-2 hover:text-white">
                <Link href="/#tokenomics">Tokenomics</Link>
              </li>
              <li className="mb-2 hover:text-white">
                <Link href="/#roadmap">Roadmap</Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-xl font-bold mb-3 text-green-400">Legal</h3>
            <ul>
              <li className="mb-2 hover:text-white">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="mb-2 hover:text-white">
                <Link href="/terms-of-use">Terms of Use</Link>
              </li>

            </ul>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full max-w-4xl">
          <Image
            src="/images/Linked.png" // Replace with your banner image
            alt="MemeLinked Banner"
            width={1500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 text-center text-gray-100 border-t border-gray-200 pt-4">
        &copy; 2024 | $MEMELINKED | by PabloCRO |  All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
