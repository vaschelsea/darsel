interface HeroProps {
  label?: string;
  headline: string;
  subheadline?: string;
  displayNumber?: string;
  rightContent?: React.ReactNode;
  children?: React.ReactNode;
}

export default function Hero({ label, headline, subheadline, displayNumber, rightContent, children }: HeroProps) {
  if (rightContent) {
    return (
      <section
        className="py-24 md:py-32 lg:py-40"
        style={{ background: 'var(--hero-gradient)' }}
      >
        <div className="mx-auto max-w-content px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            {label && (
              <p className="font-mono text-[13px] uppercase tracking-caps text-gold mb-4">
                {label}
              </p>
            )}
            {displayNumber && (
              <p className="font-mono font-medium text-5xl sm:text-6xl md:text-7xl text-white leading-hero tracking-hero mb-4">
                {displayNumber}
              </p>
            )}
            {headline && (
              <h1 className="font-inter font-light text-3xl sm:text-4xl md:text-[48px] text-white leading-heading tracking-hero">
                {headline}
              </h1>
            )}
            {subheadline && (
              <p className="mt-6 max-w-text text-[15px] md:text-base text-light-gray leading-body">
                {subheadline}
              </p>
            )}
            {children}
          </div>
          <div className="flex justify-center md:justify-end">
            {rightContent}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-24 md:py-32 lg:py-40"
      style={{ background: 'var(--hero-gradient)' }}
    >
      <div className="mx-auto max-w-content px-6 text-center">
        {label && (
          <p className="font-mono text-[13px] uppercase tracking-caps text-gold mb-4">
            {label}
          </p>
        )}
        {displayNumber && (
          <p className="font-mono font-medium text-5xl sm:text-6xl md:text-7xl text-white leading-hero tracking-hero mb-4">
            {displayNumber}
          </p>
        )}
        <h1 className="font-inter font-light text-3xl sm:text-4xl md:text-[48px] text-white leading-heading tracking-hero">
          {headline}
        </h1>
        {subheadline && (
          <p className="mt-6 mx-auto max-w-text text-[15px] md:text-base text-light-gray leading-body">
            {subheadline}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
