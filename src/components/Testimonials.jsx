import React, { useState } from 'react';
import { useAudio } from './AudioEngine';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const Testimonials = () => {
  const { playHoverSound, playClickSound } = useAudio();
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = [
    {
      quote: "Click Or Media delivered a 3D WebGL campaign that exceeded all our performance KPIs. Their blend of immersive design and conversion strategy gave us a 420% ROAS boost on our global product launch.",
      author: "Marcus Vance",
      role: "VP of Global Digital Marketing",
      company: "Intel Corporation",
      rating: 5
    },
    {
      quote: "Working with Click Or Media felt like stepping 5 years into the future. The spatial 3D experience they built for Dreamforce resulted in our highest enterprise lead conversion rate in history.",
      author: "Elena Rostova",
      role: "Chief Marketing Officer",
      company: "Salesforce Spatial",
      rating: 5
    },
    {
      quote: "They don't just build websites; they engineer viral phenomena. The extreme sports interactive activation was viewed by over 45 million fans in under two weeks.",
      author: "Devon Thorne",
      role: "Global Creative Director",
      company: "Red Bull Media House",
      rating: 5
    }
  ];

  const handleNext = () => {
    playClickSound();
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    playClickSound();
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[currentIdx];

  return (
    <section
      style={{
        padding: '120px 40px',
        maxWidth: '1440px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div
        className="glass-panel"
        style={{
          borderRadius: '32px',
          padding: '60px 40px',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div className="pill-badge">
            <Quote size={14} color="#3b82f6" />
            <span>CLIENT TESTIMONIALS</span>
          </div>

          {/* Slider Controls */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              data-cursor="PREV"
              onMouseEnter={playHoverSound}
              onClick={handlePrev}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'var(--bg-primary)',
                border: '1px solid var(--border-dark)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--text-main)'
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              data-cursor="NEXT"
              onMouseEnter={playHoverSound}
              onClick={handleNext}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: 'var(--text-main)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: 'var(--bg-primary)'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Quote Content */}
        <div style={{ maxWidth: '900px' }}>
          <div style={{ display: 'flex', gap: '4px', marginBottom: '24px' }}>
            {[...Array(active.rating)].map((_, i) => (
              <Star key={i} size={18} fill="#eab308" color="#eab308" />
            ))}
          </div>

          <p
            className="font-machina"
            style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)',
              lineHeight: 1.25,
              marginBottom: '32px',
              color: 'var(--text-main)'
            }}
          >
            "{active.quote}"
          </p>

          <div>
            <div className="font-machina" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
              {active.author}
            </div>
            <div className="font-roman" style={{ fontSize: '0.95rem', opacity: 0.75 }}>
              {active.role} — <span style={{ color: '#3b82f6', fontWeight: 600 }}>{active.company}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
