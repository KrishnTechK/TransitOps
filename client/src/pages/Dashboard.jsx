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

// Reports
import ExportCSV from "../components/dashboard/reports/ExportCSV";
import ExportPDF from "../components/dashboard/reports/ExportPDF";
const Dashboard = () => {
  return (
    <div className="flex-1 flex flex-col bg-gray-100 min-h-screen">
      <TopNavbar />

      <main className="p-6 space-y-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              TransitOps Dashboard
            </h1>

            <p className="text-gray-500 mt-1">
              Smart Transport Operations Platform
            </p>
          </div>

          <div className="flex gap-3">
            <ExportCSV />
            <ExportPDF />
          </div>
        </div>

        <DashboardFilters />

        <DashboardCards />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VehicleUtilizationChart />
          <VehicleCostChart />
          <FuelCostChart />
          <FuelEfficiencyChart />
          <OperationalCostChart />
          <VehicleROIChart />
          <TripChart />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          <RecentTripsTable />
          <VehicleStatusTable />
        </div>

        <RecentActivities />
      </main>
    </div>
  );
};

export default Dashboard;
