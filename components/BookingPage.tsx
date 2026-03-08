
import React, { useState, useEffect } from 'react';
import { Lock, Terminal, ShieldCheck, CreditCard, ChevronLeft } from 'lucide-react';
import { HackerText } from './HackerText';
import { ScrollReveal } from './ScrollReveal';
import { useNavigate, useLocation } from 'react-router-dom';

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTrack, setSelectedTrack] = useState<'student' | 'pro' | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const track = params.get('track');
    if (track === 'student') setSelectedTrack('student');
    if (track === 'pro') setSelectedTrack('pro');
  }, [location]);

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 relative bg-nothing-black overflow-hidden flex flex-col">
       {/* Ambient Backgrounds */}
       <div className="fixed inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>
       <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-retro-cyan/5 via-transparent to-transparent pointer-events-none"></div>
       
       {/* Animated Grid Floor (Fake 3D) */}
       <div className="fixed bottom-0 left-0 w-full h-[50vh] bg-[linear-gradient(to_bottom,transparent,rgba(165,243,252,0.03))] transform perspective-[1000px] rotateX(60deg) pointer-events-none z-0">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(165,243,252,0.05)_1px,transparent_1px),linear-gradient(0deg,rgba(165,243,252,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
       </div>

       <div className="max-w-7xl w-full mx-auto relative z-10 flex-1 flex flex-col">
          
          <div className="flex justify-between items-start mb-12">
            <button 
                onClick={() => navigate('/')}
                className="group flex items-center gap-3 text-retro-text/60 hover:text-retro-cyan transition-colors font-mono text-xs uppercase tracking-widest px-4 py-2 border border-transparent hover:border-retro-cyan/20 hover:bg-retro-cyan/5 rounded-full"
            >
                <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Abort Transaction</span>
            </button>
            
            <div className="hidden md:flex items-center gap-2 text-[10px] font-mono text-retro-cyan/40">
                <span className="w-2 h-2 bg-retro-cyan/50 rounded-full animate-pulse"></span>
                SECURE_CONNECTION_ESTABLISHED
            </div>
          </div>

          <div className="text-center mb-16 relative">
             <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-retro-cyan/30 bg-retro-cyan/10 backdrop-blur-md shadow-[0_0_15px_rgba(165,243,252,0.2)]">
                <CreditCard className="w-3 h-3 text-retro-cyan" />
                <span className="text-[10px] font-mono uppercase text-retro-cyan tracking-[0.2em] font-bold">Secure Gateway</span>
             </div>
             <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter drop-shadow-[0_0_20px_rgba(165,243,252,0.15)]">
                <HackerText text="ACCESS_ACQUISITION" />
             </h1>
             <p className="text-retro-text/60 font-mono text-sm max-w-lg mx-auto leading-relaxed">
                <span className="text-retro-cyan">//</span> Select your clearance protocol below.<br/> 
                Transactions are encrypted end-to-end via quantum-resistant algorithms.
             </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto w-full">
             
             {/* Left Column: Ticket Selection */}
             <div className="lg:col-span-7 space-y-6">
                
                {/* Student Option */}
                <ScrollReveal delay={100} className="w-full">
                    <div 
                        className={`relative w-full cursor-pointer transition-all duration-500 group ${selectedTrack === 'student' ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}
                        onClick={() => setSelectedTrack('student')}
                    >
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-retro-cyan/40 to-blue-600/40 rounded-xl blur opacity-0 transition duration-500 ${selectedTrack === 'student' ? 'opacity-100' : 'group-hover:opacity-50'}`}></div>
                        <div className={`relative h-full bg-nothing-card border p-1 rounded-xl transition-colors duration-300 ${selectedTrack === 'student' ? 'border-retro-cyan bg-nothing-black' : 'border-white/10 hover:border-retro-cyan/30'}`}>
                           <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                               <div className={`w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-300 ${selectedTrack === 'student' ? 'bg-retro-cyan/20 border-retro-cyan text-retro-cyan' : 'bg-white/5 border-white/10 text-retro-text/40'}`}>
                                   <Terminal className="w-7 h-7" />
                               </div>
                               <div className="flex-1">
                                   <div className="flex items-center justify-between mb-2">
                                       <h3 className={`text-xl font-bold font-mono tracking-tight transition-colors ${selectedTrack === 'student' ? 'text-retro-cyan' : 'text-white'}`}>STUDENT_TRACK</h3>
                                       {selectedTrack === 'student' && <div className="w-3 h-3 bg-retro-cyan rounded-full shadow-[0_0_10px_#A5F3FC]"></div>}
                                   </div>
                                   <p className="text-sm text-retro-text/60 font-mono mb-4">Full access to workshops, CTF, and networking events for enrolled students.</p>
                                   <div className="flex items-center gap-3">
                                        <div className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono text-retro-text/40">ID REQUIRED</div>
                                        <div className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono text-retro-text/40">2 DAYS</div>
                                   </div>
                               </div>
                               <div className="text-right min-w-[100px]">
                                   <div className="text-2xl font-bold text-white mb-1">TBD</div>
                                   <div className="text-[10px] text-retro-text/40 font-mono uppercase">Early Bird</div>
                               </div>
                           </div>
                        </div>
                    </div>
                </ScrollReveal>

                {/* Pro Option */}
                <ScrollReveal delay={200} className="w-full">
                    <div 
                        className={`relative w-full cursor-pointer transition-all duration-500 group ${selectedTrack === 'pro' ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}
                        onClick={() => setSelectedTrack('pro')}
                    >
                        <div className={`absolute -inset-0.5 bg-gradient-to-r from-purple-500/40 to-pink-600/40 rounded-xl blur opacity-0 transition duration-500 ${selectedTrack === 'pro' ? 'opacity-100' : 'group-hover:opacity-50'}`}></div>
                        <div className={`relative h-full bg-nothing-card border p-1 rounded-xl transition-colors duration-300 ${selectedTrack === 'pro' ? 'border-purple-500 bg-nothing-black' : 'border-white/10 hover:border-purple-500/30'}`}>
                           <div className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                               <div className={`w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-300 ${selectedTrack === 'pro' ? 'bg-purple-500/20 border-purple-500 text-purple-400' : 'bg-white/5 border-white/10 text-retro-text/40'}`}>
                                   <ShieldCheck className="w-7 h-7" />
                               </div>
                               <div className="flex-1">
                                   <div className="flex items-center justify-between mb-2">
                                       <h3 className={`text-xl font-bold font-mono tracking-tight transition-colors ${selectedTrack === 'pro' ? 'text-purple-400' : 'text-white'}`}>PRO_TRACK</h3>
                                       {selectedTrack === 'pro' && <div className="w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_#A855F7]"></div>}
                                   </div>
                                   <p className="text-sm text-retro-text/60 font-mono mb-4">Priority access, exclusive networking dinner, and advanced workshop materials.</p>
                                   <div className="flex items-center gap-3">
                                        <div className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono text-retro-text/40">ALL ACCESS</div>
                                        <div className="px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] font-mono text-retro-text/40">VIP LOUNGE</div>
                                   </div>
                               </div>
                               <div className="text-right min-w-[100px]">
                                   <div className="text-2xl font-bold text-white mb-1">TBD</div>
                                   <div className="text-[10px] text-retro-text/40 font-mono uppercase">Standard</div>
                               </div>
                           </div>
                        </div>
                    </div>
                </ScrollReveal>

             </div>

             {/* Right Column: Order Terminal */}
             <div className="lg:col-span-5 sticky top-32">
                 <ScrollReveal delay={400}>
                    <div className="w-full bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] flex flex-col min-h-[400px]">
                        
                        {/* Terminal Header */}
                        <div className="bg-white/5 border-b border-white/10 p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                            </div>
                            <div className="text-[10px] font-mono text-white/40">TERMINAL_ID: 8X-99</div>
                        </div>

                        {/* Terminal Body */}
                        <div className="p-6 flex-1 flex flex-col font-mono text-sm">
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-retro-text/60">
                                    <span>STATUS</span>
                                    <span className="text-retro-cyan animate-pulse">AWAITING_CONFIG</span>
                                </div>
                                <div className="h-px w-full bg-white/10"></div>
                                
                                <div className="space-y-2">
                                    <div className="flex justify-between">
                                        <span className="text-white/40">ITEM</span>
                                        <span className="text-white">{selectedTrack === 'student' ? 'STUDENT_PASS' : selectedTrack === 'pro' ? 'PRO_PASS' : '---'}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/40">BASE_FARE</span>
                                        <span className="text-white">TO_BE_DECIDED</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-white/40">TAX</span>
                                        <span className="text-white">--</span>
                                    </div>
                                </div>

                                <div className="h-px w-full bg-white/10"></div>

                                <div className="flex justify-between items-end">
                                    <span className="text-retro-text/60">TOTAL_EST</span>
                                    <span className="text-2xl font-bold text-retro-cyan">
                                        TO BE DECIDED
                                    </span>
                                </div>
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
                                            <br/>
                                            <span className="opacity-50">Status Code: 202_ACCEPTED_PENDING_INFO</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Disabled Button */}
                            <button disabled className="mt-4 w-full py-3 bg-white/5 border border-white/10 text-white/20 font-bold uppercase tracking-widest cursor-not-allowed flex items-center justify-center gap-2 hover:bg-white/5">
                                <span>NOTIFY WHEN AVAILABLE</span>
                            </button>
                            
                            <div className="mt-4 text-center">
                                <span className="text-[10px] text-white/20">ENCRYPTED VIA AES-256</span>
                            </div>
                        </div>
                    </div>
                 </ScrollReveal>
             </div>
          </div>

       </div>
    </div>
  );
};

export default BookingPage;
