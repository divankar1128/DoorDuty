import {
    LayoutDashboard,
    CalendarDays,
    Crown,
    MapPin,
    User,
    LogOut,
  } from "lucide-react";
  
  import { NavLink } from "react-router-dom";
  
  const menu = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      path: "/customer/dashboard",
    },
    {
      title: "My Bookings",
      icon: CalendarDays,
      path: "/customer/bookings",
    },
    {
      title: "Membership",
      icon: Crown,
      path: "/customer/membership",
    },
    {
      title: "Addresses",
      icon: MapPin,
      path: "/customer/addresses",
    },
    {
      title: "Profile",
      icon: User,
      path: "/customer/profile",
    },
  ];
  
  export default function CustomerSidebar() {
    return (
      <aside className="flex h-screen w-72 flex-col border-r bg-white">
  
        <div className="border-b p-8">
  
          <h1 className="text-3xl font-bold">
            Door
            <span className="text-blue-600">&</span>
            Duty
          </h1>
  
          <p className="mt-2 text-sm text-slate-500">
            Customer Dashboard
          </p>
  
        </div>
  
        <nav className="flex-1 space-y-2 p-6">
  
          {menu.map((item) => {
  
            const Icon = item.icon;
  
            return (
              <NavLink
                key={item.title}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-xl px-4 py-3 transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 hover:bg-slate-100"
                  }`
                }
              >
                <Icon size={20} />
  
                {item.title}
              </NavLink>
            );
          })}
        </nav>
  
        <div className="border-t p-6">
  
          <button className="flex w-full items-center justify-center gap-3 rounded-xl bg-red-500 py-3 font-semibold text-white hover:bg-red-600">
  
            <LogOut size={18} />
  
            Logout
  
          </button>
  
        </div>
      </aside>
    );
  }