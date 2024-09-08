import { BrowserRouter } from 'react-router-dom';
import {
  Contact,
  Experience,
  Works,
  Education,
  Projects
} from './components';
// components
import Navbar from './components/Navbar'
import StarsCanvas from './components/canvas/Stars';
// sections
import Hero from './sections/Hero'
import About from './sections/About'


const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <div className="relative z-0">
        <About />

          <StarsCanvas />
        </div>

        {/* <Education />
        <Projects />
        <Works />
        <Experience />

        <div ref={contactRef}>
          {loadContact && <Contact />}
        </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
