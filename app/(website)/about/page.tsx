import { IMAGES } from '@/components/Images'
import TeamMemberCard from '@/components/TeamMemberCard'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

export default function AboutUs() {
	const teamMembers = [
		{ name: 'Ayomide Dashur', role: 'Co-Founder', image: IMAGES.TEAM_DASHUR },
		{ name: 'Adewuyi Adeleye', role: 'Co-Founder/Design Lead', image: IMAGES.TEAM_ADELEYE },
		{ name: 'Ifeoluwa Akinleye', role: 'Project Manager', image: IMAGES.TEAM_AKINLEYE },
		{ name: 'Samuel Izevbizua', role: 'Developer', image: IMAGES.TEAM_SAMUEL },
		{ name: 'Tithe Odeyemi', role: 'Developer', image: IMAGES.TEAM_ODEYEMI },
		{ name: 'Oluwatomisin Olajide', role: 'Designer', image: IMAGES.TEAM_OLAJIDE }
	]

	const faqs = [
		{
			question: 'What is MERS approach to alleviate Period Poverty?',
			answer:
				'MeRS addresses period poverty by shifting away from unpredictable, short-term charity drives and instead establishing permanent, digitally accountable public health infrastructure. Our systemic approach is built on a unique triple-loop ecosystem that seamlessly combines advanced software, local community nodes, and clinical public health strategy.'
		},
		{
			question: 'How can I get involved in MERS?',
			answer:
				'MeRS addresses period poverty by shifting away from unpredictable, short-term charity drives and instead establishing permanent, digitally accountable public health infrastructure. Our systemic approach is built on a unique triple-loop ecosystem that seamlessly combines advanced software, local community nodes, and clinical public health strategy.'
		},
		{
			question: 'Does MERS provide menstrual health education?',
			answer:
				'MeRS addresses period poverty by shifting away from unpredictable, short-term charity drives and instead establishing permanent, digitally accountable public health infrastructure. Our systemic approach is built on a unique triple-loop ecosystem that seamlessly combines advanced software, local community nodes, and clinical public health strategy.'
		}
	]

	return (
		<div className="space-y-10">
			{/* Part 1: Hero */}
			<section className="pt-20 lg:pt-28">
				<div className="container px-8 pb-20 lg:px-12">
					<div className="mb-12 text-right">
						<h1 className="text-6xl leading-none font-black text-black sm:text-7xl lg:text-8xl">About Us</h1>
						<p className="mt-3 text-lg font-medium text-black lg:text-2xl">From a dream to Action.</p>
					</div>
				</div>
				<div className="bg-black text-white">
					<div className="flex flex-col lg:flex-row">
						<div className="w-full p-8 lg:w-[55%] lg:p-12 lg:pl-[max(8.33%,2rem)]">
							<p className="text-justify text-sm leading-relaxed font-medium lg:text-lg">
								To systematically dismantle the barriers of period poverty and restore fundamental dignity to women and girls worldwide through the
								orchestration of seamless, community-anchored sanitary product distribution networks. By combining targeted public health education,
								strategic global and localized corporate partnerships, and cutting-edge, technology-driven accountability platforms, we establish
								enduring, perpetual support frameworks that safeguard menstrual hygiene health, elevate individual confidence, and systematically
								empower underserved communities globally across generations.
							</p>
							<p className="mt-6 text-justify text-sm leading-relaxed font-medium lg:text-lg">
								A world completely redefined by menstrual equity, where access to essential sanitary care is recognized as an absolute human right
								rather than a privilege. We envision a permanent future where no woman, girl, or menstruating individual is marginalized, held back,
								or socially or educationally disadvantaged due to a natural biological function, ensuring that dignity, opportunity, and care remain
								universally and unalterably accessible across every border and community.
							</p>
						</div>
						<div className="w-full lg:w-[45%]">
							<img src={IMAGES.ABOUT_ISTOCK} alt="" className="h-full min-h-75 w-full object-cover lg:min-h-full" />
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
					<div className="flex w-full flex-col items-center justify-center p-8 text-center lg:w-1/2 lg:p-12 lg:pr-[max(8.33%,2rem)]">
						<blockquote className="font-instrument max-w-xl text-3xl leading-[0.9] text-black lg:text-5xl">
							It&apos;s not the load that breaks you down, it&apos;s the <span className="italic">way you carry it</span>
						</blockquote>
						<p className="font-instrument mt-4 text-xl text-black lg:text-3xl">~ Maya Angelou</p>
					</div>
				</div>
			</section>

			{/* Part 3: Text + Time Africa with Sanitary Pads overlaid */}
			<section className="py-16 lg:py-20">
				<div className="mx-auto max-w-7xl px-8 lg:px-12">
					<div className="flex flex-col items-start gap-8 lg:flex-row lg:gap-12">
						<div className="w-full lg:w-[55%]">
							<p className="text-justify text-sm leading-relaxed font-medium text-black lg:text-lg">
								Unlike transient charitable campaigns or short-term relief drives, the MeRS Network is engineered for perpetual continuity. We view
								menstrual equity not as a temporary milestone, but as a permanent pillars of basic human rights. To support this, our digital
								ecosystem and physical distribution hubs are built as self-sustaining, long-term civic infrastructure. We are dedicated to
								maintaining, scaling, and evolving this network as a permanent global fixture—ensuring an unbroken, generation-spanning supply chain
								of dignity, health, and care.
							</p>
							<p className="mt-6 text-justify text-sm leading-relaxed font-medium text-black lg:text-lg">
								Recognizing that localized, short-term handouts could never fix a structural flaw, the founders combined their expertise to engineer a
								self-sustaining ecosystem. They developed a methodology that infuses rigorous public health safeguards directly into a secure,
								decentralized digital platform. The result is MeRS: a permanent, network-driven model that replaces opaque distribution channels with
								verifiable, automated, and dignified access loops.
							</p>
						</div>

						<div className="flex w-full flex-col lg:w-[45%]">
							{/* Top Image - narrower and shifted right */}
							<div className="ml-[35%] h-48 w-[95%] shadow-[9px_-27px_31px_rgba(0,0,0,0.25)] lg:h-80">
								<img src={IMAGES.SANITARY_PADS} alt="" className="h-full w-full object-cover" />
							</div>

							{/* Bottom Image - wider, flush left, overlapping upwards */}
							<div className="-mt-12 ml-0 w-[95%] shadow-[9px_-27px_31px_rgba(0,0,0,0.25)] lg:-mt-20">
								<img src={IMAGES.TIME_AFRICA} alt="" className="w-full" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Part 4: THE TEAM */}
			<section className="py-16 lg:py-0">
				<div className="mx-auto max-w-7xl px-8 lg:px-12">
					<h2 className="mb-12 text-center text-4xl font-black text-black uppercase lg:mb-16 lg:text-6xl">THE TEAM</h2>
					<div className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
						{teamMembers.slice(0, 4).map((member, i) => (
							<TeamMemberCard key={member.name} name={member.name} role={member.role} image={member.image} delay={i * 0.1} />
						))}
					</div>
					<div className="mx-auto grid max-w-xl grid-cols-2 gap-4 lg:gap-6">
						{teamMembers.slice(4, 6).map((member, i) => (
							<TeamMemberCard key={member.name} name={member.name} role={member.role} image={member.image} delay={0.3 + i * 0.1} />
						))}
					</div>
				</div>
			</section>

			{/* Part 5: FAQ */}
			<section className="container py-16 lg:py-24">
				<div className="mx-auto max-w-7xl px-8 lg:px-12">
					<h2 className="mb-12 text-center text-4xl font-bold text-black uppercase lg:text-5xl">MERS FAQS</h2>
					<Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-3">
						{faqs.map((faq, i) => (
							<AccordionItem key={i} value={`item-${i + 1}`} className="rounded-lg bg-white p-2 shadow-[0px_4px_10.8px_rgba(0,0,0,0.25)]">
								<AccordionTrigger>{faq.question}</AccordionTrigger>
								<AccordionContent>
									<p>{faq.answer}</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</section>
		</div>
	)
}
