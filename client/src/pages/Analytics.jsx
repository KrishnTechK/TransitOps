import Topbar from "../components/Topbar";
import AnalyticsDashboard from "../components/AnalyticsDashboard";

export default function Analytics() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Topbar user="Raven K." />

      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-lg font-semibold text-white mb-4">
          Reports &amp; Analytics
        </h1>

        <AnalyticsDashboard />
      </main>
    </div>
  );
}