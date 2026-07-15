import Link from "next/link";
import Image from "next/image";

type Bike = {
  name: string;
  power: string;
  speed: string;
  price: string;
  image: string;
  link: string;
};

export default function BikeCard({ bike }: { bike: Bike }) {
  return (
    <div
      className="
        group
        bg-[#0b0b10]
        rounded-3xl
        border
        border-purple-500/10
        overflow-hidden
        transition-all
        duration-500
        hover:-translate-y-4
        hover:border-purple-500
        hover:shadow-[0_0_40px_rgba(168,85,247,0.35)]
      "
    >
      <div
        className="
          relative
          h-80
          bg-gradient-to-b
          from-[#111]
          to-black
          overflow-hidden
        "
      >
        <Image
          src={bike.image}
          alt={bike.name}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="
            object-contain
            p-8
            transition-all
            duration-700
            group-hover:scale-110
          "
        />
      </div>

      <div className="p-6">
        <h3 className="text-3xl font-bold">
          {bike.name}
        </h3>

        <div className="mt-5 space-y-2 text-gray-400">
          <p>⚡ {bike.power}</p>
          <p>🏍️ {bike.speed}</p>
        </div>

        <div
          className="
            mt-6
            text-4xl
            font-black
            text-purple-400
          "
        >
          {bike.price}
        </div>

        <Link
          href={bike.link}
          className="
            mt-6
            w-full
            py-4
            rounded-xl
            bg-gradient-to-r
            from-purple-700
            to-fuchsia-600
            font-bold
            hover:scale-105
            transition
            flex
            justify-center
            items-center
          "
        >
          Zobacz
        </Link>
      </div>
    </div>
  );
}