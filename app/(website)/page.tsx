import Image from 'next/image'
import Link from 'next/link'
import { IMAGES } from '@/components/Images'
import { FloatAnimation, HeroReveal } from '@/components/Animations'
import { ChevronRight, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
	const whatWeDo = [
		{
			title: 'Free Sanitary Products',
			description: 'We distribute free pads to underserved communities through organised relief events.',
			image: IMAGES.FREE_SAN
		},
		{
			title: 'Menstrual Health Education',
			description: 'We lead school talks, community discussions, and awareness workshops to break stigma.',
			image: IMAGES.FREE_EDU
		},
		{
			title: 'Community Relief Station',
			description: 'We are building accessible distribution points where women and girls can get support.',
			image: IMAGES.FREE_STATION
		}
	]

	const howItWorksSteps = [
		{
			step: 1,
			title: 'Create an Account / Sign in',
			image: IMAGES.SCREENSHOT_SIGNIN
		},
		{
			step: 2,
			title: 'Access your Account',
			image: IMAGES.SCREENSHOT_ACCESS
		},
		{
			step: 3,
			title: 'Choose your Flow',
			image: IMAGES.SCREENSHOT_FLOW
		},
		{
			step: 4,
			title: 'Present at collection station',
			image: IMAGES.SCREENSHOT_PRESENT
		},
		{
			step: 5,
			title: 'Collect and use',
			image: ''
		}
	]

	return (
		<div className="space-y-14 lg:space-y-20">
			{/* Hero Section */}
			<section className="relative container p-10 lg:p-20">
				<HeroReveal className="space-y-6">
					<h1 className="text-6xl font-bold lg:text-8xl">
						Empowerment
						<br />
						for <span className="text-red-600">Women</span>
					</h1>
					<p className="max-w-xl text-black lg:text-lg">
						MERS is dedicated to Fighting Period Poverty Globally, by rendering world class experience and accessible technology to every woman.
					</p>

					<div className="flex flex-wrap gap-3 lg:gap-4">
						<button className="flex h-12 items-center gap-2 rounded-full bg-[#AE1417] px-6 text-base font-medium text-white transition-colors hover:bg-[#8a0f12]">
							<Image src={IMAGES.UNICEF_LOGO} alt="" width={24} height={24} />
							Support Our Work
						</button>
						<button className="flex h-12 items-center gap-2 rounded-full bg-[#AE1417] px-5 text-base font-medium text-white transition-colors hover:bg-[#8a0f12]">
							<Info />
							Learn More
						</button>
					</div>
				</HeroReveal>

				{/* Hero Decorative PLUS */}
				<Image
					src={IMAGES.GLOSSY_PLUS}
					alt=""
					className="pointer-events-none absolute top-14 right-0 z-10 hidden -rotate-6 select-none lg:block"
					width={600}
					height={600}
				/>

				{/* DNA 3D Icon - top right */}
				<FloatAnimation className="pointer-events-none absolute top-10 right-0 z-20 hidden select-none lg:block">
					<Image
						src={IMAGES.DNA_3D_ICON}
						alt=""
						width={300}
						height={300}
						className="hidden drop-shadow-[-20px_30px_16px_rgba(0,0,0,0.25)] lg:block"
					/>
				</FloatAnimation>
			</section>

			{/* The Problem Section */}
			<section className="flex flex-col justify-between gap-5 bg-linear-to-b from-[#bf1c1c] to-[#590d0d] py-10 text-white lg:flex-row lg:gap-10 lg:py-0">
				<div className="flex flex-1 flex-col space-y-3 rounded-none bg-none from-[#e41010] to-[#7e0909] px-6 lg:rounded-r-[50] lg:bg-linear-to-b lg:px-20 lg:py-32 lg:drop-shadow-[0px_20px_20px_rgba(0,0,0,0.35)]">
					<h2 className="text-4xl font-bold uppercase lg:text-6xl">THE PROBLEM.</h2>
					<p className="text-justify text-sm leading-relaxed font-medium lg:text-base">
						Menstruation is a normal bodily function, but for hundreds of millions of people in the world, menstruation poses serious economic
						hardship, health risks, and deep social exclusion. Period poverty refers to the lack of ability to obtain menstrual hygiene products and
						facilities along with adequate reproductive health information. This problem is widespread around the globe, violating the basic human
						rights of health, dignity, and education. The effects of this global crisis are felt more severely by people belonging to low-income
						families and marginalized populations, conflict-ridden regions, and rural parts of all continents. Around 500 million people do not have
						sufficient resources to handle their menstruation hygienically and respectfully. People suffering from period poverty range from
						school-going children in underdeveloped countries to communities in developed nations receiving financial assistance from the society. The
						reasons behind period poverty are interrelated with three major systemic flaws: economic inequalities, infrastructural gaps, and stigma
						within society.
					</p>

					<Button size="lg" className="mt-8 h-16 w-fit space-x-3 self-center rounded-full bg-white px-7 text-lg text-black">
						Read More <ChevronRight />
					</Button>
				</div>

				{/* Right: stats with spotlight separator */}
				<div className="flex flex-col items-center justify-between gap-10 px-10 lg:flex-1 lg:flex-row">
					<div className="flex flex-col items-center gap-2 text-center">
						<Image src={IMAGES.EARTH_PLANET} alt="" width={70} height={70} />
						<p className="text-5xl font-extrabold lg:text-7xl">500M</p>
						<p className="text-lg font-semibold lg:text-xl">People Globally</p>
						<p>
							Lack basic resources to safely <br /> manage their menstrual health.
						</p>
					</div>

					<Image src={IMAGES.SPOTLIGHT} alt="" width={80} height={80} className="pointer-events-none hidden lg:block" />

					{/* 20% Column */}
					<div className="flex flex-col items-center gap-2 text-center">
						<Image src={IMAGES.BOOK_AND_PENCIL} alt="" width={70} height={70} />
						<p className="text-5xl font-extrabold lg:text-7xl">20%</p>
						<p className="mt-1 text-lg font-semibold lg:text-xl">School year lost</p>
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
					<div className="flex h-80 items-end justify-start bg-linear-to-b from-[#99001F] to-[#FF0033] to-[69.21%] p-12 text-white lg:h-96">
						<h2 className="font-instrument text-8xl leading-[0.9] tracking-[-0.04em] italic">
							Our
							<br />
							Mission
						</h2>
					</div>
					<div className="relative flex items-center py-10 text-justify text-sm font-semibold lg:px-24">
						<p>
							In order to effectively break down the barriers of period poverty and give women and girls back their basic dignity around the world by
							ensuring that sanitary product distribution is well-organized. This will be achieved through public health awareness, global and local
							company collaboration, and high-tech accountability systems in order to ensure health in menstrual hygiene, boost self-confidence and
							empower underprivileged communities around the world.
						</p>
						<Image
							src={IMAGES.CURVED_DOTTED_LINE}
							alt=""
							width={400}
							height={400}
							className="pointer-events-none absolute top-0 right-0 hidden lg:block"
						/>
					</div>
				</div>

				{/* Vision */}
				<div className="grid grid-cols-1 lg:grid-cols-2">
					<div className="relative order-2 flex items-center py-10 text-justify text-sm font-semibold lg:order-0 lg:px-24">
						<p>
							A world completely redefined by menstrual equity, where access to essential sanitary care is recognized as an absolute human right
							rather than a privilege. We envision a future where no woman, girl, or menstruating individual is marginalized, held back, or socially
							or educational disadvantaged due to a natural biological function, ensuring that dignity, opportunity, and care are universally
							accessible across every border and community.
						</p>
						<Image
							src={IMAGES.CURVED_DOTTED_LINE}
							alt=""
							width={400}
							height={400}
							className="pointer-events-none absolute bottom-0 left-0 hidden rotate-180 lg:block"
						/>
					</div>
					<div className="flex h-80 items-end justify-end bg-linear-to-b from-[#AA0022] to-[#44000E] to-[69.21%] p-12 text-white lg:h-96">
						<h2 className="font-instrument text-8xl leading-[0.9] tracking-[-0.04em] italic">
							Our
							<br />
							Vision
						</h2>
					</div>
				</div>
			</section>

			{/* What We Do */}
			<section className="space-y-10">
				<h2 className="text-center text-4xl font-semibold uppercase md:text-6xl">
					WHAT WE <span className="font-black">DO</span>
				</h2>

				<div className="container flex flex-col items-center justify-between gap-6 lg:flex-row">
					{whatWeDo.map((item, index) => (
						<div
							key={index}
							className={`flex overflow-hidden lg:min-w-96 ${index == 2 ? 'flex-row-reverse' : 'flex-row'} h-90 rounded-2xl bg-[#f5f5f5] shadow-[inset_-27px_12px_39px_rgba(0,0,0,0.09)] transition-all duration-300 hover:shadow-lg`}
						>
							<div className="relative h-full w-[45%]">
								<Image src={item.image} alt="" fill className={`object-cover ${index === 2 ? 'object-left' : 'object-center'}`} />
							</div>

							<div className="flex h-full w-[55%] flex-col justify-center gap-4 text-left lg:p-8">
								<p className="text-3xl leading-none font-semibold lg:text-4xl">{item.title}</p>
								<p>{item.description}</p>
								<Button asChild size={'lg'} className="flex h-13 w-fit items-center gap-2 rounded-none bg-black px-5 py-2.5 hover:bg-gray-800">
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
			<section className="relative mt-24 lg:mt-32">
				<div className="container flex flex-col items-center justify-between gap-12 lg:flex-row">
					<div className="flex-1">
						<div className="flex flex-wrap items-baseline gap-2">
							<p className="font-instrument text-4xl text-[#171717] italic lg:text-5xl">pilot in</p>
							<p className="text-4xl font-extrabold text-[#171717] uppercase lg:text-5xl">Lagos, NG</p>
						</div>
						<p className="mt-6 text-justify text-sm leading-relaxed font-normal text-[#171717]">
							The foundational launch of the MeRS Network establishes a highly scalable, digitally verified blueprint for global menstrual equity by
							deploying its initial operational framework within dense, high-impact urban environments. Rather than relying on static, isolated
							distribution models, this phase activates a dynamic network of localized nodes by partnering with educational institutions, community
							hubs, religious centres, and grassroots municipal spaces to ensure immediate, frictionless product access. This strategic deployment
							serves as the ultimate proving ground for the MeRS digital architecture—stress-testing the end-to-end user application ecosystem,
							validating real-time inventory and logistics schemas, and perfecting the Pro Dispenser tracking interfaces under rigorous real-world
							conditions. Concurrently, these operational hubs double as public health command centers, hosting intensive, data-driven menstrual
							health workshops and educational seminars designed to dismantle deeply entrenched social stigmas, cultivate open community dialogue, and
							gather critical demographic insights.
						</p>
					</div>

					<div className="relative hidden h-96 flex-1 rounded-xl lg:block">
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
					<h2 className="font-instrument text-center text-4xl leading-normal capitalize lg:text-6xl">
						How It <span className="italic">Works</span>
					</h2>

					<div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-28 lg:px-20">
						{howItWorksSteps.slice(0, 4).map((step) => (
							<div key={step.step} className="relative flex flex-col items-center space-y-4">
								<p className="text-center text-xl font-bold lg:text-2xl">{step.title}</p>
								<Image src={step.image} alt={step.title} width={514} height={400} className="w-full rounded-lg" />
								<div
									className={`absolute flex size-20 items-center justify-center rounded-full bg-[#3CFF53] text-5xl font-bold ${step.step % 2 === 0 ? 'bottom-40 -left-14' : 'top-40 -right-14'} `}
								>
									{step.step}.
								</div>
							</div>
						))}
					</div>

					<div className="relative mx-auto flex w-fit items-center justify-center rounded-lg bg-white px-10 py-8">
						<p className="text-xl font-bold text-black lg:text-3xl">{howItWorksSteps[4].title}</p>
						<div className="absolute top-0 -left-12 flex size-16 items-center justify-center rounded-full bg-[#3CFF53] text-5xl font-bold">
							{howItWorksSteps[4].step}.
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
