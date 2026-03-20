import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import ScrollReveal from '@/components/ScrollReveal';

export const metadata: Metadata = {
  title: 'Performance | DARSAL',
  description: 'Historical trading performance data for the DARSAL trading model. 22+ years of live results.',
  openGraph: { images: ['/og-image.png'] },
};

type MonthValue = number | null;

interface YearData {
  year: string;
  months: MonthValue[];
  monthAvg: number | null;
  yearTotal: number | null;
}

const performanceData: YearData[] = [
  { year: '2004', months: [-1.56, -1.37, 5.99, 5.44, -2.30, 3.66, 7.54, 8.02, 7.54, 4.55, 6.44, 3.50], monthAvg: 3.72, yearTotal: 44.65 },
  { year: '2005', months: [1.98, 3.86, 3.62, 7.72, -3.44, 6.44, 8.11, 6.07, 4.76, -4.79, 13.22, 7.44], monthAvg: 4.15, yearTotal: 49.84 },
  { year: '2006', months: [2.68, 6.23, -2.48, 7.01, 7.10, 0.30, 1.71, 3.90, 2.67, 5.50, 6.14, 1.31], monthAvg: 3.35, yearTotal: 40.15 },
  { year: '2007', months: [3.11, 1.72, 4.06, -0.99, 5.64, 3.78, 9.87, 4.32, -2.87, 13.90, 7.08, -3.32], monthAvg: 3.64, yearTotal: 43.69 },
  { year: '2008', months: [9.15, -3.16, -6.82, -0.18, 7.86, 10.32, 12.56, 20.02, 32.62, null, null, null], monthAvg: 8.16, yearTotal: 73.40 },
  { year: '2009', months: [null, null, -1.02, -0.63, 2.17, 9.35, -19.99, 3.27, 2.64, 0.00, null, null], monthAvg: 1.92, yearTotal: 15.34 },
  { year: '2010', months: [2.41, -4.98, 7.69, 12.38, 5.22, 3.62, 0.85, 9.41, 3.72, -4.69, -2.35, 7.01], monthAvg: 3.55, yearTotal: 42.63 },
  { year: '2011', months: [9.06, 11.60, 0.25, -8.83, 3.76, 5.92, -4.88, -3.62, -0.78, 9.11, -7.48, 5.37], monthAvg: 1.02, yearTotal: 12.27 },
  { year: '2012', months: [1.15, 2.36, -4.77, 0.99, 14.22, -2.31, -6.27, 3.18, 8.21, null, 13.15, 12.00], monthAvg: 3.00, yearTotal: 35.96 },
  { year: '2013', months: [5.29, 5.68, -1.57, -2.15, 2.46, 3.99, 6.45, 0.96, -0.09, 5.13, null, null], monthAvg: 1.74, yearTotal: 20.32 },
  { year: '2014', months: [12.32, -9.38, -1.41, 5.74, 14.91, 3.22, 1.56, 6.36, 8.22, -3.54, null, -4.97], monthAvg: 3.24, yearTotal: 38.89 },
  { year: '2015', months: [8.78, -0.14, -1.08, 9.22, 2.17, -3.69, -1.48, -9.44, 12.51, 5.44, 7.61, 2.11], monthAvg: 3.29, yearTotal: 26.34 },
  { year: '2016', months: [-0.31, 8.52, 22.51, 1.06, -0.49, -1.95, -8.63, 4.13, null, -0.67, 2.54, 3.75], monthAvg: 0.36, yearTotal: 4.34 },
  { year: '2017', months: [-3.47, 5.62, 1.31, 11.02, 6.09, -7.19, 1.85, 3.49, 11.75, 6.88, -0.68, -1.27], monthAvg: null, yearTotal: 23.20 },
  { year: '2018', months: [-0.96, -0.14, -4.15, 8.49, null, -4.13, 6.76, 2.22, 11.71, 4.79, 0.96, 9.41], monthAvg: 2.60, yearTotal: 31.22 },
  { year: '2019', months: [2.29, 1.37, 8.99, -1.14, -1.55, 6.55, 0.76, 11.70, 0.43, 5.12, -0.14, 1.29], monthAvg: 2.50, yearTotal: 34.74 },
  { year: '2020', months: [5.55, 1.77, 3.22, 7.76, -4.66, 6.30, 9.99, 6.43, 11.72, -7.44, null, 2.31], monthAvg: null, yearTotal: 46.78 },
  { year: '2021', months: [6.95, 4.48, 3.14, 1.81, -3.45, 1.49, -4.32, -1.40, 4.98, 5.99, 8.89, 5.85], monthAvg: 3.20, yearTotal: 38.37 },
  { year: '2022', months: [1.54, -4.28, -5.41, -7.62, 8.77, 8.64, 11.22, 1.71, 3.54, -4.22, 3.79, 3.19], monthAvg: 3.03, yearTotal: 36.34 },
  { year: '2023', months: [2.31, 5.28, 8.44, -0.43, 3.37, 9.13, 3.76, null, 4.45, -8.55, null, -0.71], monthAvg: 2.60, yearTotal: 31.18 },
  { year: '2024', months: [-1.39, 8.66, 11.24, 5.37, null, 7.54, 8.21, -6.44, 3.18, -6.95, 9.33, -7.14], monthAvg: 3.30, yearTotal: 39.65 },
  { year: '2025', months: [-1.18, -5.77, 2.98, 8.14, 5.79, -1.33, -3.52, 4.44, 8.22, 7.36, 3.98, -1.75], monthAvg: 2.31, yearTotal: 27.72 },
  { year: '2026', months: [1.55, 3.86, null, null, null, null, null, null, null, null, null, null], monthAvg: null, yearTotal: 6.05 },
];

const monthHeaders = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];

function CellValue({ value }: { value: number | null }) {
  if (value === null) return <span className="text-cool-gray">—</span>;
  const isNeg = value < 0;
  return (
    <span className={isNeg ? 'text-red-dark' : 'text-charcoal'}>
      {value.toFixed(2)}
    </span>
  );
}

export default function PerformancePage() {
  return (
    <>
      <Hero
        headline="Performance"
        subheadline="Live performance data for BOB and institutional spread conditions."
      />

      {/* Summary Stats */}
      <section className="py-16 md:py-20 bg-bg-primary">
        <div className="mx-auto max-w-content px-6">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: 'Years of Live Data', value: '22+' },
                { label: 'Avg Monthly Return', value: '3.00%' },
                { label: 'Avg Yearly Return', value: '35.24%' },
                { label: 'Best Year (2008)', value: '73.40%' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-white border border-border-light rounded-lg p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                >
                  <p className="font-mono text-2xl md:text-3xl text-gold font-medium mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-cool-gray tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Monthly Returns Table */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-content px-6">
          <ScrollReveal>
            <h2 className="text-2xl md:text-[28px] font-medium text-charcoal leading-heading tracking-heading text-center mb-4">
              Historical Trading Performance
            </h2>
            <p className="text-center text-sm text-cool-gray mb-10">
              Illustrative historical results based on the DARSAL trading model. All values in %.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full min-w-[800px] text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-border-light">
                    <th className="py-3 px-2 text-left font-mono text-xs text-cool-gray uppercase tracking-caps w-16">
                      Year
                    </th>
                    {monthHeaders.map((m) => (
                      <th
                        key={m}
                        className="py-3 px-2 text-right font-mono text-xs text-cool-gray uppercase tracking-caps"
                      >
                        {m}
                      </th>
                    ))}
                    <th className="py-3 px-2 text-right font-mono text-xs text-gold uppercase tracking-caps">
                      Month
                    </th>
                    <th className="py-3 px-2 text-right font-mono text-xs text-gold uppercase tracking-caps font-semibold">
                      Year
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((row, rowIdx) => (
                    <tr
                      key={row.year}
                      className={`border-b border-border-light ${rowIdx % 2 === 0 ? 'bg-white' : 'bg-[#FAFBFC]'}`}
                    >
                      <td className="py-2.5 px-2 font-mono text-xs font-medium text-charcoal">
                        {row.year}
                      </td>
                      {row.months.map((val, i) => (
                        <td key={i} className="py-2.5 px-2 text-right font-mono text-xs">
                          <CellValue value={val} />
                        </td>
                      ))}
                      <td className="py-2.5 px-2 text-right font-mono text-xs font-medium">
                        <CellValue value={row.monthAvg} />
                      </td>
                      <td className="py-2.5 px-2 text-right font-mono text-xs font-semibold">
                        {row.yearTotal !== null ? (
                          <span className={row.yearTotal < 0 ? 'text-red-dark' : 'text-gold'}>
                            {row.yearTotal.toFixed(2)}
                          </span>
                        ) : (
                          <span className="text-cool-gray">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                  {/* Average row */}
                  <tr className="border-t-2 border-gold bg-[#FDFBF7]">
                    <td className="py-3 px-2 font-mono text-xs font-bold text-charcoal">
                      Avg
                    </td>
                    {Array.from({ length: 12 }).map((_, i) => (
                      <td key={i} className="py-3 px-2" />
                    ))}
                    <td className="py-3 px-2 text-right font-mono text-xs font-bold text-gold">
                      3.00
                    </td>
                    <td className="py-3 px-2 text-right font-mono text-xs font-bold text-gold">
                      35.24
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Disclaimer */}
          <ScrollReveal>
            <p className="mt-10 text-center text-xs text-cool-gray italic">
              Historical performance should not be taken as a guarantee of future results.
            </p>
            <p className="mt-6 text-center text-sm text-charcoal">
              For detailed performance data, contact us at{' '}
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
