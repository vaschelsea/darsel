'use client';

import { useState, useEffect, useRef } from 'react';

const RETAIL_PIP = 1.8;
const PREMIUM_PIP = 1.0;
const DARSAL_STANDARD = 0.6;
const DARSAL_VOLUME = 0.5;
const MAX_SCALE = 2.0;

function calcSavings(darsalPip: number): number {
  return Math.round((RETAIL_PIP - darsalPip) * 100);
}

export default function HeroAnimation() {
  const [tier, setTier] = useState<'standard' | 'volume'>('standard');
  const [entered, setEntered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const darsalPip = tier === 'standard' ? DARSAL_STANDARD : DARSAL_VOLUME;
  const savings = calcSavings(darsalPip);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setEntered(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bars = [
    {
      label: 'Retail broker',
      pip: RETAIL_PIP,
      barColor: 'bg-[#6B7280]',
      textColor: 'text-[#CDD1D6]',
      pipColor: 'text-[#CDD1D6]',
      delay: '0s',
    },
    {
      label: 'Premium broker',
      pip: PREMIUM_PIP,
      barColor: 'bg-[#7D8896]',
      textColor: 'text-[#E8EAED]',
      pipColor: 'text-[#E8EAED]',
      delay: '0.15s',
    },
    {
      label: 'DARSAL',
      pip: darsalPip,
      barColor: 'bg-gradient-to-r from-[#C9A96E] to-[#E2C992]',
      textColor: 'text-[#C9A96E]',
      pipColor: 'text-[#C9A96E]',
      isGold: true,
      delay: '0.3s',
    },
  ];

  return (
    <div ref={ref} className="w-full max-w-[520px] mt-10 pt-8 border-t border-white/[0.08]">
      {/* Spread comparison bars */}
      <div className="space-y-5">
        {bars.map((bar) => {
          const widthPercent = (bar.pip / MAX_SCALE) * 100;
          return (
            <div
              key={bar.label}
              className="transition-all duration-700 ease-out"
              style={{
                opacity: entered ? 1 : 0,
                transform: entered ? 'translateY(0)' : 'translateY(12px)',
                transitionDelay: bar.delay,
              }}
            >
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
                    width: entered ? `${widthPercent}%` : '0%',
                    transition: `width 1.2s ease ${bar.delay}`,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Volume tier toggles */}
      <div
        className="flex gap-3 mt-7 transition-all duration-700 ease-out"
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? 'translateY(0)' : 'translateY(12px)',
          transitionDelay: '0.5s',
        }}
      >
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
        className="mt-6 px-5 py-4 rounded-[4px] transition-all duration-700 ease-out"
        style={{
          border: '1px solid rgba(201, 169, 110, 0.2)',
          opacity: entered ? 1 : 0,
          transform: entered ? 'translateY(0)' : 'translateY(12px)',
          transitionDelay: '0.65s',
        }}
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
      <p
        className="mt-5 font-inter text-[14px] text-[#8B919A] transition-all duration-700 ease-out"
        style={{
          opacity: entered ? 1 : 0,
          transform: entered ? 'translateY(0)' : 'translateY(12px)',
          transitionDelay: '0.8s',
        }}
      >
        All-in means all-in.{' '}
        <span className="text-[#C9A96E]">Zero additional commissions.</span>
      </p>
    </div>
  );
}
