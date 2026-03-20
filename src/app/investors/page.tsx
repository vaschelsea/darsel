import type { Metadata } from 'next';
import Hero from '@/components/Hero';
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
      />

      {/* Private Investors */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="mx-auto max-w-text px-6">
          <ScrollReveal>
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
