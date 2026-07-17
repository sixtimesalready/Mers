'use client'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const BackgroundText = () => {
	const pathname = usePathname()
	const textRef = useRef<SVGTextElement>(null)

	// Default viewBox. We will overwrite this the millisecond the component mounts.
	const [viewBox, setViewBox] = useState('0 0 100 24')
	// Opacity trick prevents the text from flashing at the wrong size during the first render
	const [opacity, setOpacity] = useState(0)

	const pathnameToBackgroundTextMap: Record<string, string> = {
		'/': 'MERS',
		'/about': 'Origin',
		'/work': 'The Craft',
		'/contact': 'Hi..'
	}

	const label = pathnameToBackgroundTextMap[pathname] || ''

	// Measure the text and snap the viewBox to it
	useEffect(() => {
		if (textRef.current && label) {
			const bbox = textRef.current.getBBox()
			// bbox provides the exact x, y, width, and height of the rendered text
			setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`)
			setOpacity(1) // Reveal the perfectly scaled text
		}
	}, [label])

	if (!label) return null

	return (
		<svg
			viewBox={viewBox}
			className="absolute left-0 -z-10 w-full text-blue-600/5 transition-opacity duration-300 select-none lg:-top-24"
			style={{ opacity }}
			aria-hidden="true"
		>
			<text ref={textRef} x="0" y="50%" dominantBaseline="central" textAnchor="start" fill="currentColor" className="font-bold" fontSize="24">
				{label}
			</text>
		</svg>
	)
}

export default BackgroundText
