import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { StarsCanvas } from '../components';

const Hero = () => {
  return (
    <section className={`relative z-0 w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[30px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" />
          <div className="w-1 sm:h-80 h-40 rainbow-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{' '}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
              Tai Nguyen
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Front-end developer <br />
            Welcome to My Portfolio
          </p>
        </div> */}
      </div>

      <ComputersCanvas />
      {/* <StarsCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-2 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
      <div className="relative z-99">
        <StarsCanvas />
      </div>
    </section>
  );
};

export default Hero;
