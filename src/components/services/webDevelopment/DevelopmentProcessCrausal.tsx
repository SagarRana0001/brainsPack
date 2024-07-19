"use client";
import React, { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Image from "next/image";
import { DevelopmentData } from "@/app/utils/constant";

function DevelopmentCarousel() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <div className="w-full">
      <Carousel className="m-auto w-full max-w-5xl" plugins={[plugin.current]}>
        <CarouselContent className="-ml-1 !flex !items-center">
          {DevelopmentData.map((curr, index) => (
            <CarouselItem key={index} className="">
              <div className="p-1">
                <Card>
                  <CardContent className="relative flex w-full justify-center p-0 align-middle ">
                    <Image
                      className="h-[400px] w-[100%]"
                      src={`${curr.img}`}
                      alt={`${curr.name}`}
                      width={100}
                      height={100}
                    />
                    <div className="absolute bottom-5 right-4">
                      <Card className="w-[350px] bg-white dark:bg-slate-900">
                        <CardHeader>
                          <CardTitle className="dark:text-white">
                            {curr.name}
                          </CardTitle>
                          <CardDescription className="text-gray-400">
                            {curr.descreption}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
export default DevelopmentCarousel;
