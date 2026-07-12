import { useState } from "react";

// Mock data — replace with your API / store data
const initialServiceLog = [
  {
    id: 1,
    vehicle: "VAN-05",
    service: "Oil Change",
    cost: 2500,
    status: "In Shop",
  },
  {
    id: 2,
    vehicle: "TRUCK-11",
    service: "Engine Repair",
    cost: 18000,
    status: "Completed",
  },
  {
    id: 3,
    vehicle: "MINI-03",
    service: "Tyre Replace",
    cost: 6200,
    status: "In Shop",
  },
];

const STATUS_STYLES = {
  "In Shop": "bg-amber-500 text-black",
  Completed: "bg-emerald-500 text-white",
  Active: "bg-blue-500 text-white",
};

const STATUS_OPTIONS = ["Active", "In Shop", "Completed"];

function FormField({ label, children }) {
  return (
    <div className="mb-4">
      <label className="block text-xs text-slate-400 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputClasses =
  "w-full bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400";

function LogServiceForm({ onSave }) {
  const [vehicle, setVehicle] = useState("VAN-05");
  const [serviceType, setServiceType] = useState("Oil Change");
  const [cost, setCost] = useState(2500);
  const [date, setDate] = useState("2026-07-12");
  const [status, setStatus] = useState("In Shop");

  const handleSave = () => {
    onSave({ vehicle, service: serviceType, cost, status });
  };

  return (
    <div>
      <h2 className="text-xs font-semibold text-slate-400 tracking-wide mb-3">
        LOG SERVICE RECORD
      </h2>

      <FormField label="Vehicle">
        <input
          className={inputClasses}
          value={vehicle}
          onChange={(e) => setVehicle(e.target.value)}
          placeholder="VAN-05"
        />
      </FormField>

      <FormField label="Service type">
        <input
          className={inputClasses}
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          placeholder="Oil Change"
        />
      </FormField>

      <FormField label="Cost">
        <input
          type="number"
          className={inputClasses}
          value={cost}
          onChange={(e) => setCost(Number(e.target.value))}
        />
      </FormField>

      <FormField label="Date">
        <input
          type="date"
          className={inputClasses}
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </FormField>

      <FormField label="Status">
        <select
          className={inputClasses}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          {STATUS_OPTIONS.map((opt) => (
            <option key={opt} value={opt} className="bg-slate-900">
              {opt}
            </option>
          ))}
        </select>
      </FormField>

      <button
        onClick={handleSave}
        className="w-full bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2.5 rounded-md transition-colors mb-5"
      >
        Save
      </button>

      <div className="text-xs space-y-1.5 mb-3">
        <p className="text-emerald-400">
          Available{" "}
          <span className="text-slate-500">
            — creating active record →
          </span>{" "}
          <span className="text-amber-400">In Shop</span>
        </p>
        <p className="text-amber-400">
          In Shop{" "}
          <span className="text-slate-500">
            — closing record (cost &gt; 0) →
          </span>{" "}
          <span className="text-emerald-400">Available</span>
        </p>
      </div>

      <p className="text-xs text-amber-400 italic">
        Note: In Shop vehicles are removed from the dispatch pool.
      </p>
    </div>
  );
}

function ServiceLogTable({ logs }) {
  return (
    <div>
      <h2 className="text-xs font-semibold text-slate-400 tracking-wide mb-3">
        SERVICE LOG
      </h2>
      <div className="overflow-x-auto border border-slate-800 rounded-lg bg-slate-900/60">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wide">
              <th className="text-left font-medium px-4 py-3">Vehicle</th>
              <th className="text-left font-medium px-4 py-3">Service</th>
              <th className="text-left font-medium px-4 py-3">Cost</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, i) => (
              <tr
                key={log.id}
                className={`border-t border-slate-800 ${
                  i % 2 === 0 ? "bg-transparent" : "bg-slate-800/20"
                }`}
              >
                <td className="px-4 py-3 font-semibold text-white">
                  {log.vehicle}
                </td>
                <td className="px-4 py-3 text-slate-300">{log.service}</td>
                <td className="px-4 py-3 text-slate-300">
                  {log.cost.toLocaleString("en-IN")}
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full ${STATUS_STYLES[log.status]}`}
                  >
                    {log.status}
                  </span>
                </td>
              </tr>
            ))}
            {logs.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center text-slate-500 py-8">
                  No service records yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function MaintenanceLog() {
  const [logs, setLogs] = useState(initialServiceLog);

  const handleSave = (entry) => {
    setLogs([{ id: logs.length + 1, ...entry }, ...logs]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <LogServiceForm onSave={handleSave} />
      <ServiceLogTable logs={logs} />
    </div>
  );
}
