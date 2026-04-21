import './About.css'

const features = [
  {
    id: 1,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 24h4M36 24h4M12 24h24" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="8" cy="24" r="4" stroke="currentColor" strokeWidth="2.5"/>
        <circle cx="40" cy="24" r="4" stroke="currentColor" strokeWidth="2.5"/>
        <rect x="16" y="14" width="16" height="20" rx="3" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M12 20h4M12 28h4M32 20h4M32 28h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Infinite Strength',
    tagline: 'Push Every Limit',
    description:
      'State-of-the-art equipment, free weights, and dedicated strength zones designed to help you build raw, functional power.',
    highlights: ['Olympic Lifting Platforms', 'Powerlifting Gear', '500+ Equipment Units'],
  },
  {
    id: 2,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M24 14v10l6 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8l4 4M32 8l-4 4M8 16l4 4M8 32l4-4M40 16l-4 4M40 32l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
      </svg>
    ),
    title: 'Infinite Discipline',
    tagline: 'Structure Breeds Success',
    description:
      'Structured programs, personal accountability, and a culture of consistency. We don\'t train you — we build a habit that lasts a lifetime.',
    highlights: ['Structured Training Plans', 'Progress Tracking App', 'Weekly Check-Ins'],
  },
  {
    id: 3,
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 36l8-10 6 6 8-12 6 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M38 20V10H28" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 36h28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
    title: 'Infinite Progress',
    tagline: 'Results You Can Measure',
    description:
      'Monthly body composition assessments, performance benchmarks, and data-backed coaching to ensure you never plateau.',
    highlights: ['Body Composition Analysis', 'Performance Benchmarks', 'Personalized Roadmap'],
  },
]

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container container">
        {/* Header */}
        <div className="about__header">
          <span className="section-label">Why Infinite Sports</span>
          <h2 className="section-title about__title">
            Three Pillars of<br />
            <span className="about__title-accent">Greatness</span>
          </h2>
          <p className="section-subtitle about__subtitle">
            We built Infinite Sports on the belief that anyone can achieve
            extraordinary results — with the right environment, knowledge, and community.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="about__cards">
          {features.map((feature, index) => (
            <div
              className="about__card"
              key={feature.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Number accent */}
              <span className="about__card-num">0{feature.id}</span>

              {/* Icon */}
              <div className="about__card-icon">
                {feature.icon}
              </div>

              <h3 className="about__card-title">{feature.title}</h3>
              <span className="about__card-tagline">{feature.tagline}</span>
              <p className="about__card-desc">{feature.description}</p>

              {/* Highlights */}
              <ul className="about__card-highlights">
                {feature.highlights.map((h) => (
                  <li key={h}>
                    <span className="about__card-bullet" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Bottom bar */}
              <div className="about__card-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
