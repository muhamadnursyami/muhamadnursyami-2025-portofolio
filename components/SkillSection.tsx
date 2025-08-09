import { HoverEffect } from "./ui/card-hover-effect";
import { SiJavascript, SiTypescript, SiDocker, SiCodeigniter, SiExpress, SiMysql, SiRedux } from "react-icons/si";
import ScrollFloat  from "./ScrollFloat/ScrollFloat";
import { FaGitAlt, FaGithub, FaHtml5, FaLaravel, FaNodeJs, FaPhp, FaPython, FaVuejs } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa6";
import { TbBrandGolang, TbBrandNextjs, TbJson } from "react-icons/tb";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { BsFillBootstrapFill } from "react-icons/bs";
import { DiMongodb } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { BubbleBackground } from '@/components/animate-ui/backgrounds/bubble';
export default function SkillSection() {
  return (
    <div className="relative mt-[100px] min-h-screen w-full overflow-hidden" id="skills">
    <BubbleBackground
        interactive
        className="absolute inset-0 z-0"
        colors={{
    first: '15,15,15',   // Hitam pekat
    second: '30,30,30',  // Abu-abu sangat gelap
    third: '50,50,50',   // Abu-abu gelap
    fourth: '80,80,80',  // Abu-abu medium
    fifth: '110,110,110',// Abu-abu terang
    sixth: '160,160,160' // Abu-abu muda (highlight lembut)
  }}
      />
    <div className="relative z-10 flex flex-col" >
        <div className="px-8 flex flex-col  justify-start md:justify-center md:items-center ">
            <ScrollFloat
                animationDuration={1.2}
                ease="back.inOut(2)"
                scrollStart="top bottom+=10%"
                scrollEnd="bottom center"
                stagger={0.08}
                textClassName="text-2xl md:text-4xl lg:text-6xl font-sans relative z-20 font-bold tracking-tight"
            >
                {"Tech Stack That I Use"}
            </ScrollFloat>

            
        </div>
        <div className="max-w-5xl mx-auto px-8">
            <HoverEffect items={skills} />
        </div>
    </div>
    </div>
   
  );
}

export const skills = [
  {
    title: "HTML",
    icon: <FaHtml5 size={40} />,
  },
  {
    title: "CSS",
    icon: <FaCss3 size={40} />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size={40} />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript size={40} />,
  },
  {
    title: "Docker",
    icon: <SiDocker size={40} />,
  },
  {
    title: "PHP",
    icon: <FaPhp size={40} />,
  },
  {
    title: "Golang",
    icon: <TbBrandGolang size={40} />,
  },
  {
    title: "ReactJS",
    icon: <RiReactjsLine size={40} />,
  },
  {
    title: "VueJS",
    icon: <FaVuejs size={40} />,
  },
  {
    title: "NextJS",
    icon: <TbBrandNextjs size={40} />,
  },
  {
    title: "Laravel",
    icon: <FaLaravel size={40} />,
  },
  {
    title: "Codeigniter",
    icon: <SiCodeigniter size={40} />,
  },
  {
    title: "ExpressJS",
    icon: <SiExpress  size={40} />,
  },
  {
    title: "NodeJS",
    icon: <FaNodeJs size={40} />,
  },
  {
    title: "TailwindCSS",
    icon: <RiTailwindCssFill size={40} />,
  },
  {
    title: "BootstrapCSS",
    icon: <BsFillBootstrapFill size={40} />,
  },
  {
    title: "MongoDB",
    icon: <DiMongodb size={40} />,
  },
  {
    title: "MySQL",
    icon: <SiMysql size={40} />,
  },
  {
    title: "PostgreSQL",
    icon: <BiLogoPostgresql size={40} />,
  },
  {
    title: "Python",
    icon: <FaPython  size={40} />,
  },
  {
    title: "Redux",
    icon: <SiRedux size={40} />,
  },
  {
    title: "RESTful APIs",
    icon: <TbJson size={40} />,
  },
  {
    title: "Git",
    icon: <FaGitAlt size={40} />,
  },
  {
    title: "Github",
    icon: <FaGithub size={40} />,
  },
  
];