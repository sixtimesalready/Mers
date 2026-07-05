import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { IMAGES } from '@/components/Images'
import { MoveRight } from 'lucide-react'
import DonateOverlay from '@/components/DonateOverlay'

export default function ContactUs() {
	return (
		<div className="space-y-10">
			{/* Hero */}
			<section className="container space-y-12">
				<div className="py-12 text-right">
					<h1 className="text-6xl leading-none font-black text-black sm:text-7xl lg:text-8xl">Contact Us</h1>
					<p className="mt-3 text-lg font-medium text-black lg:text-2xl">We can&apos;t wait to hear from you</p>
				</div>

				<div className="flex flex-col gap-12 lg:flex-row lg:gap-20">
					{/* Left: Contact info */}
					<div className="flex-1">
						<div className="flex items-center gap-3 lg:gap-4">
							<h2 className="shrink-0 text-4xl leading-[1.08] font-normal text-black sm:text-5xl lg:text-6xl">Get in</h2>
							<div className="h-0.75 flex-1 bg-[#FF4646]"></div>
						</div>
						<h2 className="mt-3 text-4xl leading-[1.08] font-normal text-black sm:text-5xl lg:mt-4 lg:text-6xl">touch with us</h2>

						<p className="mt-8 text-sm leading-relaxed text-[#525050] lg:text-lg">
							At Mers, we love to listen and help! whether you have a question about our service, need with your account, or want to provide feedback,
							our team is ready to assist you.
						</p>

						<div className="mt-10">
							<p className="text-sm font-bold text-[#525050] lg:text-lg">Email:</p>
							<p className="mt-1 text-base font-bold text-black lg:text-2xl">hello@themersproject.org</p>
						</div>

						<div className="mt-6">
							<p className="text-sm font-bold text-[#525050] lg:text-lg">Phone:</p>
							<p className="mt-1 text-base font-bold text-black lg:text-2xl">+44 123 456 78</p>
							<p className="text-base font-bold text-black lg:text-2xl">+234 567 891 23</p>
						</div>

						<p className="mt-6 text-sm text-[#525050] lg:text-lg">Available Monday to Friday, 9 AM - 6 PM GMT</p>
					</div>

					{/* Right: Contact form in gradient circle */}
					<div className="flex flex-1 flex-col space-y-6 rounded-[45px] bg-linear-to-b from-[#e43232] to-[#7e1c1c] p-8 lg:p-12">
						<div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 lg:gap-6">
							<div>
								<label className="text-sm font-bold text-white">First Name</label>
								<input
									type="text"
									placeholder="Enter your first name...."
									className="mt-2 w-full rounded-[125px] bg-white px-4 py-3 text-sm text-[#8F8F8F] outline-none lg:py-4"
								/>
							</div>
							<div>
								<label className="text-sm font-bold text-white">Last Name</label>
								<input
									type="text"
									placeholder="Enter your last name...."
									className="mt-2 w-full rounded-[125px] bg-white px-4 py-3 text-sm text-[#8F8F8F] outline-none lg:py-4"
								/>
							</div>
						</div>

						<div>
							<label className="text-sm font-bold text-white">Email</label>
							<input
								type="email"
								placeholder="Enter your email address..."
								className="mt-2 w-full rounded-[125px] bg-white px-4 py-3 text-sm text-[#8F8F8F] outline-none lg:py-4"
							/>
						</div>

						<div>
							<label className="text-sm font-bold text-white">How can we help you?</label>
							<textarea
								placeholder="Enter your first name...."
								rows={5}
								className="mt-2 w-full resize-none rounded-[25px] bg-white px-4 py-3 text-sm text-[#8F8F8F] outline-none"
							/>
						</div>

						<Button className="spacee-x-3 w-fit self-center rounded-full bg-white px-8 py-8 text-lg text-black transition-colors hover:bg-gray-100 lg:px-12 lg:text-xl">
							Send Message
							<MoveRight className="size-8" />
						</Button>
					</div>
				</div>
			</section>

			{/* Full-width Tulips with Donate banner overlay */}
			<section className="relative flex h-62.5 items-center justify-center sm:h-120">
				<Image src={IMAGES.TULIPS} alt="Tulips" fill />

				<DonateOverlay />
			</section>
		</div>
	)
}
