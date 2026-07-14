import CustomerLayout from "../../components/customer/CustomerLayout";
import { Crown, CheckCircle, Calendar } from "lucide-react";

export default function CustomerMembership() {
  return (
    <CustomerLayout>

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          My Membership
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your Door&Duty membership benefits.
        </p>

      </div>

      {/* Membership Card */}

      <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-blue-600 to-blue-700 p-10 text-white shadow-xl">

        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <Crown size={36} />

              <h2 className="text-4xl font-bold">
                Gold Membership
              </h2>

            </div>

            <p className="mt-4 text-blue-100 text-lg">
              Enjoy priority booking, exclusive discounts and premium customer support.
            </p>

          </div>

          <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">

            <p className="text-sm uppercase tracking-widest text-blue-100">
              Membership Status
            </p>

            <h3 className="mt-2 text-3xl font-bold">
              Active
            </h3>

            <div className="mt-6 flex items-center gap-2">

              <Calendar size={18} />

              <span>
                Valid until 15 Aug 2027
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Benefits */}

      <div className="mt-10 rounded-3xl bg-white p-8 shadow">

        <h2 className="text-2xl font-bold">
          Membership Benefits
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2">

          {[
            "Priority Booking",
            "10% Discount on Every Service",
            "Dedicated Customer Support",
            "Free Service Rescheduling",
            "Special Festival Offers",
            "Early Access to New Services",
          ].map((benefit) => (

            <div
              key={benefit}
              className="flex items-center gap-3 rounded-2xl bg-slate-50 p-5"
            >

              <CheckCircle
                className="text-green-600"
                size={22}
              />

              <span className="font-medium">
                {benefit}
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Action Buttons */}

      <div className="mt-10 flex flex-wrap gap-5">

        <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">

          Upgrade Membership

        </button>

        <button className="rounded-2xl border border-slate-300 bg-white px-8 py-4 font-semibold transition hover:bg-slate-100">

          View Plans

        </button>

      </div>

    </CustomerLayout>
  );
}