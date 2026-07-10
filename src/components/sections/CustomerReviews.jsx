import reviews from "./reviews";

export default function CustomerReviews() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200 opacity-30 blur-[160px]"></div>

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-600">
            CUSTOMER REVIEWS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Trusted by Thousands
          </h2>

          <p className="mt-5 text-lg text-slate-500">
            4.9 ★ Average Rating from 15,000+ Verified Customers
          </p>

        </div>

        {/* Auto Slider */}

        <div className="group relative mt-20 overflow-hidden">

          {/* Left Blur */}

          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-32 bg-gradient-to-r from-slate-50 to-transparent"></div>

          {/* Right Blur */}

          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-32 bg-gradient-to-l from-slate-50 to-transparent"></div>

          <div className="review-slider group-hover:[animation-play-state:paused]">

            {[...reviews, ...reviews].map((review, index) => (

              <div
                key={index}
                className="review-card mx-5 flex w-[370px] flex-shrink-0 flex-col rounded-3xl border border-white/40 bg-white/60 p-8 backdrop-blur-xl transition duration-500 hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(37,99,235,.25)]"
              >

                {/* Top */}

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-3xl">

                      {review.avatar}

                    </div>

                    <div>

                      <h3 className="text-xl font-bold text-slate-900">

                        {review.name}

                      </h3>

                      <p className="text-slate-500">

                        {review.city}

                      </p>

                    </div>

                  </div>

                  <div className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white">

                    Verified

                  </div>

                </div>

                {/* Stars */}

                <div className="mt-6 flex text-yellow-400 text-xl">

                  {"★★★★★"}

                </div>

                {/* Review */}

                <p className="mt-6 leading-8 text-slate-600">

                  "{review.review}"

                </p>

                {/* Bottom */}

                <div className="mt-8 flex items-center justify-between">

                  <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">

                    ✔ Verified Booking

                  </span>

                  <span className="text-sm text-slate-400">

                    {review.date}

                  </span>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}