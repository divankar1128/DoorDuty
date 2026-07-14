import {
    Crown,
    BadgePercent,
    ShieldCheck,
    Clock3,
    Gift,
    Headphones,
    ArrowRight,
  } from "lucide-react";
  
  import Navbar from "../components/layout/Navbar";
  import Footer from "../components/layout/Footer";
  
  export default function Membership() {
    const benefits = [
      {
        icon: <BadgePercent size={32} />,
        title: "Exclusive Discounts",
        description:
          "Save on every booking with exclusive member pricing.",
      },
      {
        icon: <Clock3 size={32} />,
        title: "Priority Booking",
        description:
          "Get faster appointments during busy hours.",
      },
      {
        icon: <ShieldCheck size={32} />,
        title: "Extended Warranty",
        description:
          "Enjoy extra protection on selected home services.",
      },
      {
        icon: <Gift size={32} />,
        title: "Members Only Offers",
        description:
          "Receive seasonal deals and exclusive promotions.",
      },
      {
        icon: <Headphones size={32} />,
        title: "Priority Support",
        description:
          "Dedicated customer support whenever you need help.",
      },
      {
        icon: <Crown size={32} />,
        title: "Premium Experience",
        description:
          "Enjoy a smoother, faster and more rewarding service experience.",
      },
    ];
  
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
                    Door&Duty Membership
                  </span>
  
                  <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">
  
                    Save More.
                    <br />
  
                    Book Faster.
                    <br />
  
                    <span className="text-blue-600">
                      Enjoy Premium Benefits.
                    </span>
  
                  </h1>
  
                  <p className="mt-8 max-w-xl text-xl leading-9 text-slate-600">
  
                    Join Door&Duty Membership and unlock
                    exclusive discounts, priority booking,
                    extended warranty and premium customer support.
  
                  </p>
  
                  <div className="mt-10 flex gap-5">
  
                    <button className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
  
                      Choose Your Plan
  
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
  
                  <div className="relative overflow-hidden rounded-[36px] bg-white p-10 shadow-2xl">
  
                    <img
                      src="https://placehold.co/600x600/png?text=Membership"
                      alt="Membership"
                      className="rounded-3xl"
                    />
  
                  </div>
  
                </div>
  
              </div>
  
            </div>
  
          </section>
  
          {/* ================= BENEFITS ================= */}
  
          <section className="bg-white py-24">
  
            <div className="mx-auto max-w-7xl px-6">
  
              <div className="text-center">
  
                <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                  Membership Benefits
                </span>
  
                <h2 className="mt-6 text-5xl font-bold text-slate-900">
  
                  Why Become a Member?
  
                </h2>
  
                <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
  
                  Every membership is designed to save you
                  money while giving you a premium home service
                  experience.
  
                </p>
  
              </div>
  
              <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
  
                {benefits.map((item, index) => (
  
                  <div
                    key={index}
                    className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl"
                  >
  
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
  
                      {item.icon}
  
                    </div>
  
                    <h3 className="mt-6 text-2xl font-bold text-slate-900">
  
                      {item.title}
  
                    </h3>
  
                    <p className="mt-4 leading-8 text-slate-600">
  
                      {item.description}
  
                    </p>
  
                  </div>
  
                ))}
  
              </div>
  
            </div>
  
          </section>
                  {/* =========================
            MEMBERSHIP PLANS
        ========================= */}

        <section className="bg-slate-50 py-24">

<div className="mx-auto max-w-7xl px-6">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
      Membership Plans
    </span>

    <h2 className="mt-6 text-5xl font-bold text-slate-900">

      Choose Your Perfect Plan

    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

      Whether you need occasional home services,
      premium benefits for your family, or a fully
      customized solution for your business, we've
      got the right membership for you.

    </p>

  </div>

  <div className="mt-20 grid gap-8 lg:grid-cols-3">

    {/* ================= ESSENTIAL ================= */}

    <div className="rounded-[32px] bg-white p-10 shadow-xl transition hover:-translate-y-3 hover:shadow-2xl">

      <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
        Essential
      </span>

      <h3 className="mt-8 text-4xl font-bold text-slate-900">
        ₹499
      </h3>

      <p className="mt-2 text-slate-500">
        per month
      </p>

      <ul className="mt-10 space-y-5 text-slate-700">

        <li>✅ 10% Discount on Services</li>

        <li>✅ Priority Booking</li>

        <li>✅ Free Rescheduling</li>

        <li>✅ Dedicated Customer Support</li>

        <li>✅ Members-only Offers</li>

      </ul>

      <button className="mt-12 w-full rounded-2xl border border-blue-600 py-4 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">

        Join Essential

      </button>

    </div>

    {/* ================= PREMIUM ================= */}

    <div className="relative rounded-[32px] border-2 border-blue-600 bg-blue-600 p-10 text-white shadow-2xl scale-105">

      <span className="absolute right-8 top-8 rounded-full bg-yellow-400 px-4 py-2 text-sm font-bold text-slate-900">
        ⭐ Most Popular
      </span>

      <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
        Premium
      </span>

      <h3 className="mt-8 text-4xl font-bold">
        ₹999
      </h3>

      <p className="mt-2 text-blue-100">
        per month
      </p>

      <ul className="mt-10 space-y-5">

        <li>✅ Everything in Essential</li>

        <li>✅ 20% Discount on Services</li>

        <li>✅ Emergency Priority Booking</li>

        <li>✅ Extended Service Warranty</li>

        <li>✅ Family Member Sharing</li>

        <li>✅ Premium Customer Support</li>

      </ul>

      <button className="mt-12 w-full rounded-2xl bg-white py-4 font-semibold text-blue-700 transition hover:bg-slate-100">

        Get Premium

      </button>

    </div>

    {/* ================= CUSTOM ================= */}

    <div className="rounded-[32px] bg-white p-10 shadow-xl transition hover:-translate-y-3 hover:shadow-2xl">

      <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
        Custom
      </span>

      <h3 className="mt-8 text-4xl font-bold text-slate-900">
        Let's Talk
      </h3>

      <p className="mt-2 text-slate-500">
        Custom Pricing
      </p>

      <ul className="mt-10 space-y-5 text-slate-700">

        <li>✅ Choose Any Services</li>

        <li>✅ Dedicated Service Manager</li>

        <li>✅ Multiple Properties</li>

        <li>✅ Flexible Billing</li>

        <li>✅ Custom SLA</li>

        <li>✅ Bulk Discounts</li>

      </ul>

      <button className="mt-12 w-full rounded-2xl bg-slate-900 py-4 font-semibold text-white transition hover:bg-black">

        Request Quote

      </button>

    </div>

  </div>

</div>

</section>
        {/* =========================
            PLAN COMPARISON
        ========================= */}

<section className="bg-white py-24">

<div className="mx-auto max-w-7xl px-6">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
      Compare Plans
    </span>

    <h2 className="mt-6 text-5xl font-bold text-slate-900">
      Find the Right Membership
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
      Compare all plans side by side and choose the one that
      best suits your home or business.
    </p>

  </div>

  <div className="mt-16 overflow-x-auto rounded-3xl border border-slate-200 shadow-lg">

    <table className="min-w-full bg-white">

      <thead className="bg-blue-600 text-white">

        <tr>

          <th className="px-8 py-5 text-left text-lg">
            Features
          </th>

          <th className="px-8 py-5 text-center">
            Essential
          </th>

          <th className="px-8 py-5 text-center">
            Premium
          </th>

          <th className="px-8 py-5 text-center">
            Custom
          </th>

        </tr>

      </thead>

      <tbody>

        {[
          ["Discount", "10%", "20%", "Custom"],
          ["Priority Booking", "✔", "✔", "✔"],
          ["Extended Warranty", "—", "✔", "✔"],
          ["Family Sharing", "—", "✔", "✔"],
          ["Dedicated Manager", "—", "—", "✔"],
          ["Bulk Discounts", "—", "—", "✔"],
          ["Premium Support", "✔", "✔", "✔"],
          ["Custom Service Package", "—", "—", "✔"],
        ].map((row, index) => (

          <tr
            key={index}
            className="border-t border-slate-200"
          >

            <td className="px-8 py-5 font-semibold text-slate-800">
              {row[0]}
            </td>

            <td className="px-8 py-5 text-center">
              {row[1]}
            </td>

            <td className="px-8 py-5 text-center font-semibold text-blue-600">
              {row[2]}
            </td>

            <td className="px-8 py-5 text-center">
              {row[3]}
            </td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

</div>

</section>

{/* =========================
  FAQ
========================= */}

<section className="bg-slate-50 py-24">

<div className="mx-auto max-w-4xl px-6">

  <div className="text-center">

    <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
      Frequently Asked Questions
    </span>

    <h2 className="mt-6 text-5xl font-bold text-slate-900">
      Membership FAQs
    </h2>

  </div>

  <div className="mt-16 space-y-6">

    {[
      {
        q: "Can I cancel my membership anytime?",
        a: "Yes. You can cancel your membership at any time from your account dashboard.",
      },
      {
        q: "Can I upgrade from Essential to Premium?",
        a: "Absolutely. You can upgrade whenever you like and only pay the price difference.",
      },
      {
        q: "Who should choose the Custom plan?",
        a: "Businesses, offices, apartment societies and customers requiring multiple services regularly.",
      },
      {
        q: "Does membership include free services?",
        a: "Membership provides exclusive discounts and premium benefits. Service charges still apply.",
      },
    ].map((faq, index) => (

      <div
        key={index}
        className="rounded-3xl bg-white p-8 shadow-lg"
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