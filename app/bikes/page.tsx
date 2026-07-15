import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedBikes from "@/components/FeaturedBikes";

export default function Home(){

return(
<main className="bg-[#050507] text-white min-h-screen">

<Navbar />

<Hero />

<FeaturedBikes />

</main>
)

}