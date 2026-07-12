import React from "react";
import {
  FaTruck,
  FaGasPump,
  FaTools,
  FaUserCheck,
  FaCheckCircle,
} from "react-icons/fa";

const activities = [
  {
    id: 1,
    title: "Trip Completed",
    description: "Truck-01 completed delivery from Delhi to Jaipur.",
    time: "10 mins ago",
    icon: <FaCheckCircle />,
    color: "bg-green-500",
  },
  {
    id: 2,
    title: "Fuel Added",
    description: "Van-05 refueled with 50 Liters.",
    time: "25 mins ago",
    icon: <FaGasPump />,
    color: "bg-blue-500",
  },
  {
    id: 3,
    title: "Maintenance Scheduled",
    description: "Truck-08 moved to maintenance workshop.",
    time: "1 hour ago",
    icon: <FaTools />,
    color: "bg-yellow-500",
  },
  {
    id: 4,
    title: "Driver Assigned",
    description: "Alex assigned to Trip TRP-102.",
    time: "2 hours ago",
    icon: <FaUserCheck />,
    color: "bg-purple-500",
  },
  {
    id: 5,
    title: "New Vehicle Registered",
    description: "Container-11 added to fleet.",
    time: "Today",
    icon: <FaTruck />,
    color: "bg-indigo-500",
  },
];

const RecentActivities = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">

      <div className="p-5 border-b">
        <h2 className="text-xl font-semibold text-gray-800">
          Recent Activities
        </h2>
      </div>

      <div className="p-5">

        <div className="space-y-5">

          {activities.map((activity) => (

            <div
              key={activity.id}
              className="flex items-start gap-4"
            >

              <div
                className={`${activity.color} h-12 w-12 rounded-full flex items-center justify-center text-white text-lg shadow`}
              >
                {activity.icon}
              </div>

              <div className="flex-1">

                <h3 className="font-semibold text-gray-800">
                  {activity.title}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {activity.description}
                </p>

              </div>

              <span className="text-xs text-gray-400 whitespace-nowrap">
                {activity.time}
              </span>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default RecentActivities;