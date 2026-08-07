import React, { useState, useEffect } from 'react';
import { useAudio } from './AudioEngine';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer = () => {
  const { playHoverSound, playClickSound } = useAudio();
  const [times, setTimes] = useState({ la: '', ny: '', london: '' });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTimes({
        la: now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit' }),
        ny: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }),
        london: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' })
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { label: 'INSTAGRAM', url: 'https://instagram.com' },
    { label: 'LINKEDIN', url: 'https://linkedin.com' },
    { label: 'TWITTER / X', url: 'https://twitter.com' },
    { label: 'DRIBBBLE', url: 'https://dribbble.com' },
    { label: 'AWWWARDS', url: 'https://awwwards.com' }
  ];

  return (
    <footer
      style={{
        padding: '80px 40px 40px',
        maxWidth: '1440px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10,
        borderTop: '1px solid var(--border-dark)',
        color: 'var(--text-main)'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '40px', marginBottom: '60px' }}>
        
        {/* Brand & Clocks */}
        <div>
          <h2 className="font-machina" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '16px' }}>
            CLICK OR MEDIA
          </h2>
          <p className="font-roman" style={{ fontSize: '1rem', opacity: 0.7, maxWidth: '360px', marginBottom: '24px' }}>
            Digital Marketing & 3D WebGL Agency. Turning brand stories into scalable revenue engines.
          </p>

          {/* Timezone Clocks */}
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <div>
              <div className="font-roman" style={{ fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase' }}>LOS ANGELES</div>
              <div className="font-machina" style={{ fontSize: '1rem' }}>{times.la || '11:47 AM'}</div>
            </div>
            <div>
              <div className="font-roman" style={{ fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase' }}>NEW YORK</div>
              <div className="font-machina" style={{ fontSize: '1rem' }}>{times.ny || '02:47 PM'}</div>
            </div>
            <div>
              <div className="font-roman" style={{ fontSize: '0.75rem', opacity: 0.5, textTransform: 'uppercase' }}>LONDON</div>
              <div className="font-machina" style={{ fontSize: '1rem' }}>{times.london || '07:47 PM'}</div>
            </div>
          </div>
        </div>

        {/* Social Navigation */}
        <div>
          <div className="font-roman" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.6, marginBottom: '16px' }}>
            CONNECT WITH US
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="LINK"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className="font-machina"
                style={{
                  color: 'var(--text-main)',
                  fontSize: '1.1rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease'
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px', paddingTop: '24px', borderTop: '1px solid var(--border-glass)' }}>
        <div className="font-roman" style={{ fontSize: '0.85rem', opacity: 0.6 }}>
          © {new Date().getFullYear()} CLICK OR MEDIA INC. ALL RIGHTS RESERVED.
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <span className="font-roman" style={{ fontSize: '0.85rem', opacity: 0.6 }}>
            CRAFTED WITH HIGH PRECISION
          </span>

          <button
            data-cursor="TOP"
            onMouseEnter={playHoverSound}
            onClick={scrollToTop}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: 'var(--text-main)',
              color: 'var(--bg-primary)',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
