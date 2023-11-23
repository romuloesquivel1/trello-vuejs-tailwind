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
	},
	{
		id: uuidv4(),
		name: "Jane Doe",
		email: "jane.doe@test.local",
		password: "123456",
	},
];

export default { data, users };
