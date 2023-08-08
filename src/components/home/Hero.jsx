import { Button } from "../Button";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { Carousel } from "../Carousel";

export function Hero() {
	return (
		<div className="relative w-full h-[50rem] overflow-hidden lg:h-[73vh] lg:min-h-[33.333rem] -mt-28">
			{/*<img
				className="absolute inset-0 w-full h-full object-cover brightness-50"
				src="/img/banner.jpg"
			/>*/}

			<div className="absolute inset-0 w-auto h-full bg-gradient-to-tr from-gray-700 to-gray-400">
				{/*
				<video
					className="w-full h-full object-cover brightness-50"
					media="all and (min-width: 770px)"
					loop="loop"
					autoPlay="autoplay"
					muted
					playsInline
				>
					<source src="/vid/banner.mp4" type="video/mp4" />
					Your browser does not support the video tag.
				</video>
				*/}
				<Carousel className="brightness-50" images={images} />
			</div>

			<div className="relative px-4 sm:px-6 pt-20 sm:pt-24 lg:pt-32 max-w-7xl mt-28 mx-auto">
				<h1 className="text-white font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
					Playtato
				</h1>
				<p className="mt-6 text-base md:text-lg max-w-2xl text-gray-200">
					We are a craft-led studio with 35 years’ experience. We make deep and
					detailed games and give our team the creative freedom to achieve their
					potential.
				</p>

			</div>
		</div>
	);
}
const images = [
	{
		src: "/img/carousel/banner (4).jpg",
		alt: "",
	},
	{
		src: "/img/carousel/banner (7).jpg",
		alt: "",
	},
	{
		src: "/img/carousel/banner (6).jpg",
		alt: "",
	},
	{
		src: "/img/carousel/banner (5).jpg",
		alt: "",
	},
	{
		src: "/img/carousel/banner (3).jpg",
		alt: "",
	},
];
