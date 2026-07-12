import Topbar from "../components/Topbar";
import DriversTable from "../components/DriversTable";

export default function Drivers() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Topbar user="Raven K." />

      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-lg font-semibold text-white mb-4">
          Drivers &amp; safety profiles
        </h1>

        <DriversTable />
      </main>
    </div>
  );
}