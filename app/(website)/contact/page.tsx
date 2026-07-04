import { IMAGES } from "@/components/Images"
import DonateOverlay from "@/components/DonateOverlay"

export default function ContactUs() {
	return (
		<main className="min-h-screen bg-white text-black ">
			<div className="pointer-events-none select-none absolute top-12 -left-20">
				<p className=" font-black text-[180px] sm:text-[280px] lg:text-[400px] bg-gradient-to-r from-[#b9b9b9] to-[#f4f4f4] bg-clip-text text-transparent leading-none whitespace-nowrap">
					HI...
				</p>
			</div>

			<div className="relative z-10 flex flex-col min-h-screen">
				{/* Hero */}
				<section className="relative pt-20 lg:pt-28 pb-16">
					<div className="max-w-7xl mx-auto px-8 lg:px-12">
						<div className="text-right mb-12">
							<h1 className=" font-black text-6xl sm:text-7xl lg:text-8xl leading-none text-black">Contact Us</h1>
							<p className=" font-medium text-lg lg:text-2xl text-black mt-3">We can&apos;t wait to hear from you</p>
						</div>
					</div>

					<div className="max-w-7xl mx-auto px-8 lg:px-12">
						<div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mt-24 lg:mt-36">
							{/* Left: Contact info */}
							<div className="w-full lg:w-1/2">
								<div className="flex items-center gap-3 lg:gap-4">
									<h2 className=" font-normal text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-black shrink-0">Get in</h2>
									<div className="flex-1 h-[3px] bg-[#FF4646]"></div>
								</div>
								<h2 className=" font-normal text-4xl sm:text-5xl lg:text-6xl leading-[1.08] text-black mt-3 lg:mt-4">touch with us</h2>

								<p className=" text-sm lg:text-lg text-[#525050] mt-8 leading-relaxed">
									At Mers, we love to listen and help! whether you have a question about our service, need with your account, or want to provide feedback, our
									team is ready to assist you.
								</p>

								<div className="mt-10">
									<p className=" font-bold text-sm lg:text-lg text-[#525050]">Email:</p>
									<p className=" font-bold text-base lg:text-2xl text-black mt-1">hello@themersproject.org</p>
								</div>

								<div className="mt-6">
									<p className=" font-bold text-sm lg:text-lg text-[#525050]">Phone:</p>
									<p className=" font-bold text-base lg:text-2xl text-black mt-1">+44 123 456 78</p>
									<p className=" font-bold text-base lg:text-2xl text-black">+234 567 891 23</p>
								</div>

								<p className=" text-sm lg:text-lg text-[#525050] mt-6">Available Monday to Friday, 9 AM - 6 PM GMT</p>
							</div>

							{/* Right: Contact form in gradient circle */}
							<div className="w-full lg:w-1/2 flex items-start justify-center">
								<div className="w-full max-w-[818px] bg-gradient-to-b from-[#e43232] to-[#7e1c1c] rounded-[45px] p-8 lg:p-12">
									<div className="flex flex-col sm:grid sm:grid-cols-2 gap-4 lg:gap-6">
										<div>
											<label className=" font-bold text-sm text-white">First Name</label>
											<input
												type="text"
												placeholder="Enter your first name...."
												className="w-full mt-2 px-4 py-3 lg:py-4 rounded-[125px] bg-white text-sm text-[#8F8F8F] outline-none"
											/>
										</div>
										<div>
											<label className=" font-bold text-sm text-white">Last Name</label>
											<input
												type="text"
												placeholder="Enter your last name...."
												className="w-full mt-2 px-4 py-3 lg:py-4 rounded-[125px] bg-white text-sm text-[#8F8F8F] outline-none"
											/>
										</div>
									</div>

									<div className="mt-4 lg:mt-6">
										<label className=" font-bold text-sm text-white">Email</label>
										<input
											type="email"
											placeholder="Enter your email address..."
											className="w-full mt-2 px-4 py-3 lg:py-4 rounded-[125px] bg-white text-sm text-[#8F8F8F] outline-none"
										/>
									</div>

									<div className="mt-4 lg:mt-6">
										<label className=" font-bold text-sm text-white">How can we help you?</label>
										<textarea
											placeholder="Enter your first name...."
											rows={5}
											className="w-full mt-2 px-4 py-3 rounded-[25px] bg-white text-sm text-[#8F8F8F] outline-none resize-none"
										/>
									</div>

									<div className="flex items-center justify-center mt-6 lg:mt-8 gap-4">
										<button className="bg-white rounded-[114px] px-8 lg:px-12 py-4  text-lg lg:text-xl text-black hover:bg-gray-100 transition-colors">
											Send Message
										</button>
										<div className="w-[78px] h-[76px] bg-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-800 transition-colors">
											<img src={IMAGES.RIGHT_ARROW} alt="Send" className="w-10 h-10" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Full-width Tulips with Donate banner overlay */}
				<section className="relative min-h-[250px] sm:min-h-[350px] flex items-center justify-center">
					<img src={IMAGES.TULIPS} alt="Tulips" className="w-full h-full absolute inset-0 object-cover" />

					<DonateOverlay />
				</section>
			</div>
		</main>
	)
}
