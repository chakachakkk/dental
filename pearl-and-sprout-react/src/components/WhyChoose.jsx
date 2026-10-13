import useReveal from '../hooks/useReveal.js';

const REASONS = [
  { title: 'Shared family records', desc: "One profile per family — no repeating history at every visit." },
  { title: 'Same-day emergency slots', desc: 'Held open daily for urgent dental and child care needs.' },
  { title: 'Child-trained staff, adult-grade equipment', desc: 'Every clinician is trained to work with nervous first-time patients of any age.' },
  { title: 'Transparent, upfront pricing', desc: "You'll see a written estimate before any treatment begins — always." },
];

export default function WhyChoose() {
  const ref = useReveal();

  return (
    <section>
      <div className="container">
        <div className="why reveal" ref={ref}>
          <div className="why-grid">
            <div className="why-head">
              <span className="eyebrow">Why Families Choose Us</span>
              <h2>
                One clinic. One file. <br />
                Every age covered.
              </h2>
              <p style={{ marginTop: 16, maxWidth: 380 }}>
                A shared medical record means your child's paediatrician and your family dentist
                are always looking at the same picture.
              </p>
            </div>
            <div className="why-list">
              {REASONS.map((r, i) => (
                <div className="why-item" key={r.title}>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
