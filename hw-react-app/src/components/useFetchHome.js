import {useEffect, useState} from "react";

const useFetchHome = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState( null);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        console.log("URL->" + url );
        const abortContr = new AbortController();
        fetch( url, { signal : abortContr.signal })
            .then(resp => {
                if (!resp.ok){
                    throw Error("Cannot fetch URL data for resource")
                }
                console.log(resp);
                return resp.json()
            }).
        then(data => {
            setIsPending( false );
            console.log( "data=>")
            console.log( data );
            setData( data );
            setError ( null );
        }).catch( (err) => {
            if ( err.name === 'AbortError'){
                console.log( "Fetch Aborted->")
                console.log( err.message );
            } else {
                console.log("Error:");
                console.log(err.message);
                setIsPending(false);
                setError(err.message);
            }
        })
        return () => {
            console.log( "Clean up");
            // Want to stop the fetch
            abortContr.abort();

        }
    }, [ url ] ); // Whenever URL changes rerun
    return {data, isPending, error}
}
export default useFetchHome;