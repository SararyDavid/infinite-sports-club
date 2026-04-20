import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      {/* Background layers */}
      <div className="hero__bg">
        <div className="hero__bg-img" aria-hidden="true" />
        <div className="hero__bg-overlay" aria-hidden="true" />
        <div className="hero__bg-noise" aria-hidden="true" />
        <div className="hero__bg-gradient" aria-hidden="true" />
      </div>

      {/* Decorative elements */}
      <div className="hero__deco hero__deco--1" aria-hidden="true" />
      <div className="hero__deco hero__deco--2" aria-hidden="true" />

      {/* Content */}
      <div className="hero__content container">
        

        <h1 className="hero__heading fade-in-up" style={{ animationDelay: '0.2s' }}>
          Train<br />
          <span className="hero__heading-accent">Without</span><br />
          Limits
        </h1>

        <p className="hero__subheading fade-in-up" style={{ animationDelay: '0.4s' }}>
          Welcome to <strong>Infinite Sports Club</strong> — Where Strength Meets Discipline.
          Push beyond every boundary. Build the body. Forge the mind.
        </p>

        <div className="hero__actions fade-in-up" style={{ animationDelay: '0.55s' }}>
          <a href="#membership" className="btn btn-primary hero__btn-primary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Start Free Trial
          </a>
          <a href="#contact" className="btn btn-outline">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            View Location
          </a>
        </div>

        {/* Stats bar */}
        <div className="hero__stats fade-in-up" style={{ animationDelay: '0.7s' }}>
          <div className="hero__stat">
            <span className="hero__stat-number">2,400<span className="hero__stat-plus">+</span></span>
            <span className="hero__stat-label">Active Members</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">18</span>
            <span className="hero__stat-label">Expert Trainers</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-number">6</span>
            <span className="hero__stat-label">Years of Excellence</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll fade-in" style={{ animationDelay: '1.2s' }}>
        <span className="hero__scroll-text">Scroll Down</span>
        <div className="hero__scroll-line">
          <div className="hero__scroll-dot" />
        </div>
      </div>
    </section>
  )
}

export default Hero
