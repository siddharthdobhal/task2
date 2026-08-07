import React, { useState } from 'react';
import { useAudio } from './AudioEngine';
import { Target, Box, Flame, Clapperboard, Search, ShoppingBag, Plus, Minus, ArrowRight } from 'lucide-react';

export const Services = () => {
  const { playHoverSound, playClickSound } = useAudio();
  const [expandedIdx, setExpandedIdx] = useState(0);

  const servicesList = [
    {
      icon: <Target size={28} color="#3b82f6" />,
      title: 'DIGITAL & PERFORMANCE MARKETING',
      subtitle: 'Hyper-Targeted Ads, AI Ad Funnels & Conversion Rate Optimization',
      description: 'We deploy data-backed multi-channel advertising across Google, Meta, TikTok, and Programmatic networks. Our AI optimization algorithms maximize ROAS while cutting acquisition costs.',
      bullets: ['High-ROAS Paid Search & Social', 'AI-Powered Funnel Retargeting', 'Real-Time ROI Analytics Dashboard', 'Conversion Rate Optimization (CRO)']
    },
    {
      icon: <Box size={28} color="#8b5cf6" />,
      title: '3D WEB DESIGN & WEBGEL EXPERIENCES',
      subtitle: 'Immersive Spatial Websites, Real-Time 3D & Interactive Storytelling',
      description: 'Transform passive visitors into loyal customers. We construct award-winning WebGL websites with Three.js and custom shaders that make your brand stand out from every competitor.',
      bullets: ['Custom Three.js & WebGL Shaders', 'Interactive 3D Product Viewers', 'Scroll-Driven Storytelling Animations', 'Fast Mobile WebGL Performance']
    },
    {
      icon: <Flame size={28} color="#f97316" />,
      title: 'BRAND ACTIVATION & VIRAL CAMPAIGNS',
      subtitle: 'Digital Booths, Live Event Experiences & Viral Social Engine',
      description: 'Create unforgettable digital moments for product launches and trade shows. We design interactive brand activations that drive massive social sharing and viral media press.',
      bullets: ['Interactive Virtual Event Booths', 'Viral Social Challenge Engine', 'AR & Web-Based Spatial Filters', 'Live Experiential Dashboards']
    },
    {
      icon: <Clapperboard size={28} color="#10b981" />,
      title: '3D MOTION & CGI VIDEO PRODUCTION',
      subtitle: 'Cinematic Product Teasers, 3D Motion Graphics & Ad Visuals',
      description: 'From 3D product breakdowns to cinematic campaign trailers, our motion studio crafts high-end CGI content engineered to convert viewers across social and broadcast media.',
      bullets: ['3D Photorealistic Product CGI', 'Social First Motion Graphics', 'Cinematic Campaign Trailers', '3D Visual FX & Compositing']
    },
    {
      icon: <Search size={28} color="#06b6d4" />,
      title: 'SEO & SEARCH DOMINATION',
      subtitle: 'Organic Authority, Technical SEO & AI Search Engine Ranking',
      description: 'Capture high-intent search traffic with our technical SEO framework. We optimize website architecture, content clusters, and AI overview rankings to drive continuous qualified pipeline.',
      bullets: ['Technical Web Architecture Optimization', 'Generative Engine Optimization (GEO)', 'Authority Content Strategy', 'Local & Global Search Domination']
    },
    {
      icon: <ShoppingBag size={28} color="#ec4899" />,
      title: 'SPATIAL E-COMMERCE & WEBGPU',
      subtitle: 'High-Conversion 3D Shopping & Next-Gen Commerce Portals',
      description: 'Bring retail to life in the browser. We combine high-speed checkout infrastructure with interactive 3D spatial product showcases that boost cart values by up to 65%.',
      bullets: ['Interactive 3D Product Customizers', 'Headless E-Commerce Integration', 'High-Speed WebGPU Rendering', 'Seamless Mobile Checkout']
    }
  ];

  return (
    <section
      id="services"
      style={{
        padding: '120px 40px',
        maxWidth: '1440px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}
    >
      {/* Header */}
      <div style={{ marginBottom: '60px' }}>
        <div className="pill-badge" style={{ marginBottom: '16px' }}>
          <span>OUR CAPABILITIES</span>
        </div>
        <h2 className="font-machina" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1 }}>
          CAPABILITIES THAT FUEL GROWTH.
        </h2>
      </div>

      {/* Accordion / Cards List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {servicesList.map((service, idx) => {
          const isOpen = expandedIdx === idx;
          return (
            <div
              key={idx}
              className="glass-panel"
              data-cursor="SELECT"
              onMouseEnter={playHoverSound}
              onClick={() => {
                playClickSound();
                setExpandedIdx(isOpen ? -1 : idx);
              }}
              style={{
                borderRadius: '20px',
                padding: '32px',
                cursor: 'pointer',
                transition: 'all 0.35s ease',
                border: isOpen ? '1px solid var(--text-main)' : '1px solid var(--border-glass)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div
                    style={{
                      width: '54px',
                      height: '54px',
                      borderRadius: '16px',
                      backgroundColor: 'var(--bg-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="font-machina" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)', marginBottom: '4px' }}>
                      {service.title}
                    </h3>
                    <p className="font-roman" style={{ fontSize: '0.95rem', opacity: 0.7 }}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid var(--border-dark)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </div>

              {/* Expanded Details */}
              {isOpen && (
                <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid var(--border-dark)' }}>
                  <p className="font-roman" style={{ fontSize: '1.05rem', lineHeight: 1.6, opacity: 0.85, maxWidth: '800px', marginBottom: '20px' }}>
                    {service.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
                    {service.bullets.map((b, bIdx) => (
                      <div key={bIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', fontWeight: 600 }}>
                        <ArrowRight size={14} color="#3b82f6" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
