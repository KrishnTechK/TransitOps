import { NavLink } from 'react-router-dom';
import { navStops } from '../data/mockData';

// Signature element: the nav reads as a transit line — a vertical rail
// connecting each section like stops on a route, with the current
// page rendered as the "next stop" the operator is standing at.
export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-64 shrink-0 flex-col bg-ink-850 border-r border-ink-600 px-5 py-6">
      <div className="flex items-center gap-2 px-1 mb-9">
        <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
          <rect width="32" height="32" rx="7" fill="#12171E" stroke="#232B36" />
          <circle cx="10" cy="16" r="3.4" fill="#2AD3C4" />
          <circle cx="22" cy="16" r="3.4" fill="#FFB020" />
          <path d="M13.4 16H18.6" stroke="#2AD3C4" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span className="font-display font-semibold text-[17px] tracking-tight text-mist-100">
          TransitOps
        </span>
      </div>

      <nav className="relative flex-1">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-600" aria-hidden="true" />
        <ul className="space-y-0.5">
          {navStops.map((stop) => (
            <li key={stop.key} className="relative">
              <NavLink
                to={stop.key === 'dashboard' ? '/dashboard' : `/${stop.key}`}
                className={({ isActive }) =>
                  `group flex items-center gap-3.5 pl-0.5 pr-3 py-2.5 rounded-md text-[13.5px] transition-colors ${
                    isActive
                      ? 'text-mist-100'
                      : 'text-mist-300 hover:text-mist-100'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="relative z-10 flex items-center justify-center w-3.5 h-3.5">
                      <span
                        className={`relative w-2 h-2 rounded-full transition-all ${
                          isActive
                            ? 'bg-signal-teal shadow-[0_0_0_3px_rgba(42,211,196,0.18)]'
                            : 'bg-ink-500 group-hover:bg-mist-300'
                        }`}
                      >
                        {isActive && <span className="absolute inset-0 rounded-full text-signal-teal pulse-dot" />}
                      </span>
                    </span>
                    <span className={isActive ? 'font-medium' : ''}>{stop.label}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-4 mt-4 border-t border-ink-600">
        <p className="text-[11px] text-mist-400 font-mono px-0.5">
          DISPATCH REGION <span className="text-mist-200">NA-EAST-04</span>
        </p>
      </div>
    </aside>
  );
}
