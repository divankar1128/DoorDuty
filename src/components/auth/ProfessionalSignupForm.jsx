import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  Upload,
  MapPin,
  Briefcase,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const cities = [
  "Delhi",
  "Noida",
  "Gurugram",
  "Ghaziabad",
  "Faridabad",
  "Mumbai",
  "Pune",
  "Bangalore",
  "Hyderabad",
  "Chennai",
];

const services = [
  "Home Cleaning",
  "Deep Cleaning",
  "Plumbing",
  "Electrician",
  "AC Repair",
  "Painting",
  "Carpenter",
  "Salon At Home",
  "Pest Control",
  "Appliance Repair",
];

export default function ProfessionalSignupForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    service: "",
    experience: "",
    aadhaar: "",
    address: "",
    bio: "",
    charges: "",
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
      setTimeout(resolve, 1800)
    );

    setLoading(false);

    alert("🎉 Professional account submitted successfully!");

    navigate("/login");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
              {/* Error */}

      {error && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-red-600">
          {error}
        </div>
      )}

      {/* Personal Information */}

      <div>

        <h3 className="mb-6 text-xl font-bold text-slate-900">
          Personal Information
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <InputField
            icon={<User size={20} />}
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <InputField
            icon={<Mail size={20} />}
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <InputField
            icon={<Phone size={20} />}
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <div className="relative">

            <MapPin
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              className="w-full appearance-none rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">
                Select City
              </option>

              {cities.map((city) => (
                <option
                  key={city}
                  value={city}
                >
                  {city}
                </option>
              ))}

            </select>

          </div>

        </div>

      </div>

      {/* Professional Information */}

      <div className="pt-6">

        <h3 className="mb-6 text-xl font-bold text-slate-900">
          Professional Information
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

          <div className="relative">

            <Briefcase
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className="w-full appearance-none rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            >
              <option value="">
                Select Service
              </option>

              {services.map((service) => (
                <option
                  key={service}
                  value={service}
                >
                  {service}
                </option>
              ))}

            </select>

          </div>

          <InputField
            icon={<BadgeCheck size={20} />}
            name="experience"
            placeholder="Years of Experience"
            value={form.experience}
            onChange={handleChange}
          />

        </div>

      </div>
            {/* Verification & Business Details */}

            <div className="pt-6">

<h3 className="mb-6 text-xl font-bold text-slate-900">
  Verification & Business Details
</h3>

<div className="space-y-5">

  <InputField
    icon={<BadgeCheck size={20} />}
    name="aadhaar"
    placeholder="Aadhaar Number"
    value={form.aadhaar}
    onChange={handleChange}
  />

  {/* Address */}

  <textarea
    name="address"
    value={form.address}
    onChange={handleChange}
    rows={3}
    placeholder="Complete Address"
    className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
  />

  {/* Professional Bio */}

  <textarea
    name="bio"
    value={form.bio}
    onChange={handleChange}
    rows={4}
    placeholder="Tell customers about your experience, skills and work..."
    className="w-full rounded-2xl border border-slate-200 px-5 py-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
  />

  <InputField
    icon={<Briefcase size={20} />}
    name="charges"
    placeholder="Expected Charges (₹ / Visit)"
    value={form.charges}
    onChange={handleChange}
  />

</div>

</div>

{/* Upload Documents */}

<div className="pt-6">

<h3 className="mb-6 text-xl font-bold text-slate-900">
  Upload Documents
</h3>

<div className="grid gap-5 md:grid-cols-2">

  {/* Profile Photo */}

  <label className="group cursor-pointer rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center transition-all duration-300 hover:border-blue-500 hover:bg-blue-50">

    <Upload
      size={42}
      className="mx-auto text-blue-600 transition group-hover:scale-110"
    />

    <h4 className="mt-5 text-lg font-bold text-slate-900">
      Upload Profile Photo
    </h4>

    <p className="mt-2 text-sm text-slate-500">
      JPG, PNG (Max 5MB)
    </p>

    <input
      type="file"
      className="hidden"
    />

  </label>

  {/* Aadhaar */}

  <label className="group cursor-pointer rounded-3xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center transition-all duration-300 hover:border-blue-500 hover:bg-blue-50">

    <Upload
      size={42}
      className="mx-auto text-blue-600 transition group-hover:scale-110"
    />

    <h4 className="mt-5 text-lg font-bold text-slate-900">
      Upload Aadhaar
    </h4>

    <p className="mt-2 text-sm text-slate-500">
      PDF, JPG or PNG
    </p>

    <input
      type="file"
      className="hidden"
    />

  </label>

</div>

</div>
      {/* Password Section */}

      <div className="pt-6">

        <h3 className="mb-6 text-xl font-bold text-slate-900">
          Account Security
        </h3>

        <div className="grid gap-5 md:grid-cols-2">

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
              className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-12 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
              className="w-full rounded-2xl border border-slate-200 py-4 pl-12 pr-12 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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

        </div>

      </div>

      {/* Terms */}

      <label className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5">

        <input
          type="checkbox"
          required
          className="mt-1 h-5 w-5 accent-blue-600"
        />

        <span className="text-sm leading-6 text-slate-600">

          I confirm that all the information provided is correct.
          I agree to Door&Duty's

          <Link
            to="/terms"
            className="mx-1 font-semibold text-blue-600 hover:underline"
          >
            Terms & Conditions
          </Link>

          and

          <Link
            to="/privacy"
            className="ml-1 font-semibold text-blue-600 hover:underline"
          >
            Privacy Policy
          </Link>

        </span>

      </label>

      {/* Submit */}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          "Submitting Application..."
        ) : (
          <>
            Become a Professional
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
        className="w-full rounded-2xl border border-slate-200 bg-white py-4 font-medium transition hover:bg-slate-50"
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
/* =====================================================
            Reusable Input Component
===================================================== */

function InputField({
    icon,
    type = "text",
    ...props
  }) {
    return (
      <div className="relative">
  
        {/* Icon */}
  
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
  
          {icon}
  
        </div>
  
        {/* Input */}
  
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