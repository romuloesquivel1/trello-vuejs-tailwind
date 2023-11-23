// userStore.js
import { defineStore } from 'pinia';
import api from '../api/index';
import { load as loadFromLocalStorage, USER_KEY } from '../utils/localStorageHelper';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: loadFromLocalStorage(USER_KEY) || null,
  }),
  actions: {
    login(email, password) {
      if (email && password) {
        const user = api.users.find(
          (user) => user.email === email && user.password === password
        );
        if (user) {
          this.user = user;
          return true;
        }
      }

      return false;
    },
    logout() {
      this.user = null;
    },
  },
});
