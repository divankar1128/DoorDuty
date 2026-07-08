
import { MapPin, Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-3 shadow-lg lg:flex-row">

      <div className="flex flex-1 items-center gap-3 rounded-xl border px-4">

        <Search className="text-slate-400" size={20} />

        <input
          type="text"
          placeholder="What service do you need?"
          className="h-14 w-full outline-none"
        />

      </div>

      <div className="flex items-center gap-2 rounded-xl border px-5">

        <MapPin className="text-slate-400" size={18} />

        <span className="text-slate-500">
          Current Location
        </span>

      </div>

      <button
        className="
        rounded-xl
        bg-blue-600
        px-8
        font-semibold
        text-white
        transition
        hover:bg-blue-700
        "
      >
        Search
      </button>

    </div>
  );
}