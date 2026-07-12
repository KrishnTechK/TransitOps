import Spinner from "./Spinner";

// Reusable primary button used across the auth module.
// Handles the disabled + loading visual state in one place so
// Login and Signup don't have to repeat the markup.
export default function Button({
  children,
  type = "button",
  loading = false,
  disabled = false,
  onClick,
  variant = "primary",
  className = "",
}) {
  const isDisabled = disabled || loading;

  const base =
    "w-full flex items-center justify-center gap-2 text-sm font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900";

  const variants = {
    primary:
      "bg-amber-500 hover:bg-amber-400 text-black focus:ring-amber-400 disabled:bg-slate-700 disabled:text-slate-400",
    secondary:
      "bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 focus:ring-slate-500",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`${base} ${variants[variant]} ${
        isDisabled ? "cursor-not-allowed" : "cursor-pointer active:scale-[0.98]"
      } ${className}`}
    >
      {loading && <Spinner />}
      {loading ? "Please wait…" : children}
    </button>
  );
}
