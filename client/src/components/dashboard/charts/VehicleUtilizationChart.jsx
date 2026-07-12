import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "Available", value: 38 },
  { name: "On Trip", value: 12 },
  { name: "In Shop", value: 6 },
  { name: "Retired", value: 3 },
];

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
];

const VehicleUtilizationChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">

      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Fleet Utilization
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <PieChart>

          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />

          <Legend />

        </PieChart>
      </ResponsiveContainer>

    </div>
  );
};

export default VehicleUtilizationChart;