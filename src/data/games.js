export const games = [
	{
		title: "Dice Bingo",
		description:
			"Get ready for the ultimate bingo experience with Dice Bingo! Roll the dice and match numbers on any row to earn points. With fast-paced gameplay and exciting bonuses, Dice Bingo is perfect for players who love a good challenge. Download it today and start playing!",
		releaseYear: "2023",
		slug: "dicebingo",
		gradient: "from-sky-400 to-sky-600",
		banner: "/img/games/dicebingo/DiceBingo_Banner_1170x780.jpg",

		screenshots: [
			"/img/games/dicebingo/DiceBingo_Banner1920x1080_01.jpg",
		],

		platforms: [{
			name: 'web',
			link: "http://Dicebingo.Playtato.com"
		}],

		features: [
			{
				title: "Easy to Learn",
				description: "Win by matching your dice in any row, column, or diagonal",
				icon: "hammer",
				colorClasses: "bg-green-100 text-green-600 border-green-200",
			},
			{
				title: "Use Special Abilities",
				description: "Take things up a notch: Transform the board at any time with special tiles!",
				icon: "trees",
				colorClasses: "bg-purple-100 text-purple-600 border-purple-200",
			},
			{
				title: "Competitive Multiplayer",
				description: "Challenge your friends: compete on the same board to see who can get the highest score!",
				icon: "swords",
				colorClasses: "bg-purple-100 text-purple-600 border-purple-200",
			},
		],

	},

	{
		title: "21POP",
		description:
			"This exciting game combines the classic elements of 21 Blitz with fast-paced gameplay and colorful graphics. Race against the clock to get as close to 21 as possible-- but not over!",
		releaseYear: "2023",
		slug: "21pop",
		gradient: "from-sky-400 to-sky-600",
		banner: "/img/games/pop21/Pop21_Banner_1170x780.jpg",

		screenshots: [
			"/img/games/pop21/Pop21_Banner_1920x1080_01.jpg",
			"/img/games/pop21/Pop21_Banner_1920x1080_02.jpg",
			"/img/games/pop21/Pop21_Banner_1920x1080_03.jpg",
		],

		platforms: [{
			name: 'web',
			link: "http://pop21.playtato.com"
		}],
		video_alt: "/img/games/21pop_banner_1170x780.png",
		video_alt_link: "http://pop21.playtato.com",

		features: [
			{
				title: "Fast-paced gameplay",
				description: "Think fast and make strategic decisions to beat the clock and get as close to 21 as possible.",
				icon: "hammer",
				colorClasses: "bg-green-100 text-green-600 border-green-200",
			},
			{
				title: "Competitive Multiplayer",
				description: "Challenge your friends: compete on the same deck to see who can get the highest score!",
				icon: "swords",
				colorClasses: "bg-purple-100 text-purple-600 border-purple-200",
			},
			{
				title: "Reimagined visuals",
				description: "Classic cards 21, reimagined with vibrant colors and eye-catching animations!",
				icon: "trees",
				colorClasses: "bg-red-100 text-red-600 border-red-200",
			},
		],

	},

	{
		title: "3Gull",
		description:
			"Match seagull tiles and beat the clock in 3Gull! This exciting three-tile matching game features colorful graphics and addictive gameplay. Download it today and test your skills on the beautiful beach!",
		releaseYear: "2023",
		slug: "3gull",
		gradient: "from-sky-400 to-sky-600",
		banner: "/img/games/3gulls_banner_1170x780.png",
		video_alt: "/img/games/3gulls_banner_1170x780.png",
		platforms: [{
			name: 'web',
			link: "http://3gulls.playtato.com"
		}],
		video_alt_link: "http://3gulls.playtato.com"

	},


	{
		title: "Autumn Dynasty: Three Kingdoms",
		description:
			"The third chapter in the award winning Autumn Dynasty series visits the turbulent times of the Three Kingdoms era. Autumn Dynasty 3 Kingdoms melds classic 4X grand strategy with intense real time tactics - all through a fluid command interface designed from the ground up for mobile touchscreens.",
		releaseYear: "In Production",
		slug: "autumn-dynasty-kingdoms",
		gradient: "from-cardinal-400 to-cardinal-600",
		banner: "/img/games/autumn-dynasty-kingdoms/banner.jpg",
		video: "https://www.youtube.com/embed/_p78oC0F6rU",
		screenshots: [
			"/img/games/autumn-dynasty-kingdoms/worldmap.jpg",
			"/img/games/autumn-dynasty-kingdoms/soldiers.jpg",
			"/img/games/autumn-dynasty-kingdoms/innercity.jpg",
		],
		platforms: [{
			//name: 'web',
			//link: '#'
		}],
		features: [
			{
				title: "Full RTS experience",
				description: "Train troops, construct buildings, research technologies, fight in real time!",
				icon: "trees",
				colorClasses: "bg-green-100 text-green-600 border-green-200",
			},
			{
				title: "Revolutionary control interface",
				description: "Command your armies with brush-strokes, paint battle plans directly onto the map!",
				icon: "hammer",
				colorClasses: "bg-purple-100 text-purple-600 border-purple-200",
			},
			{
				title: "Stunning Visuals",
				description: "Beautiful, oriental-style, painted maps-- and thousands of soldiers battling on screen!",
				icon: "swords",
				colorClasses: "bg-red-100 text-red-600 border-red-200",
			},
			{
				title: "Multiplayer Battles",
				description: "Go head to head against human opponents, over Internet or Bluetooth!",
				icon: "coin",
				colorClasses: "bg-amber-100 text-yellow-600 border-amber-200",
			},
		],
		awards: [
			{
				text: "Ranked #1 in Paid Strategy Games, iPad in over 25 countries!",
			},
			{
				text: "Featured on iTunes homepage in 78 countries",
				//author: "Meredith Black",
				//authorRole: "Writer, New York Times",
			},
			{
				text: ">80 reviews covered by gaming media",
				// author: "Meredith Black",
				// authorRole: "Writer, New York Times",
			},
		],
		display: true
	},
	{
		title: "Mahjong Fury",
		description:
			"The most popular version of Malaysian Three Player Mahjong online today. Can you defeat rival challengers, unlock the 9 Dragon Gates, and become the true King Of Mahjong?",
		releaseYear: "2021",
		slug: "mahjong-fury",
		gradient: "from-emerald-400 to-emerald-600",
		banner: "/img/games/mahjong-fury/banner.jpg",
		video: "https://www.youtube.com/embed/VYVdzz7XMZo",
		platforms: [{
			name: 'ios',
			link: "https://apps.apple.com/sg/app/3p-mahjong-fury/id1535822665"
		}, {
			name: 'android',
			link: 'https://play.google.com/store/apps/details?id=com.playtato.mj3p&hl=en_SG&gl=US'
		}],
		screenshots: [
			"/img/games/mahjong-fury/screenshot-1.jpg",
			"/img/games/mahjong-fury/screenshot-2.jpg",
			"/img/games/mahjong-fury/screenshot-3.jpg",
			"/img/games/mahjong-fury/screenshot-4.jpg",
		],
		features: [
			{
				title: "Fast & Intense",
				description:
					"Finish each game in just two minutes! Will you win big or go bankrupt?",
				icon: "swords",
				colorClasses: "bg-red-100 text-red-600 border-red-200",
			},
			{
				title: "No Win Limit",
				description: "Unlimited Fans! Your skill and imagination is the only limit!",
				icon: "trees",
				colorClasses: "bg-green-100 text-green-600 border-green-200",
			},
			{
				title: "Raise the Stakes",
				description:
					"Grow the Bomb Multiplier when you Kong or Bite: the bigger the Bomb, the higher the payout!",
				icon: "hammer",
				colorClasses: "bg-purple-100 text-purple-600 border-purple-200",
			},

		],
		awards: [
			{
				text: "Top 10 in Free, Casino Category",
				author: "Apple App Store & Google Play",
				authorRole: "Malaysia, Singapore",
			},
		],
		display: true
	},
	{
		title: "Rummy Pop",
		description:
			"Penang Rummy, reimagined! Rummy Pop takes the traditional game and amps up the action, with exciting, lightning fast rounds.",
		releaseYear: "2020",
		slug: "rummy-pop",
		gradient: "from-sky-400 to-sky-600",
		banner: "/img/games/rummy-pop/banner.jpg",
		video: "https://www.youtube.com/embed/O4mY6O6rjyU",
		platforms: [{
			name: 'ios',
			link: "https://apps.apple.com/my/app/rummy-pop/id1477955619"
		}, {
			name: 'android',
			link: 'https://play.google.com/store/apps/details?id=com.autumninteractive.myrummy&hl=en_SG&gl=US'
		}],
		screenshots: [
			"/img/games/rummy-pop/screenshot-1.jpg",
			"/img/games/rummy-pop/screenshot-2.jpg",
			"/img/games/rummy-pop/screenshot-3.jpg",
			"/img/games/rummy-pop/screenshot-4.jpg",
		],
		features: [
			{
				title: "Easy to Learn",
				description: "Three simple rules to learn, infinite strategies to discover!",
				icon: "trees",
				colorClasses: "bg-green-100 text-green-600 border-green-200",
			},
			{
				title: "Three Player version",
				description: "Different strategy and tactics! Rummy on steroids!",
				icon: "hammer",
				colorClasses: "bg-purple-100 text-purple-600 border-purple-200",
			},
			{
				title: "Raise the Stakes",
				description: "Play combos to multiply the pot, reach 10X or more!",
				icon: "swords",
				colorClasses: "bg-red-100 text-red-600 border-red-200",
			},
			{
				title: "Fast & Intense",
				description: "Finish a game in just two minutes! Will you win big or go bust?",
				icon: "coin",
				colorClasses: "bg-amber-100 text-yellow-600 border-amber-200",
			},
		],
		awards: [
			{
				text: "Top 10 in Free, Casino Category",
				author: "Apple App Store & Google Play",
				authorRole: "Malaysia, Singapore",
			},
			// {
			// 	text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores in ex incidunt eius est consequatur beatae aliquam, natus dolorum nostrum distinctio perspiciatis quis voluptatem animi cumque. Eligendi, animi doloremque?",
			// 	author: "Meredith Black",
			// 	authorRole: "Writer, New York Times",
			// },
			// {
			// 	text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error maiores in ex incidunt eius est consequatur beatae aliquam, natus dolorum nostrum distinctio perspiciatis quis voluptatem animi cumque. Eligendi, animi doloremque?",
			// 	author: "Meredith Black",
			// 	authorRole: "Writer, New York Times",
			// },
		],
		display: true
	},
	{
		title: "FishingPop",
		description:
			"Fishing Pop is a fun and colorful fishing game that's perfect for players of all ages! Cast your line and try to catch as many fish as you can in a variety of wacky locations.",
		releaseYear: "2021",
		slug: "fishingpop",
		gradient: "from-sky-400 to-sky-600",
		banner: "/img/games/fishingpop_banner_1170x780.png",

		video_alt: "/img/games/fishingpop_banner_1170x780.png",
		video_alt_link: "http://autumninteractive.com/fishingpop",
		platforms: [{
			name: 'web',
			link: "http://autumninteractive.com/fishingpop"
		}],

	},


];
