import { Bell, Search } from "lucide-react";

export default function CustomerTopbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      {/* Left */}

      <div>

        <h2 className="text-3xl font-bold text-slate-800">
          Welcome Back 👋
        </h2>

        <p className="mt-1 text-slate-500">
          Manage your bookings and account.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search services..."
            className="w-72 rounded-xl border border-slate-200 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
          />

        </div>

        {/* Notification */}

        <button className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 hover:bg-slate-100">

          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Customer */}

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-2">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Customer"
            className="h-11 w-11 rounded-full object-cover"
          />

          <div>

            <h4 className="font-semibold text-slate-800">
              Rohit Yadav
            </h4>

            <p className="text-sm text-slate-500">
              Customer
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}