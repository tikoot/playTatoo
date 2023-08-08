import React from "react";
import { Button } from "../components/Button";
import { ChevronRightIcon } from "@heroicons/react/solid";

export default function PageNotFound() {
	return (
		<div
			className="relative flex flex-col text-center h-screen w-full bg-top bg-cover px-4 sm:px-6 pt-40 bg-indigo-900"
			style={{
				backgroundImage:
					"url(https://images.unsplash.com/photo-1613713569041-60a40cf006d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80)",
			}}
		>
			<p className="text-sm uppercase tracking-wide font-semibold text-indigo-900/75 mb-2">
				404 error
			</p>
			<h1 className="text-white text-5xl font-extrabold">Are you lost?</h1>
			<p className="text-indigo-900/75 font-medium text-lg mt-4">
				The page your looking for doesn&apos;t exist
			</p>
			<div className="mt-8">
				<Button as="a" href="/" color="grayTertiary" Icon={ChevronRightIcon}>
					Go back home
				</Button>
			</div>
		</div>
	);
}
