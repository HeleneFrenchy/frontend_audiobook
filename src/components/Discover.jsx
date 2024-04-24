import React from "react";
import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <div className="flex flex-row mt-12 bg-green-300 dark:text-black">
      <section className="flex items-center justify-center w-1/2 flex-col">
        <h1 className="mt-4 text-2xl text-center">
          Discover a new world with the best stories for kids!
        </h1>
        <div className=" mb-4 md:flex justify-center mt-10 py-1 px-3 rounded-md bg-white">
          <Link to="/signup">
            <button>Register now</button>
          </Link>
        </div>
      </section>
      <section className="w-1/2 my-auto">
        <img
          src="/images/audiobook.jpeg"
          alt="Audiobook Logo"
          className="object-cover"
        />
      </section>
    </div>
  );
};

export default Discover;
