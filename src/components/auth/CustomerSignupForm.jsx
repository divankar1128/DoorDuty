import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function CustomerSignupForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    await new Promise((resolve) =>
      setTimeout(resolve, 1500)
    );

    setLoading(false);

    alert("🎉 Customer account created successfully!");

    navigate("/login");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
              {/* Error */}

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      {/* Full Name */}

      <InputField
        icon={<User size={20} />}
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />

      {/* Email */}

      <InputField
        icon={<Mail size={20} />}
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
      />

      {/* Phone */}

      <InputField
        icon={<Phone size={20} />}
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />

      {/* Password */}

      <div className="relative">

        <Lock
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Create Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-12 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
        >
          {showPassword ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>

      {/* Confirm Password */}

      <div className="relative">

        <Lock
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type={showConfirm ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
          className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-12 outline-none transition-all focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />

        <button
          type="button"
          onClick={() => setShowConfirm(!showConfirm)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
        >
          {showConfirm ? (
            <EyeOff size={20} />
          ) : (
            <Eye size={20} />
          )}
        </button>

      </div>

      {/* Terms */}

      <label className="flex items-start gap-3 text-sm text-slate-600">

        <input
          type="checkbox"
          required
          className="mt-1 h-4 w-4 accent-blue-600"
        />

        <span>
          I agree to the
          <Link
            to="/terms"
            className="mx-1 font-semibold text-blue-600 hover:underline"
          >
            Terms
          </Link>
          &
          <Link
            to="/privacy"
            className="ml-1 font-semibold text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>
        </span>

      </label>

      {/* Signup Button */}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:opacity-70"
      >
        {loading ? (
          "Creating Account..."
        ) : (
          <>
            Create Customer Account
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
        className="w-full rounded-2xl border border-slate-200 bg-white py-4 font-medium transition-all hover:bg-slate-50"
      >
        Continue with Google
      </button>

      {/* Login */}

      <p className="text-center text-slate-500">

        Already have an account?{" "}

        <Link
          to="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Login
        </Link>

      </p>

    </form>
  );
  
}
function InputField({
    icon,
    type = "text",
    ...props
  }) {
    return (
      <div className="relative">
  
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>
  
        <input
          {...props}
          type={type}
          required
          className="
            w-full
            rounded-2xl
            border
            border-slate-200
            bg-white
            py-4
            pl-12
            pr-4
            text-slate-700
            placeholder:text-slate-400
            outline-none
            transition-all
            duration-300
            focus:border-blue-500
            focus:ring-4
            focus:ring-blue-100
          "
        />
  
      </div>
    );
  } 

        