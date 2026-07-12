<<<<<<< HEAD
import Topbar from '../components/Topbar';
import FilterBar from '../components/FilterBar';
import StatCard from '../components/StatCard';
import RecentTrips from '../components/RecentTrips';
import VehicleStatus from '../components/VehicleStatus';
import { kpis } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="flex flex-col h-full">
      <Topbar title="Dashboard" />
      <div className="flex-1 overflow-y-auto scrollbar-thin px-6 md:px-8 py-6">
        <FilterBar />

        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3 mb-6">
          {kpis.map((k, i) => (
            <StatCard key={k.label} {...k} index={i} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            <RecentTrips />
          </div>
          <div>
            <VehicleStatus />
          </div>
        </div>
      </div>
    </div>
  );
}
=======
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
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Navigation */}
        <TopNavbar />

        <main className="p-6 space-y-6">

          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">

            <div>
              <h1 className="text-3xl font-bold text-gray-800">
                TransitOps Dashboard
              </h1>

              <p className="text-gray-500 mt-1">
                Smart Transport Operations Platform
              </p>
            </div>

            {/* Export Buttons */}

            <div className="flex gap-3">
              <ExportCSV />
              <ExportPDF />
            </div>

          </div>

          {/* Dashboard Filters */}

          <DashboardFilters />

          {/* KPI Cards */}

          <DashboardCards />

          {/* Analytics Charts */}

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
>>>>>>> origin/dashboard
