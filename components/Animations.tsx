'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

/** Floating DNA icon that bobs up and down slowly */
export function FloatAnimation({ children, className }: { children: ReactNode; className?: string }) {
	return (
		<motion.div
			className={className}
			animate={{ y: [0, -18, 0] }}
			transition={{
				duration: 4,
				repeat: Infinity,
				ease: 'easeInOut'
			}}
		>
			{children}
		</motion.div>
	)
}

/** Section wrapper that fades in on scroll */
export function AnimatedSection({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
	return (
		<motion.div
			className={className}
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-80px' }}
			transition={{ duration: 0.6, delay, ease: 'easeOut' }}
		>
			{children}
		</motion.div>
	)
}

export function HeroReveal({ children, className }: { children: ReactNode; className?: string }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.7, ease: [0.16, 0, 0.2, 1] }}
			className={className}
		>
			{children}
		</motion.div>
	)
}
