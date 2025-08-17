import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function ExperienceSection() {
  const data = [
    {
      title: "August 2025",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
              <h4 className="text-[#f4f4f4] text-2xl font-[600] "> Fullstack Developer</h4>
              <span className="text-[#5294ff] my-[10px]">  PT Arus Digital Sinergi | Freelance</span>
              <p className="mb-5 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              As a Fullstack Developer, I contributed to developing the company’s web application focused on
software development, including a CMS Website with GIS integration. My responsibilities and
accomplishments in this role include:
              </p>
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Developed and maintained web applications (frontend & backend).
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Collaborated with UI/UX to deliver modern, responsive designs.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Implemented GIS features and a robust CMS.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Integrated multi-language support (Indonesian & English).
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Utilized Laravel 12, Filament, React.js, and MySQL.
                </div>
              </div>
          </div>          
        </div>
      ),
    },
    {
      title: "July 2024 - August 2024",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
              <h4 className="text-[#f4f4f4] text-2xl font-[600] "> Web Developer</h4>
              <span className="text-[#5294ff] my-[10px]">  DISKOMINFO PROVINSI | Internship</span>
              <p className="mb-5 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              As a Web Developer, I contributed to developing the provincial portal website, built an online
internship registration system, and collaborated with the team to create OPD templates for
institutional use. My responsibilities and accomplishments in this role include:
              </p>
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Building three websites (provincial portal, internship registration system, and OPD
templates).

                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Implementing system integration using REST API.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Developing an admin dashboard for managing news, gallery, events, internship registrations, and assigning field supervisors for interns
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Led a team to complete the project on time during a 2-month internship.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Utilizing Next.js, React.js, Laravel, and MySQL.
                </div>
              </div>
          </div>   
        </div>
      ),
    },
    {
      title: "May 2024 - June 2024",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
              <h4 className="text-[#f4f4f4] text-2xl font-[600] "> Fullstack Developer</h4>
              <span className="text-[#5294ff] my-[10px]">  LPMPP UMRAH | Freelance</span>
              <p className="mb-5 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              As a Fullstack Developer, I contributed to developing an Internal Quality Audit System for an institution at Raja Ali Haji Maritime University (UMRAH), Tanjung Pinang. I led this project by conducting direct discussions with the client at the institution. My responsibilities and accomplishments in this role include:
              </p>
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Developing an Internal Quality Audit System application for Raja Ali Haji Maritime University with the team, transforming previously manual internal quality audits into an integrated application.

                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Applying the Agile development methodology, using sprints and Docs for project management.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Leveraging PHP, CodeIgniter 4, TCPDF, and MySQL to develop and build dynamic and responsive websites with my team.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Successfully led the project to production launch, which is still actively used and beneficial for all stakeholders.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Implemented a monolithic project architecture
                </div>
              </div>
          </div>   
        </div>
      ),
    },
    {
      title: "August 2023 - December 2023",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
              <h4 className="text-[#f4f4f4] text-2xl font-[600] ">Fullstack Developer</h4>
              <span className="text-[#5294ff] my-[10px]">  SKILVUL  | WFH </span>
              <p className="mb-5 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
              As a Fullstack Developer, I developed Literasi Kita, an application that provides online books and learning videos to foster reading interest among children under 18. The app enables easy access without the need to purchase physical books. My responsibilities and accomplishments in this role include:
              </p>
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Built the application using MongoDB, ExpressJS, ReactJS, NodeJS, Redux, Cloudflare, Cloudinary, Midtrans, JavaScript, and Bootstrap 5.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Collaborated with the team to integrate Cloudflare and Cloudinary for cloud storage of books and videos, and implemented online payment via Midtrans Payment Gateway.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Applied the Agile methodology with sprints and used Trello for project management.
                </div>
              </div>
          </div>   
        </div>
      ),
    },
    {
      title: "October 2022 - January 2023",
      content: (
        <div className="flex flex-col gap-[30px]">
          <div>
              <h4 className="text-[#f4f4f4] text-2xl font-[600] ">Backend Developer</h4>
              <span className="text-[#5294ff] my-[10px]">  Tanjungpinang City Education Department  | Part Time </span>
              <p className="mb-5 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
             As a part-time fullstack developer, I was responsible for creating SICERDIK, a web-based platform that simplifies and digitizes the student school transfer process. My responsibilities and accomplishments in this role include:
              </p>
              <div className="mb-8">
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Working closely with developers and designers to contribute to the apps workﬂow and design process.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Built RESTful APIs using ExpressJS and MongoDB to be integrated with the frontend.
                </div>
                <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                  • Leveraged JavaScript, MongoDB, and Express.js to develop and construct dynamic and responsive websites with my team.
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
