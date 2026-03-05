
import React, { useState, useEffect, useMemo } from 'react';
import { PARTNERS } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { HackerText } from './HackerText';
import { LogoSphere } from './LogoSphere';
import { Network, ShieldCheck, ExternalLink } from 'lucide-react';

const Partners: React.FC = () => {
  // Initialize based on window width to avoid flash, with fallback for safety
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Duplicate partners to fill the sphere if list is short, adjusting density for mobile
  const sphereItems = useMemo(() => {
    if (isMobile) {
      // Fewer items on mobile to prevent overcrowding (14 items)
      const items = [...PARTNERS, ...PARTNERS];
      return items.slice(0, 14);
    } else {
      // Full density for desktop (24 items)
      return [...PARTNERS, ...PARTNERS, ...PARTNERS].slice(0, 24);
    }
  }, [isMobile]);

  const renderPartnerNode = (partner: typeof PARTNERS[0], index: number, scale: number, opacity: number) => {
    // Determine active state roughly based on scale (closeness to camera)
    const isActive = scale > 1.1;

    // Responsive dimensions
    const size = isMobile ? '100px' : '160px';
    const logoSize = isMobile ? 'w-10 h-10' : 'w-16 h-16';
    const textSize = isMobile ? 'text-[10px]' : 'text-xs';

    return (
      <a
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          relative flex flex-col items-center justify-center p-3 md:p-4 text-center transition-all duration-300 rounded-xl group cursor-pointer
          ${isActive ? 'bg-nothing-card/90 border-retro-cyan shadow-[0_0_20px_rgba(165,243,252,0.3)] z-50' : 'bg-nothing-card/40 border-white/5 hover:bg-nothing-card/60 hover:border-retro-cyan/30'}
          border backdrop-blur-sm
        `}
        style={{
          width: size,
          height: size,
        }}
        onClick={(e) => e.stopPropagation()} // Prevent any parent drag events from cancelling click immediately if possible
      >
        {/* Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] pointer-events-none rounded-xl"></div>

        {/* Logo Container */}
        <div className={`${logoSize} mb-2 relative flex items-center justify-center`}>
          {isActive && (
            <div className="absolute inset-0 bg-retro-cyan/20 blur-xl rounded-full animate-pulse"></div>
          )}
          <img
            src={partner.logo}
            alt={partner.name}
            className={`w-full h-full object-contain relative z-10 transition-all duration-300 ${isActive ? 'opacity-100 grayscale-0' : 'opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0'}`}
          />
        </div>

        <h3 className={`${textSize} font-bold font-mono mb-1 truncate w-full ${isActive ? 'text-white' : 'text-retro-text/60 group-hover:text-retro-text'}`}>{partner.name}</h3>

        <div className={`flex items-center gap-1 ${isMobile ? 'text-[8px] px-1' : 'text-[8px] px-1.5'} font-mono uppercase tracking-wider py-0.5 rounded border transition-colors ${isActive ? 'bg-retro-cyan/10 border-retro-cyan/30 text-retro-cyan' : 'bg-transparent border-white/10 text-retro-text/40 group-hover:border-retro-cyan/20 group-hover:text-retro-cyan/80'}`}>
          <ShieldCheck className="w-2.5 h-2.5" />
          {partner.tier}
        </div>

        {/* Hover External Link Icon */}
        <div className={`absolute top-2 right-2 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          <ExternalLink className="w-3 h-3 text-retro-cyan" />
        </div>
      </a>
    );
  };

  return (
    <section className="py-20 md:py-32 bg-nothing-black relative border-b border-nothing-border overflow-hidden min-h-screen flex flex-col justify-center">

      {/* Interactive Background Layers */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none animate-slow-pan"></div>

      {/* Spinning Portal Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-20 pointer-events-none">
        <div className="w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent,rgba(165,243,252,0.3),rgba(168,85,247,0.3),transparent)] animate-[spin_10s_linear_infinite] blur-3xl"></div>
      </div>

      {/* Network Grid Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]"></div>

      <div className="w-full relative z-10 max-w-7xl mx-auto px-6">
        <ScrollReveal className="w-full">
          <div className="mb-8 md:mb-12 text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-retro-cyan/20 bg-retro-cyan/5 backdrop-blur-sm">
              <Network className="w-3 h-3 text-retro-cyan animate-pulse" />
              <span className="text-[10px] font-mono uppercase text-retro-cyan tracking-widest">Global Alliance</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
              <HackerText text="OUR PARTNERS" />
            </h2>
            <p className="text-retro-text/60 font-mono text-sm max-w-md mx-auto">
              Securing the future with the industry's most advanced infrastructure providers.
            </p>
          </div>

          <div className="flex justify-center items-center w-full relative">
            <LogoSphere
              items={sphereItems}
              renderItem={renderPartnerNode}
              radius={isMobile ? 110 : 320}
              speed={0.003}
            />

            {/* Center decorative element inside the sphere */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${isMobile ? 'w-24 h-24' : 'w-32 h-32'} rounded-full border border-retro-cyan/10 flex items-center justify-center pointer-events-none`}>
              <div className={`${isMobile ? 'w-16 h-16' : 'w-24 h-24'} rounded-full border border-retro-cyan/20 animate-spin-slow bg-retro-cyan/5`}></div>
              <div className="absolute w-2 h-2 bg-retro-cyan rounded-full animate-ping"></div>
              {/* Inner glow ring */}
              <div className="absolute inset-0 rounded-full shadow-[0_0_30px_rgba(165,243,252,0.15)] animate-pulse"></div>
            </div>
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

export default Partners;
