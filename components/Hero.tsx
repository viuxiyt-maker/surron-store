import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050507] via-[#08080c] to-[#050507]" />

      <div
        className="
        absolute
        left-1/2
        top-1/2
        w-[700px]
        h-[700px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-purple-600/20
        blur-[180px]
        "
      />


      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-8
        w-full
        grid
        lg:grid-cols-2
        gap-16
        items-center
        "
      >

        {/* TEXT */}
        <div>

          <p
            className="
            uppercase
            tracking-[8px]
            text-purple-400
            mb-6
            "
          >
            Electric Performance
          </p>


          <h1
            className="
            text-6xl
            md:text-7xl
            xl:text-8xl
            font-black
            leading-none
            "
          >
            Ride The
            <br />

            <span
              className="
              text-purple-500
              drop-shadow-[0_0_30px_#8b5cf6]
              "
            >
              Future
            </span>

          </h1>


          <p
            className="
            mt-8
            text-gray-400
            text-lg
            leading-8
            max-w-xl
            "
          >
            Odkryj najmocniejsze elektryczne motocykle terenowe.
            Sur-Ron to połączenie nowoczesnej technologii,
            osiągów i czystej adrenaliny.
          </p>


          <div className="flex gap-5 mt-10">

            <button
              className="
              px-8
              py-4
              rounded-xl
              bg-purple-600
              hover:bg-purple-500
              transition
              shadow-[0_0_30px_#8b5cf6]
              font-bold
              "
            >
              Shop Now
            </button>


            <button
              className="
              px-8
              py-4
              rounded-xl
              border
              border-purple-500
              hover:bg-purple-500/20
              transition
              font-bold
              "
            >
              Explore
            </button>

          </div>



          {/* STATS */}
          <div className="flex gap-12 mt-16">

            <div>
              <h3 className="text-3xl font-black text-purple-400">
                75 km/h
              </h3>

              <p className="text-gray-500">
                Top Speed
              </p>
            </div>


            <div>
              <h3 className="text-3xl font-black text-purple-400">
                6000W
              </h3>

              <p className="text-gray-500">
                Power
              </p>
            </div>


            <div>
              <h3 className="text-3xl font-black text-purple-400">
                100 km
              </h3>

              <p className="text-gray-500">
                Range
              </p>
            </div>

          </div>


        </div>



        {/* BIKE IMAGE */}
        <div className="flex justify-center">

          <Image
            src="/surron1.png"
            alt="Sur-Ron Light Bee"
            width={900}
            height={900}
            priority
            className="
            animate-float
            animate-glow
            w-full
            max-w-[700px]
            object-contain
            "
          />

        </div>


      </div>

    </section>
  );
}