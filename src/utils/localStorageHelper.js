const keyName = 'board-lists';

// save to localStorage
export const save = (lists) => {
  // console.log('save to localStorage', JSON.stringify(lists, null, 2));
  localStorage.setItem(keyName, JSON.stringify(lists));
};

// load from localStorage
export const load = () => {
  let data = localStorage.getItem(keyName);
  try {
    data = JSON.parse(data);
  } catch (e) {
    console.error('Error load from localStorage', e);
  }

  return data && data.length ? data : null;
};
