import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';

const FAQS = [
  {
    q: 'Do you treat both children and adults at the same location?',
    a: 'Yes — Pearl & Sprout operates as one building with two connected wings, so a parent and child can be seen on the same visit.',
  },
  {
    q: 'Is there a separate waiting area for kids?',
    a: 'The Child Care Wing has its own play-friendly waiting area, separate from the general dental waiting room.',
  },
  {
    q: 'Do you accept walk-ins for emergencies?',
    a: 'We hold same-day slots for urgent dental pain and paediatric concerns. Calling ahead helps us prepare, but walk-ins are welcome.',
  },
  {
    q: 'Can I book a family appointment for multiple members?',
    a: 'Yes, mention it in the notes field when booking and our front desk will try to align appointment times.',
  },
];

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  const ref = useReveal();

  return (
    <div className={`faq-item reveal ${open ? 'open' : ''}`} ref={ref}>
      <button className="faq-q" onClick={() => setOpen((o) => !o)}>
        {q}
        <span className="plus">+</span>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? '200px' : '0px' }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const headRef = useReveal();

  return (
    <section id="faq">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow teal">Good to Know</span>
          <h2>Frequently asked questions</h2>
        </div>
        <div className="faq-list">
          {FAQS.map((f) => (
            <FAQItem key={f.q} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
