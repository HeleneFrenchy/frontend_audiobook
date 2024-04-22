import React from "react";
import { Link } from "react-router-dom";

const Discover = () => {
  return (
    <div className="flex flex-row mt-12 bg-green-300 dark:text-black">
      <section className="flex items-center justify-center w-full flex-col">
        <h1 className="text-2xl text-center">
          Discover a new world with the best stories for kids!
        </h1>
        <div className="flex justify-center mt-10 py-1 px-3 rounded-md bg-white">
          <Link to="/signup">
            <button>Register now</button>
          </Link>
        </div>
      </section>
      <section className="w-full">
        <Link href="/">
          <img
            src="/images/audiobook.jpeg"
            alt="Audiobook Logo"
            width="500"
            height="500"
            layout="responsive"
          />
        </Link>
      </section>
      
    </div>
  );
};

export default Discover;
