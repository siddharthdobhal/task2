import React, { useState } from 'react';
import { useAudio } from './AudioEngine';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, Sparkles, Mail, Phone, MapPin } from 'lucide-react';

export const ContactSection = () => {
  const { playHoverSound, playClickSound, playSuccessSound } = useAudio();
  const [selectedServices, setSelectedServices] = useState(['Performance Marketing']);
  const [selectedBudget, setSelectedBudget] = useState('$50k - $100k');
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const servicesOptions = [
    'Performance Marketing',
    '3D WebGL Web Design',
    'Brand Activation',
    'CGI Motion & Video',
    'SEO & Viral Growth',
    'Spatial E-Commerce'
  ];

  const budgetOptions = ['$25k - $50k', '$50k - $100k', '$100k+'];

  const toggleService = (srv) => {
    playClickSound();
    setSelectedServices((prev) =>
      prev.includes(srv) ? prev.filter((s) => s !== srv) : [...prev, srv]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSuccessSound();

    // Trigger celebratory confetti burst
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {}

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '60px' }}>
          
          {/* Left Agency Info */}
          <div>
            <div className="pill-badge" style={{ marginBottom: '16px' }}>
              <Sparkles size={14} color="#3b82f6" />
              <span>LET'S BUILD SOMETHING EPIC</span>
            </div>

            <h2
              className="font-machina"
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 1,
                marginBottom: '24px'
              }}
            >
              START A PROJECT.
            </h2>

            <p className="font-roman" style={{ fontSize: '1.15rem', opacity: 0.85, lineHeight: 1.6, marginBottom: '40px' }}>
              Have an ambitious brand, upcoming product launch, or high-growth campaign? Fill out the brief or email us directly at <strong style={{ color: 'var(--text-main)' }}>hello@clickormedia.com</strong>.
            </p>

            {/* Direct Contact Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mail size={18} color="#3b82f6" />
                </div>
                <div>
                  <div className="font-roman" style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6 }}>NEW BUSINESS INQUIRIES</div>
                  <div className="font-machina" style={{ fontSize: '1.05rem' }}>hello@clickormedia.com</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--bg-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MapPin size={18} color="#8b5cf6" />
                </div>
                <div>
                  <div className="font-roman" style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6 }}>GLOBAL HEADQUARTERS</div>
                  <div className="font-machina" style={{ fontSize: '1.05rem' }}>Los Angeles • London • Tokyo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Interactive Form */}
          <div>
            {submitted ? (
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  padding: '40px'
                }}
              >
                <CheckCircle2 size={64} color="#10b981" style={{ marginBottom: '20px' }} />
                <h3 className="font-machina" style={{ fontSize: '2rem', marginBottom: '12px' }}>
                  MESSAGE RECEIVED!
                </h3>
                <p className="font-roman" style={{ fontSize: '1.05rem', opacity: 0.85, maxWidth: '400px', marginBottom: '24px' }}>
                  Thank you! Our creative directors will review your brief and get back to you within 24 hours.
                </p>
                <button
                  className="btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  SEND ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                
                {/* Services Selection */}
                <div>
                  <label className="font-roman" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.7, display: 'block', marginBottom: '12px' }}>
                    I'M INTERESTED IN:
                  </label>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {servicesOptions.map((srv) => {
                      const isSelected = selectedServices.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          data-cursor="TOGGLE"
                          onMouseEnter={playHoverSound}
                          onClick={() => toggleService(srv)}
                          style={{
                            padding: '8px 16px',
                            borderRadius: '100px',
                            border: isSelected ? '1px solid var(--text-main)' : '1px solid var(--border-dark)',
                            backgroundColor: isSelected ? 'var(--text-main)' : 'transparent',
                            color: isSelected ? 'var(--bg-primary)' : 'var(--text-main)',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                          }}
                        >
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <label className="font-roman" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', opacity: 0.7, display: 'block', marginBottom: '12px' }}>
                    PROJECT BUDGET (USD):
                  </label>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {budgetOptions.map((bgt) => {
                      const isSelected = selectedBudget === bgt;
                      return (
                        <button
                          type="button"
                          key={bgt}
                          data-cursor="BUDGET"
                          onMouseEnter={playHoverSound}
                          onClick={() => {
                            playClickSound();
                            setSelectedBudget(bgt);
                          }}
                          style={{
                            padding: '8px 16px',
                            borderRadius: '100px',
                            border: isSelected ? '1px solid var(--text-main)' : '1px solid var(--border-dark)',
                            backgroundColor: isSelected ? 'var(--text-main)' : 'transparent',
                            color: isSelected ? 'var(--bg-primary)' : 'var(--text-main)',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            transition: 'all 0.2s ease',
                            cursor: 'pointer'
                          }}
                        >
                          {bgt}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Text Inputs */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '1px solid var(--border-dark)',
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '12px',
                        border: '1px solid var(--border-dark)',
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your brand goals, project scope, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      borderRadius: '12px',
                      border: '1px solid var(--border-dark)',
                      backgroundColor: 'var(--bg-primary)',
                      color: 'var(--text-main)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'none'
                    }}
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="btn-primary"
                  data-cursor="SEND"
                  onMouseEnter={playHoverSound}
                  style={{ width: '100%', padding: '16px' }}
                >
                  <span>SEND INQUIRY</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
