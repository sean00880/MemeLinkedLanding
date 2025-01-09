"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="topbar flex items-center justify-between px-4 py-3 shadow-lg relative z-50 bg-gradient-to-b from-black via-[#191919] to-black">
      {/* Hamburger Menu for Mobile */}
      <div className="flex md:hidden z-[60]">
        <button
          className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </button>
      </div>

      {/* Centered Logo Container */}
      <div className="flex-1 md:flex-none flex justify-center items-center">
        <Link href="/">
          <Image
            src="/images/LOGODARK.png"
            alt="Logo"
            width={240}
            height={40}
            className="glitch-effect"
          />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex justify-end items-center space-x-4 lg:space-x-6 text-white">
        <Link href="/#home" className="hover:text-purple-400 transition">
          Home
        </Link>
        <Link href="/#about" className="hover:text-purple-400 transition">
          About
        </Link>
        <Link href="/#utilities" className="hover:text-purple-400 transition">
          Utilities
        </Link>
        <Link href="/#tokenomics" className="hover:text-purple-400 transition">
          Tokenomics
        </Link>
        <Link href="/#roadmap" className="hover:text-purple-400 transition">
          Roadmap
        </Link>
        <Link href="/#resources" className="hover:text-purple-400 transition">
          Resources
        </Link>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black text-white p-4 shadow-lg rounded-lg z-40">
          <Link
            href="/#home"
            className="block px-4 py-2 hover:bg-purple-700 rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="block px-4 py-2 hover:bg-purple-700 rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/#utilities"
            className="block px-4 py-2 hover:bg-purple-700 rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Utilities
          </Link>
          <Link
            href="/#tokenomics"
            className="block px-4 py-2 hover:bg-purple-700 rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Tokenomics
          </Link>
          <Link
            href="/#roadmap"
            className="block px-4 py-2 hover:bg-purple-700 rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Roadmap
          </Link>
          <Link
            href="/#resources"
            className="block px-4 py-2 hover:bg-purple-700 rounded"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Resources
          </Link>
        </div>
      )}

      {/* Hamburger Button Styling */}
      <style jsx>{`
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: transparent;
          border: none;
          cursor: pointer;
          z-index: 60;
        }
        .line {
          width: 100%;
          height: 2px;
          background-color: #ffffff;
          transition: all 0.3s ease;
        }
        .hamburger.open .line:nth-child(1) {
          transform: rotate(45deg) translateY(6px);
        }
        .hamburger.open .line:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open .line:nth-child(3) {
          transform: rotate(-45deg) translateY(-6px);
        }
      `}</style>
    </div>
  );
}
