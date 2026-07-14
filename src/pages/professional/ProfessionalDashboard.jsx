import DashboardLayout from "../../components/professional/DashboardLayout";
import StatsCard from "../../components/professional/StatsCard";

import {
  ClipboardList,
  Wallet,
  Star,
  Users,
  ArrowRight,
} from "lucide-react";

export default function ProfessionalDashboard() {
  const bookings = [
    {
      customer: "Rahul Sharma",
      service: "AC Repair",
      time: "10:00 AM",
      status: "Today",
    },
    {
      customer: "Priya Verma",
      service: "Home Cleaning",
      time: "2:00 PM",
      status: "Today",
    },
    {
      customer: "Amit Kumar",
      service: "Plumbing",
      time: "11:00 AM",
      status: "Tomorrow",
    },
  ];

  return (
    <DashboardLayout>
      {/* Welcome */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 p-8 text-white shadow-xl">

        <h1 className="text-4xl font-bold">
          Welcome back, Rohit 👋
        </h1>

        <p className="mt-3 text-blue-100">
          You are online and ready to accept new bookings.
        </p>

      </div>

      {/* Stats */}

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatsCard
          title="Today's Bookings"
          value="5"
          icon={<ClipboardList size={28} />}
          color="bg-blue-600"
          change="+2 from yesterday"
        />

        <StatsCard
          title="Today's Earnings"
          value="₹3,250"
          icon={<Wallet size={28} />}
          color="bg-green-600"
          change="+18%"
        />

        <StatsCard
          title="Rating"
          value="4.9 ★"
          icon={<Star size={28} />}
          color="bg-yellow-500"
          change="Excellent"
        />

        <StatsCard
          title="Customers"
          value="152"
          icon={<Users size={28} />}
          color="bg-purple-600"
          change="+12 this month"
        />

      </div>

      {/* Bottom Grid */}

      <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">

        {/* Recent Bookings */}

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <div className="mb-6 flex items-center justify-between">

            <h2 className="text-2xl font-bold text-slate-900">
              Recent Bookings
            </h2>

            <button className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700">
              View All
              <ArrowRight size={18} />
            </button>

          </div>

          <div className="space-y-4">

            {bookings.map((booking, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50"
              >
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {booking.service}
                  </h3>

                  <p className="mt-1 text-slate-500">
                    {booking.customer}
                  </p>
                </div>

                <div className="text-right">

                  <p className="font-semibold text-slate-900">
                    {booking.time}
                  </p>

                  <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                    {booking.status}
                  </span>

                </div>
              </div>
            ))}

          </div>

        </div>

        {/* Quick Actions */}

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <h2 className="text-2xl font-bold text-slate-900">
            Quick Actions
          </h2>

          <div className="mt-6 space-y-4">

            <button className="w-full rounded-2xl bg-blue-600 px-5 py-4 font-semibold text-white transition hover:bg-blue-700">
              View Today's Jobs
            </button>

            <button className="w-full rounded-2xl border border-slate-300 px-5 py-4 font-semibold transition hover:bg-slate-100">
              Update Availability
            </button>

            <button className="w-full rounded-2xl border border-slate-300 px-5 py-4 font-semibold transition hover:bg-slate-100">
              Edit Profile
            </button>

            <button className="w-full rounded-2xl border border-slate-300 px-5 py-4 font-semibold transition hover:bg-slate-100">
              View Earnings
            </button>

          </div>

        </div>

      </div>

    </DashboardLayout>
  );
}