
import React, { useRef, useState, useEffect, useMemo, useCallback } from 'react';
import { User, Cpu, Linkedin } from 'lucide-react';
import { SPEAKERS } from '../constants';
import { PopOutCard } from './PopOutCard';
import { ArrowUpRight } from 'lucide-react';

const CARD_WIDTH = 300;
const CARD_GAP = 32;
const TOTAL_CARD_WIDTH = CARD_WIDTH + CARD_GAP;

const Speakers: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Animation state
  const scrollPosRef = useRef(0);
  const requestRef = useRef<number>(undefined);
  const lastTimeRef = useRef<number>(undefined);
  const [isInteracting, setIsInteracting] = useState(false);
  const interactionTimerRef = useRef<NodeJS.Timeout>(undefined);

  const totalSpeakers = SPEAKERS.length;
  const oneSetWidth = TOTAL_CARD_WIDTH * totalSpeakers;

  // 3x duplication for TRUE infinite scroll
  const infiniteSpeakers = useMemo(() => {
    return [...SPEAKERS, ...SPEAKERS, ...SPEAKERS];
  }, []);

  const animate = useCallback((time: number) => {
    if (lastTimeRef.current !== undefined) {
      const deltaTime = time - lastTimeRef.current;

      if (!isPaused && !isInteracting) {
        // Normal auto-scroll speed: ~1px per 16ms (60px/sec)
        const speed = 0.04;
        scrollPosRef.current += speed * deltaTime;

        // Seamless loop reset
        if (scrollPosRef.current >= oneSetWidth) {
          scrollPosRef.current -= oneSetWidth;
        }
      }

      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.transform = `translateX(-${scrollPosRef.current}px)`;
      }
    }
    lastTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [isPaused, isInteracting, oneSetWidth]);

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  const handleInteraction = () => {
    setIsInteracting(true);
    if (interactionTimerRef.current) clearTimeout(interactionTimerRef.current);

    interactionTimerRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 3000); // Resume auto-scroll after 3s of inactivity
  };

  const handleNext = () => {
    handleInteraction();
    // Go to next multiple of TOTAL_CARD_WIDTH
    const nextTarget = (Math.floor(scrollPosRef.current / TOTAL_CARD_WIDTH) + 1) * TOTAL_CARD_WIDTH;
    scrollPosRef.current = nextTarget;

    // Safety wrap: if we exceed 2 full sets, jump back to 1 full set
    if (scrollPosRef.current >= oneSetWidth * 2) {
      scrollPosRef.current -= oneSetWidth;
    }
  };

  const handlePrev = () => {
    handleInteraction();
    // Go to previous multiple of TOTAL_CARD_WIDTH
    const prevTarget = (Math.ceil(scrollPosRef.current / TOTAL_CARD_WIDTH) - 1) * TOTAL_CARD_WIDTH;
    scrollPosRef.current = prevTarget;

    // Safety wrap: if we go below 0, jump forward
    if (scrollPosRef.current < 0) {
      scrollPosRef.current += oneSetWidth;
    }
  };

  const renderSpeakerCard = (speaker: typeof SPEAKERS[0], isActive: boolean) => {
    const roleParts = speaker.role.split('|');
    const mainRole = roleParts[0].trim();
    const certifications = roleParts.slice(1).map(r => r.trim());

    const CardContent = (
      <div className={`
        w-full h-full relative bg-nothing-card border transition-all duration-700 ease-fluid flex flex-col overflow-hidden group/card
        ${isActive ? 'border-retro-cyan shadow-[0_0_30px_rgba(165,243,252,0.15)]' : 'border-nothing-border'}
      `}>
        <div className="h-[65%] relative overflow-hidden bg-nothing-dark border-b border-nothing-border">
          {speaker.linkedin && (
            <div className={`absolute top-3 right-3 z-30 transition-all duration-500 opacity-0 group-hover/card:opacity-100`}>
              <div className="bg-[#0077b5] p-1.5 rounded-sm shadow-[0_0_15px_rgba(0,119,181,0.6)] flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin className="w-4 h-4 text-white fill-white" />
              </div>
            </div>
          )}

          {speaker.image ? (
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={speaker.image}
                alt={speaker.name}
                className="w-full h-full object-cover grayscale opacity-70 transition-all duration-700 group-hover/card:grayscale-0 group-hover/card:opacity-100 group-hover/card:scale-105"
              />
              <div className="absolute inset-0 bg-scanlines bg-[length:100%_4px] opacity-10 pointer-events-none"></div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-nothing-border relative">
              <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
              <div className="relative z-10 w-20 h-20 rounded-full border border-nothing-border bg-nothing-black/50 flex items-center justify-center">
                <User className="w-8 h-8 text-white/20" />
              </div>
            </div>
          )}
        </div>

        <div className="h-[35%] p-5 flex flex-col relative bg-nothing-card">
          <div className="relative z-10 flex-1 flex flex-col justify-start">
            <h3 className="text-xl font-bold leading-tight font-mono mb-2 text-retro-text/60 group-hover/card:text-white transition-colors">
              {speaker.name}
            </h3>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Cpu className="w-3 h-3 text-retro-cyan shrink-0 mt-1" />
                <p className="text-retro-cyan text-xs font-mono uppercase tracking-wide leading-relaxed">
                  {mainRole}
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10 pt-3 mt-2 border-t border-nothing-border/50 flex items-center justify-between">
            <span className="text-[10px] font-mono text-retro-text/40">{speaker.company}</span>
            <ArrowUpRight className="w-4 h-4 text-nothing-border group-hover/card:text-retro-cyan transition-colors" />
          </div>
        </div>
      </div>
    );

    const Card = (
      <PopOutCard className="h-full" depth={40}>
        <div className="block h-full w-full pointer-events-auto">
          {CardContent}
        </div>
      </PopOutCard>
    );

    return speaker.linkedin ? (
      <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
        {Card}
      </a>
    ) : (
      <div className="h-full w-full">{Card}</div>
    );
  };

  return (
    <section id="speakers" ref={containerRef} className="py-20 md:py-32 bg-nothing-black relative border-b border-nothing-border overflow-hidden">
      <div className="button-bar h-[60px] w-full bg-gradient-to-r from-purple-900/40 to-red-900/40 backdrop-blur-md flex items-center justify-between px-6 mb-4 z-20 border-y border-white/10">
        <button
          className="nav-prev text-3xl neon-glow cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300"
          onClick={handlePrev}
        >◀</button>
        <span className="font-mono text-lg tracking-wider text-white flex items-center gap-4">
          <Cpu className="w-5 h-5 text-retro-cyan animate-pulse" />
          SPEAKERS
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-retro-cyan/50 to-transparent"></div>
        </span>
        <button
          className="nav-next text-3xl neon-glow cursor-pointer hover:scale-110 active:scale-95 transition-all duration-300"
          onClick={handleNext}
        >▶</button>
      </div>

      <div className="max-w-7xl mx-auto px-6 overflow-visible">
        <div
          ref={scrollContainerRef}
          className="flex will-change-transform py-10"
          style={{
            transition: isInteracting ? 'transform 0.7s cubic-bezier(0.2, 0, 0.2, 1)' : 'none'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {infiniteSpeakers.map((speaker, index) => (
            <div key={`${speaker.id}-${index}`} className="w-[300px] flex-shrink-0 mx-4">
              {renderSpeakerCard(speaker, false)}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .neon-glow {
          text-shadow: 0 0 8px #f0f, 0 0 16px #f0f;
          color: white;
        }
        .bg-nothing-card {
          background: rgba(10, 10, 10, 0.8);
        }
        .ease-fluid {
          transition-timing-function: cubic-bezier(0.3, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default Speakers;
