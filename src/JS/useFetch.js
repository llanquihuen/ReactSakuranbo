import { useState, useEffect } from 'react';

export const useFetch = (url) => {          
    const [loading, setLoading] = useState(true)
    const [items, setItems] = useState([])

    const getItems = async () => {
        
        const response = await fetch(url)
        const items = await response.json()
        setItems(items)
        setLoading(false)
    }

    useEffect(() => {
        getItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return {loading, items} //!!!
};
