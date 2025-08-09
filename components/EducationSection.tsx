"use client";
import React from 'react'
import Lanyard from '@/components/Lanyard/Lanyard';
import ScrollFloat from './ScrollFloat/ScrollFloat';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { Button } from '@/components/ui/button'
import DotGrid from '@/components/DotGrid/DotGrid';
export default function EducationSection() {
  return (
     <div className="relative w-full min-h-screen overflow-hidden bg-black" >
     <div className="absolute inset-0 z-0">
        <DotGrid
          dotSize={5}         
          gap={15}             
          baseColor="#808080"  
          activeColor="#5294ff"
          proximity={120}     
          shockRadius={250}    
          shockStrength={5}    
          resistance={750}     
          returnDuration={1.5} 
        />
      </div>
    <div className='container mx-auto py-10 relative z-10' id="education">
        <div className="px-8 flex flex-col  justify-start md:justify-center md:items-center ">
            <ScrollFloat
                animationDuration={1.2}
                ease="back.inOut(2)"
                scrollStart="top bottom+=10%"
                scrollEnd="bottom center"
                stagger={0.08}
                textClassName="text-2xl md:text-4xl lg:text-6xl font-sans relative z-20 font-bold tracking-tight"
            >
                {"My Education"}
            </ScrollFloat>

            
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-3 px-6 justify-center items-center text-center'>
            <div className='col-span-6'>
                <Lanyard  position={[0, 0, 12]} gravity={[0, -40, 0]}/>
            </div>
            <div className='col-span-6'>
              <CardContainer className="inter-var">
                <CardBody
                  className="
                    relative group/card
                    dark:hover:shadow-2xl dark:hover:shadow-sky-400/[0.1]
                    w-full sm:w-[30rem] h-auto p-8 rounded-xl
                    flex flex-col justify-between gap-6
                    bg-neutral-900
                  "
                >
                  {/* Header */}
                  <div>
                    <CardItem translateZ="50" className="text-4xl font-bold text-neutral-800 dark:text-white">
                      Education
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="40"
                      className="mt-2 text-lg font-medium text-neutral-600 dark:text-neutral-300"
                    >
                      Bachelor Degree of Informatics Engineering
                    </CardItem>
                    <CardItem
                      as="p"
                      translateZ="40"
                      className="text-sm text-neutral-500 dark:text-neutral-400"
                    >
                      Universitas Maritim Raja Ali Haji
                    </CardItem>
                  </div>

                  {/* Body */}
                  <div className="space-y-3">
                    <CardItem
                      as="p"
                      translateZ="30"
                      className="text-sm text-neutral-500 dark:text-neutral-300"
                    >
                      Grade Point Average (GPA): <span className="font-semibold text-neutral-700 dark:text-white">3.59</span>
                    </CardItem>

                    <div>
                      <CardItem
                        as="p"
                        translateZ="30"
                        className="text-sm  font-medium text-neutral-700 dark:text-white"
                      >
                        Thesis:
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="30"
                        className="text-sm text-justify text-neutral-500 dark:text-neutral-300"
                      >
                        Mangrove Type Identification Using Faster R-CNN — Case Study in Bintan Island
                      </CardItem>
                    </div>

                    <div>
                      <CardItem
                        as="p"
                        translateZ="30"
                        className="text-sm font-medium text-neutral-700 dark:text-white"
                      >
                        Journal:
                      </CardItem>
                      <CardItem
                        as="p"
                        translateZ="30"
                        className="text-sm text-justify text-neutral-500 dark:text-neutral-300"
                      >
                        Deep Learning-Based Mangrove Classification: A Performance Comparison of YOLOv11, Faster R-CNN, and SSD Models
                      </CardItem>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 mt-4 justify-center">
                    <CardItem translateZ={20} as="a" href="#" target="_blank">
                      <Button  className="w-full">My Thesis →</Button>
                    </CardItem>
                    <CardItem translateZ={20} as="a" href="#" target="_blank">
                      <Button className="w-full">My Journal →</Button>
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>

            </div>
        </div>
    </div>
    </div>
  )
}
