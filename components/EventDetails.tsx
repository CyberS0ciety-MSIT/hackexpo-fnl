
import React from 'react';
import { Calendar, Clock, Map as MapIcon, Activity } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';
import { ScrollReveal } from './ScrollReveal';
import { HackerText } from './HackerText';

const EventDetails: React.FC = () => {
  return (
    <section id="event-details" className="relative border-b border-nothing-border bg-nothing-black overflow-hidden py-10 md:py-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-dot-pattern opacity-5 animate-slow-pan pointer-events-none"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 md:divide-x divide-nothing-border max-w-7xl mx-auto relative z-10 px-4 md:px-0">
          
          {/* Card 1: Cyan Theme */}
          <ScrollReveal delay={0} className="h-full">
            <div className="relative p-8 md:p-12 h-full flex flex-col justify-between group overflow-hidden bg-nothing-card/30 backdrop-blur-sm border border-white/5 md:border-none rounded-xl md:rounded-none">
              <div className="absolute inset-0 bg-gradient-to-br from-retro-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-retro-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
              
              <div className="mb-6 md:mb-8 relative z-10">
                 <div className="w-12 h-12 rounded-lg bg-retro-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="w-6 h-6 text-retro-cyan" />
                 </div>
                 <h4 className="font-mono text-xs uppercase tracking-widest text-retro-cyan/60 mb-2">Sync Date</h4>
                 <div className="text-xl sm:text-3xl font-bold text-white group-hover:text-retro-cyan transition-colors">
                    <HackerText text={EVENT_DETAILS.date} revealDelay={200} />
                 </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-retro-text/40">
                 <div className="w-1.5 h-1.5 bg-retro-cyan rounded-full animate-pulse"></div>
                 SCHEDULE_LOCKED
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Purple Theme */}
          <ScrollReveal delay={200} className="h-full">
            <div className="relative p-8 md:p-12 h-full flex flex-col justify-between group overflow-hidden bg-nothing-card/30 backdrop-blur-sm border border-white/5 md:border-none rounded-xl md:rounded-none">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-purple-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-100"></div>

              <div className="mb-6 md:mb-8 relative z-10">
                 <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MapIcon className="w-6 h-6 text-purple-400" />
                 </div>
                 <h4 className="font-mono text-xs uppercase tracking-widest text-purple-400/60 mb-2">Venue</h4>
                 <div className="text-xl sm:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    <HackerText text={EVENT_DETAILS.venue} revealDelay={400} />
                 </div>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono text-retro-text/40">
                 <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse delay-75"></div>
                 GEOLOCATION_ACTIVE
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Green/Emerald Theme */}
          <ScrollReveal delay={400} className="h-full">
            <div className="relative p-8 md:p-12 h-full flex flex-col justify-between group overflow-hidden bg-nothing-card/30 backdrop-blur-sm border border-white/5 md:border-none rounded-xl md:rounded-none">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-emerald-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 delay-200"></div>

              <div className="mb-6 md:mb-8 relative z-10">
                 <div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-emerald-400" />
                 </div>
                 <h4 className="font-mono text-xs uppercase tracking-widest text-emerald-400/60 mb-2">System Status</h4>
                 <div className="flex items-center gap-3">
                    <div className="text-xl sm:text-3xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                        <HackerText text={EVENT_DETAILS.status} revealDelay={600} />
                    </div>
                 </div>
              </div>
              
              <div className="flex items-center gap-2 text-[10px] font-mono text-retro-text/40">
                 <Activity className="w-3 h-3 text-emerald-500 animate-pulse" />
                 LIVE_MONITORING
              </div>
            </div>
          </ScrollReveal>

      </div>
    </section>
  );
};

export default EventDetails;
