
import React, { useState } from 'react';
import { HackerText } from './HackerText';
import { ScrollReveal } from './ScrollReveal';
import { TRUSTED_PARTNERS } from '../constants';

// Logo fetcher helper
const getLogoUrl = (domain: string) => `https://logo.clearbit.com/${domain}`;

interface Partner {
  name: string;
  domain?: string;
  fallbackIcon: React.ElementType;
  color?: string;
  logoOverride?: string;
}

const PartnerCard: React.FC<{ partner: any; size?: 'lg' | 'md' }> = ({ partner, size = 'md' }) => {
  const [imgError, setImgError] = useState(false);

  // Determine which image source to use: explicit override or Clearbit fallback
  const imageSource = partner.logoOverride || (partner.domain ? getLogoUrl(partner.domain) : null);

  return (
    <div className={`
      relative group flex flex-col items-center justify-center p-4 md:p-6 
      bg-nothing-card/30 border border-white/5 hover:border-green-500/30 hover:bg-green-900/10 
      transition-all duration-300 backdrop-blur-sm rounded-xl overflow-hidden
      ${size === 'lg' ? 'min-h-[140px]' : 'min-h-[100px]'}
    `}>
      {/* Corner Accents - Green for "Trusted" */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20 group-hover:border-green-500/50 transition-colors"></div>
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20 group-hover:border-green-500/50 transition-colors"></div>

      {imageSource && !imgError ? (
        <img 
          src={imageSource} 
          alt={partner.name}
          onError={() => setImgError(true)}
          className={`
            object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500
            ${size === 'lg' ? 'h-12 md:h-20 w-auto max-w-full' : 'h-8 md:h-10 w-auto max-w-[80%]'}
          `}
        />
      ) : (
        <div className="flex flex-col items-center gap-2">
          <partner.fallbackIcon className={`
            ${size === 'lg' ? 'w-10 h-10' : 'w-6 h-6'} 
            ${partner.color || 'text-retro-text/50'} group-hover:scale-110 transition-transform duration-300
          `} />
          <span className={`font-mono font-bold uppercase ${size === 'lg' ? 'text-lg' : 'text-xs'} text-retro-text/60 group-hover:text-white`}>
            {partner.name}
          </span>
        </div>
      )}
    </div>
  );
};

const TrustedBy: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-nothing-dark border-b border-nothing-border overflow-hidden relative z-20">
      
      {/* Radar Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-green-500/20 rounded-full"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-green-500/20 rounded-full"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-green-500/20 rounded-full"></div>
         {/* Sweep */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-transparent via-green-500/10 to-transparent rounded-full animate-radar origin-center"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 space-y-20">
        
        {/* Section 1: Special Partners (Top Tier) */}
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 mb-4 border border-green-500/30 bg-green-500/5 rounded text-[10px] font-mono uppercase tracking-widest text-green-400">
              Tier 01 // Clearance
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
              <HackerText text="SPECIAL PARTNERS" />
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {TRUSTED_PARTNERS.SPECIAL.map((p, i) => (
              <PartnerCard key={i} partner={p} size="lg" />
            ))}
          </div>
        </ScrollReveal>

        {/* Section 2: Platform & Security (Middle Tier) */}
        <ScrollReveal delay={200}>
           <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10"></div>
              <h3 className="text-sm font-mono text-retro-text/60 uppercase tracking-widest">Security & Platforms</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10"></div>
           </div>
           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {TRUSTED_PARTNERS.PLATFORM.map((p, i) => (
                 <PartnerCard key={i} partner={p} />
              ))}
           </div>
        </ScrollReveal>

        {/* Section 3: Media & Community (Lower Tier) */}
        <ScrollReveal delay={400}>
           <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              
              {/* Media Partner */}
              <div className="flex-1">
                 <h3 className="text-xs font-mono text-retro-cyan uppercase tracking-widest mb-6 border-l-2 border-retro-cyan pl-3">
                    Media Partner
                 </h3>
                 <div className="grid grid-cols-1 gap-4">
                    <PartnerCard partner={TRUSTED_PARTNERS.COMMUNITY[0]} size="lg" />
                 </div>
              </div>

              {/* Community Partners */}
              <div className="flex-[3]">
                 <h3 className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-6 border-l-2 border-purple-400 pl-3">
                    Community Partners
                 </h3>
                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {TRUSTED_PARTNERS.COMMUNITY.slice(1).map((p, i) => (
                       <PartnerCard key={i} partner={p} />
                    ))}
                 </div>
              </div>

           </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default TrustedBy;
