const toneMap = {
  blue: 'text-signal-blue border-signal-blue/25',
  green: 'text-signal-green border-signal-green/25',
  amber: 'text-signal-amber border-signal-amber/25',
  teal: 'text-signal-teal border-signal-teal/25',
  mist: 'text-mist-300 border-ink-500/40',
};

export default function StatCard({ label, value, tone = 'mist', index = 0 }) {
  return (
    <div
      className={`rise-in bg-ink-800 border-t-2 ${toneMap[tone]} border-x border-b border-ink-600 rounded-lg px-4 py-3.5`}
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <p className="text-[11px] font-mono uppercase tracking-wide text-mist-400 mb-1.5 truncate">
        {label}
      </p>
      <p className="font-display text-2xl font-semibold text-mist-100 font-tabular">
        {value}
      </p>
    </div>
  );
}
