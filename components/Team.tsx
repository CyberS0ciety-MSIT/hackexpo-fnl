
import React from 'react';
import { Linkedin, User, Users } from 'lucide-react';
import { TEAM } from '../constants';
import { PopOutCard } from './PopOutCard';
import { ScrollReveal } from './ScrollReveal';

const Team: React.FC = () => {
    const renderTeamCard = (member: typeof TEAM[0]) => {
        const CardContent = (
            <div className="w-full h-full relative bg-nothing-card/90 border border-nothing-border transition-all duration-500 flex flex-col overflow-hidden group">
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-dot-pattern opacity-10"></div>
                <div className="absolute top-0 left-0 w-24 h-24 bg-purple-500/5 blur-3xl rounded-full"></div>

                {/* Image Section */}
                <div className="h-[55%] relative overflow-hidden bg-nothing-dark/50 border-b border-nothing-border/50">
                    {member.image ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-purple-500/20">
                            <User className="w-16 h-16" />
                        </div>
                    )}

                    {/* Tech Underlays */}
                    <div className="absolute inset-0 bg-scanlines opacity-5 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
                </div>

                {/* Info Section */}
                <div className="flex-1 p-6 flex flex-col justify-center text-center relative z-10">
                    <h3 className="text-xl font-bold font-mono mb-2 text-white group-hover:text-purple-400 transition-colors">
                        {member.name}
                    </h3>
                    <div className="space-y-1">
                        <p className="text-purple-400 text-xs font-mono uppercase tracking-widest">{member.role}</p>
                    </div>

                    {/* Corner Tech Decor */}
                    <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-white/10 group-hover:border-purple-400/50 transition-colors"></div>
                    <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r border-white/10 group-hover:border-purple-400/50 transition-colors"></div>

                    {/* Visual LinkedIn Cue */}
                    {member.linkedin && (
                        <div className="absolute top-4 right-4 text-white/20 group-hover:text-purple-400 transition-colors">
                            <Linkedin className="w-4 h-4" />
                        </div>
                    )}
                </div>
            </div>
        );

        return (
            <PopOutCard depth={40} className="h-[400px]">
                {member.linkedin ? (
                    <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full h-full cursor-pointer"
                    >
                        {CardContent}
                    </a>
                ) : (
                    CardContent
                )}
            </PopOutCard>
        );
    };

    return (
        <section id="team" className="py-24 bg-nothing-black relative overflow-hidden border-b border-nothing-border/30">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-full h-full bg-grid-white/[0.01] -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <ScrollReveal>
                    <div className="flex flex-col items-center mb-16 text-center">
                        <div className="flex items-center gap-3 mb-4">
                            <Users className="w-5 h-5 text-purple-500" />
                            <span className="text-purple-500 font-mono text-sm tracking-[0.3em] uppercase">The Force Behind HackExpo</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white font-sans tracking-tight mb-4">
                            MEET OUR <span className="text-purple-500 shadow-purple-500/30">TEAM</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"></div>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto">
                    {TEAM.map((member, idx) => (
                        <ScrollReveal key={member.id} delay={idx * 100}>
                            {renderTeamCard(member)}
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;
