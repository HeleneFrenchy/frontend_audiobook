import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGetBooksUserQuery } from "store/userApi";
import { useBooks } from "hooks/useBooks";

function Book({ id, title, author, imgSrc, imgAlt, description}) {
  return (
    <div className="mx-3 my-5 border-t-2">
      <div className="flex mt-5">
        <div>
          <Link to="/">
            <img
              className="mb-3 rounded-md"
              src={imgSrc}
              alt={imgAlt}
              width={150}
              height={150}
            />
          </Link>
        </div>
        <div className="flex flex-col ml-5">
          <p>{title}</p>
          <p className="text-xs mt-2 italic">{author}</p>
          <p className="text-xs mt-2">{description}</p>
        </div>
        <div className="flex flex-col w-36 ml-5">
          <Link to="/audioplayer">
            <button className="bg-green-300 rounded-md px-10 dark:text-black ">
              Play
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function Library() {
  const { data: bookIds = [], isLoading } = useGetBooksUserQuery();
  const books = useBooks(bookIds);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (!bookIds.length) {
      setMessage("Your library is empty");
    }
  }, [isLoading]);

  return (
    <div>
      <h1 className="text-2xl text-center mt-12 mb-12">My Library</h1>
      <div className="flex flex-wrap justify-center items-end">
        {message}
        {books.map((book) => (
          <Book
            key={book._id}
            id={book._id}
            title={book.title}
            author={book.author}
            description={book.description}
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

export default Library;
