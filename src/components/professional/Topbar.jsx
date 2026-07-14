import { Bell, Search } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex h-20 items-center justify-between border-b bg-white px-8">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-slate-500">
          Welcome back! Here's an overview of your work today.
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-52 bg-transparent text-sm outline-none"
          />

        </div>

        {/* Notification */}

        <button className="relative rounded-xl border border-slate-200 p-3 transition hover:bg-slate-100">

          <Bell
            size={20}
            className="text-slate-700"
          />

          <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-red-500"></span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">

          <img
            src="https://i.pravatar.cc/100?img=12"
            alt="Professional"
            className="h-11 w-11 rounded-full object-cover"
          />

          <div>

            <h4 className="font-semibold text-slate-900">
              Rohit
            </h4>

            <p className="text-sm text-green-600">
              ● Online
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}