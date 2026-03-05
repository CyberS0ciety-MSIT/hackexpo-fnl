import React from 'react';
import { Lock, AlertTriangle } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <section id="register" className="py-32 px-6 bg-nothing-black relative overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">

      {/* Background Dots */}
      <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none"></div>

      <div className="max-w-2xl w-full relative z-10">

        {/* "Card" Container */}
        <div className="bg-nothing-card border border-nothing-border p-8 md:p-12 relative overflow-hidden group">

          {/* --- Disabled Form Background (Visible but blocked) --- */}
          <div className="absolute inset-0 p-8 md:p-12 opacity-20 pointer-events-none filter blur-[2px] select-none">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="h-4 w-24 bg-nothing-border/50 rounded"></div>
                <div className="h-12 w-full border border-nothing-border bg-transparent rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-32 bg-nothing-border/50 rounded"></div>
                <div className="h-12 w-full border border-nothing-border bg-transparent rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 w-20 bg-nothing-border/50 rounded"></div>
                <div className="h-12 w-full border border-nothing-border bg-transparent rounded"></div>
              </div>
              <div className="h-12 w-full bg-nothing-border/50 rounded mt-8"></div>
            </div>
          </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-retro-cyan/20 transition-colors pointer-events-none"></div>

          <div className="flex flex-col items-center text-center space-y-8 relative z-20">

            {/* Icon */}
            <div className="w-16 h-16 border border-retro-cyan/30 rounded-full flex items-center justify-center bg-retro-cyan/5 shadow-[0_0_30px_-10px_rgba(165,243,252,0.2)]">
              <Lock className="w-6 h-6 text-retro-cyan" />
            </div>

            {/* Typography */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white font-mono tracking-tighter">
                REGISTRATION <br />
                <span className="text-retro-text/40">LOCKED</span>
              </h2>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-nothing-border to-transparent my-4"></div>

              <p className="font-mono text-sm text-retro-text/60 leading-relaxed max-w-md mx-auto">
                <span className="text-retro-cyan">Error 403:</span> The ticket portal is currently offline for maintenance or presale preparation.
                Please stand by for system update.
              </p>
            </div>

            {/* "Button" Placeholder - Enhanced Visual Indicator */}
            <div className="mt-8">
              <div className="relative group/btn overflow-hidden">
                <div className="inline-flex items-center gap-3 px-8 py-4 border border-dashed border-nothing-border rounded bg-white/5 opacity-50 cursor-not-allowed transition-all group-hover/btn:border-retro-cyan/40 group-hover/btn:opacity-100">
                  <AlertTriangle className="w-4 h-4 text-retro-cyan animate-pulse" />
                  <span className="text-xs font-mono uppercase tracking-widest text-retro-text">NOTIFY WHEN OPEN</span>
                </div>
                {/* Diagonal Stripe Overlay */}
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.5)_10px,rgba(0,0,0,0.5)_20px)] opacity-20 pointer-events-none"></div>
              </div>
            </div>

          </div>

          {/* Decorative Corner Canvas */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-retro-cyan"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-retro-cyan"></div>
        </div>

      </div>
    </section>
  );
};

export default Registration;