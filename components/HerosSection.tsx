import { Cover } from "@/components/ui/cover";
import Image from "next/image";
import Link from "next/link";
import { Button } from '@/components/ui/button'
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Spotlight } from "@/components/ui/spotlight-new";
import GlareHover from "./GlareHover/GlareHover";

export default function HerosSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black" id="hero">
      <Spotlight/>
      <div className="container mx-auto">
        <Spotlight/>
        <div className="w-full overflow-x-hidden min-h-screen grid lg:grid-cols-[1fr_0.6fr_0.4fr] gap-[20px]">
            <div className="max-w-[600px] w-[90%] mx-auto py-[30px] animate-fade-right animate-delay-500 z-[1]">
              <Link href="/">
                <Image src="/images/logo2.png" width={120} height={80} alt="logo" className="max-h-[80px] h-full object-contain object-center" />  
              </Link>
              <div className="flex flex-col justify-center h-[90%] text-center   md:text-start">
                  <span className="text-[#5294ff] font-[600]">Hi, There</span>
                  <h2 className="bg-clip-text text-transparent md:text-start bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans  relative z-20 font-bold tracking-tight">
                    M. Nur Syami, <br /> <Cover>Software Engineer.</Cover> 
                  </h2>
                  <p className="max-w-xl mx-auto text-sm text-center  md:text-lg py-2 md:py-10 text-neutral-700 dark:text-neutral-400 md:text-start ">
                    I am a passionate Fullstack Software Engineer from Indonesia with experience in building   Web and Mobile Applications 
                  </p>
                  <Link href="/Software_Engineer_MuhamadNurSyami_2025.pdf" target="_blank">
                    <Button variant="default" className="font-bold mb-3 md:mb-0">My Resume &rarr;</Button>
                  </Link>
                  
              </div>
            </div>  
            <div className="w-full h-full  flex items-end animate-jump-in animate-delay-400 z-[10]">
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                borderColor="#000000"
                width="100%"
              >

              <Image  src="/images/model.png" width={800} height={1200} alt="model" className="w-full max-h-[90vh] object-contain object-bottom " />  
              </GlareHover>
            </div>  
            <div className="w-[90%] mx-auto py-[30px] flex flex-col items-center z-2 animate-fade-left animate-delay-500">
              <Link href="mailto:nursami385@gmail.com"> 
              <Button className="font-bold mb-1">
                  Contact Me &rarr;
              </Button>
              </Link>
              <h2 className="bg-clip-text mt-[50px] lg:mt-[10px] text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl md:text-2xl lg:text-2xl font-sans relative z-20 font-bold tracking-tight">
              About Me
              </h2>
              <p className="max-w-xl mx-auto text-sm md:text-md text-neutral-700 dark:text-neutral-400 text-justify mt-[5px]">
               I am a fresh graduate with a Bachelor&apos; degree in Informatics Engineering from Universitas Maritim Raja Ali Haji. I am capable of working effectively both independently and in a team environment. 
              </p>
              <p className="max-w-xl mx-auto text-sm md:text-md text-neutral-700 dark:text-neutral-400 text-justify mt-[5px]">
                I have hands-on experience in frontend development using React.js and Next.js, as well as backend development with Express.js and Node.js. My database expertise includes MySQL, MongoDB, and PostgreSQL.
              </p>
              <p className="max-w-xl mx-auto text-sm md:text-md text-neutral-700 dark:text-neutral-400 text-justify mt-[5px]">
                On the fullstack side, I have worked with CodeIgniter and Laravel, and in the DevOps with Docker. I have also been directly involved in developing mobile applications using React Native. I am highly passionate about technology and continuously eager to learn and adapt to the latest technology.
              </p>
            </div>
            <ShootingStars  className="z-[0]"/>  
            <StarsBackground className="z-[0]"/>  
        </div>
      </div>
    </div>
  );
}
