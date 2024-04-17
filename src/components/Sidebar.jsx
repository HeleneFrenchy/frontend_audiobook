import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="absolute flex flex-col inset-y-12 w-60 h-screen bg-green-300 mt-4">
      <ul>
        <li>
          <Link to="/profile">
            <div className="hover:bg-green-500 py-1 px-2">My Profile</div>
          </Link>
        </li>
        <li>
          <Link to="/library">
            <div className="hover:bg-green-500 py-1 px-2">My Library</div>
          </Link>
        </li>
        <li>
          <Link to="/FAQ">
            <div className="hover:bg-green-500 py-1 px-2">FAQ</div>
          </Link>
        </li>

        <li>
          <Link to="/">
            <div className="hover:bg-green-500 py-1 px-2">Log out</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
