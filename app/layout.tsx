import { Metadata } from 'next';
import { LandingThemeProvider } from '../context/LandingThemeProvider';
import '../landing.css';

export const metadata: Metadata = {
  title: 'MemeLinked - Where Memes Meet DeFi | Social Media & Trading Platform',
  description: 'MemeLinked is a DeFi project on Ethereum where memes meet social media. Trade, stake, and connect with the community.',
  keywords: ['MemeLinked', 'DeFi', 'Ethereum', 'Meme Token', 'Social Media', 'DEX', 'Trading'],
  openGraph: {
    title: 'MemeLinked - Where Memes Meet DeFi',
    description: 'A DeFi project on Ethereum where memes meet social media.',
    type: 'website',
    url: 'https://memelinked.com',
    images: [
      {
        url: '/images/MLLogo.png',
        width: 1200,
        height: 630,
        alt: 'MemeLinked Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MemeLinked - Where Memes Meet DeFi',
    description: 'A DeFi project on Ethereum where memes meet social media.',
    images: ['/images/MLLogo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <LandingThemeProvider defaultTheme="dark">
          {children}
        </LandingThemeProvider>
      </body>
    </html>
  );
}
