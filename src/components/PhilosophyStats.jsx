import React from 'react';
import { useAudio } from './AudioEngine';
import { Award, TrendingUp, Users, ShieldCheck } from 'lucide-react';

export const PhilosophyStats = () => {
  const { playHoverSound } = useAudio();

  const stats = [
    { icon: <TrendingUp size={24} color="#3b82f6" />, number: '$500M+', label: 'CLIENT REVENUE GENERATED' },
    { icon: <Award size={24} color="#8b5cf6" />, number: '48+', label: 'GLOBAL AWARDS & SOTD WINNERS' },
    { icon: <ShieldCheck size={24} color="#10b981" />, number: '99.4%', label: 'CLIENT RETENTION RATE' },
    { icon: <Users size={24} color="#f97316" />, number: '15M+', label: 'MONTHLY UNIQUE ENGAGEMENTS' }
  ];

  return (
    <section
      id="agency"
      style={{
        padding: '120px 40px',
        maxWidth: '1440px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}
    >
      {/* Statement Card */}
      <div
        className="glass-panel"
        style={{
          borderRadius: '32px',
          padding: '60px 40px',
          marginBottom: '60px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="pill-badge" style={{ marginBottom: '24px' }}>
          <span>THE CLICK OR MEDIA PHILOSOPHY</span>
        </div>

        <h2
          className="font-machina"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 4.2rem)',
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            marginBottom: '32px',
            color: 'var(--text-main)'
          }}
        >
          STORY DICTATES THE MEDIUM — WHETHER THAT’S WEBGEL, CINEMATIC VIDEO, OR HYPER-TARGETED ADVERTISING.
        </h2>

        <p className="font-roman" style={{ fontSize: '1.2rem', maxWidth: '800px', lineHeight: 1.6, opacity: 0.85 }}>
          Traditional agencies build static websites and run dull ads. We build spatial experiences and digital marketing engines that captivate audiences, break through social noise, and generate undeniable bottom-line revenue.
        </p>
      </div>

      {/* Stats Counter Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="glass-panel glass-panel-hover"
            onMouseEnter={playHoverSound}
            style={{
              padding: '32px 24px',
              borderRadius: '24px',
              textAlign: 'center'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {stat.icon}
              </div>
            </div>

            <div
              className="font-machina"
              style={{
                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                lineHeight: 1,
                marginBottom: '8px',
                color: 'var(--text-main)'
              }}
            >
              {stat.number}
            </div>

            <div
              className="font-roman"
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                opacity: 0.7
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
