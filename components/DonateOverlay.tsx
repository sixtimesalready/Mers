"use client"

import { motion, type Easing } from "framer-motion"
import { IMAGES } from "./Images"

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
		boxShadow: "0 25px 50px -12px rgba(0,0,0,0.35)",
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
	hover: { scale: 1.15, backgroundColor: "#222", rotate: 15, transition: { duration: 0.25 } }
}

const arrowImgVariants = {
	hover: { x: 3, transition: { duration: 0.2 } }
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
				className="w-full max-w-5xl bg-white/90 backdrop-blur-sm rounded-2xl px-6 lg:px-12 py-4 lg:py-8 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-3 lg:gap-4 shadow-lg cursor-pointer">
				<motion.div className="flex items-center gap-3 lg:gap-6" variants={textVariants}>
					<motion.div
						className="w-16 h-16 lg:w-[100px] lg:h-[100px] rounded-full  border-2 lg:border-4 border-white shrink-0 shadow-md"
						variants={logoVariants}>
						<img src={IMAGES.MERS_LOGO} alt="MERS" className="w-full h-full object-cover" />
					</motion.div>
					<p className=" font-black text-3xl lg:text-5xl xl:text-6xl text-black leading-none">Donate Now</p>
				</motion.div>

				<motion.div className="w-14 h-14 lg:w-20 lg:h-20 bg-black rounded-full flex items-center justify-center shrink-0 shadow-md" variants={arrowBtnVariants}>
					<motion.img src={IMAGES.RIGHT_ARROW} alt="Donate" className="w-7 h-7 lg:w-10 lg:h-10" variants={arrowImgVariants} />
				</motion.div>
			</motion.div>
		</div>
	)
}
