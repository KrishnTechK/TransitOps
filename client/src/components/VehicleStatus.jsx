import { vehicleStatus, fleetUtilization } from '../data/mockData';

const barTone = {
  green: 'bg-signal-green',
  blue: 'bg-signal-blue',
  amber: 'bg-signal-amber',
  red: 'bg-signal-red',
};

export default function VehicleStatus() {
  const total = vehicleStatus.reduce((s, v) => s + v.value, 0);

  return (
    <div className="bg-ink-800 border border-ink-600 rounded-lg p-5 h-full flex flex-col">
      <div className="flex items-center justify-between mb-1">
        <h2 className="font-display font-semibold text-[13.5px] text-mist-100">
          Vehicle status
        </h2>
        <span className="text-[11px] font-mono text-mist-400">TRACK OCCUPANCY</span>
      </div>

      {/* segmented occupancy track — echoes a transit platform indicator */}
      <div className="flex h-2 rounded-full overflow-hidden bg-ink-700 my-4">
        {vehicleStatus.map((v) => (
          <div
            key={v.label}
            className={`${barTone[v.tone]} first:rounded-l-full last:rounded-r-full`}
            style={{ width: `${(v.value / total) * 100}%` }}
          />
        ))}
      </div>

      <ul className="space-y-3 flex-1">
        {vehicleStatus.map((v) => (
          <li key={v.label} className="flex items-center gap-3">
            <span className={`w-2 h-2 rounded-full ${barTone[v.tone]} shrink-0`} />
            <span className="text-[12.5px] text-mist-300 flex-1">{v.label}</span>
            <span className="text-[12.5px] font-mono text-mist-100 font-tabular">{v.value}</span>
          </li>
        ))}
      </ul>

      <div className="pt-4 mt-1 border-t border-ink-600 flex items-center justify-between">
        <span className="text-[12px] text-mist-400">Fleet utilization</span>
        <span className="font-display text-lg font-semibold text-signal-teal font-tabular">
          {fleetUtilization}%
        </span>
      </div>
    </div>
  );
}
