
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown, Pause, Play } from 'lucide-react';

interface Carousel3DProps {
  items: any[];
  renderItem: (item: any, isActive: boolean) => React.ReactNode;
  cellWidth: number;
  cellHeight: number;
  autoRotateInterval?: number; // For stepped mode
  continuous?: boolean; // New: Enable fluid continuous rotation
  speed?: number; // New: Rotation speed in degrees per frame
  perspective?: number;
  gap?: number;
  axis?: 'x' | 'y';
  className?: string;
}

export const Carousel3D: React.FC<Carousel3DProps> = ({
  items,
  renderItem,
  cellWidth,
  cellHeight,
  autoRotateInterval = 3000,
  continuous = false,
  speed = 0.1,
  perspective = 1000,
  gap = 20,
  axis = 'y',
  className = ""
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const itemCount = items.length;
  const theta = 360 / itemCount;
  const isVertical = axis === 'x';
  const sideLength = isVertical ? cellHeight : cellWidth;
  const radius = Math.round((sideLength + gap) / 2 / Math.tan(Math.PI / itemCount));

  const autoRotateTimer = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  // --- Stepped Logic ---
  const next = useCallback(() => setSelectedIndex(prev => prev + 1), []);
  const prev = useCallback(() => setSelectedIndex(prev => prev - 1), []);

  useEffect(() => {
    if (!continuous && !isPaused && itemCount > 1) {
      autoRotateTimer.current = window.setInterval(next, autoRotateInterval);
    }
    return () => {
      if (autoRotateTimer.current !== null) window.clearInterval(autoRotateTimer.current);
    };
  }, [continuous, isPaused, next, autoRotateInterval, itemCount]);

  // --- Continuous Logic ---
  useEffect(() => {
    if (continuous) {
      const loop = () => {
        if (!isPaused) {
           setRotation(prev => prev + speed);
        }
        animationFrameRef.current = requestAnimationFrame(loop);
      };
      animationFrameRef.current = requestAnimationFrame(loop);
    }
    return () => {
      if (animationFrameRef.current !== null) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [continuous, isPaused, speed]);

  // Determine current angle and active index based on mode
  const currentAngle = continuous ? rotation : selectedIndex * theta;
  
  const activeIndex = continuous 
    ? ((Math.round(rotation / theta) % itemCount) + itemCount) % itemCount
    : ((selectedIndex % itemCount) + itemCount) % itemCount;

  // Handle Edge Case: 0 or 1 item
  if (!items || items.length === 0) {
    return <div className="p-8 text-center text-retro-text">No data available.</div>;
  }

  return (
    <div 
      className={`relative flex flex-col items-center justify-center ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      aria-roledescription="carousel"
      role="region"
    >
      <div 
        className="scene relative overflow-visible"
        style={{
          width: cellWidth,
          height: cellHeight,
          perspective: `${perspective}px`
        }}
      >
        <div 
          className="carousel w-full h-full absolute ease-[cubic-bezier(0.19,1,0.22,1)]"
          style={{
            transformStyle: 'preserve-3d',
            transform: `translateZ(-${radius}px) ${isVertical ? 'rotateX' : 'rotateY'}(${-currentAngle}deg)`,
            // Disable transition for continuous mode to ensure smooth frame-by-frame updates
            transition: continuous ? 'none' : 'transform 1s'
          }}
        >
          {items.map((item, index) => {
             const isActive = activeIndex === index;

             return (
               <div
                 key={index}
                 className={`carousel-cell absolute left-0 top-0 w-full h-full backface-hidden transition-all duration-300 group ${isActive ? 'opacity-100 z-10 scale-100' : 'opacity-40 z-0 scale-95 hover:opacity-100 hover:scale-110 hover:z-20'}`}
                 style={{
                   transform: `${isVertical ? 'rotateX' : 'rotateY'}(${index * theta}deg) translateZ(${radius}px)`,
                 }}
                 aria-hidden={!isActive}
               >
                 <div className="w-full h-full pointer-events-auto">
                    {renderItem(item, isActive)}
                 </div>
                 
                 {/* Glass overlay for inactive items, hidden on hover */}
                 {!isActive && (
                    <div className="absolute inset-0 bg-nothing-black/60 backdrop-blur-[1px] transition-all duration-300 group-hover:opacity-0 pointer-events-none" />
                 )}
               </div>
             );
          })}
        </div>
      </div>

      {/* Controls (Only show for stepped mode or manual override) */}
      {!continuous && itemCount > 1 && (
        <div className="flex items-center gap-6 mt-12 z-20">
          <button 
            onClick={prev}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-retro-cyan/20 hover:border-retro-cyan transition-all duration-300 group"
          >
            {isVertical ? <ChevronUp className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>

          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-3 rounded-full bg-retro-cyan/10 border border-retro-cyan/30 text-retro-cyan hover:bg-retro-cyan/20 transition-all duration-300"
          >
            {isPaused ? <Play className="w-5 h-5 ml-0.5" /> : <Pause className="w-5 h-5" />}
          </button>

          <button 
            onClick={next}
            className="p-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-retro-cyan/20 hover:border-retro-cyan transition-all duration-300 group"
          >
            {isVertical ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </button>
        </div>
      )}
      
      {/* Continuous Controls (Minimal) */}
      {continuous && (
         <div className="mt-8 z-20 opacity-0 hover:opacity-100 transition-opacity">
            <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-2 rounded-full bg-black/50 border border-white/10 text-white/50 hover:text-white"
            >
             {isPaused ? <Play className="w-4 h-4 ml-0.5" /> : <Pause className="w-4 h-4" />}
            </button>
         </div>
      )}
    </div>
  );
};
