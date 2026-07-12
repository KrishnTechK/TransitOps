import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/auth/Input";
import Select from "../../components/auth/Select";
import Button from "../../components/auth/Button";
import {
  validateEmail,
  validatePassword,
  validateRole,
} from "../../utils/validators";

// The role dropdown must only ever show these four options —
// the user can never type a custom role.
const ROLE_OPTIONS = [
  "Fleet Manager",
  "Driver",
  "Safety Officer",
  "Financial Analyst",
];

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "", role: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) setServerError("");
  };

  const validate = () => {
    const errors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password),
      role: validateRole(form.role, ROLE_OPTIONS),
    };
    setFieldErrors(errors);
    return Object.values(errors).every((msg) => !msg);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setLoading(true);
    try {
      await api.post("/auth/signup", {
        email: form.email.trim(),
        password: form.password,
        role: form.role,
      });

      setSuccessMessage("Account created successfully! Redirecting to login…");

      // Give the user a moment to see the success toast, then send
      // them to the login page as required by the spec.
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Something went wrong while signing up. Please try again.";
      setServerError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create your account"
      subtitle="Join TransitOps to start managing your operations"
    >
      {successMessage ? (
        <div
          role="status"
          className="flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-3 text-sm text-emerald-300 animate-fadeInUp"
        >
          <span aria-hidden="true">✓</span>
          <span>{successMessage}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <Input
            id="email"
            label="Email"
            type="email"
            autoComplete="email"
            placeholder="driver@transit.com"
            value={form.email}
            onChange={handleChange}
            error={fieldErrors.email}
          />

          <Input
            id="password"
            label="Password"
            isPassword
            autoComplete="new-password"
            placeholder="At least 6 characters"
            value={form.password}
            onChange={handleChange}
            error={fieldErrors.password}
          />

          <Select
            id="role"
            label="Role"
            value={form.role}
            onChange={handleChange}
            options={ROLE_OPTIONS}
            placeholder="Select your role"
            error={fieldErrors.role}
          />

          {serverError && (
            <div
              role="alert"
              className="mb-5 flex items-start gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-3.5 py-2.5 text-sm text-red-300 animate-shake"
            >
              <span aria-hidden="true">⚠</span>
              <span>{serverError}</span>
            </div>
          )}

          <Button type="submit" loading={loading}>
            Sign Up
          </Button>
        </form>
      )}

      <p className="text-center text-sm text-slate-400 mt-6">
        Already have an account?{" "}
        <Link
          to="/"
          className="text-amber-400 hover:text-amber-300 font-medium"
        >
          Log in
        </Link>
      </p>
    </AuthLayout>
  );
}
