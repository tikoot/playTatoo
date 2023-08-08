import { Transition } from "@headlessui/react";
import clsx from "clsx";
import { useEffect, useState } from "react";

export function Carousel({ images, className }) {
	const [activeIndex, setActiveIndex] = useState(0);

	function nextImage() {
		if (activeIndex < images.length - 1) {
			setActiveIndex((prev) => prev + 1);
		} else {
			setActiveIndex(0);
		}
	}

	useEffect(() => {
		const interval = setInterval(() => nextImage(), 5000);

		return () => {
			clearInterval(interval);
		};
	}, [images, activeIndex, setActiveIndex, nextImage]);

	return (
		<div className="relative h-full w-full">
			<div className="w-full h-full relative" onClick={(e) => nextImage()}>
				{images.map((item, itemIdx) => (
					<Transition
						show={activeIndex === itemIdx}
						enter="transition-opacity duration-500"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="transition-opacity duration-1000"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
						key={itemIdx}
					>
						<img
							src={item.src}
							alt={item.alt}
							className={clsx(
								"absolute inset-0 w-full h-full object-cover snap-start",
								className
							)}
						/>
					</Transition>
				))}
			</div>
			<div className="absolute bottom-0 right-0 p-4 flex items-center gap-2">
				{images.map((item, itemIdx) => (
					<button
						onClick={(e) => setActiveIndex(itemIdx)}
						className={clsx(
							"relative w-3 h-3 rounded-full outline-none transition-colors focus:ring-2 focus:ring-orange-500",
							activeIndex === itemIdx
								? "bg-white"
								: "bg-white/25 hover:bg-white/50"
						)}
						key={itemIdx}
					></button>
				))}
			</div>
		</div>
	);
}
