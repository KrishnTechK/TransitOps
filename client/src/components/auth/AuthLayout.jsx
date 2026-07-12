// Shared shell for the Login and Signup pages: the TransitOps
// logo, dark gradient background, and a centered rounded card.
export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#0a0f1c] bg-[radial-gradient(circle_at_top,_#111a2e_0%,_#0a0f1c_60%)] px-4 py-10">
      <div className="w-full max-w-md animate-fadeInUp">
        {/* Brand */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400" />
          </span>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            TransitOps
          </h1>
        </div>

        {/* Card */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl shadow-2xl shadow-black/40 px-7 py-8 backdrop-blur-sm">
          <div className="mb-6 text-center">
            <h2 className="text-xl font-semibold text-white">{title}</h2>
            {subtitle && (
              <p className="text-sm text-slate-400 mt-1.5">{subtitle}</p>
            )}
          </div>
          {children}
        </div>

        <p className="text-center text-xs text-slate-600 mt-6">
          © {new Date().getFullYear()} TransitOps. All rights reserved.
        </p>
      </div>
    </div>
  );
}
