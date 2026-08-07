import React, { useState, useEffect } from 'react';
import { useAudio } from './AudioEngine';
import { Volume2, VolumeX, Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ isDark, setIsDark, onNavigate }) => {
  const { isMuted, toggleSound, playHoverSound, playClickSound } = useAudio();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'SERVICES', href: '#services' },
    { label: 'AGENCY', href: '#agency' },
    { label: 'AWARDS', href: '#awards' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleLinkClick = (href) => {
    playClickSound();
    setMobileMenuOpen(false);
    if (onNavigate) onNavigate(href);
    const elem = document.querySelector(href);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          padding: '24px 40px',
          transition: 'all 0.4s ease',
          backgroundColor: scrolled ? 'var(--bg-card)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--border-glass)' : '1px solid transparent'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1440px', margin: '0 auto' }}>
          
          {/* Logo */}
          <a
            href="#"
            data-cursor="CLICK"
            onMouseEnter={playHoverSound}
            onClick={() => playClickSound()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: 'var(--text-main)',
                color: 'var(--bg-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '14px',
                transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
              }}
            >
              C
            </div>
            <span
              className="font-machina"
              style={{
                fontSize: '1.125rem',
                color: 'var(--text-main)',
                letterSpacing: '-0.02em'
              }}
            >
              CLICK OR MEDIA
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navLinks.map((link) => (
              <button
                key={link.label}
                data-cursor="GO"
                onMouseEnter={playHoverSound}
                onClick={() => handleLinkClick(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  padding: '4px 0',
                  transition: 'opacity 0.2s ease'
                }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Controls & CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            
            {/* Audio Toggle Button */}
            <button
              data-cursor="MUTE"
              onMouseEnter={playHoverSound}
              onClick={toggleSound}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                borderRadius: '100px',
                padding: '8px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--text-main)',
                transition: 'all 0.3s ease'
              }}
            >
              <div className={`sound-bars ${!isMuted ? 'sound-playing' : ''}`} style={{ display: 'flex', gap: '3px', alignItems: 'center', height: '14px' }}>
                <span className="sound-bar" style={{ height: '4px' }} />
                <span className="sound-bar" style={{ height: '8px' }} />
                <span className="sound-bar" style={{ height: '12px' }} />
                <span className="sound-bar" style={{ height: '6px' }} />
              </div>
              <span className="font-roman" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {isMuted ? 'SOUND OFF' : 'SOUND ON'}
              </span>
            </button>

            {/* Dark/Light Mode Switcher */}
            <button
              data-cursor="MODE"
              onMouseEnter={playHoverSound}
              onClick={() => {
                playClickSound();
                setIsDark(!isDark);
              }}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-glass)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-main)',
                transition: 'transform 0.3s ease'
              }}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            {/* Desktop CTA Button */}
            <button
              className="btn-primary desktop-only"
              data-cursor="START"
              onMouseEnter={playHoverSound}
              onClick={() => handleLinkClick('#contact')}
            >
              <span>START A PROJECT</span>
              <ArrowUpRight size={16} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="mobile-only"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-main)',
                padding: '8px'
              }}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'var(--bg-primary)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px',
            gap: '32px'
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              className="font-machina"
              onClick={() => handleLinkClick(link.href)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-main)',
                fontSize: '2rem',
                fontWeight: 700
              }}
            >
              {link.label}
            </button>
          ))}
          <button
            className="btn-primary"
            onClick={() => handleLinkClick('#contact')}
            style={{ marginTop: '24px' }}
          >
            START A PROJECT
          </button>
        </div>
      )}

      {/* Responsive Inline CSS rules for navbar */}
      <style>{`
        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 1025px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </>
  );
};
