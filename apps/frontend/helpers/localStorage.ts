export const saveToLocal = (key: string, data: string) => {
  if (typeof window === 'object') {
    localStorage.setItem(key, data);
  }
};

export const getFromLocal = (key: string) => {
  if (typeof window === 'object') {
    return localStorage.getItem(key);
  }
};
