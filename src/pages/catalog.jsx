import { Header } from "../components/Header"
import { NextSeo } from "next-seo"
import { games } from "../data/games"
import GameCatalog from "../components/home/GameCatalog"
export default function CatalogPage() {
    return <>
        <NextSeo
            title="Catalog | Playtato"
            description="Project catalog"
        />
        <Header darkMode={false} />
        <main className="mt-2">
            <GameCatalog games={games.filter((game) => game.display == true)} />
        </main>
    </>
}