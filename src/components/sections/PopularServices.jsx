import { Link } from "react-router-dom";

const services = [
  {
    title: "Home Cleaning",
    slug: "cleaning",
    image: "https://placehold.co/1200x700?text=Home+Cleaning",
  },
  {
    title: "Plumbing",
    slug: "plumbing",
    image: "https://placehold.co/400x300?text=Plumbing",
  },
  {
    title: "Electrician",
    slug: "electrician",
    image: "https://placehold.co/400x300?text=Electrician",
  },
  {
    title: "AC Repair",
    slug: "ac-repair",
    image: "https://placehold.co/400x300?text=AC+Repair",
  },
  {
    title: "Painting",
    slug: "painting",
    image: "https://placehold.co/400x300?text=Painting",
  },
  {
    title: "Carpentry",
    slug: "carpentry",
    image: "https://placehold.co/400x300?text=Carpentry",
  },
];

export default function PopularServices() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="relative overflow-hidden rounded-[36px]">

          <img
            src={services[0].image}
            alt={services[0].title}
            className="h-[700px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/35"></div>

          <div className="absolute left-10 top-10 z-20">

            <p className="text-sm font-semibold uppercase tracking-[3px] text-white/80">
              POPULAR SERVICES
            </p>

            <h2 className="mt-3 max-w-xl text-6xl font-bold leading-tight text-white">
              Most Booked
              <br />
              Services
            </h2>

            <p className="mt-5 max-w-lg text-lg text-white/80">
              Trusted professionals for every home service.
              Fast booking, verified experts and transparent pricing.
            </p>

          </div>
                    {/* Explore Button */}

                    <Link
            to="/services"
            className="absolute right-10 top-10 flex items-center gap-3 rounded-full bg-white px-6 py-3 font-semibold shadow-lg transition hover:scale-105"
          >
            Explore Services

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white">
              →
            </span>

          </Link>

          {/* Bottom Cards */}

          <div className="absolute bottom-8 left-8 right-8">

            <div className="grid grid-cols-5 gap-5">

              {services.slice(1).map((service) => (

                <Link
                  key={service.slug}
                  to={`/services/${service.slug}`}
                  className="group relative block overflow-hidden rounded-3xl shadow-xl"
                >

                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">

                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg shadow transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      →
                    </div>

                  </div>
                  </Link>

))}

</div>

</div>

</div>

</div>

</section>
);
}