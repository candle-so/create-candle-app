// import Image from "next/image";
// import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const featuredApps = [
  {
    image: "/images/build_image_1.png",
    name: "Intergalactic Commerce",
    builder: {
      name: "Designer Fred",
      image: "/images/fred.png",
    },
  },
  {
    image: "/images/build_image_2.png",
    name: "Intergalactic Commerce",
    builder: {
      name: "Designer Fred",
      image: "/images/fred.png",
    },
  },
  {
    image: "/images/build_image_3.png",
    name: "Intergalactic Commerce",
    builder: {
      name: "Designer Fred",
      image: "/images/fred.png",
    },
  },
];

export const BuiltWithCandle = () => {
  return (
    <div className="py-16">
      <div className="containter max-w-5xl m-auto space-y-12">
        <div className="px-6 space-y-2">
          <h4 className="font-pacifico text-xl">Built with Candle</h4>
          <p>Want to build amazing platforms like these (or better)?</p>
          <div className="flex space-x-4 pt-2">
            <Button variant="default">Hire a designer</Button>
            <Button variant="secondary">Read our docs</Button>
          </div>
        </div>
        {/* <div className="m-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="">
              {featuredApps.map((app, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <div className={cn("w-full ", index === 1 ? "" : "p-6")}>
                    <div className={cn("overflow-hidden border-4", index === 1 ? "border-cndl-accent-500 rounded-3xl" : "rounded-xl border-cndl-neutral-400")}>
                      <div className="bg-cndl-dark relative">
                        <div className="w-[calc(100%+20%)] h-[calc(100%+20%)] -translate-x-10">
                          <Image className="w-full" width={1000} height={1000} objectFit="cover" src={app.image} alt="What you could be doing" />
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <h3 className="font-pacifico text-lg">{app.name}</h3>
                        <div className="flex space-x-2 items-center">
                          <Avatar className="w-6 h-6">
                            <AvatarImage src={app.builder.image} alt={app.builder.name} />
                            <AvatarFallback>
                              {app.builder.name
                                .split(" ")
                                .map((s) => s[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="font-bold">{app.builder.name}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div> */}
      </div>
    </div>
  );
};
