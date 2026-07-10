import { Search, CalendarDays, Home } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Choose Service",
    text: "Browse Cleaning, Plumbing, AC Repair & more.",
    icon: Search,
  },
  {
    number: "2",
    title: "Schedule",
    text: "Choose your preferred date and time.",
    icon: CalendarDays,
  },
  {
    number: "3",
    title: "Relax",
    text: "Our verified expert arrives at your doorstep.",
    icon: Home,
  },
];

export default function BookingSteps() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">

        <div className="relative">

          {/* Connecting Line */}

          <div className="absolute left-[12%] right-[12%] top-7 hidden h-[2px] bg-blue-200 md:block"></div>

          <div className="grid gap-16 md:grid-cols-3">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative cursor-pointer text-center transition-all duration-500 hover:-translate-y-5"
                >

                  {/* Glow */}

                  <div className="absolute inset-0 -z-10 rounded-3xl bg-blue-100 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-80"></div>

                  {/* Number */}

                  <div className="relative z-20 mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white shadow-lg transition-all duration-500 group-hover:scale-125 group-hover:shadow-[0_18px_40px_rgba(37,99,235,0.45)]">
                    {step.number}
                  </div>

                  {/* Icon */}

                  <div className="mx-auto mt-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 shadow transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-blue-600 group-hover:text-white">

                    <Icon size={36} strokeWidth={2.5} />

                  </div>

                  {/* Title */}

                  <h3 className="mt-6 text-3xl font-bold text-blue-600 transition-all duration-300 group-hover:text-blue-700">
                    {step.title}
                  </h3>

                  {/* Text */}

                  <p className="mx-auto mt-4 max-w-[260px] text-lg leading-8 text-slate-500 transition-all duration-300 group-hover:text-slate-700">
                    {step.text}
                  </p>

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}