import React, { useState, useEffect, useRef } from 'react';

interface HackerTextProps {
  text: string;
  className?: string;
  speed?: number;
  scrambleSpeed?: number;
  revealDelay?: number;
  startOnView?: boolean;
}

export const HackerText: React.FC<HackerTextProps> = ({ 
  text, 
  className = "", 
  scrambleSpeed = 30,
  revealDelay = 0,
  startOnView = true
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

  useEffect(() => {
    // If we shouldn't wait for view, start immediately (with delay)
    if (!startOnView) {
      const timer = setTimeout(() => setIsRevealed(true), revealDelay);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsRevealed(true), revealDelay);
        observer.disconnect();
      }
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [revealDelay, startOnView]);

  useEffect(() => {
    if (!isRevealed) {
        // Initial state: random chars of same length
        setDisplayText(text.split('').map(() => chars[Math.floor(Math.random() * chars.length)]).join(''));
        return;
    }

    let interval: any;
    let iteration = 0;
    
    interval = setInterval(() => {
      setDisplayText(prev => 
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      
      iteration += 1 / 3; 
    }, scrambleSpeed);

    return () => clearInterval(interval);
  }, [isRevealed, text, scrambleSpeed]);

  return (
    <span ref={elementRef} className={`${className}`}>
      {displayText}
    </span>
  );
};
