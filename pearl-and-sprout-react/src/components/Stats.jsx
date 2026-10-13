import useReveal from '../hooks/useReveal.js';

const STATS = [
  { num: '12', suffix: '+', label: 'Years Caring for Families' },
  { num: '9,400', suffix: '+', label: 'Smiles Treated' },
  { num: '3,100', suffix: '+', label: 'Little Patients' },
  { num: '4.9', suffix: '★', label: 'Average Patient Rating' },
];

function Stat({ num, suffix, label }) {
  const ref = useReveal();
  return (
    <div className="reveal" ref={ref}>
      <div className="stat-num">
        {num}
        <span className="coral-txt">{suffix}</span>
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="stats" style={{ paddingTop: 0, marginTop: -1 }}>
      <div className="container stats-grid">
        {STATS.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}
