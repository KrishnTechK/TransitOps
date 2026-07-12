import React, { useState } from "react";
import { FaSearch, FaUndo } from "react-icons/fa";

const DashboardFilters = () => {
  const [filters, setFilters] = useState({
    vehicleType: "",
    status: "",
    region: "",
  });

  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const handleSearch = () => {
    console.log("Filters:", filters);

    // Future API Call
    // dashboardService.getDashboard(filters)
  };

  const handleReset = () => {
    setFilters({
      vehicleType: "",
      status: "",
      region: "",
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">

        {/* Vehicle Type */}

        <select
          name="vehicleType"
          value={filters.vehicleType}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Vehicle Type</option>
          <option>Truck</option>
          <option>Van</option>
          <option>Mini Truck</option>
          <option>Container</option>
        </select>

        {/* Status */}

        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Status</option>
          <option>Available</option>
          <option>On Trip</option>
          <option>In Shop</option>
          <option>Retired</option>
        </select>

        {/* Region */}

        <select
          name="region"
          value={filters.region}
          onChange={handleChange}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Region</option>
          <option>North</option>
          <option>South</option>
          <option>East</option>
          <option>West</option>
        </select>

        {/* Search */}

        <button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 px-5 py-3 transition"
        >
          <FaSearch />

          Search
        </button>

        {/* Reset */}

        <button
          onClick={handleReset}
          className="bg-gray-600 hover:bg-gray-700 text-white rounded-lg flex items-center justify-center gap-2 px-5 py-3 transition"
        >
          <FaUndo />

          Reset
        </button>

      </div>

    </div>
  );
};

export default DashboardFilters;