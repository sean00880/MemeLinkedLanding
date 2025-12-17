'use client';

import {
  Wallet,
  ArrowRight,
  MessageSquare,
  TrendingUp,
  Users,
  Sparkles,
} from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Wallet,
    title: 'Sign Up or Connect',
    description:
      'Create an account with Google, Twitter, or connect your crypto wallet to get started instantly.',
    color: 'text-purple-400',
    bgColor: 'bg-purple-400/10',
    borderColor: 'border-purple-400',
    features: ['Google & Twitter OAuth', 'Multi-wallet support', 'No email required'],
  },
  {
    number: '02',
    icon: MessageSquare,
    title: 'Explore & Create',
    description:
      'Browse the social feed, discover trending tokens, and create posts, blogs, or videos.',
    color: 'text-blue-400',
    bgColor: 'bg-blue-400/10',
    borderColor: 'border-blue-400',
    features: ['Multi-format content', 'AI-powered discovery', 'Community groups'],
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Trade & Earn',
    description:
      'Trade across 47+ DEXes, track your portfolio, and earn rewards through engagement.',
    color: 'text-green-400',
    bgColor: 'bg-green-400/10',
    borderColor: 'border-green-400',
    features: ['Multi-chain DEX', 'Portfolio tracking', '$MK rewards'],
  },
  {
    number: '04',
    icon: Users,
    title: 'Build Your Network',
    description:
      'Follow traders, join token communities, and climb the leaderboards.',
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400/10',
    borderColor: 'border-yellow-400',
    features: ['Global networking', 'Verified profiles', 'Direct messaging'],
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--ml-purple)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--ml-green)]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-[var(--ml-green)] mb-2 font-semibold">
            Getting Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Your Journey on <span className="gradient-text">MemeLinked</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From signing up to building your crypto social presence—here&apos;s how to get the most out of the platform.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-purple-400 via-blue-400 via-green-400 to-yellow-400 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} isLast={index === steps.length - 1} />
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-4">Ready to join the crypto social revolution?</p>
          <a
            href="https://memelinked.com"
            className="inline-flex items-center gap-2 gradient-btn px-8 py-3 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-[var(--ml-green)]/20 transition-all group"
          >
            <Sparkles className="w-5 h-5" />
            Launch Platform
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof steps)[0];
  index: number;
  isLast: boolean;
}) {
  const Icon = step.icon;

  return (
    <div className="relative">
      <div
        className="glass-dark rounded-2xl p-6 text-center hover:border-white/20 transition-all group h-full"
      >
        {/* Step Number */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span
            className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${step.bgColor} ${step.color} border ${step.borderColor}`}
          >
            {step.number}
          </span>
        </div>

        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-full ${step.bgColor} flex items-center justify-center mx-auto mb-4 mt-4 group-hover:scale-110 transition-transform`}
        >
          <Icon className={`w-7 h-7 ${step.color}`} />
        </div>

        {/* Content */}
        <h3 className="text-lg font-semibold text-white mb-2">
          {step.title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {step.description}
        </p>

        {/* Feature List */}
        <div className="space-y-1">
          {step.features.map((feature) => (
            <div
              key={feature}
              className="text-xs text-gray-500 flex items-center justify-center gap-1"
            >
              <span className={`w-1 h-1 rounded-full ${step.bgColor.replace('/10', '')}`} />
              {feature}
            </div>
          ))}
        </div>
      </div>

      {/* Arrow (Mobile) */}
      {!isLast && (
        <div className="md:hidden flex justify-center py-4">
          <ArrowRight className="w-6 h-6 text-gray-600 rotate-90" />
        </div>
      )}
    </div>
  );
}
