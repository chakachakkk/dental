export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#home" className="logo">
              Pearl <span className="amp">&amp;</span> Sprout
            </a>
            <p>
              A family clinic bringing dental care and child care together, so every stage of
              your family's smile is looked after in one place.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="WhatsApp">WA</a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Dental Wing</h5>
            <ul>
              <li><a href="#services">Root Canal</a></li>
              <li><a href="#services">Braces &amp; Aligners</a></li>
              <li><a href="#services">Implants</a></li>
              <li><a href="#services">Whitening</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Child Care Wing</h5>
            <ul>
              <li><a href="#services">Paediatric Dentistry</a></li>
              <li><a href="#services">Growth Checks</a></li>
              <li><a href="#services">Vaccination</a></li>
              <li><a href="#services">Nutrition Advice</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Clinic</h5>
            <ul>
              <li><a href="#book">Book an Appointment</a></li>
              <li>12 Rose Avenue, Civil Lines, Moradabad, UP</li>
              <li>+91 98765 43210</li>
              <li>Mon–Sat · 9am–7pm</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Pearl &amp; Sprout Family Clinic. All rights reserved.</span>
          <span>Design demo by <a href="https://www.techsteps.in" target="_blank" rel="noopener noreferrer">@TechSteps</a></span>
        </div>
      </div>
    </footer>
  );
}
