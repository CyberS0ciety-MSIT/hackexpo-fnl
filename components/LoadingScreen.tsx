
import React, { useEffect, useState } from 'react';
import { Cloud } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const [sceneVisible, setSceneVisible] = useState(false);

  useEffect(() => {
    // Sequence:
    // 0ms: Logo Cloud appears (CSS animation)
    // 800ms: Taxi & Road fade in
    // 1000ms: Progress starts moving

    // Delay the scene (taxi + road) appearance
    const sceneTimer = setTimeout(() => {
      setSceneVisible(true);
    }, 800);

    let progressTimer: ReturnType<typeof setInterval>;

    // Start the progress bar movement
    const startLoadingTimer = setTimeout(() => {
      const duration = 3500;
      const intervalTime = 20;
      const steps = duration / intervalTime;
      const increment = 100 / steps;

      progressTimer = setInterval(() => {
        setProgress((prev) => {
          const next = prev + increment;
          if (next >= 100) {
            clearInterval(progressTimer);
            setTimeout(() => {
              setShow(false);
              setTimeout(onComplete, 500); // Fade out delay
            }, 800);
            return 100;
          }
          return next;
        });
      }, intervalTime);
    }, 1000);

    return () => {
      clearTimeout(sceneTimer);
      clearTimeout(startLoadingTimer);
      if (progressTimer) clearInterval(progressTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className={`fixed inset-0 z-[100] bg-[#F3F4F6] flex flex-col items-center justify-center overflow-hidden transition-opacity duration-500 ${show ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      
      {/* Background Context & Static Logo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         
         {/* Static Magnified Logo as 'Cloud of Thought' - Centralized & Hovering */}
         {/* Animates in immediately on mount */}
         <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex flex-col items-center animate-in fade-in zoom-in duration-1000">
            <div className="relative animate-[float_6s_ease-in-out_infinite]">
                {/* Large Cloud Background - Magnified */}
                <Cloud className="w-80 h-80 sm:w-96 sm:h-96 text-white fill-white drop-shadow-2xl opacity-90" />
                
                {/* Logo Centered - Magnified */}
                <div className="absolute inset-0 flex items-center justify-center pt-8 pr-2">
                    <img 
                      src="https://i.ibb.co/nMNCvNHg/Meow.png" 
                      alt="HackExpo" 
                      className="w-40 h-40 sm:w-52 sm:h-52 object-contain drop-shadow-sm" 
                    />
                </div>
            </div>
         </div>

         {/* Drifting Clouds - Background */}
         <div className="absolute top-[10%] left-[10%] animate-[float_20s_linear_infinite] opacity-60">
             <Cloud className="w-16 h-16 text-slate-300 fill-slate-100 opacity-80" />
         </div>
         <div className="absolute top-[20%] right-[15%] animate-[float_25s_linear_infinite_reverse] opacity-40">
             <Cloud className="w-24 h-24 text-slate-300 fill-slate-100 opacity-60" />
         </div>
         <div className="absolute top-[5%] left-[60%] animate-[float_30s_linear_infinite] opacity-50">
             <Cloud className="w-12 h-12 text-slate-300 fill-slate-100 opacity-70" />
         </div>

         <style>{`
            @keyframes float {
                0% { transform: translateX(0px); }
                50% { transform: translateX(50px); }
                100% { transform: translateX(0px); }
            }
            @keyframes thought-float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-8px); }
            }
         `}</style>
      </div>

      <div className={`absolute bottom-0 w-full opacity-25 pointer-events-none select-none z-0 transition-all duration-1000 ${sceneVisible ? 'opacity-25 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <svg viewBox="0 0 1440 320" className="w-full h-auto text-slate-400 fill-current">
           <path fillOpacity="0.3" d="M0,320L1440,320L1440,280L0,280Z" />
           <path fill="none" stroke="currentColor" strokeWidth="1" d="M100,280 Q400,100 720,280 T1340,280" />
           <path fill="none" stroke="currentColor" strokeWidth="1" d="M100,280 L100,150 L200,280 L200,120 L300,280 L300,100 L400,280 L400,120 L500,280 L500,150 L600,280" />
           <path fill="none" stroke="currentColor" strokeWidth="1" d="M840,280 L840,150 L940,280 L940,120 L1040,280 L1040,100 L1140,280 L1140,120 L1240,280" />
           
           {/* Bridge Lights */}
           <circle cx="200" cy="120" r="3" className="fill-yellow-400 animate-pulse" />
           <circle cx="300" cy="100" r="3" className="fill-yellow-400 animate-pulse delay-75" />
           <circle cx="400" cy="120" r="3" className="fill-yellow-400 animate-pulse delay-150" />
           <circle cx="940" cy="120" r="3" className="fill-yellow-400 animate-pulse delay-100" />
           <circle cx="1040" cy="100" r="3" className="fill-yellow-400 animate-pulse delay-200" />
           <circle cx="1140" cy="120" r="3" className="fill-yellow-400 animate-pulse delay-300" />
        </svg>
      </div>

      <div className={`w-full max-w-5xl relative h-64 flex items-end mb-24 px-10 z-10 transition-all duration-1000 ease-out delay-100 ${sceneVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        
        {/* Road / Progress Bar Track */}
        <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-300/50 rounded-full overflow-hidden">
           <div 
             className="h-full bg-slate-400/50 transition-all duration-75 ease-linear"
             style={{ width: `${progress}%` }}
           ></div>
        </div>
        
        {/* Road Ticks */}
        <div className="absolute bottom-0 left-0 w-full h-2 flex justify-between px-2">
            {[...Array(25)].map((_, i) => (
                <div key={i} className="w-px h-1.5 bg-slate-400/30"></div>
            ))}
        </div>

        {/* Moving Taxi Container */}
        <div 
            className="absolute bottom-1.5 will-change-[left] flex flex-col items-center"
            style={{ 
              left: `${progress}%`,
              transform: 'translateX(-50%)', // Centered on progress point
              transition: 'left 0.05s linear'
            }} 
        >
            {/* Moving Phrase Bubble (Attached to Taxi) */}
            <div 
              className="absolute -top-32 z-20 transition-all duration-500 origin-bottom"
              style={{ 
                 opacity: progress > 5 ? 1 : 0,
                 transform: `scale(${progress > 5 ? 1 : 0.5}) translateY(${progress > 5 ? 0 : 20}px)`
              }}
            >
                <div className="relative animate-[thought-float_3s_ease-in-out_infinite]"> 
                    {/* Main Bubble */}
                    <div className="bg-white rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center min-w-[200px] relative z-20 border border-slate-100">
                        
                        {/* Text */}
                        <div className="text-center space-y-2">
                            <p className="font-bold text-slate-800 text-lg leading-tight tracking-tight whitespace-nowrap">
                              “Muskuraiye ap <br/> <span className="text-[#F7B500]">Kolkata</span> me hai”
                            </p>
                            
                            {/* Loading Bar inside bubble */}
                            <div className="flex items-center justify-center gap-2 pt-1">
                               <div className="w-12 h-1 bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-[#F7B500] transition-all duration-300 rounded-full" style={{ width: `${progress}%` }}></div>
                               </div>
                               <p className="text-[10px] text-slate-400 font-mono font-bold">
                                   {Math.round(progress)}%
                               </p>
                            </div>
                        </div>
                    </div>

                    {/* Speech Bubble Tail */}
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 z-10 shadow-sm border-r border-b border-slate-100"></div>
                </div>
            </div>

            {/* Taxi SVG Graphic */}
            <div className="w-48 h-24 relative z-10">
                 {/* Dust / Motion Trail */}
                 <div className="absolute bottom-1 right-[85%] flex gap-2 opacity-60">
                     <div className="w-4 h-1 bg-slate-300 rounded-full animate-pulse delay-75"></div>
                     <div className="w-8 h-1 bg-slate-300 rounded-full animate-pulse"></div>
                     <div className="w-2 h-1 bg-slate-300 rounded-full animate-pulse delay-150"></div>
                 </div>

                 <svg viewBox="0 0 240 120" className="w-full h-full drop-shadow-xl overflow-visible">
                    <g transform="translate(10,10)">
                      {/* Body Shape - Yellow Ambassador Style */}
                      <path 
                        d="M20,70 L200,70 Q215,70 215,60 L215,50 Q215,45 210,45 L170,45 L150,20 Q145,15 125,15 L75,15 Q55,15 50,20 L35,45 L10,45 Q0,45 0,55 L0,60 Q0,70 20,70 Z" 
                        fill="#F7B500" 
                        stroke="#E0A800"
                        strokeWidth="1"
                      />
                      
                      {/* Windows */}
                      <path d="M55,22 L120,22 L145,45 L40,45 Z" fill="#333" opacity="0.8" />
                      <path d="M57,24 L118,24 L142,43 L42,43 Z" fill="#EEF2F6" opacity="0.9" />
                      
                      {/* Black Stripe */}
                      <rect x="5" y="52" width="205" height="5" fill="#111" rx="1" />
                      
                      {/* Roof Sign */}
                      <g transform="translate(90, 5)">
                        <rect x="0" y="0" width="30" height="10" rx="2" fill="#FFF" stroke="#333" strokeWidth="1" />
                        <text x="15" y="7" fontSize="5" textAnchor="middle" fontFamily="sans-serif" fontWeight="900" fill="#000">TAXI</text>
                      </g>

                      {/* Wheels - Animating */}
                      <g className="animate-[spin_0.2s_linear_infinite] origin-center" style={{ transformBox: 'fill-box' }}>
                         <circle cx="50" cy="70" r="14" fill="#222" />
                         <circle cx="50" cy="70" r="6" fill="#DDD" />
                      </g>
                      <g className="animate-[spin_0.2s_linear_infinite] origin-center" style={{ transformBox: 'fill-box' }}>
                         <circle cx="170" cy="70" r="14" fill="#222" />
                         <circle cx="170" cy="70" r="6" fill="#DDD" />
                      </g>

                      {/* Bumper */}
                      <path d="M-2,65 Q-5,65 -5,72 L225,72 Q225,65 222,65 Z" fill="#CCCCCC" opacity="0.8" />
                      
                      {/* Headlight */}
                      <circle cx="10" cy="50" r="4" fill="#FFF" stroke="#CCC" strokeWidth="1" />
                      <path d="M215,50 L217,50 L217,60 L215,60 Z" fill="#CC0000" /> 
                    </g>
                 </svg>
            </div>
        </div>
      </div>
    </div>
  );
};
