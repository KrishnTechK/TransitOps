export default function FilterBar() {
  const filters = [
    { label: 'Vehicle type', options: ['All', 'Van', 'Truck', 'Minibus'] },
    { label: 'Status', options: ['All', 'Active', 'Idle', 'In shop'] },
    { label: 'Region', options: ['All', 'NA-EAST-04', 'NA-WEST-01', 'EU-CEN-02'] },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      <span className="text-[11px] font-mono uppercase tracking-wider text-mist-400 mr-1">
        Filters
      </span>
      {filters.map((f) => (
        <label
          key={f.label}
          className="flex items-center gap-2 bg-ink-800 border border-ink-600 rounded-md pl-3 pr-2 py-1.5 text-[12.5px] text-mist-300 hover:border-ink-500 transition cursor-pointer"
        >
          <span className="text-mist-400">{f.label}</span>
          <select className="bg-transparent text-mist-100 focus:outline-none cursor-pointer appearance-none pr-1">
            {f.options.map((o) => (
              <option key={o} className="bg-ink-800">
                {o}
              </option>
            ))}
          </select>
        </label>
      ))}
    </div>
  );
}
