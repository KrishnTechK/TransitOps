import React from "react";

const StatsCard = ({
  title,
  value,
  icon,
  color = "bg-blue-600",
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">

      <div className="flex items-center justify-between">

        {/* Card Content */}
        <div>
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            {title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-gray-800">
            {value}
          </h2>
        </div>

        {/* Icon */}
        <div
          className={`${color} h-14 w-14 rounded-xl flex items-center justify-center text-white text-2xl shadow-md`}
        >
          {icon}
        </div>

      </div>
    </div>
  );
};

export default StatsCard;