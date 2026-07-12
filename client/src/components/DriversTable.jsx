import { useState } from "react";
import { Search, Plus } from "lucide-react";

// Mock data — replace with your API / store data
const initialDrivers = [
  {
    id: 1,
    name: "Alex",
    licenseNo: "DL-88213",
    category: "LMV",
    expiry: "12/2028",
    contact: "98765xxxxx",
    tripCompletion: 96,
    safety: "Available",
    status: "Available",
  },
  {
    id: 2,
    name: "John",
    licenseNo: "DL-44120",
    category: "HMV",
    expiry: "03/2025",
    expired: true,
    contact: "98220xxxxx",
    tripCompletion: 81,
    safety: "Suspended",
    status: "Suspended",
  },
  {
    id: 3,
    name: "Priya",
    licenseNo: "DL-77031",
    category: "LMV",
    expiry: "08/2027",
    contact: "99110xxxxx",
    tripCompletion: 99,
    safety: "On Trip",
    status: "On Trip",
  },
  {
    id: 4,
    name: "Suresh",
    licenseNo: "DL-90045",
    category: "HMV",
    expiry: "01/2027",
    contact: "97440xxxxx",
    tripCompletion: 88,
    safety: "Available",
    status: "Off Duty",
  },
];

// Status -> Tailwind color classes (dark theme, matches Fleet page pills)
const STATUS_STYLES = {
  Available: "bg-emerald-500 text-white",
  "On Trip": "bg-blue-500 text-white",
  "Off Duty": "bg-slate-500 text-white",
  Suspended: "bg-amber-500 text-black",
};

const STATUS_OPTIONS = ["Available", "On Trip", "Off Duty", "Suspended"];

function StatusBadge({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`text-xs font-semibold px-3 py-1 rounded-full border-none outline-none cursor-pointer appearance-none text-center ${STATUS_STYLES[value]}`}
    >
      {STATUS_OPTIONS.map((opt) => (
        <option key={opt} value={opt} className="bg-slate-800 text-white">
          {opt}
        </option>
      ))}
    </select>
  );
}

export default function DriversTable() {
  const [drivers, setDrivers] = useState(initialDrivers);
  const [search, setSearch] = useState("");

  const updateDriver = (id, field, value) => {
    setDrivers((prev) =>
      prev.map((d) => (d.id === id ? { ...d, [field]: value } : d))
    );
  };

  const filtered = drivers.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.licenseNo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      {/* Toolbar */}
      <div className="flex items-center justify-between mb-4">
        <div className="relative w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm bg-slate-900 border border-slate-700 rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400"
          />
        </div>
        <button
          className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          onClick={() => {
            // TODO: open add-driver modal / form
          }}
        >
          <Plus className="w-4 h-4" />
          Add driver
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto border border-slate-800 rounded-lg bg-slate-900/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wide">
              <th className="text-left font-medium px-4 py-3">Driver</th>
              <th className="text-left font-medium px-4 py-3">License no</th>
              <th className="text-left font-medium px-4 py-3">Category</th>
              <th className="text-left font-medium px-4 py-3">Expiry</th>
              <th className="text-left font-medium px-4 py-3">Contact</th>
              <th className="text-left font-medium px-4 py-3">Trip compl.</th>
              <th className="text-left font-medium px-4 py-3">Safety</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((driver, i) => (
              <tr
                key={driver.id}
                className={`border-t border-slate-800 ${
                  i % 2 === 0 ? "bg-transparent" : "bg-slate-800/20"
                }`}
              >
                <td className="px-4 py-3 font-semibold text-white">
                  {driver.name}
                </td>
                <td className="px-4 py-3 text-slate-300">{driver.licenseNo}</td>
                <td className="px-4 py-3 text-slate-300">{driver.category}</td>
                <td className="px-4 py-3">
                  <span
                    className={
                      driver.expired ? "text-red-400 font-medium" : "text-slate-300"
                    }
                  >
                    {driver.expiry}
                    {driver.expired ? " expired" : ""}
                  </span>
                </td>
                <td className="px-4 py-3 text-slate-300">{driver.contact}</td>
                <td className="px-4 py-3 text-slate-300">
                  {driver.tripCompletion}%
                </td>
                <td className="px-4 py-3">
                  <StatusBadge
                    value={driver.safety}
                    onChange={(v) => updateDriver(driver.id, "safety", v)}
                  />
                </td>
                <td className="px-4 py-3">
                  <StatusBadge
                    value={driver.status}
                    onChange={(v) => updateDriver(driver.id, "status", v)}
                  />
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={8} className="text-center text-slate-500 py-8">
                  No drivers match your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Legend / toggle key */}
      <div className="mt-5">
        <p className="text-xs font-semibold text-slate-400 mb-2">Toggle stat</p>
        <div className="flex gap-2">
          {STATUS_OPTIONS.map((opt) => (
            <span
              key={opt}
              className={`text-xs font-semibold px-3 py-1 rounded-full ${STATUS_STYLES[opt]}`}
            >
              {opt}
            </span>
          ))}
        </div>
        <p className="text-xs text-amber-400 italic mt-3">
          Rule: expired license or suspended status → blocked from trip assignment.
        </p>
      </div>
    </div>
  );
}
