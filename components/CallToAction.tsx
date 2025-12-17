'use client';

import Link from 'next/link';
import { ArrowRight, ExternalLink, Play, Users, TrendingUp, MessageCircle } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--ml-purple)]/20 via-transparent to-[var(--ml-green)]/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--ml-green)]/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-sm text-gray-300">Platform Live Now</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Join the{' '}
          <span className="gradient-text">Crypto Social</span> Revolution?
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Connect with thousands of crypto traders, create content, trade across 47+ DEXes,
          and be part of the community reshaping social media.
        </p>

        {/* Platform Features */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
            <MessageCircle className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Social Feed</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
            <TrendingUp className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Multi-Chain DEX</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5">
            <Users className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-gray-300">Token Communities</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="gradient-btn px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 hover:shadow-lg hover:shadow-[var(--ml-green)]/20 transition-all group w-full sm:w-auto justify-center"
          >
            <Play className="w-5 h-5" />
            Launch Platform
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="https://app.uniswap.org/swap?outputCurrency=0xca76bf98b6e44df7360da8650e701f6d9d94bb58"
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-4 rounded-xl font-semibold text-white flex items-center gap-2 hover:bg-white/20 transition-all w-full sm:w-auto justify-center"
          >
            Buy $MK Token
            <ExternalLink className="w-5 h-5" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>47+ DEXes</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>8 Chains</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>0% Platform Fees</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
            <span>Community Driven</span>
          </div>
        </div>
      </div>
    </section>
  );
}
