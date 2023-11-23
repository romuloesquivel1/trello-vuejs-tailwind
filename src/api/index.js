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

export default data;
