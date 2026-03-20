import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Performance | DARSAL',
  description: 'Performance data available upon request. Contact us at contact@darsal.net.',
  openGraph: { images: ['/og-image.png'] },
};

export default function PerformancePage() {
  return (
    <>
      <Hero
        headline="Performance"
        subheadline="Live performance data for BOB and institutional spread conditions."
      />

      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="mx-auto max-w-text px-6 text-center">
          <ScrollReveal>
            <p className="text-base text-charcoal leading-body">
              Performance data available upon request. Contact us at{' '}
              <a
                href="mailto:contact@darsal.net"
                className="text-gold hover:underline transition-colors duration-200"
              >
                contact@darsal.net
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
