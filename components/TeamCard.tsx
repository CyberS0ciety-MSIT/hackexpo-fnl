
import React from 'react';
import { Linkedin, Github, Twitter, User } from 'lucide-react';

interface TeamCardProps {
    member: {
        id: number;
        name: string;
        role: string;
        image: string | null;
        linkedin?: string;
        github?: string;
        twitter?: string;
    };
    delay?: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ member, delay = 0 }) => {
    return (
        <div
            className="group relative h-[450px] w-full"
            style={{
                animation: `fadeInUp 0.8s ease-out forwards`,
                animationDelay: `${delay}s`,
                opacity: 0,
                transform: 'translateY(20px)'
            }}
        >
            {/* Animated Border Component */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#8B00FF] via-[#800000] to-[#8B00FF] p-[1.5px] opacity-20 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
                <div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,#8B00FF,#800000,#8B00FF)] animate-[spin_4s_linear_infinite] group-hover:animate-[spin_2s_linear_infinite]"></div>
            </div>

            {/* Card Content */}
            <div className="absolute inset-[1.5px] rounded-xl bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden flex flex-col">

                {/* Portrait Section */}
                <div className="h-[60%] relative bg-black/40 border-b border-white/5 overflow-hidden">
                    {/* Binary Rain Background (Visible on Hover) */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
                        <div className="animate-matrix-rain h-[200%] w-full bg-repeat text-[#8B00FF] font-mono text-[10px] leading-none whitespace-pre select-none">
                            {"01011001\n11001010\n01101101\n10101011\n".repeat(20)}
                        </div>
                    </div>

                    <div className="w-full h-full flex items-center justify-center relative z-10">
                        {member.image ? (
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-110"
                            />
                        ) : (
                            <User className="w-20 h-20 text-[#8B00FF]/20 group-hover:text-[#8B00FF]/40 transition-colors duration-500" />
                        )}

                        {/* Cyber Mask Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                        <div className="absolute inset-0 border-[1px] border-[#8B00FF]/10 pointer-events-none"></div>
                    </div>
                </div>

                {/* Info Section */}
                <div className="flex-1 p-6 flex flex-col justify-center relative">
                    {/* Glitch Title */}
                    <div className="relative">
                        <h3 className="text-xl font-bold font-mono text-white tracking-widest uppercase group-hover:animate-glitch-text" data-text={member.name}>
                            {member.name}
                        </h3>
                        <p className="text-[#8B00FF] font-mono text-xs mt-2 font-bold tracking-[0.3em]">
                            {member.role || "OPERATIVE"}
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="mt-6 flex items-center gap-4">
                        {member.linkedin !== undefined && (
                            <a href={member.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-white/40 hover:text-[#8B00FF] hover:bg-[#8B00FF]/10 transition-all duration-300 group/social">
                                <Linkedin className="w-4 h-4 group-hover/social:animate-pulse" />
                            </a>
                        )}
                        {member.github !== undefined && (
                            <a href={member.github || "#"} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-white/40 hover:text-[#8B00FF] hover:bg-[#8B00FF]/10 transition-all duration-300 group/social">
                                <Github className="w-4 h-4 group-hover/social:animate-pulse" />
                            </a>
                        )}
                        {member.twitter !== undefined && (
                            <a href={member.twitter || "#"} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-white/40 hover:text-[#8B00FF] hover:bg-[#8B00FF]/10 transition-all duration-300 group/social">
                                <Twitter className="w-4 h-4 group-hover/social:animate-pulse" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Bottom Bar Decor */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#8B00FF]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 rounded-xl bg-[#8B00FF]/0 group-hover:bg-[#8B00FF]/10 blur-2xl transition-all duration-500"></div>
        </div>
    );
};

export default TeamCard;
