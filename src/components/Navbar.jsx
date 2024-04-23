import React from "react";
import { Link } from "react-router-dom";
import {
  SunIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { useDarkMode } from "components/DarkModeContext";
import { useSelector, useDispatch } from "react-redux";
import { logOut } from "store/authSlice";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "components/ui/navigation-menu";

const Navbar = ({}) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

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

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="ml-2 ">
              <Link to="/bookstore" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Bookstore
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="ml-2">
              <Link to="/library" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  My Library
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
      <section className="flex mt-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="ml-2">
              <Link to="/shoppingcart" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <ShoppingCartIcon className="w-6 h-6" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem className="mx-2">
              {user ? (
                <NavigationMenuLink
                  onClick={() => dispatch(logOut())}
                  className={navigationMenuTriggerStyle()}
                >
                  LOGOUT
                </NavigationMenuLink>
              ) : (
                <Link to="/login" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    LOGIN
                  </NavigationMenuLink>
                </Link>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>

          {user && (
            <NavigationMenuList>
              <NavigationMenuItem className="mr-2">
                <Link to="/profile" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    My Profile
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          )}

          <NavigationMenuList>
            <NavigationMenuItem className="mr-2">
              <Link to="/shoppingcart" legacyBehavior passHref>
                <NavigationMenuLink
                  onClick={changeMode}
                  className={navigationMenuTriggerStyle()}
                >
                  <SunIcon className="h-6 w-6" />
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
    </nav>
  );
};

export default Navbar;
