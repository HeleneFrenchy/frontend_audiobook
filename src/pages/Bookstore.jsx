import React from 'react';
import CarouselNewBooks from 'components/CarouselNewBooks';

const Bookstore = () => {
    const images = [
      "images/book/catstronauts.jpeg",
      "images/book/hat_back.jpeg",
      "images/book/little_red.jpeg",
      "images/book/my_quiet_imagination.jpeg",
      "images/book/sam_and_pam.jpeg",
      "images/book/waiting_is_not_easy.jpeg",
    ];
  return (
    <div>
      <h2 className="pt-6 pl-5">New Books</h2>
      <CarouselNewBooks images={images} />
      <h2 className="pt-6 pl-5">Favorites Books</h2>
      <CarouselNewBooks images={images} />
      <h2 className="pt-6 pl-5">Stories 2-4 years old</h2>
      <CarouselNewBooks images={images} />
    </div>
  );
}

export default Bookstore;