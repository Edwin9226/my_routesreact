export const persistLocalStorage =<T,> (key: string, value:T) => {
    //ver la informacion sensible que se debe guardar del user
localStorage.setItem(key, JSON.stringify({...value}));
};

export const clearLocalStorage = (key: string) => {
    localStorage.removeItem(key);
    };