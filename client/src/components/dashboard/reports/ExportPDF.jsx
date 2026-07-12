import React from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { FaFilePdf } from "react-icons/fa";

const ExportPDF = () => {
  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("TransitOps Fleet Report", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [
        [
          "Vehicle",
          "Driver",
          "Fuel Cost",
          "Maintenance",
          "Trips",
          "ROI",
        ],
      ],
      body: [
        ["Truck-01", "Alex", "12000", "5000", "18", "32%"],
        ["Van-05", "John", "9000", "3000", "22", "48%"],
        ["Truck-08", "David", "15000", "6000", "14", "41%"],
      ],
    });

    doc.save("TransitOps_Report.pdf");
  };

  return (
    <button
      onClick={generatePDF}
      className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg transition"
    >
      <FaFilePdf />
      Export PDF
    </button>
  );
};

export default ExportPDF;