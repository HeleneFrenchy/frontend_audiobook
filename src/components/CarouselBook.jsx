import React from "react";
import { Card, CardContent } from "components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "components/ui/carousel";
import { Link } from "react-router-dom";


export function CarouselBook() {
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
      <Link to="/bookstore">
        <CarouselContent>
          {images.map((url, index) => (
            <CarouselItem key={index} className="w-full md:basis-2/6">
              <div>
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img
                      src={url}
                      className="object-cover rounded-md h-full w-full"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Link>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselBook
