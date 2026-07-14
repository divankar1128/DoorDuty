import CustomerLayout from "../../components/customer/CustomerLayout";
import {
  CalendarDays,
  CheckCircle,
  Crown,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function CustomerDashboard() {
  return (
    <CustomerLayout>

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-900">
          Hello, Rohit 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Here's an overview of your Door&Duty account.
        </p>

      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl bg-white p-6 shadow">

          <CalendarDays className="text-blue-600" size={34} />

          <h2 className="mt-4 text-3xl font-bold">
            2
          </h2>

          <p className="text-slate-500">
            Active Bookings
          </p>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow">

          <CheckCircle className="text-green-600" size={34} />

          <h2 className="mt-4 text-3xl font-bold">
            18
          </h2>

          <p className="text-slate-500">
            Completed Services
          </p>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow">

          <Crown className="text-yellow-500" size={34} />

          <h2 className="mt-4 text-3xl font-bold">
            Gold
          </h2>

          <p className="text-slate-500">
            Membership
          </p>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow">

          <MapPin className="text-red-500" size={34} />

          <h2 className="mt-4 text-3xl font-bold">
            3
          </h2>

          <p className="text-slate-500">
            Saved Addresses
          </p>

        </div>

      </div>

      {/* Bottom Grid */}

      <div className="mt-10 grid gap-8 lg:grid-cols-2">

        {/* Upcoming Booking */}

        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold">
            Upcoming Booking
          </h2>

          <div className="mt-6 rounded-2xl bg-blue-50 p-6">

            <h3 className="text-xl font-semibold">
              AC Repair
            </h3>

            <p className="mt-2 text-slate-600">
              15 July 2026
            </p>

            <p className="text-slate-600">
              10:30 AM
            </p>

            <button className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">

              View Details

              <ArrowRight size={18} />

            </button>

          </div>

        </div>

        {/* Recent Services */}

        <div className="rounded-3xl bg-white p-8 shadow">

          <h2 className="text-2xl font-bold">
            Recent Services
          </h2>

          <div className="mt-6 space-y-4">

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

              <span>✔ Plumbing</span>

              <span className="text-sm text-slate-500">
                Completed
              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

              <span>✔ Home Cleaning</span>

              <span className="text-sm text-slate-500">
                Completed
              </span>

            </div>

            <div className="flex items-center justify-between rounded-xl bg-slate-50 p-4">

              <span>✔ Painting</span>

              <span className="text-sm text-slate-500">
                Completed
              </span>

            </div>

          </div>

        </div>

      </div>

    </CustomerLayout>
  );
}