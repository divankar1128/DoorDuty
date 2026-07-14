import {
    ShieldCheck,
    Clock3,
    BadgeDollarSign,
    Star,
    Headphones,
    BadgeCheck,
  } from "lucide-react";
  
  const features = [
    {
      icon: ShieldCheck,
      title: "Verified Experts",
      desc: "Background checked and professionally trained experts.",
    },
    {
      icon: Clock3,
      title: "Fast Arrival",
      desc: "Book instantly and get professionals at your doorstep.",
    },
    {
      icon: BadgeDollarSign,
      title: "Transparent Pricing",
      desc: "No hidden charges. What you see is what you pay.",
    },
    {
      icon: Star,
      title: "Top Rated",
      desc: "Thousands of happy customers trust Door&Duty.",
    },
    {
      icon: Headphones,
      title: "24×7 Support",
      desc: "Our support team is always ready to help.",
    },
    {
      icon: BadgeCheck,
      title: "Service Warranty",
      desc: "Quality assurance with every completed booking.",
    },
  ];
  
  export default function WhyChooseUs() {
    return (
      <section className="relative overflow-hidden bg-slate-50 py-28">
  
        {/* Background Blobs */}
  
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-[120px]" />
  
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-cyan-200/40 blur-[130px]" />
  
        <div className="mx-auto max-w-7xl px-6">
  
          {/* Heading */}
  
          <div className="text-center">
  
            <span className="rounded-full bg-blue-100 px-6 py-2 text-sm font-semibold tracking-wider text-blue-700">
              WHY CHOOSE DOOR&DUTY
            </span>
  
            <h2 className="mt-6 text-5xl font-bold text-slate-900">
              Trusted Home Services
            </h2>
  
            <p className="mt-4 text-lg text-slate-500">
              Experience convenience, quality and reliability with every booking.
            </p>
  
          </div>
  
          {/* Floating Cards */}
  
          <div className="relative mt-24 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  
            {features.map((item, index) => {
              const Icon = item.icon;
  
              return (
                <div
                  key={index}
                  className={`glass-card float-${(index % 3) + 1} rounded-3xl p-8`}
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
  
                    <Icon size={30} />
  
                  </div>
  
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">
                    {item.title}
                  </h3>
  
                  <p className="mt-3 leading-7 text-slate-500">
                    {item.desc}
                  </p>
  
                </div>
              );
            })}
  
          </div>
  
        </div>
  
      </section>
    );
  }
