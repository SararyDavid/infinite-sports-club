import './CTA.css'

function CTA() {
  return (
    <section className="cta" id="cta">
      {/* Background layers */}
      <div className="cta__bg" aria-hidden="true" />
      <div className="cta__noise" aria-hidden="true" />
      <div className="cta__glow cta__glow--left" aria-hidden="true" />
      <div className="cta__glow cta__glow--right" aria-hidden="true" />

      {/* Decorative lines */}
      <div className="cta__lines" aria-hidden="true">
        <span /><span /><span /><span /><span />
      </div>

      <div className="container cta__content">
        <span className="section-label cta__label">Limited Spots Available</span>

        <h2 className="cta__heading">
          Ready to Transform<br />
          <span className="cta__heading-accent">Your Body?</span>
        </h2>

        <p className="cta__sub">
          Stop waiting. Start today. Join over 2,400 members who made the
          decision that changed everything. Your first 7 days are on us.
        </p>

        {/* Action buttons */}
        <div className="cta__actions">
          <a href="#membership" className="btn btn-primary cta__btn-main">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
            Start Free Trial
          </a>
          <a href="#contact" className="btn btn-outline cta__btn-secondary">
            Talk to a Coach
          </a>
        </div>

        {/* Trust signals */}
        <div className="cta__trust">
          <div className="cta__trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            No credit card required
          </div>
          <div className="cta__trust-dot" />
          <div className="cta__trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Cancel anytime
          </div>
          <div className="cta__trust-dot" />
          <div className="cta__trust-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            7-day free trial
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
