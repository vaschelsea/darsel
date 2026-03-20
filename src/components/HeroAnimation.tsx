'use client';

import { useState } from 'react';

const RETAIL_PIP = 1.8;
const PREMIUM_PIP = 1.0;
const DARSAL_STANDARD = 0.6;
const DARSAL_VOLUME = 0.5;
const MAX_SCALE = 2.0;

// 100 trades/day savings vs retail, scaled proportionally
function calcSavings(darsalPip: number): number {
  return Math.round((RETAIL_PIP - darsalPip) * 100);
}

export default function HeroAnimation() {
  const [tier, setTier] = useState<'standard' | 'volume'>('standard');
  const darsalPip = tier === 'standard' ? DARSAL_STANDARD : DARSAL_VOLUME;
  const savings = calcSavings(darsalPip);

  const barMaxWidth = 100; // percentage

  const bars = [
    {
      label: 'Retail broker',
      pip: RETAIL_PIP,
      barColor: 'bg-[#3A3F47]',
      textColor: 'text-[#9CA3AF]',
      pipColor: 'text-[#9CA3AF]',
    },
    {
      label: 'Premium broker',
      pip: PREMIUM_PIP,
      barColor: 'bg-[#4B5563]',
      textColor: 'text-[#D1D5DB]',
      pipColor: 'text-[#D1D5DB]',
    },
    {
      label: 'DARSAL',
      pip: darsalPip,
      barColor: 'bg-gradient-to-r from-[#C9A96E] to-[#E2C992]',
      textColor: 'text-[#C9A96E]',
      pipColor: 'text-[#C9A96E]',
      isGold: true,
    },
  ];

  return (
    <div className="w-full max-w-[520px]">
      {/* Spread comparison bars */}
      <div className="space-y-4">
        {bars.map((bar) => {
          const widthPercent = (bar.pip / MAX_SCALE) * barMaxWidth;
          return (
            <div key={bar.label}>
              <div className="flex items-center justify-between mb-1.5">
                <span
                  className={`font-inter text-[13px] ${bar.textColor} ${bar.isGold ? 'font-medium' : ''}`}
                >
                  {bar.label}
                </span>
                <span
                  className={`font-mono text-[15px] font-semibold ${bar.pipColor}`}
                >
                  {bar.pip.toFixed(1)} pip
                </span>
              </div>
              <div className="w-full h-[10px] rounded-[3px] bg-white/[0.04]">
                <div
                  className={`h-full rounded-[3px] ${bar.barColor}`}
                  style={{
                    width: `${widthPercent}%`,
                    transition: 'width 1.2s ease',
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Volume tier toggles */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setTier('standard')}
          className={`font-mono text-[12px] tracking-[0.5px] px-4 py-2 rounded-[3px] border transition-all duration-300 ${
            tier === 'standard'
              ? 'border-[#C9A96E] bg-[#C9A96E]/10 text-[#C9A96E]'
              : 'border-white/10 text-[#9CA3AF] hover:border-white/20'
          }`}
        >
          Standard
        </button>
        <button
          onClick={() => setTier('volume')}
          className={`font-mono text-[12px] tracking-[0.5px] px-4 py-2 rounded-[3px] border transition-all duration-300 ${
            tier === 'volume'
              ? 'border-[#C9A96E] bg-[#C9A96E]/10 text-[#C9A96E]'
              : 'border-white/10 text-[#9CA3AF] hover:border-white/20'
          }`}
        >
          1B+ EUR/month
        </button>
      </div>

      {/* Savings callout */}
      <div
        className="mt-6 px-5 py-4 rounded-[4px]"
        style={{ border: '1px solid rgba(201, 169, 110, 0.2)' }}
      >
        <p className="font-inter text-[13px] leading-[1.6] text-[#9CA3AF]">
          At 100 trades/day, DARSAL saves you{' '}
          <span className="font-mono font-semibold text-[#C9A96E]">
            ~{savings} pips/month
          </span>{' '}
          vs retail — that&apos;s the difference between breakeven and profitability
          for most scalping strategies.
        </p>
      </div>

      {/* All-in line */}
      <p className="mt-5 font-inter text-[14px] text-[#6B7280]">
        All-in means all-in.{' '}
        <span className="text-[#C9A96E]">Zero additional commissions.</span>
      </p>
    </div>
  );
}
