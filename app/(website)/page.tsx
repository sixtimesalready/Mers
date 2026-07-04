import Image from "next/image"
import Link from "next/link"
import { IMAGES } from "@/components/Images"
import { FloatAnimation } from "@/components/Animations"
import HeroReveal from "@/components/HeroReveal"
import { ChevronRight, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
	const whatWeDo = [
		{
			title: "Free Sanitary Products",
			description: "We distribute free pads to underserved communities through organised relief events.",
			image: IMAGES.FREE_SAN
		},
		{
			title: "Menstrual Health Education",
			description: "We lead school talks, community discussions, and awareness workshops to break stigma.",
			image: IMAGES.FREE_EDU
		},
		{
			title: "Community Relief Station",
			description: "We are building accessible distribution points where women and girls can get support.",
			image: IMAGES.FREE_STATION
		}
	]

	const howItWorksSteps = [
		{
			step: 1,
			title: "Create an Account / Sign in",
			image: IMAGES.SCREENSHOT_SIGNIN
		},
		{
			step: 2,
			title: "Access your Account",
			image: IMAGES.SCREENSHOT_ACCESS
		},
		{
			step: 3,
			title: "Choose your Flow",
			image: IMAGES.SCREENSHOT_FLOW
		},
		{
			step: 4,
			title: "Present at collection station",
			image: IMAGES.SCREENSHOT_PRESENT
		},
		{
			step: 5,
			title: "Collect and use",
			image: IMAGES.SANITARY_PADS
		}
	]

	return (
		<div className="space-y-14 lg:space-y-20">
			{/* Hero Section */}
			<section className="container relative p-10 lg:p-20">
				<HeroReveal className="space-y-6">
					<h1 className="font-bold text-6xl lg:text-8xl">
						Empowerment
						<br />
						for <span className="text-red-600">Women</span>
					</h1>
					<p className="lg:text-lg text-black max-w-xl">
						MERS is dedicated to Fighting Period Poverty Globally, by rendering world class experience and accessible technology to every woman.
					</p>

					<div className="flex flex-wrap gap-3 lg:gap-4">
						<button className="flex items-center gap-2 bg-[#AE1417] hover:bg-[#8a0f12] px-6 h-12 rounded-full text-white font-medium text-base transition-colors">
							<Image src={IMAGES.UNICEF_LOGO} alt="" width={24} height={24} />
							Support Our Work
						</button>
						<button className="flex items-center gap-2 bg-[#AE1417] hover:bg-[#8a0f12] px-5 h-12 rounded-full text-white font-medium text-base transition-colors">
							<Info />
							Learn More
						</button>
					</div>
				</HeroReveal>

				{/* Hero Decorative PLUS */}
				<Image
					src={IMAGES.GLOSSY_PLUS}
					alt=""
					className="-rotate-6 absolute top-14 right-0 hidden lg:block pointer-events-none select-none z-10"
					width={600}
					height={600}
				/>

				{/* DNA 3D Icon - top right */}
				<FloatAnimation className="absolute top-10 right-0 hidden lg:block pointer-events-none select-none z-20">
					<Image src={IMAGES.DNA_3D_ICON} alt="" width={300} height={300} className="hidden lg:block drop-shadow-[-20px_30px_16px_rgba(0,0,0,0.25)]" />
				</FloatAnimation>
			</section>

			{/* The Problem Section */}
			<section className="text-white bg-linear-to-b from-[#bf1c1c] to-[#590d0d] flex flex-col lg:flex-row justify-between py-10 lg:py-0 lg:gap-10 gap-5">
				<div className="space-y-5 px-6 lg:py-32 lg:px-20 flex flex-col flex-1 bg-none lg:bg-linear-to-b from-[#e41010] to-[#7e0909] rounded-none lg:rounded-r-[50] lg:drop-shadow-[0px_20px_20px_rgba(0,0,0,0.35)]">
					<h2 className="font-bold text-4xl lg:text-6xl uppercase">THE PROBLEM.</h2>
					<p className="font-medium text-justify text-sm ">
						Menstruation is a normal bodily function, but for hundreds of millions of people in the world, menstruation poses serious economic hardship, health
						risks, and deep social exclusion. Period poverty refers to the lack of ability to obtain menstrual hygiene products and facilities along with
						adequate reproductive health information. This problem is widespread around the globe, violating the basic human rights of health, dignity, and
						education. The effects of this global crisis are felt more severely by people belonging to low-income families and marginalized populations,
						conflict-ridden regions, and rural parts of all continents. Around 500 million people do not have sufficient resources to handle their menstruation
						hygienically and respectfully. People suffering from period poverty range from school-going children in underdeveloped countries to communities in
						developed nations receiving financial assistance from the society. The reasons behind period poverty are interrelated with three major systemic
						flaws: economic inequalities, infrastructural gaps, and stigma within society.
					</p>

					<Button size="lg" className="bg-white text-black text-lg space-x-3 px-7 rounded-full w-fit self-center mt-8 h-16">
						Read More <ChevronRight />
					</Button>
				</div>

				{/* Right: stats with spotlight separator */}
				<div className="flex gap-10 flex-col lg:flex-row lg:flex-1 justify-between items-center px-10">
					<div className="flex flex-col items-center gap-2 text-center">
						<Image src={IMAGES.EARTH_PLANET} alt="" width={70} height={70} />
						<p className="font-extrabold text-5xl lg:text-7xl">500M</p>
						<p className="font-semibold text-lg lg:text-xl">People Globally</p>
						<p>
							Lack basic resources to safely <br /> manage their menstrual health.
						</p>
					</div>

					<Image src={IMAGES.SPOTLIGHT} alt="" width={80} height={80} className="pointer-events-none hidden lg:block" />

					{/* 20% Column */}
					<div className="flex flex-col items-center gap-2 text-center">
						<Image src={IMAGES.BOOK_AND_PENCIL} alt="" width={70} height={70} />
						<p className="font-extrabold text-5xl lg:text-7xl">20%</p>
						<p className="font-semibold text-lg lg:text-xl mt-1">School year lost</p>
						<p>
							Missed by students in heavily <br /> impacted regions due to lack of <br /> safe facilities.
						</p>
					</div>
				</div>
			</section>

			{/* Mission & Vision */}
			<section className="relative container lg:px-36">
				{/* Mission */}
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="h-80 lg:h-96 bg-linear-to-b from-[#99001F] to-[#FF0033] to-[69.21%] text-white flex items-end justify-start p-12">
						<h2 className="font-instrument italic text-8xl leading-[0.9] tracking-[-0.04em]">
							Our
							<br />
							Mission
						</h2>
					</div>
					<div className="relative flex font-semibold items-center lg:px-24 text-justify py-10 text-sm">
						<p>
							In order to effectively break down the barriers of period poverty and give women and girls back their basic dignity around the world by ensuring
							that sanitary product distribution is well-organized. This will be achieved through public health awareness, global and local company
							collaboration, and high-tech accountability systems in order to ensure health in menstrual hygiene, boost self-confidence and empower
							underprivileged communities around the world.
						</p>
						<Image src={IMAGES.CURVED_DOTTED_LINE} alt="" width={400} height={400} className="hidden lg:block absolute right-0 top-0 pointer-events-none" />
					</div>
				</div>

				{/* Vision */}
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="relative flex order-2 font-semibold lg:order-0 items-center lg:px-24 py-10 text-justify text-sm">
						<p>
							A world completely redefined by menstrual equity, where access to essential sanitary care is recognized as an absolute human right rather than a
							privilege. We envision a future where no woman, girl, or menstruating individual is marginalized, held back, or socially or educational
							disadvantaged due to a natural biological function, ensuring that dignity, opportunity, and care are universally accessible across every border
							and community.
						</p>
						<Image
							src={IMAGES.CURVED_DOTTED_LINE}
							alt=""
							width={400}
							height={400}
							className="hidden lg:block absolute rotate-180 left-0 bottom-0 pointer-events-none"
						/>
					</div>
					<div className="h-80 lg:h-96 bg-linear-to-b from-[#AA0022] to-[#44000E] to-[69.21%] text-white flex items-end justify-end p-12">
						<h2 className="font-instrument italic text-8xl leading-[0.9] tracking-[-0.04em]">
							Our
							<br />
							Vision
						</h2>
					</div>
				</div>
			</section>

			{/* What We Do */}
			<section className="space-y-10">
				<h2 className="text-center font-semibold text-4xl md:text-6xl uppercase">
					WHAT WE <span className="font-black">DO</span>
				</h2>

				<div className="container flex flex-col lg:flex-row items-center justify-between gap-6">
					{whatWeDo.map((item, index) => (
						<div
							key={index}
							className={`lg:min-w-96 overflow-hidden flex ${index == 2 ? "flex-row-reverse" : "flex-row"} bg-[#f5f5f5] rounded-2xl shadow-[inset_-27px_12px_39px_rgba(0,0,0,0.09)] h-90 hover:shadow-lg transition-all duration-300`}>
							<div className="relative w-[45%] h-full">
								<Image src={item.image} alt="" fill className={`object-cover ${index === 2 ? "object-left" : "object-center"}`} />
							</div>

							<div className="flex w-[55%] flex-col gap-4 h-full justify-center lg:p-8 text-left">
								<p className="text-3xl lg:text-4xl font-semibold leading-none">{item.title}</p>
								<p>{item.description}</p>
								<Button asChild size={"lg"} className="flex items-center gap-2 h-13 bg-black hover:bg-gray-800 px-5 py-2.5 rounded-none w-fit">
									<Link href="/about">
										know more
										<ChevronRight />
									</Link>
								</Button>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* Pilot Section */}
			<section className="mt-24 lg:mt-32 relative">
				<div className="container flex flex-col lg:flex-row gap-12 justify-between items-center">
					<div className="flex-1">
						<div className="flex flex-wrap items-baseline gap-2">
							<p className="font-instrument italic text-4xl lg:text-5xl text-[#171717]">pilot in</p>
							<p className="font-extrabold text-4xl lg:text-5xl uppercase text-[#171717]">Lagos, NG</p>
						</div>
						<p className="mt-6 font-normal text-sm leading-relaxed text-justify text-[#171717]">
							The foundational launch of the MeRS Network establishes a highly scalable, digitally verified blueprint for global menstrual equity by deploying
							its initial operational framework within dense, high-impact urban environments. Rather than relying on static, isolated distribution models, this
							phase activates a dynamic network of localized nodes by partnering with educational institutions, community hubs, religious centres, and
							grassroots municipal spaces to ensure immediate, frictionless product access. This strategic deployment serves as the ultimate proving ground for
							the MeRS digital architecture—stress-testing the end-to-end user application ecosystem, validating real-time inventory and logistics schemas, and
							perfecting the Pro Dispenser tracking interfaces under rigorous real-world conditions. Concurrently, these operational hubs double as public
							health command centers, hosting intensive, data-driven menstrual health workshops and educational seminars designed to dismantle deeply entrenched
							social stigmas, cultivate open community dialogue, and gather critical demographic insights.
						</p>
					</div>

					<div className="relative hidden lg:block flex-1 h-96 rounded-xl">
						<Image src={IMAGES.LAGOS_PILOT} alt="Pilot" fill className="rounded-xl" />
						<div className="absolute -top-20 -left-14 -z-10">
							<Image src={IMAGES.DOTTED_CIRCLE_BG} alt="" width={250} height={250} />
						</div>
					</div>
				</div>
			</section>

			{/* How it Works */}
			<section className="bg-linear-to-b from-[#201a1a] to-[#207a93] text-white lg:py-10">
				<div className="container space-y-14">
					<h2 className="text-center font-instrument text-4xl lg:text-6xl leading-normal capitalize">
						How It <span className="italic">Works</span>
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 lg:px-20">
						{howItWorksSteps.slice(0, 4).map((step) => (
							<div key={step.step} className="relative flex flex-col items-center space-y-4">
								<p className="text-center font-bold text-xl lg:text-2xl">{step.title}</p>
								<Image src={step.image} alt={step.title} width={514} height={400} className="w-full" />
								<div
									className={`absolute size-30 font-bold text-5xl flex items-center justify-center rounded-full bg-[#3CFF53]
									${step.step % 2 === 0 ? "bottom-40 -left-16" : "top-40 -right-16"}
									`}>
									{step.step}.
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	)
}
