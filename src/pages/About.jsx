import {
    Users,
    ShieldCheck,
    Target,
    HeartHandshake,
    ArrowRight,
  } from "lucide-react";
  import { Link } from "react-router-dom";
  
  import Navbar from "../components/layout/Navbar";
  import Footer from "../components/layout/Footer";
  
  export default function About() {
    return (
      <>
        <Navbar />
  
        <main>
  
          {/* ================= HERO ================= */}
  
          <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100">
  
            <div className="mx-auto max-w-7xl px-6 py-24">
  
              <div className="grid items-center gap-16 lg:grid-cols-2">
  
                {/* Left */}
  
                <div>
  
                  <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                    About Door&Duty
                  </span>
  
                  <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">
  
                    Making Home
                    <br />
  
                    Services
                    <span className="text-blue-600">
                      {" "}Simple.
                    </span>
  
                  </h1>
  
                  <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
  
                    Door&Duty is your trusted home service platform,
                    connecting customers with skilled, verified and
                    reliable professionals for everyday home needs.
  
                  </p>
  
                  <div className="mt-10 flex gap-5">
  
                    <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
  
                      Explore Services
  
                    </button>
  
                    <button className="flex items-center gap-3 rounded-2xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-white">
  
                      Learn More
  
                      <ArrowRight size={18} />
  
                    </button>
  
                  </div>
  
                </div>
  
                {/* Right */}
  
                <div className="relative">
  
                  <div className="absolute inset-0 rounded-full bg-blue-100 blur-3xl opacity-70"></div>
  
                  <div className="relative overflow-hidden rounded-[36px] bg-white p-8 shadow-2xl">
  
                    <img
                      src="https://placehold.co/600x600/png?text=Door%26Duty"
                      alt="Door&Duty"
                      className="rounded-3xl"
                    />
  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </section>
  
          {/* ================= OUR STORY ================= */}
  
          <section className="bg-white py-24">
  
            <div className="mx-auto max-w-7xl px-6">
  
              <div className="grid items-center gap-20 lg:grid-cols-2">
  
                <div>
  
                  <img
                    src="https://placehold.co/700x500/png?text=Our+Story"
                    alt="Our Story"
                    className="rounded-[32px] shadow-xl"
                  />
  
                </div>
  
                <div>
  
                  <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                    Our Story
                  </span>
  
                  <h2 className="mt-8 text-5xl font-bold text-slate-900">
  
                    Built Around
                    <span className="text-blue-600">
                      {" "}Trust
                    </span>
  
                  </h2>
  
                  <p className="mt-8 text-lg leading-8 text-slate-600">
  
                    Finding trustworthy home service professionals
                    shouldn't be difficult. Door&Duty was created to
                    solve this problem by bringing verified experts
                    and customers together on one reliable platform.
  
                  </p>
  
                  <p className="mt-6 text-lg leading-8 text-slate-600">
  
                    Whether it's plumbing, electrical work,
                    cleaning, painting or appliance repair,
                    our goal is to deliver high-quality
                    service with complete transparency.
  
                  </p>
  
                </div>
  
              </div>
  
            </div>
  
          </section>
                  {/* =========================
            MISSION & VISION
        ========================= */}

        <section className="bg-slate-50 py-24">

<div className="mx-auto max-w-7xl px-6">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
      Our Purpose
    </span>

    <h2 className="mt-6 text-5xl font-bold text-slate-900">
      Mission & Vision
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
      We're building India's most trusted home services platform by
      combining technology, transparency and skilled professionals.
    </p>

  </div>

  <div className="mt-20 grid gap-8 lg:grid-cols-2">

    {/* Mission */}

    <div className="rounded-[32px] bg-white p-10 shadow-xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

        <Target size={34} />

      </div>

      <h3 className="mt-8 text-3xl font-bold text-slate-900">
        Our Mission
      </h3>

      <p className="mt-6 text-lg leading-8 text-slate-600">

        To simplify home services by connecting customers with
        reliable, background-verified professionals while ensuring
        quality, affordability and complete peace of mind.

      </p>

    </div>

    {/* Vision */}

    <div className="rounded-[32px] bg-white p-10 shadow-xl">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

        <HeartHandshake size={34} />

      </div>

      <h3 className="mt-8 text-3xl font-bold text-slate-900">
        Our Vision
      </h3>

      <p className="mt-6 text-lg leading-8 text-slate-600">

        To become India's most trusted and customer-first platform
        where every household can book professional services with
        confidence in just a few clicks.

      </p>

    </div>

  </div>

</div>

</section>

{/* =========================
  CORE VALUES
========================= */}

<section className="bg-white py-24">

<div className="mx-auto max-w-7xl px-6">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
      Core Values
    </span>

    <h2 className="mt-6 text-5xl font-bold text-slate-900">
      What We Believe In
    </h2>

  </div>

  <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

      <ShieldCheck className="text-blue-600" size={40} />

      <h3 className="mt-6 text-2xl font-bold">
        Trust
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        Every professional goes through verification before joining
        our platform.
      </p>

    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

      <Users className="text-blue-600" size={40} />

      <h3 className="mt-6 text-2xl font-bold">
        Customer First
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        Every decision we make starts with improving the customer
        experience.
      </p>

    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

      <Target className="text-blue-600" size={40} />

      <h3 className="mt-6 text-2xl font-bold">
        Quality
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        We focus on delivering reliable and professional service on
        every booking.
      </p>

    </div>

    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">

      <HeartHandshake className="text-blue-600" size={40} />

      <h3 className="mt-6 text-2xl font-bold">
        Transparency
      </h3>

      <p className="mt-4 leading-8 text-slate-600">
        Honest pricing, clear communication and no hidden surprises.
      </p>

    </div>

  </div>

</div>

</section>

{/* =========================
  COMPANY STATS
========================= */}

<section className="bg-gradient-to-r from-blue-600 to-blue-700 py-24">

<div className="mx-auto max-w-7xl px-6">

  <div className="grid gap-8 text-center text-white md:grid-cols-2 lg:grid-cols-4">

    <div>

      <h2 className="text-5xl font-extrabold">
        10K+
      </h2>

      <p className="mt-4 text-blue-100">
        Verified Professionals
      </p>

    </div>

    <div>

      <h2 className="text-5xl font-extrabold">
        100K+
      </h2>

      <p className="mt-4 text-blue-100">
        Happy Customers
      </p>

    </div>

    <div>

      <h2 className="text-5xl font-extrabold">
        50+
      </h2>

      <p className="mt-4 text-blue-100">
        Cities Served
      </p>

    </div>

    <div>

      <h2 className="text-5xl font-extrabold">
        4.9★
      </h2>

      <p className="mt-4 text-blue-100">
        Average Customer Rating
      </p>

    </div>

  </div>

</div>

</section>
        {/* =========================
            WHY CHOOSE US
        ========================= */}

<section className="bg-white py-24">

<div className="mx-auto max-w-7xl px-6">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
      Why Door&Duty?
    </span>

    <h2 className="mt-6 text-5xl font-bold text-slate-900">
      Why Thousands Trust Us
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
      We are committed to delivering safe, transparent and
      high-quality home services with customer satisfaction at
      the center of everything we do.
    </p>

  </div>

  <div className="mt-20 grid gap-8 lg:grid-cols-3">

    <div className="rounded-3xl bg-slate-50 p-10 shadow-lg">

      <h3 className="text-2xl font-bold text-slate-900">
        ✔ Verified Professionals
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        Every service provider is verified and background checked
        before joining Door&Duty.
      </p>

    </div>

    <div className="rounded-3xl bg-slate-50 p-10 shadow-lg">

      <h3 className="text-2xl font-bold text-slate-900">
        ✔ Transparent Pricing
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        No hidden charges. Know the pricing before booking your
        service.
      </p>

    </div>

    <div className="rounded-3xl bg-slate-50 p-10 shadow-lg">

      <h3 className="text-2xl font-bold text-slate-900">
        ✔ Reliable Support
      </h3>

      <p className="mt-5 leading-8 text-slate-600">
        Our support team is always available to help before,
        during and after every booking.
      </p>

    </div>

  </div>

</div>

</section>

{/* =========================
  OUR TEAM
========================= */}

<section className="bg-slate-50 py-24">

<div className="mx-auto max-w-7xl px-6">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
      Meet Our Team
    </span>

    <h2 className="mt-6 text-5xl font-bold text-slate-900">
      Passionate People Behind Door&Duty
    </h2>

  </div>

  <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

    {[
      "Founder & CEO",
      "Operations Head",
      "Customer Success",
      "Technology Lead",
    ].map((role, index) => (

      <div
        key={index}
        className="overflow-hidden rounded-3xl bg-white shadow-xl"
      >

        <img
          src={`https://placehold.co/400x400/png?text=Team+${index + 1}`}
          alt={role}
          className="h-72 w-full object-cover"
        />

        <div className="p-8">

          <h3 className="text-2xl font-bold text-slate-900">
            Team Member
          </h3>

          <p className="mt-2 text-blue-600">
            {role}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>

</section>

{/* =========================
  CTA
========================= */}

<section className="bg-gradient-to-r from-blue-700 to-blue-600 py-24">

<div className="mx-auto max-w-5xl px-6 text-center text-white">

  <h2 className="text-5xl font-bold">
    Experience Trusted Home Services
  </h2>

  <p className="mx-auto mt-8 max-w-2xl text-xl leading-9 text-blue-100">
    Join thousands of customers who rely on Door&Duty for
    professional, reliable and hassle-free home services.
  </p>

  <div className="mt-12 flex flex-wrap justify-center gap-5">

  <Link
  to="/"
  className="rounded-2xl bg-white px-10 py-4 font-semibold text-blue-700 transition hover:scale-105"
>
  Book a Service
</Link>

<Link
  to="/signup/professional"
  className="rounded-2xl border border-white px-10 py-4 font-semibold text-white transition hover:bg-white/10"
>
  Become a Professional
</Link>

  </div>

</div>

</section>

</main>

<Footer />

</>
);
}