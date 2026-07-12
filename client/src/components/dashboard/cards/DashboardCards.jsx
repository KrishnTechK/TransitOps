import React from "react";
import StatsCard from "./StatsCard";

import {
  FaTruck,
  FaCheckCircle,
  FaTools,
  FaRoute,
  FaClock,
  FaUserTie,
  FaChartLine,
} from "react-icons/fa";

const DashboardCards = () => {
  // Temporary dummy data
  // Replace this with API response later

  const dashboardStats = [
    {
      id: 1,
      title: "Active Vehicles",
      value: 52,
      icon: <FaTruck />,
      color: "bg-blue-600",
    },
    {
      id: 2,
      title: "Available Vehicles",
      value: 38,
      icon: <FaCheckCircle />,
      color: "bg-green-600",
    },
    {
      id: 3,
      title: "Vehicles In Maintenance",
      value: 6,
      icon: <FaTools />,
      color: "bg-red-500",
    },
    {
      id: 4,
      title: "Active Trips",
      value: 21,
      icon: <FaRoute />,
      color: "bg-purple-600",
    },
    {
      id: 5,
      title: "Pending Trips",
      value: 8,
      icon: <FaClock />,
      color: "bg-yellow-500",
    },
    {
      id: 6,
      title: "Drivers On Duty",
      value: 34,
      icon: <FaUserTie />,
      color: "bg-cyan-600",
    },
    {
      id: 7,
      title: "Fleet Utilization",
      value: "78%",
      icon: <FaChartLine />,
      color: "bg-indigo-600",
    },
  ];

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dashboardStats.map((card) => (
          <StatsCard
            key={card.id}
            title={card.title}
            value={card.value}
            icon={card.icon}
            color={card.color}
          />
        ))}
      </div>
    </section>
  );
};

export default DashboardCards;