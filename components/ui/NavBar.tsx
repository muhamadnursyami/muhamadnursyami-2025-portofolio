import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconSchool,
  IconCode,
  IconHome,
  IconBriefcase,
  IconBulb,
  IconMail,
} from "@tabler/icons-react";

export function Navbar() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#hero",
    },
    {
      title: "Experience",
      icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#experience",
    },
    {
      title: "Education",
      icon: <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#education",
    },
    {
      title: "Projects",
      icon: <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#projects",
    },
    {
      title: "Skills",
      icon: <IconBulb className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#skills",
    },
    {
      title: "Contact Us",
      icon: <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#footer",
    },
  ];

  return (
    <div className="fixed left-[90%] translate-x-[-90%] md:left-[50%] md:translate-x-[-50%] bottom-[50px] z-[101]">
      <FloatingDock items={links} />
    </div>
  );
}
