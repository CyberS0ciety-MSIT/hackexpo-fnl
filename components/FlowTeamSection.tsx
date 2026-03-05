
import React from 'react';
import { TEAM } from '../constants';
import OrbitingOrb from './OrbitingOrb';
import { ScrollReveal } from './ScrollReveal';

const teamOrbsData = TEAM.map((member, idx) => ({
    ...member,
    angle: (idx * 60), // Space evenly around 360deg
    radius: `${180 + Math.floor(idx / 2) * 60}px`, // Varied radii
    speed: `${15 + idx * 2}s` // Varied speeds
}));

const FlowTeamSection: React.FC = () => {
    return (
        <section id="team" className="flow-team h-[700px] md:h-screen relative overflow-visible bg-[#0F172A] border-y border-[#8B00FF]/10 z-20">

            {/* 2. FLOWING PARTICLE STREAMS (Contained) */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                    <div
                        key={i}
                        className="flow-stream absolute w-px h-[200%] bg-gradient-to-b from-transparent via-[#8B00FF]/40 to-transparent"
                        style={{
                            left: `${(i + 1) * 8}%`,
                            top: '-50%',
                            animation: `flowDown ${8 + i * 2}s linear infinite`,
                            animationDelay: `${i * 0.5}s`,
                            opacity: 0.15 + (i % 3) * 0.1
                        }}
                    ></div>
                ))}
            </div>

            {/* CENTRAL CYBER CORE */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="relative flex items-center justify-center">
                    {/* Hexagonal Core */}
                    <div className="w-32 h-32 md:w-48 md:h-48 bg-[#8B00FF]/5 border border-[#8B00FF]/20 rounded-full flex items-center justify-center animate-breathe drop-shadow-[0_0_30px_rgba(139,0,255,0.2)]">
                        <div className="text-center px-4">
                            <h2 className="text-xl md:text-3xl font-black text-white font-mono tracking-tighter leading-none mb-2 glitch-title" data-text="MEET OUR TEAM">
                                MEET OUR <br /> <span className="text-[#9400D3]">TEAM</span>
                            </h2>
                            <div className="w-8 h-[1px] bg-[#8B00FF] mx-auto opacity-50"></div>
                        </div>
                    </div>

                    {/* Orbit Paths (Decorative Circles) */}
                    {[180, 240, 300].map((r) => (
                        <div
                            key={r}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-white/5 rounded-full pointer-events-none"
                            style={{ width: r * 2, height: r * 2 }}
                        ></div>
                    ))}

                    {/* Binary Waterfall from Core */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#8B00FF]/40 to-transparent"></div>
                </div>
            </div>

            {/* ORBITING TEAM ORBS */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                <div className="relative w-full h-full pointer-events-none">
                    {teamOrbsData.map((orb) => (
                        <div key={orb.id} className="pointer-events-auto">
                            <OrbitingOrb {...orb} />
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .orbiting-orb-container {
          animation: orbit var(--orbit-speed) linear infinite;
        }

        @keyframes orbit {
          from { 
            transform: translate(-50%, -50%) rotate(var(--orbit-angle)) translateX(var(--orbit-radius)) rotate(calc(var(--orbit-angle) * -1)); 
          }
          to { 
            transform: translate(-50%, -50%) rotate(calc(var(--orbit-angle) + 360deg)) translateX(var(--orbit-radius)) rotate(calc((var(--orbit-angle) + 360deg) * -1)); 
          }
        }

        @keyframes flowDown {
          0% { transform: translateY(-50%); }
          100% { transform: translateY(50%); }
        }

        .glitch-title {
          position: relative;
        }
        
        .glitch-title::before, .glitch-title::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: transparent;
        }

        .glitch-title::before {
          left: 1px;
          text-shadow: -1px 0 #9400D3;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch 2s linear infinite alternate-reverse;
        }

        .glitch-title::after {
          left: -1px;
          text-shadow: -1px 0 #800000;
          clip: rect(24px, 450px, 90px, 0);
          animation: glitch 3s linear infinite alternate-reverse;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
          100% { transform: translate(0); }
        }

        @keyframes breathe {
            0%, 100% { transform: scale(1); opacity: 0.8; }
            50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>

            {/* Bottom Interface Label */}
            <div className="absolute bottom-10 left-10 md:left-20 font-mono text-[9px] text-[#8B00FF]/30 tracking-[0.4em] z-30 uppercase hidden md:block">
                [ SYS_ORBIT_PROTOCOL // ACTIVE ] <br />
                <span className="opacity-50">STREAMS_STABLE // CORES_SYNCED_V1.0</span>
            </div>
        </section>
    );
};

export default FlowTeamSection;
