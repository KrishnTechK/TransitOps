import React from "react";
import { CSVLink } from "react-csv";
import { FaFileCsv } from "react-icons/fa";

const reportData = [
  {
    Vehicle: "Truck-01",
    Driver: "Alex",
    FuelCost: 12000,
    Maintenance: 5000,
    Trips: 18,
    ROI: "32%",
  },
  {
    Vehicle: "Van-05",
    Driver: "John",
    FuelCost: 9000,
    Maintenance: 3000,
    Trips: 22,
    ROI: "48%",
  },
  {
    Vehicle: "Truck-08",
    Driver: "David",
    FuelCost: 15000,
    Maintenance: 6000,
    Trips: 14,
    ROI: "41%",
  },
];

const ExportCSV = () => {
  return (
    <CSVLink
      data={reportData}
      filename={"TransitOps_Report.csv"}
      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg transition"
    >
      <FaFileCsv />
      Export CSV
    </CSVLink>
  );
};

export default ExportCSV;