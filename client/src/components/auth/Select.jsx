// Reusable select field. Used for the Role dropdown on Signup so
// the user can only pick from the predefined list — no free text.
export default function Select({
  id,
  label,
  value,
  onChange,
  options,
  placeholder = "Select an option",
  error = "",
}) {
  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-300 mb-1.5"
      >
        {label}
      </label>

      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full bg-slate-900 border rounded-lg px-3.5 py-2.5 text-sm text-white transition-colors focus:outline-none focus:ring-2 appearance-none cursor-pointer ${
          error
            ? "border-red-500 focus:ring-red-500/40"
            : "border-slate-700 focus:ring-amber-400/40 focus:border-amber-400"
        }`}
      >
        <option value="" disabled className="text-slate-500">
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-slate-900 text-white">
            {opt}
          </option>
        ))}
      </select>

      {error && (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-xs text-red-400 animate-fadeInUp"
        >
          {error}
        </p>
      )}
    </div>
  );
}
