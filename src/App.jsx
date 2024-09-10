import { BrowserRouter } from 'react-router-dom';
// Scroll-linked animations
import SectionWithProgress from './components/SectionWithProgress';
// sections
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
// canvas
import StarsCanvas from './components/canvas/Starts';

const App = () => {
  return (
    <SectionWithProgress>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <Navbar />

          <Hero />

          <div className="relative z-0">
            <About />
            <StarsCanvas />
          </div>

          <Education />

          <Experience />

          <Projects />

          <Contact />

          <Footer />
        </div>
      </BrowserRouter>
    </SectionWithProgress>
  );
};

export default App;
