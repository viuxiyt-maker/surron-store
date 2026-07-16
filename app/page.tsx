import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBikes from "@/components/FeaturedBikes";

export default function Home() {
  return (
    <main
      id="home"
      className="bg-[#050507] text-white min-h-screen"
    >

      <Navbar />

      <Hero />

      <FeaturedBikes />


      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="max-w-7xl mx-auto px-8 py-28 text-center"
      >
        <p className="uppercase tracking-[8px] text-purple-400">
          Get In Touch
        </p>

        <h2 className="text-5xl font-black mt-3 text-white">
          Contact
        </h2>

        <div className="mt-10 space-y-4">

          <p className="text-gray-400 text-lg">
            Email: viuxiyt@gmail.com
          </p>

          <p className="text-gray-400 text-lg">
            Phone: +48 123 456 789
          </p>

          <p className="text-gray-500 mt-6">
            We are ready to help you with your Surron.
          </p>

        </div>

      </section>


    </main>
  );
}