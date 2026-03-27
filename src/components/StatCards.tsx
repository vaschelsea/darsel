'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { end: 40, suffix: '+', label: 'Years', decimals: 0 },
  { end: 20, suffix: '+', label: 'FX Years', decimals: 0 },
  { end: 0.6, suffix: '', label: 'Pip Spread', decimals: 1 },
];

function useCountUp(end: number, decimals: number, started: boolean, duration = 1200) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>(0);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [started, end, decimals, duration]);

  return value;
}

function StatCard({ end, suffix, label, decimals, started }: {
  end: number; suffix: string; label: string; decimals: number; started: boolean;
}) {
  const value = useCountUp(end, decimals, started);
  const display = decimals > 0 ? value.toFixed(decimals) : Math.round(value);

  return (
    <div className="bg-navy-mid rounded-lg py-5 px-3 text-center">
      <p className="text-2xl md:text-3xl font-medium text-white font-mono">
        {display}
        {suffix && <span className="text-gold">{suffix}</span>}
      </p>
      <p className="text-[11px] font-mono tracking-[1px] text-light-gray uppercase mt-1.5">
        {label}
      </p>
    </div>
  );
}

export default function StatCards() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-3">
      {stats.map((s) => (
        <StatCard key={s.label} {...s} started={started} />
      ))}
    </div>
  );
}
