export default function HeroImage() {
    return (
      <div className="relative flex justify-center">
  
        <img
          src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700"
          alt="Professional"
          className="w-[500px] rounded-3xl object-cover shadow-2xl"
        />
  
        <div className="absolute left-0 top-10 rounded-2xl bg-white px-5 py-4 shadow-xl">
          ⭐ 4.8/5 Rating
        </div>
  
        <div className="absolute bottom-10 right-0 rounded-2xl bg-white px-5 py-4 shadow-xl">
          ✔ Verified Professional
        </div>
  
      </div>
    );
  }