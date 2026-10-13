import { useState } from 'react';
import useReveal from '../hooks/useReveal.js';

export default function Booking() {
  const ref = useReveal();
  const [wing, setWing] = useState('Dental Wing');
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    date: '',
    service: 'General check-up',
    note: '',
  });

  const handleChange = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Demo only — no backend. Wire this up to your booking API / email service.
    setSubmitted(true);
  };

  return (
    <section id="book">
      <div className="container">
        <div className="book-grid reveal" ref={ref}>
          <div className="book-info">
            <span className="eyebrow coral">Book a Visit</span>
            <h2>Tell us who's visiting, we'll take it from there.</h2>
            <p>
              Pick a wing, share a convenient time, and our front desk will confirm your slot
              within a few hours.
            </p>
            <div className="book-contact">
              <div className="book-contact-item">
                <span className="ic">📍</span>
                <div>
                  <strong>Visit us</strong>
                  <span>12 Rose Avenue, Civil Lines, Moradabad, UP</span>
                </div>
              </div>
              <div className="book-contact-item">
                <span className="ic">📞</span>
                <div>
                  <strong>Call the front desk</strong>
                  <span>+91 98765 43210 · Mon–Sat, 9am–7pm</span>
                </div>
              </div>
              <div className="book-contact-item">
                <span className="ic">✉️</span>
                <div>
                  <strong>Email us</strong>
                  <span>hello@pearlandsprout.clinic</span>
                </div>
              </div>
            </div>
          </div>

          <form className="book-form" onSubmit={handleSubmit}>
            <div className="form-group full" style={{ marginBottom: 16 }}>
              <label>Who's the appointment for?</label>
              <div className="patient-toggle">
                <input
                  type="radio"
                  name="wing"
                  id="wingDental"
                  value="Dental Wing"
                  checked={wing === 'Dental Wing'}
                  onChange={() => setWing('Dental Wing')}
                />
                <label
                  htmlFor="wingDental"
                  className={wing === 'Dental Wing' ? 'checked' : ''}
                >
                  🦷 Myself / Adult
                </label>
                <input
                  type="radio"
                  name="wing"
                  id="wingChild"
                  value="Child Care Wing"
                  checked={wing === 'Child Care Wing'}
                  onChange={() => setWing('Child Care Wing')}
                />
                <label
                  htmlFor="wingChild"
                  className={wing === 'Child Care Wing' ? 'checked' : ''}
                >
                  🌱 My Child
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fname">Full name</label>
                <input
                  type="text"
                  id="fname"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={handleChange('name')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fphone">Phone number</label>
                <input
                  type="tel"
                  id="fphone"
                  placeholder="+91 00000 00000"
                  required
                  value={form.phone}
                  onChange={handleChange('phone')}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="fdate">Preferred date</label>
                <input
                  type="date"
                  id="fdate"
                  required
                  value={form.date}
                  onChange={handleChange('date')}
                />
              </div>
              <div className="form-group">
                <label htmlFor="fservice">Concern / Service</label>
                <select id="fservice" value={form.service} onChange={handleChange('service')}>
                  <option>General check-up</option>
                  <option>Tooth pain / emergency</option>
                  <option>Braces / aligners consult</option>
                  <option>Child's first visit</option>
                  <option>Vaccination</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-group full" style={{ marginBottom: 20 }}>
              <label htmlFor="fnote">Anything we should know?</label>
              <textarea
                id="fnote"
                rows="3"
                placeholder="Optional notes for the doctor"
                value={form.note}
                onChange={handleChange('note')}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              {submitted ? 'Request Sent ✓' : 'Request Appointment'}
            </button>

            <div className={`form-success ${submitted ? 'show' : ''}`}>
              ✅ <span>Thanks! We'll confirm your slot by phone shortly.</span>
            </div>

            <p className="form-note">This is a demo booking form — no data is sent anywhere.</p>
          </form>
        </div>
      </div>
    </section>
  );
}
