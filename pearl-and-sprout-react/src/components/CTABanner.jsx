import useReveal from '../hooks/useReveal.js';

export default function CTABanner() {
  const ref = useReveal();

  return (
    <section>
      <div className="container">
        <div className="cta-banner reveal" ref={ref}>
          <h2>Ready to bring the whole family in for a visit?</h2>
          <div className="cta-actions">
            <a href="#book" className="btn btn-coral">
              Book Now
            </a>
            <a
              href="tel:+919876543210"
              className="btn btn-ghost"
              style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}
            >
              Call the Clinic
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
