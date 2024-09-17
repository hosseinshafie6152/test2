import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data, setData] = useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Error fetching users data');
                    }
                    return res.json();
                })
                .then(result => {
                    setData(result);
                })
                .catch(err => {
                    console.log('error',err)
                });
        }, 1000);
    }, [url]);

    return { data };

}

export default useFetch