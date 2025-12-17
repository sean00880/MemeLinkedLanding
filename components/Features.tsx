'use client';

import { useState } from 'react';
import {
  Users,
  DollarSign,
  TrendingUp,
  Globe,
  Shield,
  MessageCircle,
  FileText,
  Video,
  Trophy,
  Wallet,
  PieChart,
  Sprout,
  Target,
  BarChart3,
  Search,
  Sparkles,
  Lock,
  Key,
} from 'lucide-react';

// Feature categories matching MEMELinked2 platform
const categories = [
  {
    id: 'social',
    title: 'Social Features',
    icon: Users,
    color: '#4285F4',
    gradient: 'from-blue-500 to-cyan-400',
    description: 'Create, share, and connect with the crypto community',
    features: [
      {
        icon: MessageCircle,
        title: 'Multi-Format Content',
        description: 'Share posts, blogs, videos, and memes all in one place',
      },
      {
        icon: FileText,
        title: 'Rich Profiles',
        description: 'Customizable profiles with portfolio showcase and achievements',
      },
      {
        icon: Trophy,
        title: 'Leaderboards',
        description: 'Compete and climb the ranks based on engagement and trading',
      },
      {
        icon: Video,
        title: 'Live Streaming',
        description: 'Stream your trading sessions and connect in real-time',
      },
    ],
  },
  {
    id: 'blockchain',
    title: 'Blockchain & Finance',
    icon: DollarSign,
    color: '#34A853',
    gradient: 'from-green-500 to-emerald-400',
    description: 'Trade, track, and grow your crypto portfolio',
    features: [
      {
        icon: Wallet,
        title: 'Multi-Chain DEX',
        description: 'Trade across 47+ DEXes on 8 chains with best execution',
      },
      {
        icon: PieChart,
        title: 'Portfolio Analytics',
        description: 'Real-time tracking with P&L, performance metrics, and alerts',
      },
      {
        icon: Sprout,
        title: 'Yield Farming',
        description: 'Stake $MK tokens and earn rewards from the ecosystem',
      },
      {
        icon: BarChart3,
        title: 'Advanced Charts',
        description: 'TradingView-powered charts with 100+ indicators',
      },
    ],
  },
  {
    id: 'trending',
    title: 'Trending & Advertising',
    icon: TrendingUp,
    color: '#EA4335',
    gradient: 'from-red-500 to-pink-400',
    description: 'Discover trending tokens and reach your audience',
    features: [
      {
        icon: Target,
        title: 'Smart Ad Targeting',
        description: 'Reach crypto-native audiences with precision targeting',
      },
      {
        icon: BarChart3,
        title: 'Viral Analytics',
        description: 'Track content performance and optimize for engagement',
      },
      {
        icon: TrendingUp,
        title: 'Trending Discovery',
        description: 'AI-powered trending feeds for tokens and content',
      },
      {
        icon: Sparkles,
        title: 'Creator Tools',
        description: 'Monetization tools for content creators and influencers',
      },
    ],
  },
  {
    id: 'networking',
    title: 'Global Networking',
    icon: Globe,
    color: '#00FFFF',
    gradient: 'from-cyan-400 to-blue-400',
    description: 'Connect with traders and enthusiasts worldwide',
    features: [
      {
        icon: Search,
        title: 'Smart Discovery',
        description: 'AI-powered suggestions for traders and content you\'ll love',
      },
      {
        icon: Users,
        title: 'Community Groups',
        description: 'Join or create communities around your favorite tokens',
      },
      {
        icon: MessageCircle,
        title: 'Direct Messaging',
        description: 'Encrypted P2P messaging with verified users',
      },
      {
        icon: Globe,
        title: 'Multi-Language',
        description: 'Auto-translation for global community interaction',
      },
    ],
  },
  {
    id: 'security',
    title: 'Security',
    icon: Shield,
    color: '#FBBC04',
    gradient: 'from-yellow-400 to-orange-400',
    description: 'Enterprise-grade security for your assets and data',
    features: [
      {
        icon: Lock,
        title: 'End-to-End Encryption',
        description: 'All messages and sensitive data are fully encrypted',
      },
      {
        icon: Key,
        title: 'Multi-Sig Wallets',
        description: 'Advanced wallet security with customizable thresholds',
      },
      {
        icon: Shield,
        title: 'Smart Contract Audits',
        description: 'All contracts audited by top security firms',
      },
      {
        icon: Users,
        title: 'Verified Profiles',
        description: 'KYC-optional verification for trusted interactions',
      },
    ],
  },
];

export default function Features() {
  const [activeCategory, setActiveCategory] = useState('social');
  const activeData = categories.find((c) => c.id === activeCategory) || categories[0];

  return (
    <section id="features" className="min-h-screen py-20 relative overflow-hidden flex flex-col justify-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--ml-purple)]/5 to-transparent" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-20 transition-all duration-700"
          style={{ backgroundColor: activeData.color }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-[var(--ml-green)] mb-2 font-semibold">
            Platform Features
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Thrive in Crypto</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            MemeLinked is the all-in-one social platform built for crypto natives.
            Create content, trade tokens, and connect with the community.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'text-gray-400 hover:text-white bg-white/5 hover:bg-white/10'
                }`}
                style={{
                  backgroundColor: isActive ? category.color : undefined,
                  boxShadow: isActive ? `0 4px 20px ${category.color}40` : undefined,
                }}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Category Content */}
        <div className="glass-dark rounded-2xl p-8 md:p-12">
          {/* Category Header */}
          <div className="text-center mb-10">
            <div
              className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${activeData.gradient} mb-4`}
            >
              <activeData.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{activeData.title}</h3>
            <p className="text-gray-400">{activeData.description}</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activeData.features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                feature={feature}
                index={index}
                color={activeData.color}
              />
            ))}
          </div>
        </div>

        {/* Platform Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <StatCard value="47+" label="DEXes Integrated" />
          <StatCard value="8" label="Chains Supported" />
          <StatCard value="196K+" label="Trading Pairs" />
          <StatCard value="0%" label="Platform Fees" />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  feature,
  index,
  color,
}: {
  feature: { icon: React.ElementType; title: string; description: string };
  index: number;
  color: string;
}) {
  const Icon = feature.icon;

  return (
    <div
      className="group p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <h4 className="text-white font-semibold mb-2 group-hover:text-[var(--ml-green)] transition-colors">
        {feature.title}
      </h4>
      <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="glass-dark rounded-xl p-4 text-center">
      <p className="text-2xl md:text-3xl font-bold gradient-text">{value}</p>
      <p className="text-xs text-gray-400 mt-1">{label}</p>
    </div>
  );
}
