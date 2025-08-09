import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function ExperienceSection() {
  const data = [
    {
      title: "September 2025 - Present",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
              <h4 className="text-[#f4f4f4] text-2xl font-[600] ">Freelancing</h4>
              <span className="text-[#5294ff] my-[10px]">Software Engineer</span>
              <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Built and launched Aceternity UI and Aceternity UI Pro from scratch
              </p>
          </div>
          <div>
              <h4 className="text-[#f4f4f4] text-2xl font-[600] ">Freelancing</h4>
              <span className="text-[#5294ff] my-[10px]">Software Engineer</span>
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Card grid component
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Startup template Aceternity
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Random file upload lol
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Himesh Reshammiya Music CD
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Salman Bhai Fan Club registrations open
                </div>
              </div>
          </div>
          
          
        </div>
      ),
    },
    {
      title: "September 2024 - Oktober 2025",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
              <h4 className="text-[#f4f4f4] text-2xl font-[600] ">Freelancing</h4>
              <span className="text-[#5294ff] my-[10px]">Software Engineer</span>
              <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Built and launched Aceternity UI and Aceternity UI Pro from scratch
              </p>
          </div>
          <div>
              <h4 className="text-[#f4f4f4] text-2xl font-[600] ">Freelancing</h4>
              <span className="text-[#5294ff] my-[10px]">Software Engineer</span>
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Card grid component
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Startup template Aceternity
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Random file upload lol
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Himesh Reshammiya Music CD
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Salman Bhai Fan Club registrations open
                </div>
              </div>
          </div>
        </div>
      ),
    },
    {
      title: "September 2023 - Oktober 2023",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
              <h4 className="text-[#f4f4f4] text-2xl font-[600] ">Freelancing</h4>
              <span className="text-[#5294ff] my-[10px]">Software Engineer</span>
              <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              Built and launched Aceternity UI and Aceternity UI Pro from scratch
              </p>
          </div>
          <div>
              <h4 className="text-[#f4f4f4] text-2xl font-[600] ">Freelancing</h4>
              <span className="text-[#5294ff] my-[10px]">Software Engineer</span>
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Card grid component
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Startup template Aceternity
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Random file upload lol
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Himesh Reshammiya Music CD
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  ✅ Salman Bhai Fan Club registrations open
                </div>
              </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip" id="experience">
      <Timeline data={data} />
    </div>
  );
}
