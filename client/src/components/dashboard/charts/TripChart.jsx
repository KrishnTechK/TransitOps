import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

const tripData = [
  {
    name: "Completed",
    value: 48,
  },
  {
    name: "Active",
    value: 18,
  },
  {
    name: "Pending",
    value: 10,
  },
  {
    name: "Cancelled",
    value: 6,
  },
];

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
];

const TripChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">

      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Trip Analytics
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <PieChart>

          <Pie
            data={tripData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >

            {tripData.map((entry, index) => (
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

export default TripChart;