import { useState } from "react";
import DashboardLayout from "../../components/professional/DashboardLayout";

export default function ProfessionalProfile() {
  const [profile, setProfile] = useState({
    name: "Rohit Yadav",
    phone: "+91 9876543210",
    email: "rohit@example.com",
    city: "New Delhi",
    experience: "3 Years",
    service: "AC Repair",
  });

  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <DashboardLayout>

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-900">
          My Profile
        </h1>

        <p className="mt-2 text-slate-500">
          Update your personal and professional information.
        </p>

      </div>

      <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

        {/* Left Card */}

        <div className="rounded-3xl bg-white p-8 text-center shadow-sm">

          <img
            src="https://i.pravatar.cc/200?img=12"
            alt="Profile"
            className="mx-auto h-36 w-36 rounded-full border-4 border-blue-100 object-cover"
          />

          <button className="mt-6 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">
            Change Photo
          </button>

          <div className="mt-8 border-t pt-8">

            <h2 className="text-2xl font-bold">
              {profile.name}
            </h2>

            <p className="mt-2 text-slate-500">
              {profile.service}
            </p>

            <span className="mt-5 inline-block rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700">
              ✔ Verified Professional
            </span>

          </div>

        </div>

        {/* Right Form */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-semibold">
                Full Name
              </label>

              <input
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Phone
              </label>

              <input
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Email
              </label>

              <input
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                City
              </label>

              <input
                name="city"
                value={profile.city}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-600"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Experience
              </label>

              <select
                name="experience"
                value={profile.experience}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
              >
                <option>1 Year</option>
                <option>2 Years</option>
                <option>3 Years</option>
                <option>5+ Years</option>
                <option>10+ Years</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Service
              </label>

              <select
                name="service"
                value={profile.service}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none"
              >
                <option>Home Cleaning</option>
                <option>Plumbing</option>
                <option>Electrician</option>
                <option>AC Repair</option>
                <option>Painting</option>
                <option>Carpentry</option>
              </select>
            </div>

          </div>

          <button className="mt-10 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
            Save Changes
          </button>

        </div>

      </div>

    </DashboardLayout>
  );
}