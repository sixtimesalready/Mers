import { IMAGES } from "@/components/Images";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import TeamMemberCard from "@/components/TeamMemberCard";
import FAQAccordion from "@/components/FAQAccordion";

export default function AboutUs() {
  const teamMembers = [
    { name: "Ayomide Dashur", role: "Co-Founder" },
    { name: "Adewuyi Adeleye", role: "Co-Founder/Design Lead" },
    { name: "Ifeoluwa Akinleye", role: "Project Manager" },
    { name: "Izevbizua Samuel", role: "Developer" },
    { name: "Tithe Odeyemi", role: "Developer" },
    { name: "Oluwatomisin Olajide", role: "Designer" },
  ];

  const teamImages = [
    IMAGES.TEAM_DASHUR,
    IMAGES.TEAM_ADELEYE,
    IMAGES.TEAM_AKINLEYE,
    IMAGES.TEAM_SAMUEL,
    IMAGES.TEAM_ODEYEMI,
    IMAGES.TEAM_OLAJIDE,
  ];

  return (
    <main className="min-h-screen bg-white text-black overflow-hidden">
      <div className="pointer-events-none select-none absolute top-12 -left-20">
        <p className="font-sans font-black text-[180px] sm:text-[280px] lg:text-[400px] bg-gradient-to-r from-[#b9b9b9] to-[#f4f4f4] bg-clip-text text-transparent leading-none whitespace-nowrap">
          Origin
        </p>
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Nav active="About us" />

        {/* Part 1: Hero */}
        <section className="relative pt-20 lg:pt-28">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="text-right mb-12">
              <h1 className="font-sans font-black text-6xl sm:text-7xl lg:text-8xl leading-none text-black">About Us</h1>
              <p className="font-sans font-medium text-lg lg:text-2xl text-black mt-3">From a dream to Action.</p>
            </div>
          </div>
          <div className="bg-black text-white">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-[55%] p-8 lg:p-12 lg:pl-[max(8.33%,2rem)]">
                <p className="font-sans font-medium text-sm lg:text-lg leading-relaxed text-justify">
                  To systematically dismantle the barriers of period poverty and restore fundamental dignity to women and girls worldwide through the orchestration of seamless, community-anchored sanitary product distribution networks. By combining targeted public health education, strategic global and localized corporate partnerships, and cutting-edge, technology-driven accountability platforms, we establish enduring, perpetual support frameworks that safeguard menstrual hygiene health, elevate individual confidence, and systematically empower underserved communities globally across generations.
                </p>
                <p className="font-sans font-medium text-sm lg:text-lg leading-relaxed text-justify mt-6">
                  A world completely redefined by menstrual equity, where access to essential sanitary care is recognized as an absolute human right rather than a privilege. We envision a permanent future where no woman, girl, or menstruating individual is marginalized, held back, or socially or educationally disadvantaged due to a natural biological function, ensuring that dignity, opportunity, and care remain universally and unalterably accessible across every border and community.
                </p>
              </div>
              <div className="w-full lg:w-[45%]">
                <img src={IMAGES.ABOUT_ISTOCK} alt="" className="w-full h-full object-cover min-h-[300px] lg:min-h-full" />
              </div>
            </div>
          </div>
        </section>

        {/* Part 2: FlowGirl + Quote */}
        <section>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2">
              <img src={IMAGES.FLOWGIRL} alt="" className="w-full" />
            </div>
            <div className="w-full lg:w-1/2 p-8 lg:p-12 lg:pr-[max(8.33%,2rem)] flex flex-col justify-center items-center text-center">
              <blockquote className="font-instrument text-3xl lg:text-5xl leading-[0.9] text-black max-w-xl">
                It&apos;s not the load that breaks you down, it&apos;s the{" "}
                <span className="italic">way you carry it</span>
              </blockquote>
              <p className="font-instrument text-xl lg:text-3xl text-black mt-4">
                ~ Maya Angelou
              </p>
            </div>
          </div>
        </section>

        {/* Part 3: Text + Time Africa with Sanitary Pads overlaid */}
        <section className="relative py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
              <div className="w-full lg:w-[55%]">
                <p className="font-sans font-medium text-sm lg:text-lg leading-relaxed text-justify text-black">
                  Unlike transient charitable campaigns or short-term relief drives, the MeRS Network is engineered for perpetual continuity. We view menstrual equity not as a temporary milestone, but as a permanent pillars of basic human rights. To support this, our digital ecosystem and physical distribution hubs are built as self-sustaining, long-term civic infrastructure. We are dedicated to maintaining, scaling, and evolving this network as a permanent global fixture—ensuring an unbroken, generation-spanning supply chain of dignity, health, and care.
                </p>
                <p className="font-sans font-medium text-sm lg:text-lg leading-relaxed text-justify text-black mt-6">
                  Recognizing that localized, short-term handouts could never fix a structural flaw, the founders combined their expertise to engineer a self-sustaining ecosystem. They developed a methodology that infuses rigorous public health safeguards directly into a secure, decentralized digital platform. The result is MeRS: a permanent, network-driven model that replaces opaque distribution channels with verifiable, automated, and dignified access loops.
                </p>
              </div>

              <div className="w-full lg:w-[45%] flex flex-col">
              {/* Top Image - narrower and shifted right */}
                <div className="w-[95%] ml-[35%] shadow-[9px_-27px_31px_rgba(0,0,0,0.25)] h-48 lg:h-80">
                 <img src={IMAGES.SANITARY_PADS} alt="" className="w-full h-full object-cover" />
                </div>

                {/* Bottom Image - wider, flush left, overlapping upwards */}
                <div className="w-[95%] ml-0 -mt-12 lg:-mt-20 shadow-[9px_-27px_31px_rgba(0,0,0,0.25)]">
                  <img src={IMAGES.TIME_AFRICA} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Part 4: THE TEAM */}
        <section className="py-16 lg:py-0">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <h2 className="text-center font-sans font-black text-4xl lg:text-6xl uppercase text-black mb-12 lg:mb-16">THE TEAM</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6">
              {teamMembers.slice(0, 4).map((member, i) => (
                <TeamMemberCard key={member.name} name={member.name} role={member.role} image={teamImages[i]} delay={i * 0.1} />
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-xl mx-auto">
              {teamMembers.slice(4, 6).map((member, i) => (
                <TeamMemberCard key={member.name} name={member.name} role={member.role} image={teamImages[i + 4]} delay={0.3 + i * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Part 5: FAQ */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-8 lg:px-12">
            <h2 className="text-center font-sans font-bold text-4xl lg:text-5xl uppercase text-black mb-12">MERS FAQS</h2>
            <FAQAccordion />
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}
