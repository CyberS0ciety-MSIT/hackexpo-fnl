
import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Globe, FileText, ArrowRight } from 'lucide-react';
import { EVENT_DETAILS } from '../constants';
import { HackerText } from './HackerText';

const BG_IMAGES = [
  "https://images.pexels.com/photos/18158843/pexels-photo-18158843/free-photo-of-yellow-cabs-driving-in-a-city.jpeg",
  "https://assets-news.housing.com/news/wp-content/uploads/2022/07/10235925/KOLKATA-SIGHTSEEING-FEATURE-compressed.jpg",
  "https://img-cdn.publive.online/fit-in/640x360/filters:format(webp)/local-samosal/media/media_files/2025/04/04/QDfFXFJ71BUr3rSFtDSa.jpg"
];

const Hero: React.FC = () => {
  const [langIndex, setLangIndex] = useState(0);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);

  // Animation States: 'text' -> 'glitching' -> 'logo'
  const [animationState, setAnimationState] = useState<'text' | 'glitching' | 'logo'>('text');

  const LOCATIONS = [
    { text: "KOLKATA", lang: "en", font: "font-mono" },
    { text: "কলকাতা", lang: "bn", font: "font-sans" },
    { text: "कोलकाता", lang: "hi", font: "font-sans" },
  ];

  useEffect(() => {
    // Sequence: 
    // 0.0s: Initial State (Text)
    // 2.5s: Glitch Starts (Chaotic)
    // 3.0s: Logo Snaps In

    const glitchTimer = setTimeout(() => {
      setAnimationState('glitching');
    }, 2500);

    const logoTimer = setTimeout(() => {
      setAnimationState('logo');
    }, 3000);

    return () => {
      clearTimeout(glitchTimer);
      clearTimeout(logoTimer);
    };
  }, []);

  // Language rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % LOCATIONS.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [LOCATIONS.length]);

  // Background Image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgIndex((prev) => (prev + 1) % BG_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToCFP = () => {
    const cfpSection = document.getElementById('cfp');
    if (cfpSection) {
      const navHeight = 80;
      const top = cfpSection.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-24 md:pt-20 border-b border-nothing-border overflow-hidden">

      {/* Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-nothing-black">

        {/* Background Image Slideshow - Vibrant & Saturated */}
        <div className="absolute inset-0 z-0">
          {BG_IMAGES.map((img, index) => (
            <img
              key={img}
              src={img}
              alt="Kolkata Atmosphere"
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-in-out saturate-125 contrast-110 filter ${index === currentBgIndex ? 'opacity-90 scale-105' : 'opacity-0 scale-100'
                }`}
            />
          ))}
          {/* Reduced overlay opacity to make images clearer on mobile */}
          <div className="absolute inset-0 bg-black/20"></div>
        </div>

        {/* Layer 1: Dot Pattern Overlay (The "Nothing" Texture) */}
        <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none z-[1]" />

        {/* Layer 2: Gradient Map / Vignette for Text Readability - Lighter on top for mobile visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-nothing-black/40 via-transparent to-nothing-black/90 z-[2]" />
      </div>

      <div className="z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-24 md:pb-20 relative">

        {/* Left Col: Main Typography */}
        <div className="lg:col-span-8 space-y-6 md:space-y-8 relative">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-retro-cyan/80 rounded-full animate-pulse shadow-[0_0_15px_#A5F3FC]"></span>
            {/* Glass Pill */}
            <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-white/90 uppercase bg-white/10 backdrop-blur-xl border border-white/20 px-3 py-1.5 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.1)]">
              <HackerText text="Cyber Society × Crac Learning" speed={20} />
            </div>
          </div>

          <div className="relative z-20 py-4 min-h-[200px] flex flex-col justify-center">

            {/* Dynamic Content Area: Text -> Glitch -> Logo */}
            {animationState === 'logo' ? (
              /* LOGO STATE */
              <div className="relative animate-fade-in-up w-full flex justify-start">
                {/* Background removed as requested */}
                <img
                  src="https://i.ibb.co/nMNCvNHg/Meow.png"
                  alt="HackExpo Logo"
                  className="h-32 sm:h-40 md:h-56 lg:h-64 w-auto object-contain drop-shadow-[0_0_40px_rgba(165,243,252,0.6)] relative z-10"
                />
              </div>
            ) : (
              /* TEXT / GLITCH STATE */
              <div className="relative">
                <h1 className={`
                      text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-2 drop-shadow-2xl flex flex-col gap-0 transition-all duration-100 ease-linear
                      ${animationState === 'glitching' ? 'animate-glitch-intense opacity-70 blur-[2px] scale-105 filter saturate-200' : ''}
                   `}>
                  <span className={`text-white block ${animationState === 'glitching' ? 'text-retro-cyan translate-x-1' : ''}`}>
                    <HackerText text="HACK" speed={30} />
                  </span>
                  <span className={`text-retro-cyan drop-shadow-[0_0_20px_rgba(165,243,252,0.6)] block ${animationState === 'glitching' ? 'text-white -translate-x-1' : ''}`}>
                    <HackerText text="EXPO" speed={30} revealDelay={200} />
                  </span>
                </h1>

                {/* Duplicated Layer for Chromatic Aberration during glitch */}
                {animationState === 'glitching' && (
                  <h1 className="absolute inset-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-2 flex flex-col gap-0 animate-glitch opacity-50 mix-blend-screen text-red-500 pointer-events-none translate-x-[4px]">
                    <span className="block">HACK</span>
                    <span className="block">EXPO</span>
                  </h1>
                )}

                {/* 2026 - Translucent Liquid Glass Aesthetic - Now part of the glitch/disappear cycle */}
                <div className={`flex items-center gap-4 mt-2 transition-all duration-100 ${animationState === 'glitching' ? 'animate-glitch-intense opacity-70 blur-[2px] filter saturate-200' : ''
                  }`}>
                  <div className="h-1 w-12 md:w-24 bg-gradient-to-r from-retro-cyan/50 to-transparent"></div>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-white/70 to-white/10 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                    <HackerText text="2026" revealDelay={500} />
                  </h2>
                </div>

                {/* 2026 Chromatic Aberration during glitch */}
                {animationState === 'glitching' && (
                  <div className="absolute bottom-0 left-0 flex items-center gap-4 mt-2 animate-glitch opacity-50 mix-blend-screen text-red-500 pointer-events-none translate-x-[2px]">
                    <div className="h-1 w-12 md:w-24 bg-red-500/50"></div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-mono font-bold tracking-widest text-red-500/50">
                      2026
                    </h2>
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Location Box & Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-stretch">
            <div className="p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/[0.05] transition-all duration-300 group w-full sm:w-fit sm:min-w-[320px] lg:min-w-[380px] relative z-20">
              <div className="flex items-start justify-between mb-4 border-b border-white/10 pb-3">
                <span className="text-xs font-mono text-retro-cyan/80 uppercase font-semibold tracking-wider">Host City</span>
                <Globe className="w-5 h-5 text-retro-cyan drop-shadow-md" />
              </div>

              <div className="relative h-10 md:h-14 overflow-hidden">
                {LOCATIONS.map((loc, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center transition-all duration-500 transform ${index === langIndex
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-full'
                      }`}
                  >
                    {/* Text with slight gradient for depth */}
                    <span className={`text-3xl sm:text-4xl font-bold font-mono uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 drop-shadow-sm ${loc.font}`}>
                      {loc.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button for CFP */}
            <button
              onClick={handleScrollToCFP}
              className="group relative h-auto px-8 py-5 rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-2xl hover:bg-retro-cyan hover:border-retro-cyan transition-all duration-300 flex flex-col justify-between items-start z-20 w-full sm:w-auto min-w-[180px]"
            >
              <div className="flex items-center justify-between w-full mb-4 opacity-50 group-hover:opacity-100 group-hover:text-nothing-black transition-all">
                <FileText className="w-5 h-5" />
                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <div className="text-left">
                <span className="block text-xs font-mono uppercase tracking-wider text-white/60 group-hover:text-nothing-black/60 mb-1">CFP</span>
                <span className="block text-lg font-bold text-white group-hover:text-nothing-black font-mono">SUBMIT PAPER</span>
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-retro-cyan/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </button>
          </div>

        </div>

        {/* Right Col: Details (Highly Transparent Apple Liquid Glass Style) */}
        <div className="lg:col-span-4 space-y-4 relative z-20">
          <div className="p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/[0.05] transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4 border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-retro-cyan/80 uppercase font-semibold tracking-wider">Coordinates</span>
              <MapPin className="w-5 h-5 text-retro-cyan drop-shadow-md" />
            </div>
            <p className="text-base sm:text-lg font-mono text-white/90 font-medium tracking-wide">
              <HackerText text={EVENT_DETAILS.venue} revealDelay={1500} />
            </p>
          </div>

          <div className="p-5 md:p-6 rounded-2xl border border-white/10 bg-white/[0.01] backdrop-blur-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] hover:bg-white/[0.05] transition-all duration-300 group">
            <div className="flex items-start justify-between mb-4 border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-retro-cyan/80 uppercase font-semibold tracking-wider">Timeline</span>
              <Calendar className="w-5 h-5 text-retro-cyan drop-shadow-md" />
            </div>
            <div className="flex items-center gap-3">
              <p className="text-base sm:text-lg font-mono text-white/90 font-medium tracking-wide">
                <HackerText text={EVENT_DETAILS.date} revealDelay={1800} />
              </p>
              <span className="px-2 py-1 rounded-md text-[10px] bg-retro-cyan/20 border border-retro-cyan/30 text-retro-cyan font-bold uppercase shadow-[0_0_10px_rgba(165,243,252,0.2)] backdrop-blur-md">Incoming</span>
            </div>
          </div>
        </div>

      </div>

      {/* Marquee Footer - Glass Style */}
      <div className="absolute bottom-0 w-full border-t border-white/10 bg-black/60 backdrop-blur-xl py-3 overflow-hidden flex z-20 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex w-full">
          {/* First Copy */}
          <div className="animate-ticker flex-shrink-0 whitespace-nowrap flex items-center gap-8 px-4 text-xs sm:text-sm font-mono text-white/60 uppercase tracking-widest">
            {[...Array(8)].map((_, i) => (
              <React.Fragment key={i}>
                <span>Security Conference 2026</span>
                <span className="text-retro-cyan">+</span>
                <span>Workshops</span>
                <span className="text-retro-cyan">+</span>
                <span>Networking</span>
                <span className="text-retro-cyan">+</span>
              </React.Fragment>
            ))}
          </div>
          {/* Duplicate Copy for Seamless Loop */}
          <div className="animate-ticker flex-shrink-0 whitespace-nowrap flex items-center gap-8 px-4 text-xs sm:text-sm font-mono text-white/60 uppercase tracking-widest">
            {[...Array(8)].map((_, i) => (
              <React.Fragment key={`copy-${i}`}>
                <span>Security Conference 2026</span>
                <span className="text-retro-cyan">+</span>
                <span>Workshops</span>
                <span className="text-retro-cyan">+</span>
                <span>Networking</span>
                <span className="text-retro-cyan">+</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
