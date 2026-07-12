import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    vehicle: "Truck-01",
    roi: 32,
  },
  {
    vehicle: "Van-05",
    roi: 48,
  },
  {
    vehicle: "Truck-08",
    roi: 41,
  },
  {
    vehicle: "Container-11",
    roi: 28,
  },
  {
    vehicle: "Mini-02",
    roi: 56,
  },
];

const VehicleROIChart = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">

      <h2 className="text-xl font-semibold text-gray-800 mb-5">
        Vehicle ROI Analysis
      </h2>

      <ResponsiveContainer width="100%" height={320}>

        <LineChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="vehicle" />

          <YAxis unit="%" />

          <Tooltip formatter={(value) => [`${value}%`, "ROI"]} />

          <Legend />

          <Line
            type="monotone"
            dataKey="roi"
            name="ROI"
            stroke="#8b5cf6"
            strokeWidth={3}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />

        </LineChart>

      </ResponsiveContainer>

      <div className="mt-4 rounded-lg bg-gray-50 p-3 text-sm text-gray-600">
        <strong>ROI Formula:</strong>
        <br />
        (Revenue − (Maintenance + Fuel)) / Acquisition Cost
      </div>

    </div>
  );
};

export default VehicleROIChart;