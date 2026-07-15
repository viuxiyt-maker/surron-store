"use client";

import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Home",
    "Bikes",
    "Parts",
    "Accessories",
    "Gallery",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
      ${
        scrolled
          ? "bg-black/80 backdrop-blur-2xl shadow-lg shadow-purple-500/10 border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-black tracking-widest"
        >
          <span className="text-white">
            SURRON
          </span>

          <span className="text-purple-500 drop-shadow-[0_0_20px_#8b5cf6]">
            ZONE
          </span>
        </a>

        {/* Desktop */}

        <div className="hidden lg:flex gap-10">

          {links.map((item) => (

            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-white font-medium hover:text-purple-400 transition
              after:absolute after:left-0 after:-bottom-1 after:h-[2px]
              after:w-0 after:bg-purple-500 after:transition-all
              hover:after:w-full"
            >
              {item}
            </a>

          ))}

        </div>

        {/* Right */}

        <div className="hidden md:flex items-center gap-5">

          <button className="text-white hover:text-purple-400 transition">
            <Search />
          </button>

          <button className="text-white hover:text-purple-400 transition">
            <User />
          </button>

          <button className="relative text-white hover:text-purple-400 transition">

            <ShoppingCart />

            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-purple-600 text-xs flex items-center justify-center">
              0
            </span>

          </button>

          <button className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-500 transition font-semibold">
            Shop Now
          </button>

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

          {links.map((item) => (

            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block px-8 py-5 text-white hover:bg-purple-600/20"
            >
              {item}
            </a>

          ))}

        </div>

      )}

    </nav>
  );
}