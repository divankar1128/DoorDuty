import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function ServiceFAQ({ service }) {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FAQs
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Everything you need to know about {service.title}.
          </p>

        </div>

        <div className="mt-16 space-y-5">

          {service.faqs.map((faq, index) => {

            const open = active === index;

            return (

              <div
                key={index}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              >

                <button
                  onClick={() =>
                    setActive(open ? -1 : index)
                  }
                  className="flex w-full items-center justify-between p-7 text-left"
                >

                  <h3 className="text-lg font-semibold text-slate-900">

                    {faq.question}

                  </h3>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">

                    {open ? (
                      <Minus size={20} />
                    ) : (
                      <Plus size={20} />
                    )}

                  </div>

                </button>

                <div
                  className={`grid transition-all duration-500 ${
                    open
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >

                  <div className="overflow-hidden">

                    <p className="px-7 pb-7 leading-8 text-slate-600">

                      {faq.answer}

                    </p>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}