import React, { useEffect, useRef } from 'react';
import { useAudio } from './AudioEngine';
import { ArrowDown, Globe, Sparkles } from 'lucide-react';
import gsap from 'gsap';

export const Hero = ({ onExplore }) => {
  const { playHoverSound, playClickSound } = useAudio();
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim-title', {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });

      gsap.from('.hero-anim-sub', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '160px 40px 60px',
        position: 'relative',
        zIndex: 10,
        maxWidth: '1440px',
        margin: '0 auto'
      }}
    >
      {/* Top Tagline Badge */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div className="hero-anim-sub pill-badge" style={{ backgroundColor: 'var(--bg-card)', backdropFilter: 'blur(10px)' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#3b82f6' }} />
          <span>DIGITAL MARKETING & 3D AGENCY</span>
        </div>

        <div className="hero-anim-sub" style={{ display: 'flex', alignItems: 'center', gap: '8px', opacity: 0.8 }}>
          <Globe size={14} />
          <span className="font-roman" style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            LOS ANGELES • LONDON • TOKYO
          </span>
        </div>
      </div>

      {/* Main Massive Brutalist Title */}
      <div style={{ margin: '60px 0 40px' }}>
        <h1
          className="font-machina hero-anim-title"
          style={{
            fontSize: 'clamp(2.8rem, 7.5vw, 7.5rem)',
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: 'var(--text-main)',
            maxWidth: '1200px'
          }}
        >
          WE CREATE DIGITAL EXPERIENCES THAT MAKE PEOPLE <span className="shimmer-text">STOP SCROLLING.</span>
        </h1>
      </div>

      {/* Hero Bottom Row */}
      <div
        className="hero-anim-sub"
        style={{
          display: 'flex',
          justify: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '32px'
        }}
      >
        {/* Description paragraph */}
        <p
          className="font-roman"
          style={{
            maxWidth: '420px',
            fontSize: '1.125rem',
            fontWeight: 500,
            color: 'var(--text-sub)',
            lineHeight: 1.4
          }}
        >
          Click Or Media is a global digital marketing agency where performance strategy dictates the medium—whether that’s WebGL 3D, viral ad funnels, or spatial brand activations.
        </p>

        {/* Action Buttons & Scroll Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <button
            className="btn-primary"
            data-cursor="EXPLORE"
            onMouseEnter={playHoverSound}
            onClick={() => {
              playClickSound();
              if (onExplore) onExplore();
            }}
          >
            <Sparkles size={16} />
            <span>EXPLORE OUR WORK</span>
          </button>

          {/* Animated Scroll Down Indicator */}
          <div
            data-cursor="SCROLL"
            onClick={() => {
              playClickSound();
              const workElem = document.querySelector('#work');
              if (workElem) workElem.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
              opacity: 0.8
            }}
          >
            <div
              className="scroll-icon"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--text-main)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ArrowDown size={18} />
            </div>
            <span className="font-machina" style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em' }}>
              SCROLL DOWN
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
