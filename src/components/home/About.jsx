import React from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { Button } from "../Button";
import Link from "next/link";

export function About() {
	return (
		<section id="about" className="relative">
			<div className="relative py-28 mx-auto max-w-7xl px-4 sm:px-6 xl:flex">
				<div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-cardinal-500/30 to-transparent"></div>
				<div className="flex-1 text-center max-w-3xl mx-auto xl:mx-0 xl:my-auto xl:text-left">
					<p className="uppercase tracking-wide font-bold text-sm text-cardinal-500 mb-2">
						About us
					</p>
					<h2 className="text-gray-900 text-3xl font-bold">
						Realizing Dream Games: One by One
					</h2>
					<p className="text-lg mt-4">
						Every one dreams of making a hit game, but making it a reality requires the best of many skillsets.
						At Autumn, we are a collective of passionate developers, pooling our talent and building on our past successes to realize the next blockbuster.
					</p>

					<Button as="a" className="mt-8" Icon={ChevronRightIcon} href="/about">
						Learn more
					</Button>
				</div>
				<Link
					href="/about#team">
					<a className="block group relative flex-1 w-full mt-10 mx-auto max-w-3xl xl:mx-0 xl:mt-0 xl:ml-20">
						<div className="absolute inset-0 h-full w-full rounded-2xl bg-gradient-to-br from-cardinal-400 to-cardinal-600 rotate-2 translate-x-2 shadow-lg group-hover:rotate-3 transition-transform duration-300"></div>
						<img
							className="relative w-full h-auto rounded-2xl drop-shadow-md group-hover:-rotate-2 group-hover:scale-10 transition-transform duration-300"
							src="/img/team/team.jpg"
							alt="Playtato team photo"
						/>
					</a>

				</Link>
			</div>
		</section>
	);
}
