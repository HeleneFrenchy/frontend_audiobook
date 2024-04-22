import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div
      className={`absolute flex flex-col inset-y-12 w-60 h-screen bg-green-300 mt-4 ${
        sidebarOpen ? "block" : "hidden"
      }`}
    >
      <ul>
        <li>
          <Link to="/profile" onClick={handleSidebarToggle}>
            <div className="hover:bg-green-500 py-1 px-2">My Profile</div>
          </Link>
        </li>
        <li>
          <Link to="/library" onClick={handleSidebarToggle}>
            <div className="hover:bg-green-500 py-1 px-2">My Library</div>
          </Link>
        </li>
        <li>
          <Link to="/" onClick={handleSidebarToggle}>
            <div className="hover:bg-green-500 py-1 px-2">FAQ</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
