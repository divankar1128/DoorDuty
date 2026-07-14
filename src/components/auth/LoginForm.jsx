import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function LoginForm({ role }) { 
   const navigate = useNavigate();
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value, checked, type } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError("");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    const result = login(form.email, form.password);

    if (!result.success) {
      setLoading(false);
      setError(result.message);
      return;
    }

    setLoading(false);

    // Save login state
    if (role === "professional") {
      localStorage.setItem("professionalLoggedIn", "true");
      navigate("/professional/dashboard");
    } else {
      localStorage.setItem("customerLoggedIn", "true");
      navigate("/");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">

      {/* Error */}

      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      {/* Email */}

      <div>

        <label className="mb-2 block font-semibold text-slate-700">
          Email Address
        </label>

        <div className="relative">

          <Mail
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

        </div>

      </div>

      {/* Password */}

      <div>

        <label className="mb-2 block font-semibold text-slate-700">
          Password
        </label>

        <div className="relative">

          <Lock
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-14 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>

        </div>

      </div>

      {/* Remember */}

      <div className="flex items-center justify-between">

        <label className="flex items-center gap-2 text-sm text-slate-600">

          <input
            type="checkbox"
            name="remember"
            checked={form.remember}
            onChange={handleChange}
            className="h-4 w-4 accent-blue-600"
          />

          Remember Me

        </label>

        <Link
          to="/forgot-password"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Forgot Password?
        </Link>

      </div>

      {/* Login */}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl disabled:opacity-70"
      >
        {loading ? (
          "Signing In..."
        ) : (
          <>
            Login
            <ArrowRight size={20} />
          </>
        )}
      </button>

      {/* Divider */}

      <div className="relative py-2">

        <div className="absolute left-0 top-1/2 w-full border-t border-slate-200"></div>

        <span className="relative mx-auto block w-fit bg-white px-4 text-sm text-slate-400">
          OR
        </span>

      </div>

      {/* Google */}

      <button
        type="button"
        className="w-full rounded-2xl border border-slate-200 bg-white py-4 font-medium text-slate-700 transition hover:bg-slate-50"
      >
        Continue with Google
      </button>

      {/* Signup */}

      <p className="text-center text-slate-500">

        Don't have an account?{" "}

        <Link
          to="/signup"
          className="font-semibold text-blue-600 hover:underline"
        >
          Create Account
        </Link>

      </p>

      {/* Dummy Credentials */}

      <div className="rounded-2xl bg-blue-50 p-5">

        <h4 className="font-bold text-blue-700">
          Demo Login
        </h4>

        <p className="mt-2 text-sm text-slate-600">
          Email: <strong>rohit@gmail.com</strong>
        </p>

        <p className="text-sm text-slate-600">
          Password: <strong>12345678</strong>
        </p>

      </div>

    </form>
  );
}