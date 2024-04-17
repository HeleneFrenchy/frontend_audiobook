import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useGetBooksUserQuery } from "store/userApi";
import { useBooks } from "hooks/useBooks";

function Book({ id, title, author, imgSrc, imgAlt }) {
  const [expanded, setExpanded] = useState(false);

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
