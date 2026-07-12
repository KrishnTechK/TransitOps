import React from "react";

// Layout
import Sidebar from "../components/dashboard/layout/Sidebar";
import TopNavbar from "../components/dashboard/layout/TopNavbar";

// Cards
import DashboardCards from "../components/dashboard/cards/DashboardCards";

// Filters
import DashboardFilters from "../components/dashboard/filters/DashboardFilters";

// Charts
import VehicleUtilizationChart from "../components/dashboard/charts/VehicleUtilizationChart";
import VehicleCostChart from "../components/dashboard/charts/VehicleCostChart";
import FuelCostChart from "../components/dashboard/charts/FuelCostChart";
import FuelEfficiencyChart from "../components/dashboard/charts/FuelEfficiencyChart";
import OperationalCostChart from "../components/dashboard/charts/OperationalCostChart";
import VehicleROIChart from "../components/dashboard/charts/VehicleROIChart";
import TripChart from "../components/dashboard/charts/TripChart";

// Tables
import RecentTripsTable from "../components/dashboard/tables/RecentTripsTable";
import VehicleStatusTable from "../components/dashboard/tables/VehicleStatusTable";
import RecentActivities from "../components/dashboard/tables/RecentActivities";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Navigation */}
        <TopNavbar />

        <main className="p-6 space-y-6">

          {/* Page Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              TransitOps Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Smart Transport Operations Platform
            </p>
          </div>

          {/* Filters */}
          <DashboardFilters />

          {/* KPI Cards */}
          <DashboardCards />

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <VehicleUtilizationChart />

            <VehicleCostChart />

            <FuelCostChart />

            <FuelEfficiencyChart />

            <OperationalCostChart />

            <VehicleROIChart />

            <TripChart />

          </div>

          {/* Tables */}

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

            <RecentTripsTable />

            <VehicleStatusTable />

          </div>

          {/* Recent Activities */}

          <RecentActivities />

        </main>

      </div>
    </div>
  );
};

export default Dashboard;