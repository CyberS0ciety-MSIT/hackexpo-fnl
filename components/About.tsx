
import React from 'react';
import { HackerText } from './HackerText';
import { ScrollReveal } from './ScrollReveal';
import { Shield, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about-us" className="py-20 md:py-32 bg-nothing-black relative overflow-hidden border-b border-nothing-border">

      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none animate-slow-pan"></div>
      <div className="absolute -left-40 top-20 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none animate-breathe"></div>
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-retro-cyan/10 rounded-full blur-[120px] pointer-events-none animate-breathe delay-1000"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ScrollReveal>

          {/* Header with Gradient Line */}
          <div className="mb-16 md:mb-20 relative">
            <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-retro-cyan via-purple-500 to-transparent hidden md:block"></div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter drop-shadow-lg">
              <HackerText text="ABOUT US" />
            </h2>
            <div className="flex items-center gap-4 text-retro-text/60 font-mono text-xs md:text-sm">
              <span className="text-retro-cyan">// MISSION_STATEMENT</span>
              <span className="w-16 h-px bg-gradient-to-r from-retro-cyan to-purple-500"></span>
              <span className="text-purple-400">EST. 2026</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Main Text - Holographic Style */}
            <div className="lg:col-span-7 space-y-8 text-retro-text/90 font-mono text-sm md:text-base leading-relaxed relative">

              <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-white/0 blur-xl opacity-20 pointer-events-none"></div>

              <p>
                East India’s premier cybersecurity conference — brought to you by <span className="text-retro-cyan font-bold bg-retro-cyan/10 px-1 rounded">Cyber Society</span> and <span className="text-yellow-400 font-bold bg-yellow-500/10 px-1 rounded">MSIT</span> — stands at the forefront of digital defense and innovation. Our mission is to unite learners, researchers, and professionals in a shared vision: to inspire, educate, and empower the next generation of cybersecurity experts.
              </p>

              <p>
                In collaboration with <span className="text-purple-400 font-bold bg-purple-500/10 px-1 rounded">CRAC Learning</span>, a non-profit initiative dedicated to spreading cybersecurity awareness, we strive to make advanced security knowledge accessible to all. Together, we aim to spark curiosity, strengthen digital resilience, and build pathways for aspiring individuals to launch impactful careers.
              </p>

              <div className="p-6 border-l-2 border-retro-cyan bg-gradient-to-r from-retro-cyan/5 to-transparent backdrop-blur-sm relative group">
                <div className="absolute top-0 right-0 p-3 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <p className="italic text-white/80">
                  "From insightful keynotes and technical workshops to hands-on challenges and networking opportunities, this platform celebrates the spirit of collaboration."
                </p>
              </div>
            </div>

            {/* Side Graphics / Stats */}
            <div className="lg:col-span-5 space-y-6">

              {/* Stat Card 1 - Cyan/Blue */}
              <div className="p-6 border border-white/10 bg-nothing-card/50 flex flex-col items-center justify-center text-center group hover:border-retro-cyan/50 hover:shadow-[0_0_30px_-5px_rgba(165,243,252,0.15)] transition-all duration-300 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-retro-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Shield className="w-10 h-10 text-retro-cyan mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="font-mono text-xs uppercase tracking-widest text-retro-text/60 relative z-10">Defense Level</span>
                <span className="font-bold text-2xl text-white mt-1 relative z-10">MAXIMUM</span>
              </div>

              {/* Stat Card 2 - Purple/Pink */}
              <div className="p-6 border border-white/10 bg-nothing-card/50 flex flex-col items-center justify-center text-center group hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)] transition-all duration-300 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Target className="w-10 h-10 text-purple-400 mb-3 group-hover:scale-110 transition-transform duration-300 relative z-10" />
                <span className="font-mono text-xs uppercase tracking-widest text-retro-text/60 relative z-10">Objective</span>
                <span className="font-bold text-2xl text-white mt-1 relative z-10">EDUCATION</span>
              </div>

              {/* Binary Rain Visual */}
              <div className="h-40 border border-white/5 bg-black/60 overflow-hidden relative rounded-xl shadow-inner">
                <div className="absolute inset-0 bg-[linear-gradient(transparent_2px,black_2px)] bg-[size:100%_4px] pointer-events-none z-10 opacity-50"></div>
                <div className="absolute inset-0 font-mono text-[10px] text-green-500/40 break-all p-4 leading-none select-none animate-pulse">
                  01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00001010 01010011 01100101 01100011 01110101 01110010 01101001 01110100 01111001 00100000 01000011 01101000 01100101 01100011 01101011 00101110 00101110 00101110
                  10101010 01010101 11001100 00110011 11110000 00001111 10101010 01010101 11001100 00110011 11110000 00001111
                  01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00001010 01010011 01100101 01100011 01110101 01110010 01101001 01110100 01111001 00100000 01000011 01101000 01100101 01100011 01101011 00101110 00101110 00101110
                </div>
                <div className="absolute bottom-2 right-4 text-[10px] font-mono text-green-400 bg-green-900/20 px-2 py-1 rounded border border-green-500/30 animate-pulse">
                  SYSTEM_SECURE
                </div>
              </div>

            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
