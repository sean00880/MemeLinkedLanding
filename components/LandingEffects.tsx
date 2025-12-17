/**
 * Landing Effects Component
 * Provides visual background effects for the MemeLinked landing page
 * Uses BNB effects (ElectricGrid, ParticleSystem) adapted for landing aesthetics
 *
 * Based on SPBVG+ Enhancement Plan:
 * - ElectricGrid: Subtle animated grid background with quantum nodes
 * - ParticleSystem: Ambient floating particles with MEMELinked colors
 */

'use client';

import { ElectricGrid } from '@/components/bnb/shared/ElectricGrid';
import { ParticleSystem } from '@/components/bnb/shared/ParticleSystem';

interface LandingEffectsProps {
  /** Enable/disable ElectricGrid effect */
  showGrid?: boolean;
  /** Enable/disable ParticleSystem effect */
  showParticles?: boolean;
  /** Grid intensity: subtle/medium/high */
  gridIntensity?: 'subtle' | 'medium' | 'high';
  /** Number of particles */
  particleCount?: number;
}

export function LandingEffects({
  showGrid = true,
  showParticles = true,
  gridIntensity = 'subtle',
  particleCount = 25,
}: LandingEffectsProps) {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* Electric Grid - Futuristic animated background */}
      {showGrid && (
        <ElectricGrid
          intensity={gridIntensity}
          speed={0.7}
        />
      )}

      {/* Particle System - Ambient floating particles */}
      {showParticles && (
        <ParticleSystem
          count={particleCount}
          type="circle"
          speed={0.3}
          size={{ min: 1, max: 3 }}
          color="rgba(34, 197, 94, 0.35)" // ml-green with transparency
          opacity={{ min: 0.1, max: 0.25 }}
          interactive={false}
          className="opacity-50"
        />
      )}

      {/* Secondary particle layer - Purple accent */}
      {showParticles && (
        <ParticleSystem
          count={Math.floor(particleCount * 0.4)}
          type="circle"
          speed={0.2}
          size={{ min: 1, max: 2 }}
          color="rgba(168, 85, 247, 0.3)" // ml-purple with transparency
          opacity={{ min: 0.05, max: 0.15 }}
          interactive={false}
          className="opacity-30"
        />
      )}
    </div>
  );
}

export default LandingEffects;
