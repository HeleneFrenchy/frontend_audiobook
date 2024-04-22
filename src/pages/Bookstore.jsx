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
    <div className="mx-3 my-10 flex flex-col items-start ">
      <Link to="/">
        <img
          className="mb-3 rounded-md"
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
        <p className="text-xs">{age}</p>
        <div className="flex flex-row justify-between">
          <p className="text-xs">{language}</p>
          <p className="text-xs">{price}€</p>
        </div>

        <div className="bg-green-300 rounded-md flex flex-row justify-between px-1 py-1 mt-2">
          <button
            onClick={() => handleAddToCart(id)}
            className="flex items-center justify-between w-full"
          >
            <div>
              <ShoppingCartIcon className="mt-1 w-4 h-4 m-auto dark:text-black" />
            </div>
            {addedToCart && (
              <div>
                <HiCheck className="w-4 h-4 text-blue-600" />
              </div>
            )}
          </button>
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
        const bookAge = parseInt(book.age);
        if (isNaN(bookAge)) return false;
        if (filters[key] === "3") {
          return bookAge <= 3;
        } else if (filters[key] === "4") {
          return bookAge === 4;
        } else if (filters[key] === "5") {
          return bookAge === 5;
        } else if (filters[key] === "6") {
          return bookAge === 6;
        } else if (filters[key] === "7") {
          return bookAge === 7;
        }
      }
      if (key === "language") {
        return book.language.toLowerCase() === filters[key].toLowerCase();
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
        <div className="flex justify-center">
          <input
            className="border border-gray-300 focus:border-gray-400 rounded-md px-3 outline-none"
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <div className="mx-3">
            <select
              className="border border-gray-300 focus:border-gray-400 rounded-md py-1 pr-4 outline-none dark:text-black"
              value={filters.language}
              onChange={(e) => handleFilterChange("language", e.target.value)}
            >
              <option value="">Languages</option>
              <option value="en">English</option>
              <option value="fr">French</option>
            </select>
          </div>
          <div className="mr-3">
            <select
              className="border border-gray-300 focus:border-gray-400 rounded-md py-1 outline-none dark:text-black"
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

      <div className="flex flex-wrap justify-center">
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
