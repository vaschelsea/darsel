import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { InvestorsHeroAnimation } from '@/components/HeroAnimations';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Investors | DARSAL',
  description: 'DARSAL addresses each investor type directly — private investors, professional advisors, and corporate & family offices.',
  openGraph: { images: ['/og-image.png'] },
};

export default function InvestorsPage() {
  return (
    <>
      <Hero
        headline="Investors"
        subheadline="We understand your world and what you need."
        rightContent={<InvestorsHeroAnimation />}
      />

      {/* Private Investors */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="mx-auto max-w-text px-6">
          <ScrollReveal>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-6 offer-icon" aria-hidden="true">
              <circle cx="32" cy="20" r="10" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
              <path d="M12 52C12 42 21 34 32 34C43 34 52 42 52 52" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <rect x="26" y="44" width="12" height="14" rx="2" stroke="#C9A96E" strokeWidth="1" fill="rgba(201,169,110,0.1)" />
              <line x1="32" y1="47" x2="32" y2="50" stroke="#C9A96E" strokeWidth="1" strokeLinecap="round" />
            </svg>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading mb-8">
              Private Investors
            </h2>
            <p className="text-base text-charcoal leading-body">
              You hold an established portfolio. You&apos;re looking for measured risk and a passive income strategy that doesn&apos;t require your daily attention. DARSAL provides disciplined, rule-based FX exposure through <span className="text-red-dark font-medium">BOB</span> — designed specifically for capital you want working without you watching it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Professional Investors */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-text px-6">
          <ScrollReveal>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-6 offer-icon" aria-hidden="true">
              <circle cx="22" cy="18" r="8" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
              <circle cx="42" cy="18" r="8" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
              <path d="M6 48C6 40 13 34 22 34" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M58 48C58 40 51 34 42 34" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M22 34C26 30 38 30 42 34" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <polyline points="26,42 32,48 38,42" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <polyline points="20,54 28,50 36,52 44,48 52,50" stroke="rgba(201,169,110,0.4)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading mb-8">
              Professional Investors &amp; Advisors
            </h2>
            <p className="text-base text-charcoal leading-body">
              You manage capital for yourself or your clients and want to delegate part of it to a disciplined external strategy. DARSAL gives you a technically rigorous, transparent partner with over two decades of FX specialization. You can offer your clients robust, non-correlated returns backed by a real track record.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Corporate & Family Offices */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="mx-auto max-w-text px-6">
          <ScrollReveal>
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-6 offer-icon" aria-hidden="true">
              <rect x="14" y="22" width="36" height="32" rx="2" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
              <rect x="26" y="8" width="12" height="14" rx="1" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
              <line x1="32" y1="22" x2="32" y2="14" stroke="#C9A96E" strokeWidth="1" />
              <rect x="20" y="30" width="6" height="6" rx="1" stroke="rgba(201,169,110,0.5)" strokeWidth="1" fill="rgba(201,169,110,0.08)" />
              <rect x="29" y="30" width="6" height="6" rx="1" stroke="rgba(201,169,110,0.5)" strokeWidth="1" fill="rgba(201,169,110,0.08)" />
              <rect x="38" y="30" width="6" height="6" rx="1" stroke="rgba(201,169,110,0.5)" strokeWidth="1" fill="rgba(201,169,110,0.08)" />
              <rect x="20" y="40" width="6" height="6" rx="1" stroke="rgba(201,169,110,0.5)" strokeWidth="1" fill="rgba(201,169,110,0.08)" />
              <rect x="38" y="40" width="6" height="6" rx="1" stroke="rgba(201,169,110,0.5)" strokeWidth="1" fill="rgba(201,169,110,0.08)" />
              <rect x="28" y="44" width="8" height="10" rx="1" stroke="#C9A96E" strokeWidth="1" fill="rgba(201,169,110,0.12)" />
              <path d="M32 4L24 10H40L32 4Z" stroke="#C9A96E" strokeWidth="1" fill="rgba(201,169,110,0.1)" strokeLinejoin="round" />
            </svg>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading mb-8">
              Corporate &amp; Family Offices
            </h2>
            <p className="text-base text-charcoal leading-body">
              You&apos;re seeking non-correlated alpha for portfolio diversification. DARSAL provides full visibility and control over allocations and performance — no black boxes, no opaque structures. Every trade is visible in your own account.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Supervision */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-text px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading mb-8">
              Supervision
            </h2>
            <p className="text-base text-charcoal leading-body mb-8">
              Wohlwend Alexandre — International private banking and FX trading professional. Active in capital management since 1986.
            </p>
            <blockquote className="border-l-2 border-gold pl-6 py-2">
              <p className="text-lg md:text-xl font-light text-charcoal leading-heading italic">
                &ldquo;We manage two assets: your money and our reputation.&rdquo;
              </p>
            </blockquote>
            <div className="mt-12 space-y-3">
              <p className="text-base text-charcoal leading-body">
                <span className="text-cool-gray">Phone:</span>{' '}
                <span className="font-mono tracking-mono">+41 79 355 42 79</span>
                {' '}<span className="text-cool-gray mx-2">|</span>{' '}
                <span className="font-mono tracking-mono">+34 64 134 79 62</span>
              </p>
              <p className="text-base text-charcoal leading-body">
                <span className="text-cool-gray">Email:</span>{' '}
                <a href="mailto:contact@darsal.net" className="text-gold hover:underline transition-colors duration-200">
                  contact@darsal.net
                </a>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
