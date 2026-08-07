import React, { useState } from 'react';
import { useAudio } from './AudioEngine';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, Sparkles, Filter } from 'lucide-react';

export const caseStudies = [
  {
    id: 'intel-ai',
    client: 'INTEL',
    title: 'AI CORE 3D CAMPAIGN',
    tagline: 'Next-Gen AI Performance Marketing & WebGL Launch',
    category: 'DIGITAL MARKETING',
    year: '2025',
    gradient: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 50%, #6366f1 100%)',
    description: 'We architected a real-time WebGL 3D storytelling portal coupled with hyper-targeted AI performance marketing channels for Intel’s next-gen processor lineup. The campaign generated massive global engagement and viral media coverage.',
    stats: [
      { label: 'ROAS Acceleration', value: '+420%' },
      { label: 'Global Engagements', value: '18.4M' },
      { label: 'Conversion Lift', value: '3.8x' }
    ],
    deliverables: ['3D WebGL Storytelling Portal', 'Multi-Channel AI Ads', 'Motion CGI Trailers', 'Real-Time ROI Analytics'],
    tech: ['Three.js', 'WebGL', 'GSAP', 'Google Ads API', 'Meta Performance Engine']
  },
  {
    id: 'salesforce-spatial',
    client: 'SALESFORCE',
    title: 'SPATIAL BRAND ACTIVATION',
    tagline: 'Immersive 3D Spatial Product Launch & Growth Funnel',
    category: 'BRAND ACTIVATIONS',
    year: '2025',
    gradient: 'linear-gradient(135deg, #4c1d95 0%, #8b5cf6 50%, #d946ef 100%)',
    description: 'An interactive virtual 3D showroom created for Salesforce’s enterprise product keynote. Blending WebGPU real-time rendering with automated marketing workflows, leading to record-breaking enterprise signup rates.',
    stats: [
      { label: 'Enterprise Leads', value: '14,200+' },
      { label: 'Avg Session Time', value: '6m 42s' },
      { label: 'Pipeline Value', value: '$85M+' }
    ],
    deliverables: ['Spatial 3D Showroom', 'Enterprise Lead Funnel', 'Dynamic Video Engine', 'Keynote Visuals'],
    tech: ['WebGPU', 'React Three Fiber', 'Pinia', 'Nuxt.js', 'HubSpot Integration']
  },
  {
    id: 'redbull-viral',
    client: 'RED BULL',
    title: 'HIGH-OCTANE CAMPAIGN',
    tagline: 'Viral Motion & Interactive Extreme Sports Activation',
    category: 'DIGITAL MARKETING',
    year: '2024',
    gradient: 'linear-gradient(135deg, #991b1b 0%, #ef4444 50%, #f97316 100%)',
    description: 'To launch Red Bull’s global sports tournament, Click Or Media designed an interactive WebGL gamified experience paired with TikTok & Instagram viral challenge ads that captured Gen-Z audience attention worldwide.',
    stats: [
      { label: 'Social Impressions', value: '45.2M' },
      { label: 'User Generated Vids', value: '120K+' },
      { label: 'CTR Growth', value: '+310%' }
    ],
    deliverables: ['3D Web Game', 'Viral TikTok Strategy', 'Influencer Funnel', 'Live Leaderboard'],
    tech: ['Three.js', 'Canvas API', 'TikTok Pixel', 'GSAP ScrollTrigger']
  },
  {
    id: 'vogue-luxury',
    client: 'VOGUE BUSINESS',
    title: 'SPATIAL LUXURY FASHION',
    tagline: 'Digital Fashion Spatial E-Commerce & Growth Strategy',
    category: '3D WEBSITES',
    year: '2024',
    gradient: 'linear-gradient(135deg, #065f46 0%, #10b981 50%, #14b8a6 100%)',
    description: 'A luxurious interactive 3D digital runway and editorial e-commerce platform that revolutionized fashion journalism and brand sponsor monetization.',
    stats: [
      { label: 'Editorial Views', value: '8.9M' },
      { label: 'Sponsor Engagement', value: '+280%' },
      { label: 'Awwwards Trophy', value: 'Site of the Year' }
    ],
    deliverables: ['Spatial E-Commerce', '3D Apparel Viewer', 'Editorial Design System', 'Global PR Push'],
    tech: ['WebGL', 'GLTF 3D Shaders', 'Next.js', 'Stripe Commerce']
  },
  {
    id: 'amd-ryzen',
    client: 'AMD RYZEN',
    title: 'HARDWARE ENGINE 3D',
    tagline: 'Interactive Hardware Showcase & Global Ads Funnel',
    category: 'PERFORMANCE GROWTH',
    year: '2024',
    gradient: 'linear-gradient(135deg, #854d0e 0%, #eab308 50%, #f59e0b 100%)',
    description: 'Exploded 3D view interactive product explorer for AMD Ryzen processors. Users can examine micro-chip architecture in 3D while high-conversion ad funnels driven by retargeting algorithms maximize e-commerce checkout.',
    stats: [
      { label: 'Direct E-Com Sales', value: '$24.5M' },
      { label: 'Conversion Rate', value: '4.8%' },
      { label: 'Ad ROI Ratio', value: '6.2x' }
    ],
    deliverables: ['Interactive 3D Micro-Exploration', 'Retargeting Ad Campaign', 'Custom Shader Engine'],
    tech: ['Three.js', 'WebGL Shaders', 'Google Performance Max', 'Meta Ads']
  },
  {
    id: 'cybertronic-web3',
    client: 'CYBERTRONIC',
    title: 'CYBER BRAND IDENTITY',
    tagline: 'Futuristic Brand Positioning & Global Growth Strategy',
    category: '3D WEBSITES',
    year: '2025',
    gradient: 'linear-gradient(135deg, #111827 0%, #374151 50%, #6b7280 100%)',
    description: 'Full end-to-end rebranding and digital campaign creation for Cybertronic. Combining dark brutalist typography, WebGL neon shaders, and performance growth funnels.',
    stats: [
      { label: 'Brand Value Surge', value: '+350%' },
      { label: 'Community Growth', value: '250K+' },
      { label: 'Awwwards SOTD', value: 'Winner' }
    ],
    deliverables: ['Brutalist WebGL Portal', 'Global Rebrand Package', 'Social Growth Engine'],
    tech: ['React Three Fiber', 'GSAP', 'Lenis', 'Tailwind', 'Discord Engine']
  }
];

export const Portfolio = () => {
  const { playHoverSound, playClickSound } = useAudio();
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['ALL', 'DIGITAL MARKETING', '3D WEBSITES', 'BRAND ACTIVATIONS', 'PERFORMANCE GROWTH'];

  const filteredProjects = activeCategory === 'ALL'
    ? caseStudies
    : caseStudies.filter((p) => p.category === activeCategory);

  return (
    <section
      id="work"
      style={{
        padding: '120px 40px',
        maxWidth: '1440px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}
    >
      {/* Section Header */}
      <div style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
        <div>
          <div className="pill-badge" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} color="#3b82f6" />
            <span>FEATURED CASE STUDIES</span>
          </div>
          <h2 className="font-machina" style={{ fontSize: 'clamp(2.2rem, 5vw, 4.5rem)', lineHeight: 1 }}>
            WORK THAT DOMINATES.
          </h2>
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              data-cursor="FILTER"
              onMouseEnter={playHoverSound}
              onClick={() => {
                playClickSound();
                setActiveCategory(cat);
              }}
              style={{
                padding: '10px 18px',
                borderRadius: '100px',
                border: activeCategory === cat ? '1px solid var(--text-main)' : '1px solid var(--border-glass)',
                backgroundColor: activeCategory === cat ? 'var(--text-main)' : 'var(--bg-card)',
                color: activeCategory === cat ? 'var(--bg-primary)' : 'var(--text-main)',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '32px'
        }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel glass-panel-hover"
            data-cursor="EXPLORE"
            onMouseEnter={playHoverSound}
            onClick={() => {
              playClickSound();
              setSelectedProject(project);
            }}
            style={{
              borderRadius: '24px',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between',
              minHeight: '440px',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Visual Header Banner */}
            <div
              style={{
                width: '100%',
                height: '200px',
                borderRadius: '16px',
                background: project.gradient,
                marginBottom: '24px',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}
            >
              <span className="font-machina" style={{ fontSize: '2.5rem', color: '#ffffff', opacity: 0.35, fontWeight: 900 }}>
                {project.client}
              </span>
              <div
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(8px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                <ArrowUpRight size={18} />
              </div>
            </div>

            {/* Case Info */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="font-roman" style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#3b82f6' }}>
                  {project.category}
                </span>
                <span className="font-roman" style={{ fontSize: '0.8rem', fontWeight: 600, opacity: 0.6 }}>
                  {project.year}
                </span>
              </div>

              <h3 className="font-machina" style={{ fontSize: '1.75rem', marginBottom: '8px' }}>
                {project.title}
              </h3>
              <p className="font-roman" style={{ fontSize: '0.95rem', color: 'var(--text-sub)', opacity: 0.85, lineHeight: 1.4 }}>
                {project.tagline}
              </p>
            </div>

            {/* Bottom Key Metric */}
            <div
              style={{
                marginTop: '20px',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-dark)',
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <span className="font-roman" style={{ fontSize: '0.75rem', textTransform: 'uppercase', opacity: 0.6 }}>
                  KEY IMPACT
                </span>
                <div className="font-machina" style={{ fontSize: '1.25rem', color: 'var(--text-main)' }}>
                  {project.stats[0].value} {project.stats[0].label}
                </div>
              </div>

              <span className="font-roman" style={{ fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', textDecoration: 'underline' }}>
                CASE STUDY
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Case Detail Modal */}
      {selectedProject && (
        <CaseStudyModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
};
