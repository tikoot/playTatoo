import React from "react";
import {
	QuestionMarkCircleIcon,
} from "@heroicons/react/outline";
import {
	YoutubeIcon,
	FacebookIcon,

} from "../icons/solid";
import clsx from "clsx";

export function Footer({ hideBorder }) {
	const ContactAndSupportItems = [
		{
			icon: QuestionMarkCircleIcon,
			name: "Support",
			href: "mailto:help@playtato.com",
		}
	];

	const SocialItems = [

		{
			icon: FacebookIcon,
			href: "https://www.facebook.com/Playtato.Games/",
		},



		{
			icon: YoutubeIcon,
			href: "https://www.youtube.com/@playtato/featured",
		},
	];

	const LegalItems = [
		{
			name: "Privacy",
			href: "https://www.playtato.com/privacy",
		},
		{
			name: "Terms of Service",
			href: "https://www.playtato.com/tos/",
		},
	];

	return (
		<footer className="text-sm leading-6">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
				<div
					className={clsx(
						"grid grid-cols-2 md:grid-cols-4 gap-y-10 py-10",
						!hideBorder && "border-t border-gray-900/10"
					)}
				>
					<div className="col-span-2 mx-auto md:mx-0">
						<img
							className="h-12 mx-auto md:mx-0"
							src="/img/logo.png"
							alt="Playtato logo"
						/>

						<ul className="mt-8 flex flex-wrap gap-6">
							{SocialItems.map((item, idx) => (
								<li key={idx}>
									<a
										href={item.href}
										className="text-gray-400 hover:text-gray-900"
									>
										<item.icon className="w-5 h-5" />
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="text-sm text-gray-400 font-semibold uppercase tracking-wide">
							Contact & support
						</h2>
						<ul className="mt-3 space-y-3">
							{ContactAndSupportItems.map((item, idx) => (
								<li key={idx}>
									<a
										href={item.href}
										className="text-base inline-flex items-center hover:text-gray-900"
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h2 className="text-sm text-gray-400 font-semibold uppercase tracking-wide">
							Legal
						</h2>
						<ul className="mt-3 space-y-3">
							{LegalItems.map((item, idx) => (
								<li key={idx}>
									<a
										href={item.href}
										className="text-base inline-flex items-center hover:text-gray-900"
									>
										{item.name}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className="text-center py-8 mt-8 border-t border-gray-900/10">
					© 2022 Playtato. All Rights Reserved.
				</div>
			</div>
		</footer>
	);
}
