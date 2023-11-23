import { v4 as uuidv4 } from "uuid";
import json from "./data.json";

const data = json.map((list) => ({
	id: uuidv4(),
	title: list.title,
	items: list.items.map((item) => ({
		id: uuidv4(),
		...item,
	})),
}));

const users = [
	{
		id: uuidv4(),
		name: "Linus Torvalds",
		email: "linus.torvalds@test.local",
		password: "123456",
		location: "Helsinki, Finland",
		website: "https://en.wikipedia.org",
		joined: "April 20, 2005",
		job: "Software Engineer",
		bio: "Linus Benedict Torvalds is a Finnish-American software engineer who is the creator and, historically, the principal developer of the Linux kernel, which is the kernel for GNU/Linux operating systems and other operating systems such as Android and Chrome OS.",
	},
	{
		id: uuidv4(),
		name: "Jane Doe",
		email: "jane.doe@test.local",
		password: "123456",
		location: "New York, USA",
		website: "https://youtube.com",
		joined: "April 10, 2015",
		job: "Head of Marketing",
		bio: "Jane Doe is the head of marketing at a large company in New York. She is a great leader and a great person.",
	},
];

export default { data, users };
