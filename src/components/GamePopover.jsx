import React, { useRef, Fragment, useEffect, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckCircleIcon, XIcon, ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
import clsx from "clsx";
import PlatformLink from "./PlatformLink";


const getThumbnail = (url) => {
	const parts = url.split("/");
	const videoId = parts[parts.length - 1];
	return `https://img.youtube.com/vi/${videoId}/default.jpg`;
};

const ImagePreview = ({ src, active }) => (
	<img src={src} className="w-full h-full object-cover rounded-lg" />
);

const VideoPreview = ({ src, active }) => (
	<>
		<PlayIcon className="w-8 h-8 text-white absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
		<img src={src} className="w-full h-full object-cover rounded-lg" />
	</>
);



export function GamePopover({ isOpen, setIsOpen, game, activeMediaIndex, setActiveMediaIndex }) {

	const buttonLeft = useRef(undefined);
	const buttonRight = useRef(undefined);

	useEffect(() => {
		const handleLeftClick = () => {
			const current = activeMediaIndex || 0;
			if (current > 0) {
				setActiveMediaIndex(activeMediaIndex - 1);
			}
		};
		const handleRightClick = () => {
			const current = activeMediaIndex || 0;
			if (current < game.screenshots.length) {
				setActiveMediaIndex(activeMediaIndex + 1)
			}
		};
		function handleOnKeyDown(event) {
			const current = activeMediaIndex || 0;
			if (event.key === 'ArrowLeft') {
				if (current > 0) {
					setActiveMediaIndex(activeMediaIndex - 1);
				}
			} else if (event.key === 'ArrowRight') {
				if (current < game.screenshots.length) {
					setActiveMediaIndex(activeMediaIndex + 1)
				}
			}
		}
		if (buttonLeft.current) {
			buttonLeft.current.addEventListener("click", handleLeftClick);
		}
		if (buttonRight.current) {
			buttonRight.current.addEventListener("click", handleRightClick);
		}
		document.addEventListener('keydown', handleOnKeyDown);
		return () => {
			document.removeEventListener('keydown', handleOnKeyDown);
			if (buttonLeft.current) {
				buttonLeft.current.removeEventListener("click", handleLeftClick);
			}
			if (buttonRight.current) {
				buttonRight.current.removeEventListener("click", handleRightClick);
			}
		};
	}, [activeMediaIndex])

	function closeModal() {
		setIsOpen(false);
	}

	if (!game) return <></>;




	const allMedia = game.screenshots.map((screenshot) => ({ type: "image", src: screenshot }));

	if (game.video) {
		allMedia.unshift({ type: "video", src: game.video, thumbnail: getThumbnail(game.video) })
	}
	const activeMedia = allMedia[activeMediaIndex];
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
							<Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
								{/* <img src={game.banner} className="w-full h-80 object-cover" /> */}

								<div className="absolute top-0 right-0 p-4">
									<button
										type="button"
										className="p-2 text-white bg-gray-900/50 hover:bg-gray-900/80 backdrop-blur-md rounded-md transition-colors"
										onClick={closeModal}
									>
										<XIcon className="w-6 h-6" />
									</button>
								</div>

								<section className="px-6 pt-10 max-w-3xl mx-auto" >
									<Dialog.Title
										as="h3"
										className="text-3xl font-extrabold leading-none text-gray-900 flex flex-col md:flex-row gap-2 items-center justify-between"
									>
										{game.title}
										{game.platforms.length > 0 &&
											<span className="flex gap-2">
												{game.platforms.map((platform) =>
													(platform.name && <PlatformLink key={platform.name} platform={platform} />))}
											</span>
										}
									</Dialog.Title>

									<p className="text-base text-gray-500 text-justify mt-4">
										{game.description}
									</p>
								</section>

								<section className="py-10 px-4 max-w-3xl mx-auto">
									<div className="px-0 relative flex gap-2 items-center justify-between">
										<button ref={buttonLeft} tabIndex="-1" className={`w-12 h-12 absolute bg-gray-800 bg-opacity-50 flex-none  hover:bg-opacity-70 transition-all duration-200 ease-in`}><ChevronLeftIcon /></button>
										{activeMedia.type === "video" ? (
											<iframe
												src={activeMedia.src}
												className="w-full aspect-video rounded-2xl shadow-lg flex-auto"
											></iframe>
										) : (
											<img
												src={activeMedia.src}
												className="w-full aspect-video rounded-2xl shadow-lg object-cover flex-auto"
											></img>
										)}
										<button ref={buttonRight} tabIndex="-1" className="absolute right-0 bg-gray-800 bg-opacity-50 w-12 h-12 flex-none  hover:bg-opacity-70 transition-all duration-200 ease-in"><ChevronRightIcon /></button>
									</div>
									<div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto py-4 px-6">
										{allMedia.map((mediaItem, idx) => (
											<button
												className="snap-start shrink-0"
												onClick={() => setActiveMediaIndex(idx)}
												key={idx}
											>
												<div
													className={clsx(
														"relative shrink-0 h-16 aspect-video rounded-lg shadow-lg transition-opacity",
														activeMedia === mediaItem
															? "ring-2 ring-gray-400 ring-offset-2"
															: "opacity-50 hover:opacity-100"
													)}
												>
													{mediaItem.type === "image" ? (
														<ImagePreview
															src={mediaItem.src}
															active={activeMedia === mediaItem}
														/>
													) : (
														<VideoPreview
															src={mediaItem.thumbnail}
															active={activeMedia === mediaItem}
														/>
													)}
												</div>
											</button>
										))}
									</div>
								</section>


							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
