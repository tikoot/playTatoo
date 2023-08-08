import React from "react";
import {
	MailIcon,
} from "@heroicons/react/outline";

export function Contact() {
	return (
		<section id="contact" className="relative bg-gray-50">
			<div className="relative py-20 mx-auto max-w-7xl px-4 sm:px-6">

				<div className="grid grid-cols-1 md:grid-cols-2 gap-y-10">
					<div className="h-full md:mr-12">
						<h2 className="text-2xl text-gray-900 font-extrabold">
							Contact us
						</h2>
						<p className="mt-2 text-sm sm:text-base">
							We&apos;d love to hear from you! Whether it&apos;s feedback on our
							games, or collaboration opportunities, we&apos;re happy to chat!
						</p>

						<a
							href="mailto:biz@playtato.com"
							className="flex items-center mt-4 hover:underline"
						>
							<MailIcon className="w-5 h-5 text-gray-400" />
							<span className="ml-2 text-sm">biz@playtato.com</span>
						</a>
					</div>
					<div className="h-full md:mr-8">
						<h2 className="text-2xl text-neutral-900 font-extrabold">
							Join our team
						</h2>
						<p className="mt-2 text-sm sm:text-base">
							We&apos;re always on the lookout for talented and passionate
							individuals to join our team. Drop us a note if you&apos;re
							excited about making great games!
						</p>

					</div>
				</div>
			</div>
		</section>
	);
}
