"use client"

import { motion } from "framer-motion"
import { IMAGES } from "./Images"

interface TeamMemberProps {
	name: string
	role: string
	image: string
	delay?: number
}

const teamAvatars: Record<string, string> = {
	"Adewuyi Adeleye": IMAGES.TEAM_ADELEYE,
	"Ayomide Dashur": IMAGES.TEAM_DASHUR,
	"Izevbizua Samuel": IMAGES.TEAM_SAMUEL,
	"Ifeoluwa Akinleye": IMAGES.TEAM_AKINLEYE,
	"Tithe Odeyemi": IMAGES.TEAM_ODEYEMI,
	"Oluwatomisin Olajide": IMAGES.TEAM_OLAJIDE
}

export default function TeamMemberCard({ name, role, image, delay = 0 }: TeamMemberProps) {
	const avatarSrc = teamAvatars[name] || image

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.35)" }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, delay, ease: "easeOut" }}
			className="rounded-[19px]  shadow-[5px_15px_20px_rgba(0,0,0,0.25)] border border-[#979797] flex flex-col items-center text-center h-[280px] sm:h-[380px] lg:h-[460px] w-full cursor-pointer bg-[#F83131]">
			<div className="w-full h-[160px] sm:h-[240px] lg:h-[300px] flex items-center justify-center shrink-0 px-4 lg:px-10 ">
				<motion.div
					className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[170px] lg:h-[170px] rounded-full  border-[3px] lg:border-4 border-white/30 shrink-0"
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.3 }}>
					<img src={avatarSrc} alt={name} className="w-full h-full object-cover" />
				</motion.div>
			</div>
			<div className="px-3 lg:px-6 pb-4 lg:pb-6 w-full h-[120px] sm:h-[140px] lg:h-[160px] flex flex-col justify-center items-center shrink-0">
				<p className="font-roboto font-black text-sm sm:text-xl lg:text-[32px] text-white leading-tight">{name}</p>
				<p className="font-roboto text-xs sm:text-sm lg:text-[20px] text-white mt-0.5 lg:mt-1" style={{ opacity: 0.63 }}>
					{role}
				</p>
			</div>
		</motion.div>
	)
}
