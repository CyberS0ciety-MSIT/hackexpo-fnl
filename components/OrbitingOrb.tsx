
import React, { useState } from 'react';
import { User, Linkedin, Twitter, Github } from 'lucide-react';

interface OrbitingOrbProps {
    id: number;
    name: string;
    role: string;
    image: string | null;
    linkedin?: string;
    github?: string;
    twitter?: string;
    angle: number;
    radius: string;
    speed: string;
}

const OrbitingOrb: React.FC<OrbitingOrbProps> = ({
    name,
    role,
    image,
    linkedin,
    github,
    twitter,
    angle,
    radius,
    speed
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`orbiting-orb-container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-all duration-700 ${isHovered ? 'z-50' : 'z-20'}`}
            style={{
                '--orbit-angle': `${angle}deg`,
                '--orbit-radius': radius,
                '--orbit-speed': speed,
                animationPlayState: isHovered ? 'paused' : 'running'
            } as React.CSSProperties}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`
          orb-glow relative rounded-full border transition-all duration-700 ease-fluid overflow-hidden cursor-pointer
          ${isHovered
                        ? 'w-48 h-48 border-[#ACFFFC] shadow-[0_0_50px_rgba(172,255,252,0.4)] scale-110'
                        : 'w-24 h-24 border-[#ACFFFC]/20 shadow-[0_0_20px_rgba(172,255,252,0.1)] scale-100'}
        `}
            >
                {/* Orb Internal - Portrait */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-md">
                    {image ? (
                        <img
                            src={image}
                            alt={name}
                            className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'grayscale-0 opacity-100' : 'grayscale opacity-70'}`}
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#ACFFFC]/20">
                            <User className={isHovered ? 'w-16 h-16' : 'w-8 h-8'} />
                        </div>
                    )}
                </div>

                {/* Orb Overlay Decor */}
                <div className={`absolute inset-0 border-2 border-[#ACFFFC]/10 rounded-full transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute inset-0 bg-gradient-to-t from-[#ACFFFC]/30 to-transparent transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* Details - Sliding In */}
                <div className={`
          absolute inset-0 flex flex-col items-center justify-center text-center p-4 transition-all duration-700
          ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        `}>
                    <h4 className="text-white font-mono font-bold text-sm tracking-tight mb-1">{name}</h4>
                    <p className="text-[#ACFFFC] font-mono text-[9px] uppercase tracking-widest mb-3">{role || 'ORB_AGENT'}</p>

                    <div className="flex gap-2">
                        {linkedin && (
                            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-full text-white/40 hover:text-[#ACFFFC] hover:bg-[#ACFFFC]/10 transition-all">
                                <Linkedin className="w-3.5 h-3.5" />
                            </a>
                        )}
                        {github && (
                            <a href={github} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-full text-white/40 hover:text-[#ACFFFC] hover:bg-[#ACFFFC]/10 transition-all">
                                <Github className="w-3.5 h-3.5" />
                            </a>
                        )}
                        {twitter && (
                            <a href={twitter} target="_blank" rel="noopener noreferrer" className="p-1.5 bg-white/5 rounded-full text-white/40 hover:text-[#ACFFFC] hover:bg-[#ACFFFC]/10 transition-all">
                                <Twitter className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Connection Indicator (Orb to Center) */}
            <div className={`absolute top-1/2 left-1/2 w-[var(--orbit-radius)] h-[1px] bg-gradient-to-r from-[#ACFFFC]/0 via-[#ACFFFC]/20 to-[#ACFFFC]/5 origin-left -translate-y-1/2 scale-x-[-1] transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-30'}`}></div>
        </div>
    );
};

export default OrbitingOrb;
