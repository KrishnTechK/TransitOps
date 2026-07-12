import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Fleet from "./pages/Fleet";
import Drivers from "./pages/Drivers";
import Trips from "./pages/Trips";
import Maintenance from "./pages/Maintenance";
import FuelExpenses from "./pages/FuelExpenses";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";

export default function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Protected Routes */}
      <Route
        path="/*"
        element={
            <div className="flex h-screen bg-ink-900">
              <Sidebar />

              <main className="flex-1 min-w-0">
                <Routes>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="fleet" element={<Fleet />} />
                  <Route path="drivers" element={<Drivers />} />
                  <Route path="trips" element={<Trips />} />
                  <Route path="maintenance" element={<Maintenance />} />
                  <Route path="fuel" element={<FuelExpenses />} />
                  <Route path="analytics" element={<Analytics />} />
                  <Route path="settings" element={<Settings />} />
                </Routes>
              </main>
            </div>
        }
      />
    </Routes>
  );
}