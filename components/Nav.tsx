"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

import { IMAGES } from "./Images"
import { usePathname } from "next/navigation"
import { ChevronRight } from "lucide-react"
import { Menu } from "lucide-react"

const navLinks = [
	{ label: "Home", href: "/" },
	{ label: "About us", href: "/about" },
	{ label: "Our work", href: "/work" },
	{ label: "Contact us", href: "/contact" }
]

export default function Nav() {
	const pathname = usePathname()

	return (
		<nav className="container flex items-center justify-between gap-3 p-8">
			<Link href="/" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 shrink-0">
				<Image src={IMAGES.MERS_LOGO} alt="MERS" width={129} height={129} />
			</Link>

			<div className="hidden lg:flex items-center gap-7 bg-[#FF686B]/38 py-2.5 px-3 rounded-full">
				{navLinks.map(({ label, href }, idx) => (
					<Link
						key={idx}
						href={href}
						className={`px-3 py-2.5 transition-colors ${pathname === href ? "text-red-600 bg-white/50 font-semibold rounded-full" : "text-black hover:text-red-500"}`}>
						{label}
					</Link>
				))}
			</div>

			<Link href="/contact" className="hidden bg-[#17FA0B] hover:bg-[#17FA0B]/50 py-4 px-5 rounded-full transition-colors lg:flex items-center gap-2">
				Get Involved
				<ChevronRight className="size-5" />
			</Link>

			<Popover>
				<PopoverTrigger asChild>
					<Button variant="ghost" size="icon" className="lg:hidden">
						<Menu className="size-10" />
					</Button>
				</PopoverTrigger>
				<PopoverContent>
					{navLinks.map(({ label, href }, idx) => (
						<Link key={idx} href={href} className={`p-2.5 transition-colors ${pathname === href ? "text-red-600" : ""}`}>
							{label}
						</Link>
					))}
					<Link href="/contact" className="hidden bg-[#17FA0B] hover:bg-[#17FA0B]/50 py-4 px-5 rounded-full transition-colors lg:flex items-center gap-2">
						Get Involved
						<ChevronRight className="size-5" />
					</Link>
				</PopoverContent>
			</Popover>
		</nav>
	)
}
