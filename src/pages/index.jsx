import { Header } from "../components/Header";
import { Hero } from "../components/home/Hero";
import { Footer } from "../components/Footer";
import { OurGames } from "../components/home/OurGames3";
import { About } from "../components/home/About";
import { NextSeo } from "next-seo";

export default function Home() {
	return (
		<>
			<NextSeo
				title="Playtato"
				description="Playtato brings together top-notch engineering and innovative interaction design to deliver brand new gaming experiences for players."
			/>
			<Header />
			<Hero />
			<main>
				<OurGames />
				<About />
			</main>
			<Footer />
		</>
	);
}
