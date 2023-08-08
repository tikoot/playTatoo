import clsx from "clsx";

export function Input({
	as: Component = "input",
	className,
	inputClassName,
	label,
	description,
	...props
}) {
	return (
		<label className={clsx("block", className)}>
			{description ? (
				<div className="flex items-center justify-between">
					<span className="float-left text-sm font-medium text-gray-700">
						{label}
					</span>
					<span className="float-right text-sm text-gray-400">
						{description}
					</span>
				</div>
			) : (
				<span className="block text-sm font-medium text-gray-700">{label}</span>
			)}
			<Component
				className={clsx(
					"text-gray-900 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cardinal-300 focus:ring focus:ring-cardinal-200/50",
					inputClassName
				)}
				{...props}
			/>
		</label>
	);
}
