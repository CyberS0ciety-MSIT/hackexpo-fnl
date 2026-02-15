
import React, { useRef, useEffect } from 'react';
import { Carousel3D } from './Carousel3D';
import { MEMORIES } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { HackerText } from './HackerText';
import { PopOutCard } from './PopOutCard';
import { Play, Film } from 'lucide-react';

const MemoryCard: React.FC<{ item: typeof MEMORIES[0]; isActive: boolean }> = ({ item, isActive }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (item.type === 'video' && videoRef.current) {
      if (isActive) {
        videoRef.current.currentTime = 0;
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        videoRef.current.pause();
      }
    }
  }, [isActive, item.type]);

  return (
    <PopOutCard className="h-full" depth={40}>
      <div className={`
        w-full h-full relative group border bg-nothing-dark overflow-hidden transition-all duration-700 ease-fluid rounded-lg
        ${isActive ? 'border-retro-cyan shadow-[0_0_40px_-10px_rgba(165,243,252,0.4)]' : 'border-nothing-border grayscale hover:grayscale-0'}
      `}>
        
        {/* Media Content */}
        <div className={`w-full h-full transition-all duration-700 ease-fluid ${isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
          {item.type === 'video' ? (
            <div className="relative w-full h-full">
                <video
                ref={videoRef}
                src={item.src}
                className="w-full h-full object-cover"
                muted
                playsInline
                loop={false}
                />
                {!isActive && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                        <Play className="w-8 h-8 text-white/80" />
                    </div>
                )}
            </div>
          ) : (
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-full object-cover"
            />
          )}
        </div>

        {/* Scanline & Grain Overlay (Always visible for aesthetic) */}
        <div className="absolute inset-0 bg-scanlines bg-[length:100%_4px] opacity-30 pointer-events-none mix-blend-overlay"></div>
        
        {/* Active Scanning Bar */}
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-retro-cyan/20 to-transparent translate-y-[-100%] animate-scan-fast pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

        {/* Retro UI Overlay - Info Panel */}
        <div className={`
           absolute bottom-0 left-0 right-0 p-5 bg-nothing-black/95 border-t border-retro-cyan/30 backdrop-blur-md transition-all duration-500 ease-fluid
           ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100'}
        `}>
          <div className="flex items-center justify-between mb-2">
             <div className="flex items-center gap-2">
                 <span className={`p-1 rounded bg-retro-cyan/10 border border-retro-cyan/20`}>
                    <Film className="w-3 h-3 text-retro-cyan" />
                 </span>
                 <span className="text-[10px] font-mono uppercase text-retro-cyan tracking-wider">
                   {item.type === 'image' ? 'IMG_DATA' : 'VID_STREAM'}
                 </span>
             </div>
             <span className="text-[10px] font-mono text-white/40">#{item.id.toString().padStart(3, '0')}</span>
          </div>
          <h3 className="text-base font-bold text-white font-mono truncate">{item.title}</h3>
          <p className="text-[10px] text-retro-text/60 font-mono mt-1">{item.desc}</p>
        </div>
      </div>
    </PopOutCard>
  );
};

const Memories: React.FC = () => {
  const renderMemory = (item: typeof MEMORIES[0], isActive: boolean) => {
    return <MemoryCard item={item} isActive={isActive} />;
  };

  return (
    <section id="memories" className="py-20 md:py-32 relative overflow-hidden bg-nothing-black border-b border-nothing-border group/section">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none animate-slow-pan"></div>
      
      {/* Aurora / Nebula Effect */}
      <div className="absolute -bottom-1/2 left-0 w-full h-full bg-gradient-to-t from-purple-900/20 via-retro-cyan/10 to-transparent blur-[80px] pointer-events-none mix-blend-screen opacity-60"></div>
      <div className="absolute -top-1/2 right-0 w-full h-full bg-gradient-to-b from-blue-900/20 via-transparent to-transparent blur-[80px] pointer-events-none mix-blend-screen opacity-40"></div>

      {/* Interactive Scan Line on Section Hover */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-retro-cyan/30 blur-[2px] opacity-0 group-hover/section:opacity-100 group-hover/section:animate-[scan_4s_linear_infinite] pointer-events-none shadow-[0_0_15px_rgba(165,243,252,0.5)]"></div>

      <ScrollReveal>
        <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 flex flex-col md:flex-row items-end justify-between gap-8 border-b border-nothing-border pb-8 relative z-10">
          <div>
             <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tighter">
                <HackerText text="ARCHIVES" />
             </h2>
             <p className="text-retro-text/60 font-mono text-sm max-w-md">
               // DECRYPTED FOOTAGE <br/>
               ACCESSING LEGACY DATABASE...
             </p>
          </div>
          <div className="font-mono text-xs text-right text-retro-cyan bg-retro-cyan/5 p-3 rounded border border-retro-cyan/20">
             STATUS: ONLINE <br/>
             NODES: {MEMORIES.length} ACTIVE
          </div>
        </div>

        <div className="flex justify-center py-6 md:py-12 relative perspective-[2000px] z-10">
          <Carousel3D 
            items={MEMORIES}
            renderItem={renderMemory}
            cellWidth={window.innerWidth < 768 ? 280 : 400}
            cellHeight={window.innerWidth < 768 ? 200 : 280}
            continuous={true}
            speed={0.45}
            gap={40}
            perspective={1500}
            axis="x"
            className="scale-90 md:scale-100"
          />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Memories;
