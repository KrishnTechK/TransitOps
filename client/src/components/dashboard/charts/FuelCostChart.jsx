import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", fuelCost: 12000 },
  { month: "Feb", fuelCost: 15000 },
  { month: "Mar", fuelCost: 18000 },
  { month: "Apr", fuelCost: 14000 },
  { month: "May", fuelCost: 21000 },
  { month: "Jun", fuelCost: 25000 },
];

const FuelCostChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Monthly Fuel Cost
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Area
            type="monotone"
            dataKey="fuelCost"
            stroke="#2563eb"
            fill="#93c5fd"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default FuelCostChart;