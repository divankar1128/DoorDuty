import { useState } from "react";

const cities = [
  {
    name: "Mumbai",
    image:
      "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=800",
    areas: [
      "Andheri",
      "Bandra",
      "Borivali",
      "Powai",
      "Malad",
      "Dadar",
      "Goregaon",
      "Kurla",
      "Thane",
      "Mulund",
      "Chembur",
      "Vikhroli",
    ],
  },

  {
    name: "Delhi",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800",
    areas: [
      "Rohini",
      "Dwarka",
      "Janakpuri",
      "Lajpat Nagar",
      "Saket",
      "Karol Bagh",
      "Pitampura",
      "Vasant Kunj",
      "Rajouri Garden",
      "Preet Vihar",
    ],
  },

  {
    name: "Bangalore",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800",
    areas: [
      "Whitefield",
      "Indiranagar",
      "Koramangala",
      "HSR Layout",
      "BTM",
      "Electronic City",
      "Hebbal",
      "Marathahalli",
      "Yelahanka",
      "Jayanagar",
      "Sarjapur",
      "Bellandur",
    ],
  },

  {
    name: "Hyderabad",
    image:
      "https://images.unsplash.com/photo-1624806992066-5ffcf7b4c4e0?w=800",
    areas: [
      "Gachibowli",
      "Madhapur",
      "Kondapur",
      "Banjara Hills",
      "Jubilee Hills",
      "Kukatpally",
      "Miyapur",
      "Begumpet",
      "Secunderabad",
      "Manikonda",
    ],
  },

  {
    name: "Pune",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800",
    areas: [
      "Baner",
      "Kharadi",
      "Hadapsar",
      "Wakad",
      "Hinjewadi",
      "Kothrud",
      "Viman Nagar",
      "Aundh",
      "Magarpatta",
      "Pimpri",
    ],
  },

  {
    name: "Ahmedabad",
    image:
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=800",
    areas: [
      "Navrangpura",
      "Satellite",
      "Bopal",
      "Maninagar",
      "Thaltej",
      "SG Highway",
      "Naranpura",
      "Vastrapur",
      "Chandkheda",
      "Gota",
    ],
  },

  {
    name: "Jaipur",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=800",
    areas: [
      "Malviya Nagar",
      "Vaishali Nagar",
      "Mansarovar",
      "Jagatpura",
      "Tonk Road",
      "C Scheme",
      "Sodala",
      "Vidhyadhar Nagar",
    ],
  },
];

export default function Cities() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200 blur-[170px] opacity-30"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            CITIES WE SERVE
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Serving Across India
          </h2>

          <p className="mt-4 text-lg text-slate-500">
            Hover any city to explore our service locations.
          </p>

        </div>

      {/* Glass Carousel */}

<div className="group relative mt-20 overflow-hidden">

{/* Left Fade */}
<div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-slate-50 to-transparent"></div>

{/* Right Fade */}
<div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-slate-50 to-transparent"></div>

<div className="city-slider group-hover:[animation-play-state:paused]">

  {[...cities, ...cities].map((city, index) => (

    <div
      key={index}
      onMouseEnter={() => setSelectedCity(city)}
      className="city-card mx-4 flex-shrink-0 cursor-pointer overflow-hidden rounded-3xl bg-white/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-4 hover:border-blue-500 hover:shadow-[0_25px_60px_rgba(37,99,235,.25)]"
    >

      <img
        src={city.image}
        alt={city.name}
        className="h-52 w-80 object-cover transition duration-700 hover:scale-110"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-slate-900">
          {city.name}
        </h3>

        <p className="mt-2 text-slate-500">
          {city.areas.length}+ Areas Covered
        </p>

      </div>

    </div>

  ))}

</div>

</div>

{/* Areas */}

<div className="mt-20 rounded-[36px] border border-blue-100 bg-white p-10 shadow-xl">

<div className="flex items-center justify-between flex-wrap gap-5">

  <div>

    <h3 className="text-3xl font-bold text-slate-900">
      Serving Areas in
      <span className="ml-3 text-blue-600">
        {selectedCity.name}
      </span>
    </h3>

    <p className="mt-2 text-slate-500">
      Our professionals are available across these locations.
    </p>

  </div>

  <div className="rounded-full bg-blue-100 px-5 py-3 font-semibold text-blue-700">

    {selectedCity.areas.length}+ Locations

  </div>

</div>

<div className="mt-10 flex flex-wrap gap-4">

  {selectedCity.areas.map((area) => (

<div
key={area}
className="area-chip rounded-full bg-blue-50 px-5 py-3 font-medium text-blue-700 hover:bg-blue-600 hover:text-white"
>
      {area}
    </div>

  ))}

</div>

</div>

      </div>

    </section>
  );
}