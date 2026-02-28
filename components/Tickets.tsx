
import React, { useState, useRef, useEffect } from 'react';
import { Terminal, User, Briefcase, ChevronDown, Lock, ShieldCheck, CreditCard, Scan } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { HackerText } from './HackerText';

const Tickets: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'student' | 'pro' | null>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);

  const handleGetAccess = () => {
    if (selectedTrack && terminalRef.current) {
      terminalRef.current.scrollIntoView({ behavior: 'smooth' });

      // Reset and start terminal typing effect
      setTerminalLines([]);
      const lines = [
        `> INITIATING HANDSHAKE...`,
        `> VERIFYING CLEARANCE LEVEL: ${selectedTrack === 'student' ? 'STUDENT' : 'PRO'}`,
        `> ENCRYPTING CONNECTION... [OK]`,
        `> FETCHING PRICING NODES...`,
        `> STATUS: AWAITING GATEWAY CONFIGURATION`
      ];

      let lineIndex = 0;
      const interval = setInterval(() => {
        if (lineIndex < lines.length) {
          setTerminalLines(prev => [...prev, lines[lineIndex]]);
          lineIndex++;
        } else {
          clearInterval(interval);
        }
      }, 500);
    }
  };

  return (
    <section id="tickets" className="py-24 md:py-32 bg-nothing-black relative border-b border-nothing-border overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none animate-slow-pan"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-full max-h-[500px] bg-gradient-to-r from-retro-cyan/5 to-purple-500/5 blur-[100px] rounded-full pointer-events-none animate-breathe-center"></div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full border border-retro-cyan/20 bg-retro-cyan/5 backdrop-blur-md">
              <Terminal className="w-3 h-3 text-retro-cyan" />
              <span className="text-[10px] font-mono uppercase text-retro-cyan tracking-widest">Access Control</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter">
              <HackerText text="IDENTIFY YOURSELF" />
            </h2>
            <p className="text-retro-text/60 font-mono text-sm max-w-md mx-auto">
              Select your clearance level to initialize the secure ticket acquisition program.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 max-w-3xl mx-auto mb-12">
          {/* Student Button */}
          <ScrollReveal delay={200}>
            <button
              onClick={() => setSelectedTrack('student')}
              className={`group relative w-full aspect-[4/3] md:aspect-square flex flex-col items-center justify-center border bg-nothing-card/50 backdrop-blur-sm transition-all duration-500 rounded-2xl overflow-hidden ${selectedTrack === 'student' ? 'border-retro-cyan bg-white/5 shadow-[0_0_30px_-5px_rgba(165,243,252,0.3)] scale-[1.02]' : 'border-white/10 hover:bg-white/5 hover:border-retro-cyan/50'}`}
            >
              {/* Laser Scan Effect on Hover */}
              <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-retro-cyan/10 to-transparent -translate-y-full group-hover:animate-scan-fast pointer-events-none opacity-0 group-hover:opacity-100"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full border bg-black/20 flex items-center justify-center mb-6 transition-all duration-500 ${selectedTrack === 'student' ? 'border-retro-cyan bg-retro-cyan/10' : 'border-white/10 group-hover:border-retro-cyan/50 group-hover:bg-retro-cyan/10'}`}>
                  <User className={`w-8 h-8 transition-colors duration-500 ${selectedTrack === 'student' ? 'text-retro-cyan' : 'text-retro-text/40 group-hover:text-retro-cyan'}`} />
                </div>

                <h3 className={`text-2xl font-bold font-mono tracking-wider transition-colors ${selectedTrack === 'student' ? 'text-retro-cyan' : 'text-white group-hover:text-retro-cyan'}`}>STUDENT</h3>
                <div className={`mt-4 h-px transition-all duration-500 ${selectedTrack === 'student' ? 'w-24 bg-retro-cyan' : 'w-8 bg-white/20 group-hover:w-24 group-hover:bg-retro-cyan'}`}></div>
              </div>
            </button>
          </ScrollReveal>

          {/* Pro Button */}
          <ScrollReveal delay={400}>
            <button
              onClick={() => setSelectedTrack('pro')}
              className={`group relative w-full aspect-[4/3] md:aspect-square flex flex-col items-center justify-center border bg-nothing-card/50 backdrop-blur-sm transition-all duration-500 rounded-2xl overflow-hidden ${selectedTrack === 'pro' ? 'border-purple-500 bg-white/5 shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] scale-[1.02]' : 'border-white/10 hover:bg-white/5 hover:border-purple-500/50'}`}
            >
              {/* Laser Scan Effect on Hover */}
              <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-purple-500/10 to-transparent -translate-y-full group-hover:animate-scan-fast pointer-events-none opacity-0 group-hover:opacity-100"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-16 h-16 rounded-full border bg-black/20 flex items-center justify-center mb-6 transition-all duration-500 ${selectedTrack === 'pro' ? 'border-purple-500 bg-purple-500/10' : 'border-white/10 group-hover:border-purple-500/50 group-hover:bg-purple-500/10'}`}>
                  <Briefcase className={`w-8 h-8 transition-colors duration-500 ${selectedTrack === 'pro' ? 'text-purple-400' : 'text-retro-text/40 group-hover:text-purple-400'}`} />
                </div>

                <h3 className={`text-2xl font-bold font-mono tracking-wider transition-colors ${selectedTrack === 'pro' ? 'text-purple-400' : 'text-white group-hover:text-purple-400'}`}>PROFESSIONAL</h3>
                <div className={`mt-4 h-px transition-all duration-500 ${selectedTrack === 'pro' ? 'w-24 bg-purple-500' : 'w-8 bg-white/20 group-hover:w-24 group-hover:bg-purple-500'}`}></div>
              </div>
            </button>
          </ScrollReveal>
        </div>

        {/* Action Button */}
        <div className="flex justify-center mb-20">
          <button
            onClick={handleGetAccess}
            disabled={!selectedTrack}
            className={`
               relative px-12 py-5 rounded-full font-mono font-bold uppercase tracking-[0.2em] transition-all duration-500
               flex items-center gap-3 overflow-hidden
               ${selectedTrack
                ? 'text-nothing-black bg-white hover:bg-retro-cyan shadow-[0_0_40px_rgba(255,255,255,0.4)] scale-100 opacity-100 cursor-pointer'
                : 'text-white/20 bg-white/5 border border-white/10 scale-95 opacity-50 cursor-not-allowed'}
             `}
          >
            {selectedTrack && (
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 animate-shimmer"></div>
            )}
            <span>GET ACCESS</span>
            <ChevronDown className={`w-5 h-5 transition-transform ${selectedTrack ? 'animate-bounce' : ''}`} />
          </button>
        </div>

        {/* Terminal Section */}
        <div ref={terminalRef} className={`transition-all duration-1000 ${selectedTrack ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-20 blur-sm pointer-events-none'}`}>
          <div className="max-w-2xl mx-auto">
            <div className="w-full bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] flex flex-col min-h-[400px] relative">

              {/* Matrix Rain Overlay in Terminal */}
              <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/1/17/Matrix_digital_rain.gif')] bg-cover mix-blend-screen opacity-30"></div>
              </div>

              <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex items-center gap-2">
                  <CreditCard className="w-3 h-3 text-white/40" />
                  <div className="text-[10px] font-mono text-white/40">SECURE GATEWAY V2.0</div>
                </div>
              </div>

              <div className="p-6 md:p-8 flex-1 flex flex-col font-mono text-sm relative z-10">
                {/* Dynamic Typing Logs */}
                <div className="space-y-2 mb-6 min-h-[100px] text-green-400 font-mono text-xs">
                  {terminalLines.map((line, i) => (
                    <div key={i} className="animate-fade-in-up">{line}</div>
                  ))}
                  {terminalLines.length > 0 && <div className="animate-pulse">_</div>}
                </div>

                {/* "Locked" Overlay/Message */}
                <div className="mt-auto relative p-4 bg-yellow-500/5 border border-yellow-500/20 rounded">
                  <div className="absolute top-0 left-0 w-1 h-full bg-yellow-500/50"></div>
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-yellow-400 mt-0.5 shrink-0" />
                    <div>
                      <h4 className="font-bold text-yellow-400 text-xs uppercase mb-1">Gateway Config Pending</h4>
                      <p className="text-[11px] text-retro-text/70 leading-normal">
                        Pricing structure and payment channels are currently being finalized.
                        <br />
                        <span className="opacity-50">Status Code: 202_ACCEPTED_PENDING_INFO</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center flex items-center justify-center gap-2">
                  <ShieldCheck className="w-3 h-3 text-green-500/50" />
                  <span className="text-[10px] text-white/20">256-BIT ENCRYPTION ACTIVE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Tickets;
