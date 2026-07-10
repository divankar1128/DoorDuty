import { ShieldCheck, Star, Clock3, Wrench } from "lucide-react";

export default function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="min-h-screen bg-slate-50">

      {/* Background Glow */}

      <div className="fixed inset-0 overflow-hidden pointer-events-none">

        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-200 blur-[150px] opacity-30"></div>

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-100 blur-[150px] opacity-40"></div>

      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-10">

        <div className="grid w-full overflow-hidden rounded-[40px] bg-white shadow-[0_25px_80px_rgba(0,0,0,.08)] lg:grid-cols-2">

          {/* LEFT PANEL */}

          <div className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 p-12 text-white">

            {/* Decorative Circles */}

            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10"></div>

            <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/5"></div>

            <div className="relative z-10">

              {/* Logo */}

              <div className="flex items-center gap-4">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl font-bold text-blue-700">
                  D
                </div>

                <div>

                  <h1 className="text-4xl font-extrabold">
                    Door&Duty
                  </h1>

                  <p className="text-blue-100">
                    Trusted Home Professionals
                  </p>

                </div>

              </div>

              {/* Heading */}

              <h2 className="mt-16 text-5xl font-bold leading-tight">

                Home Services
                <br />
                Made Simple.

              </h2>

              <p className="mt-6 max-w-md text-lg leading-8 text-blue-100">

                Book trusted professionals for
                cleaning, plumbing, electrician,
                AC repair, painting and more in
                just a few clicks.

              </p>

              {/* Features */}

              <div className="mt-12 space-y-6">

                <Feature
                  icon={<ShieldCheck size={22} />}
                  title="Verified Professionals"
                />

                <Feature
                  icon={<Clock3 size={22} />}
                  title="Fast Booking"
                />

                <Feature
                  icon={<Wrench size={22} />}
                  title="25+ Services"
                />

              </div>

              {/* Rating */}

              <div className="mt-16 flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur">

                <div className="flex">

                  {[1,2,3,4,5].map((i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-yellow-300 text-yellow-300"
                    />
                  ))}

                </div>

                <div>

                  <p className="font-semibold">
                    Rated 4.9/5
                  </p>

                  <p className="text-sm text-blue-100">
                    Trusted by 12,000+ customers
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}

          <div className="flex items-center justify-center bg-white p-8 lg:p-14">

            <div className="w-full max-w-md">

              <h2 className="text-4xl font-bold text-slate-900">
                {title}
              </h2>

              <p className="mt-3 text-slate-500">
                {subtitle}
              </p>

              <div className="mt-10">
                {children}
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

/* -------------------------- */

function Feature({ icon, title }) {
  return (
    <div className="flex items-center gap-4">

      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">

        {icon}

      </div>

      <span className="text-lg font-medium">
        {title}
      </span>

    </div>
  );
}