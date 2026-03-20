import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { StrategyHeroAnimation } from '@/components/HeroAnimations';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Strategy | DARSAL',
  description: 'Financial markets are complex. But one factor consistently erodes trader performance above all others: trading costs.',
  openGraph: { images: ['/og-image.png'] },
};

export default function StrategyPage() {
  return (
    <>
      <Hero
        headline="Strategy"
        subheadline="Financial markets are complex. But one factor consistently erodes trader performance above all others: trading costs. For scalpers and high-frequency strategies, execution conditions define profitability. Every pip counts."
        rightContent={<StrategyHeroAnimation />}
      />

      {/* The Core Problem */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="mx-auto max-w-content px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-[auto_1fr] gap-10 lg:gap-16 items-start">
              {/* Left — SVG illustration */}
              <div className="flex justify-center md:justify-start md:pt-2">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  {/* Outer circle — market complexity */}
                  <circle cx="60" cy="60" r="54" stroke="#C9A96E" strokeWidth="1" fill="rgba(201,169,110,0.03)" strokeDasharray="6 4" />
                  {/* Erratic price line — the problem */}
                  <polyline points="16,70 28,55 36,72 44,40 52,62 60,35 68,58 76,30 84,52 92,44 104,48" stroke="#C9A96E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
                  {/* Cost erosion area below the line */}
                  <path d="M16,70 28,55 36,72 44,40 52,62 60,35 68,58 76,30 84,52 92,44 104,48 L104,90 L16,90 Z" fill="rgba(201,169,110,0.08)" />
                  {/* Horizontal threshold line */}
                  <line x1="16" y1="90" x2="104" y2="90" stroke="#C9A96E" strokeWidth="1" opacity="0.4" />
                  {/* Downward arrows — cost erosion */}
                  <line x1="40" y1="78" x2="40" y2="88" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                  <polyline points="37,85 40,88 43,85" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                  <line x1="60" y1="74" x2="60" y2="88" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                  <polyline points="57,85 60,88 63,85" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                  <line x1="80" y1="76" x2="80" y2="88" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                  <polyline points="77,85 80,88 83,85" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
                  {/* Label: "COST" */}
                  <text x="60" y="104" textAnchor="middle" fill="#C9A96E" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="3" opacity="0.6">COST</text>
                </svg>
              </div>

              {/* Right — Content */}
              <div>
                <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading mb-6">
                  The Core Problem
                </h2>
                <div className="space-y-4">
                  <p className="text-base text-charcoal leading-body">
                    Financial markets are complex. But one factor consistently erodes trader performance above all others: <span className="text-gold font-medium">trading costs</span>. For scalpers and high-frequency strategies, execution conditions define profitability. Every pip counts.
                  </p>
                  <p className="text-base text-charcoal leading-body">
                    <span className="text-red-dark font-medium">BOB</span> was built to solve this by operating within a framework of strict, encoded rules — removing the single biggest risk in active trading: human emotion.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How BOB Operates */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-content px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading text-center mb-16">
              How BOB Operates
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-5 offer-icon" aria-hidden="true">
                  <circle cx="24" cy="24" r="18" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
                  <path d="M24 14V24" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" />
                  <path d="M24 24L16 30" stroke="rgba(201,169,110,0.4)" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M24 24L34 20" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="24" cy="24" r="2.5" fill="#C9A96E" />
                  <path d="M12 36L16 30L20 33L24 28L28 31L32 26L36 29" stroke="rgba(201,169,110,0.3)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  Master Rule: Conservative Leverage Indexed to Market Conditions
                </h3>
                <p className="text-base text-charcoal leading-body">
                  BOB does not use fixed leverage. Leverage is dynamically calculated based on real-time volatility and market conditions, always staying within conservative parameters. This is the system&apos;s foundational risk control mechanism.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-5 offer-icon" aria-hidden="true">
                  <circle cx="24" cy="16" r="10" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.08)" />
                  <path d="M19 14L24 10L29 14" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="24" y1="10" x2="24" y2="20" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="6" y1="32" x2="42" y2="32" stroke="rgba(201,169,110,0.3)" strokeWidth="1" strokeLinecap="round" />
                  <rect x="10" y="34" width="8" height="6" rx="1" stroke="rgba(201,169,110,0.4)" strokeWidth="1" fill="rgba(201,169,110,0.06)" />
                  <rect x="20" y="34" width="8" height="6" rx="1" stroke="#C9A96E" strokeWidth="1" fill="rgba(201,169,110,0.12)" />
                  <rect x="30" y="34" width="8" height="6" rx="1" stroke="rgba(201,169,110,0.4)" strokeWidth="1" fill="rgba(201,169,110,0.06)" />
                  <line x1="14" y1="44" x2="34" y2="44" stroke="rgba(201,169,110,0.2)" strokeWidth="1" strokeDasharray="3 2" />
                </svg>
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  Intraday Only
                </h3>
                <p className="text-base text-charcoal leading-body">
                  All positions are opened and closed within the same trading session. No positions are carried overnight. Each session resets to neutral. This eliminates overnight gap risk entirely.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-5 offer-icon" aria-hidden="true">
                  <text x="6" y="22" fill="#C9A96E" fontSize="20" fontFamily="var(--font-mono)" fontWeight="500">&lt;/&gt;</text>
                  <rect x="6" y="30" width="36" height="3" rx="1.5" fill="rgba(201,169,110,0.2)" />
                  <rect x="6" y="36" width="24" height="3" rx="1.5" fill="rgba(201,169,110,0.15)" />
                  <rect x="6" y="42" width="30" height="3" rx="1.5" fill="rgba(201,169,110,0.1)" />
                  <circle cx="42" cy="14" r="4" stroke="#C9A96E" strokeWidth="1" fill="rgba(201,169,110,0.1)" />
                  <polyline points="40,14 42,16 45,11" stroke="#C9A96E" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  Rule-Based, Zero Discretion
                </h3>
                <p className="text-base text-charcoal leading-body">
                  Every decision follows encoded rules. There is no improvisation and no emotional execution. BOB runs autonomously under a fixed rule set. Human oversight exists only to enforce discipline — not to override it.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mb-5 offer-icon" aria-hidden="true">
                  <rect x="6" y="6" width="36" height="28" rx="3" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
                  <polyline points="12,28 18,22 24,24 30,18 36,20" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="12" y1="14" x2="36" y2="14" stroke="rgba(201,169,110,0.2)" strokeWidth="1" strokeDasharray="4 3" />
                  <line x1="6" y1="40" x2="42" y2="40" stroke="rgba(201,169,110,0.3)" strokeWidth="1" />
                  <line x1="10" y1="40" x2="10" y2="44" stroke="rgba(201,169,110,0.3)" strokeWidth="1" />
                  <line x1="24" y1="40" x2="24" y2="44" stroke="rgba(201,169,110,0.3)" strokeWidth="1" />
                  <line x1="38" y1="40" x2="38" y2="44" stroke="rgba(201,169,110,0.3)" strokeWidth="1" />
                </svg>
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  Operational Target
                </h3>
                <p className="text-base text-charcoal leading-body">
                  The system targets a low single-digit monthly yield. This is not a promise — it&apos;s a design parameter. The strategy deliberately favors durability over short-term spikes, consistency over acceleration.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Three Priorities */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="mx-auto max-w-content px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading text-center mb-12">
              Three Priorities (In Order)
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            <ScrollReveal>
              <div className="h-full bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="offer-icon" aria-hidden="true">
                    <circle cx="28" cy="28" r="22" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
                    <circle cx="28" cy="28" r="14" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.4" />
                    <circle cx="28" cy="28" r="7" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.6" />
                    <circle cx="28" cy="28" r="3" fill="#C9A96E" />
                    <line x1="28" y1="4" x2="28" y2="12" stroke="rgba(201,169,110,0.3)" strokeWidth="1" strokeLinecap="round" />
                    <line x1="28" y1="44" x2="28" y2="52" stroke="rgba(201,169,110,0.3)" strokeWidth="1" strokeLinecap="round" />
                    <line x1="4" y1="28" x2="12" y2="28" stroke="rgba(201,169,110,0.3)" strokeWidth="1" strokeLinecap="round" />
                    <line x1="44" y1="28" x2="52" y2="28" stroke="rgba(201,169,110,0.3)" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="inline-block font-mono text-gold text-xs font-medium tracking-wider mb-3">01</span>
                <h3 className="text-lg font-medium text-charcoal leading-heading tracking-heading mb-3">
                  Precision over frequency.
                </h3>
                <p className="text-[15px] text-cool-gray leading-body">
                  BOB waits for statistically favorable conditions rather than trading constantly.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="h-full bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="offer-icon" aria-hidden="true">
                    <path d="M28 4L8 14V26C8 38.6 16.4 50.2 28 53C39.6 50.2 48 38.6 48 26V14L28 4Z" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" strokeLinejoin="round" />
                    <rect x="21" y="22" width="14" height="16" rx="2" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.08)" />
                    <path d="M23 22V18C23 15.2 25.2 13 28 13C30.8 13 33 15.2 33 18V22" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <circle cx="28" cy="30" r="2.5" fill="#C9A96E" />
                  </svg>
                </div>
                <span className="inline-block font-mono text-gold text-xs font-medium tracking-wider mb-3">02</span>
                <h3 className="text-lg font-medium text-charcoal leading-heading tracking-heading mb-3">
                  Protection over expansion.
                </h3>
                <p className="text-[15px] text-cool-gray leading-body">
                  Capital preservation is always the first objective.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="h-full bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300 text-center">
                <div className="flex justify-center mb-4">
                  <svg width="56" height="56" viewBox="0 0 56 56" fill="none" className="offer-icon" aria-hidden="true">
                    <rect x="8" y="14" width="40" height="7" rx="3.5" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.1)" />
                    <rect x="8" y="25" width="40" height="7" rx="3.5" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.1)" />
                    <rect x="8" y="36" width="40" height="7" rx="3.5" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.1)" />
                    <line x1="28" y1="10" x2="28" y2="48" stroke="rgba(201,169,110,0.3)" strokeWidth="1" strokeDasharray="3 2" />
                  </svg>
                </div>
                <span className="inline-block font-mono text-gold text-xs font-medium tracking-wider mb-3">03</span>
                <h3 className="text-lg font-medium text-charcoal leading-heading tracking-heading mb-3">
                  Consistency over acceleration.
                </h3>
                <p className="text-[15px] text-cool-gray leading-body">
                  Stable, repeatable returns matter more than outlier months.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
