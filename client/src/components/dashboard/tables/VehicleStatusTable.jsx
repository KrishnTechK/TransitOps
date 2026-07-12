import React from "react";

const vehicleStatus = [
  {
    status: "Available",
    count: 38,
    color: "bg-green-500",
  },
  {
    status: "On Trip",
    count: 12,
    color: "bg-blue-500",
  },
  {
    status: "In Shop",
    count: 6,
    color: "bg-yellow-500",
  },
  {
    status: "Retired",
    count: 3,
    color: "bg-red-500",
  },
];

const totalVehicles = vehicleStatus.reduce(
  (sum, item) => sum + item.count,
  0
);

const VehicleStatusTable = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200">

      <div className="p-5 border-b">
        <h2 className="text-xl font-semibold text-gray-800">
          Vehicle Status
        </h2>
      </div>

      <div className="p-5 space-y-6">

        {vehicleStatus.map((item) => {

          const percentage = (
            (item.count / totalVehicles) *
            100
          ).toFixed(0);

          return (
            <div key={item.status}>

              <div className="flex justify-between mb-2">

                <span className="font-medium text-gray-700">
                  {item.status}
                </span>

                <span className="font-semibold text-gray-900">
                  {item.count}
                </span>

              </div>

              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                <div
                  className={`${item.color} h-full rounded-full transition-all duration-500`}
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>

              <p className="text-xs text-gray-500 mt-1">
                {percentage}% of Fleet
              </p>

            </div>
          );
        })}

      </div>
    </div>
  );
};

export default VehicleStatusTable;