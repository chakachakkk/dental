import useReveal from '../hooks/useReveal.js';

const TESTIMONIALS = [
  {
    quote:
      'My daughter used to cry before every dental visit. The play area and the way Dr. Kaur talks to her changed that completely.',
    name: 'Priya Sharma',
    tag: 'Parent, child care wing',
    initial: 'P',
    color: '#FF8A65',
  },
  {
    quote:
      "Got my root canal done here and booked my son's vaccination the same afternoon. One visit, two appointments, zero hassle.",
    name: 'Arjun Rathi',
    tag: 'Patient, both wings',
    initial: 'A',
    color: '#1F5C52',
  },
  {
    quote:
      "Transparent pricing, no upselling, and the staff actually remember our family's history. Rare to find that combination.",
    name: 'Meera Nair',
    tag: 'Patient since 2021',
    initial: 'M',
    color: '#E56F49',
  },
];

function TestiCard({ quote, name, tag, initial, color }) {
  const ref = useReveal();
  return (
    <div className="testi-card reveal" ref={ref}>
      <div className="testi-stars">★★★★★</div>
      <p className="quote">{quote}</p>
      <div className="testi-who">
        <div className="testi-avatar" style={{ background: color }}>
          {initial}
        </div>
        <div>
          <div className="name">{name}</div>
          <div className="tag">{tag}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container testi-grid">
        {TESTIMONIALS.map((t) => (
          <TestiCard key={t.name} {...t} />
        ))}
      </div>
    </section>
  );
}
