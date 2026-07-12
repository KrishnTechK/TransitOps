import React from "react";

import StatsCard from "./StatsCard";

import {
  FaTruck,
  FaCheckCircle,
  FaRoute,
  FaUserTie,
  FaTools,
  FaGasPump,
} from "react-icons/fa";

const DashboardCards = () => {

  const cards = [

    {
      title: "Active Vehicles",
      value: 24,
      icon: <FaTruck />,
      color: "bg-blue-600",
    },

    {
      title: "Available Vehicles",
      value: 18,
      icon: <FaCheckCircle />,
      color: "bg-green-600",
    },

    {
      title: "Total Trips",
      value: 156,
      icon: <FaRoute />,
      color: "bg-purple-600",
    },

    {
      title: "Drivers",
      value: 20,
      icon: <FaUserTie />,
      color: "bg-yellow-500",
    },

    {
      title: "Maintenance",
      value: 4,
      icon: <FaTools />,
      color: "bg-red-500",
    },

    {
      title: "Fuel Cost",
      value: "₹54,320",
      icon: <FaGasPump />,
      color: "bg-indigo-600",
    },

  ];

  return (

    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

      {cards.map((card, index) => (

        <StatsCard
          key={index}
          title={card.title}
          value={card.value}
          icon={card.icon}
          color={card.color}
        />

      ))}

    </div>

  );
};

export default DashboardCards;