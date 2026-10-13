import { forwardRef } from 'react';
import useReveal from '../hooks/useReveal.js';

const SERVICES = {
  dental: [
    { title: 'General & Preventive Care', desc: 'Cleanings, check-ups and cavity prevention to keep small problems from becoming big ones.' },
    { title: 'Root Canal Therapy', desc: 'Pain-managed, single-visit-where-possible root canal treatment with digital imaging.' },
    { title: 'Braces & Clear Aligners', desc: 'Traditional braces and clear aligner therapy for teens and adults, planned digitally.' },
    { title: 'Dental Implants', desc: 'Single-tooth to full-arch implant solutions restored with natural-looking crowns.' },
    { title: 'Cosmetic & Whitening', desc: "Veneers, bonding and in-chair whitening for a smile you're comfortable showing." },
    { title: 'Emergency Dentistry', desc: 'Same-day slots for chipped teeth, sudden pain and other dental emergencies.' },
  ],
  child: [
    { title: 'Paediatric Dentistry', desc: 'First-tooth to teen dental care, with extra chair time built in for little ones who need it.' },
    { title: 'Growth & Development Checks', desc: 'Routine height, weight and milestone tracking alongside general wellness visits.' },
    { title: 'Vaccination Schedule', desc: 'Age-appropriate immunisation tracking and administration, recorded in one shared file.' },
    { title: 'Fluoride & Sealant Care', desc: 'Protective treatments that lower cavity risk in growing teeth.' },
    { title: 'Nutrition & Habit Counselling', desc: "Guidance on feeding, thumb-sucking and diet habits that affect a child's teeth and health." },
    { title: 'Play-First Visits', desc: "A dedicated play corner and unhurried appointments so check-ups don't feel like a chore." },
  ],
};

function ServiceCard({ index, title, desc }) {
  const ref = useReveal();
  return (
    <div className="service-card reveal" ref={ref}>
      <div className="service-num">{String(index + 1).padStart(2, '0')}</div>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
  );
}

const Services = forwardRef(function Services({ activeTab, setActiveTab }, ref) {
  const headRef = useReveal();
  const tabsRef = useReveal();

  return (
    <section id="services" ref={ref}>
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow coral">What We Treat</span>
          <h2>Services across every stage of life</h2>
          <p>Toggle between our two wings to see what each one covers.</p>
        </div>

        <div className="services-tabs reveal" ref={tabsRef}>
          <button
            className={`tab-btn ${activeTab === 'dental' ? 'active' : ''}`}
            onClick={() => setActiveTab('dental')}
          >
            Dental Wing
          </button>
          <button
            className={`tab-btn ${activeTab === 'child' ? 'active' : ''}`}
            onClick={() => setActiveTab('child')}
          >
            Child Care Wing
          </button>
        </div>

        <div className={`service-panel ${activeTab === 'dental' ? 'active' : ''}`}>
          <div className="services-grid">
            {SERVICES.dental.map((s, i) => (
              <ServiceCard key={s.title} index={i} {...s} />
            ))}
          </div>
        </div>

        <div className={`service-panel ${activeTab === 'child' ? 'active' : ''}`}>
          <div className="services-grid">
            {SERVICES.child.map((s, i) => (
              <ServiceCard key={s.title} index={i} {...s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
