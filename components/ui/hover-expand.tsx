'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ImageItem {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

interface HoverExpandProps {
  images: ImageItem[];
  className?: string;
}

export function HoverExpand({ images, className }: HoverExpandProps) {
  const [activeImage, setActiveImage] = useState<number | null>(0);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.2,
      }}
      className={cn('relative w-full max-w-7xl mx-auto px-4', className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full overflow-x-auto scrollbar-hide"
      >
        <div className="flex w-full min-w-max items-center justify-center gap-2 py-4">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              initial={{ width: '4rem', height: '20rem' }}
              animate={{
                width: activeImage === index ? '28rem' : '5rem',
                height: '28rem',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              onClick={() => setActiveImage(index)}
              onMouseEnter={() => setActiveImage(index)}
            >
              {/* Gradient Overlay */}
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10"
                  />
                )}
              </AnimatePresence>

              {/* Content Overlay */}
              <AnimatePresence>
                {activeImage === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="absolute inset-0 flex flex-col items-start justify-end p-6 z-20"
                  >
                    {image.title && (
                      <h4 className="text-white font-bold text-xl mb-2">
                        {image.title}
                      </h4>
                    )}
                    {image.description && (
                      <p className="text-white/90 text-sm leading-relaxed">
                        {image.description}
                      </p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
