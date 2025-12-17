'use client';

import Image from 'next/image';
import Link from 'next/link';

const partners = [
  {
    name: 'Uniswap',
    logo: null, // Use text fallback
    href: 'https://app.uniswap.org/swap?outputCurrency=0xca76bf98b6e44df7360da8650e701f6d9d94bb58',
    emoji: '🦄',
  },
  {
    name: 'DexTools',
    logo: '/icons/dextools.png',
    href: 'https://www.dextools.io/app/en/ether/pair-explorer/0xb062444f2844ddc306533243d8f0a1f67e26fdb5',
  },
  {
    name: 'DexScreener',
    logo: '/icons/dexscreener.png',
    href: 'https://dexscreener.com/ethereum/0xb062444f2844ddc306533243d8f0a1f67e26fdb5',
  },
  {
    name: 'Etherscan',
    logo: '/icons/eth.png',
    href: 'https://etherscan.io/token/0xca76bf98b6e44df7360da8650e701f6d9d94bb58',
  },
  {
    name: 'CoinGecko',
    logo: null, // Use text fallback
    href: 'https://www.coingecko.com/en/coins/memelinked',
    emoji: '🦎',
  },
  {
    name: 'CMC',
    logo: null, // Use text fallback
    href: 'https://coinmarketcap.com/currencies/memelinked/',
    emoji: '📊',
  },
];

export default function LogoCloud() {
  return (
    <section className="py-12 glass-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-sm uppercase tracking-wider text-gray-400 mb-2">
            Trusted By
          </p>
          <h2 className="text-lg font-semibold text-white">
            Listed on Major Platforms
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {partners.map((partner) => (
            <Link
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-xl hover:bg-white/5 transition-all"
            >
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all flex items-center justify-center">
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                ) : (
                  <span className="text-3xl sm:text-4xl">
                    {'emoji' in partner ? partner.emoji : partner.name[0]}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400 text-center mt-2 group-hover:text-white transition-colors">
                {partner.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
