import React from "react";
import {
  FaSearch,
  FaBell,
  FaEnvelope,
  FaUserCircle,
} from "react-icons/fa";

const TopNavbar = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Search */}
        <div className="relative w-full md:w-96">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            placeholder="Search vehicles, drivers, trips..."
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">

          {/* Messages */}
          <button className="relative text-gray-600 hover:text-blue-600 transition">

            <FaEnvelope size={22} />

            <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>

          </button>

          {/* Notifications */}
          <button className="relative text-gray-600 hover:text-blue-600 transition">

            <FaBell size={22} />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              5
            </span>

          </button>

          {/* User */}

          <div className="flex items-center gap-3">

            <FaUserCircle
              size={42}
              className="text-blue-600"
            />

            <div>

              <h3 className="font-semibold text-gray-800">
                Fleet Manager
              </h3>

              <p className="text-sm text-green-600">
                ● Online
              </p>

            </div>

          </div>

        </div>

      </div>

    </header>
  );
};

export default TopNavbar;