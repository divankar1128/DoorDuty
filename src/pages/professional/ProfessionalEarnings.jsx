import DashboardLayout from "../../components/professional/DashboardLayout";
import {
  Wallet,
  IndianRupee,
  CircleCheckBig,
  CreditCard,
} from "lucide-react";

const payments = [
  {
    customer: "Rahul Sharma",
    service: "AC Repair",
    amount: "₹1,200",
    date: "Today",
  },
  {
    customer: "Priya Verma",
    service: "Home Cleaning",
    amount: "₹900",
    date: "Yesterday",
  },
  {
    customer: "Amit Kumar",
    service: "Plumbing",
    amount: "₹1,500",
    date: "22 Jul",
  },
  {
    customer: "Neha Singh",
    service: "Painting",
    amount: "₹2,800",
    date: "20 Jul",
  },
];

export default function ProfessionalEarnings() {
  return (
    <DashboardLayout>

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-900">
          Earnings
        </h1>

        <p className="mt-2 text-slate-500">
          Track your earnings and payment history.
        </p>

      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <Wallet className="text-blue-600" size={34} />

          <p className="mt-5 text-slate-500">
            Today's Earnings
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            ₹3,250
          </h2>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <IndianRupee
            className="text-green-600"
            size={34}
          />

          <p className="mt-5 text-slate-500">
            This Month
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            ₹28,450
          </h2>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <CircleCheckBig
            className="text-purple-600"
            size={34}
          />

          <p className="mt-5 text-slate-500">
            Completed Jobs
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            52
          </h2>

        </div>

        <div className="rounded-3xl bg-white p-6 shadow-sm">

          <CreditCard
            className="text-orange-500"
            size={34}
          />

          <p className="mt-5 text-slate-500">
            Available Balance
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            ₹8,600
          </h2>

        </div>

      </div>

      {/* Payment History */}

      <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm">

        <div className="mb-6 flex items-center justify-between">

          <h2 className="text-2xl font-bold">
            Recent Payments
          </h2>

          <button className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
            Withdraw
          </button>

        </div>

        <div className="space-y-4">

          {payments.map((payment, index) => (

            <div
              key={index}
              className="flex flex-col gap-5 rounded-2xl border border-slate-200 p-5 transition hover:border-blue-300 hover:bg-blue-50 lg:flex-row lg:items-center lg:justify-between"
            >

              <div>

                <h3 className="text-lg font-bold">
                  {payment.service}
                </h3>

                <p className="text-slate-500">
                  {payment.customer}
                </p>

              </div>

              <div>

                <p className="font-semibold">
                  {payment.date}
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-bold text-green-600">
                  {payment.amount}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </DashboardLayout>
  );
}