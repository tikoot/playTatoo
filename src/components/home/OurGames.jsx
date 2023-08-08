import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { Button } from "../Button";

const games = [
	{
		title: "TOTAL WAR: WARHAMMER III",
		description:
			"The cataclysmic conclusion to the Total War: WARHAMMER trilogy is coming. Rally your forces and step into the Realm of Chaos, a dimension of mind-bending horror where the very fate of the world will be decided. Will you conquer your Daemons… or command them?",
		img: "https://creative-assembly.s3.eu-west-1.amazonaws.com/2021-02/Desktop_WH3.jpg",
		releaseYear: "2022",
	},
	{
		title: "Cyberpunk 2077",
		description:
			"Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?",
		img: "https://images.hdqwalls.com/wallpapers/cyberpunk-2077-2019-4k-cx.jpg",
		releaseYear: "2020",
	},
];

export function OurGames() {
	const [activeGame, setActiveGame] = useState(games[0]);

	return (
		<section id="games">
			<div className="relative h-[calc(100vh_-_64px)]">
				<img
					src={activeGame.img}
					className="absolute inset-0 w-full h-full object-cover"
				/>

				<div className="relative flex flex-col-reverse sm:flex-row w-full h-full">
					<div
						className="w-full sm:w-80 border-t sm:border-t-0 sm:border-r border-white/25 px-6 py-8 sm:px-10 sm:py-16 bg-black/70"
						style={
							{
								// background:
								// "linear-gradient(to right,rgba(0,0,0,.65) 0,transparent 100%)",
							}
						}
					>
						<ul className="space-x-10 flex sm:block sm:space-x-0 sm:space-y-6">
							{games.map((game, idx) => (
								<li key={idx}>
									<button
										className="text-left"
										onClick={() => setActiveGame(games[idx])}
									>
										<span className="text-sm text-gray-400 font-bold tracking-wide">
											{game.releaseYear}
										</span>
										<p className="text-gray-100 font-medium">{game.title}</p>
									</button>
								</li>
							))}
						</ul>
					</div>
					<div className="w-full h-full bg-gradient-to-t sm:bg-gradient-to-r from-black/70 to-transparent">
						<div className="w-full sm:max-w-md flex flex-col justify-end items-start h-full pl-10 py-16">
							<h1 className="text-gray-100 uppercase text-3xl font-black">
								{activeGame.title}
							</h1>
							<p className="font-normal text-gray-300 mt-4">
								{activeGame.description}
							</p>

							<Button className="mt-8">
								Find out more
								<ChevronRightIcon className="text-gray-500 group-hover:text-gray-400 ml-1 w-4 h-4" />
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
