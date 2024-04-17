import React from "react";
import { Link } from "react-router-dom";
import {
  SunIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import {Login} from "pages/Login"
import Sidebar from "components/Sidebar";
import { useDarkMode } from "components/DarkModeContext";
import { useState } from "react";



const Navbar = ({Login}) => {
   const [showSidebar, setShowSidebar] = useState(false);
  const { isDarkMode, setIsDarkMode } = useDarkMode();
  const changeMode = () => {
    if (isDarkMode == false) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
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
        <div className="mr-3">
          {Login ? (
            <button className="hover:bg-green-500 py-1 px-2 rounded-lg">
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="hover:bg-green-500 py-1 px-2 rounded-lg">
                Login
              </button>
            </Link>
          )}
        </div>
        <div className="mr-3 ">
          <Link to="/shoppingcart">
            <button>
              <ShoppingCartIcon className="w-6 h-6" />
            </button>
          </Link>
        </div>

        <div>
          <button onClick={changeMode} className="pr-3">
            <SunIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="pr-3">
          <Bars3Icon className="h-6 w-6 text-black" onClick={toggleSidebar} />
        </div>
        {showSidebar && <Sidebar />}
      </section>
    </nav>
  );
};

export default Navbar;
