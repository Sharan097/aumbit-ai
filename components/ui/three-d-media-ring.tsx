'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface MediaItem {
  type: 'video' | 'image';
  src: string;
  title?: string;
}

interface ThreeDMediaRingProps {
  media: MediaItem[];
  cardWidth?: number;
  cardHeight?: number;
  gap?: number;
  perspective?: number;
  rotateY?: number;
  draggable?: boolean;
  className?: string;
}

export default function ThreeDMediaRing({
  media,
  cardWidth = 300,
  cardHeight = 400,
  gap = 50,
  perspective = 1500,
  rotateY = 10,
  draggable = true,
  className,
}: ThreeDMediaRingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [show, setShow] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const dragX = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 200 };
  const x = useSpring(dragX, springConfig);

  // Calculate total content width and drag constraints
  const totalContentWidth = (cardWidth + gap) * media.length - gap;
  
  // Calculate how much we can drag based on container width
  // We want to stop when the last card is visible
  const calculateDragConstraints = () => {
    if (!containerRef.current) return { left: 0, right: 0 };
    
    const viewportWidth = containerRef.current.offsetWidth;
    
    // Calculate the maximum drag distance
    // We subtract viewport width to ensure last card is visible
    const maxDragLeft = -(totalContentWidth - viewportWidth + 100); // +100 for padding
    
    return {
      left: Math.min(maxDragLeft, 0), // Can't drag more than total width
      right: 0, // Can't drag to the right beyond start
    };
  };

  useEffect(() => {
    setShow(true);
    
    // Update container width on mount and resize
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    
    updateWidth();
    window.addEventListener('resize', updateWidth);
    
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const dragConstraints = calculateDragConstraints();

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative w-full h-full overflow-hidden select-none',
        className
      )}
      style={{
        perspective: `${perspective}px`,
      }}
    >
      <motion.div
        drag="x"
        dragConstraints={dragConstraints}
        dragElastic={0.05}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        style={{
          x,
          cursor: draggable ? (isDragging ? 'grabbing' : 'grab') : 'default',
        }}
        className="flex items-center justify-start h-full px-8"
        initial={{ x: 0 }}
      >
        {show &&
          media.map((item, index) => (
            <motion.div
              key={index}
              className="shrink-0 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/30 dark:border-white/10 bg-black"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                transformStyle: 'preserve-3d',
                rotateY: `${rotateY}deg`,
                marginRight: index < media.length - 1 ? `${gap}px` : '0px',
              }}
              initial={{ opacity: 0, y: 50, rotateY: 0 }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: `${rotateY}deg`,
              }}
              whileHover={{
                scale: 1.05,
                rotateY: 0,
                transition: { duration: 0.3 },
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
            >
              {item.type === 'video' ? (
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover pointer-events-none"
                  onLoadedData={(e) => {
                    e.currentTarget.play().catch(() => {
                      // Ignore autoplay errors
                    });
                  }}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.title || ''}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              )}

              {/* Title overlay */}
              {item.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                  <p className="text-white text-sm font-semibold text-center">
                    {item.title}
                  </p>
                </div>
              )}

              {/* Video counter badge */}
              {/* <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-white text-xs font-bold">
                  {index + 1}/{media.length}
                </span>
              </div> */}
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
