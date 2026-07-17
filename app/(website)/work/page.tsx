import Image from 'next/image'
import { IMAGES } from '@/components/Images'

export default function OurWork() {
	return (
		<div className="space-y-12 pt-20 lg:pt-28">
			<div className="container pt-10 text-right lg:pt-28">
				<h1 className="text-6xl leading-none font-black text-black sm:text-7xl lg:text-8xl">Our Work</h1>
				<p className="mt-3 text-lg font-medium text-black lg:text-2xl">Who we are</p>
			</div>

			<Image src={IMAGES.UNDER_DEVELOPMENT} alt="Under Development" width={800} height={600} className="mx-auto" />
		</div>
	)
}
