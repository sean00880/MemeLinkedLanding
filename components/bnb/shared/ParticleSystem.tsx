/**
 * ParticleSystem Component
 * Canvas-based particle system for visual effects
 * Features:
 * - GPU-accelerated rendering
 * - Configurable particle types (circles, stars, symbols)
 * - Mouse interaction (optional)
 * - Optimized for performance
 */

'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  symbol?: string;
  color: string;
}

interface ParticleSystemProps {
  count?: number; // Number of particles
  type?: 'circle' | 'star' | 'symbol'; // Particle type
  symbol?: string; // Custom symbol (for type='symbol')
  speed?: number; // Movement speed multiplier
  size?: { min: number; max: number }; // Particle size range
  color?: string; // Particle color
  opacity?: { min: number; max: number }; // Opacity range
  interactive?: boolean; // React to mouse
  className?: string;
}

export function ParticleSystem({
  count = 50,
  type = 'circle',
  symbol = '●',
  speed = 1,
  size = { min: 2, max: 6 },
  color = 'rgba(220, 38, 38, 0.6)', // Cherry red
  opacity = { min: 0.2, max: 0.6 },
  interactive = false,
  className = '',
}: ParticleSystemProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    updateCanvasSize();

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * speed,
        vy: (Math.random() - 0.5) * speed,
        size: size.min + Math.random() * (size.max - size.min),
        opacity: opacity.min + Math.random() * (opacity.max - opacity.min),
        symbol: symbol,
        color: color,
      }));
    };

    initParticles();

    // Draw particle based on type
    const drawParticle = (particle: Particle) => {
      ctx.globalAlpha = particle.opacity;

      switch (type) {
        case 'circle':
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;

        case 'star':
          drawStar(ctx, particle.x, particle.y, particle.size, particle.color);
          break;

        case 'symbol':
          ctx.fillStyle = particle.color;
          ctx.font = `${particle.size * 3}px Arial`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(particle.symbol || symbol, particle.x, particle.y);
          break;
      }

      ctx.globalAlpha = 1;
    };

    // Draw star shape
    const drawStar = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, color: string) => {
      ctx.fillStyle = color;
      ctx.beginPath();
      for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
        const outerX = x + Math.cos(angle) * size;
        const outerY = y + Math.sin(angle) * size;
        ctx.lineTo(outerX, outerY);

        const innerAngle = angle + Math.PI / 5;
        const innerX = x + Math.cos(innerAngle) * (size / 2);
        const innerY = y + Math.sin(innerAngle) * (size / 2);
        ctx.lineTo(innerX, innerY);
      }
      ctx.closePath();
      ctx.fill();
    };

    // Update particle positions
    const updateParticles = () => {
      const rect = canvas.getBoundingClientRect();

      particlesRef.current.forEach(particle => {
        // Move particle
        particle.x += particle.vx * speed;
        particle.y += particle.vy * speed;

        // Interactive mode - particles avoid mouse
        if (interactive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const minDistance = 100;

          if (distance < minDistance) {
            const force = (minDistance - distance) / minDistance;
            particle.vx -= (dx / distance) * force * 0.5;
            particle.vy -= (dy / distance) * force * 0.5;
          }
        }

        // Wrap around screen
        if (particle.x < 0) particle.x = rect.width;
        if (particle.x > rect.width) particle.x = 0;
        if (particle.y < 0) particle.y = rect.height;
        if (particle.y > rect.height) particle.y = 0;

        // Gradually return to normal speed
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Add slight randomness to prevent static patterns
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;
      });
    };

    // Animation loop
    const animate = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      updateParticles();
      particlesRef.current.forEach(drawParticle);

      rafRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Mouse tracking for interactive mode
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Handle resize
    const handleResize = () => {
      updateCanvasSize();
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [count, type, symbol, speed, size, color, opacity, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
