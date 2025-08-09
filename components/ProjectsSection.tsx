"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BlurText  from '@/components/BlurText/BlurText';
import { LinkPreview } from "@/components/ui/link-preview";

export default function ProjectsSection() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div className="mt-[70px] mb-[30px] flex flex-col" id="projects">
         <div className="px-8 flex flex-col  justify-start md:justify-center md:items-center">
          <BlurText
            text="It&apos;s My Projects"
            delay={150}
            animateBy="words"
            direction="top"
            className="bg-clip-text text-transparent text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-6xl font-sans  relative z-20 font-bold tracking-tight"
          />
              
              
         </div>
      </div>
      {/* Background Blur */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      {/* Modal Detail */}
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[105]">
            {/* Close Button for Mobile */}
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              {/* Image */}
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 object-cover object-top"
                />
              </motion.div>

              <div>
                {/* Title + Description */}
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200 text-lg"
                    >
                      {active.title}
                    </motion.h3>

                    {/* Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {active.stack.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-[#5294ff] text-black border-1 border-[#131313] px-2 py-1 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    

                   
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-[#5294ff] border-3 border-[#131313] text-black"
                  >
                    Website
                  </motion.a>
                </div>

                {/* Content */}
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      {/* List */}
      
      <ul className="max-w-4xl mx-auto w-full gap-4">
        {cards.map((card) => (
        <LinkPreview
            key={`card-${card.title}-${id}`}
            url={card.ctaLink} // URL link
            isStatic={true} // Gunakan gambar statis
            imageSrc={card.src} // Gambar sesuai card
            width={200}
            height={125}
            quality={80}
            className="block"
          >
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              onClick={(e) => {
                e.preventDefault(); // cegah LinkPreview melakukan redirect
                setActive(card); // buka modal detail
              }}
              className="p-10 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col justify-between items-center md:flex-row">
                {/* Image */}
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={200}
                    height={200}
                    src={card.src}
                    alt={card.title}
                    className="h-40 w-40 md:h-28 md:w-28 rounded-lg object-cover object-top"
                  />
                </motion.div>

                {/* Info */}
                <div className="flex flex-col justify-center items-center text-start">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-800 dark:text-neutral-200 text-2xl"
                  >
                    {card.title}
                  </motion.h3>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-1 mt-1">
                    {card.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-[#5294ff] text-black border-1 border-[#131313] px-3 py-1 text-[13px] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <Button className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-[#5294ff] hover:border-2 hover:border-[#1a1a1b] text-black mt-4 md:mt-0">
                {card.ctaText}
              </Button>
            </motion.div>
          </LinkPreview>
      ))}
      </ul>

    </>
  );
}

export const CloseIcon = () => (
  <motion.svg
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{
      opacity: 0,
      transition: { duration: 0.05 },
    }}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-black"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </motion.svg>
);

// Data
const cards = [
  {
    title: "Summertime Sadness",
    description: "Lana Del Rey",
    stack: ["React", "Next.js", "TailwindCSS"],
    uiStack: ["Framer Motion", "Shadcn UI"],
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
    ),
  },
  {
    title: "Mitran Di Chhatri",
    description: "Babbu Maan",
    stack: ["Vue", "Nuxt", "TailwindCSS"],
    uiStack: ["Vuetify", "GSAP"],
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Read More",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => (
      <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
    ),
  },
];
