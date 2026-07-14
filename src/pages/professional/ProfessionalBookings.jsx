import DashboardLayout from "../../components/professional/DashboardLayout";

const bookings = [
  {
    id: "#DD1001",
    customer: "Rahul Sharma",
    service: "AC Repair",
    date: "Today",
    time: "10:00 AM",
    status: "Accepted",
  },
  {
    id: "#DD1002",
    customer: "Priya Verma",
    service: "Home Cleaning",
    date: "Today",
    time: "2:00 PM",
    status: "Pending",
  },
  {
    id: "#DD1003",
    customer: "Amit Kumar",
    service: "Plumbing",
    date: "Tomorrow",
    time: "11:00 AM",
    status: "Completed",
  },
  {
    id: "#DD1004",
    customer: "Neha Singh",
    service: "Painting",
    date: "25 July",
    time: "9:30 AM",
    status: "Cancelled",
  },
];

const statusColor = {
  Accepted: "bg-blue-100 text-blue-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Completed: "bg-green-100 text-green-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function ProfessionalBookings() {
  return (
    <DashboardLayout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-slate-900">
          My Bookings
        </h1>

        <p className="mt-2 text-slate-500">
          View and manage all your service bookings.
        </p>

      </div>

      <div className="space-y-5">

        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="rounded-3xl bg-white p-6 shadow-sm transition hover:shadow-lg"
          >

            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

              <div>

                <h2 className="text-2xl font-bold text-slate-900">
                  {booking.service}
                </h2>

                <p className="mt-2 text-slate-600">
                  Booking ID: {booking.id}
                </p>

                <p className="text-slate-600">
                  Customer: {booking.customer}
                </p>

              </div>

              <div className="text-left lg:text-center">

                <p className="font-semibold text-slate-900">
                  {booking.date}
                </p>

                <p className="text-slate-500">
                  {booking.time}
                </p>

              </div>

              <div>

                <span
                  className={`rounded-full px-4 py-2 text-sm font-semibold ${statusColor[booking.status]}`}
                >
                  {booking.status}
                </span>

              </div>

              <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                View Details
              </button>

            </div>

          </div>
        ))}

      </div>

    </DashboardLayout>
  );
}