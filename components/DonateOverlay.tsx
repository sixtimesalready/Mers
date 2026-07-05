'use client'

import { motion, type Easing } from 'framer-motion'
import { IMAGES } from './Images'
import { MoveRight } from 'lucide-react'

const customEase: Easing = [0.16, 0, 0.2, 1]

const containerVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: { duration: 0.7, delay: 0.3, ease: customEase }
	},
	hover: {
		y: -4,
		boxShadow: '0 25px 50px -12px rgba(0,0,0,0.35)',
		transition: { duration: 0.3 }
	}
}

const logoVariants = {
	hover: { scale: 1.12, rotate: 8, transition: { duration: 0.3 } }
}

const textVariants = {
	hover: { x: 4, transition: { duration: 0.3 } }
}

const arrowBtnVariants = {
	hover: { scale: 1.15, backgroundColor: '#222', rotate: 15, transition: { duration: 0.25 } }
}

export default function DonateOverlay() {
	return (
		<div className="absolute inset-0 flex items-center justify-center px-4">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				whileHover="hover"
				viewport={{ once: true }}
				className="flex w-full max-w-5xl cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl bg-white/90 px-6 py-4 shadow-lg backdrop-blur-sm lg:flex-row lg:justify-between lg:gap-4 lg:px-12 lg:py-8"
			>
				<motion.div className="flex items-center gap-3 lg:gap-6" variants={textVariants}>
					<motion.div className="h-16 w-16 shrink-0 rounded-full border-2 border-white shadow-md lg:h-25 lg:w-25 lg:border-4" variants={logoVariants}>
						<img src={IMAGES.MERS_LOGO} alt="MERS" className="h-full w-full object-cover" />
					</motion.div>
					<p className="text-3xl leading-none font-black text-black lg:text-5xl xl:text-6xl">Donate Now</p>
				</motion.div>

				<motion.div
					className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-md lg:h-20 lg:w-20"
					variants={arrowBtnVariants}
				>
					<MoveRight className="size-8 lg:size-10" />
				</motion.div>
			</motion.div>
		</div>
	)
}
