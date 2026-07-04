import React from "react"
import { headers } from "next/headers"

export default async function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	const headersList = await headers()

	// Read your custom x-pathname header
	const pathname = headersList.get("x-pathname") || "/"
	const pathnameToBackgroundTextMap: Record<string, string> = {
		"/": "MERS",
		"/about": "Origin",
		"/work": "The Craft",
		"/contact": "Hi.."
	}

	const backgroundText = pathnameToBackgroundTextMap[pathname] || ""
	return (
		<div className="relative">
			{/* Background Text SVG */}
			<svg viewBox="0 0 100 24" preserveAspectRatio="none" className="absolute inset-0 -z-10 w-full text-blue-600/5 select-none" aria-hidden="true">
				<text x="50%" y="50%" dominantBaseline="central" textAnchor="middle" fill="currentColor" className="font-bold text-4xl">
					{backgroundText}
				</text>
			</svg>

			{children}
		</div>
	)
}
