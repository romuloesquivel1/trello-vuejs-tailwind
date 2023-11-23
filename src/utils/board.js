import { v4 as uuidv4 } from "uuid";

export function makeItem(title, description, date, id = null) {
	id = id || uuidv4();
	return { id, title, description, date };
}

export function makeList(title, items = [], id = null) {
	id = id || uuidv4();
	return { id, title, items };
}

export function getListById(lists, listId) {
	return lists.find((list) => list.id === listId);
}

export function getListByItemId(lists, itemId) {
	return lists.find((list) => list.items.find((item) => item.id === itemId));
}

export function getItemById(lists, itemId) {
	const list = lists.find((list) => list.items.find((item) => item.id === itemId));
	if (list) {
		return list.items.find((item) => item.id === itemId);
	}
}

export function getIndexOfItemById(lists, itemId) {
	const list = lists.find((list) => list.items.find((item) => item.id === itemId));
	if (list) {
		return list.items.findIndex((item) => item.id === itemId);
	}
}
