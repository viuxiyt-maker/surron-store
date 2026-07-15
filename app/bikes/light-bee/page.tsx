import Image from "next/image";
import Link from "next/link";

export default function LightBeePage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">
      <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <Image
            src="/surron1.png"
            alt="Surron Light Bee 2"
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
            Surron <span className="text-purple-500">Light Bee 2</span>
          </h1>

          <p className="mt-8 text-gray-400 leading-8 text-lg">
            Surron Light Bee 2 to nowoczesny elektryczny motocykl terenowy,
            zaprojektowany dla osób szukających lekkiej konstrukcji,
            wysokiej mocy i świetnych osiągów. Dzięki wydajnemu silnikowi,
            mocnej baterii oraz doskonałemu zawieszeniu sprawdza się
            zarówno podczas jazdy po lesie, torach enduro, jak i
            wymagających trasach terenowych.
          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="bg-[#0b0b10] p-5 rounded-2xl border border-purple-500/20">
              <p className="text-gray-500">Moc</p>
              <h3 className="text-2xl font-bold text-purple-400">6000W</h3>
            </div>

            <div className="bg-[#0b0b10] p-5 rounded-2xl border border-purple-500/20">
              <p className="text-gray-500">Prędkość</p>
              <h3 className="text-2xl font-bold text-purple-400">75 km/h</h3>
            </div>

            <div className="bg-[#0b0b10] p-5 rounded-2xl border border-purple-500/20">
              <p className="text-gray-500">Zasięg</p>
              <h3 className="text-2xl font-bold text-purple-400">do 100 km</h3>
            </div>

            <div className="bg-[#0b0b10] p-5 rounded-2xl border border-purple-500/20">
              <p className="text-gray-500">Waga</p>
              <h3 className="text-2xl font-bold text-purple-400">56 kg</h3>
            </div>
          </div>

          <div className="mt-10">
            <p className="text-gray-500">Cena</p>

            <h2 className="text-5xl font-black text-purple-400 mt-2">
              29 999 zł
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


</div>   {/* zamyka prawą kolumnę */}
</section>

      <section className="max-w-7xl mx-auto px-8 py-10">
        <h2 className="text-4xl font-black mb-10">
          Dlaczego warto wybrać Surron Light Bee 2?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#0b0b10] rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400">
              ⚡ Wysoka moc
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Silnik o mocy 6000W zapewnia błyskawiczne przyspieszenie
              oraz świetne osiągi w każdym terenie.
            </p>
          </div>

          <div className="bg-[#0b0b10] rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400">
              🔋 Duży zasięg
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Wydajny akumulator pozwala przejechać nawet do 100 km
              na jednym ładowaniu.
            </p>
          </div>

          <div className="bg-[#0b0b10] rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400">
              🌲 Gotowy na teren
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Lekka rama oraz profesjonalne zawieszenie sprawiają,
              że motocykl doskonale radzi sobie na leśnych trasach,
              szutrach i torach enduro.
            </p>
          </div>

          <div className="bg-[#0b0b10] rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-400">
              🛡️ Gwarancja producenta
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Oryginalny motocykl Surron objęty gwarancją oraz
              wsparciem serwisowym.
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20">
        <h2 className="text-4xl font-black mb-10">
          Specyfikacja techniczna
        </h2>

        <div className="rounded-2xl overflow-hidden border border-purple-500/20">
          <div className="flex justify-between p-5 bg-[#0b0b10]">
            <span>Model</span>
            <span>Surron Light Bee 2</span>
          </div>

          <div className="flex justify-between p-5 bg-[#111118]">
            <span>Moc silnika</span>
            <span>6000W</span>
          </div>

          <div className="flex justify-between p-5 bg-[#0b0b10]">
            <span>Prędkość maksymalna</span>
            <span>75 km/h</span>
          </div>

          <div className="flex justify-between p-5 bg-[#111118]">
            <span>Zasięg</span>
            <span>do 100 km</span>
          </div>

          <div className="flex justify-between p-5 bg-[#0b0b10]">
            <span>Akumulator</span>
            <span>60V 40Ah</span>
          </div>

          <div className="flex justify-between p-5 bg-[#111118]">
            <span>Waga</span>
            <span>56 kg</span>
          </div>

          <div className="flex justify-between p-5 bg-[#0b0b10]">
            <span>Napęd</span>
            <span>Elektryczny</span>
          </div>

          <div className="flex justify-between p-5 bg-[#111118]">
            <span>Kolor</span>
            <span>Czarny</span>
          </div>
        </div>
      </section>
    </main>
  );
}