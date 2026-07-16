"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

const links = [
  { name: "Home", href: "/" },
  { name: "Bikes", href: "/bikes" },
  { name: "Parts", href: "/parts" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/#contact" },
];

  const bikes = useMemo(
    () => [
      {
        name: "Light Bee",
        href: "/bikes/light-bee",
      },
      {
        name: "Hyper Bee",
        href: "/bikes/hyper-bee",
      },
      {
        name: "Ultra Bee",
        href: "/bikes/ultra-bee",
      },
    ],
    []
  );

  const filteredBikes =
    search.trim() === ""
      ? []
      : bikes.filter((bike) =>
          bike.name
            .toLowerCase()
            .includes(search.toLowerCase())
        );

  const handleSearch = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (filteredBikes.length > 0) {
      router.push(filteredBikes[0].href);
      setSearch("");
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl shadow-lg shadow-purple-500/10 border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
                {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-black tracking-widest"
        >
          <span className="text-white">
            SURRON
          </span>

          <span className="text-purple-500 drop-shadow-[0_0_20px_#8b5cf6]">
            ZONE
          </span>
        </Link>

        {/* Desktop */}

        <div className="hidden lg:flex items-center gap-10">

          {links.map((item) => (

            <Link
              key={item.name}
              href={item.href}
              className="relative text-white font-medium hover:text-purple-400 transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-purple-500 after:transition-all
              hover:after:w-full"
            >
              {item.name}
            </Link>

          ))}

        </div>

        {/* Right */}

        <div className="hidden md:flex items-center gap-5">

          <div className="relative">

            <form onSubmit={handleSearch}>

              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search bikes..."
                className="w-56 rounded-full bg-white/10 border border-purple-500/20
                pl-10 pr-4 py-2 text-white placeholder:text-gray-400
                outline-none focus:border-purple-500 transition"
              />

            </form>

            {filteredBikes.length > 0 && (

              <div className="absolute top-12 left-0 w-full rounded-2xl overflow-hidden
              bg-[#0b0b0f] border border-purple-500/20 shadow-2xl">

                {filteredBikes.map((bike) => (

                  <button
                    key={bike.name}
                    onClick={() => {
                      router.push(bike.href);
                      setSearch("");
                    }}
                    className="w-full text-left px-4 py-3 text-white
                    hover:bg-purple-600/20 transition"
                  >
                    {bike.name}
                  </button>

                ))}

              </div>

            )}

          </div>

          <button className="text-white hover:text-purple-400 transition">
            <User />
          </button>

          <button className="relative text-white hover:text-purple-400 transition">

            <ShoppingCart />

            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-purple-600 text-xs flex items-center justify-center">
              0
            </span>

          </button>

          <Link
            href="/bikes/light-bee"
            className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition font-semibold"
          >
            Shop Now
          </Link>

        </div>

        {/* Mobile */}

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>
            {open && (

        <div className="lg:hidden bg-[#08080b] border-t border-purple-500/20">

          <div className="flex flex-col">

            {links.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-8 py-5 text-white hover:bg-purple-600/20 transition"
              >
                {item.name}
              </Link>

            ))}

            <div className="px-6 py-5 border-t border-purple-500/20">

              <form
                onSubmit={(e) => {
                  handleSearch(e);
                  setOpen(false);
                }}
                className="relative"
              >
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search bikes..."
                  className="w-full rounded-full bg-white/10 border border-purple-500/20
                  pl-10 pr-4 py-3 text-white placeholder:text-gray-400
                  outline-none focus:border-purple-500"
                />
              </form>

              {filteredBikes.length > 0 && (
                <div className="mt-3 rounded-xl overflow-hidden border border-purple-500/20">

                  {filteredBikes.map((bike) => (

                    <button
                      key={bike.name}
                      onClick={() => {
                        router.push(bike.href);
                        setSearch("");
                        setOpen(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-white hover:bg-purple-600/20 transition"
                    >
                      {bike.name}
                    </button>

                  ))}

                </div>
              )}

              <Link
                href="/bikes/light-bee"
                onClick={() => setOpen(false)}
                className="mt-5 block w-full text-center rounded-full bg-purple-600 py-3 font-semibold hover:bg-purple-500 transition"
              >
                Shop Now
              </Link>

            </div>

          </div>

        </div>

      )}

    </nav>
  );
}