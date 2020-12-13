import { useState, useEffect } from "react";
import Axios from 'axios';

export const useHttp = (url) => {

    const [fetchedData, setData] = useState([]);

    useEffect(() => {
        console.log('Sending Http request to URL: ' + url);
        Axios.get(url)
            .then(res => setData(res.data))
    }, []);

    return [fetchedData];
};


