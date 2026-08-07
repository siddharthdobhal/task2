import React from 'react';
import { useAudio } from './AudioEngine';
import { X, ExternalLink, TrendingUp, Award, Zap, CheckCircle2 } from 'lucide-react';

export const CaseStudyModal = ({ project, onClose }) => {
  const { playClickSound, playHoverSound } = useAudio();

  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(15, 18, 29, 0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        overflowY: 'auto'
      }}
      onClick={() => {
        playClickSound();
        onClose();
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          backgroundColor: 'var(--bg-primary)',
          border: '1px solid var(--border-glass)',
          borderRadius: '24px',
          padding: '40px',
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.3)',
          maxHeight: '90vh',
          overflowY: 'auto',
          color: 'var(--text-main)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          data-cursor="CLOSE"
          onMouseEnter={playHoverSound}
          onClick={() => {
            playClickSound();
            onClose();
          }}
          style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid var(--border-glass)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-main)',
            cursor: 'pointer'
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Top Metadata */}
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <span className="pill-badge">{project.category}</span>
          <span className="pill-badge" style={{ backgroundColor: '#3b82f6', color: '#fff', border: 'none' }}>
            {project.year}
          </span>
        </div>

        {/* Project Title */}
        <h2
          className="font-machina"
          style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            marginBottom: '12px',
            lineHeight: 1
          }}
        >
          {project.title}
        </h2>
        <p className="font-roman" style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--accent-purple)', marginBottom: '32px' }}>
          {project.tagline}
        </p>

        {/* Hero Visual Card Container */}
        <div
          style={{
            width: '100%',
            height: '320px',
            borderRadius: '16px',
            background: project.gradient,
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px'
          }}
        >
          <div style={{ textAlign: 'center', color: '#ffffff', padding: '20px' }}>
            <div className="font-machina" style={{ fontSize: '3rem', opacity: 0.25, fontWeight: 900 }}>
              {project.client}
            </div>
            <p style={{ marginTop: '10px', fontSize: '1rem', fontWeight: 500, color: 'rgba(255, 255, 255, 0.9)' }}>
              Interactive Digital Campaign & WebGL Showcase
            </p>
          </div>
        </div>

        {/* Campaign Metrics & Results Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '32px'
          }}
        >
          {project.stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '20px',
                borderRadius: '16px',
                textAlign: 'center'
              }}
            >
              <div className="font-machina" style={{ fontSize: '2rem', color: '#3b82f6', marginBottom: '4px' }}>
                {stat.value}
              </div>
              <div className="font-roman" style={{ fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', opacity: 0.7 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Campaign Strategy & Deliverables */}
        <div style={{ marginBottom: '32px' }}>
          <h3 className="font-machina" style={{ fontSize: '1.25rem', marginBottom: '12px' }}>
            CAMPAIGN STRATEGY & EXECUTION
          </h3>
          <p className="font-roman" style={{ fontSize: '1rem', lineHeight: 1.6, opacity: 0.85, marginBottom: '20px' }}>
            {project.description}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {project.deliverables.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle2 size={16} color="#3b82f6" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used Pills */}
        <div style={{ marginBottom: '32px' }}>
          <h4 className="font-roman" style={{ fontSize: '0.875rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.6, marginBottom: '12px' }}>
            TECHNOLOGIES & CHANNELS
          </h4>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                style={{
                  padding: '6px 14px',
                  borderRadius: '100px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-dark)',
                  fontSize: '0.825rem',
                  fontWeight: 600
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            className="btn-primary"
            onMouseEnter={playHoverSound}
            onClick={() => {
              playClickSound();
              window.open('https://noomoagency.com', '_blank');
            }}
          >
            <span>VIEW LIVE EXPERIENCE</span>
            <ExternalLink size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
