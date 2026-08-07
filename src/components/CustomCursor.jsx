import React, { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [follower, setFollower] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Hide cursor on mobile touch devices
    if (window.innerWidth <= 1024) return;

    let animId;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check cursor data attributes on target
      const target = e.target.closest('[data-cursor]');
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Smooth spring interpolation for outer follower ring
    const updateFollower = () => {
      setFollower((prev) => {
        const dx = pos.x - prev.x;
        const dy = pos.y - prev.y;
        return {
          x: prev.x + dx * 0.18,
          y: prev.y + dy * 0.18
        };
      });
      animId = requestAnimationFrame(updateFollower);
    };

    animId = requestAnimationFrame(updateFollower);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animId);
    };
  }, [pos.x, pos.y]);

  // Don't render on mobile screens
  if (typeof window !== 'undefined' && window.innerWidth <= 1024) return null;

  return (
    <>
      {/* Inner Dot */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: 'var(--text-main)',
          borderRadius: '50%',
          transform: `translate3d(${pos.x - 4}px, ${pos.y - 4}px, 0) scale(${isClicking ? 0.6 : 1})`,
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'transform 0.08s ease-out, background-color 0.3s ease'
        }}
      />

      {/* Outer Magnetic Follower Ring */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovered ? (cursorText ? '80px' : '48px') : '36px',
          height: isHovered ? (cursorText ? '80px' : '48px') : '36px',
          border: '1px solid var(--text-main)',
          backgroundColor: isHovered && cursorText ? 'var(--text-main)' : 'rgba(24, 21, 32, 0.05)',
          borderRadius: '50%',
          transform: `translate3d(${follower.x - (isHovered ? (cursorText ? 40 : 24) : 18)}px, ${
            follower.y - (isHovered ? (cursorText ? 40 : 24) : 18)
          }px, 0) scale(${isClicking ? 0.9 : 1})`,
          pointerEvents: 'none',
          zIndex: 99998,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border-color 0.3s ease',
          backdropFilter: 'blur(2px)'
        }}
      >
        {cursorText && (
          <span
            style={{
              color: 'var(--bg-primary)',
              fontFamily: 'var(--font-display)',
              fontSize: '10px',
              fontWeight: 800,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textAlign: 'center',
              lineHeight: 1
            }}
          >
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
};
