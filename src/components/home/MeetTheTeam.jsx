import React from "react";

const team = [
	{
		img: "https://www.autumninteractive.com/assets/images/team/travis.jpg",
		name: "Travis Ho",
		role: "Director",
		shortDesc:
			"Travis is a veteran game developer with more than a decade of experience running game studios. After a start in building simulations for the military, he translated his experience in wargaming to the entertainment sphere with the critically acclaimed Autumn Dynasty series of strategy games.",
		description:
			"Travis is a veteran game developer with more than a decade of experience running game studios. After a start in building simulations for the military, he translated his experience in wargaming to the entertainment sphere with the critically acclaimed Autumn Dynasty series of strategy games. An avid technologist and hands-on engineer, Travis is inspired to create quality games that capture the imagination and fulfill their commercial potential.",
	},
	{
		img: "https://www.autumninteractive.com/assets/images/team/teckseng.jpeg",
		name: "Tan Teck Seng",
		role: "Director",
		shortDesc:
			"Teck Seng is startup veteran with more than 20 years of B2C experiences in mobile technologies and online games. Teck Seng previously founded game publishing and development companies iG-interactive (aka GoPlayPlay) and Mozense, which was acquired by GoGame (subsidiary of SEGA).",
		description:
			"Teck Seng is startup veteran with more than 20 years of B2C experiences in mobile technologies and online games. Teck Seng previously founded game publishing and development companies iG-interactive (aka GoPlayPlay) and Mozense, which was acquired by GoGame (subsidiary of SEGA). Teck Seng developed and published the #1 Card/Casino games, Mahjong 3P, and other popular titles such as Lucky13 and Catch2. He had also licensed top China games to published in South East Asia, e.g. Zhengtu 征途、Edudemon 魔域、Street Fighter 街机三国、etc. Teck Seng aims to build Playtato as an alternative distribution platform that will provide instant and direct playability to end users.",
	},

];

function Profile({ img, name, role, description }) {
	return (
		<div className="flex">
			<div className="relative h-32 md:h-64 aspect-[3/4] rounded-xl overflow-hidden shadow-lg">
				<div className="absolute inset-0 w-full h-full ring-1 ring-inset ring-gray-900/10 rounded-xl"></div>
				<img src={img} className="h-full w-full object-cover rounded-xl" />
			</div>
			<div className="flex-1 ml-8">
				<h2 className="text-gray-900 font-bold text-lg">{name}</h2>
				<p className="text-cardinal-500 font-medium">{role}</p>
				<p className="mt-4">{description}</p>
			</div>
		</div>
	);
}

export function MeetTheTeam() {
	return (
		<section id="the-team" className="relative">
			<div className="hidden dark:block absolute top-0 inset-x-0 h-[37.5rem] bg-gradient-to-b from-gray-100"></div>
			<div className="relative pt-28 pb-20 mx-auto max-w-7xl px-4 sm:px-6">
				<h1 className="text-gray-900 text-3xl font-bold text-center">
					Meet the team
				</h1>
				<div className="w-full mt-10 mx-auto">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
						{team.map((person, idx) => (
							<Profile
								img={person.img}
								name={person.name}
								description={person.shortDesc}
								role={person.role}
								key={idx}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
