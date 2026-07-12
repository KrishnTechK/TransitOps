import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import AuthLayout from "../../components/auth/AuthLayout";
import Input from "../../components/auth/Input";
import Button from "../../components/auth/Button";
import { validateEmail, validatePassword } from "../../utils/validators";
import { setSession } from "../../utils/auth";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [fieldErrors, setFieldErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the field-level error as soon as the user edits it.
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (serverError) setServerError("");
  };

  const validate = () => {
    const errors = {
      email: validateEmail(form.email),
      password: validatePassword(form.password),
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
      const response = await api.post("/auth/login", {
        email: form.email.trim(),
        password: form.password,
      });

      const { token, user } = response.data;
      setSession(token, user);
      navigate("/dashboard");
    } catch (err) {
      const message =
        err.response?.data?.message ||
        "Something went wrong while logging in. Please try again.";
      setServerError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Sign in to manage your fleet operations"
    >
      <form onSubmit={handleSubmit} noValidate>
        <Input
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          placeholder="fleet@transit.com"
          value={form.email}
          onChange={handleChange}
          error={fieldErrors.email}
        />

        <Input
          id="password"
          label="Password"
          isPassword
          autoComplete="current-password"
          placeholder="••••••••"
          value={form.password}
          onChange={handleChange}
          error={fieldErrors.password}
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
          Login
        </Button>
      </form>

      <p className="text-center text-sm text-slate-400 mt-6">
        Don&apos;t have an account?{" "}
        <Link
          to="/signup"
          className="text-amber-400 hover:text-amber-300 font-medium"
        >
          Sign up
        </Link>
      </p>
    </AuthLayout>
  );
}
