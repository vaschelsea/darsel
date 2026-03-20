import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import { MAMHeroAnimation } from '@/components/HeroAnimations';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'MAM | DARSAL',
  description: "DARSAL's MAM structure allows investors to participate in our trading strategy without managing trades themselves.",
  openGraph: { images: ['/og-image.png'] },
};

export default function MAMPage() {
  return (
    <>
      <Hero
        headline="Multi-Account Manager"
        subheadline="DARSAL's MAM structure allows investors to participate in our trading strategy without managing trades themselves. Here's exactly what happens:"
        rightContent={<MAMHeroAnimation />}
      />

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="mx-auto max-w-text px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading mb-12">
              How It Works
            </h2>
            <ul className="space-y-6">
              {[
                'Orders are executed simultaneously across all connected investor accounts',
                "Results are allocated proportionally to each investor's capital",
                'You remain the full owner of your account at all times',
                'DARSAL has no access to your deposits or withdrawals',
                'Full activity remains transparent and traceable through your broker dashboard',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full border border-gold flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6L5 8.5L9.5 4" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <p className="text-base text-charcoal leading-body">{item}</p>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-content px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading text-center mb-4">
              Fee Structure
            </h2>
            <p className="text-center text-base text-charcoal leading-body mb-12">
              No management fees. We earn only when you earn.
            </p>
          </ScrollReveal>
          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full max-w-2xl mx-auto border border-border-light">
                <thead>
                  <tr className="bg-navy-deep text-white">
                    <th className="text-left text-sm font-medium py-3 px-4">Item</th>
                    <th className="text-left text-sm font-medium py-3 px-4">Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Minimum Recommended Commitment', '1 Year'],
                    ['Management Fees', '0%'],
                    ['Banking Fees', 'Standard broker fees apply'],
                    ['Monthly Performance Fee (on gain only)', '20%'],
                    ['Calculation Method', 'High Water Mark'],
                    ['Withdrawal Access', '24/7'],
                  ].map(([item, detail], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-bg-primary'}>
                      <td className="text-sm text-charcoal py-3 px-4 border-t border-border-light">{item}</td>
                      <td className="text-sm py-3 px-4 border-t border-border-light">
                        <span className={
                          detail === '0%' || detail === '20%' || detail === '24/7'
                            ? 'font-mono text-gold tracking-mono'
                            : 'text-charcoal'
                        }>
                          {detail}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* High Water Mark Explainer */}
      <section className="py-20 md:py-28 bg-bg-primary">
        <div className="mx-auto max-w-text px-6">
          <ScrollReveal>
            <div className="bg-white border border-border-light rounded-lg p-8 md:p-12 shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
              <h3 className="text-lg md:text-xl font-medium text-charcoal leading-heading tracking-heading mb-4">
                What &ldquo;High Water Mark&rdquo; Means
              </h3>
              <p className="text-base text-charcoal leading-body">
                You only pay the 20% performance fee on net new gains. If your account drops and then recovers, you pay nothing on the recovery — only on profits above your previous peak. This aligns our incentives completely with yours.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
