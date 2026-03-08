
import React from 'react';
import { TEAM } from '../constants';
import TeamCard from './TeamCard';
import { ScrollReveal } from './ScrollReveal';

const TeamSection: React.FC = () => {
    return (
        <section id="team" className="team-section relative py-32 bg-[#050505] overflow-hidden border-b border-[#8B00FF]/10">

            {/* 1. FLOATING PARTICLE BG */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="particles-bg opacity-20"></div>
            </div>

            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B00FF]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#800000]/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <style>{`
        .particles-bg {
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle, #8B00FF 1px, transparent 1px);
          background-size: 40px 40px;
          animation: particleFloat 20s linear infinite;
        }

        @keyframes particleFloat {
          0% { background-position: 0 0; }
          100% { background-position: 40px 80px; }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes matrix-rain {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(0); }
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }

        .animate-glitch-text::before,
        .animate-glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: #0a0a0a;
        }

        .animate-glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #8B00FF;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch 1s linear infinite alternate-reverse;
        }

        .animate-glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #800000;
          clip: rect(24px, 450px, 90px, 0);
          animation: glitch 1.5s linear infinite alternate-reverse;
        }

        .animate-matrix-rain {
          animation: matrix-rain 10s linear infinite;
        }

        .shadow-neon-purple {
          text-shadow: 0 0 10px rgba(139, 0, 255, 0.5), 0 0 20px rgba(139, 0, 255, 0.3);
        }
      `}</style>

            <div className="container mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-24">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#8B00FF]"></span>
                            <span className="text-[#8B00FF] font-mono text-xs tracking-[0.5em] uppercase font-bold">Operation: Team</span>
                            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#8B00FF]"></span>
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white text-center font-sans tracking-tight relative mb-8">
                            <span className="relative z-10 glitch-text shadow-neon-purple" data-text="MEET OUR TEAM">
                                MEET OUR <span className="text-[#8B00FF]">TEAM</span>
                            </span>
                        </h2>

                        <div className="font-mono text-[10px] text-white/30 tracking-[0.2em] animate-pulse">
                            [ STATUS: ENUMERATING_MEMBERS ]
                        </div>
                    </div>
                </ScrollReveal>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 max-w-7xl mx-auto">
                    {TEAM.map((member, index) => (
                        <TeamCard
                            key={member.id}
                            member={member}
                            delay={0.2 + index * 0.1}
                        />
                    ))}
                </div>

                {/* Network Connections Decor */}
                <div className="mt-24 pt-10 border-t border-white/5 flex justify-center">
                    <div className="flex gap-4 items-center opacity-20">
                        <div className="w-2 h-2 rounded-full bg-[#8B00FF] animate-ping"></div>
                        <div className="h-[1px] w-32 bg-gradient-to-r from-[#8B00FF] to-transparent"></div>
                        <span className="text-[10px] font-mono text-white/40 tracking-[0.3em]">SECURE_CONNECTION_ESTABLISHED</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
