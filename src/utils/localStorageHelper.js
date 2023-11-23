export const BOARD_KEY = 'board-lists';
export const USER_KEY = 'user';

// save to localStorage
export const save = (key, value) => {
  // console.log('save to localStorage', JSON.stringify(value, null, 2));
  localStorage.setItem(key, value ? JSON.stringify(value) : null);
};

// load from localStorage
export const load = (key) => {
  let data = localStorage.getItem(key);
  try {
    data = JSON.parse(data);
  } catch (e) {
    console.error('Error load from localStorage', e);
  }

  return data || null;
};
