'use client';

import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import CountUp from 'react-countup';
import { TrendingUp, TrendingDown, DollarSign, Flame, Coins, Users } from 'lucide-react';

const TOKEN_ADDRESS = '0xca76bf98b6e44df7360da8650e701f6d9d94bb58';
const BURN_ADDRESS = '0x000000000000000000000000000000000000dead';

const TOKEN_ABI = [
  {
    constant: true,
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', type: 'uint256' }],
    type: 'function',
  },
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function',
  },
];

interface TokenData {
  totalSupply: string | null;
  burnedSupply: string | null;
  circulatingSupply: string | null;
  burnedPercentage: string | null;
  holders: number | null;
  priceChange24h: number | null;
}

export default function TokenStats() {
  const [data, setData] = useState<TokenData>({
    totalSupply: null,
    burnedSupply: null,
    circulatingSupply: null,
    burnedPercentage: null,
    holders: null,
    priceChange24h: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const provider = new ethers.JsonRpcProvider(
          `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`
        );
        const contract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);

        const [total, burned] = await Promise.all([
          contract.totalSupply(),
          contract.balanceOf(BURN_ADDRESS),
        ]);

        const totalStr = ethers.formatEther(total);
        const burnedStr = ethers.formatEther(burned);
        const circulating = (parseFloat(totalStr) - parseFloat(burnedStr)).toString();
        const burnedPercent = ((parseFloat(burnedStr) / parseFloat(totalStr)) * 100).toFixed(2);

        setData({
          totalSupply: totalStr,
          burnedSupply: burnedStr,
          circulatingSupply: circulating,
          burnedPercentage: burnedPercent,
          holders: 1250, // Placeholder - would need API
          priceChange24h: 5.24, // Placeholder - would need price API
        });
      } catch (error) {
        console.error('Error fetching token data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60 * 1000); // Refresh every minute
    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      label: 'Total Supply',
      value: data.totalSupply,
      icon: Coins,
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      suffix: '',
    },
    {
      label: 'Circulating Supply',
      value: data.circulatingSupply,
      icon: DollarSign,
      color: 'text-green-400',
      bgColor: 'bg-green-400/10',
      suffix: '',
    },
    {
      label: 'Burned',
      value: data.burnedSupply,
      icon: Flame,
      color: 'text-red-400',
      bgColor: 'bg-red-400/10',
      suffix: '',
    },
    {
      label: 'Burned %',
      value: data.burnedPercentage,
      icon: TrendingUp,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
      suffix: '%',
      isPercentage: true,
    },
  ];

  return (
    <section id="about" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wider text-[var(--ml-green)] mb-2 font-semibold">
            Live Data
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Token <span className="gradient-text">Statistics</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real-time on-chain data fetched directly from the Ethereum blockchain.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-dark rounded-xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-purple-400/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Holders</p>
                <p className="text-2xl font-bold text-white">
                  {data.holders ? data.holders.toLocaleString() : '...'}+
                </p>
              </div>
            </div>
          </div>

          <div className="glass-dark rounded-xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg ${(data.priceChange24h ?? 0) >= 0 ? 'bg-green-400/10' : 'bg-red-400/10'} flex items-center justify-center`}>
                {(data.priceChange24h ?? 0) >= 0 ? (
                  <TrendingUp className="w-6 h-6 text-green-400" />
                ) : (
                  <TrendingDown className="w-6 h-6 text-red-400" />
                )}
              </div>
              <div>
                <p className="text-sm text-gray-400">24h Change</p>
                <p className={`text-2xl font-bold ${(data.priceChange24h ?? 0) >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {(data.priceChange24h ?? 0) >= 0 ? '+' : ''}{data.priceChange24h ?? '...'}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
}: {
  stat: {
    label: string;
    value: string | null;
    icon: React.ElementType;
    color: string;
    bgColor: string;
    suffix: string;
    isPercentage?: boolean;
  };
  index: number;
}) {
  const Icon = stat.icon;

  return (
    <div
      className="glass-dark rounded-xl p-6 fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${stat.color}`} />
        </div>
        <p className="text-sm text-gray-400">{stat.label}</p>
      </div>
      <div className={`text-2xl font-bold ${stat.color}`}>
        {stat.value ? (
          stat.isPercentage ? (
            `${stat.value}${stat.suffix}`
          ) : (
            <>
              <CountUp
                start={0}
                end={Number(stat.value)}
                decimals={2}
                duration={2.5}
                formattingFn={(v) => v.toLocaleString()}
              />
              {stat.suffix && <span className="text-sm text-gray-400 ml-1">{stat.suffix}</span>}
            </>
          )
        ) : (
          <span className="animate-pulse">Loading...</span>
        )}
      </div>
    </div>
  );
}
