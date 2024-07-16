"use client";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { teamData } from "@/app/utils/constant";

function DevelopmentCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="w-full">
      <div className="w-full p-9">
        <div className="flex items-center justify-center text-green-400 ">
          <img
            className="h-4"
            src="/imagesBrains/shapes/section-title-shape.png"
          />

          <span className="text-md ml-1 font-bold ">Meet The Team</span>
        </div>
        <div className="flex justify-center p-2 text-5xl">
          <h2>Team members</h2>
        </div>
      </div>
      <Carousel
        className="m-auto w-full max-w-5xl"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent className="-ml-1">
          {teamData.map((curr, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square w-full justify-center p-0 align-middle ">
                    <Image
                      className="h-[400px] w-[100%]"
                      src={`${curr.img}`}
                      alt={`${curr.name}`}
                      width={100}
                      height={100}
                    />
                  </CardContent>

                  <div className="pb-9">
                    <div className="flex justify-center leading-9">
                      <span className="text-[26px] font-bold  ">
                        {curr.name}
                      </span>
                    </div>
                    <div className="flex justify-center leading-6  text-gray-400 md:text-[12px]">
                      <span className="text-[14px] font-semibold  leading-5">
                        {curr.destination}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default DevelopmentCarousel;
