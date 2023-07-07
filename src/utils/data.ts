import { ColorValueHex, PortfolioType, eventTypes } from "./types";

export const portfolioData: PortfolioType[] = [
	{
		title: "aJeremy + wong",
		slug: "jeremy-young",
		banner: "/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg",
		gallery: [
			"/16 9 example.jpeg",
			"/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg",
			"/jon-tyson-CP68p1fZS8k-unsplash.jpg",
			"https://picsum.photos/1920/1080",
			"https://picsum.photos/500/500",
			"https://picsum.photos/500/700",
			"https://picsum.photos/501/700",
			"https://picsum.photos/1080/1920",
		],
		text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut officiis itaque nulla consequatur ipsum. Aperiam consectetur repudiandae dicta, sint a qui, reiciendis quidem aliquam error, rerum provident eum neque facere.`,
		eventType: eventTypes.Weddings,
		date: new Date("1/2/2023").toString(),
		colors: ["#ffffff", "#000000"],
	},
	{
		title: "bJeremy + wong 2",
		slug: "jeremy-young-2",
		banner: "/Hotham-Hall-private-event-design.jpg",
		gallery: [],
		text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut officiis itaque nulla consequatur ipsum. Aperiam consectetur repudiandae dicta, sint a qui, reiciendis quidem aliquam error, rerum provident eum neque facere.`,
		eventType: eventTypes.Weddings,
		date: new Date("2/2/2023").toString(),
		colors: ["#f0f0f0", "#000000"],
	},

	{
		title: "16 / 9 example image",
		slug: "16-9-example-image",
		banner: "/16 9 example.jpeg",
		gallery: [
			"https://picsum.photos/1920/1080",
			"https://picsum.photos/1921/1081",
			"https://picsum.photos/1081/1921",
			"https://picsum.photos/2000/2000",
			"https://picsum.photos/1921/1082",
			"https://picsum.photos/1921/1083",
			"https://picsum.photos/1083/2001",
			"https://picsum.photos/1083/2000",
		],
		text: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut officiis itaque nulla consequatur ipsum. Aperiam consectetur repudiandae dicta, sint a qui, reiciendis quidem aliquam error, rerum provident eum neque facere.`,
		eventType: eventTypes.BachelorParties,
		date: new Date("2/2/2022").toString(),
		colors: ["#f0f0f0"],
	},
];
