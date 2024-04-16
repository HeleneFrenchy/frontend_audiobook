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
      
      <FAQ />
    </div>
  );
};

export default HomePage;
