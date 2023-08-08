import React, { useCallback, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CheckIcon, ExclamationCircleIcon } from "@heroicons/react/solid";
import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import { FacebookIcon, LinkedInIcon, TwitterIcon } from "../icons/solid";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Spinner } from "../components/Spinner";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { NextSeo } from "next-seo";

export default function Contact() {
	const [status, setStatus] = useState("idle");
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	});
	const { executeRecaptcha } = useGoogleReCaptcha();

	const handleSendForm = (token) => {
		setStatus("sending");

		fetch("/api/contact", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ...form, token: token }),
		}).then((response) => {
			if (response.ok) {
				setStatus("sent");
			} else {
				setStatus("failed");
			}

			// make form submitable again after 2 seconds
			setTimeout(() => {
				setStatus("idle");
			}, 2000);
		});
	};

	const onSubmit = useCallback(
		async (e) => {
			e.preventDefault();

			if (!executeRecaptcha) {
				setStatus("failed");
				setTimeout(() => {
					setStatus("idle");
				}, 2000);
				return;
			}

			const token = await executeRecaptcha("submit");
			handleSendForm(token);
		},
		[form, executeRecaptcha, handleSendForm]
	);

	return (
		<>
			<NextSeo
				title="Contact | Playtato"
				description="We'd love to hear from you! Send us a message about available job positions, media inquiries, technical support or something else."
			/>
			<Header darkMode={false} />
			<main className="max-w-7xl mx-auto">
				<div className="px-4 sm:px-6 py-20">
					<h1 className="text-gray-900 text-6xl font-extrabold">
						Get in touch
					</h1>
					<p className="text-lg text-gray-500 mt-6 max-w-2xl">
						We&apos;d love to hear from you! Whether it&apos;s feedback on our
						games, or collaboration opportunities, we&apos;re happy to chat!
					</p>
				</div>
				<div className="px-4 sm:px-6 pb-20">
					<div className="grid bg-gray-50 drop-shadow-xl rounded-2xl overflow-hidden grid-cols-1 lg:grid-cols-contact">
						<div className="relative bg-gradient-to-br from-cardinal-700 to-cardinal-800 p-8 w-full h-full overflow-hidden">
							<div className="relative z-10 text-gray-700">
								<h2 className="font-semibold text-base">Contact information</h2>
								{/* <p className="mt-6 text-sm">
								We&apos;d love to hear from you! Whether it&apos;s feedback on our
							games, or collaboration opportunities, we&apos;re happy to chat!
								</p> */}
								<ul className="mt-8 space-y-5">
									<li className="flex items-center">
										<MailIcon className="w-5 h-5 text-cardinal-300" />
										<a
											href="mailto:biz@playtato.com"
											className="ml-2 text-sm hover:text-cardinal-300"
										>
											biz@playtato.com
										</a>
									</li>
								</ul>
								<ul className="flex space-x-8 mt-8">
									<li>
										<a
											href="https://www.facebook.com/Playtato.Games/"
											className="text-cardinal-300 hover:text-cardinal-400"
										>
											<FacebookIcon className="w-5 h-5" />
										</a>
									</li>
								</ul>
							</div>
							<div className="absolute right-0 bottom-0 h-80 w-full bg-grid-cardinal-200/20 bg-top [mask-image:linear-gradient(130deg,transparent,black)]"></div>
						</div>
						<div className="p-8 h-full">
							<h2 className="font-semibold text-base text-gray-900">
								Send us a message
							</h2>
							<form className="mt-4 w-full">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									<Input
										type="text"
										label="First name"
										className=""
										value={form.firstName}
										onChange={(e) =>
											setForm({ ...form, firstName: e.target.value })
										}
									/>
									<Input
										type="text"
										label="Last name"
										className=""
										value={form.lastName}
										onChange={(e) =>
											setForm({ ...form, lastName: e.target.value })
										}
									/>
									<Input
										type="email"
										label="Email"
										className=""
										value={form.email}
										onChange={(e) =>
											setForm({ ...form, email: e.target.value })
										}
									/>
									<Input
										type="tel"
										label="Phone"
										className=""
										description="Optional"
										value={form.phone}
										onChange={(e) =>
											setForm({ ...form, phone: e.target.value })
										}
									/>
									<Input
										type="text"
										label="Subject"
										className="md:col-span-2"
										value={form.subject}
										onChange={(e) =>
											setForm({ ...form, subject: e.target.value })
										}
									/>
									<Input
										as="textarea"
										type="text"
										label="Message"
										className="md:col-span-2"
										description="Max. 500 characters"
										maxLength="500"
										rows="3"
										inputClassName="min-h-[42px] max-h-64"
										value={form.message}
										onChange={(e) =>
											setForm({ ...form, message: e.target.value })
										}
									/>
									<div className="md:col-span-2 flex justify-between w-full">
										<div className="text-xs">
											This site is protected by reCAPTCHA and the Google{" "}
											<a
												href="https://policies.google.com/privacy"
												className="text-cardinal-500 hover:underline font-medium"
											>
												Privacy Policy
											</a>{" "}
											and{" "}
											<a
												href="https://policies.google.com/terms"
												className="text-cardinal-500 hover:underline font-medium"
											>
												Terms of Service
											</a>{" "}
											apply.
										</div>
										<Button
											type="submit"
											color="cardinalPrimary"
											onClick={onSubmit}
											className=""
											disabled={status !== "idle"}
										>
											{status === "sending" ? (
												<>
													<Spinner className="-ml-1 mr-3 h-5 w-5 text-white" />
													Sending...
												</>
											) : status === "sent" ? (
												<>
													<CheckIcon className="-ml-1 mr-3 w-5 h-5 text-white" />
													Sent
												</>
											) : status === "failed" ? (
												<>
													<ExclamationCircleIcon className="-ml-1 mr-3 w-5 h-5 text-white" />
													Failed
												</>
											) : (
												"Submit"
											)}
										</Button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
