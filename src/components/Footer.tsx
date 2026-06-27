"use client";

import Link from "next/link";
import { IMAGES } from "./Images";

export default function Footer() {
  return (
    <footer className="mt-auto pt-24 lg:pt-32 pb-0 w-full">
      <div className="absolute left-[-56px] bottom-[-100px] w-[556px] h-[556px] pointer-events-none z-10" aria-hidden="true">
          <img src={IMAGES.FOOTER_WAVE} alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute right-[-100px] bottom-[-120px] w-[556px] h-[556px] pointer-events-none z-10" aria-hidden="true">
          <img src={IMAGES.FOOTER_WAVE_2} alt="" className="w-full h-full object-contain" />
        </div>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
      <div className="relative w-full rounded-t-2xl overflow-hidden">
        {/* Background gradient at z-0 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ef3333] to-[#600] z-0"></div>
        {/* Content at z-20 */}
        <div className="relative z-20 text-white/80 blur-[0.5px] px-6 lg:px-12 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 md:gap-[31px]">
            <Link href="/" className="text-left font-black font-sans text-base lg:text-lg tracking-[-0.02em] hover:text-green-500 transition-colors uppercase">Home</Link>
            <Link href="/about" className="text-left font-black font-sans text-base lg:text-lg tracking-[-0.02em] hover:text-green-500 transition-colors uppercase">About Us</Link>
            <Link href="/work" className="text-left font-black font-sans text-base lg:text-lg tracking-[-0.02em] hover:text-green-500 transition-colors uppercase">Our Work</Link>
            <Link href="/contact" className="text-left font-black font-sans text-base lg:text-lg tracking-[-0.02em] hover:text-green-500 transition-colors uppercase">Contact Us</Link>
            <Link href="/contact" className="text-left font-black font-sans text-base lg:text-lg tracking-[-0.02em] hover:text-green-500 transition-colors uppercase">Join Us</Link>
          </div>

          <div className="flex flex-col gap-4 md:gap-[31px]">
            <button className="text-left font-black font-sans text-base lg:text-lg tracking-[-0.02em] uppercase hover:text-green-400 transition-colors">Policy</button>
            <button className="text-left font-black font-sans text-base lg:text-lg tracking-[-0.02em] uppercase whitespace-nowrap hover:text-green-400 transition-colors">Terms and Condition</button>
            <div className="mt-8">
              <button className="bg-white hover:bg-green-300 rounded px-5 py-2.5 transition-colors">
                <span className="font-black font-sans text-base lg:text-lg tracking-[-0.02em] text-[#00b815] uppercase whitespace-nowrap">Donate now</span>
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <p className="font-black font-sans text-base lg:text-lg tracking-[-0.02em] uppercase mb-4">Download App</p>
            <div className="w-[180px] md:w-[224px] h-[180px] md:h-[224px]">
              <img src={IMAGES.APP_STORES} alt="Stores" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="font-black font-sans text-5xl lg:text-8xl tracking-[-0.02em] uppercase hover:text-green-400 transition-colors">MERS</Link>
          <p className="font-instrument italic text-2xl lg:text-5xl leading-normal uppercase">For Every Woman</p>
        </div>
      </div>
      </div>
      </div>
    </footer>
  );
}
