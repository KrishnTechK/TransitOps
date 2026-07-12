import React from "react";

import FuelForm from "../components/fuel/FuelForm";
import FuelTable from "../components/fuel/FuelTable";

const Fuel = () => {
  return (
    <div className="p-6 space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Fuel Management
        </h1>

        <p className="text-gray-500 mt-1">
          Record fuel logs and monitor fuel expenses.
        </p>
      </div>

      <FuelForm />

      <FuelTable />

    </div>
  );
};

export default Fuel;