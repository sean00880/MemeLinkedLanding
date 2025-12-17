'use client';

import { Check, Clock, Rocket, Star } from 'lucide-react';

type PhaseStatus = 'completed' | 'in-progress' | 'upcoming';

interface RoadmapPhase {
  phase: string;
  title: string;
  status: PhaseStatus;
  items: string[];
  color: string;
  bgColor: string;
}

const roadmapData: RoadmapPhase[] = [
  {
    phase: 'Phase 1',
    title: 'Launch',
    status: 'completed',
    items: [
      'Token launch on Uniswap',
      'Website launch',
      'Social media presence',
      'Community building',
      'CoinGecko & CMC listing',
    ],
    color: 'text-green-400',
    bgColor: 'bg-green-400',
  },
  {
    phase: 'Phase 2',
    title: 'Growth',
    status: 'completed',
    items: [
      'Audit completion',
      'Marketing campaign',
      'Partnership announcements',
      'DEX aggregator listings',
      '1000+ holders milestone',
    ],
    color: 'text-green-400',
    bgColor: 'bg-green-400',
  },
  {
    phase: 'Phase 3',
    title: 'Development',
    status: 'in-progress',
    items: [
      'Social media platform beta',
      'Staking mechanism',
      'Mobile app development',
      'NFT integration',
      'Governance launch',
    ],
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-400',
  },
  {
    phase: 'Phase 4',
    title: 'Expansion',
    status: 'upcoming',
    items: [
      'CEX listings',
      'Cross-chain bridges',
      'Advanced DeFi features',
      'Institutional partnerships',
      'Global marketing push',
    ],
    color: 'text-purple-400',
    bgColor: 'bg-purple-400',
  },
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--ml-purple)]/5 via-transparent to-[var(--ml-green)]/5" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-[var(--ml-green)] mb-2 font-semibold">
            Our Journey
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Roadmap</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow our progress as we build the future of meme-powered social media.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-400 via-yellow-400 to-purple-400" />

          <div className="space-y-12 lg:space-y-0">
            {roadmapData.map((phase, index) => (
              <RoadmapCard
                key={phase.phase}
                phase={phase}
                index={index}
                isEven={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function RoadmapCard({
  phase,
  index,
  isEven,
}: {
  phase: RoadmapPhase;
  index: number;
  isEven: boolean;
}) {
  const getStatusIcon = (status: PhaseStatus) => {
    switch (status) {
      case 'completed':
        return <Check className="w-5 h-5" />;
      case 'in-progress':
        return <Clock className="w-5 h-5" />;
      case 'upcoming':
        return <Rocket className="w-5 h-5" />;
    }
  };

  const getStatusLabel = (status: PhaseStatus) => {
    switch (status) {
      case 'completed':
        return 'Completed';
      case 'in-progress':
        return 'In Progress';
      case 'upcoming':
        return 'Upcoming';
    }
  };

  return (
    <div
      className={`lg:flex lg:items-center lg:gap-8 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Card */}
      <div className={`lg:w-[calc(50%-2rem)] ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
        <div className="glass-dark rounded-2xl p-6 hover:border-white/20 transition-all">
          {/* Header */}
          <div className={`flex items-center gap-3 mb-4 ${isEven ? 'lg:justify-end' : ''}`}>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${phase.bgColor}/20 ${phase.color}`}
            >
              {phase.phase}
            </span>
            <span
              className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs ${
                phase.status === 'completed'
                  ? 'bg-green-400/20 text-green-400'
                  : phase.status === 'in-progress'
                  ? 'bg-yellow-400/20 text-yellow-400'
                  : 'bg-purple-400/20 text-purple-400'
              }`}
            >
              {getStatusIcon(phase.status)}
              {getStatusLabel(phase.status)}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white mb-4">{phase.title}</h3>

          {/* Items */}
          <ul className={`space-y-2 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
            {phase.items.map((item) => (
              <li
                key={item}
                className={`flex items-center gap-2 text-sm text-gray-400 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <Star className={`w-3 h-3 ${phase.color} flex-shrink-0`} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline Node (Desktop) */}
      <div className="hidden lg:flex items-center justify-center">
        <div
          className={`w-4 h-4 rounded-full ${phase.bgColor} ring-4 ring-black`}
        />
      </div>

      {/* Spacer */}
      <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
    </div>
  );
}
