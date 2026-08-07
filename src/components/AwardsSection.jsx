import React, { useState } from 'react';
import { useAudio } from './AudioEngine';
import { Trophy, ExternalLink } from 'lucide-react';

export const AwardsSection = () => {
  const { playHoverSound, playClickSound } = useAudio();
  const [hoveredAward, setHoveredAward] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const awardsList = [
    {
      name: 'AWWWARDS WEBSITE OF THE YEAR',
      category: 'WebGL & Interactive Storytelling',
      project: 'Intel AI Core 3D',
      year: '2025'
    },
    {
      name: 'FWA SITE OF THE DAY (MULTIPLE)',
      category: 'Spatial Design & Web Performance',
      project: 'Salesforce Launch',
      year: '2025'
    },
    {
      name: 'WEBBY AWARDS WINNER - BEST USE OF AI',
      category: 'AI Performance Campaign',
      project: 'AMD Ryzen Showcase',
      year: '2025'
    },
    {
      name: 'CSS DESIGN AWARDS - BEST UI / UX / INNOVATION',
      category: 'Digital Fashion Spatial E-Com',
      project: 'Vogue Business',
      year: '2024'
    },
    {
      name: 'GLOBAL DIGITAL MARKETING EXCELLENCE',
      category: 'Viral Social Ad Campaign',
      project: 'Red Bull Extreme',
      year: '2024'
    },
    {
      name: 'WEBBY AWARDS WINNER - TECHNICAL ACHIEVEMENT',
      category: 'Real-Time 3D Shader Rendering',
      project: 'Cybertronic Web3',
      year: '2024'
    }
  ];

  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="awards"
      onMouseMove={handleMouseMove}
      style={{
        padding: '120px 40px',
        maxWidth: '1440px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <div className="pill-badge" style={{ marginBottom: '16px' }}>
            <Trophy size={14} color="#eab308" />
            <span>GLOBAL RECOGNITION</span>
          </div>
          <h2 className="font-machina" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1 }}>
            HONORS & RECOGNITION.
          </h2>
        </div>
        <p className="font-roman" style={{ maxWidth: '380px', fontSize: '1rem', opacity: 0.75 }}>
          Our commitment to innovation has earned us top design and marketing accolades globally.
        </p>
      </div>

      {/* Awards List Table */}
      <div style={{ borderTop: '1px solid var(--text-main)' }}>
        {awardsList.map((award, idx) => (
          <div
            key={idx}
            data-cursor="AWARD"
            onMouseEnter={() => {
              playHoverSound();
              setHoveredAward(award);
            }}
            onMouseLeave={() => setHoveredAward(null)}
            onClick={() => playClickSound()}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              alignItems: 'center',
              padding: '24px 12px',
              borderBottom: '1px solid var(--border-dark)',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease, padding 0.3s ease'
            }}
            className="award-row-hover"
          >
            {/* Award Name */}
            <div className="font-machina" style={{ fontSize: '1.25rem', fontWeight: 700 }}>
              {award.name}
            </div>

            {/* Category */}
            <div className="font-roman" style={{ fontSize: '0.9rem', opacity: 0.75 }}>
              {award.category}
            </div>

            {/* Project */}
            <div className="font-roman" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--accent-purple)' }}>
              {award.project}
            </div>

            {/* Year */}
            <div style={{ textAlign: 'right' }}>
              <span
                style={{
                  padding: '4px 12px',
                  borderRadius: '100px',
                  border: '1px solid var(--text-main)',
                  fontSize: '0.8rem',
                  fontWeight: 700
                }}
              >
                {award.year}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Hover Floating Card Tooltip */}
      {hoveredAward && (
        <div
          style={{
            position: 'fixed',
            top: cursorPos.y + 20,
            left: cursorPos.x + 20,
            pointerEvents: 'none',
            zIndex: 9999,
            backgroundColor: 'var(--text-main)',
            color: 'var(--bg-primary)',
            padding: '16px 20px',
            borderRadius: '16px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
            maxWidth: '280px',
            animation: 'fadeIn 0.2s ease'
          }}
        >
          <div className="font-machina" style={{ fontSize: '0.9rem', marginBottom: '4px' }}>
            {hoveredAward.name}
          </div>
          <div className="font-roman" style={{ fontSize: '0.8rem', opacity: 0.8 }}>
            Project: {hoveredAward.project} ({hoveredAward.year})
          </div>
        </div>
      )}
    </section>
  );
};
