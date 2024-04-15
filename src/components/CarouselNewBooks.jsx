import React from "react";
import { Card, CardContent } from "components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/ui/carousel";

export function CarouselNewBooks() {
  const images = [
    "images/book/catstronauts.jpeg",
    "images/book/hat_back.jpeg",
    "images/book/little_red.jpeg",
    "images/book/my_quiet_imagination.jpeg",
    "images/book/sam_and_pam.jpeg",
    "images/book/waiting_is_not_easy.jpeg",
  ];
  return (
    <Carousel
      opts={{
        align: "center",
      }}
      className="w-full max-w-md m-auto mt-12"
    >
      <CarouselContent>
        {images.map((url, index) => (
          <CarouselItem key={index} className="basis-1/3 lg:basis-1/3">
            <div>
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <img
                    src={url}
                    className="object-cover w-full h-full rounded-md
                   "
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselNewBooks;
