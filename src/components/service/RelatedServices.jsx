import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import services from "../../data/services";

export default function RelatedServices({ currentSlug }) {
  const related = services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="flex items-end justify-between">

          <div>

            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              More Services
            </span>

            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              You May Also Like
            </h2>

            <p className="mt-5 max-w-2xl text-lg text-slate-600">
              Explore more trusted home services offered by Door&Duty.
            </p>

          </div>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {related.map((service) => (

            <Link
              key={service.id}
              to={`/services/${service.slug}`}
              className="group overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm transition duration-500 hover:-translate-y-3 hover:border-blue-300 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="h-56 overflow-hidden bg-slate-100">

                <img
                  src={service.coverImage}
                  alt={service.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}

              <div className="p-8">

                <div className="flex items-center justify-between">

                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">

                    {service.badge}

                  </span>

                  <div className="flex items-center gap-1">

                    <Star
                      size={16}
                      className="fill-yellow-400 text-yellow-400"
                    />

                    <span className="font-medium">

                      {service.rating}

                    </span>

                  </div>

                </div>

                <h3 className="mt-6 text-3xl font-bold text-slate-900">

                  {service.title}

                </h3>

                <p className="mt-4 leading-7 text-slate-600">

                  {service.subtitle}

                </p>

                <div className="mt-8 flex items-center justify-between">

                  <div>

                    <p className="text-sm text-slate-500">

                      Starting From

                    </p>

                    <h4 className="text-3xl font-bold text-blue-600">

                      {service.price}

                    </h4>

                  </div>

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white transition group-hover:translate-x-1">

                    <ArrowRight size={22} />

                  </div>

                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}