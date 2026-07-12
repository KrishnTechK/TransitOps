import Topbar from "../components/Topbar";
import MaintenanceLog from "../components/MaintenanceLog";

export default function Maintenance() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Topbar user="Raven K." />

      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-lg font-semibold text-white mb-4">
          Maintenance
        </h1>

        <MaintenanceLog />
      </main>
    </div>
  );
}