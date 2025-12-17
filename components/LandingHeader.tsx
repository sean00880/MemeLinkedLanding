'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#tokenomics', label: 'Tokenomics' },
  { href: '#roadmap', label: 'Roadmap' },
  { href: '#resources', label: 'Resources' },
];

const socialLinks = [
  { href: 'https://x.com/memelinked', icon: '/icons/x.png', label: 'Twitter' },
  { href: 'https://t.me/memelinkedportal', icon: '/icons/telegram.png', label: 'Telegram' },
];

export default function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`landing-nav transition-all duration-300 ${
        isScrolled ? 'py-2 shadow-lg' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/landing" className="flex items-center space-x-2">
            <Image
              src="/images/MLLogo.png"
              alt="MemeLinked Logo"
              width={48}
              height={48}
              className="logo-pulse rounded-full"
            />
            <span className="hidden sm:inline-block text-xl font-bold">
              <span className="meme-text text-white">Meme</span>
              <span className="linked-text text-[var(--ml-green)]">LINKED</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--ml-green)] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Social Icons + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.href}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-2 hover:scale-110 transition-transform"
              >
                <Image
                  src={social.icon}
                  alt={social.label}
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              </Link>
            ))}
            <Link
              href="https://memelinked.com"
              className="gradient-btn px-4 py-2 rounded-lg text-sm font-semibold text-white hover:shadow-lg transition-all"
            >
              Launch App
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4 fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-300 hover:text-white hover:bg-white/5 px-4 py-2 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center space-x-4 px-4 pt-4 border-t border-white/10">
                {socialLinks.map((social) => (
                  <Link
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon p-2"
                  >
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={28}
                      height={28}
                      className="rounded-full"
                    />
                  </Link>
                ))}
              </div>
              <Link
                href="https://memelinked.com"
                className="gradient-btn mx-4 py-3 rounded-lg text-center font-semibold text-white"
              >
                Launch App
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
