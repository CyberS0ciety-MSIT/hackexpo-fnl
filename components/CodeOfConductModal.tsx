
import React from 'react';
import { X, ShieldAlert } from 'lucide-react';

interface CodeOfConductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CodeOfConductModal: React.FC<CodeOfConductModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-nothing-black/90 backdrop-blur-md transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Window */}
      <div className="relative w-full max-w-3xl bg-nothing-card border border-nothing-border shadow-[0_0_40px_-10px_rgba(0,0,0,0.8)] flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-nothing-border bg-nothing-dark select-none">
           <div className="flex items-center gap-3">
             <ShieldAlert className="w-5 h-5 text-retro-cyan" />
             <div className="flex flex-col">
               <h3 className="font-mono text-lg font-bold text-white tracking-tight leading-none">CODE_OF_CONDUCT</h3>
               <span className="text-[10px] text-retro-text/40 font-mono">CyberSociety x CRAC Learning</span>
             </div>
           </div>
           <button 
             onClick={onClose} 
             className="text-retro-text/40 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
           >
             <X className="w-5 h-5" />
           </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 text-retro-text/80 font-mono text-sm leading-relaxed custom-scrollbar">
           
           <div>
              <h4 className="text-retro-cyan font-bold mb-3 uppercase tracking-wider text-xs border-b border-retro-cyan/20 pb-1 w-fit">Ethical Hacking Policy</h4>
              <p className="mb-3 text-retro-text/60">HackExpo is a platform for education and ethical exploration. To maintain the integrity of the event:</p>
              <ul className="list-disc pl-5 space-y-2 text-retro-text/60 marker:text-retro-cyan/50">
                <li><strong className="text-white">The "No-Touch" Rule:</strong> Do not target any attendee, speaker, or staff member's device without explicit, written consent.</li>
                <li><strong className="text-white">Live Demos:</strong> If performing a live demonstration, ensure it is conducted within a controlled, sandboxed environment provided or approved by the organizers.</li>
                <li><strong className="text-white">Infrastructure Integrity:</strong> Any unauthorized attempts to access the venue's private network or local infrastructure will be treated as a security breach.</li>
              </ul>
           </div>

           <div>
              <h4 className="text-retro-cyan font-bold mb-3 uppercase tracking-wider text-xs border-b border-retro-cyan/20 pb-1 w-fit">Expected Behavior</h4>
              <p className="mb-3 text-retro-text/60">All attendees, speakers, sponsors, and volunteers are expected to:</p>
              <ul className="list-disc pl-5 space-y-2 text-retro-text/60 marker:text-retro-cyan/50">
                <li><strong className="text-white">Be Respectful:</strong> Exercise consideration and respect in your speech and actions.</li>
                <li><strong className="text-white">Be Professional:</strong> Refrain from demeaning, discriminatory, or harassing behavior.</li>
                <li><strong className="text-white">Collaborate:</strong> Support a learning environment where knowledge sharing is prioritized over ego.</li>
                <li><strong className="text-white">Comply with Venue Rules:</strong> Respect the physical property and safety regulations of the offline venue.</li>
              </ul>
           </div>

           <div>
              <h4 className="text-retro-cyan font-bold mb-3 uppercase tracking-wider text-xs border-b border-retro-cyan/20 pb-1 w-fit">Prohibited Conduct</h4>
              <p className="mb-3 text-retro-text/60">The following behaviors are strictly prohibited at HackExpo:</p>
              <ul className="list-disc pl-5 space-y-2 text-retro-text/60 marker:text-retro-cyan/50">
                <li><strong className="text-white">Harassment:</strong> Offensive verbal comments, deliberate intimidation, stalking, following, or harassing photography/recording.</li>
                <li><strong className="text-white">Unsanctioned Hacking:</strong> Unauthorized exploitation of systems outside of designated CTF (Capture The Flag) or workshop environments.</li>
                <li><strong className="text-white">Disruption:</strong> Sustained disruption of talks, workshops, or networking sessions.</li>
                <li><strong className="text-white">Inappropriate Content:</strong> Use of sexualized images or materials in presentations or booths.</li>
              </ul>
           </div>

           <div>
              <h4 className="text-retro-cyan font-bold mb-3 uppercase tracking-wider text-xs border-b border-retro-cyan/20 pb-1 w-fit">Purpose</h4>
              <p className="text-retro-text/60">HackExpo is dedicated to providing a safe, inclusive, and harassment-free conference experience for everyone, regardless of gender, sexual orientation, disability, physical appearance, body size, race, or religion. We aim to foster a community where security enthusiasts can learn and grow together.</p>
           </div>

           <div>
              <h4 className="text-retro-cyan font-bold mb-3 uppercase tracking-wider text-xs border-b border-retro-cyan/20 pb-1 w-fit">Consequences of Unacceptable Behavior</h4>
              <p className="mb-3 text-retro-text/60">Unacceptable behavior will not be tolerated. Anyone asked to stop is expected to comply immediately. Organizers reserve the right to:</p>
              <ul className="list-disc pl-5 space-y-2 text-retro-text/60 marker:text-retro-cyan/50">
                <li>Issue a formal warning.</li>
                <li>Expel the participant from the conference with no refund.</li>
                <li>Report the incident to local law enforcement if legal boundaries are crossed.</li>
                <li>Permanently ban the individual from future CyberSociety or CRAC Learning events.</li>
              </ul>
           </div>

           <div>
              <h4 className="text-retro-cyan font-bold mb-3 uppercase tracking-wider text-xs border-b border-retro-cyan/20 pb-1 w-fit">Reporting an Incident</h4>
              <p className="mb-3 text-retro-text/60">If you are being harassed or notice someone else is, please contact a member of the HackExpo Staff immediately.</p>
              <ul className="list-disc pl-5 space-y-2 text-retro-text/60 marker:text-retro-cyan/50">
                 <li><strong className="text-white">On-Site:</strong> Staff will be wearing branded "HackExpo Staff" apparel or badges.</li>
                 <li><strong className="text-white">Digital:</strong> Report incidents via [Insert Contact Email/Phone Number].</li>
              </ul>
           </div>
           
           <div>
              <h4 className="text-retro-cyan font-bold mb-3 uppercase tracking-wider text-xs border-b border-retro-cyan/20 pb-1 w-fit">Photography and Media</h4>
              <p className="text-retro-text/60">By attending HackExpo, you acknowledge that the event may be recorded. HackExpo reserves the right to use these materials for promotional purposes. Attendees who do not wish to be photographed should notify the registration desk.</p>
           </div>
        </div>
        
        {/* Footer Actions */}
        <div className="p-6 border-t border-nothing-border bg-nothing-dark flex justify-end">
            <button 
                onClick={onClose}
                className="px-6 py-2 border border-white/10 hover:bg-white/5 text-xs uppercase font-mono transition-colors text-white"
            >
                ACKNOWLEDGE
            </button>
        </div>

      </div>
      
      {/* Scrollbar styling injected via style tag for isolation */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #0A0A0A;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #A5F3FC;
        }
      `}</style>
    </div>
  );
};
