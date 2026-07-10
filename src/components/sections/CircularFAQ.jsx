import { useState } from "react";
import faqData from "./faqData";

export default function CircularFAQ() {
  const [active, setActive] = useState(0);

  const current = faqData[active];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-blue-100 blur-[140px] opacity-60"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 font-semibold tracking-wide text-blue-600">
            SUPPORT CENTER
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            Hover any topic to instantly explore the answer.
          </p>

        </div>

        {/* Hub Layout */}

        <div className="relative mx-auto mt-24 h-[560px] w-[900px]">

          {/* Connection Lines */}

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 900 560"
          >

            <defs>

              <linearGradient
                id="faqGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >

                <stop offset="0%" stopColor="#60A5FA" />

                <stop offset="100%" stopColor="#2563EB" />

              </linearGradient>

            </defs>

            {/* Booking */}

            <line
              x1="450"
              y1="280"
              x2="315"
              y2="105"
              stroke="url(#faqGradient)"
              strokeWidth="2"
            />

            {/* Payments */}

            <line
              x1="450"
              y1="280"
              x2="585"
              y2="105"
              stroke="url(#faqGradient)"
              strokeWidth="2"
            />

            {/* Verified */}

            <line
              x1="450"
              y1="280"
              x2="150"
              y2="280"
              stroke="url(#faqGradient)"
              strokeWidth="2"
            />

            {/* Warranty */}

            <line
              x1="450"
              y1="280"
              x2="750"
              y2="280"
              stroke="url(#faqGradient)"
              strokeWidth="2"
            />

            {/* Support */}

            <line
              x1="450"
              y1="280"
              x2="315"
              y2="455"
              stroke="url(#faqGradient)"
              strokeWidth="2"
            />

            {/* Help */}

            <line
              x1="450"
              y1="280"
              x2="585"
              y2="455"
              stroke="url(#faqGradient)"
              strokeWidth="2"
            />

          </svg>

          {/* Center */}

          <div className="absolute left-1/2 top-1/2 z-20 flex h-52 w-52 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-[0_30px_70px_rgba(37,99,235,.35)]">

            <current.icon size={52} />

            <h3 className="mt-3 text-3xl font-bold">
              Door&Duty
            </h3>

            <p className="text-blue-100">
              Help Center
            </p>

          </div>

          {/* Booking */}

          <FaqNode
            data={faqData[0]}
            active={active}
            index={0}
            position="left-[250px] top-[40px]"
            setActive={setActive}
          />

          {/* Payments */}

          <FaqNode
            data={faqData[1]}
            active={active}
            index={1}
            position="right-[250px] top-[40px]"
            setActive={setActive}
          />

          {/* Verified */}

          <FaqNode
            data={faqData[2]}
            active={active}
            index={2}
            position="left-[70px] top-[220px]"
            setActive={setActive}
          />

          {/* Warranty */}

          <FaqNode
            data={faqData[3]}
            active={active}
            index={3}
            position="right-[70px] top-[220px]"
            setActive={setActive}
          />

          {/* Support */}

          <FaqNode
            data={faqData[4]}
            active={active}
            index={4}
            position="left-[250px] bottom-[40px]"
            setActive={setActive}
          />

          {/* Help */}

          <FaqNode
            data={faqData[5]}
            active={active}
            index={5}
            position="right-[250px] bottom-[40px]"
            setActive={setActive}
          />

        </div>
                {/* Answer Card */}

                <div className="mx-auto mt-10 max-w-4xl">

<div className="rounded-[32px] border border-blue-100 bg-white/80 p-10 shadow-[0_25px_60px_rgba(0,0,0,.08)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_rgba(37,99,235,.15)]">

  <div className="flex items-center gap-5">

    <div
      className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${current.color} text-white shadow-lg`}
    >
      <current.icon size={30} />
    </div>

    <div>

      <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
        {current.title}
      </p>

      <h3 className="mt-1 text-3xl font-bold text-slate-900">
        {current.question}
      </h3>

    </div>

  </div>

  <p className="mt-8 text-lg leading-8 text-slate-600">
    {current.answer}
  </p>

</div>

{/* CTA */}

<div className="mt-10 flex flex-wrap justify-center gap-5">

  <button className="rounded-full bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
    📞 Contact Support
  </button>

  <button className="rounded-full border border-blue-200 bg-white px-8 py-4 font-semibold text-blue-600 transition duration-300 hover:border-blue-600 hover:bg-blue-50">
    💬 Live Chat
  </button>

</div>

</div>

</div>

</section>
);
}

/* ----------------------------
FAQ Bubble Component
----------------------------- */

function FaqNode({
data,
index,
active,
position,
setActive,
}) {
const Icon = data.icon;

return (
<button
onMouseEnter={() => setActive(index)}
onClick={() => setActive(index)}
className={`absolute ${position}
flex h-32 w-32 flex-col items-center justify-center rounded-full
border transition-all duration-500

${
active === index
? `scale-110 border-blue-500 bg-gradient-to-br ${data.color}
   text-white shadow-[0_20px_50px_rgba(37,99,235,.35)]`
: "border-white/60 bg-white/80 text-slate-700 backdrop-blur-xl hover:scale-105 hover:border-blue-300 hover:shadow-xl"
}`}
>

<Icon size={28} />

<span className="mt-2 text-sm font-semibold">
{data.title}
</span>

</button>
);
}