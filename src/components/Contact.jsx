import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { SpiderMan } from '../models';
import { Loader } from '../components';

// Hook to manage flickering effect
const useFlicker = (baseIntensity, interval = 100) => {
  const [intensity, setIntensity] = useState(baseIntensity);

  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setIntensity(baseIntensity * (1 + Math.random() * 2.5)); // Adjust the range as needed
    }, interval);

    return () => clearInterval(flickerInterval);
  }, [baseIntensity, interval]);

  return intensity;
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState(' ');
  const [lightsOn, setLightsOn] = useState(false);
  const [intensities, setIntensities] = useState({
    directional: 0,
    point1: 0,
    point2: 0,
    spot: 0,
    point3: 0
  });

  useEffect(() => {
    // Gradual brightening effect
    if (!lightsOn) {
      const startTime = Date.now();
      const duration = 3500; // 2.5 seconds

      const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 2);
        setIntensities({
          directional: progress * 1,
          point1: progress * 1,
          point2: progress * 1,
          spot: progress * 1,
          point3: progress * 0.5
        });

        if (progress === 1) {
          setLightsOn(true);
          clearInterval(interval);
        }
      }, 16); // ~60fps
    }
  }, [lightsOn]);

  // Apply flicker effect only to one side of the lights
  const pointLightIntensity1 = useFlicker(intensities.point1);
  const pointLightIntensity2 = useFlicker(intensities.point2);
  const pointLightIntensity3 = intensities.point3;

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation('Jump');
  const handleBlur = () => setCurrentAnimation(' ');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation('Swing to land');

    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'tainguyencoder',
          from_email: form.email,
          to_email: 'tainguyencoder@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      );
      setLoading(false);
      setCurrentAnimation(' ');
      alert('Thank you. I will get back to you as soon as possible.');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);
      console.error(error);
      alert('Ahh, something went wrong. Please try again.');
      setCurrentAnimation(' ');
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div className="relative flex lg:flex-row flex-col max-container">
      <div className="lg:w-1/2 flex flex-col">
        <div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="bg-black-100 p-8 rounded-2xl flex flex-col"
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                required
                type="text"
                name="name"
                placeholder="What's your name ?"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                autoComplete="name"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="What's your email ?"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                autoComplete="email"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <input
                name="message"
                placeholder="Want me building stuff for you ? Hit me on Email"
                rows="4"
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                autoComplete="off"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>
      </div>

      <div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"
      >
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[-5, 5, 5]} intensity={intensities.directional} />
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 10, 5]} intensity={pointLightIntensity1} />
          <pointLight position={[-5, 10, -5]} intensity={pointLightIntensity2} />
          {/* <spotLight
            position={[10, 10, 10]}
            angle={0.2}
            penumbra={0.5}
            intensity={intensities.spot}
          /> */}
          <pointLight position={[5, -5, 5]} intensity={pointLightIntensity3} castShadow />
          <Suspense fallback={<Loader />}>
            <SpiderMan
              currentAnimation={currentAnimation}
              rotation={
                currentAnimation === 'Swing to land' ? [0, 0.1, 0] : [0, 0.1, 0]
              }
              position={
                currentAnimation === 'Swing to land'
                  ? [-0.55, -0.6, 0]
                  : [-0.55, -0.6, 0]
              }
              scale={
                currentAnimation === 'Swing to land' ? [1, 1, 0.8] : [1, 1, 0.8]
              }
            />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
