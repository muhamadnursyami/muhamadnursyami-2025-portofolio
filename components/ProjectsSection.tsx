"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import BlurText  from '@/components/BlurText/BlurText';
import { LinkPreview } from "@/components/ui/link-preview";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
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

  // 🪄 ScrollTrigger for zoom in/out each project card
  useEffect(() => {
    const mm = gsap.matchMedia();

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");

      cards.forEach((el) => {
        // Initial reveal: zoom in + fade + lift
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.9, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: reduceMotion ? 0.001 : 0.8,
            ease: "power3.out",
            clearProps: "transform,opacity",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none reverse", // zoom in when entering, zoom out when leaving
              once: false,
            },
          }
        );

        // Subtle dynamic zoom while scrolling through the card (optional but nice)
        if (!reduceMotion) {
          gsap.to(el, {
            scale: 1.02,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 70%",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    });

    return () => {
      ctx.revert();
      mm.revert();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

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
                  width={1200}
                  height={800}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-auto object-contain object-top"
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
              url={card.ctaLink}
              isStatic={true}
              imageSrc={card.src}
              width={200}
              height={125}
              quality={80}
              className="block"
            >
              <motion.div
                layoutId={`card-${card.title}-${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  setActive(card);
                }}
                className="project-card will-change-transform p-10 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer"
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
                  <div className="flex flex-col justify-start  items-start lg:text-start text-center">
                    <motion.h3
                      layoutId={`title-${card.title}-${id}`}
                      className="font-medium text-neutral-800 dark:text-neutral-200 text-2xl "
                    >
                      {card.title}
                    </motion.h3>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-1 mt-2 items-center justify-center md:justify-start">
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
    title: "Mobile App for Identifying Mangrove Species",
    description: "Mobile Application for Identifying Mangrove Species Using Deep Learning Faster R-CNN Algorithm.",
    stack: ["Deep Learning", "React Native", "Typescript", "FastAPI", "Docker"],
    uiStack: ["", ""],
    src: "https://i.imgur.com/8sfypcx.jpeg",
    ctaText: "Read More",
    ctaLink: "",
    content: () => (
      <p>
          This application is designed to identify mangrove species using object detection techniques in deep learning, 
          specifically by implementing the Faster R-CNN algorithm. 
          It is developed as part of my undergraduate thesis project.
        </p>
    ),
  },
  {
    title: "Dungong App",
    description: "Application for Dungong Conservation and Education",
    stack: ["Laravel12", "GIS", "ReactJS", "Typescript", "MySQL"],
    uiStack: ["", ""],
    src: "https://i.imgur.com/QeGHoKd.png",
    ctaText: "Read More",
    ctaLink: "",
    content: () => (
      <p>
         This application is designed to support the conservation and education of the Dugon.
        </p>
    ),
  },
  {
    title: "AMI App",
    description: "Application for System Audit Mutu Internal",
    stack: ["Codeigniter", "MySQL"],
    uiStack: ["", ""],
    src: "https://i.imgur.com/48hSMxm.png",
    ctaText: "Read More",
    ctaLink: "https://siaudi.umrah.ac.id/",
    content: () => (
      <p>
         This application is Internal Quality Audit System for an institution at Raja Ali Haji Maritime University (UMRAH), Tanjung Pinang
        </p>
    ),
  },
  {
    title: "PixelPivortEngine",
    description: "Game Enginer develop using Java",
    stack: ["Java"],
    uiStack: ["", ""],
    src: "https://i.imgur.com/co52Lut.png",
    ctaText: "Read More",
    ctaLink: "",
    content: () => (
      <p>
         This is a game engine developed using Java, designed to create 2D games with pixel art style.
      </p>
    ),
  },
  {
    title: "LiterasiKita App",
    description: "Application for Literacy Program",
    stack: ["ReactJS", "TailwindCSS", "ExpressJS", "MongoDB", "Midtrans"],
    uiStack: ["", ""],
    src: "https://i.imgur.com/Ry8cCLH.png",
    ctaText: "Read More",
    ctaLink: "https://literasikita.netlify.app",
    content: () => (
      <p>
          Literasi Kita, an application that provides online books and learning videos to foster reading interest among children under 18. The app enables easy access without the need to purchase physical books.
      </p>
    ),
  },
  {
    title: "FlightGo App",
    description: "Application for Booking Ticket Flight",
    stack: ["React Native", "RestAPI", "ExpressJS", "MySQL" ],
    uiStack: ["", ""],
    src: "https://i.imgur.com/gK3xC3z.png",
    ctaText: "Read More",
    ctaLink: "",
    content: () => (
      <p>
          Literasi Kita, an application  for booking ticket flight
      </p>
    )
  },
  {
    title: "SICERDIK",
    description: "Application for Education ",
    stack: ["ReactJS", "RestAPI", "ExpressJS", "MongoDB" ],
    uiStack: ["", ""],
    src: "https://i.imgur.com/3fB6Ps3.png",
    ctaText: "Read More",
    ctaLink: "https://sicerdik.tanjungpinangkota.go.id",
    content: () => (
      <p>
         Creating SICERDIK, a web-based platform that simplifies and digitizes the student school transfer process.
      </p>
    )
  },
  {
    title: "Portal DISKOMINFO",
    description: "Application for Diskominfo Provinsi Kepulauan Riau",
    stack: ["NextJS", "RestAPI", "Laravel", "MySQL", "Typescript" ],
    uiStack: ["", ""],
    src: "https://i.imgur.com/qvF2RQ9.png",
    ctaText: "Read More",
    ctaLink: "",
    content: () => (
      <p>
          Developing the provincial portal website, built an online internship registration system, and collaborated with the team to create OPD templates for institutional use
      </p>
    )
  },
];
