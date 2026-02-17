import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds before animation starts
}

/**
 * ScrollReveal Component
 * 
 * A wrapper component that triggers a "hacker-reveal" animation when 
 * the element enters the viewport. It uses the Intersection Observer API.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Initialize IntersectionObserver to detect when element enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When element is visible
        if (entry.isIntersecting) {
          // Calculate delay: use prop if provided, otherwise add a tiny random factor
          // for a more organic, "glitchy" feel when multiple elements appear at once.
          const finalDelay = delay || Math.random() * 100;

          setTimeout(() => {
            setIsVisible(true);
          }, finalDelay);

          // Stop observing once the animation has been triggered
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
        rootMargin: "50px", // Start slightly before the element enters the viewport
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup observer on unmount
    return () => {
      if (ref.current) observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      // Apply base 'hacker-reveal' class (defined in global CSS) and 'active' state
      className={`hacker-reveal ${isVisible ? 'active' : ''} ${className}`}
    >
      {children}
    </div>
  );
};