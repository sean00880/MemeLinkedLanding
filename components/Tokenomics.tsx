'use client';

import { PieChart, Flame, Users, Code, Shield } from 'lucide-react';

const tokenomics = [
  {
    label: 'Liquidity Pool',
    percentage: 90,
    color: 'bg-green-400',
    textColor: 'text-green-400',
    icon: Shield,
    description: 'Locked liquidity for secure trading',
  },
  {
    label: 'Team & Development',
    percentage: 5,
    color: 'bg-purple-400',
    textColor: 'text-purple-400',
    icon: Code,
    description: 'Platform development and maintenance',
  },
  {
    label: 'Marketing',
    percentage: 3,
    color: 'bg-yellow-400',
    textColor: 'text-yellow-400',
    icon: Users,
    description: 'Community growth and promotion',
  },
  {
    label: 'Burned',
    percentage: 2,
    color: 'bg-red-400',
    textColor: 'text-red-400',
    icon: Flame,
    description: 'Permanently removed from supply',
  },
];

const tokenDetails = [
  { label: 'Token Name', value: 'MemeLinked' },
  { label: 'Symbol', value: '$MK' },
  { label: 'Network', value: 'Ethereum' },
  { label: 'Total Supply', value: '1,000,000,000' },
  { label: 'Tax', value: '0% Buy / 4% Sell' },
  { label: 'LP Status', value: 'Locked 🔒' },
];

export default function Tokenomics() {
  return (
    <section id="tokenomics" className="min-h-screen py-20 relative flex flex-col justify-center">
      {/* Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-[var(--ml-green)] rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[var(--ml-purple)] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-[var(--ml-green)] mb-2 font-semibold">
            Token Distribution
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Tokenomics</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transparent and fair distribution designed for long-term growth and community value.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Distribution Chart */}
          <div className="glass-dark rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <PieChart className="w-6 h-6 text-[var(--ml-green)]" />
              <h3 className="text-xl font-semibold text-white">Distribution</h3>
            </div>

            <div className="space-y-4">
              {tokenomics.map((item) => (
                <TokenomicsBar key={item.label} item={item} />
              ))}
            </div>
          </div>

          {/* Token Details */}
          <div className="glass-dark rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">
              Token Details
            </h3>

            <div className="space-y-4">
              {tokenDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center justify-between py-3 border-b border-white/10 last:border-0"
                >
                  <span className="text-gray-400">{detail.label}</span>
                  <span className="text-white font-semibold">{detail.value}</span>
                </div>
              ))}
            </div>

            {/* Highlights */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-green-400/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-green-400">0%</p>
                <p className="text-xs text-gray-400">Buy Tax</p>
              </div>
              <div className="bg-purple-400/10 rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-purple-400">100%</p>
                <p className="text-xs text-gray-400">Community Owned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TokenomicsBar({ item }: { item: (typeof tokenomics)[0] }) {
  const Icon = item.icon;

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className={`w-4 h-4 ${item.textColor}`} />
          <span className="text-sm text-white">{item.label}</span>
        </div>
        <span className={`text-sm font-bold ${item.textColor}`}>
          {item.percentage}%
        </span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full ${item.color} rounded-full transition-all duration-1000 group-hover:opacity-80`}
          style={{ width: `${item.percentage}%` }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-1">{item.description}</p>
    </div>
  );
}
