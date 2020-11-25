import { useState, useEffect } from 'react' 

//utilize localStorage, returns the localcolors and a function to set them
function useLocalStorage(key, initialValue = [{ name: "red", code: "#fc0f03" }]){
    if (localStorage.getItem(key)) {
        initialValue = JSON.parse(localStorage.getItem(key))
    }
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue]
}

export default useLocalStorage;