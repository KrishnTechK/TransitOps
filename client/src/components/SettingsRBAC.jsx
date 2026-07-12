import { useState } from "react";

// Mock data — replace with your API / store data
const RBAC_ROWS = [
  {
    role: "Fleet Manager",
    fleet: "check",
    drivers: "check",
    trips: "dash",
    fuelExp: "dash",
    analytics: "check",
  },
  {
    role: "Dispatcher",
    fleet: "view",
    drivers: "dash",
    trips: "check",
    fuelExp: "dash",
    analytics: "dash",
  },
  {
    role: "Safety Officer",
    fleet: "dash",
    drivers: "check",
    trips: "view",
    fuelExp: "dash",
    analytics: "dash",
  },
  {
    role: "Financial Analyst",
    fleet: "view",
    drivers: "dash",
    trips: "dash",
    fuelExp: "check",
    analytics: "check",
  },
];

const RBAC_COLUMNS = [
  { key: "fleet", label: "Fleet" },
  { key: "drivers", label: "Drivers" },
  { key: "trips", label: "Trips" },
  { key: "fuelExp", label: "Fuel/Exp." },
  { key: "analytics", label: "Analytics" },
];

function AccessCell({ value }) {
  if (value === "check") {
    return <span className="text-emerald-400 font-semibold">✓</span>;
  }
  if (value === "view") {
    return <span className="text-blue-400 text-xs font-medium">view</span>;
  }
  return <span className="text-slate-600">—</span>;
}

const inputClasses =
  "w-full bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400";

function FormField({ label, children }) {
  return (
    <div className="mb-4">
      <label className="block text-xs text-slate-400 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function GeneralSettings() {
  const [depotName, setDepotName] = useState("Gandhinagar Depot GJ4");
  const [currency, setCurrency] = useState("INR (Rs)");
  const [distanceUnit, setDistanceUnit] = useState("Kilometers");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // TODO: persist { depotName, currency, distanceUnit } to your API / store
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h2 className="text-xs font-semibold text-slate-400 tracking-wide mb-3">
        GENERAL
      </h2>

      <FormField label="Depot name">
        <input
          className={inputClasses}
          value={depotName}
          onChange={(e) => setDepotName(e.target.value)}
        />
      </FormField>

      <FormField label="Currency">
        <input
          className={inputClasses}
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
      </FormField>

      <FormField label="Distance unit">
        <input
          className={inputClasses}
          value={distanceUnit}
          onChange={(e) => setDistanceUnit(e.target.value)}
        />
      </FormField>

      <button
        onClick={handleSave}
        className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-md transition-colors"
      >
        {saved ? "Saved ✓" : "Save changes"}
      </button>
    </div>
  );
}

function RoleBasedAccess() {
  return (
    <div>
      <h2 className="text-xs font-semibold text-slate-400 tracking-wide mb-3">
        ROLE-BASED ACCESS (RBAC)
      </h2>
      <div className="overflow-x-auto border border-slate-800 rounded-lg bg-slate-900/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wide">
              <th className="text-left font-medium px-4 py-3">Role</th>
              {RBAC_COLUMNS.map((col) => (
                <th key={col.key} className="text-left font-medium px-4 py-3">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RBAC_ROWS.map((row, i) => (
              <tr
                key={row.role}
                className={`border-t border-slate-800 ${
                  i % 2 === 0 ? "bg-transparent" : "bg-slate-800/20"
                }`}
              >
                <td className="px-4 py-3 font-semibold text-white">
                  {row.role}
                </td>
                {RBAC_COLUMNS.map((col) => (
                  <td key={col.key} className="px-4 py-3">
                    <AccessCell value={row[col.key]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function SettingsRBAC() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <GeneralSettings />
      <RoleBasedAccess />
    </div>
  );
}
