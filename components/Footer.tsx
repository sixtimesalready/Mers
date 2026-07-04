"use client"

import Link from "next/link"
import Image from "next/image"
import { IMAGES } from "./Images"

export default function Footer() {
	const footerLinks = [
		{ name: "Home", href: "/" },
		{ name: "About Us", href: "/about" },
		{ name: "Our Work", href: "/work" },
		{ name: "Contact Us", href: "/contact" },
		{ name: "Join Us", href: "/contact" }
	]

	const downloadLinks = [
		{ href: "#", img: IMAGES.APP_STORE },
		{ href: "#", img: IMAGES.GOOGLE_PLAY }
	]

	const policyLinks = [
		{ name: "Policy", href: "#" },
		{ name: "Terms and Condition", href: "#" }
	]

	return (
		<footer className="mt-auto pt-24 md:pt-32 w-full">
			<div className="relative sm:w-4/5 py-20 px-28 mx-auto rounded-t-[35px] bg-linear-to-b from-[#EF3333] to-[#660000]">
				<div className="flex justify-between items-start">
					<ul className="space-y-2 flex flex-col">
						{footerLinks.map((link) => (
							<Link key={link.name} href={link.href} className="text-white hover:text-[#00FF1E] font-semibold text-sm lg:text-lg capitalize">
								{link.name}
							</Link>
						))}
						<button className="bg-white text-[#00FF1E] rounded font-bold py-2 px-4">Donate Now</button>
					</ul>

					<ul className="space-y-2 flex flex-col">
						{downloadLinks.map((link, ind) => (
							<Link key={ind} href={link.href}>
								<Image src={link.img} alt="" width={150} height={50} />
							</Link>
						))}
					</ul>

					<ul className="space-y-2 flex flex-col">
						{policyLinks.map((link) => (
							<Link key={link.name} href={link.href} className="text-white hover:text-[#00FF1E] font-semibold text-sm lg:text-lg capitalize">
								{link.name}
							</Link>
						))}
					</ul>
				</div>

				<div className="flex flex-col md:flex-row justify-between items-center pointer-events-none mt-12">
					<p className="text-white font-bold text-8xl">MERS</p>
					<p className="text-white font-instrument text-6xl">For Every Woman</p>
				</div>

				<Image src={IMAGES.FLOWER} alt="" width={300} height={300} className="hidden sm:block absolute -left-32 bottom-0 z-10" />
				<Image src={IMAGES.FLOWER2} alt="" width={300} height={300} className="hidden sm:block absolute -right-32 bottom-0 z-10" />
			</div>
		</footer>
	)
}
