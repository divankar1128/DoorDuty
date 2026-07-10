import { useParams } from "react-router-dom";
import services from "../data/services";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ServiceOverview from "../components/service/ServiceOverview";
import ServicePricing from "../components/service/ServicePricing";
import ServiceReviews from "../components/service/ServiceReviews";
import ServiceFAQ from "../components/service/ServiceFAQ";
import RelatedServices from "../components/service/RelatedServices";

export default function ServicePage() {
  const { slug } = useParams();

  const service = services.find(
    (item) => item.slug === slug
  );

  if (!service) {
    return (
      <>
        <Navbar />

        <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center justify-center px-6">

          <div className="text-center">

            <h1 className="text-5xl font-bold text-slate-900">
              Service Not Found
            </h1>

            <p className="mt-5 text-slate-600">
              The service you are looking for doesn't exist.
            </p>

          </div>

        </div>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main>

        {/* Hero Section */}

        <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100">

          <div className="mx-auto max-w-7xl px-6 py-24">

            <div className="grid items-center gap-16 lg:grid-cols-2">

              {/* Left */}

              <div>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">

                  {service.badge}

                </span>

                <h1 className="mt-6 text-5xl font-extrabold text-slate-900">

                  {service.title}

                </h1>

                <p className="mt-6 text-lg leading-8 text-slate-600">

                  {service.subtitle}

                </p>

                <div className="mt-10 flex flex-wrap gap-8">

                  <div>

                    <p className="text-sm text-slate-500">
                      Starting From
                    </p>

                    <h2 className="text-4xl font-bold text-blue-600">

                      {service.price}

                    </h2>

                  </div>

                  <div>

                    <p className="text-sm text-slate-500">
                      Duration
                    </p>

                    <h2 className="text-2xl font-bold">

                      {service.duration}

                    </h2>

                  </div>

                </div>

                <button className="mt-12 rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">

                  Book Now

                </button>

              </div>
         

              {/* Right */}

              <div>

                <div className="flex h-[450px] items-center justify-center rounded-[40px] bg-white shadow-2xl">

                  <img
                    src={service.heroImage}
                    alt={service.title}
                    className="h-full w-full rounded-[40px] object-cover"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>
        <ServiceOverview service={service} />
        <ServicePricing service={service} />

  <ServiceReviews service={service} />

  <ServiceFAQ service={service} />
  <RelatedServices currentSlug={service.slug} />

      </main>

      <Footer />
    </>
  );
}