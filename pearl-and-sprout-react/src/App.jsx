import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Wings from './components/Wings.jsx';
import Services from './components/Services.jsx';
import WhyChoose from './components/WhyChoose.jsx';
import Team from './components/Team.jsx';
import Testimonials from './components/Testimonials.jsx';
import Booking from './components/Booking.jsx';
import FAQ from './components/FAQ.jsx';
import CTABanner from './components/CTABanner.jsx';
import Footer from './components/Footer.jsx';
import ToTop from './components/ToTop.jsx';

export default function App() {
  const [activeTab, setActiveTab] = useState('dental');

  // Smooth-scroll for in-page anchors, offset for the fixed header.
  useEffect(() => {
    const handler = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute('href');
      if (id.length <= 1) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 84;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const goToTab = (tab) => setActiveTab(tab);

  return (
    <>
      <Header />
      <Hero />
      <Stats />
      <Wings onGoToTab={goToTab} />
      <Services activeTab={activeTab} setActiveTab={setActiveTab} />
      <WhyChoose />
      <Team />
      <Testimonials />
      <Booking />
      <FAQ />
      <CTABanner />
      <Footer />
      <ToTop />
    </>
  );
}
