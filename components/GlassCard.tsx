/**
 * GlassCard Component
 * Unified glassmorphism card component for MemeLinked landing page
 * Based on TailArk Pro patterns and existing glass styles
 *
 * Variants:
 * - default: Dark glass with subtle border
 * - light: Lighter glass effect for contrast
 * - gradient: Gradient border with glass background
 * - accent: Accent-colored border glow
 */

'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type GlassVariant = 'default' | 'light' | 'gradient' | 'accent';

interface GlassCardProps {
  children: ReactNode;
  variant?: GlassVariant;
  className?: string;
  /** Enable hover effect */
  hover?: boolean;
  /** Padding size */
  padding?: 'sm' | 'md' | 'lg';
  /** Enable border glow animation */
  glow?: boolean;
}

const variantStyles: Record<GlassVariant, string> = {
  default: 'bg-black/60 backdrop-blur-md border border-white/10',
  light: 'bg-white/10 backdrop-blur-md border border-white/20',
  gradient:
    'bg-black/60 backdrop-blur-md border border-transparent bg-gradient-to-br from-white/10 via-transparent to-white/5',
  accent:
    'bg-black/60 backdrop-blur-md border border-[var(--ml-green)]/30 shadow-[0_0_15px_rgba(34,197,94,0.1)]',
};

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function GlassCard({
  children,
  variant = 'default',
  className,
  hover = false,
  padding = 'md',
  glow = false,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl transition-all duration-300',
        variantStyles[variant],
        paddingStyles[padding],
        hover && 'hover:border-white/20 hover:scale-[1.02]',
        glow && 'animate-glow',
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * GlassCardHeader - Header section for GlassCard
 */
interface GlassCardHeaderProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
}

export function GlassCardHeader({
  children,
  className,
  icon,
}: GlassCardHeaderProps) {
  return (
    <div className={cn('flex items-center gap-3 mb-4', className)}>
      {icon && (
        <div className="w-10 h-10 rounded-lg bg-[var(--ml-green)]/10 flex items-center justify-center text-[var(--ml-green)]">
          {icon}
        </div>
      )}
      <div>{children}</div>
    </div>
  );
}

/**
 * GlassCardTitle - Title for GlassCard
 */
interface GlassCardTitleProps {
  children: ReactNode;
  className?: string;
}

export function GlassCardTitle({ children, className }: GlassCardTitleProps) {
  return (
    <h3 className={cn('text-lg font-semibold text-white', className)}>
      {children}
    </h3>
  );
}

/**
 * GlassCardDescription - Description for GlassCard
 */
interface GlassCardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function GlassCardDescription({
  children,
  className,
}: GlassCardDescriptionProps) {
  return (
    <p className={cn('text-sm text-gray-400', className)}>{children}</p>
  );
}

/**
 * GlassCardContent - Main content area for GlassCard
 */
interface GlassCardContentProps {
  children: ReactNode;
  className?: string;
}

export function GlassCardContent({
  children,
  className,
}: GlassCardContentProps) {
  return <div className={cn('', className)}>{children}</div>;
}

/**
 * GlassCardFooter - Footer section for GlassCard
 */
interface GlassCardFooterProps {
  children: ReactNode;
  className?: string;
}

export function GlassCardFooter({
  children,
  className,
}: GlassCardFooterProps) {
  return (
    <div
      className={cn(
        'mt-4 pt-4 border-t border-white/10 flex items-center justify-between',
        className
      )}
    >
      {children}
    </div>
  );
}

export default GlassCard;
