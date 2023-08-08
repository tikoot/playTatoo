import React, { Fragment } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { games } from "../../data/games";
import clsx from "clsx";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { SwordsIcon } from "../../icons/outline/Swords";
import { CoinIcon } from "../../icons/outline/Coin";
import { TreesIcon } from "../../icons/outline/Trees";
import { HammerIcon } from "../../icons/outline/Hammer";
import { LoadMoreButton } from "../../components/LoadMoreButton";
import { ImageCard } from "../../components/ImageCard"

const icons = {
	swords: SwordsIcon,
	coin: CoinIcon,
	trees: TreesIcon,
	hammer: HammerIcon,
};
const IMAGES = {
	'android': '/platforms/android.svg',
	'web': '/platforms/web.png',
	'ios': '/platforms/ios.svg'
};
function GameDetailPlatformLink({ platform }) {

	return <a href={platform.link} className="flex-none inline-block">
		<img className="h-auto md:w-48 w-32" src={IMAGES[platform.name]} alt={platform.name} />
	</a>;
}

export default function Home({ game }) {
	return (
		<>
			<NextSeo
				title={`${game.title} | Playtato`}
				description={game.description}
			/>
			<Header />
			<main>
				<div className="relative w-full h-96 -mt-20">
					<Image
						className="w-full h-full object-cover"
						src={game.banner}
						layout="fill"
						alt={`${game.title} banner`}
					/>

				</div>

				<section
					id="showcase"
					className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20"
				>
					<div className="flex-1 text-center max-w-3xl mx-auto lg:mx-0 lg:text-left">
						<p className="uppercase tracking-wide font-bold text-sm text-cardinal-500 mb-2">
							Released in {game.releaseYear}
						</p>
						<h2 className="text-gray-900 text-3xl font-bold">{game.title}</h2>
						<p className="text-lg mt-4">{game.description}</p>


					</div>

					<div className="relative flex-1 w-full mt-10 mx-auto max-w-3xl lg:mx-0 lg:mt-0">
						{game.video ?
							<iframe
								src={game.video}
								className="w-full aspect-video rounded-2xl shadow-md mb-2"
								title={`${game.title} video`}
							></iframe>
							: <a href={game.video_alt_link}><img src={game.video_alt} alt={game.title} className="w-full mb-2 aspect-video rounded-2xl shadow-md" /></a>
						}
						<div className="flex justify-center items-center gap-2">
							{game.platforms.map((platform) => <GameDetailPlatformLink key={platform.name} platform={platform} />)}
						</div>

					</div>
				</section>

				<div className="relative w-full bg-gray-100 md:border-y border-gray-900/10">
					<div className="relative grid grid-cols-1 md:grid-cols-2 gap-20 max-w-7xl mx-auto  py-20 px-4 sm:px-6 lg:px-8 ">
						{game.screenshots != null && //************ if no features, skip
							<section id="screenshots">
								<h2 className="text-gray-900 text-3xl font-bold mb-8 md:hidden">
									Screenshots
								</h2>
								<ul className="space-y-10">
									{game.screenshots.map((screenshot, idx) => (
										<li
											className="relative w-full aspect-video rounded-2xl shadow-md"
											key={idx}
										>
											<Image
												className="w-full h-full object-cover rounded-2xl"
												src={screenshot}
												alt={`${game.title} screenshot ${idx + 1}`}
												layout="fill"
											/>
											<div className="absolute inset-0 w-full h-full ring-1 ring-inset ring-gray-900/10 rounded-2xl"></div>
										</li>
									))}
								</ul>
							</section>
						}

						<div>
							{game.features != null && //************ if no features, skip
								<section
									id="features"
									className="bg-white ring-1 ring-gray-900/10 shadow-lg rounded-2xl p-8"
								>
									<div className="max-w-3xl mx-auto">
										<div>
											<h2 className="text-gray-900 text-3xl font-bold">
												Features
											</h2>
											<ul className="mt-8 space-y-8">
												{game.features.map((feature) => {
													const Icon = icons[feature.icon];

													return (
														<li
															className="inline-flex items-start"
															key={feature.title}
														>
															<div
																className={clsx(
																	"bg-gradient-to-br p-3 rounded-xl shadow-sm border",
																	feature.colorClasses
																)}
															>
																<Icon className="w-6 h-6" />
															</div>
															<div className="ml-4">
																<h3 className="text-base font-semibold text-gray-900 leading-5">
																	{feature.title}
																</h3>
																<p className="text-gray-500 text-sm mt-1">
																	{feature.description}
																</p>
															</div>
														</li>
													);
												})}
											</ul>
										</div>
									</div>
								</section>
							}

							{game.awards != null && //************ if no awards, skip
								<section
									id="awards"
									className="mt-20 bg-white ring-1 ring-gray-900/10 shadow-lg rounded-2xl p-8"
								>
									<h2 className="text-gray-900 text-3xl font-bold">Awards</h2>
									<ul className="mt-8 space-y-10">
										{game.awards.map((award, idx) => (
											<Fragment key={idx}>
												<li className="relative">
													<span
														className="text-gray-200 text-9xl font-serif font-bold absolute -top-6 -left-6"
														style={{
															WebkitTextStroke: "1px",
															WebkitTextFillColor: "transparent",
														}}
													>
														“
													</span>
													<p className="relative text-lg text-gray-700 font-medium">
														{award.text}
													</p>
													<div className="mt-4 text-sm">
														<p className="text-gray-900 font-medium">
															{award.author}
														</p>
														<p className="text-gray-400 font-medium">
															{award.authorRole}
														</p>
													</div>
												</li>
												{idx + 1 !== game.awards.length && (
													<li className="w-full h-px bg-gradient-to-r from-white via-gray-200 to-white border-none" />
												)}
											</Fragment>
										))}
									</ul>
								</section>
							}

							
							

						</div>
					</div>
				</div>


				{game.title === 'Mahjong Fury' && 
					<div id="guides">		

								<section id="learnMahjong" className="relative pb-14 sm:py-14  bg-gray-100  md:bg-white">
										<div className="relative mx-auto max-w-7xl px-4 sm:px-6">
											<p className="uppercase tracking-wide font-bold text-sm text-center md:text-left text-cardinal-500 mb-2 text-[#dc5750]">
												 mahjong guides
												</p>
												<h1 className="text-gray-900 text-3xl font-bold text-center md:text-left capitalize mb-2">how to play</h1>
												<p className="text-sm text-center md:text-left  mb-2 md:max-w-sm">Eager to learn 3P Mahjong but no idea where to start? Start here with this compherensive and easy to understand guide specially made for Mahjong newbies </p>
										</div>
								</section>
								<section id="Videos" className="relative bg-gray-100  md:border-y pb-14">
										<div className="relative sm:py-14 font-bold mx-auto max-w-7xl px-4 md:px-6">
											<p className="uppercase tracking-wide font-bold text-sm text-center md:text-left text-cardinal-500 mb-2 text-[#dc5750]">
												how to play
											</p>
											<h1 className="text-gray-900 text-3xl font-bold text-center md:text-left">Videos</h1>
										</div>
										<div className="relative mx-auto flex-1 w-full mt-10 max-w-7xl px-4 md:px-6   lg:mt-0">
											{game.video !== null &&
											<div className="mx-auto">
											<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-8 pb-6">
													<div>
														<iframe
															src={game.video}
															className="w-full  aspect-video rounded-2xl shadow-md mb-2"
															title={`${game.title} video`}
														></iframe>
														<p className="capitalize font-bold text-black	">basic gameplay</p>					
													</div>
													
													<div>
														<iframe
															src={game.video}
															className="w-full  aspect-video rounded-2xl shadow-md mb-2"
															title={`${game.title} video`}
														></iframe>
														<p className="capitalize font-bold text-black	">complete guide to majhong <br /> fury combos</p>					
													</div>
													
														<div>
														<iframe
															src={game.video}
															className="w-full  aspect-video rounded-2xl shadow-md mb-2"
															title={`${game.title} video`}
														></iframe>
														<p className="capitalize font-bold text-black	">basic gameplay</p>					
													</div>
													
													<div>
														<iframe
															src={game.video}
															className="w-full  aspect-video rounded-2xl shadow-md mb-2"
															title={`${game.title} video`}
														></iframe>
														<p className="capitalize font-bold text-black	">complete guide to majhong <br /> fury combos</p>					
													</div>
													
											</div>
											<LoadMoreButton/>
											</div>
											}

									
										</div>
								</section>
								<section id="Guides" className="relative  bg-gray-100  md:bg-white md:border-b pb-14">
										<div className="relative sm:py-14 font-bold mx-auto max-w-7xl px-4 md:px-6">
											<p className="uppercase tracking-wide font-bold text-sm text-center md:text-left text-cardinal-500 mb-2 text-[#dc5750]">
												how to play
											</p>
											<h1 className="text-gray-900 text-3xl font-bold text-center md:text-left">Guides</h1>
										</div>
												<div className="relative mx-auto flex-1 w-full mt-10 max-w-7xl px-4 md:px-6   lg:mt-0">
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-x-8 gap-y-8 pb-6">										
<ImageCard
  mainImage="/img/match/main_1080x1080_en2.jpg"
  additionalImages={['/img/match/01.png', '/img/match/02.png', '/img/match/03.png','/img/match/04.png' , '/img/match/05.png']}
  imgText="Basic Gameplay"
/>
<ImageCard
  mainImage="/img/combos/01_en.jpg"
  additionalImages={['/img/combos/02_en.jpg', '/img/combos/03_en.jpg', '/img/combos/04_en.jpg','/img/combos/05_en.jpg', '/img/combos/06_en.jpg','/img/combos/07_en.jpg', '/img/combos/08_en.jpg', '/img/combos/09_en.jpg' ,'/img/combos/10_en.jpg' ,'/img/combos/11_en.jpg' ,'/img/combos/12_en.jpg','/img/combos/13_en.jpg','/img/combos/14_en.jpg','/img/combos/15_en.jpg','/img/combos/16_en.jpg','/img/combos/17_en.jpg','/img/combos/18_en.jpg']}
  imgText="Counting Fans"
/>
<ImageCard
  mainImage="/img/match/MJGuide_IG_cover_en.jpg"
  additionalImages={['/img/match/01.png', '/img/match/02.png', '/img/match/03.png','/img/match/04.png' , '/img/match/05.png']}
  imgText="Basic Gameplay"
/>
</div>	
											<LoadMoreButton/>
										
									
										</div>
								</section>

					</div>
						
							}
							
			</main>
			<Footer hideBorder />
		</>
	);
}

export async function getStaticProps(context) {
	const { slug } = context.params;
	const game = games.find((g) => g.slug === slug);

	if (!game) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			game,
		},
	};
}

export async function getStaticPaths() {
	// Get the paths we want to pre-render based on games
	const paths = games.map((game) => ({
		params: { slug: game.slug },
	}));

	return { paths, fallback: false };
}
