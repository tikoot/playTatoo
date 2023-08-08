import React from "react";
import {
	LightBulbIcon,
	LockOpenIcon,
	UserGroupIcon,
	PuzzleIcon,
} from "@heroicons/react/outline";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { LinkedInIcon, TwitterIcon } from "../icons/solid";
import { NextSeo } from "next-seo";
import Image from "next/image";

export default function About() {
	return (
		<>
			<NextSeo
				title="About | Playtato"
				description="We are a game studio based in Singapore - creators of Autumn Dynasty, Rummy Pop and Mahjong Fury."
			/>
			<Header />
			<main>
				<div>
					<div className="relative w-full h-96 -mt-20">
						<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cardinal-700 to-cardinal-600">
							<Image
								className="w-full h-full object-cover mix-blend-multiply grayscale"
								src="/img/team/team.jpg"
								layout="fill"
								alt="Group photo of team"
							/>
						</div>
						<div className="relative pt-40 px-4 sm:px-6 max-w-7xl mx-auto">
							<h1 className="text-6xl text-white font-extrabold">About us</h1>
							<p className="text-lg text-cardinal-200 max-w-2xl mt-4">
								Every one dreams of making a hit game, but making it a reality requires the best of many skillsets.
						        At Autumn, we are a collective of passionate developers, pooling our talent and building on our past successes to realize the next blockbuster.
							</p>
						</div>
					</div>
				</div>

				<section id="awards" className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
					<p className="uppercase tracking-wide font-bold text-sm text-cardinal-500 mb-2">
						Our Awards & Features
					</p>
					<h2 className="text-3xl font-bold leading-8 text-gray-900">
						An internationally recognized studio
					</h2>
					<ul className="mt-10 gap-10 grid grid-cols-1 lg:grid-cols-2">
						{awards.map((award) => (
							<li className="flex" key={award.name}>
								<div className="relative w-40 h-40 rounded-2xl shadow-md">
									<Image
										className="w-full h-full object-cover rounded-2xl"
										src={award.image}
										layout="fill"
										alt={award.name}
									/>
									<div className="w-full h-full rounded-2xl absolute inset-0 ring-1 ring-inset ring-neutral-900/10"></div>
								</div>
								<div className="ml-6 flex-1">
									<h3 className="text-xl font-semibold text-neutral-900 leading-6">
										{award.name}
									</h3>
									<p className="mt-2 text-sm">{award.description}</p>
								</div>
							</li>
						))}
					</ul>
				</section>

				<section
					id="team"
					className="relative py-20 w-full bg-gradient-to-b from-cardinal-50 to-cardinal-100 border-y border-cardinal-200"
				>
					<div className="relative max-w-7xl mx-auto px-4 sm:px-6">
						<p className="uppercase tracking-wide font-bold text-sm text-cardinal-500 mb-2">
							Our Team Members
						</p>
						<h2 className="text-3xl font-bold leading-8 text-gray-900">
							A collective of talented & passionate developers
						</h2>
						<ul className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
							{team.map((member) => (
								<li
									className="flex flex-col items-center text-center"
									key={member.name}
								>
									<div className="relative w-32 h-32 sm:w-48 sm:h-48 rounded-full shadow-md bg-gradient-to-br from-cardinal-300 to-cardinal-400">
										<Image
											src={member.image}
											className="w-full h-full object-cover rounded-full grayscale mix-blend-multiply"
											layout="fill"
											alt={member.name}
										/>
										<div className="absolute inset-0 w-full h-full rounded-full ring-1 ring-inset ring-neutral-900/10"></div>
									</div>
									<h3 className="font-medium text-neutral-900 mt-6 leading-5">
										{member.name}
									</h3>
									<p className="font-medium text-cardinal-500 mt-1 leading-5">
										{member.role}
									</p>
									<div className="flex items-center gap-4 mt-2">
										<a
											href={member.twitter}
											className="text-neutral-400 hover:text-cardinal-500"
											target="_blank"
											rel="noreferrer"
										>
											<TwitterIcon className="w-4 h-4" />
										</a>
										<a
											href={member.linkedIn}
											className="text-neutral-400 hover:text-cardinal-500"
											target="_blank"
											rel="noreferrer"
										>
											<LinkedInIcon className="w-4 h-4" />
										</a>
									</div>
								</li>
							))}
						</ul>
					</div>
				</section>

				<section id="values" className="px-4 sm:px-6 py-20 max-w-7xl mx-auto">
					<p className="uppercase tracking-wide font-bold text-sm text-cardinal-500 mb-2">
						Our Key Values
					</p>
					<h2 className="text-3xl font-bold leading-8 text-gray-900">
						A workplace where everyone thrives
					</h2>

					<ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-y-10">
						{companyValues.map((value, idx) => (
							<li className="flex items-start mr-8" key={idx}>
								<div className="bg-gradient-to-br p-3 rounded-xl shadow-sm border bg-cardinal-100 text-cardinal-600 border-cardinal-200">
									<value.icon className="h-6 w-6" />
								</div>
								<div className="ml-4">
									<h3 className="text-base font-semibold text-neutral-900 leading-5">
										{value.title}
									</h3>
									<p className="text-gray-500 text-sm mt-1">
										{value.description}
									</p>
								</div>
							</li>
						))}
					</ul>
				</section>

				
			</main>
			<Footer />
		</>
	);
}

const companyValues = [
	{
		title: "Creativity & Innovation",
		icon: LightBulbIcon,
		description:
			"We believe that games have the power to push the boundaries of what's possible, to surprise and delight players. We are willing to take risks to explore new and exciting ideas in our games.",
	},
	{
		title: "Quality",
		icon: PuzzleIcon,
		description:
			"We are committed to delivering the highest quality games to our players. We take pride in every aspect of our games, from the gameplay to the graphics to the overall user experience.",
	},
	{
		title: "Collaboration",
		icon: UserGroupIcon,
		description:
			"We rely on our small, tight-knit team to bring our games to life, and we believe that by working together and supporting each other, we can create the best possible games.",
	},
	{
		title: "Inclusivity",
		icon: LightBulbIcon,
		description:
			"We believe that everyone should have the opportunity to experience the joy of gaming, and we work hard to create games that are accessible and enjoyable for players of all backgrounds and abilities.",
	},
	{
		title: "Community",
		icon: LockOpenIcon,
		description:
			"Building a strong community around our games is important to us, and we strive to create a positive and welcoming environment for all of our players. We value the feedback and input of our community and work to create a strong connection with our players.",
	},
];

const team = [
	{
		image: "/img/team/travis.jpg",
		name: "Travis Ho",
		role: "Director",
		shortDesc:
			"Travis is a veteran game developer with more than a decade of experience running game studios. After a start in building simulations for the military, he translated his experience in wargaming to the entertainment sphere with the critically acclaimed Autumn Dynasty series of strategy games.",
		description:
			"Travis is a veteran game developer with more than a decade of experience running game studios. After a start in building simulations for the military, he translated his experience in wargaming to the entertainment sphere with the critically acclaimed Autumn Dynasty series of strategy games. An avid technologist and hands-on engineer, Travis is inspired to create quality games that capture the imagination and fulfill their commercial potential.",
		twitter: "https://twitter.com/jack",
		linkedIn: "https://www.linkedin.com/in/williamhgates",
	},
	{
		image: "/img/team/teckseng.jpg",
		name: "Tan Teck Seng",
		role: "Director",
		shortDesc:
			"Teck Seng is startup veteran with more than 20 years of B2C experiences in mobile technologies and online games. Teck Seng previously founded game publishing and development companies iG-interactive (aka GoPlayPlay) and Mozense, which was acquired by GoGame (subsidiary of SEGA).",
		description:
			"Teck Seng is startup veteran with more than 20 years of B2C experiences in mobile technologies and online games. Teck Seng previously founded game publishing and development companies iG-interactive (aka GoPlayPlay) and Mozense, which was acquired by GoGame (subsidiary of SEGA). Teck Seng developed and published the #1 Card/Casino games, Mahjong 3P, and other popular titles such as Lucky13 and Catch2. He had also licensed top China games to published in South East Asia, e.g. Zhengtu 征途、Edudemon 魔域、Street Fighter 街机三国、etc. Teck Seng aims to build Playtato as an alternative distribution platform that will provide instant and direct playability to end users.",
		twitter: "https://twitter.com/jack",
		linkedIn: "https://www.linkedin.com/in/williamhgates",
	},
	// {
	// 	image: "/img/team/hieu.jpg",
	// 	name: "Trung Hieu",
	// 	role: "Head of Engineering",
	// 	shortDesc:
	// 		"Hieu leads Autumn Interactive on both the technical and operational fronts, and is the driving force behind the team's ability to deliver, operate and maintain polished products: making things happen on time, on budget, and on all devices.",
	// 	description:
	// 		"Hieu leads Autumn Interactive on both the technical and operational fronts, and is the driving force behind the team's ability to deliver, operate and maintain polished products: making things happen on time, on budget, and on all devices. His experience covers a wide spectrum of game and application development, from the company's core capabilities in native and H5 mobile web development to AI, computer vision or other more esoteric technologies. Hieu upholds the camaraderie and productivity of a close-knit dev team, keeping everyone up to date with the latest tools while also managing risk. As a respected developer within the indie community, he has mentored many junior programmers both inside and outside the company. He is also a keen observer of industry trends and developments.",
	// 	twitter: "https://twitter.com/jack",
	// 	linkedIn: "https://www.linkedin.com/in/williamhgates",
	// },
];

const awards = [
	{
		image: "/img/awards/zplay.png",
		name: "ChinaJoy Expo",
		description:
			"Publishing MOU with ZPlay, Shanghai, 2015",
	},
	{
		image: "/img/awards/digitallife.jpg",
		name: "ST Digital Life Awards",
		description:
			"Best Made in Singapore Game, Editor's Choice, Straits Times Digital Life Awards, Singapore, 2013",
	},
	{
		image: "/img/awards/blackberry.jpg",
		name: "Blackberry Jam Europe",
		description:
			"Blackberry Jam Europe Showcase, Amsterdam, 2013",
	},
	{
		image: "/img/awards/sitf.png",
		name: "SiTF Gold",
		description:
			"Gold Award (Digital Media), Singapore IT Federation, Singapore, 2013",
	},
	{
		image: "/img/awards/gdc china2.jpg",
		name: "IGF China",
		description:
			"Best Student Game, Independent Games Festival, Game Developers Conference China, Shanghai, 2009",
	},
	{
		image: "/img/awards/code72.jpg",
		name: "Microsoft Code 7 Contest",
		description:
			"Regional Winner, Microsoft Code 7 Contest, Professional Developers Conference, Los Angeles, 2009",
	},
];
