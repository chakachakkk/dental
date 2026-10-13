import useReveal from '../hooks/useReveal.js';

export default function Wings({ onGoToTab }) {
  const headRef = useReveal();
  const dentalRef = useReveal();
  const childRef = useReveal();

  return (
    <section className="wings" id="wings">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow teal">Two Wings, One Clinic</span>
          <h2>
            Built for the whole family — <br />
            not just one age group.
          </h2>
          <p>
            Most clinics make you choose between "adult" and "kids." We didn't think you should
            have to. Pearl &amp; Sprout is designed as two connected wings that share the same
            building, the same records, and the same gentle approach.
          </p>
        </div>
        <div className="wings-grid">
          <div className="wing-card dental reveal" ref={dentalRef}>
            <div className="wing-icon">🦷</div>
            <h3>The Dental Wing</h3>
            <p>
              Comprehensive dentistry for teens and adults — from routine cleanings to cosmetic
              and restorative work — delivered with modern, low-anxiety techniques.
            </p>
            <div className="wing-tags">
              <span>Root Canal</span>
              <span>Braces &amp; Aligners</span>
              <span>Implants</span>
              <span>Whitening</span>
            </div>
            <a href="#services" className="wing-link" onClick={() => onGoToTab('dental')}>
              See dental services <span className="arrow">→</span>
            </a>
          </div>
          <div className="wing-card child reveal" ref={childRef}>
            <div className="wing-icon">🌱</div>
            <h3>The Child Care Wing</h3>
            <p>
              A dedicated paediatric &amp; child dental space with its own play area,
              child-friendly staff, and appointments designed to feel safe, not scary.
            </p>
            <div className="wing-tags">
              <span>Paediatric Dentistry</span>
              <span>Growth &amp; Vaccination</span>
              <span>Nutrition Advice</span>
              <span>Fluoride Care</span>
            </div>
            <a href="#services" className="wing-link" onClick={() => onGoToTab('child')}>
              See child care services <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
