import SearchBar from "./SearchBar";

const services = [
  "Cleaning",
  "Plumbing",
  "Electrician",
  "AC Service",
  "Beauty",
  "Carpentry",
  "Pest Control",
];

export default function HeroContent() {
  return (
    <div>

      <h1 className="max-w-xl text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
        Reliable help for
        <br />
        every need.
        <br />
        Right at
        <span className="text-blue-600"> your doorstep.</span>
      </h1>

      <p className="mt-6 text-lg text-slate-600">
        Book verified professionals in under 60 seconds.
      </p>

      <div className="mt-8">
        <SearchBar />
      </div>

      <div className="mt-8">
        <p className="mb-4 font-semibold text-slate-800">
          Popular services
        </p>

        <div className="flex flex-wrap gap-3">

          {services.map((service) => (
            <button
              key={service}
              className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm transition hover:-translate-y-1 hover:border-blue-500 hover:text-blue-600"
            >
              {service}
            </button>
          ))}

        </div>

      </div>

    </div>
  );
}