import { useState } from 'react'
import './Gallery.css'

const galleryItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1581009137042-c552e485697a?w=400&q=80',
    label: 'Weight Training Floor',
    span: 'wide',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1544033527-b192daee1f5b?w=400&q=80',
    label: 'Cardio Zone',
    span: 'normal',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
    label: 'Group Training Class',
    span: 'normal',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=80',
    label: 'Olympic Lifting',
    span: 'normal',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    thumb: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    label: 'Yoga & Recovery',
    span: 'normal',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=800&q=80',
    thumb: 'https://images.unsplash.com/photo-1549060279-7e168fcee0c2?w=400&q=80',
    label: 'Boxing & Combat',
    span: 'wide',
  },
]

function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  const openLightbox = (item) => setLightbox(item)
  const closeLightbox = () => setLightbox(null)

  const navigate = (dir) => {
    const idx = galleryItems.findIndex(i => i.id === lightbox.id)
    const next = galleryItems[(idx + dir + galleryItems.length) % galleryItems.length]
    setLightbox(next)
  }

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        {/* Header */}
        <div className="gallery__header">
          <span className="section-label">Facility Tour</span>
          <h2 className="section-title">
            See the<br />
            <span className="gallery__title-accent">Facility</span>
          </h2>
          <p className="section-subtitle">
            World-class equipment, immaculate spaces, and an atmosphere built for
            serious athletes. This is where champions are made.
          </p>
        </div>

        {/* Grid */}
        <div className="gallery__grid">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`gallery__item gallery__item--${item.span}`}
              onClick={() => openLightbox(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(item)}
              aria-label={`View ${item.label}`}
            >
              <img
                src={item.thumb}
                alt={item.label}
                className="gallery__img"
                loading="lazy"
              />
              <div className="gallery__overlay">
                <div className="gallery__overlay-content">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                  <span className="gallery__label">{item.label}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="gallery__lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-label="Image lightbox"
        >
          <button className="gallery__lb-close" onClick={closeLightbox} aria-label="Close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>

          <button
            className="gallery__lb-nav gallery__lb-nav--prev"
            onClick={(e) => { e.stopPropagation(); navigate(-1) }}
            aria-label="Previous"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className="gallery__lb-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.label} className="gallery__lb-img" />
            <p className="gallery__lb-label">{lightbox.label}</p>
          </div>

          <button
            className="gallery__lb-nav gallery__lb-nav--next"
            onClick={(e) => { e.stopPropagation(); navigate(1) }}
            aria-label="Next"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default Gallery
