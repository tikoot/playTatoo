import Image from "next/image";
import React from "react";
import { games } from "../data/games";
import { LoadMoreButton } from "./LoadMoreButton"

export function Guide() {
	return (
          
	            	<section
			id="Guides"
			className="relative bg-gradient-to-b from-gray-50 to-cardinal-50"
		>
         
			<div className="relative py-28 mx-auto max-w-7xl px-4 sm:px-6">
                   <p className="uppercase tracking-wide font-bold text-sm text-center sm:text-left text-cardinal-500 mb-2 text-red-700">
          how to play
        </p>
        <h1 className="text-gray-900 text-3xl font-bold text-center sm:text-left">Guides</h1>
				<ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
                 
					{games.map((game, idx) => (
						<li key={idx}>
							<a
								className="group h-full w-full shadow-md hover:shadow-lg ring-offset-2 outline-none focus:ring-cardinal-500/40 focus:ring-2 rounded-xl overflow-hidden border border-gray-300 bg-white flex flex-col hover:scale-105 transition-all duration-200"
								href={`/games/${game.slug}`}
							>
								<div className="relative h-40 w-full bg-neutral-400">
									<Image
										src={game.banner}
										className="h-40 w-full object-cover group-hover:mix-blend-color-dodge transition-all duration-200"
										alt={game.title}
										layout="fill"
									/>
								</div>
								<div className="px-4 py-6 flex flex-col flex-1 border-t border-gray-300">
									<p className="text-xs uppercase tracking-wide text-gray-500 font-bold mb-2">
										{game.releaseYear}
									</p>
									<h2 className="font-semibold text-lg text-gray-900 leading-5">
										{game.title}
									</h2>
									<p className="mt-2 line-clamp-5 mb-4 text-sm">
										{game.description}
									</p>

									<p className="mt-auto text-sm font-semibold text-cardinal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
										Learn more
										<span className="ml-2">→</span>
									</p>
									
								</div>
							</a>
						</li>
					))}
				</ul>
                  <div className="flex justify-center mt-10">
                 <LoadMoreButton/>
                 </div>
                 </div>
		</section>
  
	);
}
