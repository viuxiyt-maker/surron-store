import BikeCard from "./BikeCard";
import { bikes } from "./bikes";

export default function FeaturedBikes() {
  return (
    <section
      id="bikes"
      className="max-w-7xl mx-auto px-8 py-28"
    >

      <div className="text-center mb-16">
        <p className="uppercase tracking-[8px] text-purple-400">
          Premium Collection
        </p>

        <h2 className="text-5xl font-black mt-3">
          Featured Bikes
        </h2>
      </div>


      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

        {bikes.map((bike)=>(
          <BikeCard
            key={bike.name}
            bike={bike}
          />
        ))}

      </div>

    </section>
  );
}