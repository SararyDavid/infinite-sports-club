import './Trainers.css'

const trainers = [
  {
    id: 1,
    name: 'Marcus Rivera',
    specialty: 'Strength & Powerlifting',
    experience: '12 Years',
    certifications: ['NSCA-CSCS', 'USA Powerlifting'],
    bio: 'Former national powerlifting champion. Marcus specializes in building elite-level strength and coaching beginners to their first competition.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=400&q=80&fit=crop&crop=face',
    socials: ['instagram', 'twitter'],
    accent: '#ff6b00',
  },
  {
    id: 2,
    name: 'Aisha Okafor',
    specialty: 'HIIT & Athletic Conditioning',
    experience: '9 Years',
    certifications: ['ACE-CPT', 'NASM-PES'],
    bio: 'Aisha brings explosive energy to every session. Her functional training protocols have transformed hundreds of athletes and everyday fitness enthusiasts.',
    image: 'https://images.unsplash.com/photo-1609899464726-023e86b84df2?w=400&h=400&q=80&fit=crop&crop=face',
    socials: ['instagram'],
    accent: '#ff6b00',
  },
  {
    id: 3,
    name: 'Kai Matsuda',
    specialty: 'Yoga & Mobility Recovery',
    experience: '10 Years',
    certifications: ['E-RYT 500', 'FRCms'],
    bio: 'Kai bridges the gap between performance and recovery. His mobility programs are a cornerstone of every serious athlete\'s routine at Infinite.',
    image: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400&h=400&q=80&fit=crop&crop=face',
    socials: ['instagram', 'youtube'],
    accent: '#ff6b00',
  },
]

const socialIcons = {
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
    </svg>
  ),
  twitter: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  youtube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  ),
}

function Trainers() {
  return (
    <section className="trainers" id="trainers">
      <div className="container">
        {/* Header */}
        <div className="trainers__header">
          <span className="section-label">Expert Coaching</span>
          <h2 className="section-title">
            Meet Your<br />
            <span className="trainers__title-accent">Coaches</span>
          </h2>
          <p className="section-subtitle">
            Certified professionals who don't just train you — they transform you.
            Every coach brings elite credentials and real passion.
          </p>
        </div>

        {/* Trainer cards */}
        <div className="trainers__grid">
          {trainers.map((trainer, index) => (
            <div
              className="trainer__card"
              key={trainer.id}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="trainer__img-wrap">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="trainer__img"
                  loading="lazy"
                />
                <div className="trainer__img-ring" />
                <div className="trainer__experience-badge">
                  <span>{trainer.experience}</span>
                  <small>Experience</small>
                </div>
              </div>

              {/* Info */}
              <div className="trainer__info">
                <h3 className="trainer__name">{trainer.name}</h3>
                <span className="trainer__specialty">{trainer.specialty}</span>

                <p className="trainer__bio">{trainer.bio}</p>

                {/* Certifications */}
                <div className="trainer__certs">
                  {trainer.certifications.map((cert) => (
                    <span key={cert} className="trainer__cert-badge">{cert}</span>
                  ))}
                </div>

                {/* Socials */}
                <div className="trainer__socials">
                  {trainer.socials.map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="trainer__social"
                      aria-label={s}
                    >
                      {socialIcons[s]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainers
