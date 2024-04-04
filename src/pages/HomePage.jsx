import CarouselBook from "components/CarouselBook";
import Discover from "components/Discover";
import FAQ from "components/FAQ";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Discover />
      <CarouselBook />
      <FAQ />
    </div>
  );
};

export default HomePage;
