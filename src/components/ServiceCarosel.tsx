import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Hospital, HospitalIcon } from "lucide-react"

import {
  ShieldCheck,
  Trash2,
  Sparkles,
  Factory,
  Bug,
} from "lucide-react";
import hospitalIcon from "../../public/Hospitalicon.png";
import sanitizer from "../../public/sanitizer.png"
import broom from "../../public/broom.png";
import recycle from "../../public/recycle.png"
import tools from "../../public/tools.png"


const services = [
  {
    icon: hospitalIcon,
    label: "Hospital Cleaning\n& Disinfection",
    color: "bg-white",
  },
  {
    icon: recycle,
    label: "Waste\nManagement",
    color: "bg-white",
  },
  {
    icon: broom,
    label: "Janitorial Services",
    color: "bg-gold",
  },
  {
    icon: tools,
    label: "Factory\nMaintenance",
    color: "bg-white",
  },
  {
    icon: sanitizer,
    label: "Deep Cleaning &\nFumigation",
    color: "bg-white",
  },
];

export function ServiceCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {services.map((service, index) => (
          <CarouselItem key={index} className="basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <Card className={`${index % 2 == 0 ? "bg-[#023265CC] text-white" : "bg-[#FFFFFF99] text-[#02326580]"} rounded-lg p-0 ring-0`}>
                <CardContent className="flex flex-col aspect-square items-center py-6">
                  <img src={service.icon} alt="" className="w-16"/>
                  <span className="mt-5 text-base font-semibold">{service.label}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
  )
}
