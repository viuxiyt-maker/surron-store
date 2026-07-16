import Link from "next/link";

export default function BikesPage() {
  const bikes = [
    {
      name: "Surron Light Bee",
      description: "Lightweight electric bike with incredible power.",
      href: "/bikes/light-bee",
    },
    {
      name: "Surron Hyper Bee",
      description: "High performance electric bike for extreme riding.",
      href: "/bikes/hyper-bee",
    },
    {
      name: "Surron Ultra Bee",
      description: "Powerful electric bike built for adventure.",
      href: "/bikes/ultra-bee",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050507] text-white px-8 py-32">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[8px] text-purple-400">
            Premium Collection
          </p>

          <h1 className="text-6xl font-black mt-4">
            Surron Bikes
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Explore our collection of premium electric bikes.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {bikes.map((bike) => (
            <div
              key={bike.name}
              className="bg-white/5 border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500 transition"
            >

              <h2 className="text-3xl font-black">
                {bike.name}
              </h2>

              <p className="text-gray-400 mt-4">
                {bike.description}
              </p>

              <Link
                href={bike.href}
                className="inline-block mt-8 px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 transition font-semibold"
              >
                View Bike
              </Link>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}