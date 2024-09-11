import { BrowserRouter } from 'react-router-dom';

// sections
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Navbar />

        <Hero />

        <About />

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
