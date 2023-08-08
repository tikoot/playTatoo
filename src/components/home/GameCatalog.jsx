import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { games } from "../../data/games"
import { GamePopover } from "../GamePopover"
import PlatformLink from "../PlatformLink"

function CatalogItem({ game, onSelected }) {
    return <div className="grid grid-cols-1 
    gap-y-0
    sm:grid-cols-1 sm:gap-x-6
    md:grid-cols-2 md:gap-x-6 gap-x-4 2xl:mx-40 xl:mx-32 
    lg:mx-24 md:mx-18
    md:px-4 md:pt-4 md:pb-8
     mx-8 my-2 shadow-md rounded-2xl hover:scale-105 group transition-all duration-200 ">
        <span className="relative h-80 md:min-h-full min-w-full">
            <Image layout="fill" src={game.banner} alt={game.title} onClick={() => onSelected(game)}
                className="group-hover:mix-blend-color-dodge  rounded-xl hover:cursor-pointer object-cover object-center" title={game.title}
            />
        </span>
        <div className="flex flex-col px-4 py-4">
            <header className="flex-none flex justify-between items-center md:flex-col md:items-start md:justify-center">
                <h1 className="font-semibold md:text-xl text-lg">{game.title}</h1>
                <span className="font-semibold">{game.releaseYear}</span>
            </header>
            <div className="flex-auto tracking-wide md:tracking-wider text-justify md:text-xl text-sm">
                {game.description}
            </div>
        </div>
        <footer className="md:col-span-2 p-2 flex items-start justify-center gap-5 md:items-center flex-col-reverse md:flex-row md:justify-between">
            <ul className="flex flex-auto gap-6 items-end md:justify-start justify-center items-center w-full pb-4">
                {game.platforms.map((platform, idx) => (<li key={platform.name} className="relative flex-none" >
                    <PlatformLink platform={platform} />
                </li>))}
            </ul>
            {game.screenshots!=null && //****************** Hide screenshots if none available
            <ul className="flex md:justify-end justify-center gap-x-2 overflow-x-auto flex-auto w-full">
                {game.screenshots.map((screenshot, idx) => <li key={idx} className="w-24 h-20 relative">
                    <Image className="hover:cursor-pointer rounded-xl object-cover" src={screenshot} layout="fill" onClick={() => onSelected(game, idx + 1)} />
                </li>)}
            </ul>
            }
            
        </footer>

    </div>
}

export default function GameCatalog({ games }) {
    const [selectedGame, setSelectedGame] = useState(undefined)
    const [isOpen, setIsOpen] = useState(false)
    const [activeMediaIndex, setActiveMediaIndex] = useState(0)

    useEffect(() => {
        if (!isOpen) setActiveMediaIndex(0)
    }, [isOpen]);

    const selectGame = useCallback((game, index) => {
        if (isOpen) setIsOpen(false);
        if (index) setActiveMediaIndex(index);
        setSelectedGame(game);
        setIsOpen(true);
    }, [isOpen, selectedGame]);



    return <>
        <section className="gap-4 grid grid-cols-1">
            {games.map(game => <CatalogItem onSelected={selectGame} game={game} key={game.slug} />)}
        </section>
        <GamePopover game={selectedGame} isOpen={isOpen} setIsOpen={setIsOpen} activeMediaIndex={activeMediaIndex} setActiveMediaIndex={setActiveMediaIndex} />
    </>
}