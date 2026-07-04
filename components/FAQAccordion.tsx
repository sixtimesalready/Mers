"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { IMAGES } from "./Images"
import { ChevronRight } from "lucide-react"

interface FAQItem {
	question: string
	answer: string
}

const faqs: FAQItem[] = [
	{
		question: "What is MERS approach to alleviate Period Poverty?",
		answer:
			"MeRS addresses period poverty by shifting away from unpredictable, short-term charity drives and instead establishing permanent, digitally accountable public health infrastructure. Our systemic approach is built on a unique triple-loop ecosystem that seamlessly combines advanced software, local community nodes, and clinical public health strategy."
	},
	{
		question: "How can I get involved in MERS?",
		answer:
			"MeRS addresses period poverty by shifting away from unpredictable, short-term charity drives and instead establishing permanent, digitally accountable public health infrastructure. Our systemic approach is built on a unique triple-loop ecosystem that seamlessly combines advanced software, local community nodes, and clinical public health strategy."
	},
	{
		question: "Does MERS provide menstrual health education?",
		answer:
			"MeRS addresses period poverty by shifting away from unpredictable, short-term charity drives and instead establishing permanent, digitally accountable public health infrastructure. Our systemic approach is built on a unique triple-loop ecosystem that seamlessly combines advanced software, local community nodes, and clinical public health strategy."
	}
]

export default function FAQAccordion() {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const handleToggle = (index: number) => {
		if (openIndex === index) {
			setOpenIndex(null)
		} else {
			setOpenIndex(index)
		}
	}

	return (
		<div className="max-w-3xl mx-auto space-y-4">
			{faqs.map((faq, index) => (
				<div key={index} className="bg-white rounded-2xl shadow-[0px_4px_10.8px_rgba(0,0,0,0.25)] ">
					<button
						onClick={() => handleToggle(index)}
						className="w-full flex items-center justify-between px-6 py-5 text-left text-lg lg:text-xl font-roboto text-black">
						<span>{faq.question}</span>
						<ChevronRight className={`size-5 transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""}`} />
					</button>

					<AnimatePresence>
						{openIndex === index && (
							<motion.div
								initial={{ height: 0, opacity: 0 }}
								animate={{ height: "auto", opacity: 1 }}
								exit={{ height: 0, opacity: 0 }}
								transition={{ duration: 0.3, ease: "easeInOut" }}
								className="">
								<div className="px-6 pb-5 text-sm lg:text-base text-gray-600 leading-relaxed">{faq.answer}</div>
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			))}
		</div>
	)
}
