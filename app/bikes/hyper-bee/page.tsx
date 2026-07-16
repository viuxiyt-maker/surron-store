import Image from "next/image";
import Link from "next/link";

export default function HyperBeePage() {
  return (
    <main className="min-h-screen bg-[#050507] text-white">

      <section className="max-w-7xl mx-auto px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

        <div className="flex justify-center">
          <Image
            src="/surron2.png"
            alt="Surron Hyper Bee"
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
            Surron <span className="text-purple-500">Hyper Bee</span>
          </h1>


          <p className="mt-8 text-gray-400 leading-8 text-lg">
            Surron Hyper Bee to kompaktowy i niezwykle mocny motocykl
            elektryczny. Łączy lekką konstrukcję, wysoką wydajność oraz
            nowoczesną technologię stworzoną do dynamicznej jazdy terenowej.
          </p>


          <div className="grid grid-cols-2 gap-6 mt-10">

            <Spec title="Moc" value="8000W" />
            <Spec title="Prędkość" value="85 km/h" />
            <Spec title="Zasięg" value="120 km" />
            <Spec title="Waga" value="60 kg" />

          </div>


          <div className="mt-10">
            <p className="text-gray-500">
              Cena
            </p>

            <h2 className="text-5xl font-black text-purple-400 mt-2">
              12999.00 zł
            </h2>
          </div>


          <Link
            href="/checkout"
            className="inline-flex mt-10 px-10 py-4 rounded-xl bg-purple-600 hover:bg-purple-500 transition font-bold shadow-[0_0_30px_#8b5cf6]"
          >
            Kup teraz
          </Link>

        </div>

      </section>



      <Info title="Dlaczego warto wybrać Hyper Bee?">
        Surron Hyper Bee oferuje ogromną moc, szybkie przyspieszenie
        i świetną kontrolę podczas jazdy terenowej.
      </Info>


    </main>
  );
}



function Spec({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-[#0b0b10] p-5 rounded-2xl border border-purple-500/20">
      <p className="text-gray-500">
        {title}
      </p>

      <h3 className="text-2xl font-bold text-purple-400">
        {value}
      </h3>
    </div>
  );
}



function Info({
  title,
  children,
}: {
  title:string;
  children:React.ReactNode;
}) {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <h2 className="text-4xl font-black mb-8">
        {title}
      </h2>

      <div className="bg-[#0b0b10] rounded-2xl p-8 border border-purple-500/20 text-gray-400 text-lg">
        {children}
      </div>

    </section>
  );
}