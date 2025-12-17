import { Suspense } from 'react';
import LandingHeader from '../components/LandingHeader';
import LandingHero from '../components/LandingHero';
import LogoCloud from '../components/LogoCloud';
import Features from '../components/Features';
import PlatformShowcase from '../components/PlatformShowcase';
import TokenStats from '../components/TokenStats';
import HowItWorks from '../components/HowItWorks';
import Tokenomics from '../components/Tokenomics';
import Roadmap from '../components/Roadmap';
import CallToAction from '../components/CallToAction';
import LandingFooter from '../components/LandingFooter';

/**
 * MemeLinked Landing Page
 *
 * Built with Next.js 16 + Tailwind 4 + Tailark-inspired components
 * Following the architectural plan from Serena memory
 *
 * This landing page showcases both the MemeLinked social platform (memelinked.com)
 * and the $MK token ecosystem (memelinked.io branding)
 */
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[hsl(var(--background))] text-[hsl(var(--foreground))]">
      {/* Navigation Header */}
      <LandingHeader />

      {/* Hero Section - Platform Focus with Token Card */}
      <LandingHero />

      {/* Logo Cloud - Partners & Listings */}
      <LogoCloud />

      {/* Platform Features - 5 Category Tabs */}
      <Features />

      {/* Platform Showcase - Interactive Demo */}
      <PlatformShowcase />

      {/* How It Works - Platform Journey */}
      <HowItWorks />

      {/* Live Token Statistics */}
      <Suspense fallback={<TokenStatsLoading />}>
        <TokenStats />
      </Suspense>

      {/* Tokenomics */}
      <Tokenomics />

      {/* Roadmap */}
      <Roadmap />

      {/* Call to Action */}
      <CallToAction />

      {/* Footer */}
      <LandingFooter />
    </main>
  );
}

// Loading fallback for token stats
function TokenStatsLoading() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="glass-dark rounded-xl p-6 animate-pulse"
            >
              <div className="h-4 bg-white/10 rounded mb-3 w-1/2" />
              <div className="h-8 bg-white/10 rounded w-3/4" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
