import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    month: "Jan",
    fuel: 12000,
    maintenance: 5000,
  },
  {
    month: "Feb",
    fuel: 15000,
    maintenance: 6500,
  },
  {
    month: "Mar",
    fuel: 18000,
    maintenance: 7200,
  },
  {
    month: "Apr",
    fuel: 14000,
    maintenance: 4800,
  },
  {
    month: "May",
    fuel: 21000,
    maintenance: 8900,
  },
  {
    month: "Jun",
    fuel: 25000,
    maintenance: 9600,
  },
];

const OperationalCostChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">

      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Operational Cost Analysis
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar
            dataKey="fuel"
            name="Fuel Cost"
            fill="#2563eb"
            radius={[6, 6, 0, 0]}
          />

          <Bar
            dataKey="maintenance"
            name="Maintenance Cost"
            fill="#16a34a"
            radius={[6, 6, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
};

export default OperationalCostChart;