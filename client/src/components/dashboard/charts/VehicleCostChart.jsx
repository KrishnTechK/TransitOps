import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    vehicle: "Truck-01",
    cost: 65000,
  },
  {
    vehicle: "Van-05",
    cost: 42000,
  },
  {
    vehicle: "Truck-08",
    cost: 51000,
  },
  {
    vehicle: "Container-11",
    cost: 78000,
  },
];

const VehicleCostChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">

      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Vehicle Operational Cost
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="vehicle" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="cost"
            fill="#2563eb"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
};

export default VehicleCostChart;