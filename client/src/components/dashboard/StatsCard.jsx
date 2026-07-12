import React from "react";

const StatsCard = ({
  title,
  value,
  icon,
  color = "bg-blue-600",
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-5 border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2 text-gray-800">
            {value}
          </h2>
        </div>

        <div
          className={`${color} w-14 h-14 rounded-full flex items-center justify-center text-white text-2xl`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;