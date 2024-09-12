import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';

// styles
import { styles } from '../styles';
// wrapper
import SectionWrapper from '../hoc/SectionWrapper';
// 3D model
import Fox from '../models/Fox';
// components
import CanvasLoader from '../components/CanvasLoader';
import Button3D from '../components/Button 3D/Button3D';

const Contact = () => {
  const formRef = useRef();
  const group = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState('idle');

  // Intersection Observer hook to check if the section is in view
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation('walk');
  const handleBlur = () => setCurrentAnimation('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation('hit');

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
      setCurrentAnimation('idle');
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
      setCurrentAnimation('idle');
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
        <div className="w-full green-pink-gradient p-[1px] rounded-2xl">
          <div className="bg-tertiary rounded-2xl">
            <div className="bg-black-100 p-10 rounded-2xl flex flex-col">
              <div ref={sectionRef} className="flex justify-center m-12">
                <h3 className={styles.sectionHeadText}>
                  {inView && (
                    <Suspense fallback={<CanvasLoader />}>
                      <Button3D
                        title="Contact"
                        link="/assets/cv/CV-NGUYEN-THANH-TAI-FE-Developer.pdf"
                      />
                    </Suspense>
                  )}
                </h3>
              </div>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="mt-12 flex flex-col gap-8"
              >
                {/* Form fields */}
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
                  <span className="text-white font-medium mb-4">
                    Your Email
                  </span>
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
                  <span className="text-white font-medium mb-4">
                    Your Message
                  </span>
                  <input
                    name="message"
                    placeholder="Want me building stuff for you ?"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                    autoComplete="off"
                  />
                </label>
                <div className="flex flex-col xs:flex-row gap-10 xs:gap-0 justify-between">
                  <button
                    type="submit"
                    disabled={loading}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className="bg-tertiary py-3 px-8 rounded-xl outline-none text-white font-bold shadow-md shadow-primary w-auto self-start md:self-auto"
                  >
                    {loading ? 'Sending...' : 'Send'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={sectionRef}
        className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]"
      >
        {inView && (
          <Canvas
            camera={{
              position: [0, 0, 5],
              fov: 75,
              near: 0.1,
              far: 1000,
            }}
          >
            <directionalLight position={[0, 0, 1]} intensity={0.5} />
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 10, 0]} intensity={0.5} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={0.3}
            />
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

            <Suspense fallback={<CanvasLoader />}>
              <group
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              >
                <Fox currentAnimation={currentAnimation} />
              </group>
            </Suspense>
          </Canvas>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
