import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import clsx from "clsx";
import Router from "next/router";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { MenuItems } from "./Header";

export function NavPopover({
	isOpaque,
	display = "md:hidden",
	className,
	...props
}) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;
		function handleRouteChange() {
			setIsOpen(false);
		}
		Router.events.on("routeChangeComplete", handleRouteChange);
		return () => {
			Router.events.off("routeChangeComplete", handleRouteChange);
		};
	}, [isOpen]);

	return (
		<div className={clsx(className, display)} {...props}>
			<button
				type="button"
				className={clsx(
					"w-8 h-8 flex items-center justify-center",
					isOpaque
						? "text-gray-500 hover:text-gray-800"
						: "text-gray-100 hover:text-gray-300"
				)}
				onClick={() => setIsOpen(true)}
			>
				<span className="sr-only">Navigation</span>
				<MenuIcon className="w-6 h-6" />
			</button>
			<Dialog
				as="div"
				className={clsx("fixed z-50 inset-0", display)}
				open={isOpen}
				onClose={setIsOpen}
			>
				<Dialog.Overlay className="fixed inset-0 backdrop-blur-sm bg-black/50" />
				<div className="fixed top-4 right-4 w-full max-w-xs rounded-lg shadow-lg p-6 text-base font-semibold bg-white text-gray-500">
					<button
						type="button"
						className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-800"
						onClick={() => setIsOpen(false)}
					>
						<span className="sr-only">Close navigation</span>
						<XIcon className="w-6 h-6" />
					</button>
					<ul className="space-y-6">
						{MenuItems.map((item, idx) => (
							<li key={idx}>
								<a href={item.href} className="hover:text-cardinal-500">
									{item.name}
								</a>
							</li>
						))}
					</ul>
				</div>
			</Dialog>
		</div>
	);
}
