'use client'

import Link from 'next/link'
import Image from 'next/image'
import { IMAGES } from './Images'

export default function Footer() {
	const footerLinks = [
		{ name: 'Home', href: '/' },
		{ name: 'About Us', href: '/about' },
		{ name: 'Our Work', href: '/work' },
		{ name: 'Contact Us', href: '/contact' },
		{ name: 'Join Us', href: '/contact' }
	]

	const downloadLinks = [
		{ href: '#', img: IMAGES.APP_STORE },
		{ href: '#', img: IMAGES.GOOGLE_PLAY }
	]

	const policyLinks = [
		{ name: 'Policy', href: '#' },
		{ name: 'Terms and Condition', href: '#' }
	]

	return (
		<footer className="mt-auto w-full pt-24">
			<div className="relative mx-auto rounded-t-[35px] bg-linear-to-b from-[#EF3333] to-[#660000] px-28 py-20 sm:w-4/5">
				<div className="flex items-start justify-between">
					<ul className="flex flex-col space-y-2">
						{footerLinks.map((link) => (
							<Link key={link.name} href={link.href} className="text-sm font-semibold text-white capitalize hover:text-[#00FF1E] lg:text-lg">
								{link.name}
							</Link>
						))}
						<button className="rounded bg-white px-4 py-2 font-bold text-[#00FF1E]">Donate Now</button>
					</ul>

					<ul className="flex flex-col space-y-2">
						{downloadLinks.map((link, ind) => (
							<Link key={ind} href={link.href}>
								<Image src={link.img} alt="" width={150} height={50} />
							</Link>
						))}
					</ul>

					<ul className="flex flex-col space-y-2">
						{policyLinks.map((link) => (
							<Link key={link.name} href={link.href} className="text-sm font-semibold text-white capitalize hover:text-[#00FF1E] lg:text-lg">
								{link.name}
							</Link>
						))}
					</ul>
				</div>

				<div className="pointer-events-none mt-12 flex flex-col items-center justify-between md:flex-row">
					<p className="text-8xl font-bold text-white">MERS</p>
					<p className="font-instrument text-6xl text-white">For Every Woman</p>
				</div>

				<Image src={IMAGES.FLOWER} alt="" width={300} height={300} className="absolute bottom-0 -left-32 z-10 hidden sm:block" />
				<Image src={IMAGES.FLOWER2} alt="" width={300} height={300} className="absolute -right-32 bottom-0 z-10 hidden sm:block" />
			</div>
		</footer>
	)
}
