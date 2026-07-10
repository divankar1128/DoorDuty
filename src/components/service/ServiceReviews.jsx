import { Star, CheckCircle } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    city: "Delhi",
    rating: 5,
    review:
      "Excellent service! The professional arrived on time and completed the work perfectly. Highly recommended.",
  },

  {
    id: 2,
    name: "Priya Verma",
    city: "Noida",
    rating: 5,
    review:
      "Very professional staff and transparent pricing. Will definitely book again.",
  },

  {
    id: 3,
    name: "Amit Singh",
    city: "Gurugram",
    rating: 4,
    review:
      "Quick response and quality work. The booking experience was smooth.",
  },
];

export default function ServiceReviews({ service }) {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Customer Reviews
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Loved by Thousands
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">
            Thousands of customers trust Door&Duty for reliable home services.
          </p>

        </div>

        {/* Overall Rating */}

        <div className="mx-auto mt-14 max-w-xl rounded-[30px] border border-blue-100 bg-blue-50 p-8">

          <div className="flex flex-col items-center">

            <div className="flex">

              {[1,2,3,4,5].map((item)=>(
                <Star
                  key={item}
                  size={28}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}

            </div>

            <h3 className="mt-5 text-6xl font-extrabold text-slate-900">
              {service.rating}
            </h3>

            <p className="mt-2 text-slate-600">
              Based on {service.reviews.toLocaleString()} Reviews
            </p>

          </div>

        </div>

        {/* Review Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.id}
              className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >

              {/* Profile */}

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-blue-700 text-2xl font-bold text-white">

                  {review.name.charAt(0)}

                </div>

                <div>

                  <h4 className="text-lg font-bold">
                    {review.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {review.city}
                  </p>

                </div>

              </div>

              {/* Stars */}

              <div className="mt-6 flex">

                {[...Array(review.rating)].map((_, index)=>(
                  <Star
                    key={index}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}

              </div>

              {/* Review */}

              <p className="mt-6 leading-8 text-slate-600">
                {review.review}
              </p>

              {/* Verified */}

              <div className="mt-8 flex items-center gap-2 text-green-600">

                <CheckCircle size={18} />

                <span className="font-medium">
                  Verified Customer
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}