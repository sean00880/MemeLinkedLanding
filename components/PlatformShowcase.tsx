'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MessageCircle,
  TrendingUp,
  Users,
  BarChart3,
  Play,
  ArrowRight,
} from 'lucide-react';

const showcaseFeatures = [
  {
    id: 'feed',
    title: 'Social Feed',
    description: 'Share posts, memes, and crypto insights with the community. Get likes, comments, and build your following.',
    icon: MessageCircle,
    color: '#4285F4',
    highlights: ['Multi-format posts', 'Real-time engagement', 'Trending algorithms'],
  },
  {
    id: 'dex',
    title: 'Multi-Chain DEX',
    description: 'Trade across 47+ decentralized exchanges on 8 chains. Advanced charts, real-time data, and best execution.',
    icon: TrendingUp,
    color: '#34A853',
    highlights: ['196K+ trading pairs', 'TradingView charts', 'Cross-chain swaps'],
  },
  {
    id: 'community',
    title: 'Token Communities',
    description: 'Join or create communities around your favorite tokens. Discuss strategies, share alpha, and grow together.',
    icon: Users,
    color: '#00FFFF',
    highlights: ['Token-gated groups', 'Voice channels', 'Event scheduling'],
  },
  {
    id: 'portfolio',
    title: 'Portfolio Tracker',
    description: 'Track all your holdings across wallets and chains. P&L analysis, performance metrics, and price alerts.',
    icon: BarChart3,
    color: '#FBBC04',
    highlights: ['Multi-wallet support', 'P&L tracking', 'Tax reports'],
  },
];

export default function PlatformShowcase() {
  const [activeFeature, setActiveFeature] = useState('feed');
  const active = showcaseFeatures.find((f) => f.id === activeFeature) || showcaseFeatures[0];

  return (
    <section className="min-h-screen py-20 relative overflow-hidden flex flex-col justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent" />
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-10 transition-all duration-700"
          style={{ backgroundColor: active.color }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-[var(--ml-green)] mb-2 font-semibold">
            Platform Preview
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            See MemeLinked in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore the features that make MemeLinked the ultimate social platform for crypto traders and enthusiasts.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Feature Selector */}
          <div className="space-y-4">
            {showcaseFeatures.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeFeature === feature.id;

              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-6 rounded-xl transition-all ${
                    isActive
                      ? 'glass-dark border-white/20'
                      : 'bg-white/5 hover:bg-white/10 border border-transparent'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${feature.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: feature.color }} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className={`text-sm ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                        {feature.description}
                      </p>
                      {isActive && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {feature.highlights.map((highlight) => (
                            <span
                              key={highlight}
                              className="text-xs px-2 py-1 rounded-full bg-white/10 text-gray-300"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Preview Card */}
          <div className="relative">
            <div className="glass-dark rounded-2xl p-8 aspect-[4/3] flex flex-col items-center justify-center">
              {/* Placeholder for platform screenshot/demo */}
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6"
                style={{ backgroundColor: `${active.color}20` }}
              >
                <active.icon className="w-10 h-10" style={{ color: active.color }} />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2">{active.title}</h3>
              <p className="text-gray-400 text-center mb-6 max-w-sm">
                {active.description}
              </p>

              {/* Feature Stats */}
              <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                {active.highlights.map((highlight, index) => (
                  <div
                    key={highlight}
                    className="text-center p-3 rounded-lg bg-white/5"
                  >
                    <p className="text-xs text-gray-400">{highlight}</p>
                  </div>
                ))}
              </div>

              {/* Try Now Button */}
              <Link
                href="https://memelinked.com"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-105"
                style={{ backgroundColor: active.color }}
              >
                <Play className="w-5 h-5" />
                Try {active.title}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Decorative Elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full blur-xl opacity-30"
              style={{ backgroundColor: active.color }}
            />
            <div
              className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full blur-xl opacity-20"
              style={{ backgroundColor: active.color }}
            />
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatItem value="47+" label="DEXes" />
          <StatItem value="8" label="Chains" />
          <StatItem value="196K+" label="Trading Pairs" />
          <StatItem value="24/7" label="Live Data" />
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center p-4 rounded-xl bg-white/5">
      <p className="text-2xl md:text-3xl font-bold gradient-text">{value}</p>
      <p className="text-sm text-gray-400">{label}</p>
    </div>
  );
}
