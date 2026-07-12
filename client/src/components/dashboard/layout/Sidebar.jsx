import React from "react";
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
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    title: "Dashboard",
    icon: <FaTachometerAlt />,
    active: true,
  },
  {
    title: "Vehicles",
    icon: <FaTruck />,
  },
  {
    title: "Drivers",
    icon: <FaUsers />,
  },
  {
    title: "Trips",
    icon: <FaRoute />,
  },
  {
    title: "Maintenance",
    icon: <FaTools />,
  },
  {
    title: "Fuel & Expenses",
    icon: <FaGasPump />,
  },
  {
    title: "Analytics",
    icon: <FaChartBar />,
  },
  {
    title: "Reports",
    icon: <FaFileAlt />,
  },
  {
    title: "Settings",
    icon: <FaCog />,
  },
];

const Sidebar = () => {
  return (
    <aside className="w-72 min-h-screen bg-slate-900 text-white flex flex-col shadow-xl">

      {/* Logo */}
      <div className="px-6 py-6 border-b border-slate-700">
        <h1 className="text-2xl font-bold tracking-wide">
          TransitOps
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Smart Fleet Platform
        </p>
      </div>

      {/* Menu */}
      <nav className="flex-1 py-4">

        {menuItems.map((item) => (
          <button
            key={item.title}
            className={`w-full flex items-center gap-4 px-6 py-3 text-left transition-all duration-200
            ${
              item.active
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            <span className="text-lg">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.title}
            </span>
          </button>
        ))}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-700 p-4">

        <button className="flex items-center gap-3 text-red-400 hover:text-red-300 transition-all">

          <FaSignOutAlt />

          Logout

        </button>

      </div>

    </aside>
  );
};

export default Sidebar;