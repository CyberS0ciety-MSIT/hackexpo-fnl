
import React, { useState } from 'react';
import { Logo } from './Logo';
import { CYBER_SOCIETY_LINKS, CRAC_LINKS } from '../constants';
import { CodeOfConductModal } from './CodeOfConductModal';
import { Check, Copy } from 'lucide-react';

const Footer: React.FC = () => {
  const [showCoC, setShowCoC] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

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
                <link.icon className={`w-4 h-4 shrink-0 transition-colors ${link.color.replace('hover:', '')}`} />
                {/* Changed from truncate to break-all/word-break to ensure full visibility */}
                <span className="break-all">{link.name}</span>
             </a>
             <button 
               onClick={(e) => handleCopyEmail(e, email!)}
               className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-retro-text/40 hover:text-retro-cyan transition-colors shrink-0"
               title="Copy Email"
             >
               {isCopied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
             </button>
          </div>
        ) : (
          <a 
            href={link.url} 
            target="_blank" 
            rel="noreferrer"
            className="text-sm text-retro-text/60 hover:text-white flex items-center gap-2 group"
          >
            <link.icon className="w-4 h-4 group-hover:text-retro-cyan transition-colors" />
            {link.name}
          </a>
        )}
      </li>
    );
  };

  return (
    <>
      <footer id="footer" className="bg-nothing-black border-t border-nothing-border relative z-20">
        <div className="max-w-7xl mx-auto px-6 py-20">
          
          {/* Grid Layout: 5 Columns on medium screens to accommodate split contacts */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 border-b border-nothing-border pb-12">
             {/* Brand (Spans 2 columns) */}
             <div className="md:col-span-2 space-y-6">
               <div 
                 className="flex items-center gap-3 cursor-pointer group w-fit" 
                 onClick={(e) => handleNavClick(e, '#home')}
               >
                 <Logo className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
                 <span className="font-bold text-2xl tracking-tighter text-white group-hover:text-retro-cyan transition-colors">HACKEXPO</span>
               </div>
               <p className="text-retro-text/60 max-w-xs font-mono text-sm">
                 Authentic. Secure. Future-proof. <br/>
                 Join the interface.
               </p>
             </div>

             {/* Index Links */}
             <div>
               <h4 className="font-mono text-xs uppercase text-retro-cyan mb-6">Index</h4>
               <ul className="space-y-4">
                 {FOOTER_LINKS.map((link) => (
                   <li key={link.label}>
                     <a 
                       href={link.href}
                       onClick={(e) => handleNavClick(e, link.href)} 
                       className="text-sm text-retro-text/60 hover:text-white hover:underline decoration-retro-cyan underline-offset-4 transition-all"
                     >
                       {link.label}
                     </a>
                   </li>
                 ))}
                 <li>
                   <button 
                     onClick={() => setShowCoC(true)}
                     className="text-sm text-retro-text/60 hover:text-retro-cyan hover:underline decoration-retro-cyan underline-offset-4 transition-all text-left"
                   >
                     Code of Conduct
                   </button>
                 </li>
               </ul>
             </div>

             {/* CyberSociety Contacts */}
             <div>
               <h4 className="font-mono text-xs uppercase text-retro-cyan mb-6">CyberSociety</h4>
               <ul className="space-y-4">
                 {CYBER_SOCIETY_LINKS.map(renderLink)}
               </ul>
             </div>

             {/* CRAC Learning Contacts */}
             <div>
               <h4 className="font-mono text-xs uppercase text-purple-400 mb-6">CRAC Learning</h4>
               <ul className="space-y-4">
                 {CRAC_LINKS.map(renderLink)}
               </ul>
             </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-retro-text/40 uppercase">
             <div className="flex flex-col md:flex-row gap-4 items-center">
               <p>© 2026 HackExpo Security Conf.</p>
               <span className="hidden md:inline text-nothing-border">|</span>
               <button onClick={() => setShowCoC(true)} className="hover:text-retro-cyan transition-colors">
                  Code of Conduct
               </button>
             </div>
             <p>Design: System_Override</p>
          </div>

        </div>
      </footer>
      
      <CodeOfConductModal isOpen={showCoC} onClose={() => setShowCoC(false)} />
    </>
  );
};

export default Footer;
