import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import HeroAnimation from '@/components/HeroAnimation';
import ScrollReveal from '@/components/ScrollReveal';
import StatCards from '@/components/StatCards';

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
        videoSrc="/horizontal.mp4"
      >
        <p className="mt-4 max-w-text text-[15px] md:text-base text-[#C5C9CF] leading-body">
          The trading conditions hedge funds negotiate — now available to independent traders managing their own capital.
        </p>
      </Hero>

      {/* Introduction Block */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="mx-auto max-w-content px-6">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-16 items-center">
            {/* Left — Mission statement */}
            <ScrollReveal>
              <div>
                <span className="inline-block text-[33px] font-heading tracking-[2px] text-gold uppercase mb-4" style={{ wordSpacing: '-0.1em' }}>Who We Are</span>
                <p className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-5">
                  DARSAL operates at the intersection of private wealth management and institutional currency trading.
                </p>
                <p className="text-[15px] text-cool-gray leading-body">
                  Built on 40+ years in private financial services and over two decades specializing in global FX markets, we focus on one thing: giving serious traders access to professional execution conditions.
                </p>
              </div>
            </ScrollReveal>

            {/* Center divider */}
            <div className="hidden md:flex flex-col items-center gap-3 self-stretch py-4">
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 2L12.5 7.5L18 10L12.5 12.5L10 18L7.5 12.5L2 10L7.5 7.5L10 2Z" fill="#C9A96E" opacity="0.6" />
              </svg>
              <div className="w-px flex-1 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            </div>

            {/* Right — Differentiator + stats */}
            <ScrollReveal>
              <div>
                <div className="bg-white border border-border-light rounded-lg p-6 md:p-8 shadow-[0_1px_3px_rgba(0,0,0,0.08)] mb-6">
                  <p className="text-[15px] text-charcoal leading-body">
                    We provide the <span className="text-gold font-medium">infrastructure and execution environment</span> that active, experienced traders actually need.
                  </p>
                </div>
                <StatCards />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* What We Offer — Three Feature Cards */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-content px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading text-center mb-16">
              What We Offer
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
              <span className="text-white font-bold">BOB</span> — Our Secured Trading Machine
            </h2>
            <p className="mx-auto max-w-text text-[15px] md:text-base text-light-gray leading-body text-center mb-16">
              For investors seeking passive exposure to FX markets, DARSAL operates BOB: a rule-based, fully automated trading system structured for monthly consistent yield.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                text: 'Built on over 23 years of live trading history',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <circle cx="24" cy="24" r="18" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
                    <path d="M24 12V24L32 28" stroke="#C9A96E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M10 24C10 16.3 16.3 10 24 10" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="4 3" />
                    <path d="M38 24C38 31.7 31.7 38 24 38" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" fill="none" strokeDasharray="4 3" />
                  </svg>
                ),
              },
              {
                text: 'Designed for capital stability, not speculation',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path d="M24 4L6 12V22C6 33.1 13.8 43.3 24 46C34.2 43.3 42 33.1 42 22V12L24 4Z" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" strokeLinejoin="round" />
                    <polyline points="14,28 20,24 26,26 34,18" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="30,18 34,18 34,22" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                text: 'Targets low single-digit monthly yield under strict capital control',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <circle cx="24" cy="24" r="18" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
                    <circle cx="24" cy="24" r="12" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.4" />
                    <circle cx="24" cy="24" r="6" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.6" />
                    <circle cx="24" cy="24" r="2.5" fill="#C9A96E" />
                    <line x1="24" y1="2" x2="24" y2="8" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
                    <line x1="24" y1="40" x2="24" y2="46" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
                    <line x1="2" y1="24" x2="8" y2="24" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
                    <line x1="40" y1="24" x2="46" y2="24" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                text: 'No positions carried overnight — each session resets to neutral',
                icon: (
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                    <path d="M36 12C36 12 32 8 24 8C14.1 8 6 16.1 6 26" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <polyline points="30,12 36,12 36,18" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 36C12 36 16 40 24 40C33.9 40 42 31.9 42 22" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
                    <polyline points="18,36 12,36 12,30" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="20" y1="20" x2="28" y2="28" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                    <line x1="28" y1="20" x2="20" y2="28" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={i}>
                <div className="bg-white/[0.04] border border-white/10 rounded-lg p-6 md:p-8 text-center">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <p className="text-[15px] text-light-gray leading-body">{item.text}</p>
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
