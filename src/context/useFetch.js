import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (baseUrl, endPoint, searchQuery, filterQuery, countryQuery, extraQuery) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState('')

    useEffect(() => {
        const abortCont = new AbortController();

        const getData = async (url, point, query, extraQuery) => {
            try {
                setData([]);
                setError('')
                const tempData = await axios.get(url + point + query + extraQuery, { signal: abortCont.signal })
                setData([...tempData.data]);
                setError('');
            } catch (error) {
                if (error.name === 'Abort') {
                    console.log('Component unmount')
                }
                else {
                    setError(error.message);
                }
            }
        }
        if (endPoint === 'all') {
            getData(baseUrl, endPoint, '', '');
        }
        if (searchQuery !== '' && endPoint === 'name/') {
            getData(baseUrl, endPoint, searchQuery, '');
        }
        if (filterQuery !== '' && endPoint === 'region/') {
            getData(baseUrl, endPoint, filterQuery, '');
        }
        if (countryQuery !== '' && endPoint === 'name/') {
            getData(baseUrl, endPoint, countryQuery, extraQuery);
        }

        return () => abortCont.abort();
    }, [baseUrl, endPoint, searchQuery, filterQuery, countryQuery, extraQuery])

    return { data, error };
}

export default useFetch;

