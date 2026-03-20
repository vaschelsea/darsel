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
        <div className="mx-auto max-w-text px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading mb-8">
              The Core Problem
            </h2>
            <p className="text-base text-charcoal leading-body">
              Financial markets are complex. But one factor consistently erodes trader performance above all others: trading costs. For scalpers and high-frequency strategies, execution conditions define profitability. Every pip counts.
            </p>
            <p className="mt-6 text-base text-charcoal leading-body">
              <span className="text-red-dark font-medium">BOB</span> was built to solve this by operating within a framework of strict, encoded rules — removing the single biggest risk in active trading: human emotion.
            </p>
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
          <div className="grid sm:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="offer-icon shrink-0" aria-hidden="true">
                    <circle cx="24" cy="24" r="18" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
                    <circle cx="24" cy="24" r="12" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.4" />
                    <circle cx="24" cy="24" r="6" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.6" />
                    <circle cx="24" cy="24" r="2.5" fill="#C9A96E" />
                    <line x1="24" y1="4" x2="24" y2="10" stroke="rgba(201,169,110,0.3)" strokeWidth="1" strokeLinecap="round" />
                    <line x1="24" y1="38" x2="24" y2="44" stroke="rgba(201,169,110,0.3)" strokeWidth="1" strokeLinecap="round" />
                    <line x1="4" y1="24" x2="10" y2="24" stroke="rgba(201,169,110,0.3)" strokeWidth="1" strokeLinecap="round" />
                    <line x1="38" y1="24" x2="44" y2="24" stroke="rgba(201,169,110,0.3)" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  <span className="font-mono text-gold text-sm font-medium">01</span>
                </div>
                <h3 className="text-lg font-medium text-charcoal leading-heading tracking-heading mb-2">
                  Precision over frequency.
                </h3>
                <p className="text-base text-charcoal leading-body">
                  BOB waits for statistically favorable conditions rather than trading constantly.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="offer-icon shrink-0" aria-hidden="true">
                    <path d="M24 4L6 12V22C6 33.1 13.8 43.3 24 46C34.2 43.3 42 33.1 42 22V12L24 4Z" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" strokeLinejoin="round" />
                    <rect x="18" y="19" width="12" height="14" rx="2" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.08)" />
                    <path d="M20 19V16C20 13.8 21.8 12 24 12C26.2 12 28 13.8 28 16V19" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <circle cx="24" cy="26" r="2" fill="#C9A96E" />
                  </svg>
                  <span className="font-mono text-gold text-sm font-medium">02</span>
                </div>
                <h3 className="text-lg font-medium text-charcoal leading-heading tracking-heading mb-2">
                  Protection over expansion.
                </h3>
                <p className="text-base text-charcoal leading-body">
                  Capital preservation is always the first objective.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="sm:col-span-2 sm:max-w-[calc(50%-12px)] sm:mx-auto bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-5">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="offer-icon shrink-0" aria-hidden="true">
                    <rect x="6" y="12" width="36" height="6" rx="3" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.1)" />
                    <rect x="6" y="22" width="36" height="6" rx="3" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.1)" />
                    <rect x="6" y="32" width="36" height="6" rx="3" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.1)" />
                    <line x1="24" y1="8" x2="24" y2="42" stroke="rgba(201,169,110,0.3)" strokeWidth="1" strokeDasharray="3 2" />
                  </svg>
                  <span className="font-mono text-gold text-sm font-medium">03</span>
                </div>
                <h3 className="text-lg font-medium text-charcoal leading-heading tracking-heading mb-2">
                  Consistency over acceleration.
                </h3>
                <p className="text-base text-charcoal leading-body">
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
