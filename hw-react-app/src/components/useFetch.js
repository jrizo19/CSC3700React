import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        const abortContr = new AbortController();
        fetch(url, {signal: abortContr.signal})
            .then(resp => {
                if (!resp.ok) {
                    throw Error("Cannot fetch URL data for resource")
                }
                return resp.json()
            }).then(data => {
            setIsPending(false);
            setData(data);
            setError(null);
        }).catch((err) => {
            if (err.name === 'AbortError') {
                console.log("Fetch Aborted->")
                console.log(err.message);
            } else {
                console.log("Error:");
                console.log(err.message);
                setIsPending(false);
                setError(err.message);
            }
        })
        return () => {
            // Want to stop the fetch
            abortContr.abort();

        }
    }, [url]); // Whenever URL changes rerun
    return {data, isPending, error}
}
export default useFetch;