export default function ServiceOverview({ service }) {
    return (
      <section className="bg-white py-24">
  
        <div className="mx-auto max-w-7xl px-6">
  
          <div className="grid gap-16 lg:grid-cols-2">
  
            {/* Left */}
  
            <div>
  
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
  
                Why Choose Door&Duty
  
              </span>
  
              <h2 className="mt-6 text-4xl font-bold text-slate-900">
  
                {service.title}
  
              </h2>
  
              <p className="mt-6 text-lg leading-8 text-slate-600">
  
                {service.description}
  
              </p>
  
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
  
                {service.benefits.map((item) => (
  
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                  >
  
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100">
  
                      ✅
  
                    </div>
  
                    <h3 className="font-semibold text-slate-900">
  
                      {item}
  
                    </h3>
  
                  </div>
  
                ))}
  
              </div>
  
            </div>
  
            {/* Right */}
  
            <div>
  
              <div className="rounded-[36px] border border-slate-200 bg-slate-50 p-10">
  
                <h3 className="text-3xl font-bold text-slate-900">
  
                  What's Included
  
                </h3>
  
                <div className="mt-8 space-y-4">
  
                  {service.includes.map((item) => (
  
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm"
                    >
  
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
  
                        ✓
  
                      </div>
  
                      <span className="font-medium text-slate-700">
  
                        {item}
  
                      </span>
  
                    </div>
  
                  ))}
  
                </div>
  
              </div>
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }