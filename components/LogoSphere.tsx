
import React, { useEffect, useRef, useState, useMemo } from 'react';

interface LogoSphereProps {
  items: any[];
  renderItem: (item: any, index: number, scale: number, opacity: number) => React.ReactNode;
  radius?: number; // Base radius for mobile
  speed?: number;
  className?: string;
}

export const LogoSphere: React.FC<LogoSphereProps> = ({ 
  items, 
  renderItem, 
  radius = 200, 
  speed = 0.002,
  className = "" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // Initial distribution (Fibonacci Sphere)
  const points = useMemo(() => {
    const p = [];
    const phi = Math.PI * (3 - Math.sqrt(5));
    const n = items.length;
    
    for (let i = 0; i < n; i++) {
      const y = 1 - (i / (n - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = phi * i;
      
      const x = Math.cos(theta) * r;
      const z = Math.sin(theta) * r;
      
      p.push({ x, y, z, item: items[i], originalIndex: i });
    }
    return p;
  }, [items]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        // Calculate mouse position relative to center of sphere container
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Normalize: -1 to 1
        const x = (e.clientX - centerX) / (rect.width / 2);
        const y = (e.clientY - centerY) / (rect.height / 2);
        
        mouseRef.current = { x, y };
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const animate = (time: number) => {
    setRotation(prev => {
       // Base auto-rotation
       let dy = speed; // Yaw (around Y axis)
       let dx = speed * 0.5; // Pitch (around X axis)
       
       // Mouse influence
       if (isHovering) {
           // When hovering, rotate towards mouse direction
           dy += mouseRef.current.x * 0.02;
           dx -= mouseRef.current.y * 0.02;
       } else {
           // Gentle floating drift when not hovering
           dy = speed;
           dx = Math.sin(time * 0.001) * 0.001;
       }

       return {
         x: prev.x + dx,
         y: prev.y + dy
       };
    });
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [speed, isHovering]);

  // Render calculation
  const projectedPoints = points.map((point, i) => {
     // Rotation Matrix
     const cx = Math.cos(rotation.x);
     const sx = Math.sin(rotation.x);
     const cy = Math.cos(rotation.y);
     const sy = Math.sin(rotation.y);
     
     // Rotate around Y first
     let x = point.x * cy - point.z * sy;
     let z = point.x * sy + point.z * cy;
     let y = point.y;

     // Rotate around X
     let y2 = y * cx - z * sx;
     let z2 = y * sx + z * cx;
     
     // Final 3D Coords
     const pX = x;
     const pY = y2;
     const pZ = z2;

     // Perspective Projection
     // Camera is at z = 2 (relative to radius 1)
     const perspective = 2; 
     const scale = perspective / (perspective - pZ); 
     
     // Visibility/Opacity based on depth (Z)
     // Z goes from approx -1 (back) to 1 (front) after rotation
     const opacity = Math.max(0.1, Math.min(1, (pZ + 1.2) / 2.2));
     const zIndex = Math.floor(scale * 100);

     return {
        ...point,
        x2d: pX * radius * scale, 
        y2d: pY * radius * scale,
        scale,
        opacity,
        zIndex,
        depth: pZ
     };
  });

  // Sort by depth so front items render on top of back items
  projectedPoints.sort((a, b) => a.depth - b.depth);

  return (
    <div 
        ref={containerRef} 
        className={`relative flex items-center justify-center touch-none ${className}`} 
        style={{ height: radius * 2.5, width: '100%', minHeight: '400px' }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
    >
      {projectedPoints.map((p, i) => (
         <div
           key={i}
           className="absolute top-1/2 left-1/2 will-change-transform flex items-center justify-center backface-hidden"
           style={{
             transform: `translate3d(-50%, -50%, 0) translate3d(${p.x2d}px, ${p.y2d}px, 0) scale(${p.scale})`,
             opacity: p.opacity,
             zIndex: p.zIndex,
           }}
         >
           {renderItem(p.item, i, p.scale, p.opacity)}
         </div>
      ))}
    </div>
  );
};
