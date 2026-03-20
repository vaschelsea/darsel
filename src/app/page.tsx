import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Home | DARSAL',
  description: 'DARSAL operates at the intersection of private wealth management and institutional currency trading.',
  openGraph: { images: ['/og-image.png'] },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        label="EURUSD All-In Spread"
        displayNumber="0.6 Pip"
        headline=""
        subheadline="No commission. No stop level. No freeze level."
      >
        <p className="mt-4 mx-auto max-w-text text-[15px] md:text-base text-light-gray leading-body">
          The trading conditions hedge funds negotiate — now available to independent traders managing their own capital.
        </p>
      </Hero>

      {/* Introduction Block */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="mx-auto max-w-text px-6">
          <ScrollReveal>
            <p className="text-base text-charcoal leading-body mb-6">
              DARSAL operates at the intersection of private wealth management and institutional currency trading.
            </p>
            <p className="text-base text-charcoal leading-body mb-6">
              Built on 40+ years in private financial services and over two decades specializing in global FX markets, we focus on one thing: giving serious traders access to professional execution conditions.
            </p>
            <p className="text-base text-charcoal leading-body">
              We don&apos;t sell courses. We don&apos;t run signal groups. We provide the infrastructure and execution environment that active, experienced traders actually need.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What We Offer — Three Feature Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-content px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading text-center mb-16">
              What We Offer — In Plain Terms
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  Institutional Spreads
                </h3>
                <p className="text-base text-charcoal leading-body">
                  Through the trading volume DARSAL has generated over many years, we&apos;ve negotiated preferential execution conditions with established broker partners. EURUSD all-in spread starts at <span className="font-mono text-gold">0.6 pip</span>, dropping to <span className="font-mono text-gold">0.5 pip</span> once monthly traded volume exceeds EUR 1 billion.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  No Hidden Costs
                </h3>
                <p className="text-base text-charcoal leading-body">
                  Zero additional commissions. Zero stop level. Zero freeze level. Trading without artificial execution barriers.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  Your Capital, Your Control
                </h3>
                <p className="text-base text-charcoal leading-body">
                  Each trader operates through an individual account. Capital remains entirely under the account holder&apos;s control at all times. We never touch your money.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BOB Section */}
      <section className="py-20 md:py-28" style={{ background: 'var(--hero-gradient)' }}>
        <div className="mx-auto max-w-content px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-[28px] font-medium text-white leading-heading tracking-heading text-center mb-4">
              <span className="text-red-dark">BOB</span> — Our Secured Trading Machine
            </h2>
            <p className="mx-auto max-w-text text-[15px] md:text-base text-light-gray leading-body text-center mb-16">
              For investors seeking passive exposure to FX markets, DARSAL operates BOB: a rule-based, fully automated trading system structured for monthly consistent yield.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Built on over 23 years of live trading history',
              'Designed for capital stability, not speculation',
              'Targets low single-digit monthly yield under strict capital control',
              'No positions carried overnight — each session resets to neutral',
            ].map((stat, i) => (
              <ScrollReveal key={i}>
                <div className="text-center">
                  <p className="text-[15px] text-light-gray leading-body">{stat}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="mx-auto max-w-content px-6">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <Link
                href="/access"
                className="block text-center border border-gold text-gold rounded-[2px] px-7 py-4 text-sm tracking-[0.5px] font-inter font-medium hover:bg-gold hover:text-navy-deep transition-all duration-200"
              >
                I trade my own capital
              </Link>
              <Link
                href="/mam"
                className="block text-center border border-gold text-gold rounded-[2px] px-7 py-4 text-sm tracking-[0.5px] font-inter font-medium hover:bg-gold hover:text-navy-deep transition-all duration-200"
              >
                I want managed exposure
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
