import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { SunIcon, UserCircleIcon } from "@heroicons/react/24/outline";

import { useDarkMode } from "components/DarkModeContext";

const Navbar = () => {
  

  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const changeMode = () => {
    if (isDarkMode == false) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  };

  return (
    <nav className="flex items-center justify-between flex-wrap py-2 bg-green-300 dark:text-black">
      <section className="flex">
        <Link to="/">
          <img
            className="rounded-full ml-3"
            src="/images/logo.jpeg"
            alt="Audiobook Logo"
            width={50}
            height={50}
          />
        </Link>
        <div className="ml-3 my-2">
          <Link to="/bookstore">
            <button className="hover:bg-green-500 py-1 px-2 rounded-lg">
              Bookstore
            </button>
          </Link>
        </div>
      </section>
      <section className="flex mt-1">
        <div className="mr-3 ">
          <Link to="/profile">
            <button className="py-1 px-2 rounded-lg ">
              <UserCircleIcon className="h-6 w-6" />
            </button>
          </Link>
        </div>
        <div className="mr-3 ">
          <Link to="/login">
            <button className="hover:bg-green-500 py-1 px-2 rounded-lg">
              Login
            </button>
          </Link>
        </div>

        <div>
          <button onClick={changeMode} className="pr-3 pt-1">
            <SunIcon className="h-6 w-6" />
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
