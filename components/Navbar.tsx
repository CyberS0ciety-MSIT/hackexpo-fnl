
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NAV_ITEMS } from '../constants';
import { Ticket, Menu, X, ChevronRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const navHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 border-b
          transition-[background-color,border-color,padding,backdrop-filter,box-shadow] duration-300 ease-fluid
          ${scrolled 
            ? 'bg-nothing-black/95 backdrop-blur-xl border-nothing-border shadow-[0_4px_30px_rgba(0,0,0,0.5)] py-3' 
            : 'bg-nothing-black/95 border-nothing-border md:bg-transparent md:border-transparent py-3 md:py-5'}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <div 
            className="flex items-center gap-2 md:gap-3 group cursor-pointer relative z-50 select-none" 
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <Logo className={`transition-all duration-300 ${scrolled ? 'w-8 h-8' : 'w-10 h-10'}`} />
            <span className="text-sm md:text-base font-mono font-bold text-retro-text tracking-tight group-hover:text-retro-cyan transition-colors whitespace-nowrap">
              HACKEXPO<span className="text-retro-cyan">(2026)</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                onClick={(e) => handleNavClick(e, item.href)}
                className="px-4 py-2 text-sm font-mono text-retro-text/60 hover:text-retro-cyan hover:bg-white/5 rounded-full transition-all ease-fluid"
              >
                {item.label}
              </a>
            ))}
            <div className="w-px h-4 bg-nothing-border mx-2"></div>
            <button 
              onClick={(e) => handleNavClick(e, '#tickets')}
              className={`
                group flex items-center gap-2 rounded-full border border-retro-cyan/30 bg-retro-cyan/10 
                font-mono font-bold text-retro-cyan hover:bg-retro-cyan hover:text-nothing-black 
                transition-all ease-fluid shadow-[0_0_10px_rgba(165,243,252,0.1)] hover:shadow-[0_0_20px_rgba(165,243,252,0.4)]
                ${scrolled ? 'px-4 py-1.5 text-[10px]' : 'px-5 py-2 text-xs'}
              `}
            >
              <Ticket className={`${scrolled ? 'w-2.5 h-2.5' : 'w-3 h-3'}`} />
              GET TICKETS
            </button>
          </div>

          {/* Mobile Toggle Button (High Z-Index to sit above drawer) */}
          <button 
            className="md:hidden relative z-[60] p-2 text-retro-text hover:text-retro-cyan transition-colors focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* Mobile Drawer Navigation (Side Bar) */}
      <div className={`fixed inset-0 z-[55] md:hidden ${mobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 bg-black/80 backdrop-blur-[2px] transition-opacity duration-500 ease-fluid ${mobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Side Drawer */}
          <div 
             className={`
               absolute top-0 right-0 w-[80%] max-w-[320px] h-full bg-nothing-black border-l border-retro-cyan/20 
               shadow-[-20px_0_50px_rgba(0,0,0,0.5)] transform transition-transform duration-500 cubic-bezier(0.23, 1, 0.32, 1)
               flex flex-col z-50
               ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
             `}
          >
             {/* Cyber Decorations */}
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-retro-cyan to-transparent opacity-50"></div>
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-retro-cyan/5 blur-3xl rounded-full pointer-events-none"></div>
             <div className="absolute inset-0 bg-scanlines opacity-10 pointer-events-none"></div>

             {/* Content Container */}
             <div className="flex flex-col h-full pt-28 px-6 pb-8 overflow-y-auto relative z-10">
                
                <div className="flex flex-col space-y-4">
                   {NAV_ITEMS.map((item, idx) => (
                      <a 
                        key={item.label}
                        href={item.href} 
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`
                          group flex items-center justify-between text-lg font-mono font-bold text-white/80 hover:text-retro-cyan 
                          transition-all duration-300 border-b border-white/5 pb-4
                          ${mobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
                        `}
                        style={{ transitionDelay: `${150 + idx * 50}ms` }}
                      >
                         <span className="flex items-center gap-4">
                            <span className="text-xs text-retro-cyan/50 font-normal font-mono">0{idx + 1}</span>
                            {item.label}
                         </span>
                         <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-retro-cyan group-hover:translate-x-1 transition-all" />
                      </a>
                   ))}
                </div>

                <div className="mt-auto space-y-6">
                    {/* Status Box */}
                    <div 
                      className={`
                        p-4 rounded bg-white/5 border border-white/10 transition-all duration-700 delay-300 
                        ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                      `}
                    >
                       <div className="text-[10px] font-mono text-retro-text/40 uppercase mb-2 flex justify-between">
                          <span>System Status</span>
                          <span>V2.0.26</span>
                       </div>
                       <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></div>
                          <span className="text-xs font-mono text-retro-cyan">OPERATIONAL</span>
                       </div>
                    </div>

                    <button 
                      onClick={(e) => handleNavClick(e, '#tickets')}
                      className={`
                        w-full flex items-center justify-center gap-2 px-6 py-4 rounded bg-retro-cyan text-nothing-black font-bold font-mono text-sm 
                        hover:bg-white transition-colors shadow-[0_0_20px_rgba(165,243,252,0.3)] duration-500 delay-200
                        ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                      `}
                    >
                      <Ticket className="w-4 h-4" />
                      GET TICKETS
                    </button>
                </div>
             </div>
          </div>
      </div>
    </>
  );
};

export default Navbar;
