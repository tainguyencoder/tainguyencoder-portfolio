import { BrowserRouter } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// sections
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import Stars from './components/canvas/Stars';

const App = () => {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />

        <Hero />

        <div ref={sectionRef} className="relative z-0">
          <About />
          {/* <Stars /> */}
          {inView && <Stars />}
        </div>

        <Education />

        <div className="relative z-10">
          <Experience />
        </div>

        <div className="relative z-0">
          <Projects />
        </div>

        <Contact />

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
