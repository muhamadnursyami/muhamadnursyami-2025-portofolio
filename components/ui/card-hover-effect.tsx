'use client';

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

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

  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={item.title}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className={cn(
                  "absolute inset-0 h-full w-full bg-white dark:bg-slate-800/[0.8] block rounded-2xl",
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
      {/* Tanpa nested div yang mengganggu centering */}
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
        "text-[#3c81f0] font-bold tracking-wide text-sm sm:text-base",
        className
      )}
    >
      {children}
    </h4>
  );
};
