import useReveal from '../hooks/useReveal.js';

const TEAM = [
  { name: 'Dr. Aanya Kapoor', role: 'Lead Dentist · Dental Wing', bg: 'linear-gradient(150deg,#EAF2ED,#cfe3d8)' },
  { name: 'Dr. Rohan Mehta', role: 'Prosthodontist · Dental Wing', bg: 'linear-gradient(150deg,#dcece4,#b9d6c8)' },
  { name: 'Dr. Simran Kaur', role: 'Paediatric Lead · Child Wing', bg: 'linear-gradient(150deg,#FFF1E8,#ffd9c2)' },
  { name: 'Dr. Ishaan Verma', role: 'Child Dental Specialist', bg: 'linear-gradient(150deg,#ffe6d8,#ffc4a3)' },
];

function TeamCard({ name, role, bg }) {
  const ref = useReveal();
  return (
    <div className="team-card reveal" ref={ref}>
      <div className="team-photo" style={{ background: bg }}></div>
      <h4>{name}</h4>
      <span className="role">{role}</span>
    </div>
  );
}

export default function Team() {
  const headRef = useReveal();

  return (
    <section id="team">
      <div className="container">
        <div className="section-head reveal" ref={headRef}>
          <span className="eyebrow teal">Meet the Team</span>
          <h2>Doctors from both wings</h2>
          <p>
            Every family is paired with a lead dentist and a lead paediatric contact, so you
            always know who to ask.
          </p>
        </div>
        <div className="team-grid">
          {TEAM.map((t) => (
            <TeamCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}
