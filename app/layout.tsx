import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800", "900"] })

export const metadata: Metadata = {
	title: {
		default: "MERS - Empowerment for Women",
		template: "%s | MERS - Empowerment for Women"
	},
	description: "Dedicated to Fighting Period Poverty Globally"
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" className={cn("antialiased", montserrat.className)}>
			<body className="min-h-full scroll-smooth overflow-x-hidden">
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	)
}
