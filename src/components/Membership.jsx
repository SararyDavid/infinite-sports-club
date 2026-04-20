import { useState } from 'react'
import './Membership.css'

const plans = [
  {
    id: 'basic',
    name: 'Basic',
    tagline: 'Start Your Journey',
    price: { monthly: 39, yearly: 29 },
    color: 'var(--gray-dark)',
    popular: false,
    features: [
      { text: 'Gym Floor Access',             included: true  },
      { text: 'Cardio Equipment',              included: true  },
      { text: 'Locker Room Access',            included: true  },
      { text: 'Group Classes (2/week)',        included: true  },
      { text: 'Personal Trainer Sessions',     included: false },
      { text: 'Nutrition Consultation',        included: false },
      { text: 'Body Composition Analysis',     included: false },
      { text: 'Priority Booking',              included: false },
    ],
  },
  {
    id: 'standard',
    name: 'Standard',
    tagline: 'Most Popular Choice',
    price: { monthly: 69, yearly: 54 },
    color: 'var(--orange)',
    popular: true,
    features: [
      { text: 'Everything in Basic',           included: true  },
      { text: 'Unlimited Group Classes',       included: true  },
      { text: '2 PT Sessions / Month',         included: true  },
      { text: 'Nutrition Consultation',        included: true  },
      { text: 'Body Composition Analysis',     included: true  },
      { text: 'Priority Booking',              included: false },
      { text: 'Sauna & Recovery Zone',         included: false },
      { text: 'Guest Passes (2/month)',        included: false },
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    tagline: 'The Full Experience',
    price: { monthly: 119, yearly: 94 },
    color: '#e8c87a',
    popular: false,
    features: [
      { text: 'Everything in Standard',        included: true  },
      { text: 'Unlimited PT Sessions',         included: true  },
      { text: 'Priority Booking',              included: true  },
      { text: 'Sauna & Recovery Zone',         included: true  },
      { text: 'Guest Passes (4/month)',        included: true  },
      { text: 'Monthly Meal Plan',             included: true  },
      { text: 'Dedicated Locker',              included: true  },
      { text: 'VIP Events Access',             included: true  },
    ],
  },
]

function Membership() {
  const [billing, setBilling] = useState('monthly')

  return (
    <section className="membership" id="membership">
      <div className="container">
        {/* Header */}
        <div className="membership__header">
          <span className="section-label">Membership Plans</span>
          <h2 className="section-title">
            Choose Your<br />
            <span className="membership__title-accent">Power Level</span>
          </h2>
          <p className="section-subtitle">
            Flexible plans built around your goals. No hidden fees. Cancel anytime.
          </p>

          {/* Billing toggle */}
          <div className="membership__toggle">
            <button
              className={`membership__toggle-btn ${billing === 'monthly' ? 'active' : ''}`}
              onClick={() => setBilling('monthly')}
            >
              Monthly
            </button>
            <button
              className={`membership__toggle-btn ${billing === 'yearly' ? 'active' : ''}`}
              onClick={() => setBilling('yearly')}
            >
              Yearly
              <span className="membership__toggle-save">Save 25%</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="membership__cards">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`membership__card ${plan.popular ? 'membership__card--popular' : ''}`}
              style={{ '--plan-color': plan.color, animationDelay: `${index * 0.12}s` }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="membership__popular-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Most Popular
                </div>
              )}

              {/* Plan header */}
              <div className="membership__card-header">
                <div className="membership__plan-info">
                  <h3 className="membership__plan-name">{plan.name}</h3>
                  <span className="membership__plan-tagline">{plan.tagline}</span>
                </div>
                <div className="membership__price-wrap">
                  <span className="membership__currency">$</span>
                  <span className="membership__price">
                    {billing === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="membership__period">/mo</span>
                </div>
                {billing === 'yearly' && (
                  <p className="membership__yearly-note">
                    Billed ${plan.price.yearly * 12}/year
                  </p>
                )}
              </div>

              {/* Divider */}
              <div className="membership__divider" />

              {/* Features */}
              <ul className="membership__features">
                {plan.features.map((feature) => (
                  <li
                    key={feature.text}
                    className={`membership__feature ${feature.included ? 'membership__feature--on' : 'membership__feature--off'}`}
                  >
                    <span className="membership__feature-icon">
                      {feature.included ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 6L6 18M6 6l12 12"/>
                        </svg>
                      )}
                    </span>
                    {feature.text}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`btn membership__cta ${plan.popular ? 'btn-primary' : 'btn-outline-orange'}`}
              >
                {plan.popular ? 'Get Started Now' : 'Choose Plan'}
              </a>

              {/* Subtle corner accent */}
              <div className="membership__corner-accent" />
            </div>
          ))}
        </div>

        {/* Fine print */}
        <p className="membership__note">
          All plans include a 7-day free trial. No credit card required to start.
          Cancel anytime with 30 days notice.
        </p>
      </div>
    </section>
  )
}

export default Membership
