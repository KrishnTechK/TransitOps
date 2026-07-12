import React from "react";

import DashboardCards from "../components/dashboard/DashboardCards";
import VehicleUtilizationChart from "../components/dashboard/VehicleUtilizationChart";
import VehicleCostChart from "../components/dashboard/VehicleCostChart";
import FuelCostChart from "../components/dashboard/FuelCostChart";
import TripChart from "../components/dashboard/TripChart";
import RecentActivities from "../components/dashboard/RecentActivities";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          TransitOps Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Fleet Management Analytics Dashboard
        </p>
      </div>

      {/* Dashboard Cards */}
      <DashboardCards />

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">

        <VehicleUtilizationChart />

        <VehicleCostChart />

        <FuelCostChart />

        <TripChart />

      </div>

      {/* Recent Activities */}

      <div className="mt-6">
        <RecentActivities />
      </div>

    </div>
  );
};

export default Dashboard;