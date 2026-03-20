'use client';

export default function HeroAnimation() {
  return (
    <div className="w-full max-w-[420px]">
      <svg
        viewBox="0 0 420 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        aria-hidden="true"
      >
        {/* Grid lines */}
        {[60, 110, 160, 210, 260].map((y, i) => (
          <line
            key={`grid-${i}`}
            x1="40"
            y1={y}
            x2="390"
            y2={y}
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="1"
          />
        ))}

        {/* Y-axis labels */}
        {['1.1050', '1.1040', '1.1030', '1.1020', '1.1010'].map((label, i) => (
          <text
            key={`label-${i}`}
            x="36"
            y={64 + i * 50}
            textAnchor="end"
            fill="rgba(255,255,255,0.3)"
            fontSize="9"
            fontFamily="var(--font-mono)"
            className="hero-svg-fade"
            style={{ animationDelay: `${0.3 + i * 0.1}s` }}
          >
            {label}
          </text>
        ))}

        {/* Ask price line (upper) */}
        <polyline
          points="50,95 80,100 110,88 140,105 170,92 200,98 230,85 260,90 290,82 320,88 350,80 380,85"
          stroke="#C9A96E"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero-line-draw"
          style={{ strokeDasharray: 600, strokeDashoffset: 600 }}
        />

        {/* Bid price line (lower) */}
        <polyline
          points="50,115 80,120 110,108 140,125 170,112 200,118 230,105 260,110 290,102 320,108 350,100 380,105"
          stroke="rgba(255,255,255,0.7)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="hero-line-draw"
          style={{ strokeDasharray: 600, strokeDashoffset: 600, animationDelay: '0.3s' }}
        />

        {/* Spread fill area between lines */}
        <polygon
          points="50,95 80,100 110,88 140,105 170,92 200,98 230,85 260,90 290,82 320,88 350,80 380,85 380,105 350,100 320,108 290,102 260,110 230,105 200,118 170,112 140,125 110,108 80,120 50,115"
          fill="rgba(201,169,110,0.08)"
          className="hero-svg-fade"
          style={{ animationDelay: '1.2s' }}
        />

        {/* Spread indicator bracket at right end */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.5s' }}>
          {/* Top bracket */}
          <line x1="388" y1="85" x2="395" y2="85" stroke="#C9A96E" strokeWidth="1.5" />
          <line x1="395" y1="85" x2="395" y2="95" stroke="#C9A96E" strokeWidth="1.5" />

          {/* Bottom bracket */}
          <line x1="388" y1="105" x2="395" y2="105" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />
          <line x1="395" y1="105" x2="395" y2="95" stroke="rgba(255,255,255,0.7)" strokeWidth="1.5" />

          {/* Spread label */}
          <text
            x="405"
            y="98"
            fill="#C9A96E"
            fontSize="11"
            fontFamily="var(--font-mono)"
            fontWeight="600"
          >
            0.6
          </text>
        </g>

        {/* Pulsing dot on ask line endpoint */}
        <circle
          cx="380"
          cy="85"
          r="4"
          fill="#C9A96E"
          className="hero-pulse"
        />
        <circle
          cx="380"
          cy="85"
          r="4"
          fill="#C9A96E"
          className="hero-pulse-ring"
        />

        {/* Pulsing dot on bid line endpoint */}
        <circle
          cx="380"
          cy="105"
          r="4"
          fill="rgba(255,255,255,0.8)"
          className="hero-pulse"
          style={{ animationDelay: '0.5s' }}
        />

        {/* Labels */}
        <g className="hero-svg-fade" style={{ animationDelay: '1.8s' }}>
          <text x="50" y="42" fill="#C9A96E" fontSize="10" fontFamily="var(--font-mono)" fontWeight="500" letterSpacing="1">
            ASK
          </text>
          <line x1="50" y1="48" x2="80" y2="48" stroke="#C9A96E" strokeWidth="1" opacity="0.5" />

          <text x="50" y="290" fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="var(--font-mono)" fontWeight="500" letterSpacing="1">
            BID
          </text>
          <line x1="50" y1="296" x2="80" y2="296" stroke="rgba(255,255,255,0.4)" strokeWidth="1" opacity="0.5" />
        </g>

        {/* Candlesticks at bottom */}
        {[
          { x: 70, o: 230, c: 210, h: 200, l: 245 },
          { x: 100, o: 215, c: 235, h: 205, l: 245 },
          { x: 130, o: 220, c: 200, h: 190, l: 230 },
          { x: 160, o: 205, c: 225, h: 195, l: 240 },
          { x: 190, o: 218, c: 205, h: 195, l: 230 },
          { x: 220, o: 210, c: 195, h: 185, l: 220 },
          { x: 250, o: 200, c: 215, h: 190, l: 225 },
          { x: 280, o: 208, c: 195, h: 185, l: 218 },
          { x: 310, o: 198, c: 210, h: 188, l: 220 },
          { x: 340, o: 205, c: 190, h: 180, l: 215 },
          { x: 370, o: 195, c: 205, h: 185, l: 215 },
        ].map((candle, i) => {
          const isGreen = candle.c < candle.o;
          const top = Math.min(candle.o, candle.c);
          const height = Math.abs(candle.o - candle.c);
          return (
            <g
              key={`candle-${i}`}
              className="hero-svg-fade"
              style={{ animationDelay: `${0.8 + i * 0.08}s` }}
            >
              {/* Wick */}
              <line
                x1={candle.x}
                y1={candle.h}
                x2={candle.x}
                y2={candle.l}
                stroke={isGreen ? 'rgba(201,169,110,0.4)' : 'rgba(255,255,255,0.2)'}
                strokeWidth="1"
              />
              {/* Body */}
              <rect
                x={candle.x - 6}
                y={top}
                width="12"
                height={Math.max(height, 2)}
                fill={isGreen ? 'rgba(201,169,110,0.3)' : 'rgba(255,255,255,0.1)'}
                stroke={isGreen ? 'rgba(201,169,110,0.5)' : 'rgba(255,255,255,0.15)'}
                strokeWidth="0.5"
                rx="1"
              />
            </g>
          );
        })}

        {/* Time axis labels */}
        {['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'].map((t, i) => (
          <text
            key={`time-${i}`}
            x={60 + i * 50}
            y="275"
            fill="rgba(255,255,255,0.2)"
            fontSize="8"
            fontFamily="var(--font-mono)"
            textAnchor="middle"
            className="hero-svg-fade"
            style={{ animationDelay: `${0.5 + i * 0.08}s` }}
          >
            {t}
          </text>
        ))}
      </svg>
    </div>
  );
}
