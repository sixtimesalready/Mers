import { IMAGES } from '@/components/Images';
import { FloatingDNA, StaggerChildren, StaggerItem } from '@/components/Animations';
import HeroReveal from '@/components/HeroReveal';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Background MERS Text */}
      <div className="pointer-events-none select-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <p className="font-montserrat font-black text-[200px] sm:text-[400px] lg:text-[600px] text-blue-600/5 leading-none whitespace-nowrap">
          MERS
        </p>
      </div>

      {/* Content wrapper with relative positioning */}
      <div className="relative z-10">

      {/* Navigation */}
      <nav className="relative z-50 py-4">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 flex flex-wrap justify-center lg:flex-nowrap lg:justify-between items-center gap-3">
        {/* Logo */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 shrink-0">
          <img src={IMAGES.MERS_LOGO} alt="MERS" className="object-contain" />
        </div>
        
        {/* Nav links */}
        <div className="flex items-center gap-1 bg-[#FF686B]/40 backdrop-blur-[4px] px-3 lg:px-6 py-2 rounded-full">
          {['Home', 'About us', 'Our work', 'Contact us'].map((item) => (
            <button key={item} className={`px-1.5 sm:px-2 lg:px-3 py-1 font-sans font-semibold text-xs sm:text-sm lg:text-base whitespace-nowrap transition-colors ${
              item === 'Home' 
                ? 'text-red-600 bg-white/50 rounded-full' 
                : 'text-black hover:text-red-500'
            }`}>
              {item}
            </button>
          ))}
        </div>
        
        {/* Get Involved */}
        <button className="flex items-center gap-1.5 bg-[#17FA0B] hover:bg-[#10d008] px-3 sm:px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-sans font-semibold text-xs sm:text-sm lg:text-base text-black whitespace-nowrap shrink-0 transition-colors">
          Get Involved
          <img src={IMAGES.FORWARD_ARROW} alt="" className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
        </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="max-w-3xl relative z-10">
        <HeroReveal>
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-8xl leading-[0.9] text-black">
            Empowerment<br />
            for <span className="text-red-600">Women</span>
          </h1>
          <p className="mt-5 font-montserrat font-medium text-base lg:text-lg text-black max-w-xl leading-relaxed">
            MERS is dedicated to Fighting Period Poverty Globally, by rendering world class experience and accessible technology to every woman.
          </p>

          <div className="flex flex-wrap gap-3 lg:gap-4 mt-8">
            <button className="flex items-center gap-2 bg-[#AE1417] hover:bg-[#8a0f12] px-6 h-12 rounded-full text-white font-montserrat font-medium text-base transition-colors">
              <img src={IMAGES.UNICEF_LOGO} alt="" className="w-6 h-6" />
              Support Our Work
            </button>
            <button className="flex items-center gap-2 bg-[#AE1417] hover:bg-[#8a0f12] px-5 h-12 rounded-full text-white font-montserrat font-medium text-base transition-colors">
              <img src={IMAGES.INFO_ICON} alt="" className="w-6 h-6" />
              Learn More
            </button>
          </div>
        </HeroReveal>
        </div>

        {/* Hero Decorative PLUS */}
        <div className="hidden lg:block absolute right-[2%] top-[12%] w-[45%] max-w-[700px] aspect-square pointer-events-none z-10">
          <img src={IMAGES.GLOSSY_PLUS} alt="" className="w-full h-full object-contain rotate-[-6deg]" />
        </div>

        {/* DNA 3D Icon - top right */}
        <FloatingDNA className="hidden lg:block absolute right-[4%] top-[8%] w-[22%] max-w-[350px] aspect-square pointer-events-none drop-shadow-[-20px_30px_16px_rgba(0,0,0,0.25)] z-20">
          <img src={IMAGES.DNA_3D_ICON} alt="" className="w-full h-full object-contain" />
        </FloatingDNA>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative mt-18 lg:mt-26 text-white overflow-hidden bg-gradient-to-b from-[#bf1c1c] to-[#590d0d]">
        {/* Left gradient overlay - desktop only */}
        <div className="hidden lg:block absolute left-0 top-0 w-1/2 h-full bg-gradient-to-b from-[#e41010] to-[#7e0909] rounded-r-3xl drop-shadow-[30px_0px_30px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="w-full h-full backdrop-blur-[5px]" />
        </div>

        <div className="relative z-10 py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            {/* Left: text content - has overlay bg on mobile */}
            <div className="lg:w-1/2 bg-gradient-to-b from-[#e41010] to-[#7e0909] lg:bg-none rounded-b-3xl lg:rounded-none drop-shadow-[0px_20px_20px_rgba(0,0,0,0.35)] lg:drop-shadow-none -mx-8 px-8 lg:mx-0 lg:px-0 pt-8 pb-8 lg:pt-0 lg:pb-0">
              <h2 className="font-sans font-black text-4xl lg:text-6xl uppercase text-white">THE PROBLEM.</h2>
              <p className="mt-5 font-sans font-medium text-sm lg:text-base leading-relaxed text-justify text-white">
                Menstruation is a normal bodily function, but for hundreds of millions of people in the world, menstruation poses serious economic hardship, health risks, and deep social exclusion. Period poverty refers to the lack of ability to obtain menstrual hygiene products and facilities along with adequate reproductive health information. This problem is widespread around the globe, violating the basic human rights of health, dignity, and education. The effects of this global crisis are felt more severely by people belonging to low-income families and marginalized populations, conflict-ridden regions, and rural parts of all continents. Around 500 million people do not have sufficient resources to handle their menstruation hygienically and respectfully. People suffering from period poverty range from school-going children in underdeveloped countries to communities in developed nations receiving financial assistance from the society. The reasons behind period poverty are interrelated with three major systemic flaws: economic inequalities, infrastructural gaps, and stigma within society.
              </p>
            </div>

            {/* Right: stats with spotlight separator */}
            <div className="lg:w-1/2 relative grid grid-cols-2 gap-4 lg:gap-8 items-center">
              {/* Spotlight Separator - absolute centered */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 sm:w-24 lg:w-52 h-[85%] flex items-center overflow-hidden pointer-events-none">
                <img src={IMAGES.SPOTLIGHT} alt="" className="w-full h-full object-contain -rotate-90" />
              </div>

              {/* 500M Column */}
              <div className="text-center">
                <img src={IMAGES.EARTH_PLANET} alt="" className="w-10 h-14 lg:w-18 lg:h-18 mx-auto mb-1" />
                <p className="font-sans font-extrabold text-5xl lg:text-7xl text-white">500M</p>
                <p className="font-sans font-semibold text-lg lg:text-xl text-white mt-1">People Globally</p>
                <p className="mt-5 lg:mt-8 font-sans font-medium text-sm lg:text-base text-white max-w-[240px] mx-auto">
                  Lack basic resources to safely manage their menstrual health.
                </p>
              </div>

              {/* 20% Column */}
              <div className="text-center">
                <img src={IMAGES.BOOK_AND_PENCIL} alt="" className="w-10 h-14 lg:w-14 lg:h-18 mx-auto mb-1" />
                <p className="font-sans font-extrabold text-5xl lg:text-7xl text-white">20%</p>
                <p className="font-sans font-semibold text-lg lg:text-xl text-white mt-1">School year lost</p>
                <p className="mt-5 lg:mt-8 font-sans font-medium text-sm lg:text-base text-white max-w-[240px] mx-auto">
                  Missed by students in heavily impacted regions due to lack of safe facilities.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
<section className="relative py-10 lg:py-12 overflow-hidden">
  <div className="max-w-7xl mx-auto px-8 lg:px-12">
    {/* Mission */}
    <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 mb-8 lg:mb-10">
      <div className="w-full lg:w-1/2 aspect-[4/3] md:aspect-auto md:h-[300px] bg-gradient-to-b from-[#99001f] to-[#f03] to-[69.21%] flex items-end justify-start p-6 lg:p-8 shrink-0 rounded-2xl overflow-hidden">
        <h2 className="font-instrument italic text-4xl lg:text-6xl text-white leading-[0.9] tracking-[-0.04em] text-left">
          Our<br />Mission
        </h2>
      </div>
      <div className="w-full lg:w-1/2 font-sans font-normal text-sm lg:text-base leading-relaxed text-[#171717] px-4 lg:px-0">
        <p>
          In order to effectively break down the barriers of period poverty and give women and girls back their basic dignity around the world by ensuring that sanitary product distribution is well-organized. This will be achieved through public health awareness, global and local company collaboration, and high-tech accountability systems in order to ensure health in menstrual hygiene, boost self-confidence and empower underprivileged communities around the world.
        </p>
      </div>
    </div>

    {/* Vision */}
    <div className="flex flex-col lg:flex-row-reverse items-center gap-6 lg:gap-8 mt-8 lg:mt-10">
      <div className="w-full lg:w-1/2 aspect-[4/3] md:aspect-auto md:h-[300px] bg-gradient-to-b from-[#a02] to-[#44000e] flex items-end justify-end p-6 lg:p-8 shrink-0 rounded-2xl overflow-hidden">
        <h2 className="font-instrument italic text-4xl lg:text-6xl text-white leading-[0.9] tracking-[-0.04em] text-right">
          Our<br />Vision
        </h2>
      </div>
      <div className="w-full lg:w-1/2 font-sans font-normal text-sm lg:text-base leading-relaxed text-[#171717] px-4 lg:px-0">
        <p>
          A world completely redefined by menstrual equity, where access to essential sanitary care is recognized as an absolute human right rather than a privilege. We envision a future where no woman, girl, or menstruating individual is marginalized, held back, or socially or educational disadvantaged due to a natural biological function, ensuring that dignity, opportunity, and care are universally accessible across every border and community.
        </p>
      </div>
    </div>
  </div>

  {/* Decorative dotted lines */}
  <div className="hidden xl:block absolute right-25 top-10 w-[400px] h-[400px] pointer-events-none" aria-hidden="true">
    <img src={IMAGES.CURVED_DOTTED_LINE} alt="" className="w-full h-full object-contain" />
  </div>
  <div className="hidden xl:block absolute left-20 bottom-10 w-[400px] h-[400px] rotate-180 pointer-events-none" aria-hidden="true">
    <img src={IMAGES.CURVED_DOTTED_LINE} alt="" className="w-full h-full object-contain" />
  </div>
</section>

      {/* What We Do */}
      <section className="mt-24 lg:mt-32 relative px-6 lg:px-12 text-[#171717]">
         {/* Dotted circle bg decoration */}
         <div className="absolute right-12 bottom-0 w-48 lg:w-[331px] h-48 lg:h-[331px] pointer-events-none opacity-50" aria-hidden="true">
            <img src={IMAGES.DOTTED_CIRCLE_BG} alt="" className="w-full h-full object-contain" />
         </div>
         <h2 className="text-center font-sans font-semibold text-4xl md:text-6xl leading-normal uppercase mb-12 lg:mb-16">
            WHAT WE <span className="font-black">DO</span>
         </h2>

         <StaggerChildren className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Card 1 - Free Sanitary Products (image left, text right) */}
           <StaggerItem className="bg-[#f5f5f5] rounded-2xl shadow-[inset_-27px_12px_39px_rgba(0,0,0,0.09)] overflow-hidden flex min-h-[260px] lg:min-h-[360px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-2/5 shrink-0">
                 <img src={IMAGES.FREE_SAN} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 lg:p-6 flex flex-col justify-center">
                 <p className="font-black font-sans text-4xl lg:text-5xl leading-none">Free</p>
                 <p className="font-black font-sans text-sm lg:text-base leading-tight uppercase mt-1">Sanitary Products</p>
                 <p className="font-medium font-sans text-xs lg:text-sm leading-relaxed mt-3">
                    We distribute free pads to underserved communities through organised relief events.
                 </p>
                 <button className="mt-4 flex items-center gap-2 bg-black hover:bg-gray-800 px-5 py-2.5 rounded-lg w-fit transition-colors">
                    <span className="font-medium font-sans text-sm text-white">know more</span>
                    <img src={IMAGES.FORWARD_ARROW_WHITE} alt="" className="w-3 h-6 object-contain" />
                 </button>
              </div>
           </StaggerItem>

           {/* Card 2 - Menstrual Health Education (image left, text right) */}
           <StaggerItem className="bg-[#f5f5f5] rounded-2xl shadow-[inset_-27px_12px_39px_rgba(0,0,0,0.09)] overflow-hidden flex min-h-[260px] lg:min-h-[360px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="w-2/5 shrink-0">
                 <img src={IMAGES.FREE_EDU} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-5 lg:p-6 flex flex-col justify-center">
                 <p className="font-black font-sans text-2xl lg:text-3xl leading-none uppercase">Menstrual</p>
                 <p className="font-black font-sans text-base lg:text-lg leading-tight uppercase mt-1">Health Education</p>
                 <p className="font-medium font-sans text-xs lg:text-sm leading-relaxed mt-3">
                    We lead school talks, community discussions, and awareness workshops to break stigma.
                 </p>
                 <button className="mt-4 flex items-center gap-2 bg-black hover:bg-gray-800 px-5 py-2.5 rounded-lg w-fit transition-colors">
                    <span className="font-medium font-sans text-sm text-white">know more</span>
                    <img src={IMAGES.FORWARD_ARROW_WHITE} alt="" className="w-3 h-6 object-contain" />
                 </button>
              </div>
           </StaggerItem>

           {/* Card 3 - Community Relief Station (text left, image right - opposite) */}
           <StaggerItem className="bg-[#f5f5f5] rounded-2xl shadow-[inset_-27px_12px_39px_rgba(0,0,0,0.09)] overflow-hidden flex min-h-[260px] lg:min-h-[360px] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="p-5 lg:p-6 flex flex-col justify-center w-3/5">
                 <p className="font-black font-sans text-2xl lg:text-3xl leading-tight uppercase">Community</p>
                 <p className="font-black font-sans text-base lg:text-lg leading-tight uppercase mt-1">Relief Station</p>
                 <p className="font-medium font-sans text-xs lg:text-sm leading-relaxed mt-3">
                    We are building accessible distribution points where women and girls can get support.
                 </p>
                 <button className="mt-4 flex items-center gap-2 bg-black hover:bg-gray-800 px-5 py-2.5 rounded-lg w-fit transition-colors">
                    <span className="font-medium font-sans text-sm text-white">know more</span>
                    <img src={IMAGES.FORWARD_ARROW_WHITE} alt="" className="w-3 h-6 object-contain" />
                 </button>
              </div>
              <div className="w-2/5 shrink-0">
                 <img src={IMAGES.FREE_STATION} alt="" className="w-full h-full object-cover scale-x-[-1]" />
              </div>
           </StaggerItem>
         </StaggerChildren>
      </section>

      {/* Pilot Section */}
      <section className="mt-24 lg:mt-32 relative">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
         <div className="flex flex-col xl:flex-row items-start gap-8 lg:gap-12">
           <div className="w-full xl:flex-1">
             <div className="flex flex-wrap items-baseline gap-2">
               <p className="font-instrument italic text-4xl lg:text-5xl text-[#171717]">pilot in</p>
               <p className="font-montserrat font-extrabold text-4xl lg:text-5xl uppercase text-[#171717]">Lagos, NG</p>
             </div>
             <p className="mt-6 font-sans font-normal text-sm lg:text-base leading-relaxed text-justify text-[#171717]">
               The foundational launch of the MeRS Network establishes a highly scalable, digitally verified blueprint for global menstrual equity by deploying its initial operational framework within dense, high-impact urban environments. Rather than relying on static, isolated distribution models, this phase activates a dynamic network of localized nodes by partnering with educational institutions, community hubs, religious centres, and grassroots municipal spaces to ensure immediate, frictionless product access. This strategic deployment serves as the ultimate proving ground for the MeRS digital architecture—stress-testing the end-to-end user application ecosystem, validating real-time inventory and logistics schemas, and perfecting the Pro Dispenser tracking interfaces under rigorous real-world conditions. Concurrently, these operational hubs double as public health command centers, hosting intensive, data-driven menstrual health workshops and educational seminars designed to dismantle deeply entrenched social stigmas, cultivate open community dialogue, and gather critical demographic insights.
             </p>
           </div>
           <div className="relative w-full xl:w-[55%] h-64 md:h-80 lg:h-96 xl:h-[450px] bg-white rounded-2xl shadow-[-19px_52px_74px_-18px_rgba(0,0,0,0.25)] overflow-hidden shrink-0">
              <img src={IMAGES.LAGOS_PILOT} alt="Pilot" className="w-full h-full object-cover" />
           </div>
         </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="relative mt-24 lg:mt-32 px-6 lg:px-12 py-16 w-full bg-gradient-to-b from-[#201a1a] to-[#207a93] text-white overflow-hidden">
         <h2 className="text-center font-instrument text-4xl lg:text-6xl leading-normal uppercase mb-16">
            How It <span className="italic">Works</span>
         </h2>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
           {/* Step 1 */}
           <div className="flex flex-col">
             <p className="text-center font-black font-sans text-xl lg:text-3xl tracking-[-0.02em] uppercase mb-4">Create an Account / Sign in</p>
             <div className="flex-1 min-h-0 mx-auto max-w-[350px] md:max-w-[420px] w-full relative">
               <div className="h-full overflow-hidden rounded-2xl">
                 <img src={IMAGES.SCREENSHOT_SIGNIN} alt="Sign in" className="w-full h-full object-cover" />
               </div>
               <div className="absolute top-36 -translate-y-1/2 -right-[50px] md:-right-[60px] w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full bg-[#3CFF53]" />
                 <span className="relative font-black font-sans text-4xl sm:text-5xl lg:text-7xl tracking-[-0.02em]">1.</span>
               </div>
             </div>
           </div>

           {/* Step 2 */}
           <div className="flex flex-col">
             <p className="text-center font-black font-sans text-xl lg:text-3xl tracking-[-0.02em] uppercase mb-4">Access your Account</p>
             <div className="flex-1 min-h-0 mx-auto max-w-[350px] md:max-w-[420px] w-full relative">
               <div className="h-full overflow-hidden rounded-2xl">
                 <img src={IMAGES.SCREENSHOT_ACCESS} alt="Access" className="w-full h-full object-cover" />
               </div>
               <div className="absolute top-3/4 -translate-y-1/2 -left-[50px] md:-left-[60px] w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full bg-[#3CFF53]" />
                 <span className="relative font-black font-sans text-4xl sm:text-5xl lg:text-7xl tracking-[-0.02em]">2.</span>
               </div>
             </div>
           </div>

           {/* Step 3 */}
           <div className="flex flex-col">
             <p className="text-center font-black font-sans text-xl lg:text-3xl tracking-[-0.02em] uppercase mb-4">Choose your Flow</p>
             <div className="flex-1 min-h-0 mx-auto max-w-[350px] md:max-w-[420px] w-full relative">
               <div className="h-full overflow-hidden rounded-2xl">
                 <img src={IMAGES.SCREENSHOT_FLOW} alt="Flow" className="w-full h-full object-cover" />
               </div>
               <div className="absolute top-36 -translate-y-1/2 -right-[50px] md:-right-[60px] w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full bg-[#3CFF53]" />
                 <span className="relative font-black font-sans text-4xl sm:text-5xl lg:text-7xl tracking-[-0.02em]">3.</span>
               </div>
             </div>
           </div>

           {/* Step 4 */}
           <div className="flex flex-col">
             <p className="text-center font-black font-sans text-xl lg:text-3xl tracking-[-0.02em] uppercase mb-4">Present at collection station</p>
             <div className="flex-1 min-h-0 mx-auto max-w-[350px] md:max-w-[420px] w-full relative">
               <div className="h-full overflow-hidden rounded-2xl">
                 <img src={IMAGES.SCREENSHOT_PRESENT} alt="Present" className="w-full h-full object-cover" />
               </div>
               <div className="absolute top-3/4 -translate-y-1/2 -left-[50px] md:-left-[60px] w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] flex items-center justify-center">
                 <div className="absolute inset-0 rounded-full bg-[#3CFF53]" />
                 <span className="relative font-black font-sans text-4xl sm:text-5xl lg:text-7xl tracking-[-0.02em]">4.</span>
               </div>
             </div>
           </div>
         </div>

         {/* Step 5 */}
         <div className="max-w-[900px] mx-auto mt-16 flex flex-col md:flex-row items-center gap-8">
           <div className="relative w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[120px] md:h-[120px] shrink-0 flex items-center justify-center">
             <div className="absolute inset-0 rounded-full bg-[#3CFF53]" />
             <span className="relative font-black font-sans text-4xl sm:text-5xl lg:text-7xl tracking-[-0.02em]">5.</span>
           </div>
           <div className="w-full h-[120px] md:h-[191px] bg-white rounded-2xl flex items-center justify-center">
             <p className="font-black font-sans text-3xl lg:text-6xl tracking-[-0.02em] text-[#171717] uppercase text-center px-4">Collect and use</p>
           </div>
         </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 lg:mt-32 pb-16 w-full flex justify-center px-6 lg:px-12">
         <div className="relative w-full bg-gradient-to-b from-[#ef3333] to-[#600] rounded-2xl text-white px-6 lg:px-12 py-16 overflow-hidden">
           {/* Footer wave decorations */}
           <div className="absolute left-[-56px] bottom-[-100px] w-[556px] h-[556px] pointer-events-none" aria-hidden="true">
             <img src={IMAGES.FOOTER_WAVE} alt="" className="w-full h-full object-contain" />
           </div>
           <div className="absolute right-[-100px] bottom-[-120px] w-[556px] h-[556px] pointer-events-none" aria-hidden="true">
             <img src={IMAGES.FOOTER_WAVE_2} alt="" className="w-full h-full object-contain" />
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Nav links */}
             <div className="flex flex-col gap-4 md:gap-[31px]">
               {['Home', 'About Us', 'Our Work', 'Contact Us', 'Join Us'].map(item => (
                 <button key={item} className="text-left font-black font-sans text-base lg:text-lg tracking-[-0.02em] hover:text-green-500 transition-colors uppercase">
                   {item}
                 </button>
               ))}
             </div>

             {/* Policy links */}
             <div className="flex flex-col gap-4 md:gap-[31px]">
               <button className="text-left font-black font-sans text-base lg:text-lg tracking-[-0.02em] uppercase hover:text-green-400 transition-colors">Policy</button>
               <button className="text-left font-black font-sans text-base lg:text-lg tracking-[-0.02em] uppercase whitespace-nowrap hover:text-green-400 transition-colors">Terms and Condition</button>
               <div className="mt-8">
                 <button className="bg-white hover:bg-green-300 rounded px-5 py-2.5 transition-colors">
                   <span className="font-black font-sans text-base lg:text-lg tracking-[-0.02em] text-[#00b815] uppercase whitespace-nowrap">Donate now</span>
                 </button>
               </div>
             </div>

             {/* Download App */}
             <div className="flex flex-col items-center md:items-start">
               <p className="font-black font-sans text-base lg:text-lg tracking-[-0.02em] uppercase mb-4">Download App</p>
               <div className="w-[180px] md:w-[224px] h-[180px] md:h-[224px]">
                 <img src={IMAGES.APP_STORES} alt="Stores" className="w-full h-full object-contain" />
               </div>
             </div>
           </div>

           {/* Bottom branding */}
           <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4">
             <p className="font-black font-sans text-5xl lg:text-8xl tracking-[-0.02em] uppercase">MERS</p>
             <p className="font-instrument italic text-2xl lg:text-5xl leading-normal uppercase">For Every Woman</p>
           </div>
         </div>
      </footer>
      </div>
    </main>
  );
}