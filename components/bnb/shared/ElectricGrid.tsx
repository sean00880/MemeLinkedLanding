/**
 * Electric Grid Background - SOTA Animation
 * Futuristic electrified grid with quantum/neural effects
 * Features:
 * - SVG-based grid that flows from top to bottom
 * - Electric pulses along grid lines
 * - Quantum nodes with glow effects
 * - Neural connection animations
 * - Theme-aware colors (uses CSS variables)
 */

'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ElectricGridProps {
  intensity?: 'subtle' | 'medium' | 'high';
  speed?: number; // Animation speed multiplier (1 = normal)
}

export function ElectricGrid({ intensity = 'subtle', speed = 1 }: ElectricGridProps) {
  const [gridNodes, setGridNodes] = useState<Array<{ x: number; y: number; delay: number }>>([]);

  // Generate random quantum nodes on mount
  useEffect(() => {
    const nodeCount = intensity === 'high' ? 20 : intensity === 'medium' ? 12 : 8;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setGridNodes(nodes);
  }, [intensity]);

  // Grid configuration based on intensity
  const gridConfig = {
    subtle: { opacity: 0.03, pulseOpacity: 0.15, nodeSize: 2 },
    medium: { opacity: 0.05, pulseOpacity: 0.25, nodeSize: 3 },
    high: { opacity: 0.08, pulseOpacity: 0.35, nodeSize: 4 },
  };

  const config = gridConfig[intensity];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: config.opacity }}
      >
        <defs>
          {/* Electric glow filter */}
          <filter id="electric-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Neural glow filter (stronger) */}
          <filter id="neural-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Vertical grid lines */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${(i / 19) * 100}%`}
            y1="0%"
            x2={`${(i / 19) * 100}%`}
            y2="100%"
            stroke="var(--ml-green, #22c55e)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 / speed, delay: i * 0.05 / speed }}
          />
        ))}

        {/* Horizontal grid lines */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0%"
            y1={`${(i / 14) * 100}%`}
            x2="100%"
            y2={`${(i / 14) * 100}%`}
            stroke="var(--ml-green, #22c55e)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2 / speed, delay: i * 0.05 / speed }}
          />
        ))}
      </svg>

      {/* Electric pulses - vertical flow */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`pulse-v-${i}`}
          className="absolute w-px"
          style={{
            left: `${(i / 7) * 100}%`,
            height: '30%',
            opacity: config.pulseOpacity,
            filter: 'blur(1px)',
            background: 'linear-gradient(to bottom, transparent, var(--ml-green, #22c55e), transparent)',
          }}
          animate={{
            y: ['-30%', '130%'],
            opacity: [0, config.pulseOpacity, 0],
          }}
          transition={{
            duration: 3 / speed,
            delay: i * 0.4 / speed,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Electric pulses - horizontal flow */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`pulse-h-${i}`}
          className="absolute h-px"
          style={{
            top: `${(i / 4) * 100}%`,
            width: '40%',
            opacity: config.pulseOpacity * 0.7,
            filter: 'blur(1px)',
            background: 'linear-gradient(to right, transparent, var(--ml-green, #22c55e), transparent)',
          }}
          animate={{
            x: ['-40%', '140%'],
            opacity: [0, config.pulseOpacity * 0.7, 0],
          }}
          transition={{
            duration: 4 / speed,
            delay: i * 0.5 / speed,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}

      {/* Quantum nodes - pulsating circles at grid intersections */}
      {gridNodes.map((node, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: `${config.nodeSize}px`,
            height: `${config.nodeSize}px`,
            background: 'var(--ml-green, #22c55e)',
            boxShadow: `0 0 ${config.nodeSize * 3}px var(--ml-green, #22c55e)`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 / speed,
            delay: node.delay / speed,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Neural connections - animated paths between nodes */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: config.pulseOpacity }}>
        {gridNodes.slice(0, -1).map((node, i) => {
          const nextNode = gridNodes[i + 1];
          if (!nextNode) return null;

          return (
            <motion.line
              key={`connection-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="var(--ml-green, #22c55e)"
              strokeWidth="0.5"
              filter="url(#neural-glow)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 3 / speed,
                delay: (i * 0.3 + node.delay) / speed,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </svg>

      {/* Energy waves - subtle gradient waves flowing down */}
      <motion.div
        className="absolute inset-x-0 h-[300px] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, rgba(34, 197, 94, 0.15) 0%, transparent 70%)`,
          filter: 'blur(40px)',
        }}
        animate={{
          y: ['-100%', '200%'],
          opacity: [0, 0.5, 0],
        }}
        transition={{
          duration: 8 / speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Quantum field - subtle particle effects */}
      <div className="absolute inset-0">
        {Array.from({ length: intensity === 'high' ? 30 : intensity === 'medium' ? 20 : 15 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'var(--ml-green, #22c55e)',
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 / speed,
              delay: Math.random() * 3 / speed,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      {/* Scanline effect - moving horizontal line */}
      <motion.div
        className="absolute inset-x-0 h-px"
        style={{
          opacity: config.pulseOpacity * 0.5,
          background: 'linear-gradient(to right, transparent, var(--ml-green, #22c55e), transparent)',
          boxShadow: `0 0 10px var(--ml-green, #22c55e)`,
        }}
        animate={{
          y: ['-2%', '102%'],
        }}
        transition={{
          duration: 10 / speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
}
