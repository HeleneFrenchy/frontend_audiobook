import CarouselBook from "components/CarouselBook";
import Discover from "components/Discover";
import FAQ from "components/FAQ";
import React from "react";
import { Carousel
} from "components/CarouselBook";
import { CarouselItem } from "components/ui/carousel";
import { CarouselContent } from "components/ui/carousel";

const HomePage = () => {
  return (
    <div>
      <Discover />
      <CarouselBook/>
      {/* <Carousel>
        <CarouselContent className="-ml-4">
          <CarouselItem className="pl-4">...</CarouselItem>
          <CarouselItem className="pl-4">...</CarouselItem>
          <CarouselItem className="pl-4">...</CarouselItem>
        </CarouselContent>
      </Carousel> */}
      <FAQ />
    </div>
  );
};

export default HomePage;
