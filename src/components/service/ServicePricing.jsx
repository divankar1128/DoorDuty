import { Check, ArrowRight } from "lucide-react";

export default function ServicePricing({ service }) {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Pricing
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Choose Your Package
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            Transparent pricing with no hidden charges.
            Select the package that best fits your needs.
          </p>

        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {service.pricing.map((plan, index) => (

            <div
              key={plan.name}
              className={`relative overflow-hidden rounded-[36px] border bg-white p-8 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl

                ${
                  index === 1
                    ? "border-blue-600 ring-4 ring-blue-100 scale-105"
                    : "border-slate-200"
                }
              `}
            >

              {index === 1 && (
                <div className="absolute right-0 top-0 rounded-bl-3xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-bold text-slate-900">
                {plan.name}
              </h3>

              <div className="mt-8">

                <span className="text-5xl font-extrabold text-blue-600">
                  {plan.price}
                </span>

              </div>

              <p className="mt-3 text-slate-500">
                Duration: {plan.duration}
              </p>

              <div className="my-8 h-px bg-slate-200"></div>

              <div className="space-y-5">

                {service.includes.slice(0, 6).map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">

                      <Check
                        size={16}
                        className="text-blue-600"
                      />

                    </div>

                    <span className="text-slate-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

              <button className="mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 py-4 font-semibold text-white transition duration-300 hover:bg-blue-700 hover:shadow-xl">

                Book Now

                <ArrowRight size={18} />

              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}