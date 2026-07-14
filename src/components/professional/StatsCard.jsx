export default function StatsCard({
    title,
    value,
    icon,
    color = "bg-blue-600",
    change,
  }) {
    return (
      <div className="rounded-3xl bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
  
        <div className="flex items-center justify-between">
  
          {/* Left */}
  
          <div>
  
            <p className="text-sm font-medium text-slate-500">
              {title}
            </p>
  
            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              {value}
            </h2>
  
            {change && (
              <p className="mt-2 text-sm font-medium text-green-600">
                {change}
              </p>
            )}
  
          </div>
  
          {/* Right */}
  
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-2xl ${color} text-white shadow-lg`}
          >
            {icon}
          </div>
  
        </div>
  
      </div>
    );
  }