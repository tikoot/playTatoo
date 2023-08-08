import React from "react";
import clsx from "clsx";

const sizes = {
	md: "py-3 px-4 rounded-lg text-sm font-semibold",
	lg: "py-4 px-12 rounded-lg text-sm font-semibold",
	round: "h-9 rounded-full text-sm font-semibold px-3",
};

const colors = {
	bluePrimary: [
		"focus:ring-2 bg-blue-600 text-gray-100 hover:bg-blue-500 hover:text-white focus:ring-blue-300",
		"text-gray-100 group-hover:text-white",
	],
	blueSecondary: [
		"bg-blue-100 text-blue-600 hover:bg-blue-200 hover:text-blue-700 focus:ring-blue-600",
		"text-blue-300 group-hover:text-blue-400",
	],
	amberPrimary: [
		"focus:ring-2 bg-amber-600 text-white hover:bg-amber-500 ring-offset-2 focus:ring-amber-500",
		"text-gray-100 group-hover:text-white",
	],
	amberSecondary: [
		"bg-amber-100 text-amber-700 hover:bg-amber-200 hover:text-amber-700 focus:ring-amber-600",
		"text-amber-300 group-hover:text-amber-400",
	],
	cardinalPrimary: [
		"focus:ring-2 bg-cardinal-600 text-gray-100 hover:bg-cardinal-500 hover:text-white focus:ring-cardinal-300",
		"text-gray-100 group-hover:text-white",
	],
	cardinalSecondary: [
		"bg-cardinal-100 text-cardinal-600 hover:bg-cardinal-200 hover:text-cardinal-700 focus:ring-cardinal-600",
		"text-cardinal-300 group-hover:text-cardinal-400",
	],
	grayPrimary: [
		"focus:ring-2 bg-gray-700 text-gray-100 hover:bg-gray-600 hover:text-white focus:ring-gray-500",
		"text-gray-500 group-hover:text-gray-400",
	],
	graySecondary: [
		"bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 focus:ring-gray-500",
		"text-gray-300 group-hover:text-gray-400",
	],
	grayTertiary: [
		"bg-white/0 hover:bg-white/20 ring-1 ring-white/25 hover:ring-white/40 text-gray-100",
		"text-gray-100 group-hover:text-white",
	],
};

export function Button({
	children,
	as = "button",
	color = "cardinalSecondary",
	size = "md",
	className,
	Icon,
	reverse,
	...props
}) {
	const Component = as;
	const colorClasses = typeof color === "string" ? colors[color] : color;

	return (
		<Component
			className={clsx(
				"group inline-flex items-center whitespace-nowrap focus:outline-none focus:ring-2 text-center",
				sizes[size],
				colorClasses[0],
				className
			)}
			{...props}
		>
			{!reverse && children}
			{Icon && (
				<Icon
					className={clsx(
						"h-5 w-5",
						reverse ? "mr-2" : "ml-2",
						colorClasses[1]
					)}
				/>
			)}
			{reverse && children}
		</Component>
	);
}
