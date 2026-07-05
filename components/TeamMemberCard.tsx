'use client'

import { motion } from 'framer-motion'
import { IMAGES } from './Images'

interface TeamMemberProps {
	name: string
	role: string
	image: string
	delay?: number
}

const teamAvatars: Record<string, string> = {
	'Adewuyi Adeleye': IMAGES.TEAM_ADELEYE,
	'Ayomide Dashur': IMAGES.TEAM_DASHUR,
	'Izevbizua Samuel': IMAGES.TEAM_SAMUEL,
	'Ifeoluwa Akinleye': IMAGES.TEAM_AKINLEYE,
	'Tithe Odeyemi': IMAGES.TEAM_ODEYEMI,
	'Oluwatomisin Olajide': IMAGES.TEAM_OLAJIDE
}

export default function TeamMemberCard({ name, role, image, delay = 0 }: TeamMemberProps) {
	const avatarSrc = teamAvatars[name] || image

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.35)' }}
			viewport={{ once: true }}
			transition={{ duration: 0.4, delay, ease: 'easeOut' }}
			className="flex h-[280px] w-full cursor-pointer flex-col items-center rounded-[19px] border border-[#979797] bg-[#F83131] text-center shadow-[5px_15px_20px_rgba(0,0,0,0.25)] sm:h-[380px] lg:h-[460px]"
		>
			<div className="flex h-[160px] w-full shrink-0 items-center justify-center px-4 sm:h-[240px] lg:h-[300px] lg:px-10">
				<motion.div
					className="h-[100px] w-[100px] shrink-0 rounded-full border-[3px] border-white/30 sm:h-[140px] sm:w-[140px] lg:h-[170px] lg:w-[170px] lg:border-4"
					whileHover={{ scale: 1.1 }}
					transition={{ duration: 0.3 }}
				>
					<img src={avatarSrc} alt={name} className="h-full w-full object-cover" />
				</motion.div>
			</div>
			<div className="flex h-[120px] w-full shrink-0 flex-col items-center justify-center px-3 pb-4 sm:h-[140px] lg:h-[160px] lg:px-6 lg:pb-6">
				<p className="font-roboto text-sm leading-tight font-black text-white sm:text-xl lg:text-[32px]">{name}</p>
				<p className="font-roboto mt-0.5 text-xs text-white sm:text-sm lg:mt-1 lg:text-[20px]" style={{ opacity: 0.63 }}>
					{role}
				</p>
			</div>
		</motion.div>
	)
}
