import { BrowserRouter } from 'react-router-dom';

import {
  Navbar,
  About,
  Contact,
  Experience,
  Hero,
  Tech,
  Works,
  StarsCanvas,
  Education,
} from './components';

const App = () => {
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

        {/* <Contact /> */}

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
