
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <img 
      src="https://i.ibb.co/nMNCvNHg/Meow.png" 
      alt="HackExpo Logo" 
      className={`object-contain ${className}`}
    />
  );
};
