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
              {/* Briefcase */}
              <rect x="10" y="24" width="44" height="28" rx="3" stroke="#C9A96E" strokeWidth="1.5" fill="rgba(201,169,110,0.06)" />
              <path d="M24 24V18C24 15.8 25.8 14 28 14H36C38.2 14 40 15.8 40 18V24" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Handshake inside */}
              <path d="M22 38C22 38 26 34 30 34C32 34 33 35 33 35" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M42 38C42 38 38 34 34 34C33 34 33 35 33 35" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M33 35L37 39" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M33 35L27 41" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Rising chart line above briefcase */}
              <polyline points="18,44 26,42 34,44 42,40 48,42" stroke="rgba(201,169,110,0.4)" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              {/* Badge/seal accent */}
              <circle cx="50" cy="18" r="6" stroke="#C9A96E" strokeWidth="1" fill="rgba(201,169,110,0.1)" />
              <polyline points="47,18 49,20 53,16" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
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
