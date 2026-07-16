import Image from "next/image";
import Link from "next/link";

export default function UltraBeePage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">

      <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center">
          <Image
            src="/surron3.png"
            alt="Surron Ultra Bee"
            width={700}
            height={700}
            className="w-full max-w-[650px] object-contain"
            priority
          />
        </div>


        <div>

          <p className="uppercase tracking-[6px] text-purple-400">
            ELECTRIC DIRT BIKE
          </p>


          <h1 className="text-6xl font-black mt-4">
            Surron{" "}
            <span className="text-purple-500">
              Ultra Bee
            </span>
          </h1>


          <p className="mt-8 text-gray-400 leading-8 text-lg">
            Surron Ultra Bee to najmocniejszy model z rodziny Surron.
            Został stworzony dla osób, które oczekują maksymalnych osiągów,
            dużej mocy oraz pełnej kontroli podczas ekstremalnej jazdy
            terenowej. Idealny na las, góry, szutry i wymagające trasy.
          </p>


          <div className="grid grid-cols-2 gap-6 mt-10">


            <div className="bg-[#0b0b10] p-5 rounded-2xl border border-purple-500/20">
              <p className="text-gray-500">
                Moc
              </p>

              <h3 className="text-2xl font-bold text-purple-400">
                12000W
              </h3>
            </div>


            <div className="bg-[#0b0b10] p-5 rounded-2xl border border-purple-500/20">
              <p className="text-gray-500">
                Prędkość
              </p>

              <h3 className="text-2xl font-bold text-purple-400">
                90 km/h
              </h3>
            </div>


            <div className="bg-[#0b0b10] p-5 rounded-2xl border border-purple-500/20">
              <p className="text-gray-500">
                Zasięg
              </p>

              <h3 className="text-2xl font-bold text-purple-400">
                do 140 km
              </h3>
            </div>


            <div className="bg-[#0b0b10] p-5 rounded-2xl border border-purple-500/20">
              <p className="text-gray-500">
                Waga
              </p>

              <h3 className="text-2xl font-bold text-purple-400">
                85 kg
              </h3>
            </div>


          </div>


          <div className="mt-10">

            <p className="text-gray-500">
              Cena
            </p>

            <h2 className="text-5xl font-black text-purple-400 mt-2">
              32900,00 zł
            </h2>

          </div>


          <Link
            href="/checkout"
            className="
            mt-10
            px-10
            py-4
            rounded-xl
            bg-purple-600
            hover:bg-purple-500
            transition
            shadow-[0_0_30px_#8b5cf6]
            font-bold
            inline-flex
            "
          >
            Kup teraz
          </Link>


        </div>

      </section>



      <section className="max-w-7xl mx-auto px-8 py-10">

        <h2 className="text-4xl font-black mb-10">
          Dlaczego warto wybrać Surron Ultra Bee?
        </h2>


        <div className="grid md:grid-cols-2 gap-6">


          <div className="bg-[#0b0b10] rounded-2xl p-6 border border-purple-500/20">

            <h3 className="text-2xl font-bold text-purple-400">
              ⚡ Maksymalna moc
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Silnik 12000W zapewnia ogromne przyspieszenie oraz
              świetne osiągi nawet w trudnym terenie.
            </p>

          </div>



          <div className="bg-[#0b0b10] rounded-2xl p-6 border border-purple-500/20">

            <h3 className="text-2xl font-bold text-purple-400">
              🔋 Duża bateria
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Wydajny akumulator pozwala pokonać długie trasy
              bez częstego ładowania.
            </p>

          </div>



          <div className="bg-[#0b0b10] rounded-2xl p-6 border border-purple-500/20">

            <h3 className="text-2xl font-bold text-purple-400">
              🌲 Jazda terenowa
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Solidna konstrukcja i profesjonalne zawieszenie
              pozwalają jeździć po najbardziej wymagających trasach.
            </p>

          </div>



          <div className="bg-[#0b0b10] rounded-2xl p-6 border border-purple-500/20">

            <h3 className="text-2xl font-bold text-purple-400">
              🛡️ Premium wykonanie
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Ultra Bee oferuje najwyższą jakość wykonania
              oraz nowoczesne technologie Surron.
            </p>

          </div>


        </div>

      </section>



      <section className="max-w-7xl mx-auto px-8 py-20">

        <h2 className="text-4xl font-black mb-10">
          Specyfikacja techniczna
        </h2>


        <div className="rounded-2xl overflow-hidden border border-purple-500/20">


          {[
            ["Model", "Surron Ultra Bee"],
            ["Moc silnika", "12000W"],
            ["Prędkość maksymalna", "90 km/h"],
            ["Zasięg", "do 140 km"],
            ["Akumulator", "74V 60Ah"],
            ["Waga", "85 kg"],
            ["Napęd", "Elektryczny"],
            ["Kolor", "Czarny"],
          ].map(([name, value], index) => (

            <div
              key={name}
              className={`flex justify-between p-5 ${
                index % 2 === 0
                  ? "bg-[#0b0b10]"
                  : "bg-[#111118]"
              }`}
            >

              <span>
                {name}
              </span>

              <span>
                {value}
              </span>

            </div>

          ))}


        </div>


      </section>


    </main>
  );
}