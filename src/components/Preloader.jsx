import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 12) + 4;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(() => {
          gsap.to('.preloader-container', {
            yPercent: -100,
            duration: 1.1,
            ease: 'power4.inOut',
            onComplete: () => {
              if (onComplete) onComplete();
            }
          });
        }, 400);
      }
      setProgress(current);
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className="preloader-container"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#dee7f1',
        zIndex: 100000,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '40px',
        color: '#181520'
      }}
    >
      {/* Top Header Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="font-machina" style={{ fontSize: '14px', letterSpacing: '0.1em' }}>
          CLICK OR MEDIA
        </span>
        <span className="font-roman" style={{ fontSize: '13px', textTransform: 'uppercase', opacity: 0.6 }}>
          LOS ANGELES / TOKYO / LONDON
        </span>
      </div>

      {/* Center Branding & Progress */}
      <div style={{ textAlign: 'center' }}>
        <h1
          className="font-machina"
          style={{
            fontSize: 'clamp(2rem, 6vw, 5.5rem)',
            letterSpacing: '-0.02em',
            marginBottom: '16px'
          }}
        >
          CLICK OR MEDIA
        </h1>
        <p className="font-roman" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.2em', opacity: 0.7 }}>
          DIGITAL MARKETING & 3D IMMERSIVE AGENCY
        </p>
      </div>

      {/* Bottom Counter Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#3b82f6',
              animation: 'pulse 1.2s infinite'
            }}
          />
          <span className="font-roman" style={{ fontSize: '12px', textTransform: 'uppercase', fontWeight: 600 }}>
            LOADING ASSETS & SHADERS
          </span>
        </div>

        <span
          className="font-machina"
          style={{
            fontSize: 'clamp(3rem, 10vw, 8rem)',
            lineHeight: 0.8,
            fontWeight: 800
          }}
        >
          {progress.toString().padStart(3, '0')}%
        </span>
      </div>
    </div>
  );
};
