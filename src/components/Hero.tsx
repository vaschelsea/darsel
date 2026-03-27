interface HeroProps {
  label?: string;
  headline: string;
  subheadline?: string;
  displayNumber?: string;
  rightContent?: React.ReactNode;
  children?: React.ReactNode;
  videoSrc?: string;
}

export default function Hero({ label, headline, subheadline, displayNumber, rightContent, children, videoSrc }: HeroProps) {
  if (rightContent) {
    return (
      <section
        className="relative py-16 md:py-32 lg:py-40 overflow-hidden"
        style={{ background: 'var(--hero-gradient)' }}
      >
        {videoSrc && (
          <>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/70" />
          </>
        )}
        <div className="relative mx-auto max-w-content px-6 grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
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
              <h1 className="font-heading font-light text-3xl sm:text-4xl md:text-[48px] text-white leading-heading tracking-hero">
                {headline}
              </h1>
            )}
            {subheadline && (
              <p className="mt-6 max-w-text text-[15px] md:text-base text-[#C5C9CF] leading-body">
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
      className="relative py-24 md:py-32 lg:py-40 overflow-hidden"
      style={{ background: 'var(--hero-gradient)' }}
    >
      {videoSrc && (
        <>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />
        </>
      )}
      <div className="relative mx-auto max-w-content px-6 text-center">
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
        <h1 className="font-heading font-light text-3xl sm:text-4xl md:text-[48px] text-white leading-heading tracking-hero">
          {headline}
        </h1>
        {subheadline && (
          <p className="mt-6 mx-auto max-w-text text-[15px] md:text-base text-[#C5C9CF] leading-body">
            {subheadline}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
