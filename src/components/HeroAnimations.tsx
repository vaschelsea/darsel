'use client';

/* ── Strategy Hero ── Chess/calculation concept ── */
export function StrategyHeroAnimation() {
  return (
    <div className="w-full max-w-[400px]">
      <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
        {/* Grid pattern */}
        {Array.from({ length: 6 }).map((_, i) => (
          <line key={`vg-${i}`} x1={60 + i * 56} y1="30" x2={60 + i * 56} y2="270" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {Array.from({ length: 5 }).map((_, i) => (
          <line key={`hg-${i}`} x1="40" y1={60 + i * 50} x2="360" y2={60 + i * 50} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}

        {/* Strategic diagonal lines */}
        <line x1="60" y1="220" x2="180" y2="80" stroke="rgba(201,169,110,0.15)" strokeWidth="1" strokeDasharray="6 4" className="hero-svg-fade" style={{ animationDelay: '0.2s' }} />
        <line x1="140" y1="240" x2="300" y2="60" stroke="rgba(201,169,110,0.15)" strokeWidth="1" strokeDasharray="6 4" className="hero-svg-fade" style={{ animationDelay: '0.4s' }} />
        <line x1="220" y1="260" x2="350" y2="100" stroke="rgba(201,169,110,0.15)" strokeWidth="1" strokeDasharray="6 4" className="hero-svg-fade" style={{ animationDelay: '0.6s' }} />

        {/* Rule framework — encoded rules visualization */}
        {[
          { x: 80, y: 80, w: 120, label: 'RULE 01' },
          { x: 220, y: 120, w: 130, label: 'RULE 02' },
          { x: 100, y: 170, w: 110, label: 'RULE 03' },
          { x: 240, y: 210, w: 100, label: 'RULE 04' },
        ].map((rule, i) => (
          <g key={`rule-${i}`} className="hero-svg-fade" style={{ animationDelay: `${0.5 + i * 0.2}s` }}>
            <rect x={rule.x} y={rule.y} width={rule.w} height="28" rx="4" fill="rgba(201,169,110,0.08)" stroke="rgba(201,169,110,0.3)" strokeWidth="1" />
            <text x={rule.x + 12} y={rule.y + 18} fill="#C9A96E" fontSize="10" fontFamily="var(--font-mono)" fontWeight="500" letterSpacing="1">
              {rule.label}
            </text>
            <rect x={rule.x + rule.w - 24} y={rule.y + 8} width="12" height="12" rx="2" fill="rgba(201,169,110,0.2)" stroke="#C9A96E" strokeWidth="0.75" />
          </g>
        ))}

        {/* Connecting flow lines between rules */}
        <polyline points="200,94 220,94 220,134" stroke="rgba(201,169,110,0.3)" strokeWidth="1" fill="none" strokeLinecap="round" className="hero-line-draw" style={{ strokeDasharray: 80, strokeDashoffset: 80, animationDelay: '1.2s' }} />
        <polyline points="210,184 240,184 240,210" stroke="rgba(201,169,110,0.3)" strokeWidth="1" fill="none" strokeLinecap="round" className="hero-line-draw" style={{ strokeDasharray: 80, strokeDashoffset: 80, animationDelay: '1.4s' }} />

        {/* Decision nodes */}
        {[
          { cx: 220, cy: 94 },
          { cx: 240, cy: 184 },
        ].map((node, i) => (
          <g key={`node-${i}`} className="hero-svg-fade" style={{ animationDelay: `${1.5 + i * 0.2}s` }}>
            <circle cx={node.cx} cy={node.cy} r="3" fill="#C9A96E" />
            <circle cx={node.cx} cy={node.cy} r="3" fill="#C9A96E" className="hero-pulse-ring" />
          </g>
        ))}

        {/* Zero discretion indicator */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.8s' }}>
          <text x="60" y="268" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1.5">
            ZERO DISCRETION
          </text>
          <line x1="60" y1="272" x2="185" y2="272" stroke="rgba(201,169,110,0.2)" strokeWidth="1" />
        </g>

        {/* Precision indicator */}
        <g className="hero-svg-fade" style={{ animationDelay: '2s' }}>
          <text x="260" y="268" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1.5">
            RULE-BASED
          </text>
          <line x1="260" y1="272" x2="350" y2="272" stroke="rgba(201,169,110,0.2)" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}

/* ── Performance Hero ── Ascending bar chart ── */
export function PerformanceHeroAnimation() {
  const bars = [
    { x: 50, h: 60, val: '44.6' },
    { x: 82, h: 72, val: '49.8' },
    { x: 114, h: 58, val: '40.2' },
    { x: 146, h: 62, val: '43.7' },
    { x: 178, h: 105, val: '73.4' },
    { x: 210, h: 25, val: '15.3' },
    { x: 242, h: 61, val: '42.6' },
    { x: 274, h: 54, val: '35.9' },
    { x: 306, h: 56, val: '38.9' },
    { x: 338, h: 52, val: '36.3' },
    { x: 370, h: 40, val: '27.7' },
  ];
  const baseY = 240;

  return (
    <div className="w-full max-w-[420px]">
      <svg viewBox="0 0 420 300" fill="none" className="w-full h-auto" aria-hidden="true">
        {/* Grid lines */}
        {[80, 120, 160, 200, 240].map((y, i) => (
          <line key={`pg-${i}`} x1="35" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
        ))}

        {/* Y-axis labels */}
        {['80%', '60%', '40%', '20%', '0%'].map((label, i) => (
          <text key={`pl-${i}`} x="30" y={84 + i * 40} textAnchor="end" fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="var(--font-mono)" className="hero-svg-fade" style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
            {label}
          </text>
        ))}

        {/* Bars */}
        {bars.map((bar, i) => (
          <g key={`bar-${i}`} className="hero-svg-fade" style={{ animationDelay: `${0.4 + i * 0.1}s` }}>
            <rect
              x={bar.x}
              y={baseY - bar.h}
              width="22"
              height={bar.h}
              rx="2"
              fill={bar.h > 80 ? 'rgba(201,169,110,0.5)' : 'rgba(201,169,110,0.25)'}
              stroke="rgba(201,169,110,0.4)"
              strokeWidth="0.75"
              className="hero-bar-rise"
              style={{ animationDelay: `${0.6 + i * 0.1}s`, transformOrigin: `${bar.x + 11}px ${baseY}px` }}
            />
          </g>
        ))}

        {/* Trend line */}
        <polyline
          points="61,180 93,168 125,182 157,178 189,135 221,215 253,179 285,186 317,181 349,188 381,200"
          stroke="#C9A96E"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero-line-draw"
          style={{ strokeDasharray: 600, strokeDashoffset: 600, animationDelay: '1s' }}
        />

        {/* Average line */}
        <line x1="40" y1="170" x2="400" y2="170" stroke="rgba(201,169,110,0.4)" strokeWidth="1" strokeDasharray="6 4" className="hero-svg-fade" style={{ animationDelay: '1.5s' }} />
        <g className="hero-svg-fade" style={{ animationDelay: '1.6s' }}>
          <text x="400" y="166" textAnchor="end" fill="#C9A96E" fontSize="10" fontFamily="var(--font-mono)" fontWeight="500">
            AVG 35.24%
          </text>
        </g>

        {/* Bottom year labels */}
        {['\'04', '\'08', '\'12', '\'16', '\'20', '\'25'].map((yr, i) => (
          <text key={`yr-${i}`} x={61 + i * 64} y={baseY + 18} fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="var(--font-mono)" textAnchor="middle" className="hero-svg-fade" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
            {yr}
          </text>
        ))}

        {/* Stat callout */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.8s' }}>
          <rect x="50" y="40" width="100" height="30" rx="4" fill="rgba(201,169,110,0.1)" stroke="rgba(201,169,110,0.3)" strokeWidth="1" />
          <text x="60" y="52" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="var(--font-mono)">AVG MONTHLY</text>
          <text x="60" y="64" fill="#C9A96E" fontSize="13" fontFamily="var(--font-mono)" fontWeight="600">3.00%</text>
        </g>
      </svg>
    </div>
  );
}

/* ── MAM Hero ── Connected accounts hub ── */
export function MAMHeroAnimation() {
  const accounts = [
    { cx: 120, cy: 60, label: 'ACC 1' },
    { cx: 300, cy: 60, label: 'ACC 2' },
    { cx: 60, cy: 160, label: 'ACC 3' },
    { cx: 340, cy: 160, label: 'ACC 4' },
    { cx: 120, cy: 250, label: 'ACC 5' },
    { cx: 300, cy: 250, label: 'ACC 6' },
  ];
  const hub = { cx: 200, cy: 155 };

  return (
    <div className="w-full max-w-[400px]">
      <svg viewBox="0 0 400 310" fill="none" className="w-full h-auto" aria-hidden="true">
        {/* Connection lines from hub to accounts */}
        {accounts.map((acc, i) => (
          <line
            key={`conn-${i}`}
            x1={hub.cx}
            y1={hub.cy}
            x2={acc.cx}
            y2={acc.cy}
            stroke="rgba(201,169,110,0.2)"
            strokeWidth="1"
            className="hero-line-draw"
            style={{ strokeDasharray: 200, strokeDashoffset: 200, animationDelay: `${0.3 + i * 0.15}s` }}
          />
        ))}

        {/* Central hub */}
        <g className="hero-svg-fade" style={{ animationDelay: '0.1s' }}>
          <circle cx={hub.cx} cy={hub.cy} r="36" fill="rgba(201,169,110,0.08)" stroke="#C9A96E" strokeWidth="1.5" />
          <circle cx={hub.cx} cy={hub.cy} r="24" fill="rgba(201,169,110,0.06)" stroke="rgba(201,169,110,0.4)" strokeWidth="1" />
          <text x={hub.cx} y={hub.cy - 4} textAnchor="middle" fill="#C9A96E" fontSize="10" fontFamily="var(--font-mono)" fontWeight="600" letterSpacing="1">
            MAM
          </text>
          <text x={hub.cx} y={hub.cy + 10} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="8" fontFamily="var(--font-mono)">
            HUB
          </text>
        </g>
        <circle cx={hub.cx} cy={hub.cy} r="36" fill="none" stroke="#C9A96E" strokeWidth="1" className="hero-pulse-ring" />

        {/* Account nodes */}
        {accounts.map((acc, i) => (
          <g key={`acc-${i}`} className="hero-svg-fade" style={{ animationDelay: `${0.8 + i * 0.15}s` }}>
            <circle cx={acc.cx} cy={acc.cy} r="22" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <text x={acc.cx} y={acc.cy + 4} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.5">
              {acc.label}
            </text>
            <circle cx={acc.cx} cy={acc.cy} r="4" fill="#C9A96E" opacity="0.6" className="hero-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
          </g>
        ))}

        {/* Data flow arrows (small chevrons along lines) */}
        {[
          { x: 160, y: 108, r: -55 },
          { x: 250, y: 108, r: 55 },
          { x: 130, y: 158, r: -90 },
          { x: 270, y: 158, r: 90 },
        ].map((arrow, i) => (
          <g key={`arr-${i}`} className="hero-svg-fade" style={{ animationDelay: `${1.5 + i * 0.1}s` }} transform={`translate(${arrow.x},${arrow.y}) rotate(${arrow.r})`}>
            <polyline points="-4,-4 0,0 -4,4" stroke="#C9A96E" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.5" />
          </g>
        ))}

        {/* Label */}
        <g className="hero-svg-fade" style={{ animationDelay: '2s' }}>
          <text x="200" y="295" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1.5">
            PROPORTIONAL ALLOCATION
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ── Investors Hero ── Portfolio growth ── */
export function InvestorsHeroAnimation() {
  return (
    <div className="w-full max-w-[400px]">
      <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
        {/* Circular chart base */}
        <circle cx="200" cy="140" r="90" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <circle cx="200" cy="140" r="70" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />

        {/* Pie segments */}
        <path d="M200,140 L200,50 A90,90 0 0,1 278,95 Z" fill="rgba(201,169,110,0.15)" stroke="#C9A96E" strokeWidth="1.5" className="hero-svg-fade" style={{ animationDelay: '0.3s' }} />
        <path d="M200,140 L278,95 A90,90 0 0,1 275,195 Z" fill="rgba(201,169,110,0.1)" stroke="rgba(201,169,110,0.6)" strokeWidth="1.5" className="hero-svg-fade" style={{ animationDelay: '0.6s' }} />
        <path d="M200,140 L275,195 A90,90 0 0,1 200,230 Z" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" className="hero-svg-fade" style={{ animationDelay: '0.9s' }} />
        <path d="M200,140 L200,230 A90,90 0 0,1 200,50 Z" fill="rgba(201,169,110,0.06)" stroke="rgba(201,169,110,0.3)" strokeWidth="1.5" className="hero-svg-fade" style={{ animationDelay: '1.2s' }} />

        {/* Center dot */}
        <circle cx="200" cy="140" r="6" fill="rgba(201,169,110,0.2)" stroke="#C9A96E" strokeWidth="1" className="hero-svg-fade" style={{ animationDelay: '0.2s' }} />

        {/* Segment labels */}
        {[
          { x: 248, y: 80, text: 'PRIVATE', delay: '1.4s' },
          { x: 280, y: 155, text: 'PROFESSIONAL', delay: '1.6s' },
          { x: 245, y: 220, text: 'CORPORATE', delay: '1.8s' },
          { x: 130, y: 145, text: 'FAMILY', delay: '2.0s' },
        ].map((lbl, i) => (
          <text key={`seg-${i}`} x={lbl.x} y={lbl.y} fill="rgba(255,255,255,0.35)" fontSize="8" fontFamily="var(--font-mono)" letterSpacing="1" className="hero-svg-fade" style={{ animationDelay: lbl.delay }}>
            {lbl.text}
          </text>
        ))}

        {/* Growth arrow */}
        <polyline
          points="60,250 100,230 150,220 200,190 260,170 320,145 360,120"
          stroke="#C9A96E"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero-line-draw"
          style={{ strokeDasharray: 400, strokeDashoffset: 400, animationDelay: '1.5s' }}
        />
        <g className="hero-svg-fade" style={{ animationDelay: '2.2s' }}>
          <polyline points="350,115 360,120 355,130" stroke="#C9A96E" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Pulsing endpoint */}
        <circle cx="360" cy="120" r="4" fill="#C9A96E" className="hero-pulse" style={{ animationDelay: '2.2s' }} />
        <circle cx="360" cy="120" r="4" fill="#C9A96E" className="hero-pulse-ring" />

        {/* Bottom labels */}
        <g className="hero-svg-fade" style={{ animationDelay: '2.3s' }}>
          <text x="200" y="280" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1.5">
            PORTFOLIO DIVERSIFICATION
          </text>
        </g>
      </svg>
    </div>
  );
}

/* ── Access Hero ── Gateway / institutional access ── */
export function AccessHeroAnimation() {
  return (
    <div className="w-full max-w-[400px]">
      <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
        {/* Gateway pillars */}
        <g className="hero-svg-fade" style={{ animationDelay: '0.2s' }}>
          <rect x="120" y="50" width="16" height="200" rx="3" fill="rgba(201,169,110,0.1)" stroke="#C9A96E" strokeWidth="1.5" />
          <rect x="264" y="50" width="16" height="200" rx="3" fill="rgba(201,169,110,0.1)" stroke="#C9A96E" strokeWidth="1.5" />
        </g>

        {/* Arch */}
        <path d="M128,50 Q200,10 272,50" stroke="#C9A96E" strokeWidth="1.5" fill="none" className="hero-line-draw" style={{ strokeDasharray: 200, strokeDashoffset: 200, animationDelay: '0.5s' }} />

        {/* Inner gateway glow */}
        <rect x="140" y="60" width="120" height="185" rx="2" fill="rgba(201,169,110,0.03)" className="hero-svg-fade" style={{ animationDelay: '0.7s' }} />

        {/* Price ticker lines flowing through gateway */}
        {[
          { y: 90, w: 80, delay: '0.8s' },
          { y: 110, w: 95, delay: '1.0s' },
          { y: 130, w: 70, delay: '1.2s' },
          { y: 150, w: 90, delay: '1.4s' },
          { y: 170, w: 75, delay: '1.6s' },
          { y: 190, w: 85, delay: '1.8s' },
          { y: 210, w: 65, delay: '2.0s' },
        ].map((line, i) => (
          <g key={`tick-${i}`} className="hero-svg-fade" style={{ animationDelay: line.delay }}>
            <rect x={200 - line.w / 2} y={line.y} width={line.w} height="6" rx="1" fill={i % 2 === 0 ? 'rgba(201,169,110,0.15)' : 'rgba(255,255,255,0.06)'} />
            <text x={200 - line.w / 2 + 6} y={line.y + 5} fill={i % 2 === 0 ? 'rgba(201,169,110,0.5)' : 'rgba(255,255,255,0.2)'} fontSize="5" fontFamily="var(--font-mono)">
              {['1.1042', '1.1036', '1.1048', '1.1039', '1.1045', '1.1041', '1.1043'][i]}
            </text>
          </g>
        ))}

        {/* Spread indicator in center */}
        <g className="hero-svg-fade" style={{ animationDelay: '2.2s' }}>
          <rect x="168" y="135" width="64" height="32" rx="4" fill="rgba(201,169,110,0.1)" stroke="#C9A96E" strokeWidth="1" />
          <text x="200" y="148" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="var(--font-mono)">SPREAD</text>
          <text x="200" y="162" textAnchor="middle" fill="#C9A96E" fontSize="14" fontFamily="var(--font-mono)" fontWeight="600">0.6</text>
        </g>

        {/* Base line */}
        <line x1="100" y1="250" x2="300" y2="250" stroke="rgba(255,255,255,0.1)" strokeWidth="1" className="hero-svg-fade" style={{ animationDelay: '0.3s' }} />

        {/* Left side: Retail label */}
        <g className="hero-svg-fade" style={{ animationDelay: '2.4s' }}>
          <text x="60" y="155" textAnchor="middle" fill="rgba(255,255,255,0.15)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1" transform="rotate(-90, 60, 155)">
            RETAIL
          </text>
        </g>

        {/* Right side: Institutional label */}
        <g className="hero-svg-fade" style={{ animationDelay: '2.4s' }}>
          <text x="340" y="155" textAnchor="middle" fill="#C9A96E" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1" opacity="0.5" transform="rotate(90, 340, 155)">
            INSTITUTIONAL
          </text>
        </g>

        {/* Arrow flowing through */}
        <polyline
          points="50,155 120,155"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          className="hero-line-draw"
          style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: '2.5s' }}
        />
        <polyline
          points="280,155 350,155"
          stroke="#C9A96E"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
          className="hero-line-draw"
          style={{ strokeDasharray: 100, strokeDashoffset: 100, animationDelay: '2.6s' }}
        />
        <g className="hero-svg-fade" style={{ animationDelay: '2.8s' }}>
          <polyline points="345,150 355,155 345,160" stroke="#C9A96E" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>

        {/* Bottom label */}
        <g className="hero-svg-fade" style={{ animationDelay: '2.6s' }}>
          <text x="200" y="275" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="1.5">
            INSTITUTIONAL ACCESS
          </text>
        </g>
      </svg>
    </div>
  );
}
