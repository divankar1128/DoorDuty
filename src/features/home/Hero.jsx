import {
    Search,
    MapPin,
    ArrowRight,
    ShieldCheck,
    Star,
    Clock3,
  } from "lucide-react";
  
  const services = [
    "Cleaning",
    "Plumbing",
    "Electrician",
    "AC Repair",
    "Beauty",
    "Carpentry",
    "Painting",
    "More",
  ];
  
  export default function Hero() {
    return (
        <section className="bg-gradient-to-b from-white via-slate-50 to-white">
  <div className="mx-auto max-w-7xl px-6 pt-6 pb-14 lg:pt-8 lg:pb-16">

<div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">  
            {/* LEFT */}
  
            <div>
  
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
                Trusted Home Services
              </span>
  
              <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
                Reliable help
                <br />
                for every need.
                <br />
                <span className="text-blue-600">
                  Right at your doorstep.
                </span>
              </h1>
  
              <p className="mt-6 max-w-lg text-lg text-slate-600">
                Book trusted professionals for cleaning, repairs,
                beauty, appliance services and more in just a few clicks.
              </p>
  
              {/* Search */}
  
              <div className="mt-10 rounded-3xl bg-white p-4 shadow-2xl">
  
                <div className="grid gap-4 lg:grid-cols-[1fr_220px_170px]">
  
                  <div className="flex items-center gap-3 rounded-2xl border px-4">
  
                    <Search size={20} className="text-slate-400"/>
  
                    <input
                      type="text"
                      placeholder="What service do you need?"
                      className="h-14 w-full outline-none"
                    />
  
                  </div>
  
                  <button className="flex items-center justify-center gap-2 rounded-2xl border text-slate-600 hover:bg-slate-50">
  
                    <MapPin size={18}/>
                    Current Location
  
                  </button>
  
                  <button className="rounded-2xl bg-blue-600 font-semibold text-white hover:bg-blue-700">
  
                    Search
  
                  </button>
  
                </div>
  
              </div>
  
              {/* Services */}
  
              <div className="mt-10">
  
                <h4 className="mb-4 font-semibold text-slate-800">
                  Popular Services
                </h4>
  
                <div className="flex flex-wrap gap-3 lg:max-w-3xl">

                  {services.map((service) => (
  
                    <button
                      key={service}
className="rounded-2xl border bg-white px-4 py-3 text-sm font-medium shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"                    >
                      {service}
                    </button>
  
                  ))}
  
                </div>
  
              </div>
  
              {/* {/* Stats + Illustration */}

<div className="mt-12 flex items-center justify-between gap-8">

{/* Left - Stats */}
<div className="grid flex-1 grid-cols-4 gap-5">

  <div className="rounded-2xl bg-white p-5 shadow">
    <ShieldCheck className="text-blue-600" />
    <h3 className="mt-3 text-2xl font-bold">10K+</h3>
    <p className="text-sm text-slate-500">
      Verified Professionals
    </p>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow">
    <Star className="text-yellow-500" />
    <h3 className="mt-3 text-2xl font-bold">4.9/5</h3>
    <p className="text-sm text-slate-500">
      Customer Rating
    </p>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow">
    <Clock3 className="text-blue-600" />
    <h3 className="mt-3 text-2xl font-bold">30 Min</h3>
    <p className="text-sm text-slate-500">
      Average Arrival
    </p>
  </div>

  <div className="rounded-2xl bg-white p-5 shadow">
    <ShieldCheck className="text-green-600" />
    <h3 className="mt-3 text-2xl font-bold">7 Days</h3>
    <p className="text-sm text-slate-500">
      Service Warranty
    </p>
  </div>

</div>


</div>
</div> {/* End LEFT Column */}

<div className="relative flex flex-col items-center gap-8 pt-6">
  {/* Background Glow */}

<div className="absolute h-[380px] w-[380px] rounded-full bg-blue-100 blur-3xl opacity-70"></div>

{/* Image */}

<div className="relative z-10 overflow-hidden rounded-[28px] shadow-2xl">

  <img
    src="https://placehold.co/360x500/png?text=Professional+Image"
    alt="Professional"
    className="h-[500px] w-[360px] object-cover"
  />
  <div className="absolute right-0 bottom-10 z-30 rounded-2xl bg-white px-5 py-4 shadow-xl">

<h4 className="font-semibold">
  ✔ Verified Professional
</h4>

<p className="text-sm text-slate-500">
  Background Checked
</p>

</div>

{/* Rating */}

{/* Rating */}
<div className="absolute left-8 top-12 z-30 rounded-2xl bg-white px-5 py-4 shadow-xl">
  <p className="text-sm text-slate-500">
    Customer Rating
  </p>

  <h3 className="mt-1 flex items-center gap-2 text-2xl font-bold">
    ⭐ 4.9
  </h3>

</div>

{/* Verified */}

{/* Verified */}


</div>
{/* Service Network Illustration */}

<div className="mt-8 w-[360px] h-[220px] rounded-[28px] bg-gradient-to-br from-blue-50 via-white to-blue-50 border border-slate-200 shadow-xl flex items-center justify-center">

  <div className="relative h-52 w-52">

    {/* Center */}
    <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-blue-600 text-4xl text-white shadow-xl">
      🏠
    </div>

    {/* Top */}
    <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-lg text-2xl">
      ⚡
    </div>

    {/* Left */}
    <div className="absolute left-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg text-2xl">
      🔧
    </div>

    {/* Right */}
    <div className="absolute right-0 top-1/2 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg text-2xl">
      🪚
    </div>

    {/* Bottom Left */}
    <div className="absolute bottom-0 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg text-2xl">
      🧹
    </div>

    {/* Bottom Right */}
    <div className="absolute bottom-0 right-6 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg text-2xl">
      🎨
    </div>

    {/* Connection Lines */}
    <div className="absolute left-1/2 top-10 h-10 w-px -translate-x-1/2 bg-blue-200"></div>

    <div className="absolute left-10 top-1/2 h-px w-12 bg-blue-200"></div>

    <div className="absolute right-10 top-1/2 h-px w-12 bg-blue-200"></div>

    <div className="absolute left-[56px] bottom-[38px] h-px w-12 rotate-45 bg-blue-200"></div>

    <div className="absolute right-[56px] bottom-[38px] h-px w-12 -rotate-45 bg-blue-200"></div>

  </div>

</div>

</div>
          </div>
  
        </div>
      </section>
    );
  }