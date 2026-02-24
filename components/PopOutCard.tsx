
import React from 'react';

interface PopOutCardProps {
  children: React.ReactNode;
  className?: string;
  depth?: number;
}

export const PopOutCard: React.FC<PopOutCardProps> = ({ children, className = "", depth = 40 }) => {
  return (
    <div className={`relative w-full h-full ${className}`} style={{ perspective: '1000px' }}>
      <div 
        className="w-full h-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform-style-preserve-3d hover:z-50"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        <div 
          className="w-full h-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
          style={{
            transformOrigin: 'center center',
          }}
        >
           {/* Hover Trigger Layer */}
           <div 
             className="absolute inset-0 z-10"
             onMouseEnter={(e) => {
               const target = e.currentTarget.parentElement;
               if (target) {
                 target.style.transform = `translateZ(${depth}px) scale(1.05)`;
               }
             }}
             onMouseLeave={(e) => {
               const target = e.currentTarget.parentElement;
               if (target) {
                 target.style.transform = 'translateZ(0px) scale(1)';
               }
             }}
           ></div>

           {/* Content */}
           <div className="w-full h-full pointer-events-none">
             {children}
           </div>
        </div>
      </div>
    </div>
  );
};
