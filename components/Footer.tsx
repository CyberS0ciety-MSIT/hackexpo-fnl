import React, { useState } from 'react';
import { Logo } from './Logo';
import { CYBER_SOCIETY_LINKS, CRAC_LINKS } from '../constants';
import { CodeOfConductModal } from './CodeOfConductModal';
import { Check, Copy, ArrowRight, Terminal, ShieldCheck, Activity } from 'lucide-react';
import { HackerText } from './HackerText';

const Footer: React.FC = () => {
  const [showCoC, setShowCoC] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const [emailInput, setEmailInput] = useState('');

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth"
      });
    } else if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleCopyEmail = (e: React.MouseEvent, email: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  const FOOTER_LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'Memories', href: '#memories' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Register', href: '#tickets' },
  ];

  const renderLink = (link: any) => {
    const isEmail = link.url.startsWith('mailto:');
    const email = isEmail ? link.name : null;
    const isCopied = email && copiedEmail === email;

    return (
      <li key={link.name}>
        {isEmail ? (
          <div className="flex items-center gap-3 group w-full">
            <a
              href={link.url}
              className="text-sm text-retro-text/60 hover:text-white flex items-center gap-2 transition-colors flex-1 min-w-0"
            >
              <div className={`p-1.5 rounded bg-white/5 border border-white/5 group-hover:border-${link.color.split('-')[1] || 'white'}/30 transition-colors`}>
                <link.icon className={`w-3.5 h-3.5 transition-colors ${link.color.replace('hover:', '')}`} />
              </div>
              <span className="break-all font-mono text-xs">{link.name}</span>
            </a>
            <button
              onClick={(e) => handleCopyEmail(e, email!)}
              className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-retro-text/40 hover:text-retro-cyan transition-colors shrink-0 border border-transparent hover:border-retro-cyan/30"
              title="Copy Email"
            >
              {isCopied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        ) : (
          <a
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-retro-text/60 hover:text-white flex items-center gap-3 group"
          >
            <div className="p-1.5 rounded bg-white/5 border border-white/5 group-hover:border-retro-cyan/30 group-hover:bg-retro-cyan/10 transition-all duration-300">
              <link.icon className="w-3.5 h-3.5 group-hover:text-retro-cyan transition-colors" />
            </div>
            <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
          </a>
        )}
      </li>
    );
  };

  return (
    <>
      <footer id="footer" className="bg-nothing-black border-t border-nothing-border relative z-20 overflow-hidden">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-nothing-black via-transparent to-nothing-black pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-12 relative z-10">

          {/* Newsletter / Terminal Section */}
          <div className="mb-20 p-1 rounded-2xl bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-md">
            <div className="bg-nothing-black/80 rounded-xl border border-white/10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">

              {/* Visual Glitch Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-retro-cyan/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-retro-cyan/10 transition-colors duration-500"></div>

              <div className="flex-1 space-y-4 relative z-10">
                <div className="flex items-center gap-2 text-retro-cyan mb-2">
                  <Terminal className="w-4 h-4" />
                  <span className="text-xs font-mono uppercase tracking-widest">System Broadcast</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                  <HackerText text="JOIN THE NEURAL NETWORK" />
                </h3>
                <p className="text-retro-text/60 max-w-md">
                  Subscribe to receive encrypted updates, CTF hints, and exclusive access codes directly to your inbox.
                </p>
              </div>

              <div className="w-full md:w-auto min-w-[320px] relative z-10">
                <div className="flex items-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-xl focus-within:border-retro-cyan/50 focus-within:bg-white/10 transition-all duration-300">
                  <input
                    type="email"
                    placeholder="enter_email_address..."
                    className="bg-transparent border-none text-white placeholder-white/30 text-sm font-mono px-4 py-3 w-full focus:outline-none"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                  <button className="px-6 py-3 bg-retro-cyan text-nothing-black font-bold uppercase text-xs tracking-wider rounded-lg hover:bg-white transition-colors flex items-center gap-2 group/btn">
                    <span>Inject</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
                <div className="flex items-center gap-2 mt-3 pl-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-[10px] font-mono text-green-500/80 uppercase tracking-wider">Gateway Secure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-b border-nothing-border pb-16">

            {/* Brand Column */}
            <div className="lg:col-span-4 space-y-8">
              <div
                className="flex items-center gap-3 cursor-pointer group w-fit"
                onClick={(e) => handleNavClick(e, '#home')}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-retro-cyan/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Logo className="w-12 h-12 relative z-10 transition-transform duration-500 group-hover:rotate-180" />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl tracking-tighter text-white group-hover:text-retro-cyan transition-colors">HACKEXPO</span>
                  <span className="text-[10px] font-mono text-retro-text/50 uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all">Security Conf. 2026</span>
                </div>
              </div>
              <p className="text-retro-text/60 max-w-sm font-mono text-sm leading-relaxed border-l-2 border-white/10 pl-4">
                Authentic. Secure. Future-proof. <br />
                The interface for the next generation of security professionals.
              </p>
              <div className="flex gap-4">
<<<<<<< HEAD
                {/* Discord */}
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#5865F2] hover:border-[#5865F2] hover:bg-[#5865F2]/10 transition-all duration-300 group/icon">
                  <span className="sr-only">Discord</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1892.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.1023.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#0077b5] hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-all duration-300 group/icon">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>

                {/* Twitter (X) */}
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white hover:bg-white/10 transition-all duration-300 group/icon">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>
=======

>>>>>>> test2
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-2">
              <h4 className="font-mono text-xs uppercase text-retro-cyan mb-8 flex items-center gap-2">
                <span className="w-1 h-1 bg-retro-cyan rounded-full"></span>
                Index
              </h4>
              <ul className="space-y-4">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-retro-text/60 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => setShowCoC(true)}
                    className="text-sm text-retro-text/60 hover:text-retro-cyan transition-all text-left hover:translate-x-2 inline-block"
                  >
                    Code of Conduct
                  </button>
                </li>
              </ul>
            </div>

            {/* CyberSociety */}
            <div className="lg:col-span-3">
              <h4 className="font-mono text-xs uppercase text-retro-cyan mb-8 flex items-center gap-2">
                <span className="w-1 h-1 bg-retro-cyan rounded-full"></span>
                CyberSociety
              </h4>
              <ul className="space-y-3">
                {CYBER_SOCIETY_LINKS.map(renderLink)}
              </ul>
            </div>

            {/* CRAC */}
            <div className="lg:col-span-3">
              <h4 className="font-mono text-xs uppercase text-purple-400 mb-8 flex items-center gap-2">
                <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                CRAC Learning
              </h4>
              <ul className="space-y-3">
                {CRAC_LINKS.map(renderLink)}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-mono text-retro-text/40 uppercase">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
              <ShieldCheck className="w-3 h-3 text-green-500" />
              <span className="text-green-500/80">System Normal</span>
              <span className="w-1 h-1 rounded-full bg-white/20 mx-1"></span>
              <span>v2.0.24</span>
            </div>

            <div className="flex flex-col md:flex-row gap-4 items-center">
              <p>© 2026 HackExpo Security Conf.</p>
              <span className="hidden md:inline text-white/10">|</span>
              <p className="hover:text-retro-cyan transition-colors cursor-pointer">Design: System_Override</p>
            </div>
          </div>

        </div>
      </footer>

      <CodeOfConductModal isOpen={showCoC} onClose={() => setShowCoC(false)} />
    </>
  );
};

export default Footer;
