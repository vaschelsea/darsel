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

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  Master Rule: Conservative Leverage Indexed to Market Conditions
                </h3>
                <p className="text-base text-charcoal leading-body">
                  BOB does not use fixed leverage. Leverage is dynamically calculated based on real-time volatility and market conditions, always staying within conservative parameters. This is the system&apos;s foundational risk control mechanism.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  Intraday Only
                </h3>
                <p className="text-base text-charcoal leading-body">
                  All positions are opened and closed within the same trading session. No positions are carried overnight. Each session resets to neutral. This eliminates overnight gap risk entirely.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  Rule-Based, Zero Discretion
                </h3>
                <p className="text-base text-charcoal leading-body">
                  Every decision follows encoded rules. There is no improvisation and no emotional execution. BOB runs autonomously under a fixed rule set. Human oversight exists only to enforce discipline — not to override it.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
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
        <div className="mx-auto max-w-text px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading mb-12">
              Three Priorities (In Order)
            </h2>
            <ol className="space-y-8">
              <li className="flex gap-4">
                <span className="font-mono text-gold text-lg font-medium shrink-0">01</span>
                <div>
                  <h3 className="text-lg font-medium text-charcoal leading-heading tracking-heading mb-2">
                    Precision over frequency.
                  </h3>
                  <p className="text-base text-charcoal leading-body">
                    BOB waits for statistically favorable conditions rather than trading constantly.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-gold text-lg font-medium shrink-0">02</span>
                <div>
                  <h3 className="text-lg font-medium text-charcoal leading-heading tracking-heading mb-2">
                    Protection over expansion.
                  </h3>
                  <p className="text-base text-charcoal leading-body">
                    Capital preservation is always the first objective.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="font-mono text-gold text-lg font-medium shrink-0">03</span>
                <div>
                  <h3 className="text-lg font-medium text-charcoal leading-heading tracking-heading mb-2">
                    Consistency over acceleration.
                  </h3>
                  <p className="text-base text-charcoal leading-body">
                    Stable, repeatable returns matter more than outlier months.
                  </p>
                </div>
              </li>
            </ol>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
