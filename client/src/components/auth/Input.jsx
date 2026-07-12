import { useState } from "react";

// Reusable form input used by both Login and Signup.
// Supports a password show/hide toggle via `isPassword` and
// surfaces validation errors under the field.
export default function Input({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder = "",
  error = "",
  isPassword = false,
  autoComplete,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const resolvedType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="mb-5">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-slate-300 mb-1.5"
      >
        {label}
      </label>

      <div className="relative">
        <input
          id={id}
          name={id}
          type={resolvedType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
          className={`w-full bg-slate-900 border rounded-lg px-3.5 py-2.5 pr-${
            isPassword ? "11" : "3.5"
          } text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 ${
            error
              ? "border-red-500 focus:ring-red-500/40"
              : "border-slate-700 focus:ring-amber-400/40 focus:border-amber-400"
          }`}
        />

        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs font-medium"
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>

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
