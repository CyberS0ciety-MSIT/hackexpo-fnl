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
    if (isRevealed) {
      setDisplayText(text);
    } else {
      setDisplayText('');
    }
  }, [isRevealed, text]);

  return (
    <span ref={elementRef} className={`${className} transition-opacity duration-500 ${isRevealed ? 'opacity-100' : 'opacity-0'}`}>
      {displayText}
    </span>
  );
};
