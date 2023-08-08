import { ChevronRightIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import React from "react";
import { Button } from "../Button";

const games = [
	{
		title: "Rummy Pop",
		description:
			"Rummy Pop! is the newest, most exciting Rummy Mahjong. Rummy Pop! consists of traditional 4 player Penang-style Rummy and also an innovative 3 player style.",
		img: "https://playtato.com/assets/our_games/banners/our_games_rummypop.png",
		releaseYear: "2022",
		href: "",
		gradient: "from-sky-400 to-sky-600",
	},
	{
		title: "Mahjong Fury",
		description:
			"Can you defeat rival challengers, unlock the 9 Dragon Gates, and become the true KING OF MAHJONG?",
		img: "/img/games/mahjong-fury.jpg",
		releaseYear: "2020",
		href: "",
		gradient: "from-emerald-400 to-emerald-600",
	},
	{
		title: "Autumn Dynasty: Three Kingdoms",
		description:
			"The third chapter in the award winning Autumn Dynasty series visits the turbulent times of the Three Kingdoms era. Autumn Dynasty 3 Kingdoms melds classic 4X grand strategy with intense real time tactics - all through a fluid command interface designed from the ground up for mobile touchscreens.",
		img: "/img/games/autumn-dynasty-kingdoms/banner.jpg",
		releaseYear: "2019",
		href: "/games/autumn-dynasty-kingdoms",
		gradient: "from-cardinal-400 to-cardinal-600",
	},
];

export function OurGames() {
	return (
		<section id="games" className="relative">
			<div className="hidden dark:block absolute top-0 inset-x-0 h-[37.5rem] bg-gradient-to-b from-gray-100"></div>
			<div className="relative py-28 mx-auto max-w-7xl px-4 sm:px-6">
				<div className="text-center max-w-3xl mx-auto">
					<p className="uppercase tracking-wide font-bold text-sm text-cardinal-500 mb-2">
						Our games
					</p>
					<h1 className="text-gray-900 text-3xl font-bold">
						Fun games available wherever you are
					</h1>
				</div>
				{games.map((game, idx) => (
					<div
						className={clsx(
							"flex flex-col items-start mt-20 gap-10 md:gap-20",
							idx % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
						)}
						key={idx}
					>
						<div className="flex-1">
							<p className="uppercase tracking-wide font-bold text-sm mb-2">
								{game.releaseYear}
							</p>
							<h2 className="text-xl font-bold text-gray-900">{game.title}</h2>
							<p className="mt-4 text-base">{game.description}</p>
						</div>
						<div className="flex-1 relative mx-auto md:mx-0 w-full max-w-sm md:max-w-none">
							<div
								className={clsx(
									"absolute top-0 inset-y-0 w-full rounded-2xl bg-gradient-to-br",
									game.gradient,
									idx % 2 !== 0
										? "-rotate-3 -translate-x-2"
										: "rotate-3 translate-x-2"
								)}
							></div>
							<img
								src={game.img}
								className="relative w-full h-auto rounded-2xl shadow-xl aspect-video object-cover"
							/>
						</div>
					</div>
				))}
				<div className="flex justify-center mt-20">
					<Button as="a" href="/games" Icon={ChevronRightIcon}>
						Show all games
					</Button>
				</div>
			</div>
		</section>
	);
}
