import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaTruck,
  FaUsers,
  FaRoute,
  FaTools,
  FaGasPump,
  FaChartBar,
  FaFileAlt,
  FaCog,
  FaWallet,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <FaTachometerAlt />,
  },
  {
    title: "Vehicles",
    path: "/vehicles",
    icon: <FaTruck />,
  },
  {
    title: "Drivers",
    path: "/drivers",
    icon: <FaUsers />,
  },
  {
    title: "Trips",
    path: "/trips",
    icon: <FaRoute />,
  },
  {
    title: "Maintenance",
    path: "/maintenance",
    icon: <FaTools />,
  },
  {
    title: "Fuel",
    path: "/fuel",
    icon: <FaGasPump />,
  },
  {
    title: "Expenses",
    path: "/expenses",
    icon: <FaWallet />,
  },
  {
    title: "Analytics",
    path: "/dashboard",
    icon: <FaChartBar />,
  },
  {
    title: "Reports",
    path: "/dashboard",
    icon: <FaFileAlt />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <FaCog />,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col shadow-xl">

      {/* Logo */}
      <div className="px-6 py-6 border-b border-slate-700">
        <h1 className="text-3xl font-bold text-blue-400">
          TransitOps
        </h1>

        <p className="text-sm text-gray-400 mt-2">
          Smart Transport Operations
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-5">

        {menuItems.map((item) => (

          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-6 py-3 mx-3 mb-2 rounded-lg transition-all duration-200 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-300 hover:bg-slate-800 hover:text-white"
              }`
            }
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.title}
            </span>
          </NavLink>

        ))}

      </nav>

      {/* Footer */}
      <div className="border-t border-slate-700 p-5">

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-400 hover:bg-red-500 hover:text-white transition-all duration-200">

          <FaSignOutAlt />

          <span>Logout</span>

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;