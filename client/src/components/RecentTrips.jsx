import { recentTrips } from '../data/mockData';

const statusStyles = {
  'On Trip': 'bg-signal-blue/15 text-signal-blue border-signal-blue/30',
  'Completed': 'bg-signal-green/15 text-signal-green border-signal-green/30',
  'Dispatched': 'bg-signal-teal/15 text-signal-teal border-signal-teal/30',
  'Draft': 'bg-ink-600/60 text-mist-300 border-ink-500/40',
};

export default function RecentTrips() {
  return (
    <div className="bg-ink-800 border border-ink-600 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-ink-600">
        <h2 className="font-display font-semibold text-[13.5px] text-mist-100">
          Recent trips
        </h2>
        <button className="text-[12px] text-signal-teal hover:text-signal-teal/80 transition font-medium">
          View all
        </button>
      </div>
      <div className="overflow-x-auto scrollbar-thin">
        <table className="w-full text-left">
          <thead>
            <tr className="text-[11px] font-mono uppercase tracking-wide text-mist-400 border-b border-ink-600">
              <th className="px-5 py-2.5 font-medium">Trip</th>
              <th className="px-3 py-2.5 font-medium">Vehicle</th>
              <th className="px-3 py-2.5 font-medium">Driver</th>
              <th className="px-3 py-2.5 font-medium">Status</th>
              <th className="px-5 py-2.5 font-medium text-right">ETA</th>
            </tr>
          </thead>
          <tbody>
            {recentTrips.map((t) => (
              <tr
                key={t.id}
                className="border-b border-ink-600/60 last:border-0 hover:bg-ink-700/50 transition-colors"
              >
                <td className="px-5 py-3 text-[13px] font-mono text-mist-200">{t.id}</td>
                <td className="px-3 py-3 text-[13px] text-mist-100">{t.vehicle}</td>
                <td className="px-3 py-3 text-[13px] text-mist-300">{t.driver}</td>
                <td className="px-3 py-3">
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded border text-[11px] font-medium ${statusStyles[t.status]}`}
                  >
                    {t.status}
                  </span>
                </td>
                <td className="px-5 py-3 text-[13px] text-mist-300 text-right font-mono">
                  {t.eta}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
