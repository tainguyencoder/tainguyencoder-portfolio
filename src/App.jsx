import { BrowserRouter } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import {
  Navbar,
  About,
  Contact,
  Experience,
  Hero,
  Tech,
  Works,
  Education,
} from './components';

const App = () => {
  const [loadContact, setLoadContact] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoadContact(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>

        <About />
        <Tech />
        <Education />
        <Works />
        <Experience />

        <div ref={contactRef}>
          {loadContact && <Contact />} {/* Load only when in view */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
