import clsx from "clsx";

const colors = {
	cardinal: "peer-focus:ring-cardinal-300 peer-checked:bg-cardinal-600",
	amber: "peer-focus:ring-amber-300 peer-checked:bg-amber-600",
	blue: "peer-focus:ring-blue-300 peer-checked:bg-blue-600",
};

export function Switch({ color = "cardinal", ...props }) {
	return (
		<label className="inline-flex relative items-center cursor-pointer">
			<input type="checkbox" value="" className="sr-only peer" {...props} />
			<div
				className={clsx(
					"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-disabled:opacity-50 peer-disabled:cursor-default",
					colors[color]
				)}
			></div>
		</label>
	);
}
