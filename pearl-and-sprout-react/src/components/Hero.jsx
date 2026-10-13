export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Clove Dental</span>
          <h1>
            You are <em>unstoppable</em>
            <br /> when you <span className="sprout">smile confidently</span>
          </h1>
          <p className="lead">
            Get up to 35% OFF on Invisalign Aligners and enjoy trusted care from experienced dental specialists.
          </p>
          <div className="hero-actions">
            <a href="#booking" className="btn btn-primary">Book Appointment</a>
            <a href="#contact" className="btn btn-ghost">Instant Callback</a>
          </div>
          <div className="hero-wings">
            <div className="wing-pill dental">
              <span className="dot">✓</span>
              Invisalign Provider
            </div>
            <div className="wing-pill child">
              <span className="dot">⏱</span>
              Offer ends 30th June
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-grid">
            <div className="hero-card hero-card-product">
              <span className="hero-card-tag">Invisalign</span>
              <img
                src="https://images.unsplash.com/photo-1613369907282-3f0c4d5fa68b?auto=format&fit=crop&w=760&q=80"
                alt="Invisalign aligners in case"
              />
            </div>

            <div className="hero-card hero-card-model">
              <span className="hero-card-label">For Clove Dental patients</span>
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=760&q=80"
                alt="Smiling patient"
              />
              <span className="hero-card-banner">Valid till 30th June '26</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
