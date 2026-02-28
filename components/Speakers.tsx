
import React, { useRef, useState, useEffect } from 'react';
import { User, ArrowUpRight, Cpu, Linkedin } from 'lucide-react';
import { SPEAKERS } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { Carousel3D } from './Carousel3D';
import { HackerText } from './HackerText';
import { PopOutCard } from './PopOutCard';

const Speakers: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePos({ x, y });
    };

    const el = containerRef.current;
    if (el) {
      el.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (el) el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const renderSpeakerCard = (speaker: typeof SPEAKERS[0], isActive: boolean) => {
    // Split roles by pipe for better formatting
    const roleParts = speaker.role.split('|');
    const mainRole = roleParts[0].trim();
    const certifications = roleParts.slice(1).map(r => r.trim());

    const CardContent = (
      <div className={`
        w-full h-full relative bg-nothing-card border transition-all duration-700 ease-fluid flex flex-col overflow-hidden group/card
        ${isActive ? 'border-retro-cyan shadow-[0_0_30px_rgba(165,243,252,0.15)]' : 'border-nothing-border'}
      `}>

        {/* Top: Image Section with Extravagant Effects */}
        <div className="h-[65%] relative overflow-hidden bg-nothing-dark border-b border-nothing-border">
          {/* LinkedIn Logo Overlay - Visible if linked, regardless of image */}
          {speaker.linkedin && (
            <div className={`absolute top-3 right-3 z-30 transition-all duration-500 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 group-hover/card:opacity-100 group-hover/card:translate-y-0'}`}>
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
                className={`
                  w-full h-full object-cover transition-all duration-700 ease-fluid
                  ${isActive ? 'grayscale-0 scale-105' : 'grayscale opacity-70 scale-100 group-hover/card:grayscale-0 group-hover/card:scale-105'}
                `}
              />

              {/* Holographic Scanline Overlay */}
              <div className={`absolute inset-0 bg-scanlines bg-[length:100%_4px] opacity-20 pointer-events-none mix-blend-overlay`}></div>

              {/* Active Glitch/Scanning Highlight */}
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-retro-cyan/10 to-transparent translate-y-[-100%] animate-scan-fast ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

              {/* Corner Tech Accents */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-retro-cyan/50 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-retro-cyan/50 opacity-0 group-hover/card:opacity-100 transition-opacity"></div>
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-nothing-border relative">
              <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
              <div className={`relative z-10 w-20 h-20 rounded-full border flex items-center justify-center backdrop-blur-sm transition-colors duration-300 ${isActive ? 'border-retro-cyan bg-retro-cyan/10' : 'border-nothing-border bg-nothing-black/50'}`}>
                <User className={`w-8 h-8 transition-colors duration-300 ${isActive ? 'text-retro-cyan' : 'text-white/20'}`} />
              </div>
              {/* Active Highlight for placeholder */}
              <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-retro-cyan/5 to-transparent translate-y-[-100%] animate-scan-fast ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>
          )}
        </div>

        {/* Bottom: Info Section */}
        <div className="h-[35%] p-5 flex flex-col relative bg-nothing-card">
          {/* Tech Decoration */}
          <div className="absolute top-0 right-4 w-px h-8 bg-gradient-to-b from-retro-cyan to-transparent opacity-50"></div>
          <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none"></div>

          <div className="relative z-10 flex-1 flex flex-col justify-start overflow-y-auto custom-scrollbar">
            <h3 className={`text-xl font-bold leading-tight font-mono mb-2 transition-colors duration-300 ${isActive ? 'text-white' : 'text-retro-text/60 group-hover/card:text-white'}`}>
              {speaker.name}
            </h3>

            {speaker.role && (
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <Cpu className="w-3 h-3 text-retro-cyan shrink-0 mt-1" />
                  <p className="text-retro-cyan text-xs font-mono uppercase tracking-wide leading-relaxed">
                    {mainRole}
                  </p>
                </div>

                {certifications.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pl-5">
                    {certifications.map((cert, i) => (
                      <span key={i} className="px-1.5 py-0.5 rounded-sm border border-retro-text/20 bg-white/5 text-[9px] font-mono text-retro-text/70 whitespace-nowrap">
                        {cert}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="relative z-10 pt-3 mt-2 border-t border-nothing-border/50 flex items-center justify-between shrink-0">
            <span className="text-[10px] font-mono text-retro-text/40">{speaker.company}</span>
            {(speaker.company || speaker.linkedin) && (
              <ArrowUpRight className={`w-4 h-4 transition-colors duration-300 ${isActive || speaker.linkedin ? 'text-retro-cyan' : 'text-nothing-border group-hover/card:text-retro-cyan'}`} />
            )}
          </div>
        </div>
      </div>
    );

    return (
      <PopOutCard className="h-full" depth={60}>
        {speaker.linkedin ? (
          <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer" className="block h-full w-full cursor-pointer pointer-events-auto">
            {CardContent}
          </a>
        ) : (
          <div className="block h-full w-full cursor-default pointer-events-auto">
            {CardContent}
          </div>
        )}
      </PopOutCard>
    );
  };

  return (
    <section
      id="speakers"
      ref={containerRef}
      className="py-20 md:py-32 bg-nothing-black relative border-b border-nothing-border overflow-hidden"
    >
      {/* Interactive Mouse Spotlight Background */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(165, 243, 252, 0.08), transparent 40%)`
        }}
      />

      <div className="absolute inset-0 bg-dot-pattern opacity-5 pointer-events-none animate-slow-pan"></div>

      {/* Multi-colored Floating Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none animate-[float_10s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-retro-cyan/10 blur-[100px] rounded-full pointer-events-none animate-[float_12s_ease-in-out_infinite_reverse]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 blur-[80px] rounded-full pointer-events-none animate-pulse"></div>

      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row items-end justify-between gap-8 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-retro-cyan font-mono text-xs">(03)</span>
              <span className="h-px w-12 bg-retro-cyan"></span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter">
              <HackerText text="SPEAKERS" />
            </h2>
          </div>

          <div className="hidden md:block">
            <div className="px-4 py-2 border border-nothing-border bg-black/20 backdrop-blur-sm rounded-full text-xs font-mono text-retro-text/60 flex items-center gap-2 hover:border-retro-cyan/50 transition-colors">
              <div className="w-2 h-2 bg-retro-cyan rounded-full animate-pulse"></div>
              ACTIVE
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 relative perspective-[2000px] z-10">
          <Carousel3D
            items={SPEAKERS}
            renderItem={renderSpeakerCard}
            cellWidth={window.innerWidth < 768 ? 280 : 320}
            cellHeight={window.innerWidth < 768 ? 400 : 460}
            continuous={true}
            speed={0.35}
            gap={40}
            perspective={1500}
          />
        </div>
      </ScrollReveal>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, -20px); }
        }
      `}</style>
    </section>
  );
};

export default Speakers;
