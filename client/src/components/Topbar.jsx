import { Search, ChevronDown } from 'lucide-react';

export default function Topbar({ title }) {
  return (
    <header className="flex items-center justify-between gap-4 px-6 md:px-8 py-4 border-b border-ink-600 bg-ink-900/80 backdrop-blur">
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <h1 className="font-display font-semibold text-[15px] text-mist-100 hidden md:block shrink-0">
          {title}
        </h1>
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-mist-400" />
          <input
            type="text"
            placeholder="Search vehicles, drivers, trip IDs…"
            className="w-full bg-ink-800 border border-ink-600 rounded-md pl-9 pr-3 py-2 text-[13px] text-mist-100 placeholder:text-mist-400 focus:outline-none focus:border-signal-teal/60 focus:shadow-glow transition"
          />
        </div>
      </div>

      <button className="flex items-center gap-2.5 pl-1 pr-2.5 py-1 rounded-full border border-ink-600 hover:border-ink-500 transition shrink-0">
        <span className="w-7 h-7 rounded-full bg-gradient-to-br from-signal-teal to-signal-blue flex items-center justify-center text-[11px] font-semibold text-ink-950">
          RK
        </span>
        <span className="text-[13px] text-mist-200 hidden sm:block">Raven K.</span>
        <ChevronDown className="w-3.5 h-3.5 text-mist-400" />
      </button>
    </header>
  );
}
