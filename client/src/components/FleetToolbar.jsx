import { Search, Plus } from 'lucide-react';
import { vehicleTypes, vehicleStatusFilters } from '../data/mockData';

export default function FleetToolbar({ type, setType, status, setStatus, query, setQuery, onAddVehicle }) {
  return (
    <div className="flex flex-wrap items-center gap-3 mb-5">
      <label className="flex items-center gap-2 bg-ink-800 border border-ink-600 rounded-md pl-3 pr-2 py-1.5 text-[12.5px] text-mist-300 hover:border-ink-500 transition cursor-pointer">
        <span className="text-mist-400">Type</span>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="bg-transparent text-mist-100 focus:outline-none cursor-pointer appearance-none pr-1"
        >
          {vehicleTypes.map((o) => (
            <option key={o} className="bg-ink-800">
              {o}
            </option>
          ))}
        </select>
      </label>

      <label className="flex items-center gap-2 bg-ink-800 border border-ink-600 rounded-md pl-3 pr-2 py-1.5 text-[12.5px] text-mist-300 hover:border-ink-500 transition cursor-pointer">
        <span className="text-mist-400">Status</span>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="bg-transparent text-mist-100 focus:outline-none cursor-pointer appearance-none pr-1"
        >
          {vehicleStatusFilters.map((o) => (
            <option key={o} className="bg-ink-800">
              {o}
            </option>
          ))}
        </select>
      </label>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-mist-400" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search reg. no…"
          className="bg-ink-800 border border-ink-600 rounded-md pl-9 pr-3 py-1.5 text-[12.5px] text-mist-100 placeholder:text-mist-400 focus:outline-none focus:border-signal-teal/60 focus:shadow-glow transition w-48"
        />
      </div>

      <button
        onClick={onAddVehicle}
        className="ml-auto flex items-center gap-1.5 bg-signal-amber hover:bg-signal-amber/90 transition text-ink-950 text-[12.5px] font-semibold rounded-md pl-2.5 pr-3.5 py-2"
      >
        <Plus className="w-3.5 h-3.5" strokeWidth={2.75} />
        Add vehicle
      </button>
    </div>
  );
}
