import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import HeroAnimation from '@/components/HeroAnimation';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Home | DARSAL',
  description: 'DARSAL operates at the intersection of private wealth management and institutional currency trading.',
  openGraph: { images: ['/og-image.png'] },
};

function SpreadIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5 offer-icon" aria-hidden="true">
      {/* Two converging price lines showing tight spread */}
      <polyline points="6,16 14,18 22,14 30,17 38,12 42,14" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="6,26 14,28 22,24 30,27 38,22 42,24" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
      {/* Spread bracket */}
      <line x1="43" y1="14" x2="45" y2="14" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="45" y1="14" x2="45" y2="24" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      <line x1="43" y1="24" x2="45" y2="24" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
      {/* Bar chart at bottom */}
      <rect x="8" y="36" width="5" height="6" rx="1" fill="rgba(201,169,110,0.2)" stroke="#C9A96E" strokeWidth="0.75" />
      <rect x="16" y="33" width="5" height="9" rx="1" fill="rgba(201,169,110,0.3)" stroke="#C9A96E" strokeWidth="0.75" />
      <rect x="24" y="35" width="5" height="7" rx="1" fill="rgba(201,169,110,0.2)" stroke="#C9A96E" strokeWidth="0.75" />
      <rect x="32" y="31" width="5" height="11" rx="1" fill="rgba(201,169,110,0.35)" stroke="#C9A96E" strokeWidth="0.75" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5 offer-icon" aria-hidden="true">
      {/* Shield outline */}
      <path
        d="M24 4L6 12V22C6 33.1 13.8 43.3 24 46C34.2 43.3 42 33.1 42 22V12L24 4Z"
        stroke="#C9A96E"
        strokeWidth="1.5"
        fill="rgba(201,169,110,0.06)"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Checkmark */}
      <polyline
        points="16,24 22,30 33,18"
        stroke="#C9A96E"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-5 offer-icon" aria-hidden="true">
      {/* Lock body */}
      <rect
        x="10"
        y="22"
        width="28"
        height="20"
        rx="3"
        stroke="#C9A96E"
        strokeWidth="1.5"
        fill="rgba(201,169,110,0.06)"
      />
      {/* Lock shackle */}
      <path
        d="M16 22V16C16 11.6 19.6 8 24 8C28.4 8 32 11.6 32 16V22"
        stroke="#C9A96E"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* Keyhole */}
      <circle cx="24" cy="31" r="3" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.15)" />
      <line x1="24" y1="34" x2="24" y2="38" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero
        label="EURUSD All-In Spread"
        displayNumber="0.6 Pip"
        headline=""
        subheadline="No commission. No stop level. No freeze level."
        rightContent={<HeroAnimation />}
      >
        <p className="mt-4 max-w-text text-[15px] md:text-base text-light-gray leading-body">
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
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <SpreadIcon />
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  Institutional Spreads
                </h3>
                <p className="text-base text-charcoal leading-body">
                  Through the trading volume DARSAL has generated over many years, we&apos;ve negotiated preferential execution conditions with established broker partners. EURUSD all-in spread starts at <span className="font-mono text-gold">0.6 pip</span>, dropping to <span className="font-mono text-gold">0.5 pip</span> once monthly traded volume exceeds EUR 1 billion.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <ShieldIcon />
                <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                  No Hidden Costs
                </h3>
                <p className="text-base text-charcoal leading-body">
                  Zero additional commissions. Zero stop level. Zero freeze level. Trading without artificial execution barriers.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="bg-white border border-border-light rounded-lg p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-300">
                <LockIcon />
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
