import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    vehicle: "Truck-01",
    efficiency: 5.8,
  },
  {
    vehicle: "Van-05",
    efficiency: 11.2,
  },
  {
    vehicle: "Truck-08",
    efficiency: 6.5,
  },
  {
    vehicle: "Container-11",
    efficiency: 4.7,
  },
  {
    vehicle: "Mini-02",
    efficiency: 13.5,
  },
];

const FuelEfficiencyChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">

      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Fuel Efficiency (Km/L)
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="vehicle" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="efficiency"
            stroke="#16a34a"
            strokeWidth={3}
            dot={{ r: 5 }}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
};

export default FuelEfficiencyChart;