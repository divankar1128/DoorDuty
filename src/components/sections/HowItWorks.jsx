import { useState } from "react";
import { Search, CalendarDays, Home } from "lucide-react";

export default function HowItWorks() {
  const [paused, setPaused] = useState(false);

  return (
<section className="relative overflow-hidden bg-slate-50 pt-24 pb-8">
    
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100 blur-3xl opacity-60"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold text-blue-600">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Book trusted professionals
            <br />
            in under 2 minutes
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Simple • Fast • Reliable
          </p>

        </div>

        {/* Orbit */}

        <div className="relative mx-auto mt-10 flex h-[560px] w-[560px] items-center justify-center">          {/* Orbit Ring */}

          {/* <div className="absolute h-[640px] w-[640px] rounded-full border-2 border-dashed border-blue-200"></div> */}
          {/* Center */}

          <div className="absolute z-30 flex h-48 w-48 flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_25px_70px_rgba(37,99,235,0.35)]">

            <Home size={44} />

            <h3 className="mt-3 text-3xl font-bold">
              Door&Duty
            </h3>

            <p className="text-center text-blue-100">
              Trusted
              <br />
              Professionals
            </p>

          </div>

          {/* Rotating Orbit */}

          <div className={`orbit absolute h-[520px] w-[520px] ${paused ? "paused" : ""}`}>

            {/* TOP */}

            <div
              className="orbit-item top"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="card-fix">
                <Card
                  icon={<Search size={30} />}
                  title="Choose"
                  text="Browse Cleaning, Plumbing & More"
                  color="bg-blue-600"
                />
              </div>
            </div>

            {/* LEFT */}

            <div
              className="orbit-item left"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="card-fix">
                <Card
                  icon={<CalendarDays size={30} />}
                  title="Schedule"
                  text="Choose preferred date & time"
                  color="bg-purple-600"
                />
              </div>
            </div>

            {/* RIGHT */}

            <div
              className="orbit-item right"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="card-fix">
                <Card
                  icon={<Home size={30} />}
                  title="Relax"
                  text="Our expert arrives at your doorstep"
                  color="bg-green-600"
                />
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

function Card({ icon, title, text, color }) {
  return (
<div className="flex h-52 w-52 flex-col items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-center shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition duration-300 hover:scale-110">
      <div className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lg ${color}`}>
        {icon}
      </div>

      <h3 className="mt-4 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 px-4 text-sm leading-relaxed text-slate-500">
        {text}
      </p>

    </div>
  );
}