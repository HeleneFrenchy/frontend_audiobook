import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useGetBooksQuery } from "store/bookApi";
import { useAddBooksToCartMutation } from "store/userApi";

function Book({ title, author, age, language, price, imgSrc, imgAlt }) {
  const [expanded, setExpanded] = useState(false);
  const [addToCart] = useAddBooksToCartMutation ();

  const handleAddToCart = (bookId) => {
    addToCart(bookId);
  }

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mx-3 my-10 flex flex-col items-start">
      <Link to="/">
        <img
          className="mb-3"
          src={imgSrc}
          alt={imgAlt}
          width={150}
          height={150}
        />
      </Link>

      <div className="flex flex-col w-36">
        <p
          className={`text-xs font-bold ${expanded ? "" : "truncate"}`}
          onClick={toggleExpanded}
        >
          {title}
        </p>

        <p className="text-xs" onClick={toggleExpanded}>
          {author}
        </p>
      </div>
      <div>
        <p className="text-xs">{age}</p>
        <p className="text-xs">{language}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-xs">{price}€</p>
        <div className="flex">
          <button onClick={() => handleAddToCart(Book)}>
            <ShoppingCartIcon className="mt-1 w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Bookstore() {
  const { data: books = [] } = useGetBooksQuery();

  return (
    <div>
      <div>
        <h1 className="text-2xl text-center mt-12 mb-12">Bookstore</h1>
      </div>

      <div className="flex flex-wrap justify-center items-end">
        {books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            age={book.age}
            language={book.language}
            price={book.price}
            imgSrc={book.image}
            imgAlt={book.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Bookstore;
