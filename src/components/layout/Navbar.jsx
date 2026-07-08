import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  "Cleaning",
  "Plumbing",
  "Electrician",
  "AC Repair",
  "Beauty",
  "Carpenter",
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-slate-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-xl font-bold text-white shadow-lg">
            D
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              Door<span className="text-blue-600">&</span>Duty
            </h1>
            <p className="text-xs text-slate-500">
              Trusted Home Professionals
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
          >
            <button className="flex items-center gap-1 font-medium text-slate-700 transition hover:text-blue-600">
              Services
              <ChevronDown size={18} />
            </button>

            {serviceOpen && (
              <div className="absolute left-0 mt-4 w-60 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                {services.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block rounded-xl px-4 py-3 transition hover:bg-slate-100"
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/how-it-works"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            How it Works
          </Link>

          <Link
            to="/membership"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Membership
          </Link>

          <Link
            to="/become-pro"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Become a Pro
          </Link>

          <Link
            to="/support"
            className="font-medium text-slate-700 transition hover:text-blue-600"
          >
            Support
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <button className="rounded-xl border border-slate-300 px-5 py-2.5 font-medium text-slate-700 transition hover:bg-slate-100">
            Login
          </button>

          <button className="rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition hover:bg-blue-700">
            Book Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="rounded-xl p-2 transition hover:bg-slate-100 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-2 p-6">
            <a href="#" className="block rounded-lg p-3 hover:bg-slate-100">
              Services
            </a>

            <a href="#" className="block rounded-lg p-3 hover:bg-slate-100">
              How it Works
            </a>

            <a href="#" className="block rounded-lg p-3 hover:bg-slate-100">
              Membership
            </a>

            <a href="#" className="block rounded-lg p-3 hover:bg-slate-100">
              Become a Pro
            </a>

            <a href="#" className="block rounded-lg p-3 hover:bg-slate-100">
              Support
            </a>

            <div className="mt-6 space-y-3">
              <button className="w-full rounded-xl border border-slate-300 py-3 font-medium">
                Login
              </button>

              <button className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}