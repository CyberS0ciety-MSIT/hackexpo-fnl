
import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => {
  return (
    <img
      src="https://i.postimg.cc/8cmqprCk/New-Project-(2)-(2).png"
      alt="HackExpo Logo"
      className={`object-contain ${className}`}
    />
  );
};
