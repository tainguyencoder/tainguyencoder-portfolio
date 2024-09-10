import { useRef } from 'react';
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

const SectionWithProgress = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  // Smooth animation for the progress bar
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const circumference = 2 * Math.PI * 90;
  const { scrollY } = useScroll()

  return (
    <section ref={ref} className="scroll-section">
      <figure className="progress-circle hidden sm:block">
        <a href="#about">
        <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="aura-gradient" gradientTransform="rotate(90)">
              <stop offset="0%" stopColor="rgba(255, 0, 0, 0.8)" /> {/* Red */}
              <stop offset="17%" stopColor="rgba(255, 127, 0, 0.8)" />{' '}
              <stop offset="34%" stopColor="rgba(255, 255, 0, 0.8)" />{' '}
              <stop offset="51%" stopColor="rgba(0, 255, 0, 0.8)" />{' '}
              <stop offset="68%" stopColor="rgba(0, 127, 255, 0.8)" />{' '}
              <stop offset="85%" stopColor="rgba(75, 0, 130, 0.8)" />{' '}
              <stop offset="100%" stopColor="rgba(148, 0, 211, 0.8)" />{' '}
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="30" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            className="indicator"
            style={{ pathLength }} /* Link pathLength to scrollYProgress */
          />
        </svg>
        </a>
      </figure>
      <div className="section-content">{children}</div>
    </section>
  );
};

export default SectionWithProgress;
