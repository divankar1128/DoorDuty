import { User, Briefcase, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ChooseAccount() {
  return (
    <div className="space-y-6">

      {/* Customer */}

      <Link
        to="/signup/customer"
        className="group block rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
      >
        <div className="flex items-start gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

            <User size={30} />

          </div>

          <div className="flex-1">

            <h3 className="text-2xl font-bold text-slate-900">
              Customer
            </h3>

            <p className="mt-2 leading-7 text-slate-500">
              Book trusted professionals for cleaning,
              plumbing, electrical, AC repair,
              painting and many more services.
            </p>

            <div className="mt-5 flex items-center gap-2 font-semibold text-blue-600">

              Create Customer Account

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </div>

          </div>

        </div>
      </Link>

      {/* Professional */}

      <Link
        to="/signup/professional"
        className="group block rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-2xl"
      >
        <div className="flex items-start gap-5">

          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

            <Briefcase size={30} />

          </div>

          <div className="flex-1">

            <h3 className="text-2xl font-bold text-slate-900">
              Professional
            </h3>

            <p className="mt-2 leading-7 text-slate-500">
              Join Door&Duty as a verified service
              professional and earn by helping
              customers near your location.
            </p>

            <div className="mt-5 flex items-center gap-2 font-semibold text-blue-600">

              Join as Professional

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />

            </div>

          </div>

        </div>
      </Link>

      <p className="pt-2 text-center text-slate-500">

        Already have an account?{" "}

        <Link
          to="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Login
        </Link>

      </p>

    </div>
  );
}