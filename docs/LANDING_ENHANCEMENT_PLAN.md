# MemeLinked Landing Page Enhancement - SPBVG+ & DGM Tree Methodology

> **Version**: 1.0.0
> **Date**: 2025-12-17
> **Status**: Planning Phase
> **Methodology**: SPBVG+ (Scout-Plan-Build-Validate-Govern+) with DGM Tree Decision Framework

---

## Executive Summary

This document outlines the systematic enhancement of the MemeLinked landing page using multi-agent orchestration with SPBVG+ methodology and DGM Tree decision framework. The plan incorporates insights from:
- **ShadCN Create** (December 2025): Style presets, component customization
- **TailArk Pro**: Dark-mode-first design patterns, glassmorphism
- **Modern Landing Page Best Practices 2025**: 100vh sections, scroll-driven animations
- **MEMELinked2 BNB Effects**: ElectricGrid, ParticleSystem, CustomCursor

---

## SPBVG+ Methodology Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     SPBVG+ RECURSIVE WORKFLOW                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   ┌───────┐     ┌───────┐     ┌───────┐     ┌──────────┐    ┌───────┐  │
│   │ SCOUT │ ──► │ PLAN  │ ──► │ BUILD │ ──► │ VALIDATE │ ─► │GOVERN │  │
│   └───┬───┘     └───┬───┘     └───┬───┘     └────┬─────┘    └───┬───┘  │
│       │             │             │              │              │       │
│       ▼             ▼             ▼              ▼              ▼       │
│   [Research]   [Decision]   [Execute]    [Quality Gate]   [Consensus]  │
│   [Context]    [DGM Tree]   [Implement]  [Multi-Agent]    [Approval]   │
│                                                                         │
│   ◄─────────────── RECURSIVE AT EACH PHASE ──────────────────►         │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Phase Definitions

| Phase | Purpose | Agent Binding | Output |
|-------|---------|---------------|--------|
| **S** Scout | Research, context gathering, impact analysis | Explore Agent, Research MCP | impact-map.json |
| **P** Plan | Decision tree, execution strategy | Plan Agent, DGM Tree | execution-plan.json |
| **B** Build | Implementation, code changes | Frontend Dev Agent | changes.diff |
| **V** Validate | Testing, quality gates | E2E Agent, Perf Agent | validation-report.json |
| **G** Govern | Consensus voting, approval | Multi-Agent Consensus | consensus-decision.json |
| **+** Plus | Recursive application at each phase | All agents | phase-artifacts/ |

---

## DGM Tree Decision Framework

### DGM Levels (Decision Granularity Model)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        DGM TREE STRUCTURE                               │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│   Level 0: DETERMINISTIC (Zero Creativity)                              │
│   ├── Payment flows, security-critical code                             │
│   └── DGM Score: 0.0 - Exact spec adherence required                    │
│                                                                         │
│   Level 1: CONTROLLED (Low Creativity)                                  │
│   ├── Component architecture, API contracts                             │
│   └── DGM Score: 0.1-0.3 - Minor variations allowed                     │
│                                                                         │
│   Level 2: GUIDED (Moderate Creativity)                                 │
│   ├── UI enhancements, animation design                                 │
│   └── DGM Score: 0.4-0.6 - Creative solutions within bounds             │
│                                                                         │
│   Level 3: HIGH-IMPACT (High Creativity)                                │
│   ├── Research, exploration, new features                               │
│   └── DGM Score: 0.7-1.0 - Innovative approaches encouraged             │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Landing Page Enhancement DGM Classification

| Enhancement | DGM Level | Score | Rationale |
|-------------|-----------|-------|-----------|
| LandingEffects integration | Controlled | 0.2 | Existing components, defined props |
| Scroll animations | Guided | 0.5 | Creative implementation within patterns |
| GlassCard component | Controlled | 0.3 | Follows existing glass-dark pattern |
| Hero trust-first | Guided | 0.5 | UX decisions within brand guidelines |
| Performance optimization | Deterministic | 0.1 | Measurable targets, no creativity |

---

## Multi-Agent Consensus System

### Agent Weights & Roles

```yaml
agents:
  opus_orchestrator:
    weight: 3.0
    role: "Primary orchestrator, final implementation decisions"
    capabilities: [code_generation, architecture, refactoring]

  gemini_validator:
    weight: 2.0
    role: "UI analysis, design validation, accessibility"
    capabilities: [visual_analysis, ux_review, a11y_audit]

  explorer:
    weight: 1.5
    role: "Codebase research, pattern discovery"
    capabilities: [search, analysis, documentation]

  frontend_dev:
    weight: 1.2
    role: "React/Next.js implementation specialist"
    capabilities: [component_dev, styling, optimization]

consensus:
  quorum: 2
  threshold: 0.6  # 60% weighted majority
  veto_agents: [opus_orchestrator]  # Can block on critical issues
```

### Consensus Checkpoints

| Checkpoint | Phase | Required Agents | Decision Type |
|------------|-------|-----------------|---------------|
| CP1: Research Complete | Scout | Explorer + Opus | Proceed/Iterate |
| CP2: Plan Approved | Plan | Opus + Gemini | Approve/Revise |
| CP3: Implementation Valid | Build | Frontend + Opus | Accept/Reject |
| CP4: Quality Gates Pass | Validate | All agents | Pass/Fail |
| CP5: Final Approval | Govern | Opus + Gemini | Deploy/Rollback |

---

## Enhancement Implementation Plan

### Phase 1: SCOUT (Research & Context)

#### 1.1 Current State Analysis

**Completed Items** (from previous session):
- [x] CTA buttons updated to https://memelinked.com (6 components)
- [x] 100vh sections implemented (min-h-screen flex flex-col justify-center)
- [x] LandingEffects component created with ElectricGrid + ParticleSystem

**Current Components**:
```
src/app/landing/
├── app/page.tsx              # Main page with LandingEffects
├── components/
│   ├── LandingEffects.tsx    # NEW: ElectricGrid + ParticleSystem wrapper
│   ├── LandingHeader.tsx     # Navigation + CTAs
│   ├── LandingHero.tsx       # Hero section
│   ├── LogoCloud.tsx         # Partners (NOT 100vh)
│   ├── Features.tsx          # 5-category tabs
│   ├── PlatformShowcase.tsx  # Interactive demo
│   ├── HowItWorks.tsx        # Platform journey
│   ├── TokenStats.tsx        # Live blockchain data
│   ├── Tokenomics.tsx        # Token distribution
│   ├── Roadmap.tsx           # 4-phase timeline
│   ├── CallToAction.tsx      # Final CTA
│   └── LandingFooter.tsx     # Footer
```

#### 1.2 Research Sources

**ShadCN Create Insights** (from shadcnOpusGemini.txt):
- Style presets: Vega (general), Nova (less padding), Maya (borders/rounded), Lyra (boxy), Mira (Maya+Lyra hybrid)
- Component customization via ui.shadcn.com/create
- AI-assisted development saves tokens by leveraging existing components
- Workspace/branch strategy for parallel development

**BNB Effects Available**:
- `ElectricGrid.tsx` - SVG grid with electric pulses, quantum nodes, neural connections
- `ParticleSystem.tsx` - Canvas-based particle system, GPU-accelerated
- Props: intensity (subtle/medium/high), speed, count, type, color, interactive

**Design Tokens** (from MEMELinked2):
- Primary green: `#00FF88` / `var(--ml-green)`
- Primary purple: `#A855F7` / `var(--ml-purple)`
- Glass effect: `backdrop-blur-[20px]` + `bg-white/5`
- Max widths: page (1440px), card (480px)

### Phase 2: PLAN (Decision Tree & Execution Strategy)

#### 2.1 DGM Tree for Enhancements

```
LANDING_ENHANCEMENT_ROOT
├── [DGM 0.2] LandingEffects Integration ✓ DONE
│   ├── ElectricGrid (intensity: subtle)
│   └── ParticleSystem (count: 25, dual-layer green/purple)
│
├── [DGM 0.5] Scroll-Driven Animations
│   ├── Decision: CSS scroll timelines OR Framer Motion?
│   │   └── RECOMMENDATION: Framer Motion (already installed for ElectricGrid)
│   ├── Targets:
│   │   ├── Section fade-in on viewport entry
│   │   ├── Parallax background effects
│   │   └── Stagger animations for lists/grids
│   └── Output: useScrollAnimation hook + AnimatedSection wrapper
│
├── [DGM 0.3] Unified GlassCard Component
│   ├── Decision: Extend existing glass-dark OR new primitive?
│   │   └── RECOMMENDATION: New GlassCard in layout/primitives
│   ├── Variants: default, hover, featured, gradient-border
│   └── Output: src/components/layout/primitives/GlassCard.tsx
│
├── [DGM 0.5] Hero Trust-First Enhancements
│   ├── Decision: Social proof OR metrics-first?
│   │   └── RECOMMENDATION: Both - metrics bar + partner logos
│   ├── Elements:
│   │   ├── Trust badges (Audited, LP Locked, etc.)
│   │   ├── Live metrics strip (holders, volume, etc.)
│   │   └── Partner/listing logos integration
│   └── Output: TrustBadges component + MetricsBar component
│
└── [DGM 0.1] Performance Optimization
    ├── Targets (P1 Quality Gate):
    │   ├── FCP < 1.5s
    │   ├── LCP < 2.5s
    │   └── CLS < 0.1
    ├── Actions:
    │   ├── Image optimization (next/image)
    │   ├── Component lazy loading
    │   └── Animation performance audit
    └── Output: Lighthouse report, Web Vitals metrics
```

#### 2.2 Execution Order (Priority Queue)

| Order | Enhancement | DGM | Dependencies | Est. Effort |
|-------|-------------|-----|--------------|-------------|
| 1 | Verify LandingEffects build | 0.1 | None | Low |
| 2 | Scroll animations hook | 0.5 | Framer Motion | Medium |
| 3 | GlassCard component | 0.3 | Design tokens | Low |
| 4 | Hero trust elements | 0.5 | GlassCard | Medium |
| 5 | Performance audit | 0.1 | All above | Medium |

### Phase 3: BUILD (Implementation Specs)

#### 3.1 Scroll Animation System

```typescript
// src/hooks/useScrollAnimation.ts
import { useInView, useAnimation, Variants } from 'framer-motion';

interface ScrollAnimationOptions {
  threshold?: number;  // 0-1, when to trigger
  once?: boolean;      // Animate once or every time
  delay?: number;      // Animation delay in seconds
}

export function useScrollAnimation(options?: ScrollAnimationOptions);

// Preset animations
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};
```

#### 3.2 GlassCard Component

```typescript
// src/components/layout/primitives/GlassCard.tsx
interface GlassCardProps {
  variant?: 'default' | 'hover' | 'featured' | 'gradient-border';
  className?: string;
  children: React.ReactNode;
}

// Styles mapping to existing glass-dark pattern:
// - backdrop-blur-[20px]
// - bg-white/5 (or bg-black/20 for darker)
// - border border-white/10
// - Hover: border-white/20, shadow-lg
```

#### 3.3 Trust Elements for Hero

```typescript
// src/app/landing/components/TrustBadges.tsx
const badges = [
  { icon: Shield, label: 'Audited', status: 'verified' },
  { icon: Lock, label: 'LP Locked', status: 'verified' },
  { icon: Code, label: 'Open Source', status: 'verified' },
  { icon: Users, label: '1000+ Holders', status: 'live' }
];

// src/app/landing/components/MetricsBar.tsx
// Live metrics from TokenStats integration
// Compact horizontal strip below hero
```

### Phase 4: VALIDATE (Quality Gates)

#### 4.1 Quality Gate Definitions

| Gate | Type | Threshold | Tool |
|------|------|-----------|------|
| type_check | P0 | Zero errors | `tsc --noEmit` |
| lint_pass | P0 | Zero errors | `eslint` |
| build_success | P0 | Exit code 0 | `pnpm build` |
| fcp_target | P1 | < 1.5s | Lighthouse |
| lcp_target | P1 | < 2.5s | Lighthouse |
| cls_target | P1 | < 0.1 | Lighthouse |
| a11y_score | P1 | > 90 | Lighthouse |

#### 4.2 Validation Commands

```bash
# Type checking
pnpm exec tsc --noEmit

# Lint
pnpm exec eslint src/app/landing/

# Build verification
pnpm build

# Performance audit (requires Chrome DevTools MCP)
# Use chrome-devtools performance_start_trace
```

### Phase 5: GOVERN (Consensus Decision)

#### 5.1 Approval Criteria

| Criterion | Weight | Evaluator |
|-----------|--------|-----------|
| Code quality | 0.25 | Opus |
| Visual consistency | 0.25 | Gemini |
| Performance targets | 0.20 | Lighthouse |
| Accessibility | 0.15 | axe-core |
| Documentation | 0.15 | Opus |

#### 5.2 Rollback Conditions

- Any P0 quality gate failure
- Performance regression > 20%
- Visual inconsistency flagged by Gemini
- Consensus score < 60%

---

## Recursive SPBVG+ Application

Each enhancement task applies SPBVG+ recursively:

```
Enhancement: Scroll Animations
├── Scout: Research Framer Motion patterns, existing usage
├── Plan: DGM tree for animation variants
├── Build: Implement useScrollAnimation hook
├── Validate: Test on all sections, check performance
└── Govern: Agent consensus on implementation quality

Enhancement: GlassCard Component
├── Scout: Analyze glass-dark usage across codebase
├── Plan: DGM tree for variants and props
├── Build: Create component with full typing
├── Validate: Test all variants, check a11y
└── Govern: Agent consensus on design system fit
```

---

## Agent Invocation Commands

### Using Task Tool Agents

```bash
# Explore Agent - Codebase research
Task: subagent_type=Explore
Prompt: "Search for all glass-dark class usage in landing components"

# Plan Agent - Architecture planning
Task: subagent_type=Plan
Prompt: "Design scroll animation system for landing page sections"

# Frontend Dev Agent - Implementation
Task: subagent_type=frontend-dev
Prompt: "Implement GlassCard component following MEMELinked2 design tokens"
```

### MCP Tool Usage

```bash
# Chrome DevTools - Performance testing
mcp__chrome-devtools__performance_start_trace
mcp__chrome-devtools__take_screenshot

# Firecrawl - Research best practices
mcp__firecrawl__firecrawl_search "scroll-driven animations 2025 best practices"
```

---

## Implementation Status Tracker

| Task | Status | DGM | Agent | Notes |
|------|--------|-----|-------|-------|
| LandingEffects integration | DONE | 0.2 | Opus | ElectricGrid + ParticleSystem active |
| 100vh sections | DONE | 0.1 | Opus | All main sections updated |
| CTA button links | DONE | 0.0 | Opus | Updated to memelinked.com |
| Scroll animations | PENDING | 0.5 | Frontend-dev | Next priority |
| GlassCard component | PENDING | 0.3 | Frontend-dev | Queued |
| Hero trust elements | PENDING | 0.5 | Frontend-dev | Queued |
| Performance audit | PENDING | 0.1 | Chrome MCP | After all changes |

---

## Next Steps

1. **Verify Build**: Ensure LandingEffects component builds correctly
2. **Implement Scroll Animations**: Create useScrollAnimation hook
3. **Create GlassCard**: Unified glass card primitive
4. **Enhance Hero**: Add trust badges and metrics bar
5. **Performance Audit**: Run Lighthouse, optimize as needed
6. **Final Consensus**: Multi-agent review and approval

---

**Document Author**: Opus 4.5 Orchestrator
**Consensus Participants**: Opus, Gemini 3 Pro, Explorer, Frontend-Dev
**Methodology**: SPBVG+ with DGM Tree (Controlled DGM Level 0.2-0.5)
