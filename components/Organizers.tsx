
import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { HackerText } from './HackerText';
import { ExternalLink } from 'lucide-react';

// --- CONFIGURATION ---
const CYBER_SOCIETY_LOGO = "https://cybersociety.growsoc.com/logo.png";
const CRAC_LEARNING_LOGO = "https://static.wixstatic.com/media/fff29d_44391ca38d8841e29e97e94ff5b130d5~mv2.png/v1/crop/x_0,y_10,w_828,h_234/fill/w_314,h_98,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/CRACCon_edited.png";

const Organizers: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-nothing-black relative border-b border-nothing-border overflow-hidden">
      {/* Background Elements - Multi-color mesh */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none animate-slow-pan"></div>
      
      {/* Gradient Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none animate-breathe"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none animate-breathe delay-700"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-xs md:text-base font-mono text-transparent bg-clip-text bg-gradient-to-r from-retro-cyan to-purple-400 tracking-[0.3em] uppercase mb-4 font-bold">
              <HackerText text="POWERED_BY_ALLIANCE" speed={50} />
            </h2>
            <div className="relative inline-block">
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">
                BROUGHT TO YOU BY
              </h3>
              <div className="absolute -bottom-4 left-0 w-full h-px bg-gradient-to-r from-transparent via-retro-cyan/50 to-transparent"></div>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 lg:gap-16 max-w-5xl mx-auto">
          
          {/* Organization 1: Cyber Society - Blue/Cyan Theme */}
          <ScrollReveal delay={200} className="flex-1">
             <a 
               href="https://cybersociety.growsoc.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group h-full relative bg-nothing-card/40 border border-nothing-border hover:border-retro-cyan/50 transition-all duration-500 p-8 md:p-10 flex flex-col items-center text-center overflow-hidden rounded-xl hover:shadow-[0_0_50px_-20px_rgba(165,243,252,0.15)] backdrop-blur-sm block cursor-pointer"
             >
                {/* Tech Deco Background */}
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(165,243,252,0.03)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <ExternalLink className="w-4 h-4 text-retro-cyan" />
                </div>

                <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 flex items-center justify-center p-6 bg-black/40 rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-500 group-hover:border-retro-cyan/30">
                   <div className="absolute inset-0 border border-dashed border-retro-cyan/20 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity"></div>
                   
                   <div className="relative z-10 w-full h-full p-2 flex items-center justify-center">
                      <img 
                        src={CYBER_SOCIETY_LOGO}
                        alt="Cyber Society Logo" 
                        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(165,243,252,0.5)] opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                   </div>
                </div>

                <div className="relative z-10">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-retro-cyan transition-colors tracking-tight font-sans">
                        CYBER<br/>SOCIETY
                    </h4>
                    <div className="w-12 h-1 bg-retro-cyan/30 mx-auto my-4 group-hover:w-24 transition-all duration-500 rounded-full"></div>
                </div>

                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-retro-cyan/30 group-hover:border-retro-cyan transition-colors rounded-tl-lg"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-retro-cyan/30 group-hover:border-retro-cyan transition-colors rounded-br-lg"></div>
             </a>
          </ScrollReveal>

          {/* Center Connector */}
          <ScrollReveal delay={300} className="self-center py-4 md:py-0">
            <div className="relative w-16 h-16 flex items-center justify-center group">
               <div className="absolute inset-0 bg-gradient-to-r from-retro-cyan to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
               <span className="font-mono text-2xl text-white/40 font-bold group-hover:text-white transition-colors">X</span>
               
               <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1px] h-32 md:w-32 md:h-[1px] bg-gradient-to-b md:bg-gradient-to-r from-transparent via-white/20 to-transparent -z-10"></div>
            </div>
          </ScrollReveal>

          {/* Organization 2: CRAC Learning - Purple/Gold Theme */}
          <ScrollReveal delay={400} className="flex-1">
             <a 
               href="https://www.crac-learning.com/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group h-full relative bg-nothing-card/40 border border-nothing-border hover:border-purple-500/50 transition-all duration-500 p-8 md:p-10 flex flex-col items-center text-center overflow-hidden rounded-xl hover:shadow-[0_0_50px_-20px_rgba(168,85,247,0.15)] backdrop-blur-sm block cursor-pointer"
             >
                <div className="absolute inset-0 bg-[linear-gradient(-45deg,transparent_25%,rgba(168,85,247,0.03)_50%,transparent_75%)] bg-[length:250%_250%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                   <ExternalLink className="w-4 h-4 text-purple-400" />
                </div>
                
                <div className="relative w-40 h-40 md:w-48 md:h-48 mb-8 flex items-center justify-center p-6 bg-black/40 rounded-full border border-white/10 group-hover:scale-105 transition-transform duration-500 group-hover:border-purple-500/30">
                   <div className="absolute inset-0 border border-dashed border-purple-500/20 rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity reverse-spin"></div>

                   <div className="relative z-10 w-full h-full p-2 flex items-center justify-center">
                      <img 
                        src={CRAC_LEARNING_LOGO}
                        alt="CRAC Learning Logo" 
                        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(168,85,247,0.5)] opacity-90 group-hover:opacity-100 transition-opacity"
                      />
                   </div>
                </div>

                <div className="relative z-10">
                    <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors tracking-tight font-sans">
                        CRAC<br/>LEARNING
                    </h4>
                    <div className="w-12 h-1 bg-purple-500/30 mx-auto my-4 group-hover:w-24 transition-all duration-500 rounded-full"></div>
                </div>

                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-purple-500/30 group-hover:border-purple-500 transition-colors rounded-tr-lg"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-purple-500/30 group-hover:border-purple-500 transition-colors rounded-bl-lg"></div>
             </a>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Organizers;
