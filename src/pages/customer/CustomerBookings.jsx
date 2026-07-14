import CustomerLayout from "../../components/customer/CustomerLayout";
import {
  CalendarDays,
  Clock,
  MapPin,
  IndianRupee,
  ArrowRight,
} from "lucide-react";

const bookings = [
  {
    id: "#DD1024",
    service: "AC Repair",
    date: "15 July 2026",
    time: "10:30 AM",
    address: "Sector 62, Noida",
    amount: 1200,
    status: "Upcoming",
  },
  {
    id: "#DD1018",
    service: "Home Cleaning",
    date: "10 July 2026",
    time: "11:00 AM",
    address: "Greater Noida",
    amount: 899,
    status: "Completed",
  },
  {
    id: "#DD1007",
    service: "Plumbing",
    date: "5 July 2026",
    time: "2:30 PM",
    address: "Indirapuram",
    amount: 650,
    status: "Completed",
  },
];

export default function CustomerBookings() {
  return (
    <CustomerLayout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold">
          My Bookings
        </h1>

        <p className="mt-2 text-slate-500">
          View your current and previous bookings.
        </p>

      </div>

      <div className="space-y-6">

        {bookings.map((booking) => (

          <div
            key={booking.id}
            className="rounded-3xl bg-white p-6 shadow"
          >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h2 className="text-2xl font-bold">
                  {booking.service}
                </h2>

                <p className="mt-2 text-slate-500">
                  Booking ID: {booking.id}
                </p>

                <div className="mt-5 flex flex-wrap gap-6 text-slate-600">

                  <div className="flex items-center gap-2">
                    <CalendarDays size={18} />
                    {booking.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock size={18} />
                    {booking.time}
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin size={18} />
                    {booking.address}
                  </div>

                  <div className="flex items-center gap-2">
                    <IndianRupee size={18} />
                    ₹{booking.amount}
                  </div>

                </div>

              </div>

              <div className="text-right">

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${
                    booking.status === "Upcoming"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {booking.status}
                </span>

                <button className="mt-6 flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white hover:bg-blue-700">

                  View Details

                  <ArrowRight size={18} />

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </CustomerLayout>
  );
}