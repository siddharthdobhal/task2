import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { AudioProvider } from './components/AudioEngine';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { ThreeBackground } from './components/ThreeBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { PhilosophyStats } from './components/PhilosophyStats';
import { AwardsSection } from './components/AwardsSection';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <AudioProvider>
      <div data-theme={isDark ? 'dark' : 'light'} style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
        {/* Noise overlay canvas */}
        <div className="noise-overlay" />

        {/* Custom Magnetic Cursor */}
        <CustomCursor />

        {/* Intro Preloader */}
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}

        {/* 3D WebGL Background Scene */}
        <ThreeBackground isDark={isDark} />

        {/* Main Header Nav */}
        <Navbar isDark={isDark} setIsDark={setIsDark} />

        {/* Page Content Sections */}
        <main style={{ position: 'relative', zIndex: 1 }}>
          <Hero />
          <Portfolio />
          <Services />
          <PhilosophyStats />
          <AwardsSection />
          <Testimonials />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </AudioProvider>
  );
}
