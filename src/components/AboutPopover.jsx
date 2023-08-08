import React, { Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import {
	XIcon,
	LightBulbIcon,
	LockOpenIcon,
	UserGroupIcon,
	PuzzleIcon,
} from "@heroicons/react/outline";

export function AboutPopover({ isOpen, setIsOpen }) {
	function closeModal() {
		setIsOpen(false);
	}

	const companyValues = [
		{
			title: "Innovation",
			icon: LightBulbIcon,
			description:
				"We do what’s right, rather than doing what’s “easy” or obvious. We don’t follow the crowd, we forge our own path.",
		},
		{
			title: "Execution",
			icon: PuzzleIcon,
			description:
				"Execution over Perfection. We hold regular and frequent tests with our players to get the feedback we need to make games truly great.",
		},
		{
			title: "Trust",
			icon: UserGroupIcon,
			description:
				"We don’t micromanage. We tell people what we need, not how to do it. We give people the room to grow and provide them with the tools and space to work their magic.",
		},
		{
			title: "Empathy",
			icon: LightBulbIcon,
			description:
				"We don’t care where you’re from or what you’re into. Everyone is treated the same regardless of seniority, background, ethnicity, or sexual preference.",
		},
		{
			title: "Openness",
			icon: LockOpenIcon,
			description:
				"Transparency and honesty build trust. We tell our staff the good and the bad. Only by having open and difficult discussions can we get the feedback, trust, and commitment we need to succeed.",
		},
	];

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog
				as="div"
				className="relative z-50"
				open={isOpen}
				onClose={closeModal}
			>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 backdrop-blur-sm bg-black/50" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all py-10">
								<div className="absolute top-0 right-0 p-4">
									<button
										type="button"
										className="p-2 text-white bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-md rounded-md transition-colors"
										onClick={closeModal}
									>
										<XIcon className="w-6 h-6" />
									</button>
								</div>

								<section className="px-10">
									<Dialog.Title
										as="h3"
										className="text-3xl font-extrabold leading-8 text-gray-900"
									>
										About us
									</Dialog.Title>
									<p className="mt-4">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Ipsa, sit, vero repellendus fugit corrupti modi perferendis
										inventore suscipit impedit esse praesentium? Dolores harum
										id nesciunt asperiores soluta minus inventore optio.
									</p>

									<ul className="mt-8 grid grid-cols-2 gap-y-10">
										{companyValues.map((value, idx) => (
											<li className="flex items-start mr-8" key={idx}>
												<div className="bg-cardinal-500 text-white p-3 rounded-lg">
													<value.icon className="h-6 w-6" />
												</div>
												<div className="ml-4">
													<h3 className="text-lg font-medium text-neutral-900 leading-5">
														{value.title}
													</h3>
													<p className="text-gray-500 text-base mt-2">
														{value.description}
													</p>
												</div>
											</li>
										))}
									</ul>
								</section>

								<section className="px-10">
									<h3 className="text-3xl font-extrabold leading-8 text-gray-900">
										Meet the team
									</h3>
								</section>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
