"use client";

import Link from "next/link";
import { IMAGES } from "./Images";

interface NavProps {
  active?: string;
}

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Our work", href: "/work" },
  { label: "Contact us", href: "/contact" },
];

export default function Nav({ active = "Home" }: NavProps) {
  return (
    <nav className="relative z-50 py-4">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-wrap justify-center lg:flex-nowrap lg:justify-between items-center gap-3">
        <Link href="/" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 shrink-0">
          <img src={IMAGES.MERS_LOGO} alt="MERS" className="object-contain" />
        </Link>

        <div className="flex items-center gap-1 bg-[#FF686B]/40 backdrop-blur-[4px] px-3 lg:px-6 py-2 rounded-full">
          {navLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={`px-1.5 sm:px-2 lg:px-3 py-1 font-sans font-semibold text-xs sm:text-sm lg:text-base whitespace-nowrap transition-colors ${
                label === active
                  ? "text-red-600 bg-white/50 rounded-full"
                  : "text-black hover:text-red-500"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="flex items-center gap-1.5 bg-[#17FA0B] hover:bg-[#10d008] px-3 sm:px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-sans font-semibold text-xs sm:text-sm lg:text-base text-black whitespace-nowrap shrink-0 transition-colors"
        >
          Get Involved
          <img src={IMAGES.FORWARD_ARROW} alt="" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
        </Link>
      </div>
    </nav>
  );
}
