/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: false,
	experimental: {
		newNextLinkBehavior: false,
	  },
	async redirects() {
		return [
			{
				source: "/careers",
				destination: "/503",
				permanent: false,
			},
			{
				source: "/press",
				destination: "/503",
				permanent: false,
			},
			{
				source: "/support",
				destination: "/503",
				permanent: false,
			},
			{
				source: "/privacy",
				destination: "/503",
				permanent: false,
			},
			{
				source: "/terms",
				destination: "/503",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
