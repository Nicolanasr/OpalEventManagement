import { ColorValueHex, PortfolioType, ServiceType, eventTypes } from "./types";

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

export const servicesData: ServiceType[] = [
	{
		title: "Weddings",
		body: `Offers a variety of packages to meet your specific wedding planning needs.
We set a concept, create ideas, choose venue, decorate, animate, manage and execute customized and high end weddings
All you need is <span style="font-family: var(--font-comorant);font-weight: 700;">LOVE</span> and a Wedding planner`,
		button: {
			text: "Learn more",
			url: `/services/${eventTypes.Weddings.replaceAll(" ", "")}`,
		},
		image: { url: "/jeremy-wong-weddings-K8KiCHh4WU4-unsplash.jpg", quality: 10 },
	},
	{
		title: "Birthdays",
		body: `Whatever birthday party you are organizing, and whatever budget you are working with – we have the expertise & creative skills to create your dream event.
We specialize in producing major birthday parties. Whether you are planning a small party; a bespoke nightclub for a 21st Birthday; a mini festival or a decadent soiree for a 50th.
<span style="font-family: var(--font-comorant);font-weight: 700;">We've got you covered</span>`,
		button: {
			text: "Learn more",
			url: `/services/${eventTypes.Birthdays.replaceAll(" ", "")}`,
		},
		image: { url: "/jon-tyson-CP68p1fZS8k-unsplash.jpg", quality: 10 },
	},
	{
		title: "Marriage Proposal",
		body: `A proposal event is an opportunity for an individual to create a memorable and heartfelt experience for their partner. It goes beyond simply asking the question; it is about creating an atmosphere that reflects the unique bond shared between the couple. Whether it is an intimate setting or a grand gesture, the proposal event aims to capture the essence of their love story.`,
		button: {
			text: "Learn more",
			url: `/services/${eventTypes.MarriageProposal.replaceAll(" ", "")}`,
		},
		image: { url: "/MARRY-ME-DINING-SETUP-1.jpeg", quality: 30 },
	},
	{
		title: "Bachelor Parties",
		body: `It’s your best friend’s special night. Soon he or she will be mar- ried, and you want to send them off into that new life in style. Throw a stag party or a bachelor- ette fete with planning help from We Duet All Party Planners. We’ll help you throw a party that truly comes to life.`,
		button: {
			text: "Learn more",
			url: `/services/${eventTypes.BachelorParties.replaceAll(" ", "")}`,
		},
		image: { url: "/BACHELOR-PARTY-AT-TERRACE-1.jpg", quality: 60 },
	},
	{
		title: "Baptism",
		body: `A baptism or christening is a time to welcome a new baby into the family faith.
The party that follows the ceremony is a time for celebration of new life, tradition, and the circle of family and friends.
We guarantee extraordinary ideas for your little one ’s christening, completely tailored to your wishes.
<span style="font-family: var(--font-comorant);font-weight: 700;">We can create uniquely themed and beautiful parties for your little one.</span> `,
		button: {
			text: "Learn more",
			url: `/services/${eventTypes.Baptism.replaceAll(" ", "")}`,
		},
		image: { url: "/Blue-Gold-Garden-Baptism-Party-via-Karas-Party-Ideas-KarasPartyIdeas.com19-1.jpeg", quality: 100 },
	},
	{
		title: "First communion",
		body: `The First Holy Communion is a very important occasion for people who follow the Catholic faith. It is an intensely religious event and is as important as planning parties for other milestones like a baby shower or first birthday. This is a special day for your little one and the day is often celebrated with the closest family and friends.
<span style="font-family: var(--font-comorant);font-weight: 700;">Beautiful Ideas to Celebrate Your Child’s First Communion</span>`,
		button: {
			text: "Learn more",
			url: `/services/${eventTypes.Firstcommunion.replaceAll(" ", "")}`,
		},
		image: { url: "/633df1a86846594d47705331-ubuy-online-shopping.jpg", quality: 50 },
	},

	{
		title: "Gender Reveal",
		body: `One of the most exciting parts of being pregnant is finding out whether you're expecting a little boy or girl, and a gender reveal party is a cool way to get friends and family involved.
If you're planning to find out and share the gender of your baby before he or she is born, here's how to plan a gender reveal party, as well as some creative party ideas to make your reveal even more memorable and fun.`,
		button: {
			text: "Learn more",
			url: `/services/${eventTypes.GenderReveal.replaceAll(" ", "")}`,
		},
		image: { url: "/Unique-Gender-Reveal-Ideas-2022_1000x.webp", quality: 100 },
	},
	{
		title: "Baby Shower",
		body: `A baby shower is a party of gift-giving or a ceremony that has different names in different cul- tures. It celebrates the delivery or expected birth of a child or the transformation of a woman into a mother.
Your baby is almost here and your loved ones are ready to shower them with gifts and good wishes. Sure taking your baby shower virtual is a big shift from what you had planned, but don't let that stop you. Gather your list of guests and let's get started!`,
		button: {
			text: "Learn more",
			url: `/services/${eventTypes.BabyShower.replaceAll(" ", "")}`,
		},
		image: { url: "/Magical-Baby-Shower-2.jpeg", quality: 10 },
	},
	{
		title: "Private Parties",
		body: `We Have The Creativity & Event Management Skills To Make Your Ideas Come Alive.
We Deliver A Seamless Event Management Service Catered To You & Your Ideas specially for your <span style="font-family: var(--font-comorant);font-weight: 700;">PRIVATE PARTIES</span>`,
		button: {
			text: "Learn more",
			url: `/services/${eventTypes.PrivateParties.replaceAll(" ", "")}`,
		},
		image: { url: "/Hotham-Hall-private-event-design.jpg", quality: 75 },
	},
	{
		title: "Divorce Parties",
		body: `A fun step by step guide to throwing a divorce or breakup party. ...
We take care of The Divorce Party event: How to Throw a Divorce Or Breakup Party !`,
		button: {
			text: "Learn more",
			url: `/services/${eventTypes.DivorceParties.replaceAll(" ", "")}`,
		},
		image: { url: "/6b05c4f8-e57d-4043-b315-01f342218bc4.8e248a90f2f02c5c15746e362f276403.jpeg", quality: 75 },
	},
];
