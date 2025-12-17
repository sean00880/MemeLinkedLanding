'use client';

import Link from 'next/link';
import Image from 'next/image';

const footerLinks = {
  product: {
    title: 'Product',
    links: [
      { label: 'Launch App', href: '/' },
      { label: 'Features', href: '#features' },
      { label: 'Tokenomics', href: '#tokenomics' },
      { label: 'Roadmap', href: '#roadmap' },
    ],
  },
  resources: {
    title: 'Resources',
    links: [
      { label: 'Whitepaper', href: '#' },
      { label: 'Documentation', href: '#' },
      { label: 'Brand Kit', href: '#' },
      { label: 'Audit Report', href: '#' },
    ],
  },
  community: {
    title: 'Community',
    links: [
      { label: 'Twitter', href: 'https://x.com/memelinked', external: true },
      { label: 'Telegram', href: 'https://t.me/memelinkedportal', external: true },
      { label: 'Discord', href: '#', external: true },
      { label: 'Medium', href: '#', external: true },
    ],
  },
  legal: {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
};

const socialLinks = [
  { name: 'Twitter', href: 'https://x.com/memelinked', icon: '/icons/x.png' },
  { name: 'Telegram', href: 'https://t.me/memelinkedportal', icon: '/icons/telegram.png' },
  { name: 'DexTools', href: 'https://www.dextools.io/app/en/ether/pair-explorer/0xb062444f2844ddc306533243d8f0a1f67e26fdb5', icon: '/icons/dextools.png' },
  { name: 'DexScreener', href: 'https://dexscreener.com/ethereum/0xb062444f2844ddc306533243d8f0a1f67e26fdb5', icon: '/icons/dexscreener.png' },
];

export default function LandingFooter() {
  return (
    <footer id="resources" className="relative pt-16 pb-8 border-t border-white/10">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/landing" className="flex items-center gap-2 mb-4">
              <Image
                src="/images/MLLogo.png"
                alt="MemeLinked Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">
                <span className="text-white">Meme</span>
                <span className="text-[var(--ml-green)]">LINKED</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Where memes meet DeFi. A social media platform powered by $MK tokens.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="rounded-full"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-white mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      target={'external' in link && link.external ? '_blank' : undefined}
                      rel={'external' in link && link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} MemeLinked. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>Built on Ethereum</span>
              <span className="w-1 h-1 rounded-full bg-gray-600" />
              <span>Powered by Community</span>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 rounded-xl bg-white/5 border border-white/10">
          <p className="text-xs text-gray-500 text-center">
            <strong className="text-gray-400">Disclaimer:</strong> Cryptocurrency investments carry significant risks.
            The value of $MK tokens can fluctuate significantly. This is not financial advice.
            Always do your own research (DYOR) before investing.
          </p>
        </div>
      </div>
    </footer>
  );
}
