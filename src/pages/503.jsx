import React from "react";
import { Button } from "../components/Button";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function ServiceUnavailable() {
	return (
		<div
			className="relative flex flex-col text-center h-screen w-full bg-top bg-cover px-4 sm:px-6 pt-40"
			style={{
				backgroundImage:
					"url(https://images.unsplash.com/photo-1550329642-58143d646f8c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)",
			}}
		>
			<p className="text-sm uppercase tracking-wide font-semibold text-indigo-300/75 mb-2">
				503 error
			</p>
			<h1 className="text-white text-5xl font-extrabold">
				We&lsquo;re working on it
			</h1>
			<p className="text-indigo-300/75 font-medium text-lg mt-4">
				The page your looking for is currently under construction
			</p>
			<div className="mt-8">
				<Button as="a" href="/" color="grayTertiary" Icon={ChevronRightIcon}>
					Go back home
				</Button>
			</div>
		</div>
	);
}
