import React, { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContextState = createContext({
  isMuted: true,
  toggleSound: () => {},
  playHoverSound: () => {},
  playClickSound: () => {},
  playSuccessSound: () => {}
});

export const AudioProvider = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false); // Default sound enabled for high UX
  const audioCtxRef = useRef(null);

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        audioCtxRef.current = new AudioCtx();
      }
    }
    if (audioCtxRef.current && audioCtxRef.current.state === 'suspended') {
      audioCtxRef.current.resume();
    }
  };

  const toggleSound = () => {
    initAudio();
    setIsMuted((prev) => {
      const next = !prev;
      if (!next && audioCtxRef.current) {
        playTone(520, 0.08, 'sine');
      }
      return next;
    });
  };

  const playTone = (freq, duration, type = 'sine', gainVal = 0.05) => {
    if (isMuted) return;
    try {
      initAudio();
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // Audio fallback
    }
  };

  const playHoverSound = () => {
    playTone(440, 0.04, 'sine', 0.02);
  };

  const playClickSound = () => {
    playTone(680, 0.06, 'triangle', 0.04);
  };

  const playSuccessSound = () => {
    if (isMuted) return;
    try {
      initAudio();
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      [440, 554.37, 659.25, 880].forEach((freq, idx) => {
        setTimeout(() => {
          playTone(freq, 0.15, 'sine', 0.05);
        }, idx * 80);
      });
    } catch (e) {}
  };

  useEffect(() => {
    const handleFirstInteraction = () => {
      initAudio();
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);
    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  return (
    <AudioContextState.Provider
      value={{ isMuted, toggleSound, playHoverSound, playClickSound, playSuccessSound }}
    >
      {children}
    </AudioContextState.Provider>
  );
};

export const useAudio = () => useContext(AudioContextState);
