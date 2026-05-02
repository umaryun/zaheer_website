import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import hospitalIcon from "/Hospitalicon.png";
import sanitizer from "/sanitizer.png"
import broom from "/broom.png";
import recycle from "/recycle.png"
import tools from "/tools.png"


const services = [
  {
    icon: hospitalIcon,
    label: "Hospital Cleaning\n& Disinfection",
    color: "bg-[#023265CC]",
    textColor: "text-white",
  },
  {
    icon: recycle,
    label: "Waste\nManagement",
    color: "bg-[#FFFFFF99]",
    textColor: "text-[#02326580]",
  },
  {
    icon: broom,
    label: "Janitorial Services",
    color: "bg-[#023265CC]",
    textColor: "text-white",
  },
  {
    icon: tools,
    label: "Factory\nMaintenance",
    color: "bg-[#FFFFFF99]",
    textColor: "text-[#02326580]",
  },
  {
    icon: sanitizer,
    label: "Deep Cleaning &\nFumigation",
    color: "bg-[#023265CC]",
    textColor: "text-white",
  },
];

export function ServiceCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {services.map((service, index) => (
          <CarouselItem key={index} className="basis-1/3 lg:basis-1/5">
            <div className="p-1">
              <Card className={`${service.color} ${service.textColor} rounded-xl p-0 ring-0 border-0 shadow-lg`}>
                <CardContent className="flex flex-col aspect-square items-center justify-center py-5 px-3">
                  <img src={service.icon} alt="" className="w-14 h-14 object-contain"/>
                  <span className="mt-4 text-xs sm:text-sm font-bold text-center leading-tight whitespace-pre-line">{service.label}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
