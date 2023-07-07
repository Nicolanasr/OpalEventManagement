export enum eventTypes {
	Weddings = "Weddings",
	Birthdays = "Birthdays",
	MarriageProposal = "Marriage Proposal",
	BachelorParties = "Bachelor Parties",
	Baptism = "Baptism",
	Firstcommunion = "First communion",
	GenderReveal = "Gender Reveal",
	BabyShower = "Baby Shower",
	PrivateParties = "Private Parties",
	DivorceParties = "Divorce Parties",
}

export type ColorValueHex = `#${string}`;

export type PortfolioType = {
	title: string;
	slug: string;
	banner: string;
	gallery: string[];
	text: string;
	eventType: eventTypes;
	date: string;
	colors: ColorValueHex[];
};
