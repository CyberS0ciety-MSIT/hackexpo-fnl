
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
              <span className="text-purple-400">EST. 2024</span>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Main Text - Holographic Style */}
            <div className="lg:col-span-7 space-y-8 text-retro-text/90 font-mono text-sm md:text-base leading-relaxed relative">

              <div className="absolute -inset-4 bg-gradient-to-r from-white/5 to-white/0 blur-xl opacity-20 pointer-events-none"></div>

              <p>
                East India’s premier cybersecurity conference brings together learners, researchers, and professionals to learn, connect, and grow. Organized by <span className="text-retro-cyan font-bold bg-retro-cyan/10 px-1 rounded">MSIT KOLKATA</span> and <span className="text-purple-400 font-bold bg-purple-500/10 px-1 rounded">CYBER SOCIETY</span>, in collaboration with <span className="text-yellow-400 font-bold bg-yellow-500/10 px-1 rounded">CRAC Learning</span>, our goal is to make cybersecurity knowledge accessible to everyone.
              </p>

              <p>
                Join us at Science City to explore security, innovation, workshops, and networking.
              </p>

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




            </div>

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default About;
