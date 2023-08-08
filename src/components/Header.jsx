import clsx from "clsx";
import Link from "next/link";
import { useState, useEffect } from "react";
import { NavPopover } from "./NavPopover";

export const MenuItems = [
	{ name: "Games", href: "/#games" },
	{ name: "About", href: "/about" },
	{ name: "Awards", href: "/about#awards" },
	{ name: "Guides", href: "/games/mahjong-fury#guides" },
	{ name: "Contact", href: "/contact" },
];

export function Header({ darkMode = true }) {
	const [isOpaque, setIsOpaque] = useState(false);

	useEffect(() => {
		const offset = 50;

		function onScroll() {
			if (!isOpaque && window.scrollY > offset) {
				setIsOpaque(true);
			} else if (isOpaque && window.scrollY <= offset) {
				setIsOpaque(false);
			}
		}

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll, { passive: true });
		};
	}, [isOpaque]);

	return (
		<header
			className={clsx(
				"sticky top-0 z-40 w-full transition-colors duration-500",
				isOpaque || !darkMode
					? "bg-white border-b border-neutral-900/10"
					: "bg-gradient-to-b from-black/60 to-transparent"
			)}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<div className="flex items-center py-4">
					
						
							<span className="sr-only">Home</span>
							<img
								className={clsx(
									"h-10 w-10",
									/*
									 isOpaque || !darkMode
										? ""
										: "saturate-0 grayscale invert brightness-[0.01]"
										*/
								)}
								src="/img/logo-simple-red.png"
								alt="Playtato Logo"
							/>
						
					

					<ul className="hidden sm:flex items-center space-x-12 ml-28">
						{MenuItems.map((item, idx) => (
							<li
								key={idx}
								className={clsx(
									"font-semibold text-sm  uppercase tracking-wide hover:underline",
									isOpaque || !darkMode
										? "text-gray-700 hover:text-gray-500"
										: "text-white hover:text-gray-400"
								)}
							>
								<a href={item.href}>{item.name}</a>
							</li>
						))}
					</ul>

					<NavPopover
						className="ml-auto"
						display="sm:hidden"
						isOpaque={isOpaque || !darkMode}
					/>
				</div>
			</div>
		</header>
	);
}
