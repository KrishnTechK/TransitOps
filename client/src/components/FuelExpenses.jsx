import { useState } from "react";
import { Plus } from "lucide-react";

// Mock data — replace with your API / store data
const initialFuelLogs = [
  { id: 1, vehicle: "VAN-05", date: "05 Jul 2026", liters: 42, fuelCost: 5150 },
  { id: 2, vehicle: "TRUCK-11", date: "06 Jul 2026", liters: 10, fuelCost: 8400 },
  { id: 3, vehicle: "MINI-03", date: "06 Jul 2026", liters: 28, fuelCost: 2050 },
];

const initialExpenses = [
  {
    id: 1,
    trip: "TRD001",
    vehicle: "VAN-05",
    toll: 120,
    other: 0,
    status: "Available",
  },
  {
    id: 2,
    trip: "TRD001",
    vehicle: "TRK-12",
    toll: 340,
    other: 150,
    status: "Completed",
  },
];

const STATUS_STYLES = {
  Available: "bg-emerald-500 text-white",
  Completed: "bg-emerald-600 text-white",
};

const inputClasses =
  "w-full bg-slate-900 border border-slate-700 rounded-md px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400/40 focus:border-amber-400";

function FormField({ label, children }) {
  return (
    <div>
      <label className="block text-xs text-slate-400 mb-1.5">{label}</label>
      {children}
    </div>
  );
}

function LogFuelForm({ onSubmit, onCancel }) {
  const [vehicle, setVehicle] = useState("VAN-05");
  const [date, setDate] = useState("2026-07-12");
  const [liters, setLiters] = useState(0);
  const [fuelCost, setFuelCost] = useState(0);

  return (
    <div className="border border-slate-800 bg-slate-900/60 rounded-lg p-4 mb-4 grid grid-cols-2 md:grid-cols-4 gap-3 items-end">
      <FormField label="Vehicle">
        <input className={inputClasses} value={vehicle} onChange={(e) => setVehicle(e.target.value)} />
      </FormField>
      <FormField label="Date">
        <input type="date" className={inputClasses} value={date} onChange={(e) => setDate(e.target.value)} />
      </FormField>
      <FormField label="Liters">
        <input type="number" className={inputClasses} value={liters} onChange={(e) => setLiters(Number(e.target.value))} />
      </FormField>
      <FormField label="Fuel cost">
        <input type="number" className={inputClasses} value={fuelCost} onChange={(e) => setFuelCost(Number(e.target.value))} />
      </FormField>
      <div className="col-span-2 md:col-span-4 flex gap-3 mt-1">
        <button
          onClick={() => onSubmit({ vehicle, date, liters, fuelCost })}
          className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-md transition-colors"
        >
          Save fuel log
        </button>
        <button
          onClick={onCancel}
          className="text-sm font-medium px-4 py-2 rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

function AddExpenseForm({ onSubmit, onCancel }) {
  const [trip, setTrip] = useState("TRD001");
  const [vehicle, setVehicle] = useState("VAN-05");
  const [toll, setToll] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div className="border border-slate-800 bg-slate-900/60 rounded-lg p-4 mb-4 grid grid-cols-2 md:grid-cols-4 gap-3 items-end">
      <FormField label="Trip">
        <input className={inputClasses} value={trip} onChange={(e) => setTrip(e.target.value)} />
      </FormField>
      <FormField label="Vehicle">
        <input className={inputClasses} value={vehicle} onChange={(e) => setVehicle(e.target.value)} />
      </FormField>
      <FormField label="Toll">
        <input type="number" className={inputClasses} value={toll} onChange={(e) => setToll(Number(e.target.value))} />
      </FormField>
      <FormField label="Other">
        <input type="number" className={inputClasses} value={other} onChange={(e) => setOther(Number(e.target.value))} />
      </FormField>
      <div className="col-span-2 md:col-span-4 flex gap-3 mt-1">
        <button
          onClick={() => onSubmit({ trip, vehicle, toll, other, status: "Available" })}
          className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-md transition-colors"
        >
          Save expense
        </button>
        <button
          onClick={onCancel}
          className="text-sm font-medium px-4 py-2 rounded-md border border-slate-700 text-slate-300 hover:bg-slate-800 transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default function FuelExpenses() {
  const [fuelLogs, setFuelLogs] = useState(initialFuelLogs);
  const [expenses, setExpenses] = useState(initialExpenses);
  const [activeForm, setActiveForm] = useState(null); // 'fuel' | 'expense' | null

  const fuelTotal = fuelLogs.reduce((sum, f) => sum + f.fuelCost, 0);
  const miscTotal = expenses.reduce((sum, e) => sum + e.toll + e.other, 0);
  const totalOperationalCost = fuelTotal + miscTotal;

  return (
    <div>
      {/* Fuel logs */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xs font-semibold text-slate-400 tracking-wide">
          FUEL LOGS
        </h2>
        <div className="flex gap-3">
          <button
            onClick={() => setActiveForm(activeForm === "fuel" ? null : "fuel")}
            className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          >
            <Plus className="w-4 h-4" />
            Log fuel
          </button>
          <button
            onClick={() => setActiveForm(activeForm === "expense" ? null : "expense")}
            className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-black text-sm font-semibold px-4 py-2 rounded-md transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add expense
          </button>
        </div>
      </div>

      {activeForm === "fuel" && (
        <LogFuelForm
          onCancel={() => setActiveForm(null)}
          onSubmit={(entry) => {
            setFuelLogs([{ id: fuelLogs.length + 1, ...entry }, ...fuelLogs]);
            setActiveForm(null);
          }}
        />
      )}
      {activeForm === "expense" && (
        <AddExpenseForm
          onCancel={() => setActiveForm(null)}
          onSubmit={(entry) => {
            setExpenses([{ id: expenses.length + 1, ...entry }, ...expenses]);
            setActiveForm(null);
          }}
        />
      )}

      <div className="overflow-x-auto border border-slate-800 rounded-lg bg-slate-900/60 mb-8">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wide">
              <th className="text-left font-medium px-4 py-3">Vehicle</th>
              <th className="text-left font-medium px-4 py-3">Date</th>
              <th className="text-left font-medium px-4 py-3">Liters</th>
              <th className="text-left font-medium px-4 py-3">Fuel cost</th>
            </tr>
          </thead>
          <tbody>
            {fuelLogs.map((log, i) => (
              <tr
                key={log.id}
                className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-transparent" : "bg-slate-800/20"}`}
              >
                <td className="px-4 py-3 font-semibold text-white">{log.vehicle}</td>
                <td className="px-4 py-3 text-slate-300">{log.date}</td>
                <td className="px-4 py-3 text-slate-300">{log.liters} L</td>
                <td className="px-4 py-3 text-slate-300">
                  {log.fuelCost.toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Other expenses */}
      <h2 className="text-xs font-semibold text-slate-400 tracking-wide mb-3">
        OTHER EXPENSES (TOLL / MISC)
      </h2>
      <div className="overflow-x-auto border border-slate-800 rounded-lg bg-slate-900/60 mb-6">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wide">
              <th className="text-left font-medium px-4 py-3">Trip</th>
              <th className="text-left font-medium px-4 py-3">Vehicle</th>
              <th className="text-left font-medium px-4 py-3">Toll</th>
              <th className="text-left font-medium px-4 py-3">Other</th>
              <th className="text-left font-medium px-4 py-3">Total</th>
              <th className="text-left font-medium px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((exp, i) => (
              <tr
                key={exp.id}
                className={`border-t border-slate-800 ${i % 2 === 0 ? "bg-transparent" : "bg-slate-800/20"}`}
              >
                <td className="px-4 py-3 font-semibold text-white">{exp.trip}</td>
                <td className="px-4 py-3 text-slate-300">{exp.vehicle}</td>
                <td className="px-4 py-3 text-slate-300">{exp.toll}</td>
                <td className="px-4 py-3 text-slate-300">{exp.other}</td>
                <td className="px-4 py-3 text-slate-300">
                  {(exp.toll + exp.other).toLocaleString("en-IN")}
                </td>
                <td className="px-4 py-3">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${STATUS_STYLES[exp.status]}`}>
                    {exp.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-sm text-slate-400">
        Total operational cost (auto) = Fuel + Misc ={" "}
        <span className="text-amber-400 font-semibold">
          ₹{totalOperationalCost.toLocaleString("en-IN")}
        </span>
      </p>
    </div>
  );
}
