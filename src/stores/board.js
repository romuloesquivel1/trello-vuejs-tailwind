import { defineStore } from "pinia";
import { getItemById, getListById, getListByItemId } from "../utils/board";
import { makeItem, makeList } from "../utils/board";
import data from "../api";
// console.log('original data', data);
import { load as loadFromLocalStorage } from "../utils/localStorageHelper";


export const useBoardStore = defineStore({
	id: "board",
	state: () => ({
		lists: loadFromLocalStorage() || data,
	}),
	getters: {
		getListById: (state) => (listId) => {
			return getListById(state.lists, listId);
		},
		getListByItemId: (state) => (itemId) => {
			return getListByItemId(state.lists, itemId);
		},
		getItemById: (state) => (itemId) => {
			return getItemById(state.lists, itemId);
		},
	},
	actions: {
		addList({ title }) {
			this.lists.push(makeList(title));
		},
		removeList({ listId }) {
			const index = this.lists.findIndex((list) => list.id === listId);
			this.lists.splice(index, 1);
		},
		updateList({ id, title, items }) {
			const list = getListById(this.lists, id);
			if (list) {
				Object.assign(list, { id, title, items });
			}
		},
		replaceLists(lists = []) {
			// we can't replace whole lists because it's not reactive
			// this.lists = [...lists];
			// or the below one because it's not deep clone
			// this.lists = JSON.parse(JSON.stringify(lists));

			// must
			// 1 - clear the lists
			this.lists.splice(0, this.lists.length);
			// 2 - add new lists
			lists.forEach((list) => {
				this.lists.push(makeList(list.title, list.items, list.id));
			});
		},
		// clone the original data and replace the lists
		reset() {
			// we can't use this because it's not deep clone
			// const cloneData = [...data];

			const cloneData = JSON.parse(JSON.stringify(data));
			this.replaceLists(cloneData);
		},
		addItem({ listId, title, description, date }) {
			const list = getListById(this.lists, listId);
			list.items.push(makeItem(title, description, date, null));
		},
		updateItem({ itemId, title, description, date }) {
			const item = getItemById(this.lists, itemId);
			if (item) {
				Object.assign(item, makeItem(title, description, date, itemId));
			}
		},
		removeItem({ itemId }) {
			const list = getListByItemId(this.lists, itemId);
			list.items.splice(
				list.items.findIndex((item) => item.id === itemId),
				1
			);
		},
	},
});
