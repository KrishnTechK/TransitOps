const statusStyles = {
  Available: 'bg-signal-green text-ink-950',
  'On Trip': 'bg-signal-blue text-ink-950',
  'In Shop': 'bg-signal-amber text-ink-950',
  Retired: 'bg-signal-red text-ink-950',
};

export default function VehicleTable({ vehicles }) {
  return (
    <div className="bg-ink-800 border border-ink-600 rounded-lg overflow-hidden">
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[11px] font-mono uppercase tracking-wide text-mist-400 border-b border-ink-600">
              <th className="px-5 py-2.5 font-medium">Reg. no. (unique)</th>
              <th className="px-3 py-2.5 font-medium">Name / Model</th>
              <th className="px-3 py-2.5 font-medium">Type</th>
              <th className="px-3 py-2.5 font-medium">Capacity</th>
              <th className="px-3 py-2.5 font-medium text-right">Odometer</th>
              <th className="px-3 py-2.5 font-medium text-right">Acq. cost</th>
              <th className="px-5 py-2.5 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((v) => (
              <tr
                key={v.reg}
                className="border-b border-ink-600/60 last:border-0 hover:bg-ink-700/50 transition-colors"
              >
                <td className="px-5 py-3 text-[13px] font-mono text-mist-200">{v.reg}</td>
                <td className="px-3 py-3 text-[13px] text-mist-100 font-medium">{v.name}</td>
                <td className="px-3 py-3 text-[13px] text-mist-300">{v.type}</td>
                <td className="px-3 py-3 text-[13px] text-mist-300 font-tabular">{v.capacity}</td>
                <td className="px-3 py-3 text-[13px] text-mist-300 text-right font-mono font-tabular">
                  {v.odometer.toLocaleString('en-IN')} km
                </td>
                <td className="px-3 py-3 text-[13px] text-mist-300 text-right font-mono font-tabular">
                  ₹{v.cost.toLocaleString('en-IN')}
                </td>
                <td className="px-5 py-3">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-semibold ${statusStyles[v.status]}`}
                  >
                    {v.status}
                  </span>
                </td>
              </tr>
            ))}
            {vehicles.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-10 text-center text-[13px] text-mist-400">
                  No vehicles match these filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
