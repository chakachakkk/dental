import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to a ref and adds the "in" class
 * (paired with the .reveal CSS class) once the element scrolls into view.
 * Usage: const ref = useReveal(); <div ref={ref} className="reveal">...</div>
 */
export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return ref;
}
