import Topbar from "../components/Topbar";
import SettingsRBAC from "../components/SettingsRBAC";

export default function Settings() {
  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <Topbar user="Raven K." />

      <main className="flex-1 overflow-y-auto p-6">
        <h1 className="text-lg font-semibold text-white mb-4">
          Settings &amp; RBAC
        </h1>

        <SettingsRBAC />
      </main>
    </div>
  );
}