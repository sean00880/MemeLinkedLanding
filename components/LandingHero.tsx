'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ethers } from 'ethers';
import CountUp from 'react-countup';
import {
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  Users,
  TrendingUp,
  MessageCircle,
  Wallet,
  Play,
} from 'lucide-react';

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

// Platform feature highlights
const platformFeatures = [
  { icon: MessageCircle, label: 'Social Feed', description: 'Posts, blogs, videos' },
  { icon: TrendingUp, label: 'Multi-Chain DEX', description: '47+ exchanges' },
  { icon: Users, label: 'Community', description: 'Groups & messaging' },
  { icon: Wallet, label: 'Portfolio', description: 'Track & analyze' },
];

export default function LandingHero() {
  const [totalSupply, setTotalSupply] = useState<string | null>(null);
  const [burnedSupply, setBurnedSupply] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Fetch supply data
  useEffect(() => {
    const fetchSupplyData = async () => {
      try {
        const provider = new ethers.JsonRpcProvider(
          `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY}`
        );
        const contract = new ethers.Contract(TOKEN_ADDRESS, TOKEN_ABI, provider);

        const [total, burned] = await Promise.all([
          contract.totalSupply(),
          contract.balanceOf(BURN_ADDRESS),
        ]);

        setTotalSupply(ethers.formatEther(total));
        setBurnedSupply(ethers.formatEther(burned));
      } catch (error) {
        console.error('Error fetching supply data:', error);
      }
    };

    fetchSupplyData();
    const interval = setInterval(fetchSupplyData, 60 * 60 * 1000); // Refresh hourly
    return () => clearInterval(interval);
  }, []);

  const circulatingSupply =
    totalSupply && burnedSupply
      ? (parseFloat(totalSupply) - parseFloat(burnedSupply)).toString()
      : null;

  const burnedPercentage =
    totalSupply && burnedSupply
      ? ((parseFloat(burnedSupply) / parseFloat(totalSupply)) * 100).toFixed(2)
      : null;

  const copyAddress = async () => {
    await navigator.clipboard.writeText(TOKEN_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 hero-bg"
      style={{
        backgroundImage: "url('/images/ML11.webp')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm text-gray-300">Platform Live on Ethereum</span>
            </div>

            {/* Logo - Mobile Only */}
            <div className="lg:hidden mb-6">
              <Image
                src="/images/MLLogo.png"
                alt="MemeLinked Logo"
                width={100}
                height={100}
                className="mx-auto rounded-full logo-pulse"
              />
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
              <span className="animate-glitch">Meme</span>
              <span className="animate-glitch2">LINKED</span>
            </h1>

            {/* Tagline - Platform Focused */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-xl mx-auto lg:mx-0">
              The Social Platform for{' '}
              <span className="gradient-text font-semibold">Crypto Natives</span>
            </p>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Create content, trade across 47+ DEXes, build communities, and track your portfolio.
              All powered by the $MK token ecosystem.
            </p>

            {/* Platform Feature Pills */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              {platformFeatures.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 border border-white/10"
                >
                  <feature.icon className="w-4 h-4 text-[var(--ml-green)]" />
                  <span className="text-sm text-white">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <Link
                href="https://memelinked.com"
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

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-4 stagger-fade">
              <SocialIcon
                href="https://x.com/memelinked"
                icon="/icons/x.png"
                label="Twitter"
                borderColor="border-purple-400"
              />
              <SocialIcon
                href="https://t.me/memelinkedportal"
                icon="/icons/telegram.png"
                label="Telegram"
                borderColor="border-green-400"
              />
              <SocialIcon
                href="https://www.dextools.io/app/en/ether/pair-explorer/0xb062444f2844ddc306533243d8f0a1f67e26fdb5"
                icon="/icons/dextools.png"
                label="DexTools"
                borderColor="border-purple-400"
              />
              <SocialIcon
                href="https://dexscreener.com/ethereum/0xb062444f2844ddc306533243d8f0a1f67e26fdb5"
                icon="/icons/dexscreener.png"
                label="DexScreener"
                borderColor="border-green-400"
              />
            </div>
          </div>

          {/* Right Column - Token Stats Card */}
          <div className="glass-dark rounded-2xl p-8 fade-in">
            {/* Logo - Desktop Only */}
            <div className="hidden lg:flex justify-center mb-6">
              <Image
                src="/images/MLLogo.png"
                alt="MemeLinked Logo"
                width={120}
                height={120}
                className="rounded-full logo-pulse"
              />
            </div>

            {/* $MK Token Section */}
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold text-white mb-2">$MK Token</h2>
              <p className="text-sm text-gray-400">The fuel powering the MemeLinked ecosystem</p>
            </div>

            {/* Token Contract */}
            <div className="mb-6">
              <p className="text-xs text-gray-400 mb-2 text-center">Contract Address</p>
              <div className="flex items-center justify-center gap-2">
                <code className="bg-black/50 text-white py-2 px-3 rounded-lg text-xs font-mono truncate max-w-[200px] sm:max-w-none">
                  {TOKEN_ADDRESS.slice(0, 10)}...{TOKEN_ADDRESS.slice(-8)}
                </code>
                <button
                  onClick={copyAddress}
                  className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  title="Copy address"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-green-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Token Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <StatCard
                label="Circulating Supply"
                value={circulatingSupply}
                color="text-green-400"
              />
              <StatCard
                label="Burned"
                value={burnedPercentage}
                color="text-red-400"
                suffix="%"
                isPercentage
              />
            </div>

            {/* Token Benefits */}
            <div className="space-y-2 mb-6">
              <TokenBenefit text="0% Buy / 4% Sell Tax" />
              <TokenBenefit text="Locked Liquidity" />
              <TokenBenefit text="Audited Smart Contract" />
              <TokenBenefit text="Platform Utility Token" />
            </div>

            {/* View Chart Link */}
            <Link
              href="https://www.dextools.io/app/en/ether/pair-explorer/0xb062444f2844ddc306533243d8f0a1f67e26fdb5"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-sm text-[var(--ml-green)] hover:text-white transition-colors"
            >
              View Live Chart
              <ExternalLink className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

// Stat Card Component
function StatCard({
  label,
  value,
  color,
  suffix = '',
  isPercentage = false,
}: {
  label: string;
  value: string | null;
  color: string;
  suffix?: string;
  isPercentage?: boolean;
}) {
  return (
    <div className="bg-white/5 rounded-xl p-4">
      <p className="text-xs text-gray-400 mb-1">{label}</p>
      <div className={`text-lg font-bold ${color}`}>
        {value ? (
          isPercentage ? (
            `${value}${suffix}`
          ) : (
            <>
              <CountUp
                start={0}
                end={Number(value)}
                decimals={0}
                duration={2.5}
                formattingFn={(v) => v.toLocaleString()}
              />
              {suffix && (
                <span className="text-xs text-gray-400 ml-1">{suffix.trim()}</span>
              )}
            </>
          )
        ) : (
          <span className="animate-pulse text-sm">Loading...</span>
        )}
      </div>
    </div>
  );
}

// Token Benefit Component
function TokenBenefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-300">
      <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
      {text}
    </div>
  );
}

// Social Icon Component
function SocialIcon({
  href,
  icon,
  label,
  borderColor,
}: {
  href: string;
  icon: string;
  label: string;
  borderColor: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social-icon border-2 ${borderColor} hover:scale-110 transition-transform p-1`}
    >
      <Image
        src={icon}
        alt={label}
        width={40}
        height={40}
        className="rounded-full"
      />
    </Link>
  );
}
