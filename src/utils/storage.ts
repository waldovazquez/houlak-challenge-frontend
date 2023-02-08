export const setLocalStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getLocalStorage = (key: string) => {
    const data = localStorage.getItem(key);
    if (data) return JSON.parse(data);
    return null;
}

export const removeLocalStorage = (key: string) => {
    localStorage.removeItem(key);
}
