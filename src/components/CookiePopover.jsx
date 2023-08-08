import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { useCookie } from "../hooks/useCookie";
import { Button } from "./Button";
import {
	SparklesIcon,
	PresentationChartLineIcon,
	NewspaperIcon,
	UsersIcon,
	ExclamationCircleIcon,
} from "@heroicons/react/solid";
import { Switch } from "./Switch";

const consentCookieOptions = {
	days: 365,
	SameSite: "Strict",
	Secure: true,
};

export function CookiePopover() {
	const [isOpen, setIsOpen] = useState(false);
	const [consentCookie, setConsentCookie] = useCookie("CookieConsent");
	const [consentOptions, setConsentOptions] = useState({
		necessary: true,
		personalise: true,
		ads: true,
		traffic: true,
		partners: true,
	});

	function onAccept() {
		setConsentOptions({
			necessary: true,
			personalise: true,
			ads: true,
			traffic: true,
			partners: true,
		});
		// Wait to show toggle animation
		setTimeout(() => {
			setConsentCookie(
				JSON.stringify({
					necessary: true,
					personalise: true,
					ads: true,
					traffic: true,
					partners: true,
				}),
				consentCookieOptions
			);
			setIsOpen(false);
		}, 200);
	}
	function onAcceptSelected() {
		setConsentCookie(
			JSON.stringify({ necessary: true, ...consentOptions }),
			consentCookieOptions
		);
		setIsOpen(false);
	}
	function onReject() {
		setConsentOptions({
			necessary: true,
			personalise: false,
			ads: false,
			traffic: false,
			partners: false,
		});
		// Wait to show toggle animation
		setTimeout(() => {
			setConsentCookie(
				JSON.stringify({
					necessary: true,
					personalise: false,
					ads: false,
					traffic: false,
					partners: false,
				}),
				consentCookieOptions
			);
			setIsOpen(false);
		}, 200);
	}

	useEffect(() => {
		// Open cookie popover if consent cookie isn't already set
		if (!consentCookie) {
			setIsOpen(true);
		}
	}, [consentCookie]);

	const cookieUseCases = [
		{
			icon: ExclamationCircleIcon,
			title: "Necessary",
			description: "These cookies are required for the site to work correctly.",
			key: "necessary",
			required: true,
		},
		{
			icon: SparklesIcon,
			title: "Personalise content",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			key: "personalise",
		},
		{
			icon: NewspaperIcon,
			title: "Serve ads",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			key: "ads",
		},
		{
			icon: PresentationChartLineIcon,
			title: "Analyse traffic",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			key: "traffic",
		},
		{
			icon: UsersIcon,
			title: "Share information with our advertising and analytics partners",
			description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
			key: "partners",
		},
	];

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50" onClose={() => {}}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black/40" />
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
							<Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
								<Dialog.Title
									as="h3"
									className="text-xl font-semibold leading-6 text-gray-900"
								>
									Before you continue to Playtato
								</Dialog.Title>
								<div className="mt-6">
									<p className="text-sm text-gray-500">
										If you choose to &apos;Accept all&apos;, we will also use
										cookies and data for the following purposes. <br />
										If you choose to &apos;Reject all&apos;, we will not use
										cookies for additional purposes.
									</p>
									<ul className="space-y-6 mt-4">
										{cookieUseCases.map((item) => (
											<li className="flex items-center" key={item.key}>
												<div className="bg-blue-100 text-blue-500 p-2 rounded-lg">
													<item.icon className="h-5 w-5" />
												</div>
												<div className="flex-1 ml-4 mr-4">
													<h3 className="text-sm font-medium text-gray-900">
														{item.title}
													</h3>
													<p className="text-sm text-gray-500">
														{item.description}
													</p>
												</div>

												<Switch
													color="blue"
													disabled={item.required}
													checked={consentOptions[item.key]}
													onChange={(e) =>
														setConsentOptions({
															...consentOptions,
															[item.key]: e.target.checked,
														})
													}
												/>
											</li>
										))}
									</ul>
								</div>

								<div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-3">
									<Button
										className="w-full justify-center"
										color="blueSecondary"
										onClick={onReject}
									>
										Reject all
									</Button>
									<Button
										className="w-full justify-center"
										color="blueSecondary"
										onClick={onAcceptSelected}
									>
										Accept selected
									</Button>
									<Button
										className="w-full justify-center col-span-2 sm:col-span-1"
										color="bluePrimary"
										onClick={onAccept}
									>
										Accept all
									</Button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}
