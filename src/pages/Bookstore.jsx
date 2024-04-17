import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { HiCheck } from "react-icons/hi";

import { useGetBooksQuery } from "store/bookApi";
import { useAddBooksToCartMutation } from "store/userApi";

function Book({ id, title, author, age, language, price, imgSrc, imgAlt }) {
  const [addedToCart, setAddedToCart] = useState(false);
  
  const [addToCart] = useAddBooksToCartMutation();

  const handleAddToCart = (bookId) => {
    addToCart(bookId);
    setAddedToCart(true);
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
      <div className="h-20 w-36">
        <div className="flex flex-col">
          <p className="text-xs font-bold overflow-hidden whitespace-nowrap max-w-full truncate hover:text-black">
            {title}
          </p>
          <p className="text-xs overflow-hidden whitespace-nowrap max-w-full truncate hover:text-black">
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
            <div>
              <button onClick={() => handleAddToCart(id)}>
                <ShoppingCartIcon className="mt-1 w-4 h-4" />
              </button>
            </div>
            <div>
              {addedToCart && (
                <HiCheck className="ml-1 w-4 h-4 text-blue-600" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bookstore() {
  const { data: books = [] } = useGetBooksQuery();
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    language: "",
    age: "",
    price: "",
  });

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters = Object.keys(filters).every((key) => {
      if (!filters[key]) return true;
      if (key === "age") {
        if (parseInt(filters[key]) === 3) {
          return book.age <= 3;
        } else if (parseInt(filters[key]) === 4) {
          return book.age <= 4;
        } else if (parseInt(filters[key]) === 5) {
          return book.age <= 5;
        } else if (parseInt(filters[key]) === 6) {
          return book.age <= 6;
        } else if (parseInt(filters[key]) === 7) {
          return book.age <= 7;
        }
      }
      if (key === "language") {
        if (filters[key] === "en") {
          return book.language.toLowerCase() === "en";
        } else if (filters[key] === "fr") {
          return book.language.toLowerCase() === "fr";
        }
      }

      return book[key] === filters[key];
    });

    return matchesSearch && matchesFilters;
  });

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters({
      ...filters,
      [filterName]: value,
    });
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl text-center mt-12 mb-12">Bookstore</h1>
        <div className="flex justify-end">
          <input
            className="border border-gray-300 focus:border-gray-400 rounded-md px-3 outline-none"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <div className="mx-3">
            <select
              className="border border-gray-300 focus:border-gray-400 rounded-md py-1 pr-4 outline-none"
              value={filters.language}
              onChange={(e) => handleFilterChange("language", e.target.value)}
            >
              <option value="">Languages</option>
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div className="mx-3">
            <select
              className="border border-gray-300 focus:border-gray-400 rounded-md py-1 outline-none"
              value={filters.age}
              onChange={(e) => handleFilterChange("age", e.target.value)}
            >
              <option value="">Age</option>
              <option value="3">3 Years Old</option>
              <option value="4">4 Years Old</option>
              <option value="5">5 Years Old</option>
              <option value="6">6 Years Old</option>
              <option value="7">7 Years Old</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-end">
        {filteredBooks.map((book) => (
          <Book
            key={book._id}
            id={book._id}
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
