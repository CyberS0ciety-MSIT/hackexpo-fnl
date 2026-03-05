
import React from 'react';
import { MEMORIES } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { HackerText } from './HackerText';
import DualArchiveRows from './DualArchiveRows';

const Memories: React.FC = () => {
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
               // DECRYPTED FOOTAGE <br />
              ACCESSING LEGACY DATABASE...
            </p>
          </div>
          <div className="font-mono text-xs text-right text-retro-cyan bg-retro-cyan/5 p-3 rounded border border-retro-cyan/20">
            STATUS: ONLINE <br />
            NODES: {MEMORIES.length} ACTIVE
          </div>
        </div>

        <div className="relative z-10">
          <DualArchiveRows />
        </div>
      </ScrollReveal>
    </section>
  );
};

export default Memories;
