'use client';

/* ── Strategy Hero ── Vertical flow diagram showing BOB's decision process ── */
export function StrategyHeroAnimation() {
  const cx = 200;
  const nodeW = 160;
  const nodeH = 36;
  const subH = 14;

  const nodes = [
    { y: 20, label: 'Market conditions', sub: null, gold: false },
    { y: 75, label: 'Volatility assessment', sub: 'Leverage indexed to conditions', gold: false },
    { y: 140, label: 'Signal detection', sub: 'Statistically favorable setups only', gold: false },
  ];

  const forkY = 240;
  const forkNodes = [
    { x: 105, label: 'Execute', sub: 'Precision over frequency', gold: true },
    { x: 295, label: 'No trade', sub: 'Protection over expansion', gold: false },
  ];

  const mergeY = 325;
  const mergeNode = { label: 'Session close → Neutral', sub: 'No overnight positions' };

  return (
    <div className="w-full max-w-[400px]">
      <svg viewBox="0 0 400 410" fill="none" className="w-full h-auto" aria-hidden="true">
        {/* Main vertical nodes */}
        {nodes.map((node, i) => (
          <g key={`n-${i}`} className="hero-svg-fade" style={{ animationDelay: `${0.2 + i * 0.25}s` }}>
            <rect
              x={cx - nodeW / 2}
              y={node.y}
              width={nodeW}
              height={nodeH}
              rx="4"
              fill="none"
              stroke={node.gold ? '#C9A96E' : '#374151'}
              strokeWidth="1"
            />
            <text
              x={cx}
              y={node.y + nodeH / 2 + 4}
              textAnchor="middle"
              fill={node.gold ? '#C9A96E' : '#9CA3AF'}
              fontSize="12"
              fontFamily="var(--font-primary)"
            >
              {node.label}
            </text>
            {node.sub && (
              <text
                x={cx}
                y={node.y + nodeH + subH}
                textAnchor="middle"
                fill="#6B7280"
                fontSize="10"
                fontFamily="var(--font-mono)"
              >
                {node.sub}
              </text>
            )}
          </g>
        ))}

        {/* Connecting lines between main nodes */}
        {[0, 1].map((i) => {
          const fromY = nodes[i].y + nodeH + (nodes[i].sub ? subH + 4 : 4);
          const toY = nodes[i + 1].y;
          const midY = (fromY + toY) / 2;
          return (
            <g key={`line-${i}`} className="hero-svg-fade" style={{ animationDelay: `${0.35 + i * 0.25}s` }}>
              <line x1={cx} y1={fromY} x2={cx} y2={toY} stroke="rgba(201,169,110,0.4)" strokeWidth="0.5" />
              {/* Arrow */}
              <polyline
                points={`${cx - 3},${midY - 2} ${cx},${midY + 2} ${cx + 3},${midY - 2}`}
                stroke="rgba(201,169,110,0.4)"
                strokeWidth="0.75"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
          );
        })}

        {/* Line from Signal detection to fork */}
        <g className="hero-svg-fade" style={{ animationDelay: '0.9s' }}>
          {/* Down from Signal detection */}
          <line x1={cx} y1={nodes[2].y + nodeH + subH + 4} x2={cx} y2={forkY - 18} stroke="rgba(201,169,110,0.4)" strokeWidth="0.5" />
          {/* Split left */}
          <polyline
            points={`${cx},${forkY - 18} ${cx},${forkY - 8} ${forkNodes[0].x},${forkY - 8} ${forkNodes[0].x},${forkY}`}
            stroke="rgba(201,169,110,0.4)"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Split right */}
          <polyline
            points={`${cx},${forkY - 8} ${forkNodes[1].x},${forkY - 8} ${forkNodes[1].x},${forkY}`}
            stroke="rgba(201,169,110,0.4)"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Diamond at fork point */}
          <polygon
            points={`${cx},${forkY - 22} ${cx + 5},${forkY - 18} ${cx},${forkY - 14} ${cx - 5},${forkY - 18}`}
            fill="rgba(201,169,110,0.3)"
            stroke="#C9A96E"
            strokeWidth="0.5"
          />
        </g>

        {/* Fork nodes: Execute + No trade */}
        {forkNodes.map((node, i) => (
          <g key={`fork-${i}`} className="hero-svg-fade" style={{ animationDelay: `${1.1 + i * 0.15}s` }}>
            <rect
              x={node.x - nodeW / 2}
              y={forkY}
              width={nodeW}
              height={nodeH}
              rx="4"
              fill="none"
              stroke={node.gold ? '#C9A96E' : '#374151'}
              strokeWidth="1"
            />
            <text
              x={node.x}
              y={forkY + nodeH / 2 + 4}
              textAnchor="middle"
              fill={node.gold ? '#C9A96E' : '#6B7280'}
              fontSize="12"
              fontFamily="var(--font-primary)"
              fontWeight={node.gold ? '500' : '400'}
            >
              {node.label}
            </text>
            {node.sub && (
              <text
                x={node.x}
                y={forkY + nodeH + subH}
                textAnchor="middle"
                fill="#6B7280"
                fontSize="10"
                fontFamily="var(--font-mono)"
              >
                {node.sub}
              </text>
            )}
          </g>
        ))}

        {/* Merge lines from fork nodes down to merge node */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.4s' }}>
          <polyline
            points={`${forkNodes[0].x},${forkY + nodeH + subH + 4} ${forkNodes[0].x},${mergeY - 8} ${cx},${mergeY - 8} ${cx},${mergeY}`}
            stroke="rgba(201,169,110,0.4)"
            strokeWidth="0.5"
            fill="none"
          />
          <polyline
            points={`${forkNodes[1].x},${forkY + nodeH + subH + 4} ${forkNodes[1].x},${mergeY - 8} ${cx},${mergeY - 8}`}
            stroke="rgba(201,169,110,0.4)"
            strokeWidth="0.5"
            fill="none"
          />
          {/* Arrow at merge */}
          <polyline
            points={`${cx - 3},${mergeY - 4} ${cx},${mergeY} ${cx + 3},${mergeY - 4}`}
            stroke="rgba(201,169,110,0.4)"
            strokeWidth="0.75"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>

        {/* Merge node */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.6s' }}>
          <rect
            x={cx - nodeW / 2}
            y={mergeY}
            width={nodeW}
            height={nodeH}
            rx="4"
            fill="none"
            stroke="#374151"
            strokeWidth="1"
          />
          <text
            x={cx}
            y={mergeY + nodeH / 2 + 4}
            textAnchor="middle"
            fill="#9CA3AF"
            fontSize="11"
            fontFamily="var(--font-primary)"
          >
            {mergeNode.label}
          </text>
          <text
            x={cx}
            y={mergeY + nodeH + subH}
            textAnchor="middle"
            fill="#6B7280"
            fontSize="10"
            fontFamily="var(--font-mono)"
          >
            {mergeNode.sub}
          </text>
        </g>

        {/* Bottom motto */}
        <text
          x={cx}
          y="400"
          textAnchor="middle"
          fill="#6B7280"
          fontSize="11"
          fontFamily="var(--font-mono)"
          letterSpacing="2"
          className="hero-svg-fade"
          style={{ animationDelay: '1.9s' }}
        >
          ZERO DISCRETION · RULE-BASED · INTRADAY ONLY
        </text>
      </svg>
    </div>
  );
}

/* ── MAM Hero ── Hub & Spoke with pulse animation ── */
export function MAMHeroAnimation() {
  const accounts = [
    { cx: 120, cy: 60, label: 'ACC 1', r: 33 },
    { cx: 300, cy: 60, label: 'ACC 2', r: 28 },
    { cx: 60, cy: 160, label: 'ACC 3', r: 24 },
    { cx: 340, cy: 160, label: 'ACC 4', r: 33 },
    { cx: 120, cy: 250, label: 'ACC 5', r: 28 },
    { cx: 300, cy: 250, label: 'ACC 6', r: 24 },
  ];
  const hub = { cx: 200, cy: 155 };

  return (
    <div className="w-full max-w-[400px]">
      <svg viewBox="0 0 400 340" fill="none" className="w-full h-auto" aria-hidden="true">
        <defs>
          {/* Define paths for each connection line so animateMotion can follow them */}
          {accounts.map((acc, i) => (
            <path
              key={`path-${i}`}
              id={`mam-line-${i}`}
              d={`M${hub.cx},${hub.cy} L${acc.cx},${acc.cy}`}
            />
          ))}
        </defs>

        {/* Connection lines from hub to accounts */}
        {accounts.map((acc, i) => (
          <g key={`conn-${i}`}>
            <line
              x1={hub.cx}
              y1={hub.cy}
              x2={acc.cx}
              y2={acc.cy}
              stroke="rgba(201,169,110,0.2)"
              strokeWidth="1"
              className="hero-line-draw"
              style={{ strokeDasharray: 200, strokeDashoffset: 200, animationDelay: `${0.3 + i * 0.15}s` }}
            />
            {/* Traveling pulse dot along each line */}
            <circle r="2.5" fill="#C9A96E" opacity="0">
              <animateMotion dur="3s" repeatCount="indefinite" begin={`${1.5 + i * 0.4}s`}>
                <mpath href={`#mam-line-${i}`} />
              </animateMotion>
              <animate attributeName="opacity" values="0;0.8;0.8;0" dur="3s" repeatCount="indefinite" begin={`${1.5 + i * 0.4}s`} />
            </circle>
          </g>
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

        {/* Account nodes with size variation */}
        {accounts.map((acc, i) => (
          <g key={`acc-${i}`} className="hero-svg-fade" style={{ animationDelay: `${0.8 + i * 0.15}s` }}>
            <circle cx={acc.cx} cy={acc.cy} r={acc.r} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            <circle cx={acc.cx} cy={acc.cy} r="4" fill="#C9A96E" opacity="0.6" className="hero-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
            {/* Label below circle */}
            <text x={acc.cx} y={acc.cy + acc.r + 14} textAnchor="middle" fill="#9CA3AF" fontSize="11" fontFamily="var(--font-mono)">
              {acc.label}
            </text>
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

        {/* Bottom motto */}
        <text x="200" y="325" textAnchor="middle" fill="#6B7280" fontSize="11" fontFamily="var(--font-mono)" letterSpacing="2" className="hero-svg-fade" style={{ animationDelay: '2s' }}>
          SIMULTANEOUS · PROPORTIONAL · TRANSPARENT
        </text>
      </svg>
    </div>
  );
}

/* ── Investors Hero ── Concentric arc segments ── */
export function InvestorsHeroAnimation() {
  const cx = 200;
  const cy = 130;

  // 270-degree arcs forming a dome above center, opening at the bottom
  // Start at 225° (bottom-left), sweep clockwise to 315° (bottom-right)
  const startAngle = 225;
  const endAngle = 315;

  function arcPath(r: number): string {
    const toRad = (deg: number) => (deg * Math.PI) / 180;
    const x1 = cx + r * Math.cos(toRad(startAngle));
    const y1 = cy + r * Math.sin(toRad(startAngle));
    const x2 = cx + r * Math.cos(toRad(endAngle));
    const y2 = cy + r * Math.sin(toRad(endAngle));
    // large-arc=1, sweep=1 → clockwise long way around (up and over)
    return `M ${x1},${y1} A ${r},${r} 0 1,1 ${x2},${y2}`;
  }

  const arcs = [
    { r: 100, stroke: '#374151', strokeW: 3, delay: '0.3s' },
    { r: 75, stroke: '#4B5563', strokeW: 3, delay: '0.6s' },
    { r: 50, stroke: '#C9A96E', strokeW: 3, delay: '0.9s' },
  ];

  const legend = [
    { label: 'Private', color: '#C9A96E' },
    { label: 'Professional', color: '#4B5563' },
    { label: 'Corporate & Family', color: '#374151' },
  ];

  return (
    <div className="w-full max-w-[400px]">
      <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
        {/* Concentric arcs — no per-arc labels */}
        {arcs.map((arc, i) => (
          <g key={`arc-${i}`} className="hero-svg-fade" style={{ animationDelay: arc.delay }}>
            <path
              d={arcPath(arc.r)}
              stroke={arc.stroke}
              strokeWidth={arc.strokeW}
              fill="none"
              strokeLinecap="round"
            />
          </g>
        ))}

        {/* Stacked legend — centered below arcs, above center text */}
        {legend.map((item, i) => {
          const legendY = cy + 16 + i * 20;
          return (
            <g key={`leg-${i}`} className="hero-svg-fade" style={{ animationDelay: `${0.9 + i * 0.15}s` }}>
              <line x1={cx - 60} y1={legendY} x2={cx - 48} y2={legendY} stroke={item.color} strokeWidth="3" strokeLinecap="round" />
              <text x={cx - 40} y={legendY + 4} fill={item.color === '#C9A96E' ? '#C9A96E' : 'rgba(255,255,255,0.45)'} fontSize="13" fontFamily="var(--font-mono)">
                {item.label}
              </text>
            </g>
          );
        })}

        {/* Center text — sits below the legend */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.4s' }}>
          <text x={cx} y={cy + 96} textAnchor="middle" fill="#6B7280" fontSize="11" fontFamily="var(--font-mono)">
            Capital Allocation
          </text>
          <text x={cx} y={cy + 112} textAnchor="middle" fill="#6B7280" fontSize="11" fontFamily="var(--font-mono)">
            by Selection
          </text>
        </g>

        {/* Bottom motto */}
        <text
          x={cx}
          y="285"
          textAnchor="middle"
          fill="#6B7280"
          fontSize="11"
          fontFamily="var(--font-mono)"
          letterSpacing="2"
          className="hero-svg-fade"
          style={{ animationDelay: '1.5s' }}
        >
          TAILORED · VISIBLE · YOUR CONTROL
        </text>
      </svg>
    </div>
  );
}

/* ── Access Hero ── Bid/Ask spread comparison: Retail vs DARSAL ── */
export function AccessHeroAnimation() {
  const barW = 130;
  const barH = 36;
  const leftX = 55;
  const rightX = 215;

  // Retail: wide gap (60px between bars), DARSAL: narrow gap (12px)
  const retailAskY = 80;
  const retailGap = 60;
  const retailBidY = retailAskY + barH + retailGap;

  const darsalAskY = 80;
  const darsalGap = 12;
  const darsalBidY = darsalAskY + barH + darsalGap;

  return (
    <div className="w-full max-w-[400px]">
      <svg viewBox="0 0 400 300" fill="none" className="w-full h-auto" aria-hidden="true">
        {/* Dashed vertical divider */}
        <line x1="200" y1="30" x2="200" y2="250" stroke="rgba(55,65,81,0.3)" strokeWidth="1" strokeDasharray="4 4" className="hero-svg-fade" style={{ animationDelay: '0.2s' }} />

        {/* === RETAIL column === */}
        <g className="hero-svg-fade" style={{ animationDelay: '0.3s' }}>
          <text x={leftX + barW / 2} y="50" textAnchor="middle" fill="#9CA3AF" fontSize="12" fontFamily="var(--font-primary)" fontWeight="500">
            Retail
          </text>
        </g>

        {/* Retail Ask bar */}
        <g className="hero-svg-fade" style={{ animationDelay: '0.5s' }}>
          <rect x={leftX} y={retailAskY} width={barW} height={barH} rx="3" fill="#4B5563" />
          <text x={leftX + 10} y={retailAskY + 14} fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="var(--font-mono)">ASK</text>
          <text x={leftX + barW / 2} y={retailAskY + barH / 2 + 5} textAnchor="middle" fill="white" fontSize="13" fontFamily="var(--font-mono)" fontWeight="500">
            1.10482
          </text>
        </g>

        {/* Retail Bid bar */}
        <g className="hero-svg-fade" style={{ animationDelay: '0.7s' }}>
          <rect x={leftX} y={retailBidY} width={barW} height={barH} rx="3" fill="#374151" />
          <text x={leftX + 10} y={retailBidY + 14} fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="var(--font-mono)">BID</text>
          <text x={leftX + barW / 2} y={retailBidY + barH / 2 + 5} textAnchor="middle" fill="white" fontSize="13" fontFamily="var(--font-mono)" fontWeight="500">
            1.10300
          </text>
        </g>

        {/* Retail spread bracket */}
        <g className="hero-svg-fade" style={{ animationDelay: '0.9s' }}>
          {/* Bracket line */}
          <line x1={leftX + barW + 8} y1={retailAskY + barH} x2={leftX + barW + 8} y2={retailBidY} stroke="#6B7280" strokeWidth="0.75" />
          <line x1={leftX + barW + 5} y1={retailAskY + barH} x2={leftX + barW + 11} y2={retailAskY + barH} stroke="#6B7280" strokeWidth="0.75" />
          <line x1={leftX + barW + 5} y1={retailBidY} x2={leftX + barW + 11} y2={retailBidY} stroke="#6B7280" strokeWidth="0.75" />
        </g>

        {/* Retail spread label */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.0s' }}>
          <text x={leftX + barW / 2} y={retailBidY + barH + 22} textAnchor="middle" fill="#6B7280" fontSize="13" fontFamily="var(--font-primary)">
            Spread:{' '}
          </text>
          <text x={leftX + barW / 2 + 40} y={retailBidY + barH + 22} textAnchor="middle" fill="#6B7280" fontSize="13" fontFamily="var(--font-mono)" fontWeight="500">
            1.8 pip
          </text>
        </g>

        {/* === DARSAL column === */}
        <g className="hero-svg-fade" style={{ animationDelay: '0.4s' }}>
          <text x={rightX + barW / 2} y="50" textAnchor="middle" fill="#C9A96E" fontSize="12" fontFamily="var(--font-primary)" fontWeight="500">
            DARSAL
          </text>
        </g>

        {/* DARSAL Ask bar */}
        <g className="hero-svg-fade" style={{ animationDelay: '0.6s' }}>
          <rect x={rightX} y={darsalAskY} width={barW} height={barH} rx="3" fill="#881010" stroke="#C9A96E" strokeWidth="1" />
          <text x={rightX + 10} y={darsalAskY + 14} fill="rgba(201,169,110,0.5)" fontSize="9" fontFamily="var(--font-mono)">ASK</text>
          <text x={rightX + barW / 2} y={darsalAskY + barH / 2 + 5} textAnchor="middle" fill="#C9A96E" fontSize="13" fontFamily="var(--font-mono)" fontWeight="500">
            1.10436
          </text>
        </g>

        {/* DARSAL Bid bar */}
        <g className="hero-svg-fade" style={{ animationDelay: '0.8s' }}>
          <rect x={rightX} y={darsalBidY} width={barW} height={barH} rx="3" fill="#881010" stroke="#C9A96E" strokeWidth="1" />
          <text x={rightX + 10} y={darsalBidY + 14} fill="rgba(201,169,110,0.5)" fontSize="9" fontFamily="var(--font-mono)">BID</text>
          <text x={rightX + barW / 2} y={darsalBidY + barH / 2 + 5} textAnchor="middle" fill="#C9A96E" fontSize="13" fontFamily="var(--font-mono)" fontWeight="500">
            1.10430
          </text>
        </g>

        {/* DARSAL spread bracket */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.0s' }}>
          <line x1={rightX + barW + 8} y1={darsalAskY + barH} x2={rightX + barW + 8} y2={darsalBidY} stroke="#C9A96E" strokeWidth="0.75" />
          <line x1={rightX + barW + 5} y1={darsalAskY + barH} x2={rightX + barW + 11} y2={darsalAskY + barH} stroke="#C9A96E" strokeWidth="0.75" />
          <line x1={rightX + barW + 5} y1={darsalBidY} x2={rightX + barW + 11} y2={darsalBidY} stroke="#C9A96E" strokeWidth="0.75" />
        </g>

        {/* DARSAL spread label */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.1s' }}>
          <text x={rightX + barW / 2} y={darsalBidY + barH + 22} textAnchor="middle" fill="#C9A96E" fontSize="14" fontFamily="var(--font-mono)" fontWeight="700">
            0.6 pip
          </text>
        </g>

        {/* Bottom motto */}
        <text
          x="200"
          y="282"
          textAnchor="middle"
          fill="#6B7280"
          fontSize="11"
          fontFamily="var(--font-mono)"
          letterSpacing="2"
          className="hero-svg-fade"
          style={{ animationDelay: '1.3s' }}
        >
          INSTITUTIONAL · ZERO COMMISSION · NO BARRIERS
        </text>
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
        {["'04", "'08", "'12", "'16", "'20", "'25"].map((yr, i) => (
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

/* ── High Water Mark ── Interactive equity curve visualization ── */
export function HighWaterMarkAnimation() {
  const equityLine = '50,200 80,170 110,140 140,110 170,90 200,80 230,110 260,130 290,100 320,80 350,60 380,50 410,45';
  const hwmY = 80;

  return (
    <div className="w-full">
      <svg viewBox="0 0 440 260" fill="none" className="w-full h-auto" aria-hidden="true">
        {/* Grid lines */}
        {[60, 100, 140, 180, 220].map((y, i) => (
          <line key={`g-${i}`} x1="40" y1={y} x2="420" y2={y} stroke="#E5E7EB" strokeWidth="0.5" />
        ))}

        {/* Y-axis labels */}
        {['$120k', '$110k', '$100k', '$90k', '$80k'].map((label, i) => (
          <text key={`yl-${i}`} x="36" y={64 + i * 40} textAnchor="end" fill="#9CA3AF" fontSize="9" fontFamily="var(--font-mono)" className="hero-svg-fade" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
            {label}
          </text>
        ))}

        {/* X-axis month labels */}
        {['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8'].map((m, i) => (
          <text key={`xl-${i}`} x={65 + i * 50} y={245} textAnchor="middle" fill="#9CA3AF" fontSize="9" fontFamily="var(--font-mono)" className="hero-svg-fade" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
            {m}
          </text>
        ))}

        {/* NO FEE region */}
        <polygon
          points={`200,${hwmY} 230,${hwmY} 260,${hwmY} 290,${hwmY} 230,110 260,130 290,100`}
          fill="rgba(156,163,175,0.08)"
          stroke="none"
          className="hero-svg-fade"
          style={{ animationDelay: '2s' }}
        />

        {/* FEE region */}
        <polygon
          points={`290,${hwmY} 320,${hwmY} 350,${hwmY} 380,${hwmY} 410,${hwmY} 410,45 380,50 350,60 320,${hwmY} 290,100`}
          fill="rgba(201,169,110,0.12)"
          stroke="none"
          className="hero-svg-fade"
          style={{ animationDelay: '2.2s' }}
        />

        {/* High Water Mark horizontal line */}
        <line
          x1="180"
          y1={hwmY}
          x2="420"
          y2={hwmY}
          stroke="#C9A96E"
          strokeWidth="1.5"
          strokeDasharray="6 4"
          className="hero-svg-fade"
          style={{ animationDelay: '1.2s' }}
        />

        {/* HWM label */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.4s' }}>
          <rect x="168" y={hwmY - 18} width="110" height="16" rx="3" fill="#C9A96E" />
          <text x="223" y={hwmY - 7} textAnchor="middle" fill="white" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600" letterSpacing="0.5">
            HIGH WATER MARK
          </text>
        </g>

        {/* Equity curve line */}
        <polyline
          points={equityLine}
          stroke="#2A2A2A"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero-line-draw"
          style={{ strokeDasharray: 800, strokeDashoffset: 800 }}
        />

        {/* Peak 1 dot */}
        <g className="hero-svg-fade" style={{ animationDelay: '1s' }}>
          <circle cx="200" cy={hwmY} r="4" fill="#2A2A2A" />
          <text x="200" y={hwmY - 12} textAnchor="middle" fill="#2A2A2A" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">
            PEAK
          </text>
        </g>

        {/* Drawdown arrow */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.8s' }}>
          <line x1="245" y1={hwmY + 4} x2="245" y2="126" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="3 2" />
          <text x="252" y="110" fill="#9CA3AF" fontSize="7" fontFamily="var(--font-mono)">
            DRAWDOWN
          </text>
        </g>

        {/* No fee label */}
        <g className="hero-svg-fade" style={{ animationDelay: '2.2s' }}>
          <text x="260" y="115" textAnchor="middle" fill="#9CA3AF" fontSize="7" fontFamily="var(--font-mono)" fontWeight="500">
            NO FEE
          </text>
        </g>

        {/* Fee zone label */}
        <g className="hero-svg-fade" style={{ animationDelay: '2.5s' }}>
          <rect x="340" y="58" width="66" height="14" rx="2" fill="rgba(201,169,110,0.2)" />
          <text x="373" y="68" textAnchor="middle" fill="#C9A96E" fontSize="7" fontFamily="var(--font-mono)" fontWeight="600">
            20% FEE ZONE
          </text>
        </g>

        {/* New peak dot */}
        <g className="hero-svg-fade" style={{ animationDelay: '2.8s' }}>
          <circle cx="410" cy="45" r="4" fill="#C9A96E" />
          <circle cx="410" cy="45" r="4" fill="#C9A96E" className="hero-pulse-ring" />
          <text x="410" y="38" textAnchor="middle" fill="#C9A96E" fontSize="8" fontFamily="var(--font-mono)" fontWeight="600">
            NEW PEAK
          </text>
        </g>

        {/* Recovery label */}
        <g className="hero-svg-fade" style={{ animationDelay: '2s' }}>
          <text x="280" y={hwmY + 22} fill="#9CA3AF" fontSize="7" fontFamily="var(--font-mono)">
            RECOVERY
          </text>
          <polyline points="275,96 280,100 285,96" stroke="#9CA3AF" strokeWidth="1" fill="none" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}
