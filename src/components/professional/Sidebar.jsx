import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  ClipboardList,
  Wallet,
  User,
  LogOut,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/professional/dashboard",
  },
  {
    title: "My Bookings",
    icon: ClipboardList,
    path: "/professional/bookings",
  },
  {
    title: "Earnings",
    icon: Wallet,
    path: "/professional/earnings",
  },
  {
    title: "Profile",
    icon: User,
    path: "/professional/profile",
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="w-64 border-r bg-white">

      <div className="border-b p-6">

        <h2 className="text-2xl font-bold">
          Door<span className="text-blue-600">&</span>Duty
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Professional Panel
        </p>

      </div>

      <nav className="p-4">

        {menu.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`mb-2 flex items-center gap-3 rounded-xl px-4 py-3 transition ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              <Icon size={20} />

              {item.title}
            </Link>
          );
        })}

        <button className="mt-10 flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-600 transition hover:bg-red-50">

          <LogOut size={20} />

          Logout

        </button>

      </nav>

    </aside>
  );
}