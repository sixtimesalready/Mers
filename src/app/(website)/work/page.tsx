import { IMAGES } from "@/components/Images";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function OurWork() {
  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">
      <div className="pointer-events-none select-none absolute top-12 -left-20">
        <p className="font-sans font-black text-[180px] sm:text-[280px] lg:text-[400px] bg-gradient-to-r from-[#b9b9b9] to-[#f4f4f4] bg-clip-text text-transparent leading-none whitespace-nowrap">
          The Craft
        </p>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Nav active="Our work" />

        <section className="relative pt-20 lg:pt-28">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="text-right mb-12">
              <h1 className="font-sans font-black text-6xl sm:text-7xl lg:text-8xl leading-none text-black">Our Work</h1>
              <p className="font-sans font-medium text-lg lg:text-2xl text-black mt-3">who we are</p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-8 lg:px-12 pb-20 flex justify-center">
            <img src={IMAGES.UNDER_DEVELOPMENT} alt="Under Development" className="w-full max-w-3xl" />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
