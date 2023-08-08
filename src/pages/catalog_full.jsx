import { Header } from "../components/Header"
import { NextSeo } from "next-seo"
import GameCatalog from "../components/home/GameCatalog"
import { games } from "../data/games" 
export default function CatalogFullPage() {
    const filtered = games.filter((game) => game.display == true);
    return <>
        <NextSeo
            title="Catalog | Autumn Interactive"
            description="Project catalog"
        />
        <Header darkMode={false} />
        <main className="mt-2">
            <GameCatalog games={filtered} />
        </main>
    </>
}