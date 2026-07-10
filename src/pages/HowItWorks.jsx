import {
    Search,
    CalendarDays,
    UserCheck,
    CheckCircle2,
    ShieldCheck,
    Clock3,
    Star,
    ArrowRight,
  } from "lucide-react";
  
  import Navbar from "../components/layout/Navbar";
  import Footer from "../components/layout/Footer";
  
  export default function HowItWorks() {
    const steps = [
      {
        icon: <Search size={34} />,
        title: "Choose a Service",
        description:
          "Browse from 25+ professional home services including cleaning, plumbing, electrician, AC repair, beauty, carpentry and more.",
      },
      {
        icon: <CalendarDays size={34} />,
        title: "Book Your Slot",
        description:
          "Select your preferred date, time and location. Booking takes less than a minute.",
      },
      {
        icon: <UserCheck size={34} />,
        title: "Professional Arrives",
        description:
          "A verified and background-checked professional reaches your doorstep on time.",
      },
      {
        icon: <CheckCircle2 size={34} />,
        title: "Service Completed",
        description:
          "Pay securely after completion and rate your experience to help other customers.",
      },
    ];
  
    return (
      <>
        <Navbar />
  
        <main>
  
          {/* Hero */}
  
          <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
  
            <div className="mx-auto max-w-7xl px-6 py-24">
  
              <div className="mx-auto max-w-3xl text-center">
  
                <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                  Door&Duty Process
                </span>
  
                <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">
                  How
                  <span className="text-blue-600">
                    {" "}Door&Duty{" "}
                  </span>
                  Works
                </h1>
  
                <p className="mt-8 text-xl leading-9 text-slate-600">
                  Booking trusted professionals has never been easier.
                  From choosing a service to job completion,
                  everything happens in just four simple steps.
                </p>
  
                <button className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
                  Book a Service
                  <ArrowRight size={20} />
                </button>
  
              </div>
  
            </div>
  
          </section>
                  {/* =========================
            HOW IT WORKS STEPS
        ========================== */}

        <section className="bg-white py-24">

<div className="mx-auto max-w-7xl px-6">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
      Simple Process
    </span>

    <h2 className="mt-6 text-5xl font-bold text-slate-900">
      Book Any Service in
      <span className="text-blue-600">
        {" "}4 Easy Steps
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
      Our booking process is designed to be fast,
      transparent and hassle-free. Just follow these
      four simple steps.
    </p>

  </div>

  <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

    {steps.map((step, index) => (

      <div
        key={index}
        className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-2xl"
      >

        {/* Step Number */}

        <div className="absolute right-6 top-6 text-6xl font-black text-slate-100 group-hover:text-blue-100">
          0{index + 1}
        </div>

        {/* Icon */}

        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">

          {step.icon}

        </div>

        <h3 className="mt-8 text-2xl font-bold text-slate-900">

          {step.title}

        </h3>

        <p className="mt-5 leading-8 text-slate-600">

          {step.description}

        </p>

      </div>

    ))}

  </div>

</div>

</section>
        {/* =========================
            WHY CHOOSE US
        ========================== */}

<section className="bg-slate-50 py-24">

<div className="mx-auto max-w-7xl px-6">

  <div className="grid items-center gap-20 lg:grid-cols-2">

    {/* Left */}

    <div>

      <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
        Why Choose Door&Duty
      </span>

      <h2 className="mt-8 text-5xl font-bold leading-tight text-slate-900">

        Trusted by
        <span className="text-blue-600">
          {" "}Thousands{" "}
        </span>
        of Families

      </h2>

      <p className="mt-8 text-lg leading-8 text-slate-600">

        We connect customers with skilled, verified and
        background-checked professionals. Every booking is
        backed by transparent pricing, secure payments and
        dedicated customer support.

      </p>

      <div className="mt-10 space-y-6">

        <div className="flex items-center gap-5">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <ShieldCheck size={28} />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              Verified Professionals
            </h3>

            <p className="text-slate-600">
              Every expert is background verified.
            </p>
          </div>

        </div>

        <div className="flex items-center gap-5">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <Clock3 size={28} />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              On-Time Arrival
            </h3>

            <p className="text-slate-600">
              Professionals arrive at your scheduled time.
            </p>
          </div>

        </div>

        <div className="flex items-center gap-5">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
            <Star size={28} />
          </div>

          <div>
            <h3 className="font-bold text-slate-900">
              Top Rated Service
            </h3>

            <p className="text-slate-600">
              Consistently rated 4.9★ by happy customers.
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* Right */}

    <div className="grid grid-cols-2 gap-6">

      <div className="rounded-3xl bg-white p-10 text-center shadow-lg">

        <h2 className="text-5xl font-extrabold text-blue-600">
          12K+
        </h2>

        <p className="mt-3 text-slate-600">
          Happy Customers
        </p>

      </div>

      <div className="rounded-3xl bg-white p-10 text-center shadow-lg">

        <h2 className="text-5xl font-extrabold text-blue-600">
          10K+
        </h2>

        <p className="mt-3 text-slate-600">
          Verified Professionals
        </p>

      </div>

      <div className="rounded-3xl bg-white p-10 text-center shadow-lg">

        <h2 className="text-5xl font-extrabold text-blue-600">
          25+
        </h2>

        <p className="mt-3 text-slate-600">
          Home Services
        </p>

      </div>

      <div className="rounded-3xl bg-white p-10 text-center shadow-lg">

        <h2 className="text-5xl font-extrabold text-blue-600">
          4.9★
        </h2>

        <p className="mt-3 text-slate-600">
          Average Rating
        </p>

      </div>

    </div>

  </div>

</div>

</section>
        {/* =========================
            BOOKING TIMELINE
        ========================== */}

<section className="bg-white py-24">

<div className="mx-auto max-w-5xl px-6">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
      Booking Journey
    </span>

    <h2 className="mt-6 text-5xl font-bold text-slate-900">
      Your Service Journey
    </h2>

  </div>

  <div className="mt-20 space-y-10">

    {[
      "Choose Your Service",
      "Select Date & Time",
      "Professional Assigned",
      "Professional Arrives",
      "Work Completed",
      "Rate Your Experience",
    ].map((item, index) => (

      <div
        key={index}
        className="flex items-center gap-6"
      >

        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
          {index + 1}
        </div>

        <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-6">

          <h3 className="text-xl font-semibold text-slate-900">
            {item}
          </h3>

        </div>

      </div>

    ))}

  </div>

</div>

</section>

{/* =========================
  FAQ
========================== */}

<section className="bg-slate-50 py-24">

<div className="mx-auto max-w-4xl px-6">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
      FAQ
    </span>

    <h2 className="mt-6 text-5xl font-bold text-slate-900">
      Frequently Asked Questions
    </h2>

  </div>

  <div className="mt-16 space-y-6">

    {[
      {
        q: "Are professionals verified?",
        a: "Yes. Every professional is identity verified and background checked before joining Door&Duty.",
      },
      {
        q: "Can I cancel my booking?",
        a: "Yes. You can cancel or reschedule your booking according to our cancellation policy.",
      },
      {
        q: "How do I pay?",
        a: "Pay securely online or choose Cash on Service where available.",
      },
      {
        q: "Is there any service warranty?",
        a: "Yes. Selected services include a warranty for complete peace of mind.",
      },
    ].map((faq, index) => (

      <div
        key={index}
        className="rounded-2xl bg-white p-8 shadow-md"
      >

        <h3 className="text-xl font-bold text-slate-900">
          {faq.q}
        </h3>

        <p className="mt-4 leading-8 text-slate-600">
          {faq.a}
        </p>

      </div>

    ))}

  </div>

</div>

</section>

</main>

<Footer />

</>
);
}