import Topbar from './Topbar';

export default function PlaceholderPage({ title, blurb }) {
  return (
    <div className="flex flex-col h-full">
      <Topbar title={title} />
      <div className="flex-1 overflow-y-auto scrollbar-thin px-6 md:px-8 py-6">
        <div className="rise-in bg-ink-800 border border-dashed border-ink-600 rounded-lg px-6 py-16 flex flex-col items-center text-center">
          <span className="w-2 h-2 rounded-full bg-signal-teal mb-4 relative pulse-dot" />
          <h2 className="font-display font-semibold text-lg text-mist-100 mb-1.5">{title}</h2>
          <p className="text-[13px] text-mist-400 max-w-sm">{blurb}</p>
        </div>
      </div>
    </div>
  );
}
