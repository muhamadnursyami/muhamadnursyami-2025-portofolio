'use client';

import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'motion/react';

// 🔥 GSAP & ScrollTrigger
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    icon: React.ReactNode;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  // 🪄 Scroll-triggered animation: tilt + blur reveal (beda dari zoom)
  useEffect(() => {
    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.skill-card');

      cards.forEach((el, i) => {
        // Reveal ketika card masuk viewport
        gsap.fromTo(
          el,
          { opacity: 0, y: 24, rotateX: -10, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: 'blur(0px)',
            duration: reduceMotion ? 0.001 : 0.7,
            ease: 'power3.out',
            delay: reduceMotion ? 0 : i * 0.04, // sedikit stagger
            clearProps: 'transform,filter,opacity',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none reverse', // reverse saat keluar
            },
          }
        );

        // Parallax halus saat discroll melewati card
        if (!reduceMotion) {
          gsap.to(el, {
            y: -8,
            rotateY: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top 70%',
              end: 'bottom top',
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={cn(
        'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 py-10',
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full skill-card will-change-transform"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={cn(
                  'absolute inset-0 h-full w-full bg-white dark:bg-slate-800/[0.8] block rounded-2xl'
                )}
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            {/* Kontainer tengah untuk icon dan title */}
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="text-[#3c81f0]">{item.icon}</div>
              <CardTitle>{item.title}</CardTitle>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `
        rounded-2xl h-full w-full p-4 bg-white 
        border-2 border-black 
        shadow-[6px_6px_0px_0px_#2f6ad0]
        dark:shadow-[6px_6px_0px_0px_#2f6ad0]
        group-hover:border-slate-700 
        transition-all duration-300 ease-in-out
        relative z-20 
        group-hover:translate-x-1 group-hover:translate-y-1
        flex items-center justify-center
      `,
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        'text-[#3c81f0] font-bold tracking-wide text-sm sm:text-base',
        className
      )}
    >
      {children}
    </h4>
  );
};
