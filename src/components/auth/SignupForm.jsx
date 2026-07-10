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

export default function SignupForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

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

    alert("🎉 Account created successfully!");

    navigate("/login");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      {/* Full Name */}

      <Input
        icon={<User size={20} />}
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />

      {/* Email */}

      <Input
        icon={<Mail size={20} />}
        name="email"
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
      />

      {/* Phone */}

      <Input
        icon={<Phone size={20} />}
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />

      {/* Password */}

      <PasswordInput
        show={showPassword}
        setShow={setShowPassword}
        icon={<Lock size={20} />}
        placeholder="Password"
        name="password"
        value={form.password}
        onChange={handleChange}
      />

      {/* Confirm Password */}

      <PasswordInput
        show={showConfirm}
        setShow={setShowConfirm}
        icon={<Lock size={20} />}
        placeholder="Confirm Password"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
      />

      <button
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
      >
        {loading ? (
          "Creating Account..."
        ) : (
          <>
            Create Account
            <ArrowRight size={20} />
          </>
        )}
      </button>

      <div className="relative py-1">
        <div className="absolute top-1/2 w-full border-t border-slate-200"></div>

        <span className="relative mx-auto block w-fit bg-white px-4 text-sm text-slate-400">
          OR
        </span>
      </div>

      <button
        type="button"
        className="w-full rounded-2xl border border-slate-200 py-4 font-medium transition hover:bg-slate-50"
      >
        Continue with Google
      </button>

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

function Input({
  icon,
  ...props
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>

      <input
        {...props}
        required
        className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />
    </div>
  );
}

function PasswordInput({
  icon,
  show,
  setShow,
  ...props
}) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>

      <input
        {...props}
        required
        type={show ? "text" : "password"}
        className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-12 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
      >
        {show ? (
          <EyeOff size={20} />
        ) : (
          <Eye size={20} />
        )}
      </button>
    </div>
  );
}