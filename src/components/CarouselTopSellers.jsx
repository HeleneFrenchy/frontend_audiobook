import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function CarouselTopSellers() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <Link href="/">
            <img
              className="mb-3"
              src="/images/book/hat_back.jpeg"
              alt="Audiobook I want my hat back"
              width={150}
              height={150}
            />
            <p className="text-xs font-bold">I Want My Hat Back</p>
            <p className="text-xs">by Jon Klassen</p>
          </Link>
        </div>
        <div>
          <Link href="/" className="mx-3 my-10">
            <img
              className="mb-3"
              src="/images/book/little_red.jpeg"
              alt="Audiobook Little red "
              width={150}
              height={150}
            />
            <p className="text-xs font-bold">
              Little Red and the Very Hungry Lion
            </p>
            <p className="text-xs">by Alex T. Smith</p>
          </Link>
        </div>
        <div>
          <Link href="/" className="mx-3 my-10">
            <img
              className="mb-3"
              src="/images/book/my_quiet_imagination.jpeg"
              alt="Audiobook My quiet imagination "
              width={150}
              height={150}
            />
            <p className="text-xs font-bold">My Quiet Imagination</p>
            <p className="text-xs">by Udayana Lugo</p>
          </Link>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
        <div>
          <h3>7</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
        <div>
          <h3>9</h3>
        </div>
      </Slider>
    </div>
  );
}

export default CarouselTopSellers;
